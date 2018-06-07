function main(input) {
    var compareResult = '';
    var numberA = 0;
    var numberB = 0;
    var systemInput = input.system.split('');
    var userInput = input.user.split('');
    for (var i = 0; i < systemInput.length; i++) {
        for (var j = i; j < userInput.length; j++) {
            if (systemInput[i] === userInput[j]) {
                numberA++;
                break;
            } else {
                for (var k = 0; k < userInput.length; k++) {
                    if (systemInput[i] === userInput[k]) {
                        numberB++;
                        break;
                    }
                }
            }
            break;
        }
    }

    function printResult(numberA, numberB) {
        var compareResult = '';
        compareResult = numberA + 'A' + numberB + 'B';
        return compareResult;
    }

    compareResult = printResult(numberA, numberB);
    return compareResult;
};

module.exports = main;