const c=new IntersectionObserver((p)=>{
    p.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show-section');
        }
    });
});

const all=document.querySelectorAll('.hidden-section');
all.forEach((section)=>{
c.observe(section)});