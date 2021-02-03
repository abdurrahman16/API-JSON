// console.log("hello");
// console.log(1233);

fetch('https://randomuser.me/api')
.then (res => res.json()) // res = response
.then (data =>{
    const user= data.results[0];
    const names = user.name;
    const userName = `${names.title} ${names.first} ${names.last}`
    document.getElementById('namdey').innerText =userName;
    
})

// console.log(50000);