function getRooms() {
  // Query DB.
  firebase.database().ref('/rooms').once('value').then(
    function (snapshot) {
      let rooms = snapshot.val();
      Object.keys(rooms).forEach((key) => {
        // Display coursenames.
        btn.innerHTML = key;
        btn.onclick = () => {window.location.href = "../schedule.html?room=" + key;};
        li.appendChild(btn);
        ul.appendChild(li);
      });
    })
}

window.onload = getRooms
