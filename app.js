
const phrases=[
'LA VERDAD NO SE NEGOCIA',
'DISCIPLINA SOBRE EMOCIONES',
'SILENCIO. FOCO. RESULTADOS',
'EL RESPETO SE CONSTRUYE',
'MENOS RUIDO. MAS PODER',
'PIENSA MENOS. ACTUA MAS'
];
const el=document.getElementById('phrase');
let i=0;
function rotate(){
 el.style.opacity=0;
 setTimeout(()=>{
   el.textContent=phrases[i];
   el.animate([{opacity:0,filter:'blur(18px)'},{opacity:1,filter:'blur(0px)'}],{duration:900});
   el.style.opacity=1;
   i=(i+1)%phrases.length;
 },250);
}
rotate();
setInterval(rotate,4500);

const holder=document.getElementById('particles');
const count=window.innerWidth<768?30:70;
for(let i=0;i<count;i++){
 const p=document.createElement('div');
 p.className='particle';
 p.style.left=Math.random()*100+'vw';
 p.style.opacity=Math.random();
 p.style.animationDuration=(8+Math.random()*12)+'s';
 holder.appendChild(p);
}
