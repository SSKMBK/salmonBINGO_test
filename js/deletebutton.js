function deletebutton(){
    if(window.confirm("本当に保存データを削除しますか？")){

        localStorage.removeItem("salmonrandomweapondata_storage")
        document.getElementById("save_weapondata").innerHTML="削除しました";

    }

    else{
    }
}