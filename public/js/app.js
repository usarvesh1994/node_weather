 fetch('/weather?search=boston').then((Request) => {
     Request.json().then((data) => {
         if (data.error) {
             console.log(data.error)
         } else {
             console.log(data.Location)
             console.log(data.data)
         }
     })
 })

 const weatherForm = document.querySelector('form')
 const searchValue = document.querySelector('input')
 const messageOne = document.querySelector('#message-1')
 const messageTwo = document.querySelector('#message-2')



 weatherForm.addEventListener('submit', (e) => {
     messageOne.textContent = 'Loading'
     e.preventDefault()
     url = '/weather?search=' + searchValue.value
     fetch(url).then((Request) => {
         Request.json().then((data) => {
             if (data.error) {
                 messageOne.textContent = data.error
                 // console.log(data.error)
             } else {
                 messageOne.textContent = data.Location
                 messageTwo.textContent = data.data
                 console.log(data.Location)
                 console.log(data.data)
             }
         })
     })


 })