
// services  card js code
let  numberPercent = document.querySelectorAll('.countbar')
let getPercent = Array.from(numberPercent)

getPercent.map((items) => {
    let startCount = 0
    let progressBar = () => {
        startCount ++
        items.innerHTML = `<h3>${startCount}%</h3>`
        items.style.width = `${startCount}%`
        if(startCount == items.dataset.percentnumber) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(() => {
        progressBar()
    },25)
})



// dark mode
const darkModeSwitch = document.getElementById("darkModeSwitch");
const darkModeLabel = document.getElementById("darkModeLabel");

darkModeSwitch.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
  if (this.checked) {
    darkModeLabel.textContent = "Light Mode";
  } else {
    darkModeLabel.textContent = "Dark Mode";
  }
});


//  project js code
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("feature");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

