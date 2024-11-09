document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("8i02dt3qU_5F7fR0U"); 
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.send("service_cgza982", "template_xwbpkv1", {
            naam: document.getElementById("naam").value,
            email: document.getElementById("email").value,
            telefoon: document.getElementById("telefoon").value,
            bericht: document.getElementById("bericht").value
        }).then(function(response) {
            alert("Bericht verzonden! Dank u voor uw bericht.");
        }, function(error) {
            alert("Er is een fout opgetreden bij het verzenden van het bericht.");
        });
    });
});
