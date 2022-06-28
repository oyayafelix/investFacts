// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhr1VW9l10_Gp8C9DC0xMV85wDlkpobVE",
  authDomain: "investfacts-7fa2e.firebaseapp.com",
  projectId: "investfacts-7fa2e",
  storageBucket: "investfacts-7fa2e.appspot.com",
  messagingSenderId: "217593132108",
  appId: "1:217593132108:web:9fd5b35ddf0ba77f38f0e9"
};

const cities= "nairobi"


// Initialize Firebase
firebase.initializeApp(firebaseConfig)


document.getElementById('inputForm').addEventListener('submit', function (e){
})


//e.preventDefault();
//alert('success')



//collect selected counry and industry
let countrySelect = document.getElementById('country')//.value;
let industrySelect = document.getElementById('industry')//.value;
    //console.log(countrySelect + industrySelect)

    //push to firebase database
    firebase.database().ref().push({
      selected_country:countrySelect .value,
      selected_industry:industrySelect .value,

    })

    //confirmation
    alert("Your search is being processed! ")
    //reset after submit
    countrySelect.value = '';
    industrySelect.value = '';
    