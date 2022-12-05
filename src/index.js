import "./styles.css";
import info from "./data.json";

const main = document.querySelector(".main");
let filters = [];
let filtered = [];

const createListing = (data) => {
  const listingContainer = document.createElement("div");
  listingContainer.classList.add("listingContainer");
  listingContainer.dataset.id = data.id;
  data.featured ? listingContainer.classList.add("featureContainer") : "";

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("infoContainer");

  const companyImg = new Image();
  companyImg.classList.add("logo");
  companyImg.src = data.logo;
  // companyImg.src = logo;

  const companyInfo = document.createElement("div");
  companyInfo.classList.add("listingInfo");

  const companyHead = document.createElement("div");
  companyHead.classList.add("companyHead");

  const companyName = document.createElement("p");
  companyName.classList.add("companyName");
  companyName.textContent = data.company;
  companyHead.appendChild(companyName);

  // add new and featured buttons
  data.new ? createBadge("new", companyHead) : "";
  data.featured ? createBadge("featured", companyHead) : "";

  const position = document.createElement("p");
  position.classList.add("position");
  position.textContent = data.position;

  const logistics = document.createElement("div");
  logistics.classList.add("logistics");

  // const separator = document.createElement("span");
  // separator.classList.add("separator");

  const postedAt = document.createElement("span");
  postedAt.textContent = data.postedAt;

  const contract = document.createElement("span");
  contract.textContent = data.contract;

  const location = document.createElement("span");
  location.textContent = data.location;

  //filter tags
  const filterContainer = document.createElement("div");
  filterContainer.classList.add("filterContainer");
  createFilterTag(data.role, filterContainer);
  createFilterTag(data.level, filterContainer);
  data.languages.map((language) => {
    createFilterTag(language, filterContainer, "languages");
  });

  data.tools.map((tool) => {
    createFilterTag(tool, filterContainer, "tools");
  });

  logistics.appendChild(postedAt);
  logistics.appendChild(contract);
  logistics.appendChild(location);

  companyInfo.appendChild(companyHead);
  companyInfo.appendChild(position);
  companyInfo.appendChild(logistics);

  infoContainer.appendChild(companyImg);
  infoContainer.appendChild(companyInfo);

  listingContainer.appendChild(infoContainer);
  listingContainer.appendChild(filterContainer);

  main.appendChild(listingContainer);
};

const createBadge = (type, element) => {
  const badge = document.createElement("span");
  badge.classList.add(`${type}`);
  badge.classList.add("badge");
  badge.textContent = type;
  element.appendChild(badge);
};

const createFilterTag = (tag, element, type) => {
  const filterTag = document.createElement("span");
  filterTag.classList.add("filterTag");
  filterTag.textContent = tag;

  filterTag.addEventListener("click", () => {
    filterHandler(tag, type);
  });
  element.appendChild(filterTag);
};

const clearListings = () => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
};

const filterHandler = (tag, type) => {
  //only works for languages/tools filters
  filters.includes(tag) ? "" : filters.push(tag);
  let list;
  if (filtered.length == 0) {
    console.log("using info");
    list = info;
  } else {
    console.log("using filtered");
    list = filtered;
  }
  console.log(list);
  clearListings();
  // if (!type) {
  //   info.map((listing) =>
  //     listing.includes(tag) ? createListing(listing) : ""
  //   );
  // }
  filters.map((filter) => {
    list.map((listing) => {
      // listing[type].includes(filter) ? createListing(listing) : "";
      listing[type].includes(filter)
        ? !filtered.includes(listing)
          ? filtered.push(listing)
          : ""
        : "";
    });
  });
  console.log(filtered);

  filtered.map(createListing);
};

info.map(createListing);
