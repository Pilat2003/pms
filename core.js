


hookup();   
function hookup(){
    var arr = find("l");
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        element.onmouseover = function (){console.log("s")};
        console.log(element);
    }
}




function find(selector){

    var a = document.querySelectorAll('['+selector+']');
    console.log(a);
    return a;
}