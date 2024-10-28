
const tableForm = document.getElementById('multiplicationTableForm');

tableForm.addEventListener('submit',getMultiplicaitonTable)

function getMultiplicaitonTable(events){
    events.preventDefault()

    const givenNumber  = document.getElementById('number').value ;
    const resultPrint = document.getElementById('display')

    for(let num =1 ; num <=10;num++){
        const span = document.createElement('span')
        span.innerHTML = num + " * " + givenNumber + " = " + givenNumber*num +"<br>"
        resultPrint.appendChild(span);
    }
    
}


const mathsForm = document.getElementById('form')



mathsForm.addEventListener('submit',sumOfOddNumbers)

function sumOfOddNumbers(events){
    events.preventDefault()

    const givenLimit = document.getElementById('limit').value
    const result = document.getElementById('result')

    let sumOfOddNumber = 0;
    for (let num= 1; num <=givenLimit;num ++){
        if(num %2 !==0){
            sumOfOddNumber += num;
        }
    }
    result.innerText ="Sum of Odd Numbers :" + sumOfOddNumber;
    
}

for(let firstLoop = 1 ;firstLoop <=5; firstLoop++){
    let row = '';
    for(let secondLoop =1 ;secondLoop<=firstLoop ;secondLoop++){
        row += secondLoop + ' ';
    }
    console.log(row); 
}