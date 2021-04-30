const convertBtn = document.querySelector("#convertBtn");
const resetBtn = document.querySelector("#resetBtn");
const swapBtn = document.querySelector("#swapBtn");

const convertInputs = document.querySelectorAll(".convertInput");
const convertForm = document.querySelector('#convertForm')
const result = document.querySelector('#result');


convertBtn.addEventListener('click', (event) => {
  if (!convertForm.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();

    convertInputs.forEach(el => {
      if (!el.value) {
        el.classList.add('customInvalid')
        el.nextElementSibling.style.display = 'block';
      } else {
        el.classList.remove('customInvalid')
        el.nextElementSibling.style.display = 'none';
      }
    });
  } else {
    let baseFrom = convertInputs[0].value;
    let baseTo = convertInputs[1].value;
    let x = convertInputs[2].value;
    const temp = convertNumber(x, baseFrom, baseTo);
    if (temp) {
      result.value = temp;
      convertInputs[2].style.backgroundColor = 'white';
    } else {
      convertInputs[2].style.backgroundColor = 'rgb(255, 227, 227)';
    }
  }
});

convertInputs.forEach(el => {
  el.addEventListener('input', () => {
    if (el.classList.contains('customInvalid')) {
      el.classList.remove('customInvalid')
      el.nextElementSibling.style.display = 'none';
    }
  })
});


swapBtn.addEventListener('click', () => {
  let temp = convertInputs[0].value;
  convertInputs[0].value = convertInputs[1].value;
  convertInputs[1].value = temp;
});