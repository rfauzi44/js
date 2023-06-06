var romanToInt = function (s) {

    const legend = [
        { name: "I", value: 1 },
        { name: "V", value: 5 },
        { name: "X", value: 10 },
        { name: "L", value: 50 },
        { name: "C", value: 100 },
        { name: "D", value: 500 },
        { name: "M", value: 1000 },
    ];



    const arrS = s.split("");

    let result = 0;

    for (let i = 0; i < arrS.length; i++) {
        for (let j = 0; j < legend.length; j++) {
            if (arrS[i] === legend[j].name) {
                result = result + legend[j].value;
            }
        }
        if (arrS[i] === "I" && (arrS[i + 1] === "V" || arrS[i + 1] === "X")) {
            result = result - (1 * 2);
        }

        if (arrS[i] === "X" && (arrS[i + 1] === "L" || arrS[i + 1] === "C")) {
            result = result - (10 * 2);
        }

        if (arrS[i] === "C" && (arrS[i + 1] === "D" || arrS[i + 1] === "M")) {
            result = result - (100 * 2);
        }
    }

    return result

};


const s ="III"

console.log(romanToInt(s))
