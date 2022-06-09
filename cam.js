let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let video = document.querySelector("#video");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
    video.srcObject = stream;
    video.play();
}); 
}

document.getElementById('snap').addEventListener('click', ()=> {
    context.drawImage(video, 0,0,640, 480);
})

/* Splash */

let intro = document.querySelector('.Intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () =>{

    setTimeout(() =>{

logoSpan.forEach((span, idx) =>{
    setTimeout(()=>{
        span.classList.add('active');
}, (idx + 1) * 400)
}, 500000);

setTimeout(() =>{
    logoSpan.forEach((span, idx) =>{

        setTimeout(()=>{
            span.classList.add('active');
            span.classList.add('fade');
    }, (idx + 1) * 10)
    })
} , 500000);

setTimeout(()=>{
    intro.style.top = '-100vh';
},4500)

})

})

