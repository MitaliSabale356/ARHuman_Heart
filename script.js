document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const scene = document.querySelector("a-scene");

  btn.addEventListener("click", async () => {
    await scene.components["mindar-image-system"].start();
    btn.style.display = "none";
  });
});