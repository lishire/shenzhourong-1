/**
 * Created by Administrator on 2017/8/19.
 */

function getId(id) {
    return document.getElementById(id)?document.getElementById(id):null;
}

function navscroll(){
    var tit = document.getElementsByTagName("nav")[0];
    var navimg=tit.getElementsByTagName("img")[0];
    var btop = document.body.scrollTop||document.documentElement.scrollTop;
    var pagenav = document.getElementById("pro_pagenav");

    if(btop>0&&btop<360){
        tit.setAttribute("style","background-color:white;color:black;");
        navimg.setAttribute("src","../img/first_images/iphone_logo02.png");
        pagenav.setAttribute("style","")
    }
    else if(btop>360){
        pagenav.setAttribute("style","position:fixed;top:0;left:5vw;z-index:999;background-color:white");

    }

    else{
        tit.setAttribute("style","");
        navimg.setAttribute("src","../img/first_images/145x45baise.png");
    }

}
        function moving(speed,terminal,isleft){
            var list = getId("pro_carouselist");
            var left_val = parseInt(list.style.left);
            var btn_idx;
            var button = document.getElementsByTagName("p");

            if(left_val===terminal){
                left_val=isleft;
            }else{
                left_val += speed;
            }
            list.style.left=left_val+"px";
            btn_idx=Math.ceil(Math.abs(left_val/(-1261)));


            for(var k=0;k<button.length;k++){
                button[k].setAttribute("class","")
            }
            button[btn_idx].setAttribute("class","on");

        }















