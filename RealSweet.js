//document.cookie = "homePage=loadAction; expires=Wed, 14 Dec 2022 12:00:00 UTC; path=/";
document.cookie = "MySession=CreateCookie; path=/";



const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector("button");

acceptBtn.onclick = ()=>{
    document.cookie = "CookieSweets = SET; expires=16 Dec 2022 12:00:00 UTC; path=/"
      if(document.cookie){ //if cookie is set
        cookieBox.classList.add("hide"); //hide cookie box
      }else{ //if cookie not set then alert an error
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
      }
    }
    let checkCookie = document.cookie.indexOf("CookieSweets = SET"); //checking our cookie
    //if cookie is set then hide the cookie box else show it
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
/*
const cookieBox = document.querySelector(".cookie-container"),
buttons = document.querySelectorAll(".cookie-btn");

const executeCodes = () => {
     cookieBox.classList.add("show");
    
};

window.addEventListener("load",executeCodes);*/
    /* 
 buttons.forEach(buttons => { 
        buttons.addEventListener('click',() => {
            cookieBox.classList.remove("show");

            if(buttons.id == "button_btn"){
                document.cookie = "Mycookie = Random; 16 Dec 2022 12:00:00 UTC; path=/"
            }

        });
    });
*/

//used for deleting the cookie
//document.cookie = "Sweets=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";