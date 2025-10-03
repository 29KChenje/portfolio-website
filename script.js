function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let service = document.getElementById("service").value;

  if (name === "" || email === "" || service === "") {
    alert("⚠️ Please fill all required fields!");
    return false;
  }

  alert("✅ Your order has been submitted successfully!");
  return true;
}
