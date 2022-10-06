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

    let center_w = w / 2;
    let center_h = h / 2;

    ctx.clearRect(0, 0, w, h);

    ctx.beginPath();

    // draw line
    ctx.moveTo(w - 50, center_h);
    ctx.lineTo(50, center_h);
    ctx.stroke();

    // draw A and B points
    ctx.ellipse(w - 100, center_h, 4, 4, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText("B", w - 105, center_h - 10);
    ctx.fillText("-q", w - 110, center_h + 20);
    ctx.ellipse(w - 180, center_h, 4, 4, 0, 0, 2 * Math.PI);
    ctx.fillText("A", w - 185, center_h - 10);
    ctx.fillText("+9q", w - 200, center_h + 20);
    ctx.fill();
    ctx.stroke();

    // draw moving point
    ctx.moveTo(80, center_h);
    ctx.ellipse(80, center_h, 4, 4, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText("m", 75, center_h - 10);
    ctx.fillText("+q", 70, center_h + 20);
    ctx.stroke();

    // draw speed vector
    ctx.moveTo(80, center_h);
    ctx.lineTo(130, center_h);
    ctx.lineTo(120, center_h + 5);
    ctx.moveTo(130, center_h);
    ctx.lineTo(120, center_h - 5);
    ctx.fillText("v", 120, center_h - 10);
    ctx.stroke();

    // draw distance arrow
    ctx.moveTo(w - 180, center_h - 50);
    ctx.lineTo(w - 100, center_h - 50);
    ctx.stroke();

    ctx.lineTo(w - 105, center_h - 52);
    ctx.moveTo(w - 100, center_h - 50);
    ctx.lineTo(w - 105, center_h - 48);
    ctx.stroke();

    ctx.moveTo(w - 180, center_h - 50);
    ctx.lineTo(w - 175, center_h - 52);
    ctx.moveTo(w - 180, center_h - 50);
    ctx.lineTo(w - 175, center_h - 48);
    ctx.stroke();

    ctx.fillText("l", w - 140, center_h - 60);
    ctx.stroke();

    ctx.closePath();
}


function draw_2() {
    const canvas = document.getElementById("canvas-2");
    const ctx = canvas.getContext("2d");

    ctx.font = "18px ubuntu";

    let w = canvas.width;
    let h = canvas.height;

    let center_w = w / 2;
    let center_h = h / 2 + 75;
    
    let r = 150;

    ctx.clearRect(0, 0, w, h);
    
    ctx.beginPath();

    // draw line
    ctx.moveTo(w - 50, center_h);
    ctx.lineTo(50, center_h);
    ctx.stroke();
}