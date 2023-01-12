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
    ctx.ellipse(center_w / 2, center_h, 15, 15, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText("m", center_w / 2 - 40, center_h + 5);
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(center_w / 2, center_h);
    ctx.lineTo(center_w, 100);
    ctx.fillText("l", center_w / 2 + 35, 150);
    ctx.lineTo(3 * center_w / 2, center_h);
    ctx.fillText("l", 3 * center_w / 2 - 40, 150);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.ellipse(3 * center_w / 2, center_h, 15, 15, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText("m", w - center_w / 2 + 25, center_h + 5);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(center_w, 100);
    ctx.ellipse(center_w, 100, 15, 15, 0, Math.PI / 4, 3 * Math.PI / 4);
    ctx.stroke();
    ctx.fillText("α", center_w - 5, 130);
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
    ctx.moveTo(50, center_h - 5);
    ctx.lineTo(50, center_h + 5);
    
    ctx.moveTo(50, center_h);
    ctx.lineTo(w - 150, center_h);

    ctx.moveTo(w - 150, center_h - 5);
    ctx.lineTo(w - 150, center_h + 5);
    
    ctx.moveTo(50, center_h - 50);
    ctx.lineTo(60, center_h - 55);
    ctx.moveTo(50, center_h - 50);
    ctx.lineTo(60, center_h - 45);
    ctx.moveTo(50, center_h - 50);
    ctx.lineTo(w - 150, center_h - 50);
    ctx.lineTo(w - 160, center_h - 55);
    ctx.moveTo(w - 150, center_h - 50);
    ctx.lineTo(w - 160, center_h - 45);
    
    ctx.moveTo(w - 145, center_h - 50);
    ctx.lineTo(w - 135, center_h - 55);
    ctx.moveTo(w - 145, center_h - 50);
    ctx.lineTo(w - 135, center_h - 45);
    ctx.moveTo(w - 145, center_h - 50);
    ctx.lineTo(w - 100, center_h - 50);
    ctx.lineTo(w - 110, center_h - 55);
    ctx.moveTo(w - 100, center_h - 50);
    ctx.lineTo(w - 110, center_h - 45);

    ctx.moveTo(w - 100, center_h + 5);
    ctx.lineTo(w - 100, center_h - 5);
    
    ctx.stroke();
    ctx.closePath();
    
    
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    
    ctx.moveTo(w - 150, center_h);
    ctx.lineTo(w - 100, center_h);
    
    ctx.stroke();
    
    ctx.fillText("λ", center_w - 50, center_h + 20);
    ctx.fillText("l", center_w - 50, center_h - 60);
    ctx.fillText("a", center_w + 75, center_h - 60);
    ctx.closePath();
}
