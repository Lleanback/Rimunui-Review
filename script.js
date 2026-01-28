js
// script.js

// This line will be auto-updated by build-images.js
const imageFiles = [
  "images/©ag-DJI_20251228072422_0020_D.avif",
  "images/©ag-DJI_20251228072458_0023_D.avif",
  "images/©ag-DJI_20251228081107_0045_D.avif",
  "images/©ag-DJI_20251228092334_0059_D.avif",
  "images/©ag-DJI_20251228092408_0065_D.avif",
  "images/©ag-DJI_20251228092432_0071_D.avif",
  "images/©ag-DJI_20251228092520_0081_D.avif",
  "images/©ag-DJI_20251228095413_0088_D.avif",
  "images/©ag-DJI_20251228095417_0092_D.avif",
  "images/©ag-DJI_20251228095501_0101_D.avif",
  "images/©ag-DJI_20251228105528_0110_D.avif",
  "images/©ag-DJI_20251228110436_0117_D.avif",
  "images/©ag-DJI_20251228110457_0118_D.avif",
  "images/©ag-DJI_20251228110504_0119_D.avif",
  "images/©ag-DJI_20251228182716_0022_D.avif",
  "images/©ag-DJI_20251228182737_0026_D.avif",
  "images/©ag-DJI_20251228183358_0036_D.avif",
  "images/©ag-DJI_20251228185549_0054_D.avif",
  "images/©ag-DJI_20251228201043_0064_D.avif",
  "images/©ag-DJI_20251228201057_0067_D.avif",
  "images/©ag-DJI_20251228203615_0105_D.avif",
  "images/©ag-DJI_20251229081358_0157_D.avif",
  "images/©ag-DJI_20251229081456_0169_D.avif",
  "images/©ag-DJI_20251229095020_0190_D.avif",
  "images/©ag-DSC_9184.avif",
  "images/©ag-DSC_9189.avif",
  "images/©ag-DSC_9197.avif",
  "images/©ag-DSC_9200.avif",
  "images/©ag-DSC_9202.avif",
  "images/©ag-DSC_9206.avif",
  "images/©ag-DSC_9209.avif",
  "images/©ag-DSC_9213.avif",
  "images/©ag-DSC_9216.avif",
  "images/©ag-DSC_9218.avif",
  "images/©ag-DSC_9221.avif",
  "images/©ag-DSC_9235.avif",
  "images/©ag-DSC_9253.avif",
  "images/©ag-DSC_9255.avif",
  "images/©ag-DSC_9261.avif",
  "images/©ag-DSC_9263.avif",
  "images/©ag-DSC_9271.avif",
  "images/©ag-DSC_9276.avif",
  "images/©ag-DSC_9280.avif",
  "images/©ag-DSC_9284.avif",
  "images/©ag-DSC_9285.avif",
  "images/©ag-DSC_9287.avif",
  "images/©ag-DSC_9300.avif",
  "images/©ag-DSC_9309.avif",
  "images/©ag-DSC_9317.avif",
  "images/©ag-DSC_9320.avif",
  "images/©ag-DSC_9321.avif",
  "images/©ag-DSC_9326.avif",
  "images/©ag-DSC_9344.avif",
  "images/©ag-DSC_9355.avif",
  "images/©ag-DSC_9361.avif",
  "images/©ag-DSC_9374.avif",
  "images/©ag-DSC_9376.avif",
  "images/©ag-DSC_9395.avif",
  "images/©ag-DSC_9399.avif",
  "images/©ag-DSC_9418.avif",
  "images/©ag-DSC_9424.avif",
  "images/©ag-DSC_9453.avif",
  "images/©ag-DSC_9472.avif",
  "images/©ag-DSC_9474.avif",
  "images/©ag-DSC_9480.avif",
  "images/©ag-DSC_9497.avif",
  "images/©ag-DSC_9507.avif",
  "images/©ag-DSC_9511.avif",
  "images/©ag-DSC_9539.avif",
  "images/©ag-DSC_9542.avif",
  "images/©ag-DSC_9546.avif",
  "images/©ag-DSC_9548.avif",
  "images/©ag-DSC_9551.avif",
  "images/©ag-DSC_9556.avif",
  "images/©ag-DSC_9569.avif",
  "images/©ag-DSC_9587.avif",
  "images/©ag-DSC_9600.avif",
  "images/©ag-DSC_9607.avif",
  "images/©ag-DSC_9611.avif",
  "images/©ag-DSC_9613.avif",
  "images/©ag-DSC_9626.avif",
  "images/©ag-DSC_9633.avif",
  "images/©ag-DSC_9636.avif",
  "images/©ag-DSC_9637.avif",
  "images/©ag-DSC_9640.avif",
  "images/©ag-DSC_9684.avif",
  "images/©ag-DSC_9690.avif",
  "images/©ag-DSC_9699.avif",
  "images/©ag-DSC_9711.avif",
  "images/©ag-DSC_9739.avif",
  "images/©ag-DSC_9741.avif",
  "images/©ag-DSC_9757.avif",
  "images/©ag-DSC_9770.avif",
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

function clearExpanded() {
  const current = document.querySelector(".gallery-item.expanded");
  if (current) {
    current.classList.remove("expanded");
  }
  document.body.style.overflow = "";
  currentIndex = null;
}

function expandImageAtIndex(index) {
  if (index < 0 || index >= imageFiles.length) return;

  // Remove any existing expanded item
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

  // If not expanded yet, expand the clicked image
  if (!item.classList.contains("expanded")) {
    expandImageAtIndex(index);
    return;
  }

  // Already expanded: decide prev / next / close based on click position
  const img = item.querySelector("img");
  if (!img) {
    clearExpanded();
    return;
  }

  const rect = img.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const width = rect.width;

  const leftZone = width * 0.25;   // 0–25% = previous
  const rightZone = width * 0.75;  // 75–100% = next

  if (clickX < leftZone) {
    // Go to previous image
    const prevIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
    expandImageAtIndex(prevIndex);
  } else if (clickX > rightZone) {
    // Go to next image
    const nextIndex = (currentIndex + 1) % imageFiles.length;
    expandImageAtIndex(nextIndex);
  } else {
    // Middle 50% = close back to gallery view
    clearExpanded();
  }
});
