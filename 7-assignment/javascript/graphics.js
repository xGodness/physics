window.onload = function () {
    draw_1();
    draw_2();
}

function draw_1() {
    const canvas = document.getElementById("canvas-1");
    const ctx = canvas.getContext("2d");

    ctx.font = "18px ubuntu";

    let w = canvas.width;
    let h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    
    ctx.beginPath();
    ctx.fillText("No schema for this problem", 90, 30);
    ctx.closePath();
}


function draw_2() {
    const canvas = document.getElementById("canvas-2");
    const ctx = canvas.getContext("2d");

    ctx.font = "18px ubuntu";

    let w = canvas.width;
    let h = canvas.height;

    let center_w = w / 2;
    let center_h = h / 2 + 25;

    ctx.clearRect(0, 0, w, h);

    ctx.clearRect(0, 0, w, h);

    ctx.beginPath();
    ctx.fillText("No schema for this problem either", 70, 30);
    ctx.fillText("Better enjoy this capybara", 100, h - 30);
    ctx.closePath();
    
}
