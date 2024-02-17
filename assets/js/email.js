// Links to EmailJS Account -
// Initialize EmailJS user ID
emailjs.init("your_user_id_here");

document.getElementById('sendEmail').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const userName = document.getElementById('user-name').value;
    const crushName = document.getElementById('crush-name').value;
    const compatibilityPercentage = document.getElementById('compatibility-percentage').innerText;

    emailjs.send("your_service_id", "your_template_id", {
        to_email: email,
        from_name: "Love Calculator",
        message: `Hey, the love score between ${userName} and ${crushName} is: ${compatibilityPercentage}`,
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Love score email sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send the email.');
    });
});