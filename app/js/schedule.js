function getSchedule() {
  // Create a reference with an initial file path and name
  firebase.storage().ref('schedule.jpg').getDownloadURL().then(function (url) {
    var img = document.getElementById('img');
    img.src = url;

  }).catch(function (error) {
    // Handle any errors
    console.log('No schedule found');
  });
}

window.onload = getSchedule
