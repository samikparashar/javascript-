const accountId=144553 // cannot be changed 
let accountEmail ="samik@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState ; // js will use this as undefined . 
// accountId = 2
accountEmail ="sp@sp.com"
accountCity="Delhi"
console.log(accountId);


/* 
Prefer not to use var 
because of issue of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail , accountPassword , accountCity,accountState])
