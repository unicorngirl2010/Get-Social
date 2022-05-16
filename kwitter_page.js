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
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4 class='btn btn-warning_h4'>" + message + "</h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning'id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + Like + " </span></button><hr>";

                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = documen.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function updateLike(messge_id) {
      console.log("clicked on like button - " + message_ig);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}