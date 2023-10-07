let total = 0;

function handleCLikBtn(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target?.parentNode?.childNodes[3]?.innerText;
    const li = document?.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    const price = target?.parentNode?.childNodes[5]?.innerText.split(" ")[1];
    
    total = parseFloat(total) + parseFloat(price); 
    document.getElementById("total").innerText = total.toFixed(2) + "TK"; 
    checkButton();
}

function calculateDiscount() {
    var inputBox = document.getElementById("inputBox");
    var inputValue = parseFloat(inputBox.value);
    var productPrice =  total
    var discountPercentage = inputValue;
    var discountedPrice = (productPrice * (100 - discountPercentage)) / 100;
    var result = document.getElementById("result");
    result.innerHTML =  discountedPrice + "TK";

   var dis =  document.getElementById('discountedBlance');
   var fix = total - discountedPrice;
    dis.innerHTML = fix.toFixed(2) + "TK";

}



let buttonEnabled = false;
document.getElementById("myButton").addEventListener("click", function () {
    checkButton();
});
document.getElementById("applyButton").addEventListener("click", function () {
    checkButton();
});
function checkButton() {
    const buttons = document.getElementById("applyButton");
    if (total > 199) {
        buttons.removeAttribute("disabled");
    } else {
        buttons.setAttribute("disabled", true);
    }
    const button = document.getElementById("myButton");
    if (total > 0) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", true);
    }
}







