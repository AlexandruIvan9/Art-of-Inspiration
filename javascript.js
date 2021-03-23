// Contact us page
var img = new Image();
img.src = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/chicago-skyline-march-2019-kevin-eatinger.jpg';
var CanvasXSize = 400;
var CanvasYSize = 200;
var speed = 30;
var scale = 1.05;
var y = -4.5;
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function () {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {

        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {

        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {

        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }

    ctx = document.getElementById('canvas').getContext('2d');

    return setInterval(draw, speed);
}

function draw() {
    ctx.clearRect(0, 0, clearX, clearY);

    if (imgW <= CanvasXSize) {
        if (x > CanvasXSize) {
            x = -imgW + x;
        }
        if (x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
        }
        if (x - imgW > 0) {
            ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
    }

    else {
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        if (x > (CanvasXSize - imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
    ctx.drawImage(img, x, y, imgW, imgH);
    x += dx;
}

// Entry page
var cn;
var c;
var u = 10;
const m = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

window.onmousemove = function (e) {
    m.x = e.clientX;
    m.y = e.clientY;
}

function gc() {
    var s = "0123456789ABCDEF";
    var c = "#";
    for (var i = 0; i < 6; i++) {
        c += s[Math.ceil(Math.random() * 15)]
    }
    return c
}

var a = [];

window.onload = function myfunction() {
    cn = document.getElementById('cw');
    c = cn.getContext('2d');
    for (var i = 0; i < 10; i++) {
        var r = 30;
        var x = Math.random() * (innerWidth - 2 * r) + r;
        var y = Math.random() * (innerHeight - 2 * r) + r;
        var t = new ob(innerWidth / 2, innerHeight / 2, 5, "red", Math.random() * 200 + 20, 2);
        a.push(t);
    }
    c.lineWidth = "2";
    c.globalAlpha = 0.5;
    resize();
    anim()
}

window.onresize = function () {
    resize();
}

function resize() {
    cn.height = innerHeight;
    cn.width = innerWidth;
    for (var i = 0; i < 101; i++) {
        var r = 30;
        var x = Math.random() * (innerWidth - 2 * r) + r;
        var y = Math.random() * (innerHeight - 2 * r) + r;
        a[i] = new ob(innerWidth / 2, innerHeight / 2, 4, gc(), Math.random() * 200 + 20, 0.02);
    }
}

function ob(x, y, r, cc, o, s) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.cc = cc;
    this.theta = Math.random() * Math.PI * 2;
    this.s = s;
    this.o = o;
    this.t = Math.random() * 150;
    this.o = o;
    this.dr = function () {
        const ls = {
            x: this.x,
            y: this.y
        };
        this.theta += this.s;
        this.x = m.x + Math.cos(this.theta) * this.t;
        this.y = m.y + Math.sin(this.theta) * this.t;
        c.beginPath();
        c.lineWidth = this.r;
        c.strokeStyle = this.cc;
        c.moveTo(ls.x, ls.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
    }
}

function anim() {
    requestAnimationFrame(anim);
    c.fillStyle = "rgba(0,0,0,0.05)";
    c.fillRect(0, 0, cn.width, cn.height);
    a.forEach(function (e, i) {
        e.dr();
    });
}
