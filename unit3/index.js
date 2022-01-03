
let url="https://www.themealdb.com/api/json/v1/1/categories.php";

async function choseMenu()
{

    let list= document.querySelector("#menu").value;

    try{
        let res= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        let data= await res.json();
        
        let menu_arr=data.categories;

        appendMenu(menu_arr)
        console.log("data:",data.categories)

    }
    catch(err)
    {
        console.log("err:",err)
    }
}
choseMenu()

   function appendMenu(menu_arr){

    menu_arr.forEach(function(el)
    {
        let p=document.createElement("p")

        p.innerText=el.strCategory;

           p.onclick= function(){

            choseCateg(el)
           }
         console.log("item:", el.image)

        document.querySelector("#container").append(p)
    })
     
        
   }
   appendMenu(menu_arr)

   function choseCateg(el){

    let price=Math.floor(Math.random()*100+100)
let mainDiv=document.createElement("div")
mainDiv.setAttribute("id", "mainDiv")

let img=document.createElement("img")

    img.src=el.strCategoryThumb;
let imgDiv=document.createElement("div")
imgDiv.setAttribute("id", "imgDiv")

let priceDiv=document.createElement("div")
priceDiv.setAttribute("id", "priceDiv")
let cart= document.createElement("button")
cart.textContent="Add to cart";

let pri=document.createElement("p")
pri.innerText=`${price}`;

  imgDiv.append(img)  
priceDiv.append(pri,cart)

    mainDiv.append(imgDiv, priceDiv)
console.log(el.strCategoryThumb)
document.querySelector(".containt").append(mainDiv)

   }
   choseCateg(el)