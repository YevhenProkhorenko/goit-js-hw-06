const form = document.querySelector(".login-form");


form.addEventListener("submit", pusheSubmit);

function pusheSubmit(event) {
  event.preventDefault();

  if (event.currentTarget.email.value === "" || event.currentTarget.password.value === "") {
    return alert("All fields must be filled");
  }
  else {
      let user = {
          Email: event.currentTarget.email.value,
          Password: event.currentTarget.password.value,
      }
      console.log(user)
  } 
  event.currentTarget.reset();
}
