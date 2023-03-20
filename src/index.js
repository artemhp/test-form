import { validatePhone } from "mz-validator";

document.getElementById("button").addEventListener("click", () => {
  const element = document.getElementById("telephone");
  const telValue = element.value;
  const checkTel = validatePhone(telValue, { country: "UA" });
  if (checkTel.isValid) {
    element.className = "valid";
  } else {
    element.className = "invalid";
  }
});
