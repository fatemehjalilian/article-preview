const footer = document.querySelector('.card-footer');
const button = document.querySelector('.share-button');

button.addEventListener('click', ()=>{
    footer.classList.toggle('active');
});