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
    let l = document.getElementById("input-l-1").value.replace(/\s/g, '');
    let alpha = document.getElementById("input-alpha-1").value.replace(/\s/g, '');
    let m = document.getElementById("input-m-1").value.replace(/\s/g, '');
    
    let check_res_l = validate_positive(l, "l", 1);
    let check_res_alpha = validate_positive(alpha, "α", 1);
    let check_res_m = validate_positive(m, "m", 1);
    
    if (check_res_l && check_res_alpha && check_res_m) {
        l = parseFloat(l);
        alpha = parseFloat(alpha) % 180;
        m = parseFloat(m);
        let ans = (l / 100) * Math.sqrt(((m / 1000) * 10 * Math.tan(Math.PI / (180 / alpha) / 2)) / 9000000000) * 1000000000;
        append_result(`[Result] q = ${ans.toFixed(2)} (нКл)`, 1);
    }
}

function calculate_2() {
    clear_result_field(2);
    let lambda = document.getElementById("input-lambda-2").value.replace(/\s/g, '');
    let l = document.getElementById("input-l-2").value.replace(/\s/g, '');
    let a = document.getElementById("input-a-2").value.replace(/\s/g, '');

    let check_res_lambda = validate_positive(lambda, "λ", 2);
    let check_res_l = validate_positive(l, "l", 2);
    let check_res_a = validate_positive(a, "a", 2);
    
    if (check_res_lambda && check_res_l && check_res_a) {
        lambda = parseFloat(lambda) / 10**6;
        l = parseFloat(l) / 100;
        a = parseFloat(a) / 100;
        let k = 9 * 10**9;
        let ans = k * lambda * l / (a * (a + l) * 1000);
        
        append_result(`[Result] E = ${ans.toFixed(2)} (кВ/м)`, 2);
    }
}
