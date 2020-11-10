// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyArwHppjqEH7gOsqNS9un100EYkrF5cGiM",
//   authDomain: "inscribetec-388b8.firebaseapp.com",
//   databaseURL: "https://inscribetec-388b8.firebaseio.com",
//   projectId: "inscribetec-388b8",
//   storageBucket: "inscribetec-388b8.appspot.com",
//   messagingSenderId: "455796643953",
//   appId: "1:455796643953:web:c838f9d88af917770fe3d0",
//   measurementId: "G-VD1C1VWBJ5"
// };
// firebase.initializeApp(firebaseConfig);

function getSchedule() {
  alert('entered');
  // Create a reference with an initial file path and name
  firebase.storage().ref('schedule.jpg').getDownloadURL().then(function(url) {
    var img = document.getElementById('img');
    img.src = url;
    alert('changed');
  }).catch(function(error) {
    // Handle any errors
    alert('No schedule found');
  });
}

window.onload = getSchedule