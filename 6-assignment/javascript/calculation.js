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
    let r1 = document.getElementById("input-r1-1").value.replace(/\s/g, '');
    let r2 = document.getElementById("input-r2-1").value.replace(/\s/g, '');
    let alpha = document.getElementById("input-alpha-1").value.replace(/\s/g, '');
    
    let check_res_r1 = validate_positive(r1, "R1", 1);
    let check_res_r2 = validate_positive(r2, "R2", 1);
    let check_res_alpha = validate_positive(alpha, "α", 1);
    
    if (check_res_r1 && check_res_r2 && check_res_alpha) {
        r1 = parseFloat(r1);
        r2 = parseFloat(r2);
        if (r2 <= r1) {
            append_result("[Warning] R2 must be greater than R1", 1);
            return;
        }
        alpha = parseFloat(alpha);
        let eps = 8.85 / 10**12;
        let ans = 4 * Math.PI * eps * alpha / Math.log(r2 / r1) * 10**12;
        append_result(`[Result] C = ${ans.toFixed(2)} (пФ)`, 1);
    }
}

function calculate_2() {
    clear_result_field(2);
    let c1 = document.getElementById("input-c1-2").value.replace(/\s/g, '');
    let c2 = document.getElementById("input-c2-2").value.replace(/\s/g, '');
    let u = document.getElementById("input-u-2").value.replace(/\s/g, '');

    let check_res_c1 = validate_positive(c1, "C1", 2);
    let check_res_c2 = validate_positive(c2, "C2", 2);
    let check_res_u = validate_positive(u, "U", 2);
    
    if (check_res_c1 && check_res_c2 && check_res_u) {
        c1 = parseFloat(c1) / 10**6;
        c2 = parseFloat(c2) / 10**6;
        u = parseFloat(u);
        let ans = - c1 * c2 * u**2 / 2 / (c1 + c2);
        append_result(`[Result] ΔE = ${ans.toFixed(2)} (Дж)`, 2);
    }
}
