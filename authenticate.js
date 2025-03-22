function authenticatinID(code,email){
    var indexing = email.indexOf("@");
    var username = email.slice(0,indexing);
    var domain = email.slice(indexing + 1);


    var combined = username + code + domain;

    var converted = "";
    for(let char of combined.toLowerCase()){
        if(char >= "a" && char <= "z"){
            converted += (char.charCodeAt(0)-96);
        }
       
        else if(char >= "0" && char <= "9"){
            converted += char;
        }
        else{
            converted += "1";
        }
    }


    function isPrime(num){
        if(num < 2) return false;
        for(var i = 2; i * i <= num ; i++){
            if(num % i === 0)
                return false;
        }
        return true;
    }
var finalAuthID = "";
for(var char of converted){
    if(!isPrime(Number(char))){
        finalAuthID += char;
    }
}
return finalAuthID;
}

var code = "fs39_32144";
var email = "rroy854100@gmail.com";
var authID = authenticatinID(code,email);

console.log("Authenti ID:",authID);


let apiUrl = `https://questionmapping.onrender.com/api/problem/${authID}`;

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log("API response:",data);
})
.catch(error => {
    console.error("Error:",error);
});