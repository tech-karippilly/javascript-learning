const sortArray =[]
const arrayForm = document.getElementById('array-form')


arrayForm.addEventListener('submit',myFunction)

function myFunction(events){
    events.preventDefault();
    const arraySize = document.getElementById('array-size').value

    const array =[]
    const resultArray  =[]
    acceptArrya(array,arraySize)
    multiplie(array,resultArray)
    displayArray(resultArray)

}



function acceptArrya(array,length){
    for(let i=0;i< length;i++){
        const input = prompt('Enter value')
        array.push(parseInt(input))
    }
}

function multiplie(mainArray,resultArray){
    for (let i=0;i < mainArray.length ;i++){
        if (i+1 === mainArray.length) break
        resultArray[i] = mainArray[i] * mainArray[i+1]
    }
}

function displayArray(mainArray){
    const arrayDisply = document.getElementById('array-display')
    arrayDisply.innerText =mainArray
}