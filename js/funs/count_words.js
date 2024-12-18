function countWords(st) {
    let words = 0
    for (let i = 0; i < st.length; i++) {
        if (st[i] === ' ')
            words++;
    }

    return words + 1;
}

function countWords2(st) {
     return st.split(/\W+/).length
}

console.log(countWords('This is to   test'))
console.log(countWords2('This is    to     test'))