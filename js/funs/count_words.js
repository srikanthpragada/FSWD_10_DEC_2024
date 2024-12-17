function countWords(st) {
    let words = 0
    for (let i = 0; i < st.length; i++) {
        if (st[i] === ' ')
            words++;
    }

    return words + 1;
}

console.log(countWords('This is to test'))