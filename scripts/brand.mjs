import opentype from 'opentype.js';
import sharp from 'sharp';
import{readFile,writeFile}from'node:fs/promises';
const bytes=await readFile('C:/Windows/Fonts/arialbd.ttf');
const font=opentype.parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength));
const symbol=(await readFile('public/brand-symbol.svg','utf8')).replace(/<svg[^>]*>|<\/svg>|<title[^>]*>.*?<\/title>/g,'');
for(const[variant,color]of[['white','#ffffff'],['blue','#006ca8']]){
 const size=94,x=170,y=135;
 const pet=font.getPath('Pet',x,y,size),advance=font.getAdvanceWidth('Pet',size);
 const vet=font.getPath('Vet',x+advance-2,y,size);
 const sub=font.getPath('C L Í N I C A   V E T E R I N Á R I A',x+4,166,15);
 const artwork=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 500 150" role="img" aria-labelledby="brand-title"><title id="brand-title">PetVet Clínica Veterinária</title><g transform="translate(5 28) scale(.55)">${symbol.replace('fill="#fff"',`fill="${color}"`)}</g><path fill="${color}" d="${pet.toPathData(2)}"/><path fill="#ff8a00" d="${vet.toPathData(2)}"/><path fill="${color}" d="${sub.toPathData(2)}"/></svg>`;
 await writeFile(`public/brand-horizontal-${variant}.svg`,artwork);
 await sharp(Buffer.from(artwork)).resize(1500,450).png().toFile(`test-results/brand-${variant}.png`);
}
console.log('Outlined logo variants generated. No live text, filters, raster or gradients.');
