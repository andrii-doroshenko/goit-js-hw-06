const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmite);

function onFormSubmite(event) {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert("Sorry, all fields are required!!!");
    return;
  }
  console.log(formData);
  form.reset();
}
