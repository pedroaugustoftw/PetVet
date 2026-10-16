# Imagens PetVet

Geradas com a ferramenta integrada `image_gen`, com `transparent_background: true`, para a reconstrução das referências `foto modelo.png` e `mobile.png`. São imagens sintéticas fotorrealistas, não fotografias de pacientes reais. Os arquivos estão em `public/pets`, em PNG com canal alfa; foram preservados sem ampliação.

| Arquivo | Dimensões | Uso |
|---|---|---|
| hero-pets.png | 1536 × 1024 | Golden e gato no topo |
| family-pets.png | 1536 × 1024 | Border collie e gato na seção de diferenciais |
| golden.png | 1254 × 1254 | Fases da vida no mobile |
| cat-wave.png | 1024 × 1536 | Gato com a patinha levantada no mobile |

## Prompts finais usados

### hero-pets.png

A hyperrealistic commercial studio photograph cutout of a friendly adult golden retriever sitting behind and to the LEFT of a fluffy brown grey white tabby cat lying in the foreground on the RIGHT. Golden looking slightly up at camera with friendly open mouth, tongue visible, full ears and entire top of head inside frame; cat alert green eyes looking slightly right. Both lean on a very narrow white soft blanket at the bottom, paws visible. Composition wide 3:2, pets occupy 90% of frame, waist-up dog, cat whole torso and paws, no cropping of ears, photorealistic fine individually resolved fur, premium natural daylight veterinary campaign photography, natural anatomy, real life facial proportions. Transparent background with fine clean fur alpha edges. No text, no logos, no graphic shapes, no scenery, no floor or opaque rectangular background.

### family-pets.png

A hyperrealistic commercial studio photograph transparent cutout of a happy black and white border collie dog, medium long fur, sitting upright on the LEFT behind a fluffy brown grey white tabby cat on the RIGHT. Both look upwards and slightly toward the right, friendly attentive expressions, dog mouth open and pink tongue visible, cat green eyes. Composition wide 3:2, entire heads and ears inside frame, chest and forelegs, subjects close together and fill the frame. Photo realistic premium pet advertising photography, lifelike fur, soft natural light, clean transparent alpha background. No text, no logos, no collar, no room, no hard rectangular background.

### golden.png

A premium hyperrealistic studio photograph cutout of a single friendly adult golden retriever, head and upper chest with beautiful golden fur, entire head and both ears visible with clear margin above, mouth happily open tongue visible, looking slightly upwards and to left. Real animal anatomy and proportions, extremely lifelike fine detailed fur and natural eyes, soft daylight pet healthcare commercial photograph. Portrait 1:1 framing on genuinely transparent alpha background, clean individual fur edges. No text, no graphic shapes, no room, no floor, no logos.

### cat-wave.png

A premium hyperrealistic studio photograph cutout of a fluffy brown grey white tabby cat with green eyes, sitting upright and raising its front LEFT paw toward the camera, soft paw pads facing viewer, curious friendly face looking up slightly, whole ears and head inside frame, torso cut at bottom. Realistic natural anatomy, extraordinarily lifelike fine fur detail, soft natural light, real commercial pet photography aesthetic, portrait composition, genuinely transparent background with clean fine fur alpha edges. No text, no logo, no cartoon, no clothing, no graphic shapes, no opaque background.

## Marca e ícones

## Correção do formulário mobile

`public/pets/booking-collie.png`: recorte dedicado gerado com a ferramenta integrada image_gen, transparência ativada, tendo `public/pets/family-pets.png` como alvo de edição. Substitui o recorte por CSS que deixava um fragmento do gato visível.

Prompt: Edit this image to isolate only the black and white border collie dog. Remove the cat completely and remove all background. Preserve exactly the dog's face, fur colors, happy mouth, lighting, upward gaze and realistic photographic detail. Reconstruct naturally any dog chest and legs previously obscured by the cat. Deliver a single isolated border collie head and upper chest portrait, centered with full ears and head inside frame and 5% transparent margin. Crop below the upper chest (no paws, legs or full body). Genuine transparent PNG alpha background with clean natural fur edges. No text, no logo, no second animal, no scenery, no glow.

A identidade existente foi reconstruída, sem propor um redesign. Os arquivos `public/brand-horizontal-white.svg` e `public/brand-horizontal-blue.svg` usam somente paths preenchidos: símbolo geométrico e letras convertidas em curvas com Arial Bold do sistema. Não incluem fonte, texto vivo, raster, filtros ou gradientes. O script `scripts/brand.mjs` gera as variantes. Os ícones são SVGs desenhados no componente `Icon` de `src/model.jsx`, em grade 48 × 48, com espessura e terminações consistentes.
