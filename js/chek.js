const container = document.querySelector('.contact_form')
const buttons = container.querySelector('button')
const checkbox = container.querySelector('input[type="checkbox"]')
const shtuka = container.querySelector('.checkbox label')

console.log(shtuka)
checkbox.addEventListener('input',() =>{
    if(checkbox.checked){
buttons.disabled = false
    }
    else{
        buttons.disabled = true
    }
  console.log(buttons.disabled)
})