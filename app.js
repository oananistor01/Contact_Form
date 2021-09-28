var firstNameInput = document.querySelector(".first-name");
var lastNameInput = document.querySelector(".last-name");
var userName = document.querySelector("#user-Name");
document.querySelector(".confirm-banner").style.display = "none";

function validateForm() {
  var result = true;
  //first name validation
  var firstNameValue = firstNameInput.value;

  if (isNaN(firstNameValue) === false) {
    firstNameInput.classList.add("error");
    result = false;
  } else {
    firstNameInput.classList.remove("error");
  }

  //last name validation
  var lastNameValue = lastNameInput.value;

  if (isNaN(lastNameValue) === false) {
    lastNameInput.classList.add("error");
    result = false;
  } else {
    lastNameInput.classList.remove("error");
  }

  // display the first and last name in console
  console.log(firstNameValue);
  console.log(lastNameValue);
  //display the gender in console
  if (document.querySelector("#men").checked == true) {
    console.log("Gender: M");
  } else {
    console.log("Gender: F");
  }
  //display the textarea message in console
  console.log(document.querySelector("textarea").value);

  // display the message and delete the input-data from user after submitted
  if (result === true) {
    userName.innerHTML = firstNameValue;
    document.querySelector(".confirm-banner").style.display = "flex";
    document.getElementById("form").reset();
  }
}

//close the confirmation banner after clicking on X
var closeBanner = document.querySelector(".confirm-banner");
closeBanner.addEventListener("click", hideBanner);

function hideBanner(event) {
  if (event.target.classList.contains("remove") == true) {
    closeBanner.style.display = "none";
  }
}
