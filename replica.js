(()=>{
const nav=document.querySelector('[data-menu-wrap]'),burger=document.querySelector('[data-burger-toggle]');
function closePanels(){document.querySelectorAll('[data-nav-content]').forEach(p=>p.classList.remove('replica-open'));document.querySelectorAll('[data-dropdown-toggle]').forEach(b=>b.setAttribute('aria-expanded','false'));}
burger?.addEventListener('click',()=>{const open=nav.dataset.menuOpen!=='true';nav.dataset.menuOpen=String(open);burger.setAttribute('aria-expanded',String(open));closePanels();document.body.style.overflow=open?'hidden':'';});
document.querySelectorAll('[data-dropdown-toggle]').forEach(b=>b.addEventListener('click',()=>{const was=b.getAttribute('aria-expanded')==='true';closePanels();if(!was){b.setAttribute('aria-expanded','true');document.querySelector(`[data-nav-content="${b.dataset.dropdownToggle}"]`)?.classList.add('replica-open');}}));
document.querySelector('[data-mobile-back]')?.addEventListener('click',closePanels);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closePanels();nav.dataset.menuOpen='false';burger?.setAttribute('aria-expanded','false');document.body.style.overflow='';}});
function activate(id){document.querySelectorAll('[data-tab-pane]').forEach(p=>p.hidden=p.dataset.tabPane!==id);document.querySelectorAll('[data-tab-link]').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.tabLink===id)));}
document.querySelectorAll('[data-tab-link]').forEach(b=>b.addEventListener('click',()=>activate(b.dataset.tabLink)));activate('sales-tracker');
})();
document.querySelectorAll('.grid-slider_button').forEach(b=>{b.setAttribute('role','button');b.tabIndex=0;b.setAttribute('aria-label',b.classList.contains('is-prev')?'Previous slide':'Next slide');const move=()=>document.querySelector('.grid-slider_list')?.scrollBy({left:(b.classList.contains('is-prev')?-1:1)*360,behavior:'smooth'});b.addEventListener('click',move);b.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')move();});});
