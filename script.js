const text = `Dear Abhishek,

Happy Friendship Day! 💙

Thank you for always being there for me.

Thank you for every laugh,
every memory,
and every moment we shared.

You are truly one of the most special people in my life.

No matter how busy life becomes,
our friendship will always remain precious.

Thank you for being such an amazing friend.

Happy Friendship Day once again!

– Mochi 🌸`;

let i = 0;

function typeWriter() {

    if(document.getElementById("typing")){

        if(i < text.length){

            document.getElementById("typing").innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter,40);

        }

    }

}

window.onload = typeWriter;
function celebrate(){

const emojis=["🎉","🎊","💙","🌸","🐱","✨","❤️"];

for(let i=0;i<80;i++){

const e=document.createElement("div");

e.className="fall";

e.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

e.style.left=Math.random()*100+"vw";

e.style.animationDelay=Math.random()*2+"s";

e.style.fontSize=(20+Math.random()*30)+"px";

document.getElementById("emojiRain").appendChild(e);

}

}const music = document.getElementById("bgMusic");

function startMusic() {
    if (music) {
        music.play();
    }
}function startSurprise()
 {const music = new Audio("music/song.mp3");

    music.play();

    setTimeout(function () {
        window.location.href = "photo1.html";
    }, 1000);
}