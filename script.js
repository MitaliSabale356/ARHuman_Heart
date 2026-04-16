document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const scene = document.querySelector("a-scene");

  btn.addEventListener("click", async () => {
    const mindarSystem = scene.systems["mindar-image-system"];

    if (mindarSystem) {
      await mindarSystem.start();
      btn.style.display = "none";
    } else {
      alert("AR not starting");
    }
  });
});