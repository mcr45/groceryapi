/* https://spoonacular.com/productImages/{ID}-{SIZE}.{TYPE} */


let url= sessionStorage.getItem('link') + '?apiKey=4e35b7b843f549b4b8ba014950f4dbc7'
/* let imgurl = sessionStorage.getItem('link') +`-312x231.jpg` */
let stid = sessionStorage.getItem('link')
console.log(stid)
let idur = `https://spoonacular.com/productImages/${stid}-312x231.jpg`

document.querySelector('.main img').src = idur