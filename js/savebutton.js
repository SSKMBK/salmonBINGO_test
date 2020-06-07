function savebutton(){

    if(window.confirm("前回保存したデータは上書きされます。")){

        var local_list=[];

        local_list.push(weapon_sheet0,weapon_sheet1,weapon_sheet2,weapon_sheet3,weapon_sheet4,
        weapon_sheet5,weapon_sheet6,weapon_sheet7,weapon_sheet8,weapon_sheet9,weapon_sheet10,
        weapon_sheet11,weapon_sheet12,weapon_sheet13,weapon_sheet14,weapon_sheet15,weapon_sheet16,
        weapon_sheet17,weapon_sheet18,weapon_sheet19,weapon_sheet20,weapon_sheet21,weapon_sheet22,
        weapon_sheet23)

        list_message = "[保存済みデータ]\n"+local_list[0]+","+local_list[1]+","+local_list[2]+","+local_list[3]
        +","+local_list[4]+","+local_list[5]+","+local_list[6]+","+local_list[7]+","+local_list[8]+","
        +local_list[9]+","+local_list[10]+","+local_list[11]+","+local_list[12]+","+local_list[13]+","
        +local_list[14]+","+local_list[15]+","+local_list[16]+","+local_list[17]+","+local_list[18]+","
        +local_list[19]+","+local_list[20]+","+local_list[21]+","+local_list[22]+","+local_list[23];

        localStorage.setItem('salmonrandomweapondata_storage', JSON.stringify(local_list))
        document.getElementById("save_weapondata").innerHTML=list_message;

    }

    else{
    }

}
