let txt = "";
document.getElementById("cli").addEventListener("click", ()=>{
    txt =  `<header>
    <i id="reflip" class="fa-solid fa-arrow-left"></i>
    <div class="info">
        <img src="images/IMG2.JPG" alt="">
        <div>
            <h1 class="name">Climax</h1>
            <p class="txt">online</p>
        </div>
    </div>
    <div class="action">
        <i class="fa-solid fa-phone"></i>
                        <i class="fa-solid fa-video"></i>
                        <i class="fa-solid fa-circle-half-stroke mode"></i>
    </div>
    <div class="action-small">
        <i class="actionToggle fa-solid fa-bars"></i>
        <div class="action" id="action">
            <h2>Call</h2>
            <h2>Video Call</h2>
            <h2 class="mode">Switch mode</h2>
        </div>
    </div>
</header>
<main class="body">
    <div class="encMsg">
        <h1>Thursday</h1>
        <p class="txt">
            Messages and call are end-to-end  encrypted. No one outside of this chat, not even Chat-Me, can read or listen to them. <b>Learn more.</b>
        </p>
    </div>
    <div class="chat0">
        <p class="chat0">Hey haffa
            <i>6:40pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">I dey boss
            <i>6:40pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">Have you finish your project
            <i>6:46pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">No, I'm having problem with react
            <i>6:46pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">Whats the matter
            <i>6:48pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">Nothing much, I've solved it, it's just a little problem with react-router-dom
            <i>6:55pm</i> </p>
    </div>
    <div class="chat0" id="lastmsg">
        <p class="chat0">Ok nah
            <i>7:00pm</i> </p>
    </div>
</main>
<footer class="msginput">
    <input type="text" id="input">
    <button id="send">Send</button>
</footer>`
    updateShown("cli");
    update(txt);
});
document.getElementById("abd").addEventListener("click" , ()=>{
    txt = `<header>
    <i id="reflip" class="fa-solid fa-arrow-left"></i>
    <div class="info">
        <img src="images/IMG2.JPG" alt="">
        <div>
            <h1 class="name">Abdullah</h1>
            <p class="txt">online</p>
        </div>
    </div>
    <div class="action">
        <i class="fa-solid fa-phone"></i>
                        <i class="fa-solid fa-video"></i>
                        <i class="fa-solid fa-circle-half-stroke mode"></i>
    </div>
    <div class="action-small">
        <i class="actionToggle fa-solid fa-bars"></i>
        <div class="action" id="action">
            <h2>Call</h2>
            <h2>Video Call</h2>
            <h2 class="mode">Switch mode</h2>
        </div>
    </div>
</header>
<main class="body">
    <div class="encMsg">
        <h1>Thursday</h1>
        <p class="txt">
            Messages and call are end-to-end  encrypted. No one outside of this chat, not even Chat-Me, can read or listen to them. <b>Learn more.</b>
        </p>
    </div>
    <div class="chat1">
        <p class="chat1">Hey bro
            <i>2:40pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">I am done with the new project
            <i>2:40pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">That's nice lemme see it
            <i>2:46pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">Gimme a moment
            <i>2:46pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">Ok
            <i>2:48pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">Here's the link <a style="overflow-wrap: anywhere;"href="https://u22099.github.io/Chat-Me">https://u22099.github.io/Chat-Me</a>
            <i>2:55pm</i> </p>
    </div>
    <div class="chat0" id="lastmsg">
        <p class="chat0">Nice Work, its really good
            <i>3:00pm</i> </p>
    </div>
</main>
<footer class="msginput">
    <input type="text" id="input">
    <button id="send">Send</button>
</footer>`;
    updateShown("abd");
    update(txt)
});
document.getElementById("cain").addEventListener("click" , ()=>{
    txt = `<header>
    <i id="reflip" class="fa-solid fa-arrow-left"></i>
    <div class="info">
        <img src="images/IMG2.JPG" alt="">
        <div>
            <h1 class="name">Cain</h1>
            <p class="txt">online</p>
        </div>
    </div>
    <div class="action">
        <i class="fa-solid fa-phone"></i>
                        <i class="fa-solid fa-video"></i>
                        <i class="fa-solid fa-circle-half-stroke mode"></i>
    </div>
    <div class="action-small">
        <i class="actionToggle fa-solid fa-bars"></i>
        <div class="action" id="action">
            <h2>Call</h2>
            <h2>Video Call</h2>
            <h2 class="mode">Switch mode</h2>
        </div>
    </div>
</header>
<main class="body">
    <div class="encMsg">
        <h1>27, April, 2024</h1>
        <p class="txt">
            Messages and call are end-to-end  encrypted. No one outside of this chat, not even Chat-Me, can read or listen to them. <b>Learn more.</b>
        </p>
    </div>
    <div class="chat0">
        <p class="chat0">Daniel haffa the stuff
            <i>1:03pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">See guy no money ooh
            <i>1:14pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">Abeg😩 I really need the cash
            <i>1:15pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">You know me nah Cain if i get the money i go give you 😢😕
            <i>1:18pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">Yes nah boss, if nah even just 1k i see 😟
            <i>1:19pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">Please don't patronise me cain i say i no get abi make i steal? 🙄</a>
            <i>1:20pm</i> </p>
    </div>
    <div class="chat0" id="lastmsg">
        <p class="chat0">Abeg nah
            <i>1:20pm</i> </p>
    </div>
</main>
<footer class="msginput">
    <input type="text" id="input">
    <button id="send">Send</button>
</footer>`;
    updateShown("cain");
    update(txt)
});
document.getElementById("bs").addEventListener("click" , ()=>{
    txt = `<header>
    <i id="reflip" class="fa-solid fa-arrow-left"></i>
    <div class="info">
        <img src="images/IMG2.JPG" alt="">
        <div>
            <h1 class="name">Big Sam</h1>
            <p class="txt">last seen at 2:13pm</p>
        </div>
    </div>
    <div class="action">
        <i class="fa-solid fa-phone"></i>
                        <i class="fa-solid fa-video"></i>
                        <i class="fa-solid fa-circle-half-stroke mode"></i>
    </div>
    <div class="action-small">
        <i class="actionToggle fa-solid fa-bars"></i>
        <div class="action" id="action">
            <h2>Call</h2>
            <h2>Video Call</h2>
            <h2 class="mode">Switch mode</h2>
        </div>
    </div>
</header>
<main class="body">
    <div class="encMsg">
        <h1>Wednesday</h1>
        <p class="txt">
            Messages and call are end-to-end  encrypted. No one outside of this chat, not even Chat-Me, can read or listen to them. <b>Learn more.</b>
        </p>
    </div>
    <div class="chat0">
        <p class="chat1">Hey bro
            <i>2:00pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat1">haffa
            <i>2:00pm</i> </p>
    </div>
    <div class="chat1" id="lastmsg">
        <p class="chat1">I dey bro
            <i>2:34pm</i> </p>
    </div>
</main>
<footer class="msginput">
    <input type="text" id="input">
    <button id="send">Send</button>
</footer>`;
    updateShown("bs");
    update(txt)
});
document.getElementById("no").addEventListener("click" , ()=>{
    txt = `<header>
    <i id="reflip" class="fa-solid fa-arrow-left"></i>
    <div class="info">
        <img src="images/IMG2.JPG" alt="">
        <div>
            <h1 class="name">+2349023343423</h1>
            <p class="txt">online</p>
        </div>
    </div>
    <div class="action">
        <i class="fa-solid fa-phone"></i>
                        <i class="fa-solid fa-video"></i>
                        <i class="fa-solid fa-circle-half-stroke mode"></i>
    </div>
    <div class="action-small">
        <i class="actionToggle fa-solid fa-bars"></i>
        <div class="action" id="action">
            <h2>Call</h2>
            <h2>Video Call</h2>
            <h2 class="mode">Switch mode</h2>
        </div>
    </div>
</header>
<main class="body">
    <div class="encMsg">
        <h1>2nd, April, 2024</h1>
        <p class="txt">
            Messages and call are end-to-end  encrypted. No one outside of this chat, not even Chat-Me, can read or listen to them. <b>Learn more.</b>
        </p>
    </div>
    <div class="chat0" id="lastmsg">
        <p class="chat0">Hi
            <i>12:32pm</i> </p>
    </div>
</main>
<footer class="msginput">
    <input type="text" id="input">
    <button id="send">Send</button>
</footer>`;
    updateShown("no");
    update(txt)
});
document.getElementById("tina").addEventListener("click" , ()=>{
    txt = `<header>
    <i id="reflip" class="fa-solid fa-arrow-left"></i>
    <div class="info">
        <img src="images/IMG2.JPG" alt="">
        <div>
            <h1 class="name">Tina</h1>
            <p class="txt">last seen 15mins ago</p>
        </div>
    </div>
    <div class="action">
        <i class="fa-solid fa-phone"></i>
                        <i class="fa-solid fa-video"></i>
                        <i class="fa-solid fa-circle-half-stroke mode"></i>
    </div>
    <div class="action-small">
        
        <div class="action" id="action">
            <h2>Call</h2>
            <h2>Video Call</h2>
            <h2 class="mode">Switch mode</h2>
        </div>
    </div>
</header>
<main class="body">
    <div class="encMsg">
        <h1>Sunday, 28th April</h1>
        <p class="txt">
            Messages and call are end-to-end  encrypted. No one outside of this chat, not even Chat-Me, can read or listen to them. <b>Learn more.</b>
        </p>
    </div>
    <div class="chat1">
        <p class="chat1">Tina💛 
            <i>9:20pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">Wow, Daniel how are you?
            <i>9:40pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">I've missed you alot🙂 
            <i>9:41pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">Same here dear, I got your number from michael
            <i>9:41pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">Lucky me, this holiday is just too boring
            <i>9:42pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">Not for me though, I'm enjoying every bit of it
            <i>9:43pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">Me i'm always inside sleeping or just staring at the ceiling, everywhere is just boring 🙄
            <i>9:43pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">Aww, should i come over? 😎😜
            <i>9:44pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">You're funny 😍
            <i>9:45pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">Like as if you even know my house 🙄
            <i>9:45pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">I will guess the street nah, and if i get lost i will just ask anybody i see, do you know tina's house? 😜
            <i>9:47pm</i> </p>
    </div>
    <div class="chat0">
        <p class="chat0">Omo you go lost, no be my fault 🤣
            <i>9:49pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">😂🤣
            <i>9:50pm</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">I'll be back, love uu 😘💗
            <i>9:51pm</i> </p>
    </div>
    <div class="chat0" id="lastmsg">
        <p class="chat0">💚
            <i>10:02pm</i> </p>
    </div>
</main>
<footer class="msginput">
    <input type="text" id="input">
    <button id="send">Send</button>
</footer>`;
    updateShown("tina");
    update(txt)
});

