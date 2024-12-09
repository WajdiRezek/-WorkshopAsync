const ConsoApi=async()=>{
    try {
       const res = await fetch('https://jsonplaceholder.typicode.com/users')
       const data = await res.json()

       var list = document.getElementById('rahma')

       for (let i = 0; i < data.length; i++) {
        var li = document.createElement('li')
        li.innerText = data[i].name
        list.appendChild(li)
       }
    } catch (error) {
        console.log(error)
    }
}
ConsoApi()