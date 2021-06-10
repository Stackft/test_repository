let mainUser = parseInt(prompt('ingrese su edad'));

if(mainUser >= 18){
    alert('eres mayor de edad');
}else{
    alert('eres menor de edad');
}

let maxUser=0;
let maxAge=0;

for(let i=1; i<4; i++){
    let user = prompt('ingrese nombre usuario '+i);
    let age = parseInt(prompt('ingrese su edad'));
    if(age > maxAge){
        maxUser=user;
        maxAge=age;
    }
}
alert(maxUser+' es el usuario mas grande con '+maxAge+' años de edad');

