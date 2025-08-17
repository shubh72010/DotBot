// Optional: Pulse effect on thermal spike
document.addEventListener("DOMContentLoaded", () => {
  const pulse = document.querySelector("body");
  setInterval(() => {
    pulse.style.boxShadow = "0 0 40px rgba(0,255,224,0.2)";
    setTimeout(() => {
      pulse.style.boxShadow = "none";
    }, 300);
  }, 5000); // every 5s
});