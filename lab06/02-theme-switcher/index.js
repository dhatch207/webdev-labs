const applyDefault = () => {
   document.querySelector("body").className = "";
};
const applyOcean = () => {
   document.querySelector("body").className = "ocean";
};
const applyDesert = () => {
   document.querySelector("body").className = "desert";
};
const applyHighContrast = () => {
   document.querySelector("body").className = "high-contrast";
};

document.querySelector("#default").addEventListener('click', applyDefault);
document.querySelector("#ocean").addEventListener('click', applyOcean);
document.querySelector("#desert").addEventListener('click', applyDesert);
document.querySelector("#high-contrast").addEventListener('click', applyHighContrast);