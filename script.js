
const textForm  = document.getElementById('text-form')

textForm.addEventListener('submit',displayText)

function displayText(events){
    events.preventDefault()
    const textValue = document.getElementById('text').value;
    console.log(textValue)
    textForm.reset()
}

const sumForm  = document.getElementById('sum-two')
sumForm.addEventListener('submit',addition)

function addition(events){
    events.preventDefault()
    
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    const result = document.getElementById('result')

    result.innerText = parseInt(firstNumber.value) + parseFloat(secondNumber.value)
}

const simpleIntrestForm  = document.getElementById('simple-intrest');

simpleIntrestForm.addEventListener('submit',calculateSimpleIntrest)

function calculateSimpleIntrest(event){
    event.preventDefault()

    const principleAmount =document.getElementById('principle-amount');
    const intrestAmount = document.getElementById('interest-rate');
    const numberYears = document.getElementById('number-years');

    const simpleIntrestResult = document.getElementById('simple-intrest-result');

    const interest = (parseInt(principleAmount.value) * parseFloat(intrestAmount.value) * parseFloat(numberYears.value))/100
    simpleIntrestResult.textContent = interest;
    
    

}