//

let timeNow = document.querySelector(".timeNow");

let alarmBtn = document.querySelector(".btn");

let soun = new Audio("/alarmClock/audio/04_Azadeh_(Trimmed).mp3");

function showTime() {
    let date = new Date();

    let hours = date.getHours();
    let mint = date.getMinutes();
    let secon = date.getSeconds();
    let session = "AM";
    if (hours > 12) {
        hours = hours - 12;
        session = "PM";
    }


    hours = hours < 10 ? `0${hours}` : hours;
    mint = mint < 10 ? `0${mint}` : mint;
    secon = secon < 10 ? `0${secon}` : secon;

    timeNow.innerHTML = ` ${hours} : ${mint} : ${secon}  ${session}`;


    if (hours == h && mint == m) {
        soun.play();
    }

}

setInterval(showTime, 1000);
let selection1 = document.querySelector(".selectHours");
let selection2 = document.querySelector(".minutSelect");

let h = Number(selection1.value);
let m = Number(selection2.value);

function setAlarm() {


    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;

    h = Number(selection1.value);
    m = Number(selection2.value);

    // console.log(typeof h, typeof m);

    // showTime(h, m)
    // setInterval(ziiiiing, 1000)





}

// function ziiiiing(h, m) {
//     console.log("k");

//     let date = new Date();

//     let hours = date.getHours();
//     let mint = date.getMinutes();









// }
alarmBtn.addEventListener("click", setAlarm);