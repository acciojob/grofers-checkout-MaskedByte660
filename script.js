const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	//to get total value
	let prices = document.querySelectorAll(".price");
	let sum =0;

	prices.forEach((price)=>{
		sum = sum + parseInt(price.textContent)
	})

	
	let newRowExist  = document.getElementById("ans");
	
	
	if(!newRowExist){
		let newRow = document.createElement("tr");
		newRow.id ="ans";
		let newCell = document.createElement("td");
		newCell.textContent =`Total Price = ${sum}`
		newRow.append(newCell);
		document.querySelector("table").append(newRow);
	}
	
	//create a row and add the total price
  
};

getSumBtn.addEventListener("click", getSum);

