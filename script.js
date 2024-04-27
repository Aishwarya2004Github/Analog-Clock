let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
setInterval(() => {
    let date = new Date(); // Corrected variable name
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;
    hr.style.transform = `rotateZ(${hRotation}deg)`; // Corrected rotation calculation
    min.style.transform = `rotateZ(${mRotation}deg)`; // Corrected rotation calculation
    sec.style.transform = `rotateZ(${sRotation}deg)`; // Corrected rotation calculation
}, 1000);

function updateTime() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    var milliseconds = String(now.getMilliseconds()).padStart(3, '0');
    var timeString = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
    document.querySelector('.time-box').textContent = timeString;
}

// Update time every 100 milliseconds
setInterval(updateTime, 100);
