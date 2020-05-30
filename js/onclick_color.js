function onclick_color(style,weaponID) {

    if (document.getElementById(weaponID).style.background=="rgb(255, 165, 0)"){

        button= document.getElementById(weaponID);
        button.style.background = "#ffffff";

    }

    else{
        button= document.getElementById(weaponID);
        button.style.background = "#ffa500";
    }
    
}