const displayMessage = document.getElementById('display')
const heightForm = document.getElementById('height-form')

heightForm.addEventListener('submit',myFunction)

function myFunction(event){
    event.preventDefault()

    const height = document.getElementById('height').value

   
    try{
        checkHeight(height)
    }catch(error){
        displayMessage.style.color='red'
        displayMessage.innerText=error.message
        console.log(error.message);
    }
}

function checkHeight(height){
    if (isNaN(height)) {
        throw new Error("notANumberError");
    }

    height = Number(height);

    if (height > 75) {
        throw new Error("hugeHeightError");
    }

    if (height < 1) {
        throw new Error("tinyHeightError");
    }

    displayMessage.style.color='green'
    displayMessage.innerText=height
}