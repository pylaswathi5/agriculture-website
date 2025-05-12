document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'cs-02' && password === 'agriculture') {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('content-page').classList.remove('hidden');
        
        // Automatically show the introduction section on login
        showContent('introduction');
    } else {
        alert('Incorrect username or password');
    }
});

function showContent(id) {
    var sections = document.querySelectorAll('.text-box');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    var activeSection = document.getElementById(id);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}
