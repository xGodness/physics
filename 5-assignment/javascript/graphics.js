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

    // draw outer cylinder
    ctx.ellipse(center_w, center_h - 100, 75, 25, 0, 0, Math.PI * 2);
    ctx.lineTo(center_w + 75, center_h + 100);
    ctx.ellipse(center_w, center_h + 100, 75, 25, 0, 0, Math.PI);
    ctx.stroke();
    ctx.setLineDash([2, 4, 0]);
    ctx.ellipse(center_w, center_h + 100, 75, 25, 0, Math.PI, Math.PI * 2);

    ctx.moveTo(center_w - 75, center_h - 100);
    ctx.lineTo(center_w - 130, center_h - 100);
    ctx.moveTo(center_w - 75, center_h + 100);
    ctx.lineTo(center_w - 130, center_h + 100);

    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.ellipse(center_w, center_h + 100, 30, 10, 0, 0, Math.PI * 2);
    // ctx.stroke();
    ctx.moveTo(center_w, center_h + 100);
    ctx.lineTo(center_w, center_h - 175);
    
    ctx.moveTo(center_w + 30, center_h - 175);
    ctx.lineTo(center_w + 30, center_h + 100);
    ctx.moveTo(center_w - 30, center_h - 100);
    ctx.lineTo(center_w - 30, center_h + 100);
    
    ctx.moveTo(center_w - 75, center_h + 100);
    ctx.lineTo(center_w - 75, center_h + 175);
    ctx.moveTo(center_w + 75, center_h + 100);
    ctx.lineTo(center_w + 75, center_h + 175);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(center_w - 75, center_h + 100);
    ctx.lineTo(center_w - 75, center_h - 100);
    
    ctx.moveTo(center_w + 30, center_h - 100);
    ctx.ellipse(center_w, center_h - 100, 30, 10, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.moveTo(center_w, center_h - 180);
    ctx.lineTo(center_w + 30, center_h - 180);
    ctx.lineTo(center_w + 25, center_h - 183);
    ctx.moveTo(center_w + 30, center_h - 180);
    ctx.lineTo(center_w + 25, center_h - 177);
    
    ctx.moveTo(center_w, center_h - 180);
    ctx.lineTo(center_w + 5, center_h - 183)
    ctx.moveTo(center_w, center_h - 180);
    ctx.lineTo(center_w + 5, center_h - 177)
    
    ctx.fillText("r", center_w + 10, center_h - 160);
    ctx.font = "12px ubuntu";
    ctx.fillText("1", center_w + 16, center_h - 155);
    
    ctx.moveTo(center_w - 75, center_h + 180);
    ctx.lineTo(center_w + 75, center_h + 180);
    ctx.lineTo(center_w + 70, center_h + 183);
    ctx.moveTo(center_w + 75, center_h + 180);
    ctx.lineTo(center_w + 70, center_h + 177);
    
    ctx.moveTo(center_w - 75, center_h + 180);
    ctx.lineTo(center_w - 70, center_h + 183);
    ctx.moveTo(center_w - 75, center_h + 180);
    ctx.lineTo(center_w - 70, center_h + 177);
    
    ctx.fillText("2", center_w + 10, center_h + 175);
    ctx.font = "18px ubuntu";
    ctx.fillText("r", center_w + 4, center_h + 170);
    
    ctx.moveTo(center_w - 130, center_h - 100);
    ctx.lineTo(center_w - 130, center_h + 100);
    ctx.lineTo(center_w - 133, center_h + 95)
    ctx.moveTo(center_w - 130, center_h + 100);
    ctx.lineTo(center_w - 127, center_h + 95);
    
    ctx.moveTo(center_w - 130, center_h - 100);
    ctx.lineTo(center_w - 127, center_h - 95)
    ctx.moveTo(center_w - 130, center_h - 100);
    ctx.lineTo(center_w - 133, center_h - 95)
    
    ctx.fillText("l", center_w - 120, center_h);
    
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
    ctx.ellipse(40, center_h + 50, 7, 7, 0, 0, Math.PI * 2);
    ctx.lineTo(127, center_h + 50);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(125, center_h + 50, 5, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.moveTo(125, center_h + 50);

    ctx.lineTo(125, center_h + 5);
    ctx.moveTo(115, center_h + 5);
    ctx.lineTo(135, center_h + 5);

    ctx.moveTo(115, center_h - 5);
    ctx.lineTo(135, center_h - 5);

    ctx.moveTo(125, center_h - 5);
    ctx.lineTo(125, center_h - 50);
    ctx.moveTo(130, center_h - 50);
    ctx.ellipse(125, center_h - 50, 5, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.lineTo(90, center_h - 50);
    ctx.moveTo(90, center_h - 40);
    ctx.lineTo(90, center_h - 60);
    ctx.moveTo(80, center_h - 40);

    ctx.lineTo(80, center_h - 60);
    ctx.moveTo(42, center_h - 50);

    ctx.moveTo(80, center_h - 50);
    
    ctx.ellipse(40, center_h - 50, 7, 7, 0, 0, Math.PI * 2);
    
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(250, center_h + 50, 5, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineTo(337, center_h + 50);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(335, center_h + 50, 5, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.moveTo(335, center_h + 50);

    ctx.lineTo(335, center_h + 5);
    ctx.moveTo(325, center_h + 5);
    ctx.lineTo(345, center_h + 5);

    ctx.moveTo(325, center_h - 5);
    ctx.lineTo(345, center_h - 5);

    ctx.moveTo(335, center_h - 5);
    ctx.lineTo(335, center_h - 50);
    ctx.moveTo(340, center_h - 50);
    ctx.ellipse(335, center_h - 50, 5, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.lineTo(300, center_h - 50);
    ctx.moveTo(300, center_h - 40);
    ctx.lineTo(300, center_h - 60);
    ctx.moveTo(300, center_h - 40);

    ctx.moveTo(290, center_h - 60);
    ctx.lineTo(290, center_h - 40);

    ctx.moveTo(290, center_h - 50);

    ctx.ellipse(250, center_h - 50, 5, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.moveTo(250, center_h - 50);
    ctx.lineTo(250, center_h - 5);
    ctx.moveTo(260, center_h - 5);
    ctx.lineTo(240, center_h - 5);

    ctx.moveTo(240, center_h + 5);
    ctx.lineTo(260, center_h + 5);

    ctx.moveTo(250, center_h + 5);
    ctx.lineTo(250, center_h + 50);

    ctx.stroke();

    ctx.setLineDash([2, 4, 0]);
    ctx.moveTo(247, center_h - 50);
    ctx.lineTo(107, center_h - 50);

    ctx.moveTo(243, center_h + 50);
    ctx.lineTo(47, center_h + 50);
    
    ctx.fillText("C", 78, center_h - 70);
    ctx.fillText("C", 290, center_h - 70);
    ctx.fillText("C", 300, center_h + 5);
    ctx.fillText("C", 215, center_h + 5);
    ctx.fillText("C", 90, center_h + 5);
    
    ctx.stroke();
    ctx.closePath();
}