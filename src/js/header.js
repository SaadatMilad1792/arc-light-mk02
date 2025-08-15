export function createHeader() {
  const header = document.querySelector("header");
  header.classList.add("header-origin-box");

  header.innerHTML = `
    <div class="header-nav-box-l1">
      <div class="header-nav-box-l2">
        <div id="header-nav-box-name" class="header-nav-box-name"></div>
        <div class="hamburger-wrap">
          <button id="hamburger-menu" class="hamburger-menu">&#9776;</button>
        </div>
        <div class="header-nav-box-list">
          <ul id="header-nav-box-item-list" class="header-nav-box-item-list"></ul>
        </div>
      </div>
    </div>
    <hr class="header-barrier">
  `;

  // Use event delegation on document to ensure elements exist before adding listeners
  document.addEventListener("click", (event) => {
    const menuButton = document.getElementById("hamburger-menu");
    const navList = document.querySelector(".header-nav-box-list");

    if (!menuButton || !navList) return; // Ensure elements exist

    // Toggle menu on button click
    if (event.target === menuButton) {
      navList.classList.toggle("active");
      event.stopPropagation(); // Prevent immediate closing
    } 
    // Close menu if clicking outside
    else if (!navList.contains(event.target)) {
      navList.classList.remove("active");
    }
  });
}
