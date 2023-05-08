const adviceDiceImg = document.querySelector(".advice__dice img");
const adviceParagraph = document.querySelector(".advice__paragraph");
const adviceTitleId = document.querySelector(".advice__title-id");
const adviceDivider = document.querySelector(".advice__divider img");

const developer = document.querySelector(".developer");
const attribution = document.querySelector(".attribution");

window.addEventListener("DOMContentLoaded", () => {
  getAdvice();
});

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      console.log(data);
    })
    .catch((error) => console.log(error));
};

const setData = (data) => {
  adviceTitleId.innerText = data.slip.id;
  adviceParagraph.innerText = `"${data.slip.advice}"`;
};

adviceDiceImg.addEventListener("click", () => {
  adviceTitleId.innerText = "";
  adviceParagraph.innerText = "";
  getAdvice();
});

if(window.innerWidth <= 375){
  adviceDivider.src = "../images/pattern-divider-mobile.svg";
  adviceDivider.style.width = "100%";
}

developer.addEventListener("click", () => {
    attribution.classList.toggle("attribution--active");
})