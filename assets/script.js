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