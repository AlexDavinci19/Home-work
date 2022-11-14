const getSumOfSequence = (number) => {
    const endArray = [];
    for (let i = 1; i <= number; i += 1) {
        endArray.push(i);
    }
    return endArray[0] + endArray[endArray.length - 1];
};

console.log(getSumOfSequence(150));
