const sum_array = input_array => {
    const sum_values = (accumulator, currentValue) => {
        return accumulator + currentValue;
    }
    return input_array.reduce(sum_values);
}

const swap_and_update = (input_array, value) => {
    input_array[0] = input_array[1]
    input_array[1] = value;
}

const fib1 = function* () {
    let seq_3 = [0,1];
    let i = 0;
    while (true) {
        if (i < 2) {
            i++;
            yield seq_3[i-1];
        }
        else{
            let result = sum_array(seq_3);
            swap_and_update(seq_3, result);
            yield result;
        }
    }
}

const fib2 = function* () {
    let fib = fib1();
    while (true) {
        let result = fib.next().value;
        while (result % 2 == 1) {
            result = fib.next().value;
        }
        yield result;
    }
}

let x = fib2();

for (let i = 0; i < 6; i++) {
    console.log(x.next().value);
}
