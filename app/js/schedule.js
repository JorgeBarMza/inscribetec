function getSchedule() {
  let room = new URLSearchParams(window.location.search).get("room");
  firebase.database().ref('/rooms/'+room).once('value').then(
    function (snapshot) {
      let week = ["monday", "tuesday", "wednesday", "thursday", "friday", 
                  "saturday"];
      let times = ["7", "8:30", "10", "11:30", "13", "14:30", "16", "17:30", "19", "20:30"];
      let schedule = snapshot.val();
      // Iterate cells.
      for (i = 0; i < 60; ++i) {
        let cell = document.getElementById(i);
        let day = week[i % 6];
        let dailySchedule = schedule[day];
        if (!dailySchedule) continue;
        let time = times[Math.floor(i / 6)];
        let course = dailySchedule[time];
        if (!course) continue;
        cell.innerHTML = course;
      }
    });
}

window.onload = getSchedule
