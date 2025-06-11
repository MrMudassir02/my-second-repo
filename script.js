let btn = document.querySelectorAll(".button")
let bod = document.querySelector("body")

btn.forEach(function(button){
    console.log(button)
button.addEventListener("click",function(elem){
console.log(elem);
console.log(elem.target);
if(elem.target.id === 'grey'){
    bod.style.backgroundColor=elem.target.id
}
else if (elem.target.id ==="white")
bod.style.backgroundColor=elem.target.id

else if (elem.target.id ==="yellow")
bod.style.backgroundColor=elem.target.id

else (elem.target.id ==="blue")
bod.style.backgroundColor=elem.target.id

})
})