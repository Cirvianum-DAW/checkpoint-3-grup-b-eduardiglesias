 // Selecció dels inputs...
 const nameInput = document.querySelector('input[name="name"]');
 const surnameInput = document.querySelector('input[name="surname"]');
 const emailInput = document.querySelector('input[name="email"]');
 const ageInput = document.querySelector('input[name="age"]');
 const genderInput = document.getElementById('gender');
 const messageInput = document.querySelector('textarea[name="message"]');
 
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
   input.insertAdjacentElement("afterend", error);
 }
 
 function validateName() {
   removeExistingError(nameInput);
   const name = nameInput.value.trim();
   if (name.length < 3 || name.length > 50 || /\d/.test(name)) {
     displayError(nameInput, "El nom ha de tenir entre 3 i 50 caràcters i no pot contenir números.");
   }
 }
 
 function validateSurname() {
   removeExistingError(surnameInput);
   const surname = surnameInput.value.trim();
   if (surname.length < 3 || surname.length > 50 || /\d/.test(surname)) {
     displayError(surnameInput, "El cognom ha de tenir entre 3 i 50 caràcters i no pot contenir números.");
   }
 }
 
 function validateEmail() {
   removeExistingError(emailInput);
   const email = emailInput.value.trim();
   if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
     displayError(emailInput, "Si us plau, introdueix una adreça de correu electrònic vàlida.");
   }
 }
 
 function validateAge() {
   removeExistingError(ageInput);
   const age = parseInt(ageInput.value);
   if (age < 18) {
     alert('Has de ser major d\'edat per poder realitzar la comanda.');
   }
 }
 
 function validateMessage() {
   removeExistingError(messageInput);
   const message = messageInput.value.trim();
   if (message.length < 10 || message.length > 200) {
     displayError(messageInput, "El missatge ha de tenir entre 10 i 200 caràcters.");
   }
 }
 
 function validateGender() {
   removeExistingError(genderInput);
   if (genderInput.value === '') {
     displayError(genderInput, 'Si us plau, selecciona el teu gènere.');
   }
 }
 
 // addEventListeners...
 nameInput.addEventListener('input', validateName);
 surnameInput.addEventListener('input', validateSurname);
 emailInput.addEventListener('input', validateEmail);
 ageInput.addEventListener('change', validateAge);
 genderInput.addEventListener('change', validateGender);
 messageInput.addEventListener('input', validateMessage);
 