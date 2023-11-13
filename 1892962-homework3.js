//Date: 
const p = new Date();
let poutput = p.toLocaleDateString();
document.getElementById("present").innerHTML = poutput;

//Slider:
let entryscale = document.getElementById("slide");
let entryresult = document.getElementById("scale");
entryresult.innerHTML = entryscale.value;

entryscale.oninput = function() {
    entryresult.innerHTML = this.value;
};

//firstname
function fnameValidation() {
    firstname = document.getElementById("firstname").value.trim();
    var namePattern = /^[A-Za-z'-]+$/;

    if(firstname == "") {
        document.getElementById("firstname-error").innerHTML = "First name is required";
        return false;
    } else if(firstname != "") {
        if (!firstname.match(namePattern)) {
            document.getElementById("firstname-error").innerHTML = "Must contain letters, apostrophes, and dashes";
            return false;
        } else if (firstname.length < 2) {
            document.getElementById("firstname-error").innerHTML = "First name must contain a minimum of 2 characters";
            return false; 
        } else if (firstname.length > 30) {
            document.getElementById("firstname-error").innerHTML = "First name can only contain a maximum of 30 characters";
            return false; 
    } else {
        document.getElementById("firstname-error").innerHTML = "";
        return true;
    }
}
}

//Middle Name: 
function middlenameValidation() {
    middlename = document.getElementById("middlename").value;
    var namePattern = /^[A-Z]/;

    middlename = middlename.toUpperCase();
    document.getElementById("middlename").value = middlename;

    if(middlename.length > 0) { 
        if(!middlename.match(namePattern)) {
            document.getElementById("middlename-error").innerHTML = "Middle name is required";
            return false;
        } else {
            document.getElementById("middlename-error").innerHTML = "";
            return false;
        }
    }
    return true;
}

function emailValidation() {
    email = document.getElementById("email").value;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email == "") {
        document.getElementById("email-error").innerHTML = "Email address is required";
        return false;
    } else if(!email.match(emailPattern)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

//Last Name: 
function lastnameValidation() {
    lastname = document.getElementById("lastname").value.trim();
    var namePattern = /^[A-Za-z2-5'-]+$/;

    if(lastname == "") {
        document.getElementById("lastname-error").innerHTML = "Last name is required";
        return false;
    } else if(lastname != "") {
        if (!lastname.match(namePattern)) {
            document.getElementById("lastname-error").innerHTML = "Must contain letters, apostrophes, and dashes";
            return false;
        } else if (lastname.length < 2) {
            document.getElementById("lastname-error").innerHTML = "Last name must contain a minimum of 2 characters";
            return false; 
        } else if (lastname.length > 30) {
            document.getElementById("lastname-error").innerHTML = "Last name can only contain a maximum of 30 characters";
            return false; 
    } else {
        document.getElementById("lastname-error").innerHTML = "";
        return true;
    }
}


}


//Date of Birth:
function validation(){
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxdate = new Date().setFullYear(new Date().getFullYear() - 120);

    if(date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date can not be in the future";
        dob.value = "";
        return false;
    } else if(date < new Date(maxdate)) {
        document.getElementById("dob-error").innerHTML = "Date can not be more than 120 years ago";
        dob.value = "";
        return false;
    } else { 
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

//ssn:
function ssnValidation() {
    var ssn = document.getElementById("ss").value;

    ssn = ssn.replace(/(\d{3})(\d{2})/g, "$1-$2-");
    document.getElementById("ss").value = ssn;

    const Regexssn = /^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;

    if(!Regexssn.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter valid ssn in this format: 123-45-6789";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

//Address line 1:
function addressValidation() {
    address = document.getElementById("address1").value.trim();

    if(!address) {
        document.getElementById("address1-error").innerHTML = "Address is required";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;

    }
}

//City:
function cityValidation() {
    city = document.getElementById("city").value.trim();

    if(!city) {
        document.getElementById("city-error").innerHTML = "City is required";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;

    }
}


//phone number:
function phoneValidation() {
    const phone = document.getElementById("phonenumber");
    const telephone = phone.value.replace(/\D/g, "");
    
    if(telephone.length !== 10) {
        document.getElementById("phone-error").innerHTML = "Invalid Phone Number";
        return false;
    }

    const Phonetele = telephone.slice(0, 3) + "-" + telephone.slice(3, 6) + "-" + telephone.slice(6);
    phone.value = Phonetele;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

//zipcode:
function zipValidation() {
    const zip = document.getElementById("zipcode");
    let zipCode = zip.value.replace(/[^\d-]/g, "");
    
    if(!zipCode) {
        document.getElementById("zip-error").innerHTML = "Zip Code Required";
        return false;
    }

    if(zipCode.length > 5) {
        zipCode = zipCode.slice(0, 5);
    }

    zip.value = zipCode;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

//user id
function userIdValidation() {
    userID = document.getElementById("userid").value;

    userID = userID.toLowerCase();

    document.getElementById("userid").value = userID;

    if(userID.length === 0) {
        document.getElementById("userid-error").innerHTML = "Please generate your personalized User ID";
        return false;
    } 
    
    if(!isNaN(userID.charAt(0))) {
        document.getElementById("userid-error").innerHTML = "User ID must not start with a numerical value";
        return false;
    }

    let UserRegex = /^[a-zA-Z0-9_]+$/;
    if(!UserRegex.test(userID)) {
        document.getElementById("userid-error").innerHTML = "User ID can only consist of letters, numbers, and or underscores";
        return false;
    } else if(userID.length < 5) {
        document.getElementById("userid-error").innerHTML = "User ID must be within 5 characters minimum";
        return false;
    } else if(userID.length > 30) {
        document.getElementById("userid-error").innerHTML = "User ID must be within 30 characters maximum";
        return false;
    } else {
        document.getElementById("userid-error").innerHTML = "";
        return true;
    }
    
}

//password
function passwordValidation() {
    const pass = document.getElementById("pass").value;
    const user = document.getElementById("userid").value;

    let error = 0;

    if(!pass.match(/[a-z]/)){
        document.getElementById("msg1").innerHTML = "- Password must include a lowercase letter";
        error = 1;
    } else {
        document.getElementById("msg1").innerHTML = "";
    }

    if(!pass.match(/[A-Z]/)) {
        document.getElementById("msg2").innerHTML = "- Password must include 1 uppercase letter";
        error = 1;
    } else {
        document.getElementById("msg2").innerHTML = "";
    }

    if(!pass.match(/[0-9]/)) {
        document.getElementById("msg3").innerHTML = "- Password must include a numerical value";
        error = 1;
    } else {
        document.getElementById("msg3").innerHTML = "";
    }

    if(!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        document.getElementById("msg4").innerHTML = "- Password must include 1 special character";
        error = 1;
    } else {
        document.getElementById("msg4").innerHTML = "";
    }
    
    if(pass.length < 8) {
        document.getElementById("msg5").innerHTML = "- Password must be at least 8 characters of length";
        error = 1;
    } else {
        document.getElementById("msg5").innerHTML = "";
    }

    if(pass == user || pass.includes(user)) {
        document.getElementById("msg6").innerHTML = "- Password cannot equal or be similar to User ID";
        error = 1;
    } else {
        document.getElementById("msg6").innerHTML = "";
    }

    
    }


//confirm password
function confirmpassValidation() {
    confirmpass = document.getElementById("pass").value;
    confirmpass2 = document.getElementById("confirmpass").value;

    if(confirmpass2 != confirmpass) {
        document.getElementById("confirmpass-error").innerHTML = "Password does not match. Please confirm and try again";
        return false;
    } else {
        document.getElementById("confirmpass-error").innerHTML = "";
        return true;
    }
    
}

//review page
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var datatype;
    var i;
    formoutput = "<table class='output'><th colspan = '3'> Please review and confirm the following information below</th>";
    for (i = 0; i < formcontent.length; i++) {
      if (formcontent.elements[i].value != "") {
        datatype = formcontent.elements[i].type;
        switch (datatype) {
          case "checkbox":
            if (formcontent.elements[i].checked) {
              formoutput =
                formoutput +
                "<tr><td align='right'>" +
                formcontent.elements[i].name +
                "</td>";
              formoutput =
                formoutput + "<td class='outputdata'>&#x2713;</td></tr>";
            }
            break;
          case "radio":
            if (formcontent.elements[i].checked) {
              formoutput =
                formoutput +
                "<tr><td align='right'>" +
                formcontent.elements[i].name +
                "</td>";
              formoutput =
                formoutput +
                "<td class='outputdata'>" +
                formcontent.elements[i].value +
                "</td></tr>";
            }
            break;
          case "button":
          case "submit":
          case "reset":
            break;
          default:
            formoutput =
              formoutput +
              "<tr><td align='right'>" +
              formcontent.elements[i].name +
              "</td>";
            formoutput =
              formoutput +
              "<td class = 'outputdata'>" +
              formcontent.elements[i].value +
              "</td></tr>";
        }
      }
    }
  
    if (formoutput.length > 0) {
      formoutput = formoutput + "</table>";
      document.getElementById("showInput").innerHTML = formoutput;
    }
  }

  //user input removal
  function reviewErase() {
    document.getElementById("showInput").innerHTML = "";
  }


  function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeButton = document.getElementById("close-alert");
    alertBox.style.display = "block";
    closeButton.onclick = function () {
        alertBox.style.display = "none";
    };
  }


  function validateAll() {
    let valid = true;
    if(!fnameValidation()) {
        valid = false;
    }
    if(!middlenameValidation()) {
        valid = false;
    }
    if(!lastnameValidation()) {
        valid = false;
    }
    if(!emailValidation()) {
        valid = false;
    }
    if(!validation()) {
        valid = false;
    }
    if(!ssnValidation()) {
        valid = false;
    }
    if(!addressValidation()) {
        valid = false;
    }
    if(!cityValidation()) {
        valid = false;
    }
    if(!phoneValidation()) {
        valid = false;
    }
    if(!zipValidation()) {
        valid = false;
    }
    if(!userIdValidation()) {
        valid = false;
    }
    if(!passwordValidation()) {
        valid = false;
    }
    if(!confirmpassValidation()) {
        valid = false;
    }
    if(valid) {
        document.getElementById("submit").disabled = false;
    } else {
        showAlert();
    }


  }
