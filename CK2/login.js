let username = document.getElementById("username1")
let password = document.getElementById("password1")
let btn = document.getElementById("btn1")
let LIST = JSON.parse(localStorage.getItem("Register_user"))
let data_user =[]
let error_box = document.getElementById("error-box")
let error_p = document.getElementById("error-p")


btn.addEventListener("click", function(){

    if(CheckUser(username.value)==true && CheckPass(password.value)==true){

        localStorage.setItem("Current-login", username.value)


        username.value=""
        password.value=""


        error_box.style.display="block"
            error_box.style.backgroundColor="lightgreen"
            error_p.style.color="green"
            error_p.innerHTML ="Success : You have created an account!" 
        document.location="tin.html"
    }
    else if ( username.value == ""){
        error_box.style.display="block"
        error_p.innerHTML ="Warning : You must fill Username!"
    }
    else if ( password.value == ""){

        error_box.style.display="block"
            error_p.innerHTML ="Warning : You must fill Password !" 
    }
    else if ( CheckUser(username.value) != true){
        error_box.style.display="block"
            error_p.innerHTML ="Warning : Wrong username !" 
    }
    else if ( CheckPass( password.value) != true){
        error_box.style.display="block"
            error_p.innerHTML ="Warning : Wrong password !" 
    }



})




function CheckUser(){
    
    for ( i = 0 ; i < LIST.length ; i ++){
        if ( username.value == LIST[i].Username){
            return true
        }
    }
}
console.log(CheckUser())

function CheckPass(){
    for( i = 0 ; i < LIST.length; i++){
        if( password.value == LIST[i].Password){
            return true
        }
        
    
    
    }
    }
    
    
    let hidden = document.getElementById("hidden")
    let hidden_img = document.getElementById("hidden_img")
    let box1 = document.getElementById("box_blur")
    let box2 = document.getElementById("p_blur")
    
    
    hidden.style.display="none"
    
    
    document.getElementById('btn').addEventListener("click", function(){
    
        if(hidden.style.display=="none"){
            hidden.style.display="block"
            box1.style.filter= "blur(5px)"
            box2.style.filter= "blur(5px)"
            
        }else{
            hidden.style.display="none"
            box1.style.filter = ""
            box2.style.filter = ""
        }
    })