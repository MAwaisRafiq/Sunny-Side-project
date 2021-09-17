const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const navigation = document.getElementById("navigation");
const body = document.getElementById("body");


var open = false;

Popup_Mobile_Menu(open);

hamburger.addEventListener("click",x =>
{
    open = !open;
    Popup_Mobile_Menu(open);
})




function Popup_Mobile_Menu(state){
    if(state === false)
    {
        if(body.classList.contains("overflow__hidden"))
        {
            body.classList.remove("overflow__hidden");
        }
        if (overlay.classList.contains("overlay"))
        {
            overlay.classList.remove("overlay");
        }
        if(navigation.classList.contains("mobile__menu"))
        {
            navigation.classList.remove("mobile__menu");
            navigation.classList.add("mobile__toggle");
        }
        

    }else
    {
        if(!body.classList.contains("overflow__hidden"))
        {
            body.classList.add("overflow__hidden");
        }
        if (!overlay.classList.contains("overlay"))
        {
            overlay.classList.add("overlay");
        }
        if(navigation.classList.contains("mobile__toggle"))
        {
            navigation.classList.add("mobile__menu");
            navigation.classList.remove("mobile__toggle");
        }
       
    }
}