var shoppingkart = {
    egg : 10,
    milk: 20,
    veg: 50,
    meat: 100,
    fish: 60
}
console.log(shoppingkart);

var key= Object.keys(shoppingkart);
var value= Object.values(shoppingkart);
console.log(key, value);

// for(var i=0; i < key.length; i++  ){
//     var keyName = key[i];
//     var values = shoppingkart[keyName];
//     console.log(keyName, values)
// }


for( var keyNames in shoppingkart ){
    const propertieValues = shoppingkart[keyNames];
    console.log( keyNames, propertieValues);
}
