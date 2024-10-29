
const stringForm = document.getElementById('string-from');

stringForm.addEventListener('submit',checkPallindrome)


function checkPallindrome(event){

    event.preventDefault()

    const string = document.getElementById('string').value

    const smallCaseString = string.toLowerCase();

    const reversedString= smallCaseString.split('').reverse().join('');

    const resultString = document.getElementById('result');
    if (smallCaseString === reversedString){
        resultString.style.color='green'
        resultString.innerText='String is Pallindrome '
    }else{
        resultString.style.color='red'
         resultString.innerText='String is not Pallindrome '
    }



} 