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

let $toggleCard = false;
let toggleCard = function(){
    let $card = document.querySelector('.card');
    if($toggleCard === false){
        $card.style.width='120%';
        $card.style.margin='40%';
        $toggleCard =true;
    }else if($toggleCard ===true){
        $card.style.width='100%';
        $card.style.margin='20%';
        $toggleCard =false;
    }else{
        $card.style.width='100%';
        $card.style.margin='20%';
        $toggleCard =false;
    }
    
}
let $toggleTab1 = false;
let tab1 = function(){
    
    let $tab1 = document.querySelector('.tab1');
    let $tab2 = document.querySelector('.tab2');
    let $tab3 = document.querySelector('.tab3');
    let $tab4 = document.querySelector('.tab4');

    if($toggleTab1 ===false){
        $tab1.style.visibility='visible';
        $tab2.style.visibility='hidden';
        $tab3.style.visibility='hidden';
        $tab4.style.visibility='hidden';

        document.querySelector('.tab').value = $tab1;
        $toggleTab1 = true;
        $toggleTab2 = false;
        $toggleTab3 = false;
        $toggleTab4 = false;
    }else if($toggleTab1 ===true){
        $tab1.style.visibility='hidden';
        $tab2.style.visibility='hidden';
        $tab3.style.visibility='hidden';
        $tab4.style.visibility='hidden';
        $toggleTab1 = false;
        $toggleTab2 = true;
        $toggleTab3 = true;
        $toggleTab4 = true;
    }

}

let $toggleTab2 = false;
let tab2 = function(){
    
    let $tab1 = document.querySelector('.tab1');
    let $tab2 = document.querySelector('.tab2');
    let $tab3 = document.querySelector('.tab3');
    let $tab4 = document.querySelector('.tab4');


    if($toggleTab2 ===false){
        $tab1.style.visibility='hidden';
        $tab2.style.visibility='visible';
        $tab3.style.visibility='hidden';
        $tab4.style.visibility='hidden';
        document.querySelector('.tab').innerHTML = $tab2;
        $toggleTab2 = true;
        $toggleTab1 = false;
        $toggleTab3 = false;
        $toggleTab4 = false;
    }else if($toggleTab2 ===true){
        $tab1.style.visibility='hidden';
        $tab2.style.visibility='hidden';
        $tab3.style.visibility='hidden';
        $tab4.style.visibility='hidden';
        $toggleTab2 = false;
        $toggleTab1 = true;
        $toggleTab3 = true;
        $toggleTab4 = true;
    }

}
let $toggleTab3 = false;
let tab3 = function(){
    
    let $tab1 = document.querySelector('.tab1');
    let $tab2 = document.querySelector('.tab2');
    let $tab3 = document.querySelector('.tab3');
    let $tab4 = document.querySelector('.tab4');

    if($toggleTab3 ===false){
        $tab1.style.visibility='hidden';
        $tab2.style.visibility='hidden';
        $tab3.style.visibility='visible';
        $tab4.style.visibility='hidden';
        $toggleTab3 = true;
        $toggleTab1 = false;
        $toggleTab2 = false;
        $toggleTab4 = false;
    }else if($toggleTab3 ===true){
        $tab1.style.visibility='hidden';
        $tab2.style.visibility='hidden';
        $tab3.style.visibility='hidden';
        $tab4.style.visibility='hidden';
        $toggleTab3 = false;
        $toggleTab1 = true;
        $toggleTab2 = true;
        $toggleTab4 = true;
    }

}
let $toggleTab4 = false;
let tab4 = function(){
    
    let $tab1 = document.querySelector('.tab1');
    let $tab2 = document.querySelector('.tab2');
    let $tab3 = document.querySelector('.tab3');
    let $tab4 = document.querySelector('.tab4');

    if($toggleTab4 ===false){
        $tab1.style.visibility='hidden';
        $tab2.style.visibility='hidden';
        $tab3.style.visibility='hidden';
        $tab4.style.visibility='visible';
        $toggleTab4 = true;
        $toggleTab1 = false;
        $toggleTab2 = false;
        $toggleTab3= false;
    }else if($toggleTab4 ===true){
        $tab1.style.visibility='hidden';
        $tab2.style.visibility='hidden';
        $tab3.style.visibility='hidden';
        $tab4.style.visibility='hidden';
        $toggleTab4 = false;
        $toggleTab1 = true;
        $toggleTab2 = true;
        $toggleTab3 = true;
    }

}