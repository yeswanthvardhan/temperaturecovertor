let celcius=document.getElementById("celcius");
let farenheit=document.getElementById("farenheit");

function celToFar(){
    let output=(parseFloat(celcius.value)* 9/5)+32;
    farenheit.value=parseFloat(output.toFixed(2));
}

function farToCel(){
    let output=(parseFloat(farenheit.value)-32)* 5/9;
    celcius.value=parseFloat(output.toFixed(2));
    console.log(output);
}
