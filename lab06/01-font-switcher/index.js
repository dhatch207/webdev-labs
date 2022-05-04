const applyFontChange = (object, change) => {
   const newFontSize =
      parseFloat(getComputedStyle(object).fontSize) + change;
   object.style.fontSize = `${newFontSize}px`;
}

const makeBigger = () => {
   applyFontChange(document.querySelector(".content"), 5);
   applyFontChange(document.querySelector("h1"), 5);
};

const makeSmaller = () => {
   applyFontChange(document.querySelector(".content"), -5);
   applyFontChange(document.querySelector("h1"), -5);
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);