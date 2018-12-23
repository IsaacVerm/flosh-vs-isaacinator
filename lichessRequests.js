let user = document.getElementById('user');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://lichess.org/api/users/status?ids=Isaacinator', false);
xhr.send();

user.textContent = xhr.responseText;
