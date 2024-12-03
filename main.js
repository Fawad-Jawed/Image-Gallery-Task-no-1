// Getting all required elements
const gallery = document.querySelectorAll(".image");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");
const currentImg = previewBox.querySelector(".current-img");
const totalImg = previewBox.querySelector(".total-img");
const shadow = document.querySelector(".shadow");

window.onload = () => {
  totalImg.textContent = gallery.length; // Set total image count

  gallery.forEach((image, index) => {
    image.onclick = () => {
      let currentIndex = index; // Store the index of the clicked image

      // Show the preview of the current image
      const showPreview = () => {
        currentImg.textContent = currentIndex + 1; // Update current image number
        previewImg.src = gallery[currentIndex].querySelector("img").src; // Set image source
      };

      showPreview();

      // Handle previous and next buttons
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");

      const updateButtons = () => {
        prevBtn.style.display = currentIndex === 0 ? "none" : "block";
        nextBtn.style.display = currentIndex === gallery.length - 1 ? "none" : "block";
      };

      updateButtons();

      prevBtn.onclick = () => {
        if (currentIndex > 0) currentIndex--;
        showPreview();
        updateButtons();
      };

      nextBtn.onclick = () => {
        if (currentIndex < gallery.length - 1) currentIndex++;
        showPreview();
        updateButtons();
      };

      // Show the preview box and overlay
      document.body.style.overflow = "hidden";
      previewBox.classList.add("show");
      shadow.style.display = "block";

      // Close the preview box
      closeIcon.onclick = () => {
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.body.style.overflow = "scroll";
      };
    };
  });
};
