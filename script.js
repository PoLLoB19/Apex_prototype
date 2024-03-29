let a = 0;
let total = 0;
const addcart = document.querySelectorAll(".add_to");

addcart.forEach(function (items) {
  items.addEventListener("click", function () {
    console.log("hi");

    let productName = items.parentElement.querySelector(".title").textContent;
    console.log(productName);
    let product_price = parseFloat(
      items.parentElement.querySelector(".taka").textContent.slice(1)
    );

    let pro_img = items.parentElement.querySelector(".imgbag").src;

    let to = document.createElement("div");

    to.innerHTML = `<div style="padding-bottom:15px; padding-left:15px "class="main_div"> <div class="img_d"><img src="${pro_img}"/></div>
    <div class="ti">
     <div>Name- ${productName}</div>  <div>Price- ${product_price}$</div></div> </div> `;
    document.querySelector(".ekhane").append(to);

    a = a + 1;
    document.querySelector(".hold").innerHTML = a;

    document.querySelector(".total_it").innerHTML = `Total items : ${a}`;

    total = total + product_price;

    document.querySelector(".sub").innerHTML = `Subtotal: $${total}`;
  });
});

function ber() {
  document.querySelector(".cart-items").classList.add("cca");
  document.querySelector(".ca").classList.add("cate");
}

function be() {
  document.querySelector(".cart-items").classList.remove("cca");
  document.querySelector(".ca").classList.remove("cate");
}

// let a = 0;

// let items = [
//   {
//     Name: "Sprint Men's Sports Shoe",
//     price: 30,
//     type: "Shoe",
//   },
//   {
//     Name: "Sprint Men's Sports Shoe",
//     price: 36,
//     type: "Shoe",
//   },
//   {
//     Name: "Sprint Men's Sports Shoe",
//     price: 28,
//     type: "Shoe",
//   },
//   {
//     Name: "Sprint Men's Sports Shoe",
//     price: 32,
//     type: "Shoe",
//   },
// ];

// function add() {
//   a = a + 1;
//   document.querySelector(".hold").innerHTML = a;

//   document.querySelector(".total_it").innerHTML = `Total items : ${a}`;
// }

// function cat(){
//   let addcart = document.querySelector('.add_to');
//   let productName = addcart.parentElement.querySelector('.title').textContent;
//   console.log(productName);
//   let product_price = addcart.parentElement.querySelector('.taka').textContent;
//   let to=  document.createElement('div');
//  to.innerHTML=`<div style="padding-bottom:15px; padding-left:15px"> <div>Name- ${[productName]}</div>  <div>Price- ${product_price}</div></div> `;
//    document.querySelector('.ekhane').append(to)

// }

// addcart.forEach(i=>{
//   i.addEventListener('click',function(){
//         document.querySelector('.ekhane').innerHTML= i.innerHTML
//   })
// })
// function af() {
//   let to=  document.createElement('div');
//    to.innerHTML=`<div style="padding-bottom:15px; padding-left:15px"> <div>Name- ${items[0].Name}</div>  <div>Price- ${items[0].price}$</div> <div>Type- ${items[0].type}</div> </div> `;
//    document.querySelector('.ekhane').append(to)

// }

// function afa() {
//   let to=  document.createElement('div');
//    to.innerHTML=`<div style="padding-bottom:15px; padding-left:15px"> <div>Name- ${items[1].Name}</div>  <div>Price- ${items[1].price}$</div> <div>Type- ${items[1].type}</div></div> `;
//    document.querySelector('.ekhane').append(to)

// }

// function afb() {
//   let to=  document.createElement('div');
//    to.innerHTML=`<div style="padding-bottom:15px; padding-left:15px">  <div>Name- ${items[2].Name}</div>  <div>Price- ${items[2].price}$</div> <div>Type- ${items[2].type}</div></div> `;
//    document.querySelector('.ekhane').append(to)

// }

// function afc() {
//   let to=  document.createElement('div');
//    to.innerHTML=`<div style="padding-bottom:15px; padding-left:15px"> <div>Name- ${items[3].Name}</div>  <div>Price- ${items[3].price}$</div> <div>Type- ${items[3].type}</div></div> `;
//    document.querySelector('.ekhane').append(to)

// }

// let total = 0;
// function jha() {
//   total = total + items[0].price;

//   document.querySelector(".sub").innerHTML = `Subtotal: $${total}`;
// }
// function jh2() {
//   total = total + items[1].price;

//   document.querySelector(".sub").innerHTML = `Subtotal: $${total}`;
// }
// function jh3() {
//   total = total + items[2].price;

//   document.querySelector(".sub").innerHTML = `Subtotal: $${total}`;
// }
// function jh4() {
//   total = total + items[3].price;

//   document.querySelector(".sub").innerHTML = `Subtotal: $${total}`;
// }
