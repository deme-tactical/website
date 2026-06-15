
document.querySelectorAll('.tile').forEach(t=>t.onclick=()=>{
document.getElementById('lightbox').style.display='flex';
});
function closeLb(){document.getElementById('lightbox').style.display='none';}
