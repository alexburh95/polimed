const header = document.querySelector('header')
const feedback = document.querySelector('.feedback')
const mob_mebu_button = document.querySelector('.mob_header_btn')
const mob_menu_popup = document.querySelector('.mob_menu')
const close_menu_popup = document.querySelector('.back')

mob_mebu_button.addEventListener('click',() =>{
    mob_menu_popup.classList.remove('hidden')
})

close_menu_popup.addEventListener('click',() =>{
    mob_menu_popup.classList.add('hidden')
})

const container = header;
const buttonMob = document.querySelector('.mob_zapis');
const krest = container.querySelector('.krest');
const popup = container.querySelector('.os_popup')
const popupButton = popup.querySelector('button')

buttonMob.addEventListener('click',() =>{
    console.log('ты пидр')
popup.classList.remove('hidden')
})
krest.addEventListener('click',() =>{
popup.classList.add('hidden')
})


const openPopupMenu = (parrent) =>{


    const container = parrent;
    const button = container.querySelector('button');
    const krest = container.querySelector('.krest');
    const popup = container.querySelector('.os_popup')
    const popupButton = popup.querySelector('button')
  console.log(button)
button.addEventListener('click',() =>{
    popup.classList.remove('hidden')
})
krest.addEventListener('click',() =>{
    popup.classList.add('hidden')
})



}

console.log(feedback)
openPopupMenu(header)
openPopupMenu(feedback)



