// script.js

// This line will be auto-updated by build-images.js
const imageFiles = [
  "images/._157A0556.avif",
  "images/._157A0585.avif",
  "images/._157A0586.avif",
  "images/._157A0607.avif",
  "images/._157A0633.avif",
  "images/._157A0638.avif",
  "images/._157A0645.avif",
  "images/._157A0647.avif",
  "images/._157A0648.avif",
  "images/._157A0650.avif",
  "images/._157A0652.avif",
  "images/._157A0655.avif",
  "images/._157A0663.avif",
  "images/._157A0700.avif",
  "images/._157A0702.avif",
  "images/._157A0709.avif",
  "images/._157A0714.avif",
  "images/._157A0725.avif",
  "images/._157A0741.avif",
  "images/._157A0828.avif",
  "images/._157A0965-2.avif",
  "images/._157A0965.avif",
  "images/._157A1180.avif",
  "images/._157A1419.avif",
  "images/._157A1423.avif",
  "images/._157A1462.avif",
  "images/._157A1480.avif",
  "images/._157A1589.avif",
  "images/._157A1770.avif",
  "images/._157A1789.avif",
  "images/._157A1823.avif",
  "images/._157A1963.avif",
  "images/._157A1967.avif",
  "images/._157A1979.avif",
  "images/._157A2025.avif",
  "images/._157A2043.avif",
  "images/._157A2185.avif",
  "images/._157A2189.avif",
  "images/._157A2203.avif",
  "images/._157A2228.avif",
  "images/._157A2234.avif",
  "images/._157A2265.avif",
  "images/._157A2321-2.avif",
  "images/._157A2321.avif",
  "images/._157A2327.avif",
  "images/._157A2349.avif",
  "images/._157A2372.avif",
  "images/._157A2424.avif",
  "images/157A0556.avif",
  "images/157A0585.avif",
  "images/157A0586.avif",
  "images/157A0607.avif",
  "images/157A0633.avif",
  "images/157A0638.avif",
  "images/157A0645.avif",
  "images/157A0647.avif",
  "images/157A0648.avif",
  "images/157A0650.avif",
  "images/157A0652.avif",
  "images/157A0655.avif",
  "images/157A0663.avif",
  "images/157A0700.avif",
  "images/157A0702.avif",
  "images/157A0709.avif",
  "images/157A0714.avif",
  "images/157A0725.avif",
  "images/157A0741.avif",
  "images/157A0828.avif",
  "images/157A0965-2.avif",
  "images/157A0965.avif",
  "images/157A1180.avif",
  "images/157A1419.avif",
  "images/157A1423.avif",
  "images/157A1462.avif",
  "images/157A1480.avif",
  "images/157A1589.avif",
  "images/157A1770.avif",
  "images/157A1789.avif",
  "images/157A1823.avif",
  "images/157A1963.avif",
  "images/157A1967.avif",
  "images/157A1979.avif",
  "images/157A2025.avif",
  "images/157A2043.avif",
  "images/157A2185.avif",
  "images/157A2189.avif",
  "images/157A2203.avif",
  "images/157A2228.avif",
  "images/157A2234.avif",
  "images/157A2265.avif",
  "images/157A2321-2.avif",
  "images/157A2321.avif",
  "images/157A2327.avif",
  "images/157A2349.avif",
  "images/157A2372.avif",
  "images/157A2424.avif"
]; // DO NOT EDIT MANUALLY

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

gallery.addEventListener("click", (event) => {
  const item = event.target.closest(".gallery-item");
  if (!item) return;

  const index = Number(item.dataset.index);

  if (item.classList.contains("expanded")) {
    const img = item.querySelector("img");
    if (!img) {
      item.classList.remove("expanded");
      document.body.style.overflow = "";
      currentIndex = null;
      return;
    }

    const rect = img.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const halfWidth = rect.width / 2;

    if (clickX < halfWidth) {
      const prevIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
      expandImageAtIndex(prevIndex);
    } else {
      const nextIndex = (currentIndex + 1) % imageFiles.length;
      expandImageAtIndex(nextIndex);
    }
  } else {
    expandImageAtIndex(index);
  }
});
