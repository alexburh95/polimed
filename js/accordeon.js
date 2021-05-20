const tabs =document.querySelectorAll('.tabs_question')
const accordeons = document.querySelectorAll('.hidden_tab')
tabs.forEach((item) => {
item.addEventListener('click',()=>{
    console.log(item.dataset.tab)
accordeons.forEach((value) =>{
    if(item.dataset.tab === value.id){
        value.classList.toggle('hidden')
    }
})
})
})