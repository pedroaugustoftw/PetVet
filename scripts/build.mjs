import{build,createServer}from'vite';
import{readFile,writeFile}from'node:fs/promises';
import{renderToString}from'react-dom/server';
import React from'react';
import{siteUrl}from'./seo.mjs';
await build();
const server=await createServer({cacheDir:'node_modules/.vite-ssr',server:{middlewareMode:true},appType:'custom'});
try{
 const{App}=await server.ssrLoadModule('/src/model.jsx');
 const html=renderToString(React.createElement(App));
 const file=await readFile('dist/index.html','utf8');
 await writeFile('dist/index.html',file.replace('<div id="root"></div>',`<div id="root">${html}</div>`));
 console.log('Static HTML rendered: content and metadata available without JavaScript.');
 if(!siteUrl)console.warn('SITE_URL ainda não definido: informe o domínio público em .env.local para ativar canonical, sitemap e URLs absolutas de compartilhamento.');
}finally{await server.close()}
