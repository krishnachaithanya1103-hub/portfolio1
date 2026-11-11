const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.hero-copy,.hero-visual').forEach(el=>{el.classList.add('reveal');observer.observe(el);});

document.querySelectorAll('.results-heading,.result-card,.case-intro,.case-card,.timeline-item,.expertise-card,.principle').forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=(Math.min(i%4,3)*70)+'ms';observer.observe(el);});
