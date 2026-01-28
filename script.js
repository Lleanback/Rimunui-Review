// script.js

// This line will be auto-updated by build-images.js
const imageFiles = []; // DO NOT EDIT MANUALLY

const gallery = document.getElementById("gallery");

// Build the grid
imageFiles.forEach((src, index) => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.dataset.index = index;

  const img = document.createElement("img");
  img.src = src;
  img.alt = "Gallery image " + (index + 1);

  item.appendChild(img);
  gallery.appendChild(item);
});

// Expanded view navigation (left/right click)
let currentIndex = null;

function expandImageAtIndex(index) {
  if (index < 0 || index >= imageFiles.length) return;

  const current = document.querySelector(".gallery-item.expanded");
  if (current) current.classList.remove("expanded");

  const nextItem = gallery.querySelector(`.gallery-item[data-index="${index}"]`);
  if (!nextItem) return;

  nextItem.classList.add("expanded");
  document.body.style.overflow = "hidden";
  currentIndex = index;
}

// CLICK HANDLER: left 25% = prev, right 25% = next, middle 50% = close
gallery.addEventListener("click", (event) => {
  const item = event.target.closest(".gallery-item");
  if (!item) return;

  const index = Number(item.dataset.index);

  // If not expanded yet, expand the clicked image
  if (!item.classList.contains("expanded")) {
    expandImageAtIndex(index);
    return;
  }

  // Already expanded: decide prev / next / close based on click position
  const img = item.querySelector("img");
  if (!img) {
    item.classList.remove("expanded");
    document.body.style.overflow = "";
    currentIndex = null;
    return;
  }

  const rect = img.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const width = rect.width;

  const leftZone = width * 0.25;   // 0–25%
  const rightZone = width * 0.75;  // 75–100%

  if (clickX < leftZone) {
    // Go to previous image
    const prevIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
    expandImageAtIndex(prevIndex);
  } else if (clickX > rightZone) {
    // Go to next image
    const nextIndex = (currentIndex + 1) % imageFiles.length;
    expandImageAtIndex(nextIndex);
  } else {
    // Middle zone: close back to gallery view
    item.classList.remove("expanded");
    document.body.style.overflow = "";
    currentIndex = null;
  }
});
