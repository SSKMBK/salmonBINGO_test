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
    
    var weapons=[]
    
    for(var counter=0;counter<24;counter++){
        var sheet_number = Math.floor(Math.random() * weapon_list.length)
        var weaponspush = weapon_list[sheet_number];
        weapons.push(weaponspush);
        weapon_list.splice(sheet_number, 1);
    }

    
    //document.getElementByID("ID").appendChildを使えば書き換えでない追加ができる
    
    var weaponButton0=document.createTextNode(weapons[0])
    document.getElementById( "weapon0" ).innerHTML=weaponButton0.textContent;

    var weaponButton1=document.createTextNode(weapons[1])
    document.getElementById( "weapon1" ).innerHTML=weaponButton1.textContent;

    var weaponButton2=document.createTextNode(weapons[2])
    document.getElementById( "weapon2" ).innerHTML=weaponButton2.textContent;

    var weaponButton3=document.createTextNode(weapons[3])
    document.getElementById( "weapon3" ).innerHTML=weaponButton3.textContent;

    var weaponButton4=document.createTextNode(weapons[4])
    document.getElementById( "weapon4" ).innerHTML=weaponButton4.textContent;

    var weaponButton5=document.createTextNode(weapons[5])
    document.getElementById( "weapon5" ).innerHTML=weaponButton5.textContent;

    var weaponButton6=document.createTextNode(weapons[6])
    document.getElementById( "weapon6" ).innerHTML=weaponButton6.textContent;

    var weaponButton7=document.createTextNode(weapons[7])
    document.getElementById( "weapon7" ).innerHTML=weaponButton7.textContent;

    var weaponButton8=document.createTextNode(weapons[8])
    document.getElementById( "weapon8" ).innerHTML=weaponButton8.textContent;

    var weaponButton9=document.createTextNode(weapons[9])
    document.getElementById( "weapon9" ).innerHTML=weaponButton9.textContent;

    var weaponButton10=document.createTextNode(weapons[10])
    document.getElementById( "weapon10" ).innerHTML=weaponButton10.textContent;

    var weaponButton11=document.createTextNode(weapons[11])
    document.getElementById( "weapon11" ).innerHTML=weaponButton11.textContent;

    var weaponButton12=document.createTextNode(weapons[12])
    document.getElementById( "weapon12" ).innerHTML=weaponButton12.textContent;

    var weaponButton13=document.createTextNode(weapons[13])
    document.getElementById( "weapon13" ).innerHTML=weaponButton13.textContent;

    var weaponButton14=document.createTextNode(weapons[14])
    document.getElementById( "weapon14" ).innerHTML=weaponButton14.textContent;

    var weaponButton15=document.createTextNode(weapons[15])
    document.getElementById( "weapon15" ).innerHTML=weaponButton15.textContent;

    var weaponButton16=document.createTextNode(weapons[16])
    document.getElementById( "weapon16" ).innerHTML=weaponButton16.textContent;

    var weaponButton17=document.createTextNode(weapons[17])
    document.getElementById( "weapon17" ).innerHTML=weaponButton17.textContent;

    var weaponButton18=document.createTextNode(weapons[18])
    document.getElementById( "weapon18" ).innerHTML=weaponButton18.textContent;

    var weaponButton19=document.createTextNode(weapons[19])
    document.getElementById( "weapon19" ).innerHTML=weaponButton19.textContent;

    var weaponButton20=document.createTextNode(weapons[20])
    document.getElementById( "weapon20" ).innerHTML=weaponButton20.textContent;

    var weaponButton21=document.createTextNode(weapons[21])
    document.getElementById( "weapon21" ).innerHTML=weaponButton21.textContent;

    var weaponButton22=document.createTextNode(weapons[22])
    document.getElementById( "weapon22" ).innerHTML=weaponButton22.textContent;

    var weaponButton23=document.createTextNode(weapons[23])
    document.getElementById( "weapon23" ).innerHTML=weaponButton23.textContent;
    
    console.log(weapons);
}
