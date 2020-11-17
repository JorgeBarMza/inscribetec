function getSchedule() {
  // Create a reference with an initial file path and name
  firebase.storage().ref('schedule.jpg').getDownloadURL().then(function(url) {
    var img = document.getElementById('img');
    img.src = url;
  }).catch(function(error) {
    // Handle any errors
    console.log('No schedule found');
  });
}

function getSchedule1() {
  //
  firebase.database().ref('/rooms').once('value').then(
    function(snapshot) {
      let rooms = snapshot.val();
      Object.keys(rooms).forEach((key)=>{
        var ul = document.getElementById("ul");
        var li = document.createElement("li");
        console.log(ul);
        ul.appendChild(li);
      })
    }).catch(function(error){
      console.log('No schedule found.');
    })  
}

window.onload = getSchedule1