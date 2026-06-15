// let out = '';

// for (let i = 1; i <= 5; i++) {

//     let temp = (i * 2 - 1);

//     for (let j = 0; j < i; j++) {

//         out = out + "* ";
//     }

//     out = out + '\n';
// }
// console.log(out);


// pramid shap

const pattern = (input) => {


    let out = '';

    for (let i = input - 1; i >= 0; i--) {
        let temp = i * 2 - 1

        for (let j = 0; j < i; j++) {
            out = out + " "
        }

        for (let k = temp; k <= ((input - 1) * 2) - 1; k++) {

            out = out + '*'
        }
        out = out + '\n'
    }

    console.log(out)
}

pattern(3)

