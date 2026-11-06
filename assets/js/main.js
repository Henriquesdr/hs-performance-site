/* =========================================================
   HS Performance — interações do site
   CONFIG: número do WhatsApp (só números, com 55 e DDD)
   ========================================================= */
var CONFIG = { whatsapp: '5531988691313' };

(function(){
  var $ = function(s, c){ return (c || document).querySelector(s); };
  var $$ = function(s, c){ return [].slice.call((c || document).querySelectorAll(s)); };
  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(pointer: fine)').matches;
  var lang = 'pt';

  /* ---------------- textos em inglês ---------------- */
  var EN = {
    nav1:'Services',nav2:'Industries',nav3:'Portfolio',nav4:'Company',nav5:'How it works',cta:'Request a quote',more:'Learn more',copy:'Copy',
    s1:'Business website',s1d:'Your company’s complete showcase',s2:'Landing page',s2d:'One page built to convert',s4:'Website redesign',s4d:'Make your old site modern again',s5:'SEO & speed',s5d:'Show up on Google and load fast',s6:'Maintenance & support',s6d:'Always online and up to date',
    g1:'Health & clinics',g1d:'Bookings and trust',g2:'Restaurants & food',g2d:'Menus and orders',g3:'Offices & services',g3d:'Credibility and leads',g4:'Retail & commerce',g4d:'Product showcase and contact',
    a1:'About us',a3:'Contact',
    'h-lab':'Your business’s future starts online',
    h1:'The website your company <em class="serif">deserves</em>, with real performance.',
    'h-sub':'Today, your company’s first impression happens on a screen. Businesses that are not online lose customers every day to those that are. Be where your customers are searching, and be the company they find, trust and choose.',
    'h-cta2':'See what we deliver',hs1:'industries served',hs2:'load-time target',hs3:'mobile-ready',
    hc1:'Tailor-made design',hc2:'Google-ready',hc3:'WhatsApp built in',
    ph1:'Your company, ready to be found.',ph2:'Our services',ph3:'Where we are',ph4:'Testimonials',ph5:'Chat on WhatsApp',fc1:'Performance',fc2:'New lead',fc2s:'from the website form',
    'i-lab':'Why a professional website','i-h':'Your customer searches Google <em class="serif">before</em> calling.',
    'i-p':'A well-built website is what separates the company people remember from the one they ignore. It works for you around the clock: it presents your services, builds trust and sends customers straight to your WhatsApp.',
    c1:'a day, seven days a week, your site presenting your company',c2:'adapted to phone, tablet and desktop',
    man:'Your website is the first employee your customer meets. It needs to welcome them, explain quickly and lead to a conversation, every day, at any hour.',
    'sv-lab':'Services','sv-h':'From your first website to a complete <em class="serif">redesign</em>.','sv-p':'Every project is designed for your business, with no ready-made templates. Choose a service and request a free quote.',
    p1:'Your company’s complete showcase, with pages that present who you are, what you do and how to reach you.',p1a:'Home, about, services and contact',p1b:'WhatsApp, map and social media built in',p1c:'Copy edited for the web',
    p2:'A single, focused page built to turn visitors into leads. Ideal for campaigns and ads.',p2a:'Conversion-focused structure',p2b:'Ready for Google Ads and Meta Ads',p2c:'Form and WhatsApp front and center',
    p3:'Is your website old, slow or broken on mobile? We rebuild it with a modern look and lightweight technology.',p3a:'New look aligned with your brand',p3b:'Your current content reused',p3c:'Switch without losing your address',
    p4:'Technical and content improvements so your site loads fast and ranks better in search.',p4a:'Image and code optimization',p4b:'Google Business Profile setup',p4c:'Search Console and Analytics',
    p5:'Updates, security and backups to keep your site online, hassle-free.',p5a:'Text and photo updates',p5b:'Domain, hosting and SSL',p5c:'Direct support on WhatsApp',
    'm-lab':'For every kind of business','m-h':'Tailor-made websites for <em class="serif">more than <span class="count" data-to="50">50</span> industries</em>.','m-cta':'Tell us about your business',
    'st-lab':'Tailor-made design','st-h':'Every industry has <em class="serif">its own look</em>.','st-p':'A clinic needs to convey care. A restaurant, appetite. A law office, credibility. That is why no HS Performance website starts from a template.',ex:'Example',
    'st-c':'templates. Every layout is designed from scratch for your brand.','sp-c':'is the load-time target for every page we deliver.','sp-c2':'is the minimum Google PageSpeed score we aim for.',
    'ab-lab':'About HS Performance',we:'we are <em class="serif">HS Performance.</em>',
    'we-p':'A web design studio for companies that want to be taken seriously online. We combine a professional look with lightweight technology, close support and plain language. You talk directly to the person building your site, from briefing to launch.',
    'v-1':'Original design','v-1d':'No ready-made templates','v-2':'Lightweight tech','v-2d':'Fast on any device','v-3':'Direct contact','v-3d':'No middlemen','we-cta':'Shall we talk?',
    'j-lab':'How it works','j-h':'From first contact to a <em class="serif">live website</em>.','j-p':'You follow and approve every step before we move on to the next.','j-cta':'Start my project',
    j1:'Briefing',j1d:'We talk about your company, your customers and the goal of the site.',j2:'Proposal',j2d:'You receive the scope, timeline and a detailed quote.',j3:'Layout',j3d:'We design the look of the site and refine it with you until you approve.',j4:'Development',j4d:'We build the site fast, secure and mobile-ready.',j5:'Launch',j5d:'We put it live on your domain and follow the first days.',
    'p-lab':'Portfolio','p-h':'Our first cases are <em class="serif">on the way</em>.','p-tag':'Now booking','p-ft':'Your company can be one of our first projects.','p-fp':'Our first clients get dedicated attention at every step.','p-fc':'I want mine',soon:'Coming soon',
    'f-lab':'What we deliver','f-h':'Everything a <em class="serif">professional</em> website needs.',f1:'Tailor-made design',f2:'Mobile first',f3:'Speed',f4:'Google & SEO',f5:'WhatsApp & contact',
    v1:'Your brand’s typography and colors',v2:'Typical website',v3:'Load time illustration',v4:'dental clinic near me',v5:'Your Company | Care in your area',v6:'Book your appointment on WhatsApp. Open Monday to Saturday.',v7:'Hi! I saw your website and would like a quote.',v8:'Hi! Great to have you here. What do you need?',v9:'Competitor',v10:'Your Company',
    tr1:'SSL certificate',tr1d:'Security padlock',tr2:'.com.br domain',tr2d:'Registration and setup',tr3:'Google Business Profile',tr3d:'Your company on the map',tr4:'Responsive',tr4d:'Perfect on mobile',tr5:'Direct support',tr5d:'On WhatsApp',
    'r-lab':'Referral','r-h':'Know a company that still has no website?','r-p':'Recommend HS Performance to anyone who needs to show up online. We take care of the rest.','r-cta':'Refer a company',
    'b-lab':'Your identity','b-h':'A website in your brand’s colors.','b-p':'Pick a color and watch the site adapt instantly.',bd1:'Welcome to your company',
    'ct-lab':'Contact','ct-h':'Ready to take your company’s website <em class="serif">off the drawing board</em>?','ct-p':'Tell us a little about your project. We reply with a tailored proposal, no strings attached.',
    'fm-p':'Fill it in and send it straight to our WhatsApp.',fm1:'Your name',fm2:'Company',fm3:'Service you need',fm4:'Already have a website? (optional)',fm5:'Tell us about the project','fm-err':'Please enter your name so we can send the request.','fm-send':'Send via WhatsApp','fm-note':'Opens WhatsApp with your message ready to send.',
    'ft-big':'Shall we build the future of your business?','ft-p':'Professional, fast, Google-ready websites.','ft-c':'© 2026 HS Performance. All rights reserved.'
  };
  var FEAT = {
    pt:[
      ['Um visual que é só seu.','Desenhamos cada página a partir da sua marca: cores, tipografia e tom de voz. O resultado é um site que parece da sua empresa, e não de um modelo.',['Layout exclusivo','Identidade visual aplicada','Textos revisados para web']],
      ['Pensado primeiro para o celular.','A maioria dos seus clientes vai abrir o site pelo telefone. Por isso cada tela é projetada para o celular e depois ampliada para tablet e computador.',['Menus e botões fáceis de tocar','Leitura confortável em telas pequenas','Testado em diferentes aparelhos']],
      ['Carrega antes do cliente desistir.','Imagens otimizadas, código enxuto e hospedagem rápida. Um site veloz segura o visitante e ainda é valorizado pelo Google.',['Meta de menos de 2 segundos','Imagens comprimidas sem perder qualidade','Nota alta no PageSpeed']],
      ['Encontrado por quem procura você.','Estruturamos o site para os buscadores e configuramos sua empresa no Google, para você aparecer quando o cliente pesquisar o seu serviço na sua região.',['SEO técnico e de conteúdo','Google Meu Negócio','Google Analytics e Search Console']],
      ['Do site direto para a conversa.','Botões de WhatsApp, formulários e mapa levam o visitante até você em um toque. Cada contato chega pronto para virar orçamento.',['Botão de WhatsApp em todas as páginas','Formulário de contato','Mapa e horário de atendimento']]
    ],
    en:[
      ['A look that is yours alone.','We design every page from your brand: colors, typography and tone of voice. The result looks like your company, not like a template.',['Exclusive layout','Your visual identity applied','Copy edited for the web']],
      ['Designed for mobile first.','Most of your customers will open your site on their phone. Every screen is designed for mobile first, then expanded to tablet and desktop.',['Easy-to-tap menus and buttons','Comfortable reading on small screens','Tested on different devices']],
      ['Loads before customers give up.','Optimized images, lean code and fast hosting. A fast site keeps visitors and is rewarded by Google.',['Under-2-second target','Compressed images, same quality','High PageSpeed score']],
      ['Found by people looking for you.','We structure the site for search engines and set up your company on Google, so you show up when customers search for your service nearby.',['Technical and content SEO','Google Business Profile','Google Analytics and Search Console']],
      ['From your site straight to a conversation.','WhatsApp buttons, forms and maps bring visitors to you in one tap. Every contact arrives ready to become a quote.',['WhatsApp button on every page','Contact form','Map and opening hours']]
    ]
  };
  var SEG = {
    pt:['Clínicas','Restaurantes','Advocacia','Contabilidade','Academias','Salões de beleza','Imobiliárias','Arquitetura','Odontologia','Pet shops','Construtoras','Lojas de roupa','Escolas','Oficinas','Psicologia','Hotéis e pousadas','Estética','Eventos','Consultorias','Autopeças','Fisioterapia','Nutrição','Veterinárias','Barbearias','Cafeterias','Padarias','Engenharia','Marcenarias','Energia solar','Escolas de idiomas','Fotografia','Agências de viagem','Seguradoras','Transportadoras','Igrejas','ONGs'],
    en:['Clinics','Restaurants','Law firms','Accounting','Gyms','Beauty salons','Real estate','Architecture','Dentistry','Pet shops','Construction','Fashion stores','Schools','Auto repair','Psychology','Hotels','Aesthetics','Events','Consulting','Auto parts','Physiotherapy','Nutrition','Veterinary clinics','Barbershops','Coffee shops','Bakeries','Engineering','Woodworking','Solar energy','Language schools','Photography','Travel agencies','Insurance','Logistics','Churches','Nonprofits']
  };
  var BAND = {
    pt:['Site institucional','Landing page','Redesign de site','SEO e velocidade','Manutenção e suporte','Design sob medida'],
    en:['Business website','Landing page','Website redesign','SEO & speed','Maintenance & support','Tailor-made design']
  };
  var SEAL = { pt:'HS PERFORMANCE · SITES QUE GERAM CLIENTES · ', en:'HS PERFORMANCE · WEBSITES THAT WIN CLIENTS · ' };
  var MAN_EM = { pt:['receber','explicar','conversa'], en:['welcome','explain','conversation'] };
  var MSG = {
    pt:{hi:'Olá, HS Performance! Gostaria de solicitar um orçamento.',n:'Nome',e:'Empresa',s:'Serviço',w:'Site atual',m:'Sobre o projeto',done:'Copiado'},
    en:{hi:'Hello, HS Performance! I would like to request a quote.',n:'Name',e:'Company',s:'Service',w:'Current website',m:'About the project',done:'Copied'}
  };
  var CURSOR = { pt:{Abrir:'Abrir',Arraste:'Arraste'}, en:{Abrir:'Open',Arraste:'Drag'} };
  var MONO = '<svg viewBox="-2 0 376 312" aria-hidden="true"><g><path d="M19 8V308"/><path d="M34 256A158 158 0 0 1 344 299V308"/><path d="M185 168V308"/><path d="M194 140V100A78 78 0 1 1 349 113"/></g></svg>';

  var tEls = $$('[data-t]'), PT = {};
  tEls.forEach(function(el){ var k = el.dataset.t; if (!(k in PT)) PT[k] = el.innerHTML; });

  /* ---------------- abertura ---------------- */
  var t0 = Date.now(), opened = false;
  function finish(){
    if (opened) return; opened = true;
    root.classList.add('loaded');
    setTimeout(function(){ var l = $('#loader'); if (l) l.remove(); }, 1400);
  }
  if (reduce) finish();
  else {
    window.addEventListener('load', function(){ setTimeout(finish, Math.max(0, 1900 - (Date.now() - t0))); });
    setTimeout(finish, 3000); // nunca segura o site por mais que isso
  }

  /* ---------------- faixas animadas ---------------- */
  function buildBand(){
    var h = BAND[lang].map(function(s){ return '<span>' + s + '</span>' + MONO; }).join('');
    $('#band').innerHTML = h + h + h + h;
  }
  function buildMarquee(){
    var list = SEG[lang], half = Math.ceil(list.length / 2);
    function fill(el, arr){ var h = arr.map(function(s){ return '<span class="pill"><i></i>' + s + '</span>'; }).join(''); el.innerHTML = h + h; }
    fill($('#t1'), list.slice(0, half)); fill($('#t2'), list.slice(half));
  }

  /* ---------------- manifesto: palavras acendem ao rolar ---------------- */
  var manWords = [];
  function splitManifest(){
    var man = $('#manifest'); if (!man || reduce) return;
    var em = MAN_EM[lang];
    man.innerHTML = man.textContent.trim().split(/\s+/).map(function(w){
      var isEm = em.some(function(k){ return w.toLowerCase().indexOf(k) === 0; });
      return '<span class="w' + (isEm ? ' em' : '') + '">' + w + '</span>';
    }).join(' ');
    manWords = $$('.w', man); paintManifest();
  }
  function paintManifest(){
    var man = $('#manifest'); if (!man || !manWords.length) return;
    var r = man.getBoundingClientRect();
    var p = Math.min(1, Math.max(0, (innerHeight * .82 - r.top) / (r.height + innerHeight * .35)));
    var n = Math.round(p * manWords.length);
    manWords.forEach(function(w, i){ w.classList.toggle('on', i < n); });
  }

  /* ---------------- idioma ---------------- */
  function setLang(l){
    lang = l; root.lang = l === 'en' ? 'en' : 'pt-BR';
    tEls.forEach(function(el){ var k = el.dataset.t; el.innerHTML = (l === 'en' && EN[k] != null) ? EN[k] : PT[k]; });
    $$('[data-lang]').forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.lang === l); });
    $('#sealTxt').textContent = SEAL[l];
    buildBand(); buildMarquee(); splitManifest(); showTab(cur, true); update();
    try { localStorage.setItem('hs-lang', l); } catch (e) {}
  }
  $$('[data-lang]').forEach(function(b){ b.addEventListener('click', function(){ setLang(b.dataset.lang); }); });

  /* ---------------- menu ---------------- */
  var menu = $('#menu'), burger = $('#burger');
  var lis = $$(':scope > li', menu);
  function closeSubs(){ lis.forEach(function(x){ x.classList.remove('open'); var bb = $('button.mbtn', x); if (bb) bb.setAttribute('aria-expanded', 'false'); }); }
  function setMenu(open){ menu.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); if (!open) closeSubs(); }
  burger.addEventListener('click', function(){ setMenu(!menu.classList.contains('open')); });
  lis.forEach(function(li){
    var b = $('button.mbtn', li); if (!b) return;
    b.addEventListener('click', function(e){ e.stopPropagation(); var o = !li.classList.contains('open'); closeSubs(); if (o){ li.classList.add('open'); b.setAttribute('aria-expanded', 'true'); } });
    if (matchMedia('(hover:hover) and (min-width:1181px)').matches){
      li.addEventListener('mouseenter', function(){ li.classList.add('open'); b.setAttribute('aria-expanded', 'true'); });
      li.addEventListener('mouseleave', function(){ li.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
    }
  });
  document.addEventListener('click', function(e){
    if (!menu.contains(e.target)) closeSubs();
    if (!menu.contains(e.target) && !burger.contains(e.target) && menu.classList.contains('open')) setMenu(false);
  });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') setMenu(false); });
  $$('a', menu).forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });

  /* ---------------- topo, barra de leitura e voltar ao topo ---------------- */
  var top = $('#top'), prog = $('#prog'), totop = $('.totop'), totopFill = $('#totopFill'), lastY = 0, ticking = false;
  var heroArt = $('#heroArt'), aboutBg = $('.about-logo');
  function onScroll(){
    var y = scrollY, max = Math.max(1, document.documentElement.scrollHeight - innerHeight), p = Math.min(1, y / max);
    top.classList.toggle('scrolled', y > 30);
    top.classList.toggle('hide', y > 600 && y > lastY + 2 && !menu.classList.contains('open'));
    if (y < lastY - 2) top.classList.remove('hide');
    lastY = y;
    prog.style.transform = 'scaleX(' + p + ')';
    totop.classList.toggle('show', y > 700);
    totopFill.style.strokeDashoffset = 125.7 * (1 - p);
    paintManifest(); paintSteps();
    if (!reduce){
      if (y < innerHeight * 1.3) heroArt.style.setProperty('--py', (y * .12) + 'px');
      if (aboutBg && innerWidth > 900){ var r = aboutBg.parentNode.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight) aboutBg.style.setProperty('--py', ((r.top + r.height / 2 - innerHeight / 2) * -.08) + 'px'); }
    }
    ticking = false;
  }
  addEventListener('scroll', function(){ if (!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll);

  /* ---------------- painéis de serviço ---------------- */
  var panels = $$('.panel');
  function openPanel(p){ panels.forEach(function(x){ x.classList.toggle('is-open', x === p); x.setAttribute('aria-expanded', x === p); }); }
  panels.forEach(function(p){
    p.addEventListener('click', function(e){ if (!e.target.closest('a')) openPanel(p); });
    p.addEventListener('keydown', function(e){ if ((e.key === 'Enter' || e.key === ' ') && e.target === p){ e.preventDefault(); openPanel(p); } });
    if (fine) p.addEventListener('mouseenter', function(){ if (innerWidth > 960) openPanel(p); });
  });
  $$('[data-panel]').forEach(function(a){ a.addEventListener('click', function(){ openPanel(panels[+a.dataset.panel]); }); });
  $$('[data-pick]').forEach(function(a){ a.addEventListener('click', function(){ var r = document.getElementById(a.dataset.pick); if (r){ r.checked = true; update(); } }); });

  /* ---------------- etapas: linha de progresso ---------------- */
  var steps = $$('.step'), stepsFill = $('#stepsFill'), stepsBox = $('#steps');
  function paintSteps(){
    var r = stepsBox.getBoundingClientRect(), mid = innerHeight * .6;
    var p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
    stepsFill.style.transform = 'scaleY(' + p + ')';
    steps.forEach(function(s){ var sr = s.getBoundingClientRect(); s.classList.toggle('on', reduce || sr.top + 26 < mid); });
  }

  /* ---------------- abas com troca automática ---------------- */
  var tabs = $$('.tab'), cur = 0, timer = null, feat = $('.features');
  function showTab(i){
    cur = i; var d = FEAT[lang][i];
    tabs.forEach(function(t, j){ t.setAttribute('aria-selected', j === i); var pr = $('.prog', t); pr.style.animation = 'none'; void pr.offsetWidth; pr.style.animation = ''; document.getElementById('p' + j).hidden = j !== i; });
    $('#pnum').textContent = '0' + (i + 1) + ' / 05';
    $('#ph').textContent = d[0]; $('#pp').textContent = d[1];
    $('#pl').innerHTML = d[2].map(function(x){ return '<li>' + x + '</li>'; }).join('');
    restart();
  }
  function restart(){ clearTimeout(timer); if (feat.classList.contains('paused')) return; timer = setTimeout(function(){ showTab((cur + 1) % tabs.length); }, 6000); }
  tabs.forEach(function(t, i){
    t.addEventListener('click', function(){ showTab(i); });
    t.addEventListener('keydown', function(e){ if (e.key === 'ArrowRight' || e.key === 'ArrowLeft'){ var n = (i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length; tabs[n].focus(); showTab(n); } });
  });
  var pw = $('.panel-wrap');
  pw.addEventListener('mouseenter', function(){ feat.classList.add('paused'); clearTimeout(timer); });
  pw.addEventListener('mouseleave', function(){ feat.classList.remove('paused'); restart(); });
  if (reduce) feat.classList.add('paused');

  /* ---------------- portfólio: setas e arrastar ---------------- */
  var strip = $('#strip');
  function step(){ var c = $('.card-p', strip); return c ? c.getBoundingClientRect().width + 18 : 300; }
  $('#prev').addEventListener('click', function(){ strip.scrollBy({ left: -step(), behavior: 'smooth' }); });
  $('#next').addEventListener('click', function(){ strip.scrollBy({ left: step(), behavior: 'smooth' }); });
  if (fine){
    var down = false, sx = 0, sl = 0, moved = false;
    strip.addEventListener('mousedown', function(e){ if (e.target.closest('a,button')) return; down = true; moved = false; sx = e.pageX; sl = strip.scrollLeft; strip.classList.add('dragging'); });
    addEventListener('mouseup', function(){ down = false; strip.classList.remove('dragging'); });
    strip.addEventListener('mousemove', function(e){ if (!down) return; e.preventDefault(); var dx = e.pageX - sx; if (Math.abs(dx) > 4) moved = true; strip.scrollLeft = sl - dx; });
    strip.addEventListener('click', function(e){ if (moved){ e.preventDefault(); e.stopPropagation(); } }, true);
  }

  /* ---------------- cores da marca ---------------- */
  var demo = $('#demo'), sws = $$('#sw button');
  sws.forEach(function(b){ b.addEventListener('click', function(){ demo.style.setProperty('--b', b.dataset.b); demo.style.setProperty('--b2', b.dataset.b2); sws.forEach(function(x){ x.setAttribute('aria-pressed', x === b); }); }); });

  /* ---------------- formulário → WhatsApp ---------------- */
  var form = $('#quote'), send = $('#send'), err = $('#err');
  function val(id){ return document.getElementById(id).value.trim(); }
  function update(){
    var m = MSG[lang], r = $('input[name=svc]:checked', form), svc = r ? $('label[for="' + r.id + '"]', form).textContent : '';
    var t = m.hi + '\n\n';
    if (val('f-nome')) t += m.n + ': ' + val('f-nome') + '\n';
    if (val('f-empresa')) t += m.e + ': ' + val('f-empresa') + '\n';
    t += m.s + ': ' + svc + '\n';
    if (val('f-site')) t += m.w + ': ' + val('f-site') + '\n';
    if (val('f-msg')) t += '\n' + m.m + ': ' + val('f-msg');
    send.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(t);
  }
  form.addEventListener('input', update); form.addEventListener('change', update);
  form.addEventListener('submit', function(e){ e.preventDefault(); });
  send.addEventListener('click', function(e){ if (!val('f-nome')){ e.preventDefault(); err.hidden = false; document.getElementById('f-nome').focus(); } else err.hidden = true; });

  $$('.copy').forEach(function(b){ b.addEventListener('click', function(){
    var done = function(){ b.textContent = MSG[lang].done; setTimeout(function(){ b.textContent = lang === 'en' ? EN.copy : PT.copy; }, 1600); };
    try { navigator.clipboard.writeText(b.dataset.copy).then(done, function(){ sel(b); }); } catch (_) { sel(b); }
  }); });
  function sel(b){ var v = $('.v', b.previousElementSibling); var r = document.createRange(); r.selectNodeContents(v); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }

  /* ---------------- contadores ---------------- */
  function animateCount(el){
    var to = +el.dataset.to; if (!to || el.dataset.done) return; el.dataset.done = 1; var s = null;
    function f(ts){ if (!s) s = ts; var p = Math.min((ts - s) / 1500, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); }
    requestAnimationFrame(f);
  }

  /* ---------------- entrada ao rolar ---------------- */
  if ('IntersectionObserver' in window && !reduce){
    var cio = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ animateCount(e.target); cio.unobserve(e.target); } }); }, { threshold: .6 });
    $$('.count').forEach(function(c){ cio.observe(c); });
    var rio = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.remove('pre'); rio.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    var groups = new Map();
    $$('[data-reveal]').forEach(function(el){
      if (el.getBoundingClientRect().top > innerHeight){
        var g = el.parentNode, n = groups.get(g) || 0; groups.set(g, n + 1);
        el.classList.add('pre'); el.style.transitionDelay = (n % 5) * 80 + 'ms'; rio.observe(el);
        el.addEventListener('transitionend', function clear(){ el.style.transitionDelay = ''; el.removeEventListener('transitionend', clear); });
      }
    });
  }

  /* ---------------- inicialização ---------------- */
  var saved = 'pt'; try { saved = localStorage.getItem('hs-lang') || 'pt'; } catch (e) {}
  if (saved === 'en') setLang('en'); else { buildBand(); buildMarquee(); splitManifest(); showTab(0); update(); }
  onScroll();

  if (reduce) return;

  /* ---------------- holofote nos fundos com logo ---------------- */
  var hero = $('#hero'), spot = $('#heroSpot');
  hero.addEventListener('pointermove', function(e){
    var r = hero.getBoundingClientRect();
    spot.style.setProperty('--x', (e.clientX - r.left) + 'px'); spot.style.setProperty('--y', (e.clientY - r.top) + 'px');
    if (fine){
      var x = e.clientX / innerWidth - .5, y = (e.clientY - r.top) / r.height - .5;
      heroArt.style.setProperty('--ry', (x * 14) + 'deg'); heroArt.style.setProperty('--rx', (y * -10) + 'deg');
      var mono = $('.hero-mono'); mono.style.setProperty('--mx', (x * -18) + 'px'); mono.style.setProperty('--my', (y * -14) + 'px');
    }
  });
  hero.addEventListener('pointerleave', function(){ heroArt.style.setProperty('--ry', '0deg'); heroArt.style.setProperty('--rx', '0deg'); });
  $$('.pattern').forEach(function(sec){
    var layer = $('.spot-layer', sec); if (!layer) return;
    sec.addEventListener('pointermove', function(e){ var r = sec.getBoundingClientRect(); layer.style.setProperty('--x', (e.clientX - r.left) + 'px'); layer.style.setProperty('--y', (e.clientY - r.top) + 'px'); sec.classList.add('lit'); });
    sec.addEventListener('pointerleave', function(){ sec.classList.remove('lit'); });
  });

  if (!fine) return;

  /* ---------------- inclinação 3D com brilho ---------------- */
  $$('.tilt').forEach(function(t){
    t.addEventListener('mousemove', function(e){
      var r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      t.style.setProperty('--ry', ((x - .5) * 12) + 'deg'); t.style.setProperty('--rx', ((.5 - y) * 12) + 'deg');
      t.style.setProperty('--sx', x * 100 + '%'); t.style.setProperty('--sy', y * 100 + '%');
    });
    t.addEventListener('mouseleave', function(){ t.style.setProperty('--rx', '0deg'); t.style.setProperty('--ry', '0deg'); });
  });

  /* ---------------- botões magnéticos ---------------- */
  $$('.magnet').forEach(function(b){
    b.addEventListener('mousemove', function(e){ var r = b.getBoundingClientRect();
      b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .22) + 'px,' + ((e.clientY - r.top - r.height / 2) * .3) + 'px)'; });
    b.addEventListener('mouseleave', function(){ b.style.transition = 'transform .6s cubic-bezier(.22,.8,.2,1), color .45s'; b.style.transform = ''; setTimeout(function(){ b.style.transition = ''; }, 600); });
  });

  /* ---------------- cursor personalizado ---------------- */
  root.classList.add('has-cursor');
  var cursor = $('.cursor'), dot = $('.cursor-dot'), ring = $('.cursor-ring'), ringTxt = $('em', ring);
  var mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener('mousemove', function(e){ mx = e.clientX; my = e.clientY; dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)'; });
  (function loop(){ rx += (mx - rx) * .16; ry += (my - ry) * .16; ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)'; requestAnimationFrame(loop); })();
  document.addEventListener('mouseover', function(e){
    var lab = e.target.closest('[data-cursor]');
    var link = e.target.closest('a,button,label,input,textarea');
    var showLab = lab && !lab.classList.contains('is-open') && !link;
    cursor.classList.toggle('is-label', !!showLab);
    ringTxt.textContent = showLab ? (CURSOR[lang][lab.dataset.cursor] || lab.dataset.cursor) : '';
    cursor.classList.toggle('is-link', !!link);
  });
  document.addEventListener('mouseleave', function(){ cursor.style.opacity = 0; });
  document.addEventListener('mouseenter', function(){ cursor.style.opacity = 1; });
})();
