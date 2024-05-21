let rslt = document.querySelector(".rslt");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");

let a = 0;
inc.addEventListener('click', function(){
    if(a===5){
        alert("Limited..!!");
    }else{
        a++;
        rslt.innerHTML= a;
    }
});

let b=0;
dec.addEventListener('click', function(){
    if(a<1){
        alert("Limited..!!");
    }else{
        a--;
        rslt.innerHTML= a;
    }
});

