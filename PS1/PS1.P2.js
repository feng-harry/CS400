const evaluate_expression = expression => {
    const get_operation_type = expression => {
        if (expression.includes("+"))
            return "+";
        if (expression.includes("-"))
            return "-";
        if (expression.includes("*"))
            return "*";
        if (expression.includes("/"))
            return "/";
    }

    const addition_function = (left_val, right_val) => left_val + right_val;
    const subtraction_function = (left_val, right_val) => left_val - right_val;
    const multiplication_function = (left_val, right_val) => left_val * right_val;
    const division_function = (left_val, right_val) => left_val / right_val;

    const operation_type = get_operation_type(expression);

    const left_val = parseInt(expression.split(operation_type)[0]);
    const right_val = parseInt(expression.split(operation_type)[1]);

    if (operation_type == "+")
        return addition_function(left_val, right_val);
    if (operation_type == "-")
        return subtraction_function(left_val, right_val);
    if (operation_type == "*")
        return multiplication_function(left_val, right_val);
    if (operation_type == "/")
        return division_function(left_val, right_val);
}
console.log(evaluate_expression("9/2"))