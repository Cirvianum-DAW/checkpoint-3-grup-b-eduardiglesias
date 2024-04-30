// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.querySelector('input[name="name"]');

// Si no saps com utilitzar aquestes funcions, pots fer ús de missatges per consol o situar
// els errors allà on consideris lògic

// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  //https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
  input.insertAdjacentElement("afterend", error);
}

// Cada validació...

function validateName() {
  removeExistingError(nameInput);
  // Validació del nom...

  // Si no és vàlid...
  displayError(nameInput, "El nom no és vàlid");
}

// addEventListeners...

document.querySelector("form").addEventListener("submit", function (event) {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const message = document.getElementById("message").value;

  fullNameRegex = /[0-9]/;

  if (name.length < 3 || name.length > 50) {
    alert("El nom ha de tenir com a mínim 3 caràcters i com a màxim 50.");
  } else if (fullNameRegex.test(name)) {
    alert("El nom no pot contenir números.");
  }

  if (surname.length < 3 || surname.length > 50) {
    alert("El cognom ha de tenir com a mínim 3 caràcters i com a màxim 50.");
  } else if (fullNameRegex.test(surname)) {
    alert("El cognom no pot contenir números.");
  }

  emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  if (!emailRegex.test(email)) {
    alert("El email no és correcte.");
  }

  if (age < 18) {
    alert("Has de ser major d'edat");
  }

  if (message.length < 10 || message.length > 200) {
    alert("El missatge ha de tenir com a mínim 10 caràcters i com a màxim 200.");
  }
});
