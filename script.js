'use strict';

const projects = [
  {
    title: "My Favourite Events",
    description: "A single-page rundown of my go-to track workouts — 400m, 800m, and 10km — laid out as a Flexbox row of cards.",
    tags: ["HTML", "Flexbox", "Typography"],
    url: "projects/track-favorites/index.html",
    year: "2026"
  },
  {
    title: "Curbside Thai",
    description: "A three-page responsive site for a fictional Thai food truck, sharing one stylesheet and holding together on a phone.",
    tags: ["HTML", "Responsive", "Forms"],
    url: "projects/curbside-thai/index.html",
    year: "2026"
  },
  {
    title: "PeepMatch",
    description: "A dating-app-style profile card for a very fluffy client, with a vitals table, a validated form, and a pulsing Like button.",
    tags: ["CSS Animation", "Tables", "Form Validation"],
    url: "projects/peepmatch/index.html",
    
  },
  {
    title: "Interactive Portfolio",
    description: "This M7A5 build: a data-driven project explorer that filters the log by keyword and tag without reloading the page.",
    tags: ["JavaScript", "DOM", "Events"],
    url: "#explorer",
    year: "2026"
  }
];

function getFilteredProjects(list, searchTerm, selectedTag) {
  const term = (searchTerm || "").trim().toLowerCase();
  const tag = (selectedTag || "all").toLowerCase();

  return list.filter(function (project) {
    const searchableText = (
      project.title + " " +
      project.description + " " +
      project.tags.join(" ")
    ).toLowerCase();

    const matchesSearch = term === "" || searchableText.includes(term);
    const matchesTag = tag === "all" || project.tags.some(function (projectTag) {
      return projectTag.toLowerCase() === tag;
    });

    return matchesSearch && matchesTag;
  });
}

function renderProjects(list) {
  const container = document.querySelector("#project-list");
  const count = document.querySelector("#project-count");

  if (!container || !count) {
    return;
  }

  container.textContent = "";

  if (list.length === 0) {
    const empty = document.createElement("p");
    empty.className = "explorer-empty";
    empty.textContent = "No projects matched that search. Try a different word or tag.";
    container.appendChild(empty);
    count.textContent = "Showing 0 of " + projects.length + " projects.";
    return;
  }

  const fragment = document.createDocumentFragment();

  for (const project of list) {
    const card = document.createElement("article");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;
    card.appendChild(title);

    const meta = document.createElement("p");
    meta.className = "project-meta";
    meta.textContent = project.year + " · " + project.tags.join(", ");
    card.appendChild(meta);

    const description = document.createElement("p");
    description.textContent = project.description;
    card.appendChild(description);

    const link = document.createElement("a");
    link.className = "visit";
    link.href = project.url;
    link.textContent = "View project →";
    card.appendChild(link);

    fragment.appendChild(card);
  }

  container.appendChild(fragment);
  count.textContent = "Showing " + list.length + " of " + projects.length + " projects.";
}

const searchInput = document.querySelector("#project-search");
const tagSelect = document.querySelector("#project-filter");

function updateProjects() {
  const searchTerm = searchInput ? searchInput.value : "";
  const selectedTag = tagSelect ? tagSelect.value : "all";
  const filtered = getFilteredProjects(projects, searchTerm, selectedTag);
  renderProjects(filtered);
}

if (searchInput && tagSelect) {
  searchInput.addEventListener("input", updateProjects);
  tagSelect.addEventListener("change", updateProjects);
}

renderProjects(projects);