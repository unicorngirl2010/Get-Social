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

                  //End code
            });
      });
}
getData();
