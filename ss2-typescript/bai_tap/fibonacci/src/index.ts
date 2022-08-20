// @ts-ignore
function fibonacci(num) {
    if (num == 1 || num == 2) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

let num = 10;
let sum = 0;
let arr = ' ';
for (let i = 1; i <= num; i++) {
    arr += ' ' + fibonacci(i) + ' ';
    sum += fibonacci(i);
}
console.log(num + " phần tử đầu tiên trong dãy fibonacci là: " + arr);
console.log("Tổng gồm " + num + " phần tử đầu tiên trong dãy fibonacci là: " + sum);

