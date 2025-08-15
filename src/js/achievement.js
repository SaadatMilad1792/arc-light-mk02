// --------------------------------- //
// -- create achievements section -- //
// --------------------------------- //
export function createAchievement(data) {
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

  let innerHTML = "";
  for (let item of data.body) {
    innerHTML += `
      <div class="row-box gen-gap shadow-type-one" style="flex: 1;">
        <img class="award-logo" src="${item.achLogo}" alt="Award Logo"/>
        <div class="col-box" style="display: block; flex: 1; padding: 0px 4px;">
          <h3 class="ach-title">${item.title}</h3>
          <span class="time-span">${item.Institution} (${item.timeSpan})</span>
          <hr>
          <p class="p-type-two">${item.achDescription}</p>
        </div>
      </div>
    `;
  }

  // Add content to the achievement container
  main.innerHTML += `
    <div id="${data.sectionId}" class="main-origin-box">
      <div class="main-inner-box">
        <h1 class="section-title">${data.section.name}</h1>
        <hr class="main-barrier-t1">
        <div class="gen-gap ach-grid">
          ${innerHTML}
        </div>
      </div>
    </div>
  `;
}