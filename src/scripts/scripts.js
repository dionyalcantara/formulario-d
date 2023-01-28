const form = document.getElementById('form');
const checkbox = document.getElementById('agreement-checkbox');
const label = document.getElementById('agreement')
const inputName = document.getElementById('input-name')
const lastName = document.getElementById('input-lastname')
const email = document.getElementById('input-email')
const phone = document.getElementById('input-phone')
const birthDate = document.getElementById('birth-date')
const aboutYou = document.getElementById('about-you')

form.onsubmit = function(event) {
  if (!checkbox.checked) {
    event.preventDefault();
    alert("Você precisa aceitar os termos para enviar o formulário.");
    label.style.color = "red";
  } else {
    event.preventDefault();
    captureForm()
  }
};

const captureRadio = () => {
  const sexo = document.querySelectorAll('input[name="sexo"]');
  return Array.from(sexo).filter(radio => radio.checked).map(radio => radio.value)[0];
}

const formatInput = (element) => {
  element.addEventListener('input', () => {
    element.value = element === phone ? element.value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) - $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(\d{4})\d+?$/, "$1")
      : element.value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .substring(0, 10);
  })
}

formatInput(phone);
formatInput(birthDate);




const captureForm = () => {
  const gender = captureRadio();
  while (form.firstChild) {
    form.removeChild(form.firstChild)
  }

  const resultForm = document.createElement('div');
  resultForm.classList.add('result-form');

  const nameResult = document.createElement("p");
  nameResult.innerText = `Nome: ${inputName.value} ${lastName.value}`;
  resultForm.appendChild(nameResult);

  const emailResult = document.createElement("p");
  emailResult.innerText = `Email: ${email.value}`;
  resultForm.appendChild(emailResult);




  form.appendChild(resultForm)
}
//captureForm()
//   (`
//   <div class="result-form">
//   Nome: ${inputName.value} ${lastName.value}
//   <br>
//       Email: ${email.value}
//       <br>
//       Telefone: ${phone.value}
//       <br>
//       Data de nascimento: ${birthDate.value}
//       <br>
//       Sexo: ${gender}
//       <br>
//       Sobre você: ${aboutYou.value}
//     </div>
//     `)
// }



