import{chromium}from'@playwright/test';
import assert from'node:assert/strict';
import{basePath}from'./seo.mjs';
import{mkdir}from'node:fs/promises';
await mkdir('test-results',{recursive:true});
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1536,height:1024},reducedMotion:'reduce'});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
try{
 await page.goto(process.env.TEST_URL||'http://127.0.0.1:5174'+basePath,{waitUntil:'networkidle'});
 assert.equal(await page.locator('.service-card').count(),6);
 assert.equal(await page.locator('header .action').count(),0);
 await page.getByRole('button',{name:'Consulta veterinária'}).click();
 assert(await page.locator('dialog').isVisible());
 await page.keyboard.press('Escape');
 assert(!(await page.locator('dialog').isVisible()));
 await page.getByRole('button',{name:'Raio X e ultrassom',exact:true}).click();
 await page.getByRole('button',{name:'Tenho interesse'}).click();
 assert.equal(await page.locator('#reason').inputValue(),'Raio X e ultrassom');
 await page.getByRole('textbox',{name:'Seu nome',exact:true}).fill('Marina');
 await page.getByRole('textbox',{name:'Telefone (WhatsApp)',exact:true}).fill('(82) 90000-0000');
 await page.getByRole('combobox',{name:'Tipo de pet'}).selectOption('Gato');
 await page.getByRole('combobox',{name:'Unidade de atendimento'}).selectOption('Junqueiro');
 await page.getByRole('button',{name:'Solicitar agendamento'}).click();
 assert(await page.locator('.booking-result').isVisible());
 assert(await page.locator('.booking-result').innerText().then(t=>t.includes('Marina')&&t.includes('raio x')));
 const contact=new URL(await page.getByRole('link',{name:'Continuar no WhatsApp',exact:true}).getAttribute('href'));
 assert.equal(contact.origin+contact.pathname,'https://wa.me/558291033312');
 assert(contact.searchParams.get('text').includes('Junqueiro'));
 assert(contact.searchParams.get('text').includes('Marina'));
 assert.equal(await page.getByRole('link',{name:'Instagram da PetVet',exact:true}).getAttribute('href'),'https://www.instagram.com/petvetclinicaveterinaria/');
 assert.equal(await page.getByRole('link',{name:'WhatsApp da PetVet',exact:true}).getAttribute('href'),'https://wa.me/558291033312');
 assert(await page.locator('footer').innerText().then(t=>t.includes('Teotônio Vilela')&&t.includes('Junqueiro')&&t.includes('31.032.434/0001-05')&&!t.includes('Arapiraca')));
 await page.getByRole('button',{name:'Editar informações'}).click();
 assert.equal(await page.locator('#tutor-name').inputValue(),'Marina');
 await page.getByRole('button',{name:'Próximo serviço'}).click();
 assert(await page.locator('.service-card').first().innerText().then(t=>t.includes('Vacinação')));
 await page.getByRole('button',{name:'Serviço anterior'}).click();
 await page.reload({waitUntil:'networkidle'});
 for(const width of [1536,1440,1024,779,600,425,390,375,320]){
  await page.setViewportSize({width,height:width>800?1024:900});
  await page.evaluate(()=>scrollTo(0,0));
  await page.evaluate(async()=>{await document.fonts.ready;for(const i of document.images)i.loading='eager';await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow ${width}`);
  assert(await page.locator('img').evaluateAll(imgs=>imgs.every(i=>i.complete&&i.naturalWidth>0)));
  if(width>800){assert(await page.locator('header nav').evaluate(nav=>{const r=nav.getBoundingClientRect();return Math.abs(r.left+r.width/2-innerWidth/2)<2&&[...nav.querySelectorAll('a')].every(a=>getComputedStyle(a).textTransform==='uppercase')}),`Centered uppercase header ${width}`)}
  if(width<=800){
   assert(await page.locator('.life-mobile').evaluate(section=>{const text=section.querySelector('[role="tabpanel"]'),t=text.getBoundingClientRect(),options=section.querySelector('.life-options').getBoundingClientRect(),wave=section.querySelector('.wave').getBoundingClientRect();return t.top>=options.bottom&&t.bottom<=wave.top&&parseFloat(getComputedStyle(text).fontSize)>=10}),`Life-stage text clear of wave ${width}`);
   assert(await page.locator('.booking').evaluate(form=>{const f=form.getBoundingClientRect(),dog=form.querySelector('.booking-dog').getBoundingClientRect(),button=form.querySelector('.submit').getBoundingClientRect();return dog.left>=f.left&&dog.right<=f.right+1&&dog.bottom<=button.top+1&&button.right<=f.right&&button.left>=f.left}),`Booking image/button layout ${width}`);
  }
  await page.screenshot({path:`test-results/model-${width}.png`,fullPage:true});
 }
 await page.getByRole('button',{name:'Abrir menu'}).click();
 await page.getByRole('navigation',{name:'Navegação principal',exact:true}).getByRole('link',{name:'Serviços',exact:true}).click();
 assert.equal(await page.getByRole('button',{name:'Abrir menu'}).getAttribute('aria-expanded'),'false');
 await page.getByRole('tab',{name:'Filhote'}).click();
 assert(await page.getByRole('tabpanel').innerText().then(t=>t.includes('primeiras descobertas')));
 await page.setViewportSize({width:1440,height:900});
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.evaluate(()=>scrollTo(0,0));
 const before=await page.locator('.hero-pets').evaluate(img=>img.style.getPropertyValue('--pet-shift'));
 await page.evaluate(()=>scrollTo(0,350));
 await page.waitForFunction(previous=>document.querySelector('.hero-pets').style.getPropertyValue('--pet-shift')!==previous,before);
 await page.emulateMedia({reducedMotion:'reduce'});
 assert.equal(await page.locator('.hero-pets').evaluate(img=>getComputedStyle(img).translate),'none');
 assert.deepEqual(errors,[]);
 console.log('PASS: 9 responsive widths, booking image/button bounds, unit selection, WhatsApp message, Instagram, addresses/CNPJ, service details, keyboard dialog, carousel, mobile menu and life-stage tabs.');
}finally{await browser.close()}
