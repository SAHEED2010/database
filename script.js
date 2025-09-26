const countryList = [
  "Afghanistan", "Albania", "Algeria", "Nigeria", "United States of America (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)", "Ghana", "Kenya",
  "Canada", "Brazil", "France", "Germany", "Japan", "India", "China", "South Africa"
];

// Fill the country dropdown
const countrySelect = document.getElementById("country");
countryList.forEach((country) => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countrySelect.appendChild(option);
});

// Generate ID card
function generateIDCard() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const gender = document.getElementById("gender").value;
  const dob = document.getElementById("dob").value;
  const address = document.getElementById("address").value;
  const homeAddress = document.getElementById("homeAddress").value;
  const country = document.getElementById("country").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phoneNumber").value;
  const imageLink = document.getElementById("imageLink").value;

  // Update text fields
  document.getElementById("displayName").textContent = `${firstName} ${lastName}`;
  document.getElementById("displayGender").textContent = gender;
  document.getElementById("displayDob").textContent = dob;
  document.getElementById("displayAddress").textContent = address;
  document.getElementById("displayHome").textContent = homeAddress;
  document.getElementById("displayCountry").textContent = country;
  document.getElementById("displayPhone").textContent = phone;
  document.getElementById("displayEmail").textContent = email;

  // Show image from link
  if (imageLink.trim() !== "") {
    document.getElementById("profileImage").src = imageLink;
  }
}
