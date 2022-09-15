window.onload = function () {
    draw_1();
    // draw_2();
}

function draw_1() {
    const canvas = document.getElementById("canvas-1");
    const ctx = canvas.getContext("2d");

    ctx.font = "18px ubuntu";

    let w = canvas.width;
    let h = canvas.height;

    let center_w = w / 2;
    let center_h = h / 2;
    let radius_ellipse_x = 50;
    let radius_ellipse_y = 100;

    ctx.clearRect(0, 0, w, h);
    
    let center_ellipse_x = center_w - w / 4; 

    ctx.beginPath();
    
    // draw ellipse
    ctx.ellipse(center_ellipse_x, center_h, radius_ellipse_x, radius_ellipse_y, 0, 0, Math.PI * 2);
    ctx.stroke();

    // draw line
    ctx.moveTo(w - 50, center_h);
    ctx.lineTo(center_ellipse_x, center_h);
    ctx.stroke();
    
    // set radius R and charge q letters
    ctx.fillText("R", center_ellipse_x + 10, center_h - radius_ellipse_y / 2);
    ctx.fillText("q", center_ellipse_x - radius_ellipse_x - 20, center_h);
    
    // draw tick marks on line
    ctx.moveTo(center_w + 20, center_h + 5);
    ctx.lineTo(center_w + 20, center_h - 5);
    ctx.moveTo(center_w + 50, center_h + 5);
    ctx.lineTo(center_w + 50, center_h - 5);
    ctx.stroke();
    
    // draw arrow line above main line
    ctx.moveTo(center_w + 20, center_h - 25);
    ctx.lineTo(center_w + 50, center_h - 25);
    
    ctx.lineTo(center_w + 45, center_h - 27);
    ctx.moveTo(center_w + 50, center_h - 25);
    ctx.lineTo(center_w + 45, center_h - 23);
    
    ctx.moveTo(center_w + 20, center_h - 25);
    ctx.lineTo(center_w + 25, center_h - 27);
    ctx.moveTo(center_w + 20, center_h - 25);
    ctx.lineTo(center_w + 25, center_h - 23);
    
    ctx.stroke();
    
    // set dl letter above arrow and λ letter under main line
    ctx.fillText("dl", center_w + 27, center_h - 30);
    ctx.fillText("λ", center_w + 32, center_h + 20);
    
    // draw ellipse radius
    ctx.setLineDash([5, 10]);
    ctx.moveTo(center_ellipse_x, center_h);
    ctx.lineTo(center_ellipse_x, center_h - radius_ellipse_y);
    ctx.stroke();
    
    ctx.closePath();
}

// function draw_2() {
//
// }