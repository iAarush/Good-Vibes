const select = document.querySelector(".dropdown-content")
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
