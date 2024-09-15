var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2>  Editable Resume</h2>\n    <h3> Personal Information</h3>\n    <p> Name: <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p> Name: <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p> Name:<span contenteditable=\"true\">").concat(contactNumber, "</span></p>\n    \n    <h3> Education </h3>\n    <p contenteditable=\"true\"> Name:").concat(education, "</p>\n\n    <h3> Experience</h3>\n    <p contenteditable=\"true\"> Name:").concat(experience, "</p>\n\n    <h3> Skills</h3>\n    <p contenteditable=\"true\"> Name:").concat(skills, "</p>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('one or two missing');
    }
});
