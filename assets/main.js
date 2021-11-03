function flip() {
    $('.card').toggleClass('flipped');
}

let img1 = document.getElementById("img1");
// let img2 = document.getElementById("img2");
// function hide(){
//     setInterval(() => {
//     img1.style.display = "none";
//     img2.style.display = "";
// }, 10000);
// }
// hide();

let video1 = document.getElementById("video1")
let video2 = document.getElementById("video2")
let num =1;

 let num2 = 1;
video1.onclick = function(){
    if(num == 1){
    video1.play();
    num = 0;

    }else{
        video1.pause();
        num = 1;
    }
}
video2.onclick = function(){
   if(num2 == 1){
    video2.play();
    num2 = 0;

    }else{
        video2.pause();
        num2 = 1;
    };
}