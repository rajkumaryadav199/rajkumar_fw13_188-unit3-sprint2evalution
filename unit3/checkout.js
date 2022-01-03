// document.querySelector("#form").addEventListener("submit", addres)

 
function getCheckout(event){
  event.preventDefault()

  let payment={
     name: document.getElementById("name").value,

     city: document.getElementById("city").value,
     mobile: document.getElementById("mobile").value,
     house: document.getElementById("house").value,
     place: document.getElementById("place").value,
     
  };

  console.log(payment)
  setTimeout(function(){
    alert(`Order succesefull for${payment.name}`)
  },5000);

    
}getCheckout(event)