document.getElementById("noah").addEventListener("click" , ()=>{
    txt = `<header>
    <i id="reflip" class="fa-solid fa-arrow-left"></i>
    <div class="info">
        <img src="images/IMG2.JPG" alt="">
        <div>
            <h1 class="name">Noah</h1>
            <p class="txt"></p>
        </div>
    </div>
    <div class="action">
        <i class="fa-solid fa-phone"></i>
        <i class="fa-solid fa-video"></i>
        <i class="fa-solid fa-circle-half-stroke mode"></i>
    </div>
    <div class="action-small">
        <i class="actionToggle fa-solid fa-bars"></i>
        <div class="action" id="action">
            <h2>Call</h2>
            <h2>Video Call</h2>
            <h2 class="mode">Switch mode</h2>
        </div>
    </div>
</header>
<main class="body">
    <div class="encMsg">
        <h1>12th, December, 2023</h1>
        <p class="txt">
            Messages and call are end-to-end  encrypted. No one outside of this chat, not even Chat-Me, can read or listen to them. <b>Learn more.</b>
        </p>
    </div>
    <div class="chat0">
        <p class="chat0">Hey haffa you don do the stuff?
            <i>2:48am</i> </p>
    </div>
    <div class="chat1">
        <p class="chat1">Yh i done set am</a>
            <i>2:55am</i> </p>
    </div>
    <div class="chat0" id="lastmsg">
        <p class="chat0">Okay nah
            <i>3:00am</i> </p>
    </div>
</main>
<footer class="msginput">
    <input type="text" id="input">
    <button id="send">Send</button>
</footer>`;
    updateShown("noah");
    update(txt)
});
function render(){
    const reflip = document.getElementById("reflip");
    const input = document.getElementById("input");
    const send = document.getElementById("send");
    const actionToggle = document.querySelector(".actionToggle");
    const modes = document.querySelectorAll(".mode");
    const lstmsg = document.getElementById("lastmsg");
    lstmsg.scrollIntoView({behavior: "smooth"});
    modes.forEach(mode=>{
        mode.addEventListener('click',()=>{
            if(document.body.style.getPropertyValue("--theme") === "rgb(53, 4, 54)"){
                document.body.style.setProperty("--theme", "white");
                document.body.style.setProperty("--background", "white");
                document.body.style.setProperty("--text-theme", "black");
            }else{
                document.body.style.setProperty("--theme", "rgb(53, 4, 54)");
                document.body.style.setProperty("--background", "rgb(53, 4, 54)");
                document.body.style.setProperty("--text-theme", "white");
            }
        })
    })
    send.addEventListener("click",()=>{
        const newDiv = document.createElement('div');
        newDiv.classList.add("chat1");
        const p = document.createElement("p");
        p.innerHTML = input.value;
        let now = new Date
        const i = document.createElement("i");
        let hour = now.getHours();
        let mins = now.getMinutes().toString().padStart(2, "0");
        hour = hour > 12 ? hour-12 : hour;
        hour = hour === 0 ? 12 : hour;
        let meridian = hour > 12 ? "AM" : "PM"
        let time = hour.toString() + ":" + mins + meridian
        i.innerText = time;
        p.appendChild(i)
        p.classList.add("chat1");
        newDiv.appendChild(p);
        document.querySelector(".body").appendChild(newDiv);
        newDiv.scrollIntoView({behavior: "smooth"});
        input.value = "";
    });
    reflip.addEventListener("click",()=>{
        document.querySelector('.left-container').style.zIndex = 10;
        document.querySelector('.right-container').style.zIndex = 5;
    });
    actionToggle.addEventListener("click", ()=>{
    if(actionToggle.classList.contains("fa-bars")){
        document.querySelector("#action").style.visibility = "visible";
        actionToggle.classList.remove("fa-bars");
        actionToggle.classList.add("fa-xmark");
    }else{
        document.querySelector("#action").style.visibility = "hidden";
        actionToggle.classList.remove("fa-xmark");
        actionToggle.classList.add("fa-bars");
    }
    });
}
function update(x){
    document.querySelector('.left-container').style.zIndex = 5;
    document.querySelector('.right-container').style.zIndex = 10;
    document.querySelector("#chatbox").innerHTML = ""
    document.querySelector("#chatbox").insertAdjacentHTML("beforeend", x);
    render()
}
function updateShown(x){
    document.querySelector(".show").classList.remove("show");
    document.getElementById(x).classList.add("show");
}
render()