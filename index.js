// Add your code here
function submitData(userName, userEmail) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const body = document.querySelector('body');
      const div = document.createElement('div');
      div.innerHTML = data.id;
      body.appendChild(div);
    })
    .catch((error) => {
      const body = document.querySelector('body');
      const div = document.createElement('div');
      div.innerHTML = error.message;
      body.appendChild(div);
    });
}
