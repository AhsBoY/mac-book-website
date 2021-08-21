// Selective Product cost 
function getProductCost(product, price){
    const productCost = document.getElementById(product + "-cost");
    const updatedCost =  price;
    productCost.innerText = updatedCost
    calculation ()
}
// get product total
function getTotal(product){
    const extraCost = parseInt(document.getElementById(product + "-cost").innerText)
    return extraCost 
}
// Calculating Total Price
function calculation (){
    const basePrice = getTotal("base")
    const memoryCost = getTotal("memory") 
    const storageCost = getTotal("storage") 
    const deliveryCost = getTotal("delivery") 
    const totalCost = basePrice + memoryCost + storageCost + deliveryCost;
    document.getElementById("total-price").innerText = totalCost
    document.getElementById("updated-total-cost").innerText = totalCost
}

document.getElementById("memory-slecetion-first").addEventListener("click", function(){
    getProductCost("memory",0);
})
document.getElementById("memory-slecetion-second").addEventListener("click", function(){
    getProductCost("memory",180);
})
document.getElementById("storage-selection-first").addEventListener("click", function(){
    getProductCost("storage",0);
})
document.getElementById("storage-selection-second").addEventListener("click", function(){
    getProductCost("storage",100);
})
document.getElementById("storage-selection-third").addEventListener("click", function(){
    getProductCost("storage",180);
})
document.getElementById("delivery-selection-first").addEventListener("click", function(){
    getProductCost("delivery",0);
})
document.getElementById("delivery-selection-second").addEventListener("click", function(){
    getProductCost("delivery",20);
})
