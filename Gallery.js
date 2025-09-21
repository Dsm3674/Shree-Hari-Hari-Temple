

date = new Date();

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satureday"]

const today = day[date.getDay()];


const dayDis = document.getElementById("dayDis")
dayDis.textContent = "Hope you have a happy "+ today+"!";
dayDis.classList.add("show")

const modernHowever = document.getElementById("modern");

modernHowever.addEventListener("mouseover", (event) => {

event.target.style.color = "gold";



}) 

modernHowever.addEventListener("mouseout"), (event)=> {

event.target.style.color = "white";
 setTimeout(()=> {



    event.target.style.color = "white"
 }, 100)

}

