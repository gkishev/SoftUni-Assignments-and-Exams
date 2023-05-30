function toggle() {
    const LESS = "Less";
    const MORE = "More";

   const buttonSpan =  document.querySelector(".button");
   const divWrapperText = document.querySelector("#extra");

   buttonSpan.textContent = buttonSpan.textContent === MORE ? LESS:MORE 

   divWrapperText.style.display = divWrapperText.style.display === "none" || 
   divWrapperText.style.display === "" ? "block":"none"
}