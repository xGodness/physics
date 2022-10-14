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
    let l = document.getElementById("input-l-1").value.replace(/\s/g, '');
    
    let check_res_r1 = validate_positive(r1, "r1", 1);
    let check_res_r2 = validate_positive(r2, "r2", 1);
    let check_res_l = validate_positive(l, "l", 1);
    let eps = 8.85 * 10**(-12);
    
    if (check_res_r1 && check_res_r2 && check_res_l) {
        r1 = parseFloat(r1) / 10**6; 
        r2 = parseFloat(r2) / 10**3;
        l = parseFloat(l) / 10**3;
        let ans = (2 * Math.PI * l * eps) / Math.log(r2 / r1) * 10**12;
        append_result(`[Result] C = ${ans.toFixed(2)} (пФ/м)`, 1);
    }
}

function calculate_2() {
    clear_result_field(2);
    let c = document.getElementById("input-c-2").value.replace(/\s/g, '');

    let check_res_c = validate_positive(c, "c", 2);
    
    if (check_res_c) {
        c = parseFloat(c)
        let ans = c * (Math.sqrt(5) - 1) / 2;
        append_result(`[Result] C = ${ans.toFixed(2)} (мкФ)`, 2);
    }
}
