// --------------------------------------------- //
// -- create education section of the website -- //
// --------------------------------------------- //
export function createEducation(data) {
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
  
  let educationList = "";
  for (let item of data.body) {
    educationList += `
      <div class="row-box gen-gap shadow-type-one" style="flex: 1;">
        <img class="school-logo" src="${item.schoolLogo}" alt="${item.schoolAlt}"/>
        <div class="col-box" style="display: block; flex: 1; padding-right: 4px;">
          <h3 class="education-title">${item.schoolName}</h3>
          <span class="time-span">${item.degree} (${item.timeSpan})</span>
          <hr>
          <p class="p-type-two">${item.schoolDescription}</p>
        </div>
      </div>
    `;
  }

  // Add content to the education
  main.innerHTML += `
    <div id="${data.sectionId}" class="main-origin-box">
      <div class="main-inner-box">
        <h1 class="section-title">${data.section.name}</h1>
        <hr class="main-barrier-t1">
        <div class="col-box gen-gap">
          ${educationList}
        </div>
      </div>
    </div>
  `;
}