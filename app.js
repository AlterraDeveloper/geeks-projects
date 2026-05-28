

const projectBlocks = document.querySelectorAll(".project");

projectBlocks.forEach((block) => {
  block.addEventListener("click", (event) => {

    if (event.target.classList.contains("copy-btn")) {
      const projectName = block.dataset.projectName;
      const text = projectsInfo[projectName]?.text || "No description available.";
      window.navigator.clipboard.writeText(text).then(() => {
        // alert(`Project name "${projectName}" copied to clipboard!`);
      }).catch((err) => {
        console.error("Failed to copy project name: ", err);
      });
      return;
    } 

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