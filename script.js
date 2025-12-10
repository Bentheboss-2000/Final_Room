var g7 = document.getElementById("seven");
var g3 = document.getElementById("three");

index = 0;
index1 = 0;
x = 0;
c = 0;

function instructions() {
  const modal2 = document.getElementById("instructions");
  modal2.classList.add("show");
  modal2.style.display = "flex";
}

function hideModal() {
  const modal = document.getElementById("myModal");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 400);

  const modal2 = document.getElementById("instructions");
  modal2.classList.remove("show");
  setTimeout(() => (modal2.style.display = "none"), 400);
}
function openModalcal() {
  document.getElementById("customModal").style.display = "flex";
}

function closeModalcal() {
  document.getElementById("customModal").style.display = "none";
}

function closeModal3() {
  document.getElementById("MyModal3").style.display = "none";
}

const images = [
  "images/mon2.png",
  "images/mon3.png",
  "images/mon4.png",
  "images/mon5.png",
  "images/mon6.png",
  "images/mon7.png",
  "images/mon8.png",
  "images/mon9.png",
  "images/mon10.png",
  "images/mon11.png",
  "images/mon12.png",
];

const imagess = [
  "images/Cauldron.png",
  "images/BackGround.png",
  "images/Cauldron.png",
  "images/frost_giant_tears.png",
  "images/ground.jpg",
  "images/katana.png",
  "images/Cauldron.png",
  "images/BackGround.png",
  "images/Cauldron.png",
  "images/frost_giant_tears.png",
  "images/ground.jpg",
  "images/katana.png",
];
// CAULDRON CLICK COUNTER AND POPUP TRIGGER

const cycleImg = document.getElementById("cycleImg");
let currentIndex = 0;

// Open cauldron modal
function openModalcal() {
  const modal = document.getElementById("customModal");

  // Reset
  cycleImg.src = "images/mon1.png";
  currentIndex = 0;

  // Show with fade
  modal.classList.add("show");
}

function closeModalcal() {
  const modal = document.getElementById("customModal");

  // Fade out
  modal.classList.remove("show");
}

// Close cauldron modal

// CLICK HANDLER
// Close cauldron modal
function closeModalcal() {
  const modal = document.getElementById("customModal");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 400);
}

// Click handler
let clickLocked = false;

cycleImg.addEventListener("click", function () {
  if (clickLocked) return; // ⛔ prevent spam clicks
  clickLocked = true; // lock clicks

  currentIndex++;

  setTimeout(() => {
    if (currentIndex < 11) {
      cycleImg.src = images[currentIndex];
      clickLocked = false; // unlock after image updates
      return;
    }

    // show note immediately (no unlock because we're done)
    const modal2 = document.getElementById("myModal2");
    modal2.style.display = "flex";
    modal2.classList.add("show");
    modal2.style.zIndex = "909999";

    // hide cauldron modal
    const modal = document.getElementById("customModal");
    modal.style.zIndex = "0";
    modal.classList.remove("show");
    setTimeout(() => (modal.style.display = "none"), 400);
  }, 700); // ⏳ waits 1.5 seconds
});
window.addEventListener("load", () => {
  // Wait until the last line animation finishes
  setTimeout(() => {
    const closeBtn = document.querySelector("#MyModal3 .close");
    closeBtn.style.opacity = "1";
    closeBtn.style.pointerEvents = "auto";
  }, 12800); // 12.8 seconds
});
