
var submit = document.querySelector("#submit")
submit.addEventListener("click", function(event){
    var username = document.querySelector("#userEmail").value;
    var userpassword = document.querySelector("#userPassword").value;
    event.preventDefault();
    if(username === "admin" && userpassword === "admin"){
        console.log("mar gaya madarChod")
        window.location.replace("https://shaheer-portfolio22.web.app/")
    }

    if(username !=="admin" && userpassword !=="admin"){
        alert("Invalid Credential")
    }
        else if(username !=="admin"){
            alert("wrong user name")
        }
       
        
        else if(userpassword !=="admin"){
            alert("wrong user password")
        }

})