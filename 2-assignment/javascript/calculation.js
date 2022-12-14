const result_field_1 = document.getElementById("result-field-1");
const result_field_2 = document.getElementById("result-field-2");
function append_result(string, problem_number) {
    switch (problem_number) {
        case 1:
            result_field_1.innerText += string + "\n";
            break;
        case 2:
            result_field_2.innerText += string + "\n";
            break;
        default:
            console.log(`Invalid problem number: ${problem_number}`);
            break;
    }
    
}

function clear_result_field(problem_number) {
    switch (problem_number) {
        case 1:
            result_field_1.innerText = "";
            break;
        case 2:
            result_field_2.innerText = "";
            break;
        default:
            console.log(`Invalid problem number: ${problem_number}`);
            break;
    }
}

function validate_positive(num, var_name, problem_number) {
    if (!validate_is_number(num, var_name, problem_number)) {
        return false;
    }
    if (num <= 0) {
        append_result(`[Warning] Parameter ${var_name} must be positive`, problem_number);
        return false;
    }
    return true;
}

function validate_is_number(num, var_name, problem_number) {
    if (num === "" || isNaN(num)) {
        append_result(`[Warning] Parameter ${var_name} is not set or is not a number`, problem_number);
        return false;
    }
    return true;
}


function calculate_1() {
    clear_result_field(1);
    let r = document.getElementById("input-r-1").value.replace(/\s/g, '');
    let q = document.getElementById("input-q-1").value.replace(/\s/g, '');
    let lambda = document.getElementById("input-lambda-1").value.replace(/\s/g, '');
    
    let check_res_r = validate_positive(r, "R", 1);
    let check_res_q = validate_is_number(q, "q", 1);
    let check_res_lambda = validate_is_number(lambda, "λ", 1);
    
    if (check_res_r && check_res_q && check_res_lambda) {
        r = parseFloat(r);
        q = parseFloat(q);
        lambda = parseFloat(lambda);
        let k = 9 * 10**6;
        let ans = q * lambda * k / r;
        append_result(`[Result] F = ${ans.toFixed(2)} (кН)`, 1);
    }
}

function calculate_2() {
    clear_result_field(2);
    let r = document.getElementById("input-r-2").value.replace(/\s/g, '');
    let lambda = document.getElementById("input-lambda-2").value.replace(/\s/g, '');

    let check_res_r = validate_positive(r, "R", 2);
    let check_res_lambda = validate_is_number(lambda, "λ", 2);
    
    if (check_res_r && check_res_lambda) {
        r = parseFloat(r);
        lambda = parseFloat(lambda);
        let k = 9 * 10**6;
        let ans = Math.sqrt(2) * parseFloat(lambda) * k / parseFloat(r);
        append_result(`[Result] E = ${ans.toFixed(2)} (кН/Кл)`, 2);
    }
}
