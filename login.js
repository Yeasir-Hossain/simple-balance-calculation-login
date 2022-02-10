// SubmitEvent 
document.getElementById('submit-button').addEventListener('click', function() {
    const mail = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    if (mail == "yeasir" && pass.length > 3) {
        window.location.href = 'banking.html';
    } else {
        alert("Enter Correctly");
    }
})