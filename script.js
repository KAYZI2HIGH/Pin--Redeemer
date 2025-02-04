const form = document.getElementById("pinForm");
const pinInput = document.getElementById("pin");
const messageContainer = document.getElementById("messageContainer");

const validPins = ["1234", "5678", "9012", '5912', '2245', '5564', '4191'];


function validatePin(pin) {
  return validPins.includes(pin);
}

function setMessage(status, text) {
  messageContainer.innerHTML =
    '<div class="message ' + status + '">' + "<p>" + text + "</p></div>";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const pin = pinInput.value.trim();
  if (!pin) {
    setMessage("error", "Please enter a PIN");
  }else if (validatePin(pin)) {
    setMessage("success", "PIN successfully redeemed!");
  } else {
    setMessage("error", "Invalid PIN. Please try again.");
  }
  setTimeout(() => {
    messageContainer.innerHTML = ''
  }, 1500);
});

