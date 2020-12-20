
let str= async (e)=>{
    e.preventDefault();
    let file=document.querySelector('form');
    console.log(file)
    let formdata= new FormData(file);
    console.log(formdata)
    let give= await fetch("ser.php",{
        method:"POST",
        body:formdata
    })

    let receive= await give.json();
    console.log(receive);

    if (receive.username){
        document.getElementById("username").classList.remove("reed");
        document.getElementById("username").classList.add("green");
    }else {
        document.getElementById("username").classList.add("reed");
        document.getElementById("username").classList.remove("green");
    }
    if (receive.pass){
        console.log("ss");
        document.getElementById("pass").classList.remove("reed");
        document.getElementById("pass").classList.add("green");
    }else {
        document.getElementById("pass").classList.add("reed");
        document.getElementById("pass").classList.remove("green");
    }
}

let main=(e)=>{
    e.stopPropagation();
    document.getElementById("frm").addEventListener("submit",str);
}

document.addEventListener("DOMContentLoaded",main)