let username;
let password;


function login(){

username=document.getElementById("username").value;
password=document.getElementById("password").value;


if((username=="saniya")&&(password=="123"))
{
    alert("login successful");
}
else
{
alert("login fail");
}

}
