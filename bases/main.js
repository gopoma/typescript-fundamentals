"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3);
    };
    Validations.validateDate = (myDate) => {
        return (!isNaN(myDate.valueOf()));
    };
    //* Not being exported
    const validateNumber = (myNum) => {
        return !isNaN(myNum);
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText("Gustavo"));
console.log(Validations.validateDate(new Date()));
console.log(Validations);
//# sourceMappingURL=main.js.map