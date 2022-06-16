function typeWriter(el){
    const txtarr = el.innerHTML.split('');
    el.innerHTML = '';
    txtarr.forEach((letra,i) => {
       console.log(i) 
       setTimeout(() => el.innerHTML += letra, 75 * i)
    });
}
let a = '<h1>COSTA</h1>'
const title = document.querySelector("#write");
typeWriter(title)



//getting avatar_url frrom GitHub
const api = "https://api.github.com/users/geraldotech";

async function getimg(url){
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    if(response){
        show(data)
    }
}

getimg(api);

function show(data){
    document.getElementById("myavatar").src = `${data.avatar_url}`;
    console.log( `${data.avatar_url}`)
}