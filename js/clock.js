let userName= prompt('Adınız nedir ?')
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName}`

function showTime() {
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let day = d.getDay();
  
    if (day === 1) {
      day = "Pazartesi";
    } else if (day === 2) {
      day = "Salı";
    } else if (day === 3) {
      day = "Çarşamba";
    } else if (day === 4) {
      day = "Perşembe";
    } else if (day === 5) {
      day = "Cuma";
    } else if (day === 6) {
      day = "Cumartesi";
    } else if (day === 7) {
      day = "Pazar";
    }
    setTimeout(showTime, 1000);
  
    myClock.innerHTML = `${hour}:${minutes}:${seconds} ${day}`;
  }
  
  showTime();