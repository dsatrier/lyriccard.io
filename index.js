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
  const elementsWithIdOut = document.querySelectorAll("#out");

  cont.style.backgroundColor = event.target.value; 
 
  if (event.target.value === "#000000") {
      elementsWithIdOut.forEach(element => {
        console.log("hi");
          element.style.color = "#ffffff"; 
      });
      const foot = document.querySelector(".footer");
      foot.style.color = "#ffffff"; 

  } else {
      elementsWithIdOut.forEach(element => {
          element.style.color = "#000000"; 
      });
      const foot = document.querySelector(".footer");
      foot.style.color = "#000000"; 
  }
 updateFooterColor(event.target.value);
}

function updateFooterColor(color) {

  const footer = document.querySelector(".footer");
 
  footer.style.backgroundColor = color; 
}


const toggleElements = document.getElementById('toggleElements');
const elementsToToggle = ['.title', '.cardColor', '.slider-container', '.footer'];

function toggleVisibility() {
    elementsToToggle.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          if (selector === '.footer') {
            element.textContent = element.textContent ? '' : "instant crush'24 | side project 1";
          } else {
            if (element.style.display === "none") {
              element.style.display = (selector === '.cardColor') ? "flex" : "block";
            } else {
              element.style.display = "none";
            }
          }
        });
    });
}

toggleElements.addEventListener('click', toggleVisibility);

document.body.addEventListener('click', function(event) {
  const clickedElement = event.target;
  
  if (clickedElement.tagName.toLowerCase() === 'input' || clickedElement.closest('.card')) {
      toggleVisibility();
  }
});


