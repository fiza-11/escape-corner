function greetUser() {
  alert("Welcome to Fiza's Escape Corner! If you're Fiza then you're the developer's favorite person in the world, this space is for you. Have fun! And if you're not Fiza, leave immediately please!");
}

// Function to toggle a dropdown menu
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

const audio = document.createElement('audio');
audio.src = 'rain.mp3';
audio.controls = false; // Optional: Add controls
audio.loop = true; // Enable looping

let flag = false;
function changeBackground() {
  const bg = document.querySelector(".lofi-background");
  if (flag) {
    audio.pause();
    bg.style.backgroundImage = "url(room-bg.jpg)"; // Use url() for paths
  } else {
    document.body.appendChild(audio);
    audio.play();
    audio.volume = 0.2;
    bg.style.backgroundImage = "url(study-bg.jpg)";
  }
  flag = !flag; // Toggle the flag
}

const showmath = document.getElementById("showmath");
const mathframe = document.getElementById("mathframe");

showmath.addEventListener("click", function() {
  if (mathframe.style.display === "none") {
    mathframe.style.display = "flex"; // Show the iframe
  } else {
    mathframe.style.display = "none"; // Hide the iframe
  }
});

const showeng = document.getElementById("showeng");
const engframe = document.getElementById("engframe");

showeng.addEventListener("click", function() {
  if (engframe.style.display === "none") {
    engframe.style.display = "flex"; // Show the iframe
  } else {
    engframe.style.display = "none"; // Hide the iframe
  }
});

const showphy = document.getElementById("showphy");
const phyframe = document.getElementById("phyframe");

showphy.addEventListener("click", function() {
  if (phyframe.style.display === "none") {
    phyframe.style.display = "flex"; // Show the iframe
  } else {
    phyframe.style.display = "none"; // Hide the iframe
  }
});

const showchem = document.getElementById("showchem");
const chemframe = document.getElementById("chemframe");

showchem.addEventListener("click", function() {
  if (chemframe.style.display === "none") {
    chemframe.style.display = "flex"; // Show the iframe
  } else {
    chemframe.style.display = "none"; // Hide the iframe
  }
});

const showurdu = document.getElementById("showurdu");
const urduframe = document.getElementById("urduframe");

showurdu.addEventListener("click", function() {
  if (urduframe.style.display === "none") {
    urduframe.style.display = "flex"; // Show the iframe
  } else {
    urduframe.style.display = "none"; // Hide the iframe
  }
});

const showbio = document.getElementById("showbio");
const bioframe = document.getElementById("bioframe");

showbio.addEventListener("click", function() {
  if (bioframe.style.display === "none") {
    bioframe.style.display = "flex"; // Show the iframe
  } else {
    bioframe.style.display = "none"; // Hide the iframe
  }
});
