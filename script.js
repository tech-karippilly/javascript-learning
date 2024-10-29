const sortArray =[]
const evenArrayForm = document.getElementById('even-array-form')

const arrayDisply = document.getElementById('array-display')

evenArrayForm.addEventListener('submit',createArray)

function createArray(event){
    event.preventDefault();

    const arraySize = document.getElementById('array-size')

    for (let i=0;i <arraySize.value ;i++){
        let input = prompt(`Array Elemet ${i+1}`)
        if (input !== null) sortArray.push(input)
    }
    
    const arrayDisplay = document.createElement('p')
    arrayDisplay.innerHTML = sortArray.toString()
    arrayDisply.appendChild(arrayDisplay)

    const heading = document.createElement('h1')
    heading.innerText='Sorted Array Decending Order';


   
    const p = document.createElement('p')
    p.innerHTML = sortArray.sort((a,b)=>b-a)
    

   
    arrayDisply.appendChild(p)
    arrayDisplay.appendChild(heading)


}