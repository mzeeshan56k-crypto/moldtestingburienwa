(function(){
  var d=document,root=d.documentElement;
  root.classList.add('js');
  var btn=d.querySelector('.nav__toggle'),panel=d.getElementById('nav-panel');
  function setOpen(o){if(!btn)return;btn.setAttribute('aria-expanded',String(o));panel.classList.toggle('open',o);d.body.style.overflow=o?'hidden':'';btn.innerHTML=o?btn.dataset.close:btn.dataset.open;btn.setAttribute('aria-label',o?'Close menu':'Open menu');}
  if(btn&&panel){
    btn.dataset.open=btn.innerHTML;
    btn.dataset.close='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
    btn.addEventListener('click',function(){setOpen(btn.getAttribute('aria-expanded')!=='true')});
    panel.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)});
    d.addEventListener('keydown',function(e){if(e.key==='Escape'&&btn.getAttribute('aria-expanded')==='true'){setOpen(false);btn.focus()}});
    window.addEventListener('resize',function(){if(window.innerWidth>=1024&&btn.getAttribute('aria-expanded')==='true')setOpen(false)});
  }
  var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches,els=d.querySelectorAll('.reveal');
  if('IntersectionObserver' in window&&!rm){
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
  var filters=d.querySelectorAll('.filter');
  filters.forEach(function(f){f.addEventListener('click',function(){
    var v=f.dataset.filter;filters.forEach(function(o){o.setAttribute('aria-pressed',String(o===f))});
    d.querySelectorAll('.sym').forEach(function(s){s.hidden=!(v==='all'||s.dataset.room===v)});
  })});
  var toc=d.querySelector('.toc');
  if(toc){
    if(window.matchMedia('(min-width:1024px)').matches)toc.open=true;
    var links=toc.querySelectorAll('a'),map={};
    links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a});
    if('IntersectionObserver' in window){
      var so=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){a.classList.remove('active')});var a=map[x.target.id];if(a)a.classList.add('active')}})},{rootMargin:'-20% 0px -70% 0px'});
      Object.keys(map).forEach(function(id){var s=d.getElementById(id);if(s)so.observe(s)});
    }
  }
  var y=d.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
