
/*Digital Clock*/
function fadeTo(event, url) {
  event.preventDefault();
  document.body.classList.remove("loaded");
  setTimeout(() => {
    window.location.href = url;
  }, 150);
}

window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });
});


function Updateclock() {
  const now = new Date();
  let hours = now.getHours();
  const merediam = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds} ${merediam}`;
  document.getElementById("clock").textContent = time;
}

Updateclock();
setInterval(Updateclock, 1000); // use setInterval for real-time update
