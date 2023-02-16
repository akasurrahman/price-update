// for first card get id:
document.getElementById("btn1").addEventListener("click", function () {
  const heading1 = document.getElementById("heading1").innerText;
  const price1 = document.getElementById("price1").innerText;
  const quantity1 = document.getElementById("quantity1").innerText;


//calculation for first card Total:
const priceTotal1 = parseInt(price1) * parseInt(quantity1);

displayData1(heading1,price1,quantity1,priceTotal1);
 
});
// function-1 for card1 value:
function displayData1(heading1,price1,quantity1,priceTotal1){
     
     //create table row and include data:
     const tableContainer = document.getElementById("table-container");
     const tr = document.createElement("tr");
   //   show the data:
     tr.innerHTML = `
      <td>${1}</td>
      <td>${heading1}</td>
      <td>${price1}</td>
      <td>${quantity1}</td>
      <td>${priceTotal1}</td>
      `;
   
     tableContainer.appendChild(tr);
}