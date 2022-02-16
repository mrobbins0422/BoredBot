console.log("javascript file has loaded");
/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

*/
document.getElementById("get-activity").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
/*       console.log(data); */
      document.getElementById("activity").textContent = data.activity;
    });
});

const div = document.getElementsByClassName("wrapper")
div[0].classList.toggle("bg-color");