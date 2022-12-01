import "./styles.css";
// import logo from "./images/insure.svg";
import info from "./data.json";

const main = document.querySelector(".main");

const createListing = (data) => {
  const listingContainer = document.createElement("div");
  listingContainer.classList.add("listingContainer");
  listingContainer.dataset.id = data.id;

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("infoContainer");

  const companyImg = new Image();
  companyImg.classList.add("logo");
  companyImg.src = data.logo;
  // companyImg.src = logo;

  const companyInfo = document.createElement("div");
  companyInfo.classList.add("listingInfo");

  const companyName = document.createElement("p");
  companyName.classList.add("companyName");
  companyName.textContent = data.company;

  // add new and featured buttons

  const position = document.createElement("p");
  position.classList.add("position");
  position.textContent = data.position;

  const logistics = document.createElement("div");
  const postedAt = document.createElement("span");
  postedAt.textContent = data.postedAt;

  const contract = document.createElement("span");
  contract.textContent = data.contract;

  const location = document.createElement("span");
  location.textContent = data.location;

  logistics.appendChild(postedAt);
  logistics.appendChild(contract);
  logistics.appendChild(location);

  companyInfo.appendChild(companyName);
  companyInfo.appendChild(position);
  companyInfo.appendChild(logistics);

  infoContainer.appendChild(companyImg);
  infoContainer.appendChild(companyInfo);

  listingContainer.appendChild(infoContainer);

  main.appendChild(listingContainer);
};

info.map(createListing);
