//contact Send email
function SendMail(event) {
    event.preventDefault();
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        mobile_no: document.getElementById("mobile").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_euqz4lt", "template_ay9tdrh", params).then(function(res) {
        alert("Sent Successfully 😇 " + res.status);
    })
    console.log(params);
    
}