export function save(pos){
    sessionStorage.setItem('pos',pos);
}
export function load(){
    return sessionStorage.getItem('pos');
}