
const form=document.querySelector('form')
const confirm=document.getElementById('confirm');
form.addEventListener('submit',function(event){
    event.preventDefault();
    if (form.checkValidity()){
        form.style.display='none';
        confirm.style.display='block';
    }
});