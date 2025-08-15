// src --> js --> main.js
import { createHeader } from "./header.js";
import { createAboutMe } from "./aboutMe.js";
import { createEducation } from "./education.js";
import { createExperience } from "./experience.js";
import { createAchievement } from "./achievement.js";
import { createPublication } from "./publication.js";
import { createFooter } from "./footer.js";

// read json object files from local directory
async function getJsonData(url) {
  const object = (await import(url, { with: { type: 'json' } })).default;
  return object;
}

async function loadInOrder() {
  try {
    await createHeader();
    await getJsonData("../components/json/aboutMe.json").then(createAboutMe);
    await getJsonData("../components/json/education.json").then(createEducation);
    await getJsonData("../components/json/experience.json").then(createExperience);
    await getJsonData("../components/json/achievement.json").then(createAchievement);
    await getJsonData("../components/json/publication.json").then(createPublication);
    await createFooter();
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

loadInOrder();