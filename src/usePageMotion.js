import{useEffect}from'react';

export function usePageMotion(){
 useEffect(()=>{
  const preference=matchMedia('(prefers-reduced-motion: reduce)');
  let cleanup=()=>{};
  function setup(){
   cleanup();
   if(preference.matches)return;
   let frame=0,disposed=false;
   const animations=new Set();
   const photos=[...document.querySelectorAll('.hero-pets,.family-pets,.life-dog,.family-cat,.booking-dog')].map(el=>({el,center:0,height:0,visible:false}));
   function measure(){
    for(const p of photos){const r=p.el.getBoundingClientRect();p.height=r.height;p.center=r.top+scrollY+r.height/2;p.visible=r.width>0&&r.height>0;}
    update();
   }
   function update(){
    frame=0;if(disposed)return;
    const limit=innerWidth<=800?6:13;
    for(const p of photos){if(!p.visible)continue;const distance=p.center-scrollY-innerHeight/2;if(Math.abs(distance)>innerHeight+p.height)continue;const shift=Math.max(-limit,Math.min(limit,-distance*.025));p.el.style.setProperty('--pet-shift',`${shift.toFixed(2)}px`);}
   }
   function schedule(){if(!frame)frame=requestAnimationFrame(update)}
   const observer=new IntersectionObserver(entries=>{
    for(const entry of entries){if(!entry.isIntersecting)continue;const el=entry.target;const delay=el.classList.contains('service-card')?[...el.parentElement.children].indexOf(el)*55:0;const animation=el.animate([{opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:700,delay,easing:'cubic-bezier(.2,.7,.2,1)',fill:'backwards'});animations.add(animation);animation.finished.then(()=>animations.delete(animation)).catch(()=>{});observer.unobserve(el);}
   },{threshold:.12});
   document.querySelectorAll('.hero-copy,.trust-strip,.services-heading,.service-card,.life-copy,.family-copy>h2,.family-values,.booking,.footer-main,.unit-address').forEach(el=>observer.observe(el));
   const resize=new ResizeObserver(measure);document.querySelectorAll('.hero,.life-mobile,.family-band,.clinic-footer').forEach(el=>resize.observe(el));
   photos.forEach(p=>p.el.addEventListener('load',measure));
   window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',measure);
   measure();
   cleanup=()=>{disposed=true;cancelAnimationFrame(frame);observer.disconnect();resize.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',measure);photos.forEach(p=>{p.el.removeEventListener('load',measure);p.el.style.removeProperty('--pet-shift')});animations.forEach(a=>a.cancel());};
  }
  setup();preference.addEventListener('change',setup);
  return()=>{cleanup();preference.removeEventListener('change',setup)};
 },[]);
}
