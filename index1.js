let out = '';

for (let i = 1; i <= 10; i++) {

    let inside = (i * 2) - 1;

    for (let j = 0; j < inside; j++) {

        out = out + i % 2 + " "
    }
    out = out + '\n'
}
console.log(out);