function signIn2() {
  alert('hi');
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let errorb = false;
  firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    errorb = true;
  }).then(()=>{
    if (!errorb) {
      alert('yo');
      window.location.href = "../rooms.html";
    }
  });
}