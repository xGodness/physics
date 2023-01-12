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
    
    ctx.moveTo(center_w, center_h);
    ctx.ellipse(center_w, center_h, 75, 75, 0, 0, 2 * Math.PI);
    ctx.moveTo(center_w, center_h);
    ctx.ellipse(center_w, center_h, 150, 150, 0, 0, 2 * Math.PI);
    
    ctx.fillText("R1", center_w + 26, center_h - 8);
    ctx.fillText("R2 - R1", center_w + 85, center_h - 8);
    
    ctx.closePath();
    ctx.stroke();
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
    
    ctx.beginPath();
    ctx.moveTo(50, center_h);
    ctx.ellipse(50, center_h, 5, 5, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.lineTo(100, center_h);
    ctx.lineTo(100, center_h - 100);
    ctx.lineTo(center_w - 5, center_h - 100);
    ctx.moveTo(center_w - 5, center_h - 90);
    ctx.lineTo(center_w - 5, center_h - 110);
    
    ctx.moveTo(center_w + 5, center_h - 100);
    ctx.lineTo(center_w + 5, center_h - 100);
    ctx.moveTo(center_w + 5, center_h - 90);
    ctx.lineTo(center_w + 5, center_h - 110);
    ctx.moveTo(center_w + 5, center_h - 100);
    
    ctx.lineTo(300, center_h - 100);
    ctx.lineTo(300, center_h);
    
    ctx.lineTo(center_w + 5, center_h);
    ctx.moveTo(center_w + 5, center_h + 10);
    ctx.lineTo(center_w + 5, center_h - 10);
    
    ctx.moveTo(center_w - 5, center_h);
    ctx.moveTo(center_w - 5, center_h + 10);
    ctx.lineTo(center_w - 5, center_h - 10);
    ctx.moveTo(center_w - 5, center_h);
    ctx.lineTo(100, center_h);

    ctx.fillText("C2", center_w - 7, center_h - 120);
    ctx.fillText("C1", center_w - 7, center_h - 20);
    ctx.fillText("U", center_w - 5, center_h + 30);
    
    
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    
    ctx.moveTo(300, center_h);
    ctx.lineTo(350, center_h);
    ctx.ellipse(350, center_h, 5, 5, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.closePath();
}
