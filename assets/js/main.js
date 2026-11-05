(function(){
  var lang='pt';
  var EN={
    nav1:'Services',nav2:'Industries',nav3:'Portfolio',nav4:'Company',cta:'Request a quote',more:'Learn more',copy:'Copy',
    s1:'Business website',s1d:'Your company’s complete showcase',s2:'Landing page',s2d:'One page built to convert',s3:'Online store',s3d:'Sell online with Pix and cards',s4:'Website redesign',s4d:'Make your old site modern again',s5:'SEO & speed',s5d:'Show up on Google and load fast',s6:'Maintenance & support',s6d:'Always online and up to date',
    g1:'Health & clinics',g1d:'Bookings and trust',g2:'Restaurants & food',g2d:'Menus and orders',g3:'Offices & services',g3d:'Credibility and leads',g4:'Retail & commerce',g4d:'Product showcase and contact',
    a1:'About us',a1d:'Who HS Performance is',a2:'What we deliver',a2d:'Features of every site',a3:'Contact',a3d:'WhatsApp, email and Instagram',
    'h-lab':'Your business’s future starts online',h1:'The website your company <span class="hl">deserves</span>, with real <span class="hl-o">performance</span>.','h-sub':'Today, your company’s first impression happens on a screen. Businesses that are not online lose customers every day to those that are. Be where your customers are searching, and be the company they find, trust and choose.','h-cta2':'See what we deliver',
    ph1:'Your company, ready to be found.',ph2:'Our services',ph3:'Where we are',ph4:'Testimonials',ph5:'Chat on WhatsApp',fc1:'Performance',fc2:'New lead',fc2s:'from the website form',
    'i-lab':'Why a professional website','i-h':'Your customer searches Google <span class="hl-o">before</span> calling.','i-p':'A well-built website is what separates the company people remember from the one they ignore. It works for you around the clock: it presents your services, builds trust and sends customers straight to your WhatsApp.',
    c1:'a day, seven days a week, your site presenting your company',c2:'adapted to phone, tablet and desktop',
    'm-lab':'For every kind of business','m-h':'Tailor-made websites for <span class="hl-o">more than <span class="count" data-to="50">50</span> industries</span>.','m-cta':'Tell us about your business',
    'st-lab':'Tailor-made design','st-h':'Every industry has <span class="hl">its own look</span>.','st-p':'A clinic needs to convey care. A restaurant, appetite. A law office, credibility. That is why no HS Performance website starts from a template.',ex:'Example','st-c':'templates. Every layout is designed from scratch for your brand.',
    'sp-lab':'Performance is in our name','sp-h':'Fast on mobile, <span class="hl">well ranked</span> on Google.','sp-p':'More than half of visits come from phones, and people who wait too long leave. We build every site light and optimized from the first line of code.','sp-c':'is the load-time target for every page we deliver.','sp-c2':'is the minimum Google PageSpeed score we aim for.',
    we:'we are <span>HS Performance.</span>','we-p':'A web design studio for companies that want to be taken seriously online. We combine a professional look with lightweight technology, close support and plain language. You talk directly to the person building your site, from briefing to launch.','we-cta':'Shall we talk?',
    'p-lab':'Portfolio','p-h':'Our first cases are <span class="hl">on the way</span>.','p-tag':'Now booking','p-ft':'Your company can be one of our first projects.','p-fp':'Our first clients get dedicated attention at every step.','p-fc':'I want mine',soon:'Coming soon',
    'f-lab':'What we deliver','f-h':'Everything a <span class="hl-o">professional</span> website needs.',f1:'Tailor-made design',f2:'Mobile first',f3:'Speed',f4:'Google & SEO',f5:'WhatsApp & contact',
    v1:'Your brand’s typography and colors',v2:'Typical website',v3:'Load time illustration',v4:'dental clinic in Betim',v5:'Your Company | Care in Betim',v6:'Book your appointment on WhatsApp. Open Monday to Saturday.',v7:'Hi! I saw your website and would like a quote.',v8:'Hi! Great to have you here. What do you need?',
    tr1:'SSL certificate',tr1d:'Security padlock',tr2:'.com.br domain',tr2d:'Registration and setup',tr3:'Google Business Profile',tr3d:'Your company on the map',tr4:'Responsive',tr4d:'Perfect on mobile',tr5:'Direct support',tr5d:'On WhatsApp',
    'r-lab':'Referral','r-h':'Know a company that still has no website?','r-p':'Recommend HS Performance to anyone who needs to show up online. We take care of the rest.','r-cta':'Refer a company',
    'b-lab':'Your identity','b-h':'A website in your brand’s colors.','b-p':'Pick a color and watch the site adapt instantly.',bd1:'Welcome to your company',
    'ct-lab':'Contact','ct-h':'Ready to take your company’s website <span class="hl">off the drawing board</span>?','ct-p':'Tell us a little about your project. We reply with a tailored proposal, no strings attached.',
    'fm-p':'Fill it in and send it straight to our WhatsApp.',fm1:'Your name',fm2:'Company',fm3:'Service you need',fm4:'Already have a website? (optional)',fm5:'Tell us about the project','fm-err':'Please enter your name so we can send the request.','fm-send':'Send via WhatsApp','fm-note':'Opens WhatsApp with your message ready to send.',
    'ft-p':'Professional, fast, Google-ready websites.','ft-c':'© 2026 HS Performance. All rights reserved.'
  };
  var FEAT={
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
  var SEG={pt:['Clínicas','Restaurantes','Advocacia','Contabilidade','Academias','Salões de beleza','Imobiliárias','Arquitetura','Odontologia','Pet shops','Construtoras','Lojas de roupa','Escolas','Oficinas','Psicologia','Hotéis e pousadas','Estética','Eventos','Consultorias','Autopeças','Fisioterapia','Nutrição','Veterinárias','Barbearias','Cafeterias','Padarias','Engenharia','Marcenarias','Energia solar','Escolas de idiomas','Fotografia','Agências de viagem','Seguradoras','Transportadoras','Igrejas','ONGs'],
           en:['Clinics','Restaurants','Law firms','Accounting','Gyms','Beauty salons','Real estate','Architecture','Dentistry','Pet shops','Construction','Fashion stores','Schools','Auto repair','Psychology','Hotels','Aesthetics','Events','Consulting','Auto parts','Physiotherapy','Nutrition','Veterinary clinics','Barbershops','Coffee shops','Bakeries','Engineering','Woodworking','Solar energy','Language schools','Photography','Travel agencies','Insurance','Logistics','Churches','Nonprofits']};
  var MSG={pt:{hi:'Olá, HS Performance! Gostaria de solicitar um orçamento.',n:'Nome',e:'Empresa',s:'Serviço',w:'Site atual',m:'Sobre o projeto',done:'Copiado'},
           en:{hi:'Hello, HS Performance! I would like to request a quote.',n:'Name',e:'Company',s:'Service',w:'Current website',m:'About the project',done:'Copied'}};

  // store PT originals
  var tEls=document.querySelectorAll('[data-t]'),PT={};
  tEls.forEach(function(el){var k=el.dataset.t;if(!(k in PT))PT[k]=el.innerHTML;});

  function buildMarquee(){
    var list=SEG[lang];
    function fill(el,arr){var h=arr.map(function(s){return '<span class="pill"><i></i>'+s+'</span>'}).join('');el.innerHTML=h+h;}
    var h=Math.ceil(list.length/2);fill(document.getElementById('t1'),list.slice(0,h));
    fill(document.getElementById('t2'),list.slice(h));
  }
  function setLang(l){
    lang=l;document.documentElement.lang=l==='en'?'en':'pt-BR';
    tEls.forEach(function(el){var k=el.dataset.t;el.innerHTML=l==='en'&&EN[k]!=null?EN[k]:PT[k];});
    document.querySelectorAll('[data-lang]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===l)});
    buildMarquee();showTab(cur,true);update();
    try{localStorage.setItem('hs-lang',l)}catch(e){}
  }
  document.querySelectorAll('[data-lang]').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.lang)})});

  // menu
  var menu=document.getElementById('menu'),burger=document.getElementById('burger');
  burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
  var lis=menu.querySelectorAll(':scope>li');
  lis.forEach(function(li){
    var b=li.querySelector('button.mbtn');if(!b)return;
    b.addEventListener('click',function(e){e.stopPropagation();var o=!li.classList.contains('open');lis.forEach(function(x){x.classList.remove('open');var bb=x.querySelector('button.mbtn');bb&&bb.setAttribute('aria-expanded','false')});if(o){li.classList.add('open');b.setAttribute('aria-expanded','true')}});
    if(matchMedia('(hover:hover) and (min-width:1181px)').matches){
      li.addEventListener('mouseenter',function(){li.classList.add('open');b.setAttribute('aria-expanded','true')});
      li.addEventListener('mouseleave',function(){li.classList.remove('open');b.setAttribute('aria-expanded','false')});
    }
  });
  document.addEventListener('click',function(e){if(!menu.contains(e.target))lis.forEach(function(x){x.classList.remove('open')});if(!menu.contains(e.target)&&!burger.contains(e.target)&&menu.classList.contains('open')){menu.classList.remove('open');burger.setAttribute('aria-expanded','false')}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){menu.classList.remove('open');burger.setAttribute('aria-expanded','false');lis.forEach(function(x){x.classList.remove('open')})}});
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');burger.setAttribute('aria-expanded','false');lis.forEach(function(x){x.classList.remove('open')});if(a.dataset.tab)showTab(+a.dataset.tab)})});

  // tabs with autoplay
  var tabs=[].slice.call(document.querySelectorAll('.tab')),cur=0,timer=null,feat=document.querySelector('.features');
  function showTab(i,quiet){
    cur=i;var d=FEAT[lang][i];
    tabs.forEach(function(t,j){t.setAttribute('aria-selected',j===i);var p=t.querySelector('.prog');p.style.animation='none';p.offsetWidth;p.style.animation='';document.getElementById('p'+j).hidden=j!==i;});
    document.getElementById('pnum').textContent='0'+(i+1)+' / 05';
    document.getElementById('ph').textContent=d[0];document.getElementById('pp').textContent=d[1];
    document.getElementById('pl').innerHTML=d[2].map(function(x){return '<li>'+x+'</li>'}).join('');
    restart();
  }
  function restart(){clearTimeout(timer);if(feat.classList.contains('paused'))return;timer=setTimeout(function(){showTab((cur+1)%tabs.length)},6000);}
  tabs.forEach(function(t,i){t.addEventListener('click',function(){showTab(i)});
    t.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='ArrowLeft'){var n=(i+(e.key==='ArrowRight'?1:tabs.length-1))%tabs.length;tabs[n].focus();showTab(n);}});});
  var pw=document.querySelector('.panel-wrap');
  pw.addEventListener('mouseenter',function(){feat.classList.add('paused');clearTimeout(timer)});
  pw.addEventListener('mouseleave',function(){feat.classList.remove('paused');restart()});
  if(matchMedia('(prefers-reduced-motion:reduce)').matches){feat.classList.add('paused')}

  // portfolio arrows
  var strip=document.getElementById('strip');
  function step(){var c=strip.querySelector('.card-p');return c?c.getBoundingClientRect().width+18:300}
  document.getElementById('prev').addEventListener('click',function(){strip.scrollBy({left:-step(),behavior:'smooth'})});
  document.getElementById('next').addEventListener('click',function(){strip.scrollBy({left:step(),behavior:'smooth'})});

  // brand swatches
  var demo=document.getElementById('demo'),sws=document.querySelectorAll('#sw button');
  sws.forEach(function(b){b.addEventListener('click',function(){demo.style.setProperty('--b',b.dataset.b);demo.style.setProperty('--b2',b.dataset.b2);sws.forEach(function(x){x.setAttribute('aria-pressed',x===b)})})});

  // counters (resting value is final; animate when scrolled into view)
  function animate(el){var to=+el.dataset.to;if(!to||el.dataset.done)return;el.dataset.done=1;var t0=null;
    function f(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/1400,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}
    requestAnimationFrame(f);}
  if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion:reduce)').matches){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){animate(e.target);io.unobserve(e.target)}})},{threshold:.6});
    document.querySelectorAll('.count').forEach(function(c){io.observe(c)});
  }

  // quote form -> WhatsApp
  var form=document.getElementById('quote'),send=document.getElementById('send'),err=document.getElementById('err');
  function val(id){return document.getElementById(id).value.trim()}
  function update(){
    var m=MSG[lang],r=form.querySelector('input[name=svc]:checked'),svc=r?form.querySelector('label[for="'+r.id+'"]').textContent:'';
    var t=m.hi+'\n\n';
    if(val('f-nome'))t+=m.n+': '+val('f-nome')+'\n';
    if(val('f-empresa'))t+=m.e+': '+val('f-empresa')+'\n';
    t+=m.s+': '+svc+'\n';
    if(val('f-site'))t+=m.w+': '+val('f-site')+'\n';
    if(val('f-msg'))t+='\n'+m.m+': '+val('f-msg');
    send.href='https://wa.me/5531988691313?text='+encodeURIComponent(t);
  }
  form.addEventListener('input',update);form.addEventListener('change',update);
  form.addEventListener('submit',function(e){e.preventDefault()});
  send.addEventListener('click',function(e){if(!val('f-nome')){e.preventDefault();err.hidden=false;document.getElementById('f-nome').focus()}else err.hidden=true;});

  document.querySelectorAll('.copy').forEach(function(b){b.addEventListener('click',function(){
    var done=function(){b.textContent=MSG[lang].done;setTimeout(function(){b.textContent=lang==='en'?EN.copy:PT.copy},1600)};
    try{navigator.clipboard.writeText(b.dataset.copy).then(done,function(){sel(b)})}catch(_){sel(b)}
  })});
  function sel(b){var v=b.previousElementSibling.querySelector('.v');var r=document.createRange();r.selectNodeContents(v);var s=getSelection();s.removeAllRanges();s.addRange(r)}

  var saved='pt';try{saved=localStorage.getItem('hs-lang')||'pt'}catch(e){}
  buildMarquee();
  if(saved==='en')setLang('en');else{showTab(0);update();}
})();
