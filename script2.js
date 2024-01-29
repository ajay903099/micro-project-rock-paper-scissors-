const rulesbtn= document.querySelector(".rulesbtn");
const crossbtn=document.querySelector(".cross");
const rulesshow=document.querySelector(".rules");



rulesbtn.addEventListener("click",()=>{
    crossbtn.style.display="flex";
    rulesshow.style.display="flex";
})

crossbtn.addEventListener("click",()=>{
    crossbtn.style.display="none";
    rulesshow.style.display="none";

})

