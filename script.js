//ARRAY DECLARATION
const arryaOne =[]
const arrayTwo =[]

const arrayOneBeforeDisplay = document.getElementById('arrayOne-beforeSwap')
const arrayTwoBeforeDisplay =document.getElementById('arrayTwo-beforeSwap')

// ARRAY DISPLAY ELEMENTS DOM
const arrayOneDisplay = document.getElementById('arrayOne')
const arrayTwoDisplay =document.getElementById('arrayTwo')

//size of array
const size =5

//ARRAY INSERTION
for (let i = 0; i < size; i++) {
    const value = prompt(`Enter value ${i + 1}:`);
    if (value !== null) {
        arryaOne.push(value); 
    }
}
//ARRAY INSERTION
for (let i = 0; i < size; i++) {
    const value = prompt(`Enter value ${i + 1}:`);
    if (value !== null) {
        arrayTwo.push(value); 
    }
}

arrayOneBeforeDisplay.innerHTML ="Array One:" +arryaOne.toString()
arrayTwoBeforeDisplay.innerHTML = "Array Two:" +arrayTwo.toString()


// ARRAY SWAPPING
let temp = 0

for (let  i=0;i<arryaOne.length;i++){
    temp = arryaOne[i]
    arryaOne[i] = arrayTwo[i]
    arrayTwo[i] = temp
}

// ARRAY DISPLAY
arrayOneDisplay.innerHTML ="Array One:" +arryaOne.toString()
arrayTwoDisplay.innerHTML = "Array Two:" +arrayTwo.toString()
