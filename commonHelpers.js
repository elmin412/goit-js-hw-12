import{a as w,S as q,i as m}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function A(){const r=document.querySelector(".loader");r.style.display="none"}async function f(r,o,s){const u=`https://pixabay.com/api/?key=42578241-c2049137a4025890cf19aabd8&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${s}`;try{const n=await w.get(u),b=n.data.hits;if(!n.data||!n.data.hits||n.data.hits.length===0)throw new Error("No images found");return b}catch(n){throw A(),n}}function g(r){const o=document.querySelector(".gallery"),s=r.map(({webformatURL:c,largeImageURL:e,tags:t,likes:a,views:d,comments:u,downloads:n})=>`<li class="gallery-item">
                <a class="gallery-link" href="${e}">
                <img class="gallery-image"
                src="${c}"
                data-source="${e}"
                alt="${t}"/></a>
                <p><span class="image-items-text">Likes: </span>${a}</p>
                <p><span class="image-items-text">Views: </span>${d}</p>
                <p><span class="image-items-text">Comments: </span>${u}</p>
                <p><span class="image-items-text">Downloads: </span>${n}</p>
            </li>`).join("");o.insertAdjacentHTML("beforeend",s)}const I=document.querySelector("form"),x=document.querySelector(".search-btn"),h=document.querySelector(".gallery"),O=document.querySelector('input[type="text"]'),E=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),S=new q(".gallery a",{captionsData:"alt",captionDelay:250});function N(){E.style.display="block"}function p(){E.style.display="none"}function P(){h.innerHTML=""}let i,$;const L=15;let y=0;async function T(r){r.preventDefault();const o=O.value.trim();P(),N(),I.reset();try{const s=await f(o,i,L);g(s),p(),S.refresh(),i=1,$=o,s.length>1&&(l.style.display="flex")}catch{p(),l.style.display="none",m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}}x.addEventListener("click",T);l.addEventListener("click",async()=>{try{i++;const r=await f($,i,L);g(r),S.refresh();const o=h.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"}),i===y&&(l.style.display="none",m.info({title:"End of search results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),console.log(y)}catch(r){console.error(r.message)}});
//# sourceMappingURL=commonHelpers.js.map