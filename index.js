function openFileInput() {
  document.getElementById('fileInput').click();
}

document.getElementById('fileInput').addEventListener('change', function() {
  var file = this.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('imagePlaceholder').src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});

function toggleBorder() {
  var card = document.getElementById('card');
  card.classList.toggle('rounded');
  card.classList.toggle('square');
}

let colorPicker1;
let colorPicker2;
let colorPicker3;
const defaultColor = "#ffffff"; 

window.addEventListener("load", function() {
    colorPicker1 = document.querySelector("#color-picker");
    colorPicker1.value = defaultColor;
    colorPicker1.addEventListener("input", updateBackgroundColor, false);
    colorPicker1.select();

    colorPicker2 = document.querySelector("#color-picker2");
    colorPicker2.value = defaultColor;
    colorPicker2.addEventListener("input", updateTextColor, false);
    colorPicker2.select();

    colorPicker3 = document.querySelector("#color-picker3");
    colorPicker3.value = defaultColor;
    colorPicker3.addEventListener("input", updateScreenColor, false);
    colorPicker3.select();
}, false);

function updateBackgroundColor(event) {
    const card = document.querySelector(".card");
    card.style.backgroundColor = event.target.value;
}

function updateTextColor(event) {
    const card = document.querySelector(".card");
    card.style.color = event.target.value;
}

function updateScreenColor(event) {
  const card = document.querySelector(".cont");
 
  cont.style.backgroundColor = event.target.value; 
  console.log("hi");
 updateFooterColor(event.target.value);
}

function updateFooterColor(color) {
  console.log("hi");
  const footer = document.querySelector(".footer");
  console.log(footer)
  footer.style.backgroundColor = color; 
}


const toggleElements = document.getElementById('toggleElements');
const elementsToToggle = ['.title', '.cardColor', '.slider-container', '.footer'];

toggleElements.addEventListener('change', function() {
    elementsToToggle.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          if (selector === '.footer') {
            element.textContent = ''; 
          } else {
            if (element.style.display === "none") {
              element.style.display = "block";
            } else {
              element.style.display = "none";
            }
          }
        });
    });
});


window.addEventListener('load', function() {
  toggleElements.checked = false;
});