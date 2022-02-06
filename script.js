let toggleSideBar = false;
let sidebar = function(){
    let ribbon = document.querySelector(".sidebar");
    let ribbonUl = document.querySelector(".sidebar ul");

    if(toggleSideBar === false){

        ribbonUl.style.visibility='visible';
        ribbon.style.width='12%';
        toggleSideBar = true;

    }else if(toggleSideBar === true){

        ribbonUl.style.visibility='hidden';
        ribbon.style.width='0%';
        toggleSideBar = false;

    }
}

let calc = function(){

    let number1 = parseInt(document.querySelector("#number1").value);

    let number2 = parseInt(document.querySelector("#number2").value);

    let sum = number1 + number2;

    document.querySelector("#answer").innerHTML = sum;
}

let togglePassword = function(){
    let x = document.querySelector("#password");

    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password";
    }

}