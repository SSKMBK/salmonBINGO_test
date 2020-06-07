function savebutton(){

    if(window.confirm("前回保存したデータは上書きされます。")){

        var local_list=[];

        var saveweapon0=document.getElementById( "weapon0" ).textContent;
        var saveweapon1=document.getElementById( "weapon1" ).textContent;
        var saveweapon2=document.getElementById( "weapon2" ).textContent;
        var saveweapon3=document.getElementById( "weapon3" ).textContent;
        var saveweapon4=document.getElementById( "weapon4" ).textContent;
        var saveweapon5=document.getElementById( "weapon5" ).textContent;
        var saveweapon6=document.getElementById( "weapon6" ).textContent;
        var saveweapon7=document.getElementById( "weapon7" ).textContent;
        var saveweapon8=document.getElementById( "weapon8" ).textContent;
        var saveweapon9=document.getElementById( "weapon9" ).textContent;
        var saveweapon10=document.getElementById( "weapon10" ).textContent;
        var saveweapon11=document.getElementById( "weapon11" ).textContent;
        var saveweapon12=document.getElementById( "weapon12" ).textContent;
        var saveweapon13=document.getElementById( "weapon13" ).textContent;
        var saveweapon14=document.getElementById( "weapon14" ).textContent;
        var saveweapon15=document.getElementById( "weapon15" ).textContent;
        var saveweapon16=document.getElementById( "weapon16" ).textContent;
        var saveweapon17=document.getElementById( "weapon17" ).textContent;
        var saveweapon18=document.getElementById( "weapon18" ).textContent;
        var saveweapon19=document.getElementById( "weapon19" ).textContent;
        var saveweapon20=document.getElementById( "weapon20" ).textContent;
        var saveweapon21=document.getElementById( "weapon21" ).textContent;
        var saveweapon22=document.getElementById( "weapon22" ).textContent;
        var saveweapon23=document.getElementById( "weapon23" ).textContent;

        local_list.push(saveweapon0,saveweapon1,saveweapon2,saveweapon3,saveweapon4,
        saveweapon5,saveweapon6,saveweapon7,saveweapon8,saveweapon9,saveweapon10
        ,saveweapon11,saveweapon12,saveweapon13,saveweapon14,saveweapon15,saveweapon16,
        saveweapon17, saveweapon18,saveweapon19,saveweapon20,saveweapon21,saveweapon22,
        saveweapon23)

        list_message = "[保存済みデータ]\n"+local_list[0]+","+local_list[1]+","+local_list[2]+","+local_list[3]
        +","+local_list[4]+","+local_list[5]+","+local_list[6]+","+local_list[7]+","+local_list[8]+","
        +local_list[9]+","+local_list[10]+","+local_list[11]+","+local_list[12]+","+local_list[13]+","
        +local_list[14]+","+local_list[15]+","+local_list[16]+","+local_list[17]+","+local_list[18]+","
        +local_list[19]+","+local_list[20]+","+local_list[21]+","+local_list[22]+","+local_list[23];

        localStorage.setItem('salmonrandomweapondata_storage', JSON.stringify(local_list))
        document.getElementById("save_weapondata").innerHTML=list_message;

        console.log(local_list)

    }

    else{
    }

}
