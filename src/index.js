module.exports = function check(str, bracketsConfig) {
    const brackets = bracketsConfig.flatMap((item) => item.join(""));

    for (let index = 0; index < brackets.length; index++) {
        if (str.includes(brackets[index])) {
            str = str.replace(brackets[index], "");
            index = -1;
        }
    }

    return str === "";
};

// function check(str, bracketsConfig) {
//     const brackets = bracketsConfig.flatMap((item) => item.join(""));

//   for (let index = 0; index < brackets.length; index++) {
//     if (str.includes(brackets[index])) {
//         str = str.replace(brackets[index], "");
//         index = -1;
//     }
// }

// return str === "";
// }

// console.log(check("123", [1, 2, 3, [4, 6, [4, 5, 4]]]));
