const sortArray =[]
const arrayForm = document.getElementById('array-form')


arrayForm.addEventListener('submit',myFunction)

function myFunction(events){
    events.preventDefault();
    const arraySize = document.getElementById('array-size').value

    const array =[]
    const arrayTwo = []
    const resultArray  =[]

    acceptArrya(array,arraySize)
    acceptArrya(arrayTwo,arraySize)
    addArray(array,arrayTwo,resultArray)
    console.log('first array')
    displayArray(array)
    console.log('second array')
    displayArray(arrayTwo)
    console.log('sum of array one and array two')
    displayArray(resultArray)
}



function acceptArrya(array,length){
    for(let i=0;i< length;i++){
        array[i] =[]
        for(let j=0;j<length;j++){
            array[i][j] = parseInt(prompt('Enter value'))
        }
    }
}

function addArray(mainArray,secondArray,resultArray){
    for (let i=0;i < mainArray.length ;i++){
        resultArray[i]=[]
        for(let j=0;j<mainArray.length;j++){
            resultArray[i][j] = mainArray[i][j] + secondArray[i][j]
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