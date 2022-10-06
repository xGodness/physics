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
    let center_h = h / 2;

    ctx.clearRect(0, 0, w, h);
    
    ctx.beginPath();

    // draw line
    ctx.moveTo(w - 50, center_h + 70);
    ctx.lineTo(50, center_h + 70);
    ctx.stroke();

    // draw ceil and string
    ctx.moveTo(center_w - 50, 95);
    ctx.lineTo(center_w + 50, 95);
    for (let i = 0; i <= 10; i++) {
        ctx.moveTo(center_w - 50 + i * 10, 95);
        ctx.lineTo(center_w - 47 + i * 10, 85);
    }
    ctx.moveTo(center_w, 95);
    ctx.lineTo(center_w, 200);
    ctx.fillText("k", center_w - 20, 120);
    ctx.stroke();

    // draw distance arrows
    ctx.moveTo(center_w + 50, 142);
    ctx.lineTo(center_w + 52, 147);
    ctx.moveTo(center_w + 50, 142);
    ctx.lineTo(center_w + 48, 147);

    ctx.moveTo(center_w + 50, 142);
    ctx.lineTo(center_w + 50, 212);

    ctx.lineTo(center_w + 52, 207);
    ctx.moveTo(center_w + 50, 212);
    ctx.lineTo(center_w + 48, 207);

    ctx.fillText("x", center_w + 60, 180);
    ctx.stroke();

    ctx.moveTo(center_w + 50, 220);
    ctx.lineTo(center_w + 52, 225);
    ctx.moveTo(center_w + 50, 220);
    ctx.lineTo(center_w + 48, 225);

    ctx.moveTo(center_w + 50, 220);
    ctx.lineTo(center_w + 50, center_h + 65);

    ctx.lineTo(center_w + 52, center_h + 60);
    ctx.moveTo(center_w + 50, center_h + 65);
    ctx.lineTo(center_w + 48, center_h + 60);

    ctx.fillText("l", center_w + 60, (center_h + 70) / 2 + 115)
    ctx.stroke();

    // draw circles
    ctx.moveTo(center_w + 10, 210);
    ctx.ellipse(center_w, 210, 10, 10, 0, 0, 2 * Math.PI);
    ctx.moveTo(center_w + 10, 130);
    ctx.fillText("q", center_w - 30, 215);
    ctx.stroke();
    ctx.setLineDash([2, 2, 0]);
    ctx.moveTo(center_w + 10, 145);
    ctx.ellipse(center_w, 145, 10, 10, 0, 0, 2 * Math.PI);
    ctx.stroke();

    // draw additional lines
    ctx.moveTo(center_w + 50, 142);
    ctx.lineTo(center_w + 10, 142);

    ctx.moveTo(center_w + 50, 210);
    ctx.lineTo(center_w + 10, 210);

    ctx.moveTo(center_w + 50, 220);
    ctx.lineTo(center_w + 10, 220);

    ctx.stroke();

}