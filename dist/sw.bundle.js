if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let c={};const n=e=>s(e,d),t={module:{uri:d},exports:c,require:n};a[d]=Promise.all(i.map((e=>t[e]||n(e)))).then((e=>(r(...e),c)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"192.bundle.js",revision:"97d4f22cd04076f9026dde21e82ee33e"},{url:"2.bundle.js",revision:"45e8c9f605407530918203cf37fa88e7"},{url:"app.webmanifest",revision:"a4aea8ed09df090de96668b06fecdf9d"},{url:"app~323abb1d.bundle.js",revision:"7b930e648da3e9db001e1a8ba98d561b"},{url:"app~323abb1d.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~7bd12dde.bundle.js",revision:"913fe7c2306545331d1e362ed210f6ad"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~899a8e5e.bundle.js",revision:"ced3795dfd4be7a001183485448820a0"},{url:"app~a51fa3f5.bundle.js",revision:"b6f5585e4ddbe7c3a958df901b28fbd8"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"531ebae6626e9a8d54abf5e0f05e76b8"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"assets/android-chrome-144x144.png",revision:"ed995ad844cd2da0b0337feb936179aa"},{url:"assets/android-chrome-192x192.png",revision:"c2049a4a9e55c6c547efd426f4082ce5"},{url:"assets/android-chrome-256x256.png",revision:"78dfb06777936cf0d639ce599f392846"},{url:"assets/android-chrome-36x36.png",revision:"47c3a0ece0be330bff5678afcf2bd599"},{url:"assets/android-chrome-384x384.png",revision:"ee037f7d02cb619c612a440f35994dca"},{url:"assets/android-chrome-48x48.png",revision:"d1ddd8023a0c12ee35775fe3b4877647"},{url:"assets/android-chrome-512x512.png",revision:"88fd9d9b39d4b06392eeffad7fe9ecf0"},{url:"assets/android-chrome-72x72.png",revision:"b5dc6307e30f9047e0f2268a180f285c"},{url:"assets/android-chrome-96x96.png",revision:"f40912e7327a749105280c8c4b1ce4f4"},{url:"assets/apple-touch-icon-1024x1024.png",revision:"c6b04e4d402d212f201e6cee7f9c26fd"},{url:"assets/apple-touch-icon-114x114.png",revision:"86a26f41c51d051cbeea5dae4f6f0c39"},{url:"assets/apple-touch-icon-120x120.png",revision:"5cadf944de57e4f9a6623bf95b954182"},{url:"assets/apple-touch-icon-144x144.png",revision:"53def133f1dcded9ea37a7e6085c7c58"},{url:"assets/apple-touch-icon-152x152.png",revision:"22e6958337427eb3ec31c45b0c7a63a2"},{url:"assets/apple-touch-icon-167x167.png",revision:"0a77cd65551291f3d96d55d0900fc2b9"},{url:"assets/apple-touch-icon-180x180.png",revision:"5b456d4e169a5e56959d6065ca21e581"},{url:"assets/apple-touch-icon-57x57.png",revision:"c2d01d92b0f596cba7f47114620a2415"},{url:"assets/apple-touch-icon-60x60.png",revision:"9afe1d027614a8f0f301c380fc0cd44c"},{url:"assets/apple-touch-icon-72x72.png",revision:"5806c3fd8677e3f9fe1b99612e183558"},{url:"assets/apple-touch-icon-76x76.png",revision:"7efed4196c26fff2e73638f79f6a880a"},{url:"assets/apple-touch-icon-precomposed.png",revision:"5b456d4e169a5e56959d6065ca21e581"},{url:"assets/apple-touch-icon.png",revision:"5b456d4e169a5e56959d6065ca21e581"},{url:"assets/apple-touch-startup-image-1125x2436.png",revision:"b23c7feb9d399e9d349703628e02cf2b"},{url:"assets/apple-touch-startup-image-1136x640.png",revision:"4749ba57a9539c56535d60e4ba2f47ff"},{url:"assets/apple-touch-startup-image-1170x2532.png",revision:"64419b82485354e24677b549dd4c7d96"},{url:"assets/apple-touch-startup-image-1242x2208.png",revision:"495adc1d7795eca1ad8f23e13cf9ce75"},{url:"assets/apple-touch-startup-image-1242x2688.png",revision:"4a1986355d2ada073ccad95b7359fb66"},{url:"assets/apple-touch-startup-image-1284x2778.png",revision:"b7af1b5db85e92d8385572a12df18ff4"},{url:"assets/apple-touch-startup-image-1334x750.png",revision:"44f82f12079e3af8e26abcda44eab51d"},{url:"assets/apple-touch-startup-image-1536x2048.png",revision:"3dde08ce94c85cd91a8e6fb3e240c0fe"},{url:"assets/apple-touch-startup-image-1620x2160.png",revision:"443e33cbcd75356b92f87ad33c3ceac2"},{url:"assets/apple-touch-startup-image-1668x2224.png",revision:"54314c3c7806544e508f8a4c03f45372"},{url:"assets/apple-touch-startup-image-1668x2388.png",revision:"4ed97f9f668640918c593c3985a069c0"},{url:"assets/apple-touch-startup-image-1792x828.png",revision:"1eb27b18ea0bbd5272ceb6b84a9bdce7"},{url:"assets/apple-touch-startup-image-2048x1536.png",revision:"7d3823981d8f197c2696bfed192b5d49"},{url:"assets/apple-touch-startup-image-2048x2732.png",revision:"3f668e90e81ee5dfa938aa57bc2e7d3a"},{url:"assets/apple-touch-startup-image-2160x1620.png",revision:"69a121dc4a5f8ff81d4b9454e6a59964"},{url:"assets/apple-touch-startup-image-2208x1242.png",revision:"116cc0d667978864db4dc0715a4c31bf"},{url:"assets/apple-touch-startup-image-2224x1668.png",revision:"6210f49ad3da37689dffc0c2db17e139"},{url:"assets/apple-touch-startup-image-2388x1668.png",revision:"111fb01fffa49eb61a37bef841b7cfbd"},{url:"assets/apple-touch-startup-image-2436x1125.png",revision:"d63aa537519c635bf5b33ef8375d66c5"},{url:"assets/apple-touch-startup-image-2532x1170.png",revision:"4bcec750ae2a3a9ba28030fd1cb03836"},{url:"assets/apple-touch-startup-image-2688x1242.png",revision:"e006543793186202d1fe46051cccedec"},{url:"assets/apple-touch-startup-image-2732x2048.png",revision:"e4f80b8060cdd77e84ceaaa00b7e05df"},{url:"assets/apple-touch-startup-image-2778x1284.png",revision:"a7ca0bff2756b272bec489587240f19d"},{url:"assets/apple-touch-startup-image-640x1136.png",revision:"e3ce2ba81b4e4ee467fbd86fca06b715"},{url:"assets/apple-touch-startup-image-750x1334.png",revision:"892086cded98b06435ddad6f92918faf"},{url:"assets/apple-touch-startup-image-828x1792.png",revision:"aea72bde8a9612e1756dddc30a411c04"},{url:"assets/browserconfig.xml",revision:"b2c5abf2b91648116fdf6e412f6d2677"},{url:"assets/favicon-16x16.png",revision:"bc2467dbc8055c01e1cca9fd7877a463"},{url:"assets/favicon-32x32.png",revision:"10c7f97487dc966fbdb2837a9394f862"},{url:"assets/favicon-48x48.png",revision:"d1ddd8023a0c12ee35775fe3b4877647"},{url:"assets/favicon.ico",revision:"ea594507fae8d72a542c05fea080ef02"},{url:"assets/manifest.webmanifest",revision:"411aa49c8480a1ea44cc67a011c0b49a"},{url:"assets/mstile-144x144.png",revision:"ed995ad844cd2da0b0337feb936179aa"},{url:"assets/mstile-150x150.png",revision:"987a52fd69037d19a8e9cb05c5192488"},{url:"assets/mstile-310x150.png",revision:"84ae735a7aae15d827fb3e9b13b45ca7"},{url:"assets/mstile-310x310.png",revision:"53d215489c5aaba1708b3a4a8e05d1fe"},{url:"assets/mstile-70x70.png",revision:"b875ccb669f3d84a7393a2a132a6d842"},{url:"assets/yandex-browser-50x50.png",revision:"e0d5854ab3fcdbd7530a5dd369c27715"},{url:"assets/yandex-browser-manifest.json",revision:"1fa786b96e710d40404b454e3f54141c"},{url:"bd6b63650298f334a08b.jpg",revision:null},{url:"icons/restaurant.png",revision:"67268839847ba0131b8c7ff9fa933dca"},{url:"index.html",revision:"5b3de0216bd757184da050ec6957a6c7"},{url:"restaurant.png",revision:"f930fbfe06af80c8bf2347ea83bae891"}],{})}));
//# sourceMappingURL=sw.bundle.js.map