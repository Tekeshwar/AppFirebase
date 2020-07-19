// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyDD0fRgK7P5r0p3nJIDY9tlwZr91CgkN80",
    authDomain: "testproject-3f197.firebaseapp.com",
    databaseURL: "https://testproject-3f197.firebaseio.com",
    projectId: "testproject-3f197",
    storageBucket: "testproject-3f197.appspot.com",
    messagingSenderId: "176212074106",
    appId: "1:176212074106:web:66dee8f7ccd37ffd2e65c3",
    measurementId: "G-FC1E124L9H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}