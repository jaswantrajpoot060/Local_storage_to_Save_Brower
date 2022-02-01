function validation() {
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;
    var link = document.getElementById('link').value;

    const gender = document.querySelectorAll('input[name="customRadio"]');
    let selectedValue;
    for (const rb of gender) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    //alert(selectedValue);


    if (user == "") {
        document.getElementById('error_user').innerHTML = " ** Please fill the username field";
        return false;
    }

    else if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById('error_user').innerHTML = " ** Username lenght must be between 2 and 20";
        return false;
    }

    else if (!isNaN(user)) {
        document.getElementById('error_user').innerHTML = " ** only characters are allowed";
        return false;
    }
    else {
        document.getElementById('error_user').innerHTML = '';
    }

    if (email == "") {
        document.getElementById('error_email').innerHTML = " ** Please fill the email id` field";
        return false;
    }
    else if (email.indexOf('@') <= 0) {
        document.getElementById('error_email').innerHTML = " ** '@' Invalid Position";
        return false;
    }
    else if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('error_email').innerHTML = " ** . Invalid Position";
        return false;
    }
    else {
        document.getElementById('error_email').innerHTML = '';
    }
    if (website == "") {
        document.getElementById('error_website').innerHTML = " ** Please fill the website field";
        return false;
    }
    else {
        document.getElementById('error_website').innerHTML = '';
    }
    if (link == "") {
        document.getElementById('error_link').innerHTML = " ** Please fill the link field";
        return false;
    }
    else {
        document.getElementById('error_link').innerHTML = '';
    }



    var SkilRahul = "";
    if (document.getElementById("chk_java").checked)
        SkilRahul = "Java";

    if (document.getElementById("chk_html").checked)
        SkilRahul += ", HTML";

    if (document.getElementById("chk_css").checked)
        SkilRahul += ", CSS";

    //dataa fatch
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.user.toLowerCase() == document.getElementById('user').value.toLowerCase() && data.email.toLowerCase() == document.getElementById('email').value.toLowerCase());
    if (!exist) {
        formData.push({
            user: document.getElementById('user').value,
            email: document.getElementById('email').value,
            website: document.getElementById('website').value,
            link: document.getElementById('link').value,
            gender1: selectedValue,
            Skill: SkilRahul

        });
        localStorage.setItem('formData', JSON.stringify(formData));
        // console.log(localStorage.getItem('formData'));
        dispData();
        document.querySelector('form').reset();
        document.getElementById('user').focus();
    }
    else {
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }

}
function dispData() {
    console.log(localStorage.getItem('formData'));
    if (localStorage.getItem('formData')) {
        var output = document.querySelector('tbody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('formData')).forEach(data => {
            output.innerHTML += `
                <tr style="border-left: 1px solid #8fbc15; border-top:1px solid #8fbc15;">
                    <td>${data.user}</td>
                    <td rowspan="5" style="vertical-align: middle;border-left: 1px solid #8fbc15;
                    border-bottom: 1px solid #8fbc15;
                    border-right: 1px solid #8fbc15;"><a href="../${data.link}"  target="_blank">
                        <img src="${data.link}" onerror=this.src='${data.link}' style="width:128px;height:128px;">
                    </a>
                    </td>
                    </tr>
                    <tr style="border-left: 1px solid #8fbc15;">
                        <td>${data.email}</td>
                    </tr>
                    <tr style="border-left: 1px solid #8fbc15;">
                        <td>
                        <a href="../${data.website}"target="_blank">
                        ${data.website}</td>
                        </a></tr>
                        <tr style="border-left: 1px solid #8fbc15;">
                        <td>${data.gender1}</td>
                    </tr>
                    <tr style="border-left: 1px solid #8fbc15; border-bottom: 1px solid #8fbc15;">
                        <td>${data.Skill}</td>
                    </tr>
                        `;
        });
    }
}
dispData();

//user error msg
function Erroruser() {
    
    var user = document.getElementById('user').value;

    if (user == "") {
        document.getElementById('error_user').innerHTML = " ** Please fill the username field";
        return false;
    }

    else if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById('error_user').innerHTML = " ** Username lenght must be between 2 and 20";
        return false;
    }

    else if (!isNaN(user)) {
        document.getElementById('error_user').innerHTML = " ** only characters are allowed";
        return false;
    }
    else {
        document.getElementById('error_user').innerHTML = '';
    }
}
function Erroremail() {
    var email = document.getElementById('email').value;

    if (email == "") {
        document.getElementById('error_email').innerHTML = " ** Please fill the email id` field";
        return false;
    }
    else if (email.indexOf('@') <= 0) {
        document.getElementById('error_email').innerHTML = " ** '@' Invalid Position";
        return false;
    }
    else if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('error_email').innerHTML = " ** . Invalid Position";
        return false;
    }
    else {
        document.getElementById('error_email').innerHTML = '';
    }
}

function Errorwebsite() {
    var website = document.getElementById('website').value;

    if (website == "") {
        document.getElementById('error_website').innerHTML = " ** Please fill the website field";
        return false;
    }
    else {
        document.getElementById('error_website').innerHTML = '';
    }

}
function Errorlink() {
    var link = document.getElementById('link').value;

    if (link == "") {
        document.getElementById('error_link').innerHTML = " ** Please fill the link field";
        return false;
    }
    else {
        document.getElementById('error_link').innerHTML = '';
    }
}