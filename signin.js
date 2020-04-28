const select = document.querySelector(".dropdown-content")
const firebaseConfig = {
  apiKey: "AIzaSyAyiScaWREBR22hhE_RSXjcHToZD5NDkUI",
  authDomain: "good-vibes-b4fbf.firebaseapp.com",
  databaseURL: "https://good-vibes-b4fbf.firebaseio.com",
  projectId: "good-vibes-b4fbf",
  storageBucket: "good-vibes-b4fbf.appspot.com",
  messagingSenderId: "1068561122681",
  appId: "1:1068561122681:web:aaa98fd32fb821ed821ba8",
  measurementId: "G-RKQ8T9N1MP"
};

firebase.initializeApp(firebaseConfig);
var uiConfig = {
   signInSuccessUrl: 'index.html',
   signInOptions: [
     // Leave the lines as is for the providers you want to offer your users.
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.EmailAuthProvider.PROVIDER_ID,
     firebase.auth.PhoneAuthProvider.PROVIDER_ID,
     
   ],
   // tosUrl and privacyPolicyUrl accept either url string or a callback
   // function.
   // Terms of service url/callback.
   tosUrl: '<your-tos-url>',
   // Privacy policy url/callback.
   privacyPolicyUrl: function() {
     window.location.assign('<your-privacy-policy-url>');
   }
 };

 // Initialize the FirebaseUI Widget using Firebase.
 var ui = new firebaseui.auth.AuthUI(firebase.auth());
 // The start method will wait until the DOM is loaded.
 ui.start('#firebaseui-auth-container', uiConfig);

firebase.auth().onAuthStateChanged(function(user){
     // if user is logged in

if (user){
  console.log("HIIIIII"); 
  const a = document.createElement("a");
  a.setAttribute("href", "chat.html")
  a.innerText = "Your Log";
  select.append(a)
}
})
  
  
 // get uid
// from var uiConfig is the js
