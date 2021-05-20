const button= document.querySelector('.map_button')
const firstPopup = document.querySelector('.hidden_img1')
const secondPopup = document.querySelector('.hidden_img2')

button.addEventListener('click',()=>{
    console.log('ti pidr')
firstPopup.classList.toggle('hidden');
secondPopup.classList.toggle('hidden');
})

console.log(secondPopup)