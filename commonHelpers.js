import{a as b,i as l,S as L}from"./assets/vendor-0c7dbcfa.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const _="40948305-cf809bb8656872e1f12174930",w="https://pixabay.com/api/",p=40;async function u(t,a){const o=`${w}?key=${_}&q=${t}&page=${a}&per_page=${p}&image_type=photo&orientation=horizontal&safesearch=true`,s=await b.get(o);return{data:s.data.hits,totalPages:Math.ceil(s.data.totalHits/p)}}function m(t){const{data:a}=t;return a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:i,comments:g,downloads:y})=>`<div class="photo-card">
          <a class="photo-card__link" href="${s}">
            <img class="photo-card__image" src="${o}" alt="${e}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b> <span class="info-item__wrapper">${r}</span></p>
              <p class="info-item"><b>Views</b> <span class="info-item__wrapper">${i}</span></p>
              <p class="info-item"><b>Comments</b> <span class="info-item__wrapper">${g}</span></p>
              <p class="info-item"><b>Downloads</b> <span class="info-item__wrapper">${y}</span></p>
            </div>
          </a>
        </div>`).join("")}function v(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}let n=1;const f=document.getElementById("search-form"),d=document.querySelector(".gallery"),c=document.querySelector(".js-load");f.addEventListener("submit",S);c.addEventListener("click",$);async function $(){n+=1;try{const t=await u(f.elements.searchQuery.value,n);d.innerHTML+=m(t),n>=t.totalPages&&(c.classList.replace("load-more","load-more-hidden"),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),h.refresh(),v()}catch(t){console.error("error",t),l.error({title:"Error",message:"Oops! Something went wrong! Try reloading the page!",position:"topRight"})}}async function S(t){t.preventDefault(),n=1;const a=t.currentTarget.elements.searchQuery.value.trim();if(!a){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}try{const o=await u(a,n);o.data.length===0?(d.innerHTML="",c.classList.replace("load-more","load-more-hidden"),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"})):(d.innerHTML=m(o),n<o.totalPages&&c.classList.replace("load-more-hidden","load-more")),h.refresh()}catch(o){console.error("error",o)}}const h=new L(".gallery a");
//# sourceMappingURL=commonHelpers.js.map
