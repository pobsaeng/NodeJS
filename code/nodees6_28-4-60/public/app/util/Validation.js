class Validation {
    constructor() {

    }
    trim(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
    checkNumber(str) {
        let vOver = '';
        while (str.length > 0 && isNaN(str)) {
            str = str.substring(0, str.length - 1);
            //vOver = (str.length - 1, str.length);
        }
        return this.trim(str);
    }
    
    // validateForm(theForm) {
    //     with (theForm) {
    //         // return false would prevent default submission
    //         return (isNotEmpty(txtName, "Please enter your name!", elmNameError)
    //             && isNumeric(txtZipcode, "Please enter a 5-digit zip code!", elmZipcodeError)
    //             && isLengthMinMax(txtZipcode, 5, 5, "Please enter a 5-digit zip code!", elmZipcodeError)
    //             && isSelected(selCountry, "Please make a selection!", elmCountryError)
    //             && isChecked("gender", "Please check a gender!", elmGenderError)
    //             && isChecked("color", "Please check a color!", elmColorError)
    //             && isNumeric(txtPhone, "Please enter a valid phone number!", elmPhoneError)
    //             && isValidEmail(txtEmail, "Enter a valid email!", elmEmailError)
    //             && isValidPassword(txtPassword, "Password shall be 6-8 characters!", elmPasswordError)
    //             && verifyPassword(txtPassword, txtPWVerified, "Different from new password!",
    //                 elmPWVerifiedError)
    //         );
    //     }
    // }
    postValidate(isValid, errMsg, errElm, inputElm) {
        if (!isValid) {
            // Show errMsg on errElm, if provided.
            if (errElm !== undefined && errElm !== null
                && errMsg !== undefined && errMsg !== null) {
                errElm.innerHTML = errMsg;
            }
            // Set focus on Input Element for correcting error, if provided.
            if (inputElm !== undefined && inputElm !== null) {
                inputElm.classList.add("errorBox");  // Add class for styling
                inputElm.focus();
            }
        } else {
            // Clear previous error message on errElm, if provided.
            if (errElm !== undefined && errElm !== null) {
                errElm.innerHTML = "";
            }
            if (inputElm !== undefined && inputElm !== null) {
                inputElm.classList.remove("errorBox");
            }
        }
    }

    /*
     * Validate that input value is not empty.
     *
     * @param inputElm (object): input element
     * @param errMsg (string): error message
     * @param errElm (object): element to place error message
     */
    isNotEmpty(inputElm, errMsg, errElm) {
        var isValid = (inputElm.value.trim() !== "");
        postValidate(isValid, errMsg, errElm, inputElm);
        return isValid;
    }

    /* Validate that input value contains one or more digits */
    isNumeric(inputElm, errMsg, errElm) {
        var isValid = (inputElm.value.trim().match(/^\d+$/) !== null);
        postValidate(isValid, errMsg, errElm, inputElm);
        return isValid;
    }

    /* Validate that input value contains only one or more letters */
    isAlphabetic(inputElm, errMsg, errElm) {
        var isValid = (inputElm.value.trim().match(/^[a-zA-Z]+$/) !== null);
        postValidate(isValid, errMsg, errElm, inputElm);
        return isValid;
    }

    /* Validate that input value contains one or more digits or letters */
    isAlphanumeric(inputElm, errMsg, errElm) {
        var isValid = (inputElm.value.trim().match(/^[0-9a-zA-Z]+$/) !== null);
        postValidate(isValid, errMsg, errElm, inputElm);
        return isValid;
    }

    /* Validate that input value length is between minLength and maxLength */
    isLengthMinMax(inputElm, minLength, maxLength, errMsg, errElm) {
        var inputValue = inputElm.value.trim();
        var isValid = (inputValue.length >= minLength) && (inputValue.length <= maxLength);
        postValidate(isValid, errMsg, errElm, inputElm);
        return isValid;
    }

    // Validate that input value is a valid email address
    isValidEmail(inputElm, errMsg, errElm) {
        var isValid = (inputElm.value.trim().match(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== null);
        postValidate(isValid, errMsg, errElm, inputElm);
        return isValid;
    }

    /*
     * Validate that a selection is made (not default of "") in <select> input
     *
     * @param selectElm (object): the <select> element
     */
    isSelected(selectElm, errMsg, errElm) {
        // You need to set the default value of <select>'s <option> to "".
        var isValid = (selectElm.value !== "");   // value in selected <option>
        postValidate(isValid, errMsg, errElm, selectElm);
        return isValid;
    }

    /*
     * Validate that one of the checkboxes or radio buttons is checked.
     * Checkbox and radio are based on name attribute, not id.
     *
     * @param inputName (string): name attribute of the checkbox or radio
     */
    isChecked(inputName, errMsg, errElm) {
        var elms = document.getElementsByName(inputName);
        var isChecked = false;
        for (var i = 0; i < elms.length; ++i) {
            if (elms[i].checked) {
                isChecked = true;
                break;
            }
        }
        postValidate(isChecked, errMsg, errElm, null);  // no focus element
        return isChecked;
    }

    // Validate password, 6-8 characters of [a-zA-Z0-9_]
    isValidPassword(inputElm, errMsg, errElm) {
        var isValid = (inputElm.value.trim().match(/^\w{6,8}$/) !== null);
        postValidate(isValid, errMsg, errElm, inputElm);
        return isValid;
    }

    // Verify password.
    verifyPassword(pwElm, pwVerifiedElm, errMsg, errElm) {
        var isTheSame = (pwElm.value === pwVerifiedElm.value);
        postValidate(isTheSame, errMsg, errElm, pwVerifiedElm);
        return isTheSame;
    }

    /*
     * The "onclick" handler for the "reset" button to clear the display,
     * including the previous error messages and error box.
     */
    clearForm() {
        // Remove class "errorBox" from input elements
        var elms = document.querySelectorAll('.errorBox');  // class
        for (var i = 0; i < elms.length; i++) {
            elms[i].classList.remove("errorBox");
        }

        // Remove previous error messages
        elms = document.querySelectorAll('[id$="Error"]');  // id ends with Error
        for (var i = 0; i < elms.length; i++) {
            elms[i].innerHTML = "";
        }

        // Set initial focus
        document.getElementById("txtName").focus();
    }
}