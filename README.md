# PetVet — React + Vite

Landing page baseada nas referências desktop e mobile, com formas orgânicas, marca e ícones SVG e pets fotorrealistas em PNG transparente.

Site público: https://pedroaugustoftw.github.io/PetVet/

Código-fonte: https://github.com/pedroaugustoftw/PetVet

A publicação é feita automaticamente pelo workflow `Deploy PetVet to GitHub Pages` deste repositório a cada push na branch `main`. O endereço raiz redireciona para `/PetVet/`.

## Executar

```sh
npm install
npm run dev -- --port 5174
```

## Produção e verificação

```sh
npm run build
npm run preview
npm run test:e2e
```

Os testes esperam o servidor em http://127.0.0.1:5174/; TEST_URL permite alterar o endereço. Verificam oito larguras, assets, menu, carrossel, modal por teclado, formulário e fases da vida. Capturas: test-results/model-*.png.

## Arquivos ativos

- src/model.jsx: página React, ícones SVG, serviços e interações.
- src/model.css: composições desktop e mobile; respeita movimento reduzido.
- src/usePageMotion.js: entradas ao rolar e movimento vertical suave dos pets, com atualização por requestAnimationFrame e preferência de movimento reduzido.
- scripts/seo.mjs e vite.config.js: SEO, dados estruturados das unidades, Open Graph, Twitter Card, robots e sitemap.
- scripts/build.mjs: HTML pré-renderizado com hidratação React.
- public/social: banner de compartilhamento em 1200 × 630, JPEG/PNG.
- design/seo-publicacao.md: configuração do domínio e instruções de publicação/validação.
- public/pets: quatro PNGs gerados por IA, com transparência e resolução original.
- public/brand-horizontal-white.svg e public/brand-horizontal-blue.svg: marca reconstruída, letras em curvas.
- design/pet-assets.md: dimensões, método e prompts completos.

node scripts/brand.mjs recria a marca usando Arial Bold instalado no Windows. Os SVGs finais não dependem de fontes instaladas.

## Conteúdo e contato

Serviços confirmados: clínica médica e cirúrgica, vacinas importadas, exames laboratoriais, raio X e ultrassom, banho e tosa. Não foram anunciados odontologia ou internação não confirmadas. A cidade foi informada na referência mais recente; o telefone fictício da imagem não foi utilizado.

O formulário prepara uma mensagem localmente, inclui a unidade escolhida e abre o WhatsApp oficial em https://wa.me/558291033312 com o texto preenchido. Não envia dados automaticamente, não armazena os campos e não confirma consultas. O visitante envia a mensagem e a equipe confirma o horário. Instagram: https://www.instagram.com/petvetclinicaveterinaria/.

Unidades: Av. Maria Jeanne Moeira Sampaio, 445 - Centro, Teotônio Vilela - AL; Av. Antônio Procópio, 151 - Centro, Junqueiro - AL. CNPJ: 31.032.434/0001-05. Os endereços do rodapé abrem a busca de localização no Google Maps.

As imagens são sintéticas fotorrealistas e não retratam pacientes reais. Não foram inventados profissionais, depoimentos ou horários de atendimento.
