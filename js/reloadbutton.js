function createreload(){

    var createbutton=document.getElementById("create")
    createbutton.innerHTML　=　"リセット";
    createbutton.onclick=new Function()
    createbutton.addEventListener("click",addevent,false)
}

function addevent(){

    window.location.reload()

}