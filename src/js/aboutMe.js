// -------------------------------------------- //
// -- create about me section of the website -- //
// -------------------------------------------- //
export function createAboutMe(data) {
  const main = document.querySelector("main");
  main.classList.add("main-origin-box");

  let headerNav = document.getElementById("header-nav-box-item-list");
  let navName = document.getElementById("header-nav-box-name");
  let pageTitle = document.getElementById("page-title");

  navName.innerText = data.userName;
  pageTitle.innerText = data.pageTitle;

  // Create the navigation link
  headerNav.innerHTML += `
    <a class="header-nav-box-anchor" href="#${data.sectionId}">
      <li class="header-nav-box-item">
        ${data.section.name}
      </li>
    </a>
  `;

  // Generate social grid
  let socialGrid = "";
  for (const platform of data.body.socialMedia) {
    socialGrid += `
      <a class="social-link" href="${platform.scLink}" target="${platform.tgLink}">
        <li class="row-box social-media-platform">
          <img class="social-logo" src="${platform.imgSrc}" alt="Image of ${platform.imgTxt}" />
          <p class="social-description">${platform.imgTxt}</p>
        </li>
      </a>
    `;
  }

  // Add content to the aboutMeContainer
  main.innerHTML += `
    <div id="${data.sectionId}" class="main-origin-box main-content-container">
      <div class="main-inner-box">
        <h1 class="section-title">${data.section.name}</h1>
        <hr class="main-barrier-t1">
        <div id="aboutMe-countainer" class="row-box gen-gap">
          <div class="info-panel gen-gap shadow-type-one">
            <div class="col-box gen-gap">
              <img class="profile-img" src="${data.body.aboutMeImgUrl}" alt="Profile Picture"/>
              <ul class="social-grid">${socialGrid}</ul>
              <a class="resume-cv" href="${data.resumeDir}" download="resume.pdf">Download Resume/CV</a>
            </div>
          </div>
          <div class="description">
            <p>${data.body.aboutMeDescription}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}