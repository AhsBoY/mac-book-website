// Selective Product cost 
function getProductCost(product, price){
    const productCost = document.getElementById(product + "-cost");
    const updatedCost =  price;
    productCost.innerText = updatedCost
    calculation ()
}
// get Product total
function getTotal(product){
    const productCost = parseInt(document.getElementById(product + "-cost").innerText)
    return productCost 
}
// Calculating Total Price
const totalPrice = document.getElementById("updated-total-cost")
function calculation (){
    const basePrice = getTotal("base")
    const memoryCost = getTotal("memory") 
    const storageCost = getTotal("storage") 
    const deliveryCost = getTotal("delivery") 
    const totalCost = basePrice + memoryCost + storageCost + deliveryCost;
    document.getElementById("total-price").innerText = totalCost
}
// Verifying Promo Code
function promoCode(){
    const verifyCode = document.getElementById("code-area");
    const givenCode = "stevekaku"
    if(verifyCode.value == givenCode){
        const updateTotal = parseInt(totalPrice.innerText) - parseInt(totalPrice.innerText) * 0.2;
        totalPrice.innerText = updateTotal;
    }
    verifyCode.value = "";
}

// Handling Events
// memory option
document.getElementById("memory-slecetion-first").addEventListener("click", function(){
    getProductCost("memory",0);
})
document.getElementById("memory-slecetion-second").addEventListener("click", function(){
    getProductCost("memory",180);
})

// storage option
document.getElementById("storage-selection-first").addEventListener("click", function(){
    getProductCost("storage",0);
})
document.getElementById("storage-selection-second").addEventListener("click", function(){
    getProductCost("storage",100);
})
document.getElementById("storage-selection-third").addEventListener("click", function(){
    getProductCost("storage",180);
})

// delivery option
document.getElementById("delivery-selection-first").addEventListener("click", function(){
    getProductCost("delivery",0);
})
document.getElementById("delivery-selection-second").addEventListener("click", function(){
    getProductCost("delivery",20);
})

// Promocode Option
document.getElementById("apply-btn").addEventListener("click", function(){
    promoCode()
})