
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD-SsB8ng9-CnKTmA7YQWv23TVVX255ofs",
      authDomain: "kwitter-2e1b2.firebaseapp.com",
      databaseURL: "https://kwitter-2e1b2-default-rtdb.firebaseio.com",
      projectId: "kwitter-2e1b2",
      storageBucket: "kwitter-2e1b2.appspot.com",
      messagingSenderId: "114295416965",
      appId: "1:114295416965:web:6daee1e3e378bc6e62e1ec"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code


      //End code
      });});}
getData();
