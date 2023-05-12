
document.getElementById("Login_button").addEventListener("click", alert(document.getElementById("login_email").value));


function login_button_handler(){
    var email = document.getElementById("login_email").value;
    let password = document.getElementById("login_pass").value;
    alert("email: "+document.getElementById("login_email").value)+" password: "+document.getElementById("login_pass").value;
    if (email){
        var error_detector = email.match(".com").length + email.match("@").length;
        if (error_detector > 2 || error_detector< 2|| error_detector === null){
           
            document.getElementById("alert_box").innerHTML = "PLEASE ENTER A VALID EMAIL! error amount: "+ error_detector;
    
        }
        alert(error_detector)

    }
    else{
        document.getElementById("alert_box").innerHTML = "PLEASE FILL OUT THE REQUIRED FIELDS.";
        return false
    }

    
    
}
