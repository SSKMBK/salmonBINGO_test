function restorationbutton(){
    
    if(window.confirm("現在の入力内容は上書きされます。")){

        var storagedata=JSON.parse(localStorage.getItem('salmonrandomweapondata_storage'))

        var storageweapon0=document.createTextNode(storagedata[0])
        document.getElementById( "weapon0" ).innerHTML=storageweapon0.textContent;

        var storageweapon1=document.createTextNode(storagedata[1])
        document.getElementById( "weapon1" ).innerHTML=storageweapon1.textContent;

        var storageweapon2=document.createTextNode(storagedata[2])
        document.getElementById( "weapon2" ).innerHTML=storageweapon2.textContent;

        var storageweapon3=document.createTextNode(storagedata[3])
        document.getElementById( "weapon3" ).innerHTML=storageweapon3.textContent;

        var storageweapon4=document.createTextNode(storagedata[4])
        document.getElementById( "weapon4" ).innerHTML=storageweapon4.textContent;

        var storageweapon5=document.createTextNode(storagedata[5])
        document.getElementById( "weapon5" ).innerHTML=storageweapon5.textContent;

        var storageweapon6=document.createTextNode(storagedata[6])
        document.getElementById( "weapon6" ).innerHTML=storageweapon6.textContent;

        var storageweapon7=document.createTextNode(storagedata[7])
        document.getElementById( "weapon7" ).innerHTML=storageweapon7.textContent;

        var storageweapon8=document.createTextNode(storagedata[8])
        document.getElementById( "weapon8" ).innerHTML=storageweapon8.textContent;

        var storageweapon9=document.createTextNode(storagedata[9])
        document.getElementById( "weapon9" ).innerHTML=storageweapon9.textContent;

        var storageweapon10=document.createTextNode(storagedata[10])
        document.getElementById( "weapon10" ).innerHTML=storageweapon10.textContent;

        var storageweapon11=document.createTextNode(storagedata[11])
        document.getElementById( "weapon11" ).innerHTML=storageweapon11.textContent;

        var storageweapon12=document.createTextNode(storagedata[12])
        document.getElementById( "weapon12" ).innerHTML=storageweapon12.textContent;

        var storageweapon13=document.createTextNode(storagedata[13])
        document.getElementById( "weapon13" ).innerHTML=storageweapon13.textContent;

        var storageweapon14=document.createTextNode(storagedata[14])
        document.getElementById( "weapon14" ).innerHTML=storageweapon14.textContent;

        var storageweapon15=document.createTextNode(storagedata[15])
        document.getElementById( "weapon15" ).innerHTML=storageweapon15.textContent;

        var storageweapon16=document.createTextNode(storagedata[16])
        document.getElementById( "weapon16" ).innerHTML=storageweapon16.textContent;

        var storageweapon17=document.createTextNode(storagedata[17])
        document.getElementById( "weapon17" ).innerHTML=storageweapon17.textContent;

        var storageweapon18=document.createTextNode(storagedata[18])
        document.getElementById( "weapon18" ).innerHTML=storageweapon18.textContent;

        var storageweapon19=document.createTextNode(storagedata[19])
        document.getElementById( "weapon19" ).innerHTML=storageweapon19.textContent;

        var storageweapon20=document.createTextNode(storagedata[20])
        document.getElementById( "weapon20" ).innerHTML=storageweapon20.textContent;

        var storageweapon21=document.createTextNode(storagedata[21])
        document.getElementById( "weapon21" ).innerHTML=storageweapon21.textContent;

        var storageweapon22=document.createTextNode(storagedata[22])
        document.getElementById( "weapon22" ).innerHTML=storageweapon22.textContent;

        var storageweapon23=document.createTextNode(storagedata[23])
        document.getElementById( "weapon23" ).innerHTML=storageweapon23.textContent;
    
    }

    else{
    }

}