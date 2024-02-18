// Links to EmailJS Account -
// Initialize EmailJS user ID
emailjs.init("eW8pEkcltsdImigyc");

document.getElementById('sendEmail').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const userName = document.getElementById('user-name').value;
    const crushName = document.getElementById('crush-name').value;
    const compatibilityPercentage = document.getElementById('compatibility-percentage').innerText;

    emailjs.send("service_6heqq18", "template_nq4vvcz", {
        to_email: email,
        subject_from_name: userName,
        crush_name: crushName,
        user_name: userName,
        compatibilityPercentage: compatibilityPercentage,
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        // Show Bootstrap alert
        const alertSuccess = document.getElementById('alertSuccess');
        alertSuccess.style.display = 'block';
        // Hide after 5 seconds
        setTimeout(() => {
            alertSuccess.style.display = 'none';
        }, 2500);
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send the email.');
    });
});


