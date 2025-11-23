import{a as n,S as l}from"./assets/vendor-DKX7EQWh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(o){return n.get("https://pixabay.com/api/",{params:{key:"53354647-5c23245d0a5319fc788c83675",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits).catch(s=>console.log(s))}function p(o,s){s.innerHTML=o.map(t=>`<li class="gallery-item">
      <div class="gallery-container">
      <div class="gallery">
        <a href="${t.webformatURL}"><img src="${t.largeImageURL}" alt="${t.tags}" title=""/></a>
    </div>

    <div class="description">
          <div class="sub-descr">
          <span class="img-descr-title">Likes</span>
          <span class="img-descr">${t.likes}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Views</span>
          <span class="img-descr">${t.views}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Comments</span>
          <span class="img-descr">${t.comments}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Downloads</span>
          <span class="img-descr">${t.downloads}</span>
        </div>
    </div>
    </div>

    </li>`).join(""),new l(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}const a={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".js-gallery")};a.form.addEventListener("submit",o=>{o.preventDefault();const s=a.input.value;console.log(s),d(s).then(t=>{console.log(t),p(t,a.gallery),console.log(a.gallery)})});
//# sourceMappingURL=index.js.map
