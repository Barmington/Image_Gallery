const imageDisplay = document.getElementById("img-display");

const imagesContainer = document.getElementById("image-list");
const container = document.querySelector(".container");

let imgIndex = 0;

const imageArr = [
  {
    src: "hybrid_800.jpg",
    alt: "Dog breeds",
    title: "Catahoula Leopard",
    srcset:
      "hybrid_400jpg  400w, hybrid_600.jpg  600w, hybrid_800.jpg    800w, hybrid_1280.jpg  1280w ",
  },

  {
    src: "dog_hybrid_800.jpg",
    alt: "Dog breeds",
    title: "Watch Dog",
    srcset:
      "dog_hybrid_400jpg  400w, dog_hybrid_600.jpg  600w, dog_hybrid_800.jpg    800w, dog_hybrid_1280.jpg  1280w ",
  },
  {
    src: "border_colie_1280jpg",
    alt: "Dog breeds",
    title: "German Shepherd",
    srcset:
      "border_colie_400.jpg  400w, border_colie_600.jpg  600w, border_colie_800.jpg    800w, border_colie_1280.jpg  1280w ",
  },

  {
    src: "labrador_retriever_1280.jpeg",
    alt: "Dog breeds",
    title: "Labrador Retriever",
    srcset:
      "labrador_retriever_500.jpg  400w, labrador_retriever_600.jpg  600w, labrador_retriever_800.jpg  800w, labrador_retriever_1280.jpg  1280w ",
  },

  {
    src: "cavapoo.jpg",
    alt: "Dog breeds",
    title: "Cavapoo",
    srcset:
      "dog_400.jpg  400w, dog_600.jpg  600w, dog_800.jpg  800w, dog_1280.jpg  1280w ",
  },
  {
    src: "husky_1280.jpg",
    alt: "Dog breeds",
    title: "Husky",
    srcset:
      "husky_400.jpg  400w, husky_600.jpg  600w, husky_800.jpg  800w, husky_1280.jpg  1280w ",
  },
  {
    src: "labrado_1280.jpg",
    alt: "Dog breeds",
    title: "Toller Retriever",
    srcset:
      "labrado_400.jpg  400w, labrado_600.jpg  600w, labrado_800.jpg  800w, labrado_1280.jpg  1280w ",
  },
];
const input = document.createElement("input");
container.appendChild(input);
input.classList.add("noInput");

for (let i = 0; i < imageArr.length; i++) {
  const img = document.createElement("img");

  input.setAttribute("aria-label", "image title text input");
  input.setAttribute("aria-required", "true");
  input.setAttribute("tabindex", -1);
  img.setAttribute("tabindex", 1);

  function dogNames() {
    input.classList.add("showInputText");
    input.classList.remove("noInput");
    input.value = img.title;
  }
  img.src = imageArr[i].src;
  img.alt = imageArr[i].alt;
  img.title = imageArr[i].title;
  img.srcset = imageArr[i].srcset;

  img.addEventListener("focus", function () {
    img.style.cursor = "grab";
    dogNames();
  });

  img.addEventListener("click", function () {
    imageDisplay.src = imageArr[i].src;
    imageDisplay.alt = imageArr[i].alt;
    imageDisplay.title = imageArr[i].title;
    imageDisplay.srcset = imageArr[i].srcset;
    dogNames();
  });

  imagesContainer.appendChild(img);
}

let currentImage = document.getElementById("img-display");
let nextButton = document.getElementById("nextBtn");
let buttonBack = document.getElementById("backBtn");

function updateImage() {
  currentImage.src = imageArr[imgIndex].src;
  currentImage.title = imageArr[imgIndex].title;
  currentImage.srcset = imageArr[imgIndex].srcset;
  dogNames();
}

nextButton.addEventListener("click", function () {
  imgIndex = imgIndex < imageArr.length - 1 ? imgIndex + 1 : 0;
  updateImage();
});

buttonBack.addEventListener("click", function () {
  imgIndex = imgIndex > 0 ? imgIndex - 1 : imageArr.length - 1;
  updateImage();
});
