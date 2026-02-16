

const projectBlocks = document.querySelectorAll(".project");

projectBlocks.forEach((block) => {
  block.addEventListener("click", () => {
    const projectName = block.dataset.projectName;
    const mainUrl = location.origin;
    const isLocalhost = location.hostname === "localhost" || location.hostname === "127.0.0.1";
    if (isLocalhost) {
      window.open(`${mainUrl}/${projectName}`, "_blank");
    } else {
      window.open(`${mainUrl}/geeks-projects/${projectName}`, "_blank");
    }
  });
});