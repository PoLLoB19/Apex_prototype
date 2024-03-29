// function cat(){
//   let addcart = document.querySelector('.java');
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
for (let Element of addcart) {
  Element.addEventListener('click', () => {
    console.log('hi');
  });
}
