# SEO e prÃ©via de compartilhamento â€” PetVet

DomÃ­nio confirmado: https://pedroaugustoftw.github.io/PetVet. Configurado em `.env` por `SITE_URL`; `.env.local` pode sobrescrevÃª-lo. Nenhuma alteraÃ§Ã£o de domÃ­nio ou publicaÃ§Ã£o foi feita por esta tarefa.

## O que foi implementado

- TÃ­tulo e descriÃ§Ã£o com TeotÃ´nio Vilela, Junqueiro e serviÃ§os reais.
- Canonical, Open Graph e Twitter Card no HTML enviado pelo servidor, com URLs absolutas do domÃ­nio.
- Banner 1200 Ã— 630 em JPEG para compartilhamento e PNG como matriz, usando os pets e a identidade visual existentes. Local: `public/social/petvet-compartilhar-v1.{jpg,png}`.
- Dados JSON-LD de Organization, WebSite e duas unidades LocalBusiness/VeterinaryCare, com endereÃ§os, WhatsApp, Instagram e CNPJ informados.
- Robots e sitemap gerados em produÃ§Ã£o. Nenhum horÃ¡rio, preÃ§o, avaliaÃ§Ã£o ou coordenada foi inventado.
- Ãcones de navegador, Apple e manifesto.
- HTML prÃ©-renderizado no build, mantendo o React interativo por hidrataÃ§Ã£o. O conteÃºdo nÃ£o depende da execuÃ§Ã£o de JavaScript para ser lido.

## Publicar

1. Execute `npm run build` e `npm run test:seo`.
2. Publique o conteÃºdo de `dist` na hospedagem que atende https://pedroaugustoftw.github.io/PetVet. O comando de build Ã© `npm run build`; a pasta pÃºblica Ã© `dist`.
3. Confira estes endereÃ§os pÃºblicos: `/`, `/robots.txt`, `/sitemap.xml`, `/social/petvet-compartilhar-v1.jpg`.
4. Deixe a pÃ¡gina e a imagem acessÃ­veis sem login, desafios ou bloqueios para robÃ´s. A imagem precisa responder como JPEG e o HTML precisa conter as tags Open Graph jÃ¡ no cÃ³digo-fonte.
5. No Google Search Console da propriedade do domÃ­nio, envie `https://pedroaugustoftw.github.io/PetVet/sitemap.xml` e solicite a inspeÃ§Ã£o da pÃ¡gina inicial. A indexaÃ§Ã£o e a aparÃªncia final dependem do Google.
6. Aplicativos podem manter prÃ©vias antigas em cache. Depois da publicaÃ§Ã£o, use o depurador de compartilhamento da plataforma para solicitar nova leitura quando disponÃ­vel. Alterar o nome do arquivo do banner exige atualizar `scripts/seo.mjs` e fazer novo build.

## ManutenÃ§Ã£o

- Metadados e dados estruturados: `scripts/seo.mjs`.
- InjeÃ§Ã£o de metadados, robots e sitemap: `vite.config.js`.
- PrÃ©-renderizaÃ§Ã£o: `scripts/build.mjs`.
- Banner e Ã­cones: `scripts/social-assets.mjs`. `npm run assets:social` recria os arquivos usando os pets existentes e fontes Arial do Windows convertidas em curvas; nÃ£o hÃ¡ dependÃªncia de fontes no banner final.
- ValidaÃ§Ã£o automatizada: `npm run test:seo`. Verifica produÃ§Ã£o, domÃ­nio canÃ´nico, imagem, conteÃºdo sem JavaScript e hidrataÃ§Ã£o React.

## ReferÃªncias tÃ©cnicas

- Google: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google: https://developers.google.com/search/docs/appearance/snippet
- Open Graph: https://ogp.me/
- Schema: https://schema.org/VeterinaryCare


