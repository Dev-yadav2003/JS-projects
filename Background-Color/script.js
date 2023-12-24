const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")
const home=document.querySelector('.btn1')
home.addEventListener('click',function(color){
    console.log(color)
    body.style.backgroundColor="white"
})

buttons.forEach(function(button){
    button.addEventListener('click',function(e){

    if(e.target.id==='color-btn1'){
     body.style.backgroundColor= "yellow";
    }
    if(e.target.id==='color-btn2'){
     body.style.backgroundColor= "rgb(59, 222, 240)";
    }
    if(e.target.id==='color-btn3'){
     body.style.backgroundColor= "blue";
    }
    if(e.target.id==='color-btn4'){
     body.style.backgroundColor= "rgb(171, 171, 171)";
    }
    })
})