var pizaa = document.getElementById("pizza");
var salads = document.getElementById("salads");
var starter = document.getElementById("starter");
var pizaaContent = document.getElementById("pizza-content");
var saladsContent = document.getElementById("salads-content");
var starterContent = document.getElementById("starter-content");
saladsContent.style.display = "none";
starterContent.style.display = "none";
pizaa.addEventListener("click", () => {
  pizaaContent.style.display = "block";
  saladsContent.style.display = "none";
  starterContent.style.display = "none";
  pizaa.classList.add("active");
  salads.classList.remove("active");
  starter.classList.remove("active");
});
salads.addEventListener("click", () => {
  saladsContent.style.display = "block";
  pizaaContent.style.display = "none";
  starterContent.style.display = "none";
  pizaa.classList.remove("active");
  salads.classList.add("active");
  starter.classList.remove("active");
});
starter.addEventListener("click", () => {
  starterContent.style.display = "block";
  pizaaContent.style.display = "none";
  saladsContent.style.display = "none";
  pizaa.classList.remove("active");
  salads.classList.remove("active");
  starter.classList.add("active");
});
