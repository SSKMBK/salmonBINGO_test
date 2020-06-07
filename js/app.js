function randomise(){
    
    var weapon_list = ["わかばシューター","ボールドマーカー","シャープマーカー","プロモデラー","スプラシューター",
    ".52ガロン",".96ガロン","N-ZAP","プライムシューター","ジェットスイーパー","L3リールガン", "H3リールガン",
    "ボトルガイザー","スプラマニューバー","クアッドホッパー","デュアルスイーパー","スパッタリー","ケルビン","バレルスピナー",
    "スプラスピナー","クーゲルシュライバー","ハイドラント","ノーチラス","ノヴァ","ホットブラスター","ロングブラスター","クラッシュブラスター",
    "ラピッドブラスター","Rブラスターエリート","スプラチャージャー","スプラスコープ","リッター4K","4Kスコープ","スクイックリン",
    "14式竹筒銃","ソイチューバー","バケットスロッシャー","スクリュースロッシャー","ヒッセン","オーバーフロッシャー","エクスプロッシャー","パラシェルター",
    "キャンピングシェルター","スパイガジェット","スプラローラー","カーボンローラー","ヴァリアブルローラー","ダイナモローラー","パブロ",
    "ホクサイ"];

    //length=配列の要素数取得
    //splice=要素の取り除き
    var sheet0 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet0 = weapon_list[sheet0];
    weapon_list.splice(sheet0, 1);

    var sheet1 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet1 = weapon_list[sheet1];
    weapon_list.splice(sheet1, 1);

    var sheet2 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet2 = weapon_list[sheet2];
    weapon_list.splice(sheet2, 1);

    var sheet3 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet3 = weapon_list[sheet3];
    weapon_list.splice(sheet3, 1);

    var sheet4 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet4 = weapon_list[sheet4];
    weapon_list.splice(sheet4, 1);

    var sheet5 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet5 = weapon_list[sheet5];
    weapon_list.splice(sheet5, 1);

    var sheet6 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet6 = weapon_list[sheet6];
    weapon_list.splice(sheet6, 1);

    var sheet7 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet7 = weapon_list[sheet7];
    weapon_list.splice(sheet7, 1);

    var sheet8 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet8 = weapon_list[sheet8];
    weapon_list.splice(sheet8, 1);

    var sheet9 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet9 = weapon_list[sheet9];
    weapon_list.splice(sheet9, 1);

    var sheet10 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet10 = weapon_list[sheet10];
    weapon_list.splice(sheet10, 1);

    var sheet11 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet11 = weapon_list[sheet11];
    weapon_list.splice(sheet11, 1);

    var sheet12 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet12 = weapon_list[sheet12];
    weapon_list.splice(sheet12, 1);

    var sheet13 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet13 = weapon_list[sheet13];
    weapon_list.splice(sheet13, 1);

    var sheet14 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet14 = weapon_list[sheet14];
    weapon_list.splice(sheet14, 1);

    var sheet15 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet15 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(sheet15, 1);

    var sheet16 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet16 = weapon_list[sheet16];
    weapon_list.splice(sheet16, 1);

    var sheet17 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet17 = weapon_list[sheet17];
    weapon_list.splice(sheet17, 1);

    var sheet18 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet18 = weapon_list[sheet18];
    weapon_list.splice(sheet18, 1);

    var sheet19 = Math.floor(Math.random() * weapon_list.length)   
    weapon_sheet19 = weapon_list[sheet19];
    weapon_list.splice(sheet19, 1);

    var sheet20 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet20 = weapon_list[sheet20];
    weapon_list.splice(sheet20, 1);

    var sheet21 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet21 = weapon_list[sheet21];
    weapon_list.splice(sheet21, 1);

    var sheet22= Math.floor(Math.random() * weapon_list.length)
    weapon_sheet22 = weapon_list[sheet22];
    weapon_list.splice(sheet22, 1);

    var sheet23 = Math.floor(Math.random() * weapon_list.length)
    weapon_sheet23 = weapon_list[sheet23];
    weapon_list.splice(sheet23, 1);

    var weapons = [weapon_sheet0,weapon_sheet1,weapon_sheet2,weapon_sheet3,weapon_sheet4,
    weapon_sheet5,weapon_sheet6,weapon_sheet7,weapon_sheet8,weapon_sheet9,weapon_sheet10,
    weapon_sheet11,weapon_sheet12,weapon_sheet13,weapon_sheet14,weapon_sheet15,weapon_sheet16,
    weapon_sheet17,weapon_sheet18,weapon_sheet19,weapon_sheet20,weapon_sheet21,weapon_sheet22,
    weapon_sheet23];

    //document.getElementByID("ID").appendChildを使えば書き換えでない追加ができる
    var weaponButton0=document.createTextNode(weapon_sheet0)
    document.getElementById( "weapon0" ).innerHTML=weaponButton0.textContent;
    
    var weaponButton1=document.createTextNode(weapon_sheet1)
    document.getElementById( "weapon1" ).innerHTML=weaponButton1.textContent;

    var weaponButton2=document.createTextNode(weapon_sheet2)
    document.getElementById( "weapon2" ).innerHTML=weaponButton2.textContent;

    var weaponButton3=document.createTextNode(weapon_sheet3)
    document.getElementById( "weapon3" ).innerHTML=weaponButton3.textContent;

    var weaponButton4=document.createTextNode(weapon_sheet4)
    document.getElementById( "weapon4" ).innerHTML=weaponButton4.textContent;

    var weaponButton5=document.createTextNode(weapon_sheet5)
    document.getElementById( "weapon5" ).innerHTML=weaponButton5.textContent;

    var weaponButton6=document.createTextNode(weapon_sheet6)
    document.getElementById( "weapon6" ).innerHTML=weaponButton6.textContent;

    var weaponButton7=document.createTextNode(weapon_sheet7)
    document.getElementById( "weapon7" ).innerHTML=weaponButton7.textContent;

    var weaponButton8=document.createTextNode(weapon_sheet8)
    document.getElementById( "weapon8" ).innerHTML=weaponButton8.textContent;

    var weaponButton9=document.createTextNode(weapon_sheet9)
    document.getElementById( "weapon9" ).innerHTML=weaponButton9.textContent;

    var weaponButton10=document.createTextNode(weapon_sheet10)
    document.getElementById( "weapon10" ).innerHTML=weaponButton10.textContent;

    var weaponButton11=document.createTextNode(weapon_sheet11)
    document.getElementById( "weapon11" ).innerHTML=weaponButton11.textContent;

    var weaponButton12=document.createTextNode(weapon_sheet12)
    document.getElementById( "weapon12" ).innerHTML=weaponButton12.textContent;

    var weaponButton13=document.createTextNode(weapon_sheet13)
    document.getElementById( "weapon13" ).innerHTML=weaponButton13.textContent;

    var weaponButton14=document.createTextNode(weapon_sheet14)
    document.getElementById( "weapon14" ).innerHTML=weaponButton14.textContent;

    var weaponButton15=document.createTextNode(weapon_sheet15)
    document.getElementById( "weapon15" ).innerHTML=weaponButton15.textContent;

    var weaponButton16=document.createTextNode(weapon_sheet16)
    document.getElementById( "weapon16" ).innerHTML=weaponButton16.textContent;

    var weaponButton17=document.createTextNode(weapon_sheet17)
    document.getElementById( "weapon17" ).innerHTML=weaponButton17.textContent;

    var weaponButton18=document.createTextNode(weapon_sheet18)
    document.getElementById( "weapon18" ).innerHTML=weaponButton18.textContent;

    var weaponButton19=document.createTextNode(weapon_sheet19)
    document.getElementById( "weapon19" ).innerHTML=weaponButton19.textContent;

    var weaponButton20=document.createTextNode(weapon_sheet20)
    document.getElementById( "weapon20" ).innerHTML=weaponButton20.textContent;

    var weaponButton21=document.createTextNode(weapon_sheet21)
    document.getElementById( "weapon21" ).innerHTML=weaponButton21.textContent;

    var weaponButton22=document.createTextNode(weapon_sheet22)
    document.getElementById( "weapon22" ).innerHTML=weaponButton22.textContent;

    var weaponButton23=document.createTextNode(weapon_sheet23)
    document.getElementById( "weapon23" ).innerHTML=weaponButton23.textContent;

}

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

function deletebutton(){
    if(window.confirm("本当に保存データを削除しますか？")){

        localStorage.removeItem("salmonrandomweapondata_storage")
        document.getElementById("save_weapondata").innerHTML="削除しました";

    }

    else{
    }
}
