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
    
    for(var counter:0,counter>24,1){
        var sheet_number = Math.floor(Math.random() * weapon_list.length)
        var weaponspush = weapon_list[sheet_number];
        weapons.push(weaponspush);
        weapon_list.splice(sheet_number, 1);
    }

    
    //document.getElementByID("ID").appendChildを使えば書き換えでない追加ができる
    
    for(var counter:0,counter>24,1){
        var weaponButton0=document.createTextNode(weapons[counter])
        document.getElementById( "weapon0" ).innerHTML=weaponButton0.textContent;
    }
    
    console(weapons);
}
