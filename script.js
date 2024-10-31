const sortArray =[]
const arrayForm = document.getElementById('array-form')


arrayForm.addEventListener('submit',myFunction)

function myFunction(events){
    events.preventDefault();
    const arraySize = document.getElementById('array-size').value

    const array =[]
    const arrayTwo = []


    acceptArrya(array,arraySize)
    acceptArrya(arrayTwo,arraySize)

    console.log('first array')
    displayArray(array)
    console.log('second array')
    displayArray(arrayTwo)

    
}



function acceptArrya(array,length){
    for(let i=0;i< length;i++){
        array[i] =[]
        for(let j=0;j<length;j++){
            array[i][j] = parseInt(prompt('Enter value'))
        }
    }
}


function displayArray(mainArray){
    for (let i=0;i < mainArray.length ;i++){
        let row =''
        for(let j=0;j<mainArray.length;j++){
            row +=mainArray[i][j] + ' '

        }
        console.log(row)
    }
}