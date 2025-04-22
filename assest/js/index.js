const password=document.querySelector(".password")
const write=document.querySelector(".write")
const img=document.querySelector(".img")
 

password.addEventListener("input", (e) => {
  const length = e.target.value.length;
  const blur = Math.max(15 - length * 2, 0); 
  img.style.filter = `blur(${blur}px)`;
});