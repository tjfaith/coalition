const tabButton1 = document.getElementById("tabBtn1");
const tabButton2 = document.getElementById("tabBtn2");

const tabOne = document.getElementById("tab-one");
const tabTwo = document.getElementById("tab-two");

tabButton1.addEventListener("click", () => {
  tabOne.style.transform = "translateX(0%)";
  tabTwo.style.transform = "translateX(0%)";

  tabButton1.classList.add("active");
  tabButton2.classList.remove("active");
});

tabButton2.addEventListener("click", () => {
  tabOne.style.transform = "translateX(-100%)";
  tabTwo.style.transform = "translateX(-100%)";

  tabButton1.classList.remove("active");
  tabButton2.classList.add("active");
});

function checkMediaQuery() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    tabButton1.classList.add("active");
    tabButton2.classList.remove("active");
  }
}

window.addEventListener("resize", checkMediaQuery);

checkMediaQuery();
