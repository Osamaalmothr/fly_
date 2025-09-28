// init AOS and loader hide
document.addEventListener('DOMContentLoaded', function(){
  if(window.AOS) AOS.init({duration:900,once:true,mirror:false});
  // hide loader after 1s + fade
  setTimeout(function(){
    const loader = document.getElementById('loader');
    if(loader){ loader.classList.add('hidden'); setTimeout(()=>loader.remove(),600); }
  },900);
});

 