const result_field = document.getElementById("result-field");
function append_result(string) {
    result_field.innerText += string + "\n";
    
}

function clear_result_field() {
    result_field.innerText = "";
}

function validate_positive(num, var_name) {
    if (!validate_is_number(num, var_name)) {
        return false;
    }
    if (num <= 0) {
        append_result(`[Warning] Parameter ${var_name} must be positive`);
        return false;
    }
    return true;
}

function validate_is_number(num, var_name) {
    if (num === "" || isNaN(num)) {
        append_result(`[Warning] Parameter ${var_name} is not set or is not a number`);
        return false;
    }
    return true;
}


function calculate_1() {
    clear_result_field();
    let r = document.getElementById("input-r").value;
    let q = document.getElementById("input-q").value;
    let lambda = document.getElementById("input-lambda").value;
    
    let check_res_r = validate_positive(r, "R");
    let check_res_q = validate_is_number(q, "q");
    let check_res_lambda = validate_is_number(lambda, "λ");
    
    if (check_res_r && check_res_q && check_res_lambda) {
        append_result(`[Result] F = ${parseFloat(q) * parseFloat(lambda) / parseFloat(r)} · k`);
    }
}
