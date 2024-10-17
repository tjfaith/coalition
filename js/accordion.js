const accButton1 = document.getElementById("accBtn1");
const accButton2 = document.getElementById("accBtn2");

const accOne = document.getElementById("tab-one");
const accTwo = document.getElementById("tab-two");

accButton1.addEventListener("click", () => {
  accButton1.classList.toggle("active");
  if (accButton1.classList.contains("active")) {
    accOne.style.maxHeight = accOne.scrollHeight + "%";
    accTwo.style.maxHeight = "0";
    accButton2.classList.remove("active");
  } else {
    accOne.style.maxHeight = "0";
  }
});

accButton2.addEventListener("click", () => {
  accButton2.classList.toggle("active");
  if (accButton2.classList.contains("active")) {
    accTwo.style.maxHeight = accTwo.scrollHeight + "%";
    accOne.style.maxHeight = "0";
    accButton1.classList.remove("active");
  } else {
    accTwo.style.maxHeight = "0";
  }
});

function checkMediaQuery() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    accButton1.classList.add("active");
    accButton2.classList.remove("active");

    accOne.style.maxHeight = accOne.scrollHeight + "%";
    accTwo.style.maxHeight = "0";

    accOne.style.transform = "translateX(0%)";
    accTwo.style.transform = "translateX(0%)";
    
  } else {
    accOne.style.maxHeight = "100%";
    accTwo.style.maxHeight = "100%";
  }
}

window.addEventListener("resize", checkMediaQuery);

checkMediaQuery();
