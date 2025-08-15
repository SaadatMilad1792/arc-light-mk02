export function createPublication(data) {
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

  const itemsPerPage = 10;
  let currentPage = 1;
  let totalPages = Math.ceil(data.body.length / itemsPerPage);

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
        <div id="${data.sectionId}-container" class="col-box gen-gap" style="gap: 12px;"></div>
      </div>
    </div>
  `;

  function renderPublicationPage() {
    const publicationContainer = document.getElementById(`${data.sectionId}-container`);
    const pageCounter = document.getElementById(`${data.sectionId}-pag-page`);

    if (!publicationContainer || !pageCounter) return;

    publicationContainer.innerHTML = ""; // Clear existing content

    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let paginatedItems = data.body.slice(start, end);

    let pubCount = (currentPage - 1) * itemsPerPage;
    paginatedItems.forEach((item) => {
      pubCount++;
      publicationContainer.innerHTML += `
        <div class="row-box gen-gap" style="flex: 1;">
          <p><strong>[${pubCount}]</strong></p>
          <p class="p-type-two" style="margin: 0px;">${item.publication}</p>
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
        renderPublicationPage();
      } else if (action === "prev" && currentPage > 1) {
        currentPage--;
        renderPublicationPage();
      }
    }
  });

  // Initial render
  renderPublicationPage();
}
