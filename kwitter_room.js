var firebaseConfig = {
      apiKey: "AIzaSyAWHsIiY9I0Z4GYZRW8cT48F-6kRwecIBk",
      authDomain: "get-social-8874a.firebaseapp.com",
      databaseURL: "https://get-social-8874a-default-rtdb.firebaseio.com",
      projectId: "get-social-8874a",
      storageBucket: "get-social-8874a.appspot.com",
      messagingSenderId: "476833684191",
      appId: "1:476833684191:web:bf674ebf0818ec4cdf276a",
      measurementId: "G-JQKC4KJJD7"
};

firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_Names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}