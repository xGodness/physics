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

function validate_is_number(num, var_name, problem_number) {
    if (num === "" || isNaN(num)) {
        append_result(`[Warning] Parameter ${var_name} is not set or is not a number`, problem_number);
        return false;
    }
    return true;
}


function calculate_1() {
    clear_result_field(1);
    let x = document.getElementById("input-x-1").value.replace(/\s/g, '');
    let y = document.getElementById("input-y-1").value.replace(/\s/g, '');
    let a = document.getElementById("input-a-1").value.replace(/\s/g, '');
    
    let check_res_x = validate_is_number(x, "x", 1);
    let check_res_y = validate_is_number(y, "y", 1);
    let check_res_a = validate_is_number(a, "a", 1);
    
    if (check_res_x && check_res_y && check_res_a) {
        x = parseFloat(x);
        y = parseFloat(y);
        a = parseFloat(a);
        let i = 2 * a * x;
        let j = 2 * a * y;
        append_result(`[Result (a)] E = ${i.toFixed(2)} · i - (${j.toFixed(2)}) · j`, 1);
        i = a * y;
        j = a * x;
        append_result(`[Result (b)] E = - (${i.toFixed(2)} · i) - (${j.toFixed(2)} · j)`, 1);
    }
}

function calculate_2() {
    clear_result_field(2);
    let x = document.getElementById("input-x-2").value.replace(/\s/g, '');
    let y = document.getElementById("input-y-2").value.replace(/\s/g, '');
    let a = document.getElementById("input-a-2").value.replace(/\s/g, '');

    let check_res_x = validate_is_number(x, "x", 2);
    let check_res_y = validate_is_number(y, "y", 2);
    let check_res_a = validate_is_number(a, "a", 2);
    
    if (check_res_x && check_res_y && check_res_a) {
        x = parseFloat(x);
        y = parseFloat(y);
        a = parseFloat(a);
        let ans = - a * x * y;
        append_result(`[Result (a)] φ = ${ans.toFixed(2)}`, 2);
        ans = - a * Math.pow(x, 2) * y + a * Math.pow(y, 3) / 3;
        append_result(`[Result (b)] φ = ${ans.toFixed(2)}`, 2);
    }
}
