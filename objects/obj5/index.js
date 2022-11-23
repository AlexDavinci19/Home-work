function sum(...numbers) {
    return numbers.reduce((acc, a) => acc + a, 0);
  };

console.log(sum(1, 2, 3));
console.log(sum(2, 2));
console.log(sum(10, 15, 249, 653, 846));