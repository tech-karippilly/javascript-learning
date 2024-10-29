const evenArray =[]
const evenArrayForm = document.getElementById('even-array-form')

const arrayDisply = document.getElementById('array-display')

evenArrayForm.addEventListener('submit',createArray)

function createArray(event){
    event.preventDefault();

    const arraySize = document.getElementById('array-size')

    for (let i=0;i <arraySize.value ;i++){
        let input = prompt(`Array Elemet ${i+1}`)
        if (input !== null) evenArray.push(input)
    }
    
    const arrayDisplay = document.createElement('p')
    arrayDisplay.innerHTML = evenArray.toString()
    arrayDisply.appendChild(arrayDisplay)

    let evenCount =0;

    for(let i= 0;i<arraySize.value;i++){
        if(evenArray[i] %2 == 0){
            evenCount +=1}
    }

   
    const p = document.createElement('p')

    

    p.innerHTML='Even Count :' + evenCount

   
    arrayDisply.appendChild(p)


}