let duedate = new Date ();
duedate.setDate(duedate.getDate() + 10);
// let messagedate = new Date(dueDate);
console.log(duedate)

let Interval = setInterval(updateCountdown, 1000)

function updateCountdown() {
  let now = new Date().getTime();
  let distance = duedate - now

  if (distance <= 0) {
    duedate.setDate(duedate.getDate() + 10);
    // messagedate.setDate(messagedate.getDate() + 15);

    clearInterval(Interval);
    // Interval = setInterval(updateCountdown, 1000);

  }

let DAYS = Math.floor(distance / (1000 * 60 * 60 * 24));
let HOURS = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let MINUTES = Math.floor(distance / 1000 / 60) % 60;
let SECONDS = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = DAYS + "d" ;
document.getElementById("hours").innerHTML = HOURS + "h" ;
document.getElementById("minutes").innerHTML = MINUTES + "m" ;
document.getElementById("seconds").innerHTML = SECONDS + "s" ;
// document.getElementById("message").innerHTML = "The giveaway will occur on "+" " + messagedate



}