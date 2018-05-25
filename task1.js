var xhr = new XMLHttpRequest();

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://shapeshift.io/rate/btc_ltc", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.response);

if (xhr.status == 200){
    console.log("rate API Test succedded")
}

xhr.open("GET", "https://shapeshift.io/marketinfo/ANT_TRST", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.response);

if (xhr.status == 200){
    console.log("marketinfo API Test succedded")
}
