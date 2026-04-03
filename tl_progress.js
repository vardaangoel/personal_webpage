import{save,load} from './prog.js';

const lst=document.getElementById('time');

lst.addEventListener('click', function(event) {
const btn = event.target;
 if (btn.className!='tl_button') return;
 const content = btn.nextElementSibling;
     if (btn.getAttribute('aria-expanded')==='true') {
            btn.setAttribute('aria-expanded', 'false');
            content.style.maxHeight = '0px';} 
else {btn.setAttribute('aria-expanded', 'true');
content.style.maxHeight = content.scrollHeight + 'px';
        }
    });

const prog_bar=document.getElementById('prog');
const b=document.getElementById('continue');
const con_btn=document.getElementById('con_btn');
window.addEventListener('scroll',function(){
    let max=document.documentElement.scrollHeight-window.innerHeight;
    let percent=(window.scrollY/max)*100;
    prog_bar.style.width=percent+'%';
    save(window.scrollY);
})
const pos=parseInt(load());
if (pos>200&&b){
    b.style.display='block';
    if (con_btn){
        con_btn.addEventListener('click',function(){
            window.scrollTo({top:pos,behavior:'smooth'});
            b.style.display='none';
        })
    }
}