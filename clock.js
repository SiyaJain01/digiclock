function update() {
    let now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hours = hours.toString().padStart(2, "0")
    min = min.toString().padStart(2, "0")
    sec = sec.toString().padStart(2, "0")

    let hr = document.getElementById("hr");
    let mins = document.getElementById("min");
    let secs = document.getElementById("sec").innerText = sec;

    if (hr.innerText !== hours) {
        hr.innerText = hours;
        hr.classList.add("flip");
        setTimeout(() => hr.classList.remove("flip"), 600)
    }
    if (mins.innerText !== min) {
        mins.innerText = min;
        mins.classList.add("flip");
        setTimeout(() => mins.classList.remove("flip"), 600)
    }
}
setInterval(update, 1000);
update()