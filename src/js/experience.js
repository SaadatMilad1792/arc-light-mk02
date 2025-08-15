export function createExperience(data) {
  const main = document.querySelector("main");
  main.classList.add("main-origin-box");

  let headerNav = document.getElementById("header-nav-box-item-list");

  // Create the navigation link
  headerNav.innerHTML += `
    <a class="header-nav-box-anchor" href="#${data.sectionId}">
      <li class="header-nav-box-item">
        ${data.section.name}
      </li>
    </a>
  `;

  let itemsPerPage = 4;
  let currentPage = 1;
  let totalPages = Math.ceil(data.body.length / itemsPerPage);

  let experienceContainer = "";
  for (let item of data.body) {
    experienceContainer += `
      <div class="col-box" style="display: block; flex: 1; margin: 0px 16px;">
        <h3 class="ach-title">${item.title}</h3>
        <span class="time-span">${item.expTitle} (${item.timeSpan})</span>
        <hr class="thin-line">
        <p class="p-type-two">${item.jobDescription}</p>
      </div>
    `;
  }

  // Add header and pagination buttons
  main.innerHTML += `
    <div id="${data.sectionId}" class="main-origin-box">
      <div class="main-inner-box">
        <h1 class="section-title row-box" style="justify-content: space-between;">
          ${data.section.name}
          <div class="pag-control-box">
            <button data-action="prev" data-section="${data.sectionId}" class="exp-prv-btn">
              <img src="../src/components/icons/prvBtn.png" />
            </button>
            <span id="${data.sectionId}-pag-page" class="pag-page">Page ${currentPage} of ${totalPages}</span>
            <button data-action="next" data-section="${data.sectionId}" class="exp-nxt-btn">
              <img src="../src/components/icons/nxtBtn.png" />
            </button>
          </div>
        </h1>
        <hr class="main-barrier-t1">
        <div id="${data.sectionId}-container" class="col-box gen-gap">
          ${experienceContainer}
        </div>
      </div>
    </div>
  `;

  function renderExperiencePage() {
    const experienceContainer = document.getElementById(`${data.sectionId}-container`);
    const pageCounter = document.getElementById(`${data.sectionId}-pag-page`);

    if (!experienceContainer || !pageCounter) return;

    experienceContainer.innerHTML = ""; // Clear existing content

    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let paginatedItems = data.body.slice(start, end);

    paginatedItems.forEach((item) => {
      experienceContainer.innerHTML += `
        <div class="col-box" style="display: block; flex: 1; margin: 0px 16px;">
          <h3 class="ach-title">${item.title}</h3>
          <span class="time-span">${item.expTitle} (${item.timeSpan})</span>
          <hr class="thin-line">
          <p class="p-type-two">${item.jobDescription}</p>
        </div>
      `;
    });

    // Update page number
    pageCounter.textContent = `Page ${currentPage} of ${totalPages}`;
  }

  // Attach event listeners to a parent that exists (event delegation)
  main.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const action = button.getAttribute("data-action");
    const section = button.getAttribute("data-section");

    if (section === data.sectionId) {
      if (action === "next" && currentPage < totalPages) {
        currentPage++;
        renderExperiencePage();
      } else if (action === "prev" && currentPage > 1) {
        currentPage--;
        renderExperiencePage();
      }
    }
  });

  // Initial render
  renderExperiencePage();
}
