const form0 = document.querySelector('#form0');
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const result = document.querySelector('#result');
const scoreText = document.querySelector('#scoreText');

const submit = document.querySelector('#submit');
const retake = document.querySelector('#retake');
const next0 = document.querySelector('#next0');
const next1 = document.querySelector('#next1');
let userScore = 0;
let shouldShow = false;

next0.addEventListener('click', () => {
    const selected = document.querySelector('input[name="ans1"]:checked');
    
    if (selected) {
       userScore+= parseFloat(selected.value);
        form0.classList.remove('active');
        form1.classList.add('active'); 
    }else{
        alert("Please select an answer before proceeding.");
    }
});
next1.addEventListener('click', () => {
    const selected = document.querySelector('input[name="ans2"]:checked');
    
    if (selected) {
       userScore += parseFloat(selected.value);
        form1.classList.remove('active');
        form2.classList.add('active'); 
    }else{
        alert("Please select an answer before proceeding.");
    }
    
});


submit.addEventListener('click', () => {
  const selected = document.querySelector('input[name="ans3"]:checked');

  if (selected) {
    userScore += parseFloat(selected.value);
    form2.classList.remove('active');

    scoreText.textContent = `Your score is: ${userScore} out of 3`;
    result.style.display = 'block';
    retake.style.display = 'inline-block';
    retake.addEventListener('click', () => {
      userScore = 0;
      form0.classList.add('active');
      form1.classList.remove('active');
      form2.classList.remove('active');
      result.style.display = 'none';
      retake.style.display = 'none';
      document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    });
  } else {
    alert("Please select an answer before proceeding.");
  }
});

