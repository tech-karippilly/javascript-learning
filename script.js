

const library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
]

const dispayDiv = document.getElementById('display-book')

const completedList = document.createElement('ol')
const pendingList = document.createElement('ol')

library.forEach((book)=>{
    if(book.readingStatus){
        const li = document.createElement('li')
        li.innerText = `Already read  ${book.title} by ${book.author}`
        completedList.appendChild(li)
    }else{
        const li = document.createElement('li')
        li.innerText = `You still need to read  ${book.title} by ${book.author}`
        pendingList.appendChild(li)
    }
})
const compleHeading =  document.createElement('h1')
compleHeading.innerText='Completed Reading';

const pendingHeading =  document.createElement('h1')
pendingHeading.innerText='Pending Reading'

dispayDiv.appendChild(compleHeading)
dispayDiv.appendChild(completedList)
dispayDiv.appendChild(pendingHeading)
dispayDiv.appendChild(pendingList)

