
var pR; 
var qR; 
var rR; 
var uR; 
var vR;

var pL; 
var qL; 
var rL; 
var uL; 
var vL;

var pU; 
var qU; 
var rU; 
var uU; 
var vU;

var vec=[];
var new_vec=[];

let l=500;    
let N=6;
let n=0;
let t=1;
let t0=1;
let col=180;
function right_T(p, q, v, l)
{
  pR=p-l/4;
  qR=q+abs((v-q))/2;
  rR=p+l/4;
  uR=p;
  vR=v;
}

function left_T(q, r, v, l)
{
  pL=r-l/4;
  qL=q+abs((v-q))/2;
  rL=r+l/4;
  uL=r;
  vL=v;
}

function upper_T(p, q, r, v, l)
{
  pU=p+l/4;
  qU=q-abs((v-q))/2;
  rU=r-l/4;
  uU=p+l/2;
  vU=q;
}

function reset()
{
  clear();
  background(240);
  n=0;
  t0=1;
  l=500;
  col=180;
}

function create_T(l, i, s, col) {
  right_T(vec[s], vec[s+1], vec[s+3], l/2);
  noStroke();
  fill(col);
  triangle(pR, qR, rR, qR, uR, vR);
  new_vec[i*12+1]=pR;
  new_vec[i*12+2]=qR;
  new_vec[i*12+3]=rR;
  new_vec[i*12+4]=vR;

  upper_T(vec[s], vec[s+1], vec[s+2], vec[s+3], l/2);
  noStroke();
  fill(col);
  triangle(pU, qU, rU, qU, uU, vU);
  new_vec[i*12+5]=pU;
  new_vec[i*12+6]=qU;
  new_vec[i*12+7]=rU;
  new_vec[i*12+8]=vU;  

  left_T(vec[s+1], vec[s+2], vec[s+3], l/2);
  noStroke();
  fill(col);
  triangle(pL, qL, rL, qL, uL, vL);
  new_vec[i*12+9]=pL;
  new_vec[i*12+10]=qL;
  new_vec[i*12+11]=rL;
  new_vec[i*12+12]=vL;
}
function setup() {
  createCanvas(500, 400);
  background(240);
}
function draw() {
  var w=width;
  var h=height;
  if (t0==20) {
    noStroke();
    fill(220);
    triangle(w/2, 0, 0, h, w, h);              //main triangle
    vec[1]=w/4; //=p
    vec[2]=h/2; //=q
    vec[3]=3*w/4; //=r
    vec[4]=h; //=v
  }
  if (t0==40) {
    noStroke();
    fill(200);
    triangle(w/4, h/2, 3*w/4, h/2, 2*w/4, h);//second triangle founded in the intirior of the main one
  }

  if (n<=N&&t==60)
  { 
    col-=20;
    var c=pow(3, n);
    var s=1;
    for (let i=0; i<c; i++)
    {
      create_T(l, i, s, col);
      s+=4;
    }
    for (let j=1; j<=12*c; j++)
    {
      vec[j]=new_vec[j];
    }
    l=l/2;
    n++;
    t=0;
  }
  t++;
  t0++;
  if (n>N)
  {
    reset();
  }
}
