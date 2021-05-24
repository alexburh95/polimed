const checkInput = (classname) => {
    const container = classname;
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
}

const footer_Form = document.querySelector('.footer_form')
const header_Form = document.querySelector('.header_form')
const feedback_Form = document.querySelector('.feedback_form')
checkInput(footer_Form);
checkInput(feedback_Form);
checkInput(header_Form);