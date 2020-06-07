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
