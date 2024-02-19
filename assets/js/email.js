// Links to EmailJS Account -
// Initialize EmailJS user ID
emailjs.init("eW8pEkcltsdImigyc");

const sendBtn = document.getElementById("sendEmail");
const emailForm = document.getElementById("email");

const sendEmail = () => {
  const email = document.getElementById("email").value;
  const userName = document.getElementById("user-name").value;
  const crushName = document.getElementById("crush-name").value;
  const compatibilityPercentage = document.getElementById(
    "compatibility-percentage"
  ).innerText;

  // check the game first if the user have calculated or not
  if (compatibilityPercentage === "80%" && compatibilityPercentage === "0%") {
    alert("you have to calculate first");
  }
  // only send email if the user has input username,
  // crush name, email, and calculate their score
  else if (
    userName &&
    crushName &&
    email &&
    compatibilityPercentage !== "80%" &&
    compatibilityPercentage !== "0%"
  ) {
    emailjs
      .send("service_6heqq18", "template_nq4vvcz", {
        to_email: email,
        subject_from_name: userName,
        crush_name: crushName,
        user_name: userName,
        compatibilityPercentage: compatibilityPercentage,
      })
      .then(
        function (response) {
          // Show Bootstrap alert
          const alertSuccess = document.getElementById("alertSuccess");
          alertSuccess.style.display = "block";
          // Hide after 5 seconds
          setTimeout(() => {
            alertSuccess.style.display = "none";
          }, 2500);
        },
        function (error) {
          alert("Failed to send the email.");
        }
      );
  } else {
    alert(
      "Please enter your name, crush's name, email and calculate the score first!"
    );
  }
};

const handleEnterKey = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("sendEmail").click();
  }
};

if (sendBtn && emailForm) {
  sendBtn.addEventListener("click", sendEmail);
  emailForm.addEventListener("keydown", handleEnterKey);
}
