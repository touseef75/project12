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

let video1 = document.getElementById("video")
let video2 = document.getElementById("video2")
let but1 = document.getElementById("but1");
let but2 = document.getElementById("but2");
let num =1;

 let num2 = 1;
but1.onclick = function(){
    if(num == 1){
    video1.play();
    num = 0;

    }else{
        video1.pause();
        num = 1;
    }
}






let arr = [
    {video : "./images/Osmosis.mp4",
    color:"#fff8e3"
},
    {video : "./images/Osmosis text.mp4",
    color:"#aae3ff"
},
    {video : "./images/salt water label2.mp4",
    color:"#2e8ebc"
},
    {video : "./images/fish.png",
    color:"black"
},

]

let box = document.getElementById("box");

let next = document.getElementById("next");
let num3 = 0;
next.addEventListener("click",function(){
    if(num3 == 2){  
    video1.src = arr[num3].video;
    box.style.background = arr[num3].color;
    num3 = 0;
    }else{
        video1.src = arr[num3].video;
    box.style.background = arr[num3].color;
    num3++;

    }
   
});