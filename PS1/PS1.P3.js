const execute_function_with_str = (some_string, some_function) => some_function(some_string);

const exp1 = execute_function_with_str("supercalifragilisticexpialidocious",
    split_str = str_to_split => {
    let frags = str_to_split.split("c");
    const add_c_to_front = (currentValue, index) => index > 0 ? "c" + currentValue : currentValue;
    frags = frags.map(add_c_to_front);
    return frags;
})

const exp2 = execute_function_with_str("supercalifragilisticexpialidocious",
    some_lambda_function = some_str => {
    const convert_and_count  = some_str => {
        const all_chars = some_str.split("");
        let cap_A_str = "";
        let count_A = 0;
        for (let i = 0; i < all_chars.length; i++) {
            if (all_chars[i] == "a") {
                cap_A_str += "A";
                count_A += 1;
            }
            else
                cap_A_str += all_chars[i];
        }
        return [cap_A_str, count_A];
    }

    const converted_results = convert_and_count(some_str);

    const return_obj = {
        "originalString": some_str,
        "modifiedString": converted_results[0],
        "numberReplaced": converted_results[1],
        "length": converted_results[0].length,
    };

    return return_obj;
})


console.log(exp2)