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
popupButton.addEventListener('click',() =>{

 
 
})


}
const header = document.querySelector('header')
const feedback = document.querySelector('.feedback')
console.log(feedback)
openPopupMenu(header)
openPopupMenu(feedback)