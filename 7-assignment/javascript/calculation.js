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

function validate_positive(num, var_name, problem_number, allow_zero) {
    if (!validate_is_number(num, var_name, problem_number)) {
        return false;
    }
    if (allow_zero) {
        if (num < 0) {
            append_result(`[Warning] Parameter ${var_name} must be positive or zero`, problem_number);
            return false;
        }
        return true;    
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
    let t = document.getElementById("input-t-1").value.replace(/\s/g, '');
    let i0 = document.getElementById("input-i0-1").value.replace(/\s/g, '');
    let imax = document.getElementById("input-imax-1").value.replace(/\s/g, '');
    
    let check_res_r = validate_positive(r, "R", 1, false);
    let check_res_t = validate_positive(t, "t", 1, false);
    let check_res_i0 = validate_positive(i0, "I0", 1, true);
    let check_res_imax = validate_positive(imax, "Imax", 1, false);
    
    if (check_res_r && check_res_t && check_res_i0 && check_res_imax) {
        r = parseFloat(r);
        t = parseFloat(t);
        i0 = parseFloat(i0);
        imax = parseFloat(imax);
        if (i0 >= imax) {
            append_result("[Warning] Imax must be greater than I0", 1);
            return;
        }
        
        let ans = ((imax - i0) ** 2 / 3 + i0 * imax) * r * t / 10 ** 3;
        append_result(`[Result] Q = ${ans.toFixed(2)} (кДж)`, 1);
    }
}

function calculate_2() {
    clear_result_field(2);
    let r = document.getElementById("input-r-2").value.replace(/\s/g, '');
    let q = document.getElementById("input-q-2").value.replace(/\s/g, '');
    let t = document.getElementById("input-t-2").value.replace(/\s/g, '');
    
    let check_res_r = validate_positive(r, "R", 2, false);
    let check_res_q = validate_positive(q, "q", 2, false);
    let check_res_t = validate_positive(t, "t", 2, false);
    
    if (check_res_r && check_res_q && check_res_t) {
        r = parseFloat(r);
        q = parseFloat(q);
        t = parseFloat(t);
        let ans = 4 * q**2 * r / 3 / t;
        append_result(`[Result] Q = ${ans.toFixed(2)} (Дж)`, 2);
    }
}
