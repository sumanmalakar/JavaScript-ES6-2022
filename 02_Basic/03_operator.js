// Dicount = (ListPrice - SellingPrice)/ListPrice * 100

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice)* 100;

console.log("Discount percentage is : "+ discountPercent);

displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + " % off")

var result = listingPrice > sellingPrice;

console.log(typeof result)