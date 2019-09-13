const sort_string = input_str => {
    const str_to_array = input_str => input_str.split("");
    const array_to_string = input_array => {
        const concat_str = (accumulator, currentValue) => accumulator + currentValue;
        return input_array.reduce(concat_str)
    }

    let array_of_char = str_to_array(input_str);
    array_of_char = array_of_char.sort();
    return array_to_string(array_of_char);

}

console.log(sort_string("supercalifragilisticexpialidocious"));