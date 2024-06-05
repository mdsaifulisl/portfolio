

const nav = document.querySelector('#nav');
document.querySelector('.mml').onclick = () =>{
    nav.classList.toggle('active')
}
window.onscroll = () =>{
    nav.classList.remove('active');
}