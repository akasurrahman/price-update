document.getElementById("apply-btn").addEventListener("click", function (event) {
  let price = document.getElementById("price").innerText;
  let percentage = 30 / 100;
  let discount = parseFloat(price) * percentage;
  //
  let hidden = document.getElementById("hidden");
  let h1 = document.createElement("h1");
  discount = h1.innerHTML = `
    <h1 class=" bg-purple-500 text-4xl py-5 mb-5">Current Price : $${discount}</h1>
    `;
  hidden.appendChild(h1);
  
});
