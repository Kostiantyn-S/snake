let mycanvas = document.getElementById('canvas');
let ctx = mycanvas.getContext('2d');
let snakeSize = 10;
let w = 350;
let h = 350;
let score = 0;
let snake;
let food;
let direction;
let gameloop;
let tail;
let btn = document.getElementById('btn');