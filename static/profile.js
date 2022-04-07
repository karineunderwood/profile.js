function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    // fill in the
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#ocupation-field').value,
  };

  fetch(('/api/profile', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseProfile => {
      document
        .querySelector('#profiles')
        .insertAdjacentHTML(
          'beforeend',
          `<li>${responseProfile.fullname} the ${responseProfile.occupation} is ${responseProfile.age}</li>` 
        );  

    });
  }
  

document.querySelector('#profile-form').addEventListener('submit', submitProfile);


// One of our engineers got a start at implementing AJAX to do
// this and then took off for the rest of the week.

// Can you take a look at our Customer Survey and finish passing the
// data, making a request with it, and appending it to the page?