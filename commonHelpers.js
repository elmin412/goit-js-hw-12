import{S as m,i as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function p(){const r=document.querySelector(".loader");r.style.display="none"}function f(r){const s=`https://pixabay.com/api/?key=42578241-c2049137a4025890cf19aabd8&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(a=>{if(!a.ok)throw new Error("Image error");return a.json()}).then(a=>{if(p(),a.hits.length===0)throw new Error("No images found");return a.hits})}function y(r){const o=document.querySelector(".gallery"),n=r.map(({webformatURL:c,largeImageURL:e,tags:t,likes:s,views:a,comments:l,downloads:u})=>`<li class="gallery-item">
                <a class="gallery-link" href="${e}">
                <img class="gallery-image"
                src="${c}"
                data-source="${e}"
                alt="${t}"/></a>
                <p><span class="image-items-text">Likes: </span>${s}</p>
                <p><span class="image-items-text">Views: </span>${a}</p>
                <p><span class="image-items-text">Comments: </span>${l}</p>
                <p><span class="image-items-text">Downloads: </span>${u}</p>
            </li>`).join("");o.insertAdjacentHTML("beforeend",n)}const h=document.querySelector("form"),g=document.querySelector(".search-btn");document.querySelector(".load-more-btn");const E=document.querySelector(".gallery"),S=document.querySelector('input[type="text"]'),i=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function $(){i.style.display="block"}function q(){i.style.display="none"}function A(){E.innerHTML=""}function I(r){r.preventDefault();const o=S.value.trim();A(),$(),h.reset(),f(o).then(n=>{y(n),L.refresh()}).catch(n=>{q(),console.error(n.message),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})}g.addEventListener("click",I);
//# sourceMappingURL=commonHelpers.js.map