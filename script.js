const count = document.querySelector('.display')
const minusBtn = document.querySelector('.btn1')
const plusBtn = document.querySelector('.btn2')
const changeBy = document.querySelector('.changeBy')
const resetButton = document.querySelector('.reset-btn')

minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue - changeByValue
})

plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue + changeByValue
})

resetButton.addEventListener('click' , ()=>{
    count.innerText = 0
})