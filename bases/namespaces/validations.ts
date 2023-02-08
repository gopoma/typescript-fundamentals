namespace Validations {
    export const validateText = (text: string): boolean => {
        return (text.length > 3);
    };

    export const validateDate = (myDate: Date): boolean => {
        return (!isNaN(myDate.valueOf()))
    }

    //* Not being exported
    const validateNumber = (myNum: number) => {
        return !isNaN(myNum);
    }
}

console.log(Validations.validateText("Gustavo"));
console.log(Validations.validateDate(new Date()));
console.log(Validations);