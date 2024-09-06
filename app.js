// let items=document.querySelectorAll(".questions-items");


// document.querySelectorAll(".questions-items").forEach((box)=>{
//     let div=box.querySelector(".questions-des");
//     let i=box.querySelector(".questions-items-box i");
//            i.addEventListener("mouseover",()=>{
//             div.classList.remove("hide");
//             // box.classList.add("fa-light fa-xmark");
//      });
//     box.addEventListener("mouseout",()=>{
//         div.classList.add("hide");
//         //  box.classList.remove("fa-light fa-xmark");
// });
// });

let items = document.querySelectorAll(".questions-items");
let sec=document.querySelector("#questions");
items.forEach((item) => {
   let img = item.querySelector(".questions-items-box i");
        let icon = item.querySelector(".questions-des");
    img.addEventListener("mouseover", () => {
         sec.style.height="180vh";
        //  img.classList.add("fa-solid");
        //  img.classList.add("fa-xmark");
        //  img.style.fontSize="2rem";
        //  img.style.marginTop="10px";
        //  img.style.marginLeft="635px";
        icon.classList.remove("hide");});
 img.addEventListener("mouseout", () => {
    sec.style.height="130vh";
    // img.classList.remove("fa-solid");
    // img.classList.remove("fa-xmark");
    // img.style.fontSize="3rem";
    // img.style.marginTop="0px";
    // img.style.marginLeft="630px";
    icon.classList.add("hide");});
});

document.addEventListener('DOMContentLoaded', () => {
let i=document.querySelector("#download-icon i");
let a=true;
setInterval(()=>{
    if(a){

        i.classList.add("fa-regular ");
        i.classList.add("fa-circle-check");
        a=false;
  
    }
    else{
        i.classList.remove("fa-regular");
        i.classList.remove("fa-circle-check");
        a=true;

    }
},600);
});