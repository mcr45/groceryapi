/* https://spoonacular.com/productImages/{ID}-{SIZE}.{TYPE} */


let url= sessionStorage.getItem('link') + '?apiKey=4e35b7b843f549b4b8ba014950f4dbc7'
/* let imgurl = sessionStorage.getItem('link') +`-312x231.jpg` */
let stid = sessionStorage.getItem('link')
console.log(stid)
let idur = `https://spoonacular.com/productImages/${stid}-312x231.jpg`

document.querySelector('.main img').src = idur
let btn= document.querySelector('#dora')
btn.addEventListener('click',desire)

let url2=`https://spoonacular.com/products/${stid}`+'?apiKey=4e35b7b843f549b4b8ba014950f4dbc7'


/* document.addEventListener("DOMContentLoaded", desire); */
/* window.addEventListener('load', desire) */
/* document.addEventListener('DOMContentLoaded', function() {
    fetch(url2)
      .then(res =>{
        console.log(res)
        res.json()}) // parse response as JSON
      .then(data => {
       let p = document.querySelector('#pmain')
        p.innerHTML= data.title
        
        let ul=document.querySelector('#listel')
        let ing=data.ingredients
        console.log(ing)
        for(let i=0;i<5;i++){
            let li = document.createElement('li')
            li.innerText=ing[i].name
            ul.appendChild(li)
        }
        console.log(data)
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
 }, false); */

function desire(){


fetch(url2)
      .then(res =>{
        console.log(res)
         res.json()}) // parse response as JSON
      .then(data => {
       /* let p = document.querySelector('#pmain')
        p.innerHTML= data.title
        
        let ul=document.querySelector('#listel')
        let ing=data.ingredients
        console.log(ing)
        for(let i=0;i<5;i++){
            let li = document.createElement('li')
            li.innerText=ing[i].name
            ul.appendChild(li)
        } */
        console.log(data)
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      })};