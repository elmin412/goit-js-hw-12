import{a as w,S as q,i as y}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function A(){const o=document.querySelector(".loader");o.style.display="none"}async function f(o,r,s){const u=`https://pixabay.com/api/?key=42578241-c2049137a4025890cf19aabd8&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${s}`;try{const a=await w.get(u),b=a.data;if(!a.data||!a.data.hits||a.data.hits.length===0)throw new Error("No images found");return b}catch(a){throw A(),a}}function g(o){const r=document.querySelector(".gallery"),s=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:p,comments:u,downloads:a})=>`<li class="gallery-item">
                <a class="gallery-link" href="${e}">
                <img class="gallery-image"
                src="${n}"
                data-source="${e}"
                alt="${t}"/></a>
                <p><span class="image-items-text">Likes: </span>${i}</p>
                <p><span class="image-items-text">Views: </span>${p}</p>
                <p><span class="image-items-text">Comments: </span>${u}</p>
                <p><span class="image-items-text">Downloads: </span>${a}</p>
            </li>`).join("");r.insertAdjacentHTML("beforeend",s)}const I=document.querySelector("form"),x=document.querySelector(".search-btn"),h=document.querySelector(".gallery"),O=document.querySelector('input[type="text"]'),E=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),S=new q(".gallery a",{captionsData:"alt",captionDelay:250});function H(){E.style.display="block"}function m(){E.style.display="none"}function N(){h.innerHTML=""}let c,$;const d=15;let L=0;async function P(o){o.preventDefault();const r=O.value.trim();N(),H(),I.reset();try{const s=await f(r,c,d),n=s.hits;L=s.totalHits,g(n),m(),S.refresh(),c=1,$=r,n.length>1&&(l.style.display="flex")}catch{m(),l.style.display="none",y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}}x.addEventListener("click",P);l.addEventListener("click",async()=>{try{c++;const r=(await f($,c,d)).hits;g(r),S.refresh();const s=h.getBoundingClientRect().height;window.scrollBy({top:2*s,behavior:"smooth"}),c*d>=L&&(l.style.display="none",y.info({title:"End of search results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){console.error(o.message)}});
//# sourceMappingURL=commonHelpers.js.map