const blog_topic = { 
    "Arson":0,
    "Personal":1,
    "Other":2

}


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

function blog_post_page_icon(Title_input,Post_content,date_posted,blog_topic_){
    var blog_image = "CSS/Image_assets/icon/Arson_icon.png";

    // if (blog_topic_ == blog_topic["Arson"]){
    //     blog_image = "./CSS"

    // }
    // if (blog_topic_ == blog_topic["Personal"]){

    // }
    // if (blog_topic_ == blog_topic["Others"]){

    // }
    const blog_post_button = document.createElement("button");
    const blog_container_1 = document.createElement("div");
    const basic_div_element = document.createElement("div")
    const basic_table_element = document.createElement("table");
    const basic_td_element = document.createElement("td");
    const basic_tr_element = document.createElement("tr");
    const basic_img_element = document.createElement("img");
    var outer_tr = basic_tr_element.cloneNode(false);
    var outer_td = basic_td_element.cloneNode(false);
    outer_tr.classList.add("blog_item");
    outer_tr.append(outer_td);
    outer_td.append(blog_post_button);
    blog_post_button.classList.add("blog_button");
    blog_container_1.classList.add( "blog_post");
    blog_post_button.append(blog_container_1);
    blog_container_1.append(basic_table_element);
    basic_table_element.append(basic_td_element);
    basic_td_element.append(basic_div_element);
    basic_img_element.setAttribute("src",blog_image);
    basic_div_element.append(basic_img_element);
    var inner_td_1 = basic_td_element.cloneNode(false);
    var inner_table_1 = basic_table_element.cloneNode(false);
    var inner_td_1 = basic_td_element.cloneNode(false);
    var inner_td_2 = basic_td_element.cloneNode(false);
    var inner_h3 = document.createElement("h3");
    inner_td_1.setAttribute("style","text-align: left;");
    inner_table_1.classList.add("blog_half_2");
    blog_container_1.append(inner_td_1);
    inner_td_1.append(inner_h3);
    inner_h3.innerText = "lorem ipsum...";
    
    
    document.getElementById("page_arrangment").append(outer_tr);
}