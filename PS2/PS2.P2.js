const print_words = function* (sentence) {
    let string_as_array = sentence.split(" ");
    let i = 0;
    let finished = false;
    while (!finished){
        let res = string_as_array[i];
        i++;
        if (i >= string_as_array.length) {
            finished = true;
        }
        yield res;
    }
}

const input_str = "All I know is something like a bird within her sang"
let x = print_words(input_str);
for (let i = 0; i < input_str.split(" ").length; i++) {
    console.log(x.next().value);
}


