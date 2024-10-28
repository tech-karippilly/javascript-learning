
const markForm = document.getElementById('passOrFailForm');

markForm.addEventListener('submit',checkResult)

function checkResult(event){
    event.preventDefault();

    const obtainedMark = document.getElementById('student-mark');

    const markDisplay = document.getElementById('mark-result');
    const markValue = parseFloat(obtainedMark.value);
    if(isNaN(markValue)){
       markDisplay.style.color='ornage';
        markDisplay.textContent ='Error::Please enter valid number'
    }else  if (parseFloat(obtainedMark.value) >= 50){
    
        markDisplay.style.color='green';
        markDisplay.textContent ='Result: Pass'
    }else{
        markDisplay.style.color='red';
        markDisplay.textContent ='Result: FAILED'
    }
}

const gradeFrom = document.getElementById('gradeForm');

gradeFrom.addEventListener('submit',checkGrande)

function checkGrande(event){
    event.preventDefault();

    const  percentage = document.getElementById('student-percentage')
    const markDisplay = document.getElementById('grade-Result');
    const markValue = parseFloat(percentage.value);
    if (isNaN(markValue) || markValue <=0){
              markDisplay.style.color='ornage';
        markDisplay.textContent ='Error::Please enter valid number'
    }else if (markValue >=90 ){
        markDisplay.style.color='green';
        markDisplay.textContent ='Grade : A' 
    }else if (markValue >=80 ){
        markDisplay.style.color='green';
        markDisplay.textContent ='Grade : B' 
    }else if (markValue >=70 ){
        markDisplay.style.color='Yellow';
        markDisplay.textContent ='Grade : C' 
    }else if (markValue >=60 ){
        markDisplay.style.color='Orange';
        markDisplay.textContent ='Grade : D' 
    }else if (markValue >=50 ){
        markDisplay.style.color='Orange';
        markDisplay.textContent ='Grade : E' 
    }else if (markValue < 50 ){
        markDisplay.style.color='Red';
        markDisplay.textContent ='Grade : D' 
    }
}

const dayFindForm = document.getElementById('dayFindForm');

dayFindForm.addEventListener('submit',findDay);

function findDay(event){
    event.preventDefault();

    const day = document.getElementById('dayNumber').value
    const resultPrint = document.getElementById('day-name')

    switch(parseInt(day)){
        case 1:
            resultPrint.innerText='Sunday'
            break
        case 2:
            resultPrint.innerText ='Monday'
            break;
        case 3:
            resultPrint.innerText ='Tuesday'
            break
        case 4:
            resultPrint.innerText ='Wednesday'
            break
        case 5:
            resultPrint.innerText ='Thursday'
            break
        case 6:
            resultPrint.innerText ='Friday'
            break
        case 7:
            resultPrint.innerText ='Saturday'
            break
        default:
            resultPrint.innerText ='Invalid Entry'
            break

    }

}