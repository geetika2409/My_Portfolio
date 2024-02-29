function emailSend() {
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var subject = document.getElementById('subject').value;

    var messageBody = "Name " + userName +
        "<br/> Email " + email +
        "<br /> Message is that: " + message;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "isha24042001@gmail.com",
        Password: "D24D691A618281CC4AB8B873E3E084F1535C",
        To: 'geetika24042001@gmail.com',
        From: "isha24042001@gmail.com",
        Subject: subject,
        Body: messageBody
    }).then(
        message => {
            if (message == 'OK') {
                swal("Message sent successfully!");
            }
            else {
                swal("Error", "Message  not sent.");
            }
        }
    );
}