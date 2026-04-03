const btn=document.getElementById('theme');
const last=localStorage.getItem('theme');
if (last==='dark'){
    document.documentElement.setAttribute('theme','dark');
    if (btn)btn.innerText='☀️Light';
}
if (btn){
    btn.addEventListener('click',function(){
        const curr=document.documentElement.getAttribute('theme');
        if (curr==='dark'){
            document.documentElement.removeAttribute('theme');
            localStorage.setItem('theme','light');
            btn.innerText='🌙Dark';

        }
        else {
            document.documentElement.setAttribute('theme','dark');
            localStorage.setItem('theme','dark');
            btn.innerText='☀️Light';
        }
    });
}