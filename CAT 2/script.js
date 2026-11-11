let studentName = "John Kamau";
let regNumber = "BIT/001/2026";
let programme = "Information Technology";


console.log(studentName);
console.log(regNumber);
console.log(programme);

function calculateGrade(score) {

    if (score < 0 || score > 100) {
        return "Invalid score";
    }
    else if (score >= 70) {
        return "A";
    }
    else if (score >= 60) {
        return "B";
    }
    else if (score >= 50) {
        return "C";
    }
    else if (score >= 40) {
        return "D";
    }
    else {
        return "E";
    }
}


let grade = calculateGrade(75);

alert("Your grade is: " + grade);


const form = document.getElementById("registrationForm");

const output = document.getElementById("output");

form.addEventListener("submit", function (event) {

    
    event.preventDefault();


    const name = document.getElementById("studentName").value.trim();

    const reg = document.getElementById("regNumber").value.trim();

    const email = document.getElementById("email").value.trim();


    if (name === "") {
        output.textContent =
            "Error: Please enter your full name.";
        return;
    }


    if (reg === "") {
        output.textContent =
            "Error: Please enter your registration number.";
        return;
    }



    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        output.textContent =
            "Error: Please enter a valid email address.";
        return;
    }


    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!gender) {
        output.textContent = "Please select your gender.";
        return;
    }


    const selectedProgramme =
        document.getElementById("programme").value;

    if (selectedProgramme === "") {
        output.textContent =
            "Please select an academic programme.";
        return;
    }

    output.textContent =
        "REGISTRATION SUCCESSFUL!\n" +
        "Student Name: " + name + "\n" +
        "Registration Number: " + reg + "\n" +
        "Email Address: " + email + "\n" +
        "Gender: " + gender.value + "\n" +
        "Programme: " + selectedProgramme + "\n" +
        "Your registration has been submitted successfully.";

});




form.addEventListener("reset", function () {
    output.textContent = "";
});
