"use strict";var precacheConfig=[["/Portfolio/index.html","472611319927b3bb77a12b463118e133"],["/Portfolio/static/css/main.285462fe.css","0e1ab1d0a981cdaa0874c18abf4b579c"],["/Portfolio/static/js/main.d26b73ea.js","cdde003041cdef4a131dbdd75ea33290"],["/Portfolio/static/media/Friend.ddb2aaae.PNG","ddb2aaaed2893150e5387c6c363a9b20"],["/Portfolio/static/media/Montserrat-Regular.91696e09.otf","91696e0984cfab74ff344325e5015da5"],["/Portfolio/static/media/NTM.d18a3ba5.PNG","d18a3ba54fe0141facc74cea051a0fc1"],["/Portfolio/static/media/Roboto-Bold.c0f1e4a4.woff2","c0f1e4a4fdfb8048c72e86aadb2a247d"],["/Portfolio/static/media/Roboto-Bold.eed9aab5.woff","eed9aab5449cc9c8430d7d258108f602"],["/Portfolio/static/media/Roboto-Light.3c37aa69.woff2","3c37aa69cd77e6a53a067170fa8fe2e9"],["/Portfolio/static/media/Roboto-Light.ea36cd9a.woff","ea36cd9a0e9eee97012a67b8a4570d7b"],["/Portfolio/static/media/Roboto-Medium.1561b424.woff2","1561b424aaef2f704bbd89155b3ce514"],["/Portfolio/static/media/Roboto-Medium.cf4d60bc.woff","cf4d60bc0b1d4b2314085919a00e1724"],["/Portfolio/static/media/Roboto-Regular.3cf6adf6.woff","3cf6adf61054c328b1b0ddcd8f9ce24d"],["/Portfolio/static/media/Roboto-Regular.5136cbe6.woff2","5136cbe62a63604402f2fedb97f246f8"],["/Portfolio/static/media/Roboto-Thin.1f35e6a1.woff2","1f35e6a11d27d2e10d28946d42332dc5"],["/Portfolio/static/media/Roboto-Thin.44b78f14.woff","44b78f142603eb69f593ed4002ed7a4a"],["/Portfolio/static/media/burger.b80c66a3.PNG","b80c66a3fab2e6e69bea9d1d7dbba7b9"],["/Portfolio/static/media/cool.9d8e9b3e.jpg","9d8e9b3ed7597f2c7abd740fad31c89d"],["/Portfolio/static/media/css_logo.670c0bec.png","670c0bec96ca809688b07d72b8335b15"],["/Portfolio/static/media/database.3b5c5ad3.png","3b5c5ad3ac02b6376a20cce965b3b9d8"],["/Portfolio/static/media/git_vscode.6e529bdb.png","6e529bdb09243aa965c1f33baa344de7"],["/Portfolio/static/media/github.56aa79c1.png","56aa79c13096e30dc2f09a7d0118c2b2"],["/Portfolio/static/media/graph.9ebf6122.PNG","9ebf61221da424f535d134ac65b1544d"],["/Portfolio/static/media/html_logo.fc4b15b5.png","fc4b15b53ceeed7a3b9361840d02d316"],["/Portfolio/static/media/javascript_logo.c4cea1c3.png","c4cea1c3f81ffc3ea8df7bda146b5462"],["/Portfolio/static/media/jquery_ajax2.954678da.png","954678dae94ac5ddd21a1d00cc5315e0"],["/Portfolio/static/media/linkedin.f6eaf68b.jpg","f6eaf68b925e626e37d1815b383e8a1d"],["/Portfolio/static/media/logo.12a22983.PNG","12a229830d6e0c4d822b2b4498bab89d"],["/Portfolio/static/media/mathematics-wallpapers.091b12ef.jpg","091b12ef058d9ac2046448971c3fd163"],["/Portfolio/static/media/node.9717687e.png","9717687ec7b7dfbc9fd6be20f8719954"],["/Portfolio/static/media/react-logo.9978c2e2.png","9978c2e272cc80f71ac7fb4b8010c7cc"],["/Portfolio/static/media/trainSchedule.9b945d8e.PNG","9b945d8e1d83f05aa2388f041897fd6f"],["/Portfolio/static/media/vs_code_npm_postman.0d4b0d27.png","0d4b0d27d17323bffb718304406c92d8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,o){var c=new URL(e);return o&&c.pathname.match(o)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],o=new URL(t,self.location),c=createCacheKey(o,hashParamName,a,/\.\w{8}\./);return[o.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(o){return setOfCachedUrls(o).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return o.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),o="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,o),e=urlsToCacheKeys.has(a));var c="/Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});