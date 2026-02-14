var D=Object.defineProperty;var F=(e,t,s)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var $=(e,t,s)=>(F(e,typeof t!="symbol"?t+"":t,s),s);import{i as U,g as J,a as P,d as z,b as R,c as V,e as G,s as K,f as p}from"./vendor-295897c2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function Q(){document.querySelector(".filter-list-js").classList.add("hidden-form");const t=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",t.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const c="/energy_project/assets/sprite-c2a9f1af.svg",g=(e,t)=>e.length<=t?e:`${e.slice(0,t)}...`;function X(e){const t=document.querySelector(".filter-list-js");t.classList.remove("hidden-form"),e.length>6?t.classList.add("scroll"):t.classList.remove("scroll");const s=e.map(({_id:o,target:r,name:n,bodyPart:a,burnedCalories:i,time:L})=>`
  <li class="favourites_list_item" id=${o}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${g(r,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash_icon favourites_btn_trash" data-id=${o}>
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash" data-id=${o}>
            <use class="favourites_btn_trash_icon" href="${c}#icon-trash" data-id=${o}></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${o}>
          <p class="favourites_btn_start_text" data-id=${o}>start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow" data-id=${o}>
            <use href="${c}#icon-arrow" data-id=${o}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${c}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${g(n,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${i}/${L}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${g(a,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${g(r,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");t.innerHTML=s}const Y={apiKey:"AIzaSyCHjn7hmADqXOnoaTT-9Y2DPmibHk8NRXs",authDomain:"energy-project-85414.firebaseapp.com",projectId:"energy-project-85414",storageBucket:"energy-project-85414.firebasestorage.app",messagingSenderId:"254845757433",appId:"1:254845757433:web:1f1c887239cdf1eff37f28",measurementId:"G-1L4V3S7H1N"};console.log("Усі змінні середовища:",{VITE_FIREBASE_API_KEY:"AIzaSyCHjn7hmADqXOnoaTT-9Y2DPmibHk8NRXs",VITE_FIREBASE_AUTH_DOMAIN:"energy-project-85414.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"energy-project-85414",VITE_FIREBASE_STORAGE_BUCKET:"energy-project-85414.firebasestorage.app",VITE_FIREBASE_MESSAGING_SENDER_ID:"254845757433",VITE_FIREBASE_APP_ID:"1:254845757433:web:1f1c887239cdf1eff37f28",VITE_FIREBASE_MEASUREMENT_ID:"G-1L4V3S7H1N",BASE_URL:"/energy_project/",MODE:"production",DEV:!1,PROD:!0});const H=U(Y),Z=J(H),q=P(H),W=async e=>{const t=Z.currentUser;if(t)try{K(R(q,t.email,e._id),e)}catch(s){console.log(s.message)}},ee=async e=>{const t=localStorage.getItem("user");if(t)try{z(R(q,t,e))}catch(s){console.log(s.message)}},te=async()=>{const e=localStorage.getItem("user"),t=[];if(!e)return;(await V(G(q,e))).forEach(o=>{t.push(o.data())}),localStorage.setItem("favorites",JSON.stringify(t))};function b(){te();const e=JSON.parse(localStorage.getItem("favorites"));if(!(e!=null&&e.length)){Q();return}X(e)}const B=document.getElementById("home"),T=document.getElementById("favorites"),j=document.getElementById("home-text"),A=document.getElementById("favorites-text");document.getElementById("navigation");const se=window.location.href.toString();let oe=se.slice(-14);const re=()=>{oe==="favorites.html"?(B.classList.remove("active"),j.classList.remove("black"),T.classList.add("active"),A.classList.add("black"),b()):(B.classList.add("active"),j.classList.add("black"),T.classList.remove("active"),A.classList.remove("black"))};re();document.getElementById("burger-button");const ne=document.getElementById("burger");document.getElementById("burger-button-close");const ie=e=>{e.key==="Escape"&&ne.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};document.addEventListener("keydown",ie);const C=document.getElementById("sign-in"),ae=document.getElementById("sign-out"),le=document.getElementById("user");le.innerHTML=localStorage.getItem("user");window.location.href.toString();localStorage.getItem("user")&&(ae.classList.remove("display-none"),C.classList.add("display-none"),C.style.display="none");class ce{constructor(){this.overlay=document.querySelector(".overlay")||this._createOverlay(),this.modal=null,this.closeButton=null,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=t=>this.closeEsc(t),this.overlayClickHandler=t=>this.closeBack(t)}_createOverlay(){const t=document.createElement("div");return t.className="overlay",t.style.display="none",t.style.zIndex=-1,document.body.appendChild(t),t}open(t){this.overlay||(this.overlay=this._createOverlay()),this.overlay.innerHTML=t,this.modal=this.overlay.querySelector(".modal-info")||this.overlay.querySelector(".modal-get-raiting")||document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.closeButton=this.overlay.querySelector(".modal-button-close")||document.querySelector(".modal-button-close"),this.overlay.style.zIndex=4,this.overlay.style.display="flex",this.modal&&this.modal.classList.remove("visually-hidden"),document.body.classList.add("no-scroll"),this.closeButton&&this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){if(!this.overlay)return;const t=this.overlay.querySelector(".modal-info")||this.overlay.querySelector(".modal-get-raiting")||document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting");this.overlay.style.display="none",this.overlay.style.zIndex=-1,t&&t.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton&&this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(t){t.key==="Escape"&&this.close()}closeBack(t){t.target===this.overlay&&this.close()}}const _=new ce,l=class{static handleErrors(t){return async()=>{try{return await t()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(t,s){const o=await fetch(t,s);if(!o.ok){const n=await o.text().catch(()=>"");throw new Error(`HTTP ${o.status} ${o.statusText} | ${t} | ${n.slice(0,200)}`)}return(o.headers.get("content-type")||"").includes("application/json")?o.json():o.text()}async getQuotes(){return await l.handleErrors(async()=>await l.fetchJson(`${l.BASE_URL}/quote`))()}async getByFilterName(t){return await l.handleErrors(async()=>{const o=new URLSearchParams({...t});return await l.fetchJson(`${l.BASE_URL}/filters?${o}`)})()}async getByFilterCategory(t){return await l.handleErrors(async()=>{const o=new URLSearchParams({...t});return await l.fetchJson(`${l.BASE_URL}/exercises?${o}`)})()}async getOneExercises(t){return await l.handleErrors(async()=>await l.fetchJson(`${l.BASE_URL}/exercises/${t}`))()}async addExercisesRate(t,s){return await l.handleErrors(async()=>{const r={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await l.fetchJson(`${l.BASE_URL}/exercises/${t}/rating`,r)})()}async addSubscription(t){return await l.handleErrors(async()=>{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await l.fetchJson(`${l.BASE_URL}/subscription`,o)})()}};let v=l;$(v,"BASE_URL","https://your-energy.b.goit.study/api");const w=new v,m=class{open(){(!m.loaderEl||m.loaderEl.classList.contains("js-loader"))&&(m.loaderEl.style.display="block")}close(){m.loaderEl&&(m.loaderEl.style.display="none")}};let y=m;$(y,"loaderEl",document.querySelector(".js-loader"));const d=new y,E={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",ue);async function ue(){const e=localStorage.getItem("quote");if(e){const t=new Date().toDateString(),{date:s,quote:o,author:r}=JSON.parse(e);t!==s?k():(E.quoteText.innerHTML=o,E.quoteAuthor.innerHTML=r)}else k()}async function k(){d.open();const e=await w.getQuotes();d.close();const{author:t,quote:s}=e,o={author:t,quote:s,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(o)),E.quoteText.innerHTML=s,E.quoteAuthor.innerHTML=t}function de(){const e=document.createElement("button");e.className="scroll-up-button hidden";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 32 32"),t.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${c}#icon-arrow`),t.appendChild(s),e.appendChild(t),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?e.classList.remove("hidden"):e.classList.add("hidden")}),document.body.appendChild(e)}de();function me(e){if(e)return e[0].toUpperCase()+e.slice(1)}function M(e,t=0){const s=Number(e);return Number.isFinite(s)?s:t}function u(e,t="—"){if(e==null)return t;const s=String(e).trim();return s||t}function fe(e){const t=M(e,0),s=Math.floor(t),o=t-s,r=Math.round(o*100);let n='<div class="rating-container-not-cursore" data-rating="0">';for(let i=1;i<=s;i+=1)n+=`<span class="star-js selected" data-value="${i}">
      <svg class="exercises_btn_start_icon_modal star-js selected">
        <use xlink:href="${c}#icon-star"></use>
      </svg>
    </span>`;if(s<5&&r>0){const i=s+1;n+=`<span class="last-star-js" data-value="${i}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
        <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
        <defs>
          <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
            <stop offset="${100-r}%" stop-color="rgba(244, 244, 244, 0.20)" />
            <stop offset="${r}%" stop-color="#EEA10C" />
          </linearGradient>
        </defs>
      </svg>
    </span>`}const a=s+(s<5&&r>0?1:0);for(let i=a+1;i<=5;i+=1)n+=`<span class="star-js" data-value="${i}">
      <svg class="exercises_btn_start_icon_modal star-js">
        <use xlink:href="${c}#icon-star"></use>
      </svg>
    </span>`;return n+"</div>"}function ge(e){return e?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
      <span class="remote-favorites">Remove from favorites</span>
      <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
        <use href="${c}#icon-trash"></use>
      </svg>
    </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
    <span>Add to favorites</span>
    <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
      <use href="${c}#icon-heart"></use>
    </svg>
  </button>`}function he(e){const t=M(e==null?void 0:e.rating,0),s=Number.isFinite(t)?t.toFixed(1):"—";return`<div class="modal-info" data-id="${u(e==null?void 0:e._id,"")}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>

    <div class="modal-image-vrapper">
      <img loading="lazy" class="modal-img" src="${u(e==null?void 0:e.gifUrl,"")}" alt="${u(e==null?void 0:e.name,"exercise")}" />
    </div>

    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${me(u(e==null?void 0:e.name,""))}</h3>
        <div class="rating-modal-container-wrapper">
          <p>${s}</p>
          ${fe(t)}
        </div>
      </div>

      <hr class="modal-decoration-line" />

      <ul class="modal-table">
        <li><h4 class="title-collum">Target</h4><p class="data-collumn">${u(e==null?void 0:e.target)}</p></li>
        <li><h4 class="title-collum">Body Part</h4><p class="data-collumn">${u(e==null?void 0:e.bodyPart)}</p></li>
        <li><h4 class="title-collum">Equipment</h4><p class="data-collumn">${u(e==null?void 0:e.equipment)}</p></li>
        <li><h4 class="title-collum">Popular</h4><p class="data-collumn">${u(e==null?void 0:e.popularity)}</p></li>
        <li><h4 class="title-collum">Burned Calories</h4><p class="data-collumn">${u(e==null?void 0:e.burnedCalories,"")}/${u(e==null?void 0:e.time,"")} min</p></li>
      </ul>

      <hr class="modal-decoration-line" />

      <p class="about-exercise">${u(e==null?void 0:e.description,"")}</p>

      <div class="button-section-modal">
        <div class="refresh-button-js" data-favorite="${!!(e!=null&&e.favorite)}">
          ${ge(!!(e!=null&&e.favorite))}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>
    </div>
  </div>`}function pe(e){return`<div class="modal-get-raiting" data-id="${u(e,"")}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>

    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>

        <div class="rating-container-js rating-container" data-rating="" data-id="">
          <p class="user-rating-js">0</p>
          ${[1,2,3,4,5].map(t=>`
            <span class="star-js" data-value="${t}">
              <svg class="exercises_btn_start_icon_rating star-js" width="15" height="15">
                <use xlink:href="${c}#icon-star"></use>
              </svg>
            </span>
          `).join("")}
        </div>

        <form class="form raiting-form">
          <label class="raiting-form-field">
            <input type="Email" class="raiting-form-field-input" name="user_email" placeholder="Email" required />
          </label>

          <label class="form-comment">
            <textarea class="raiting-form-field-comment" name="user_comment" placeholder="Your comment"></textarea>
          </label>

          <button class="raiting-form-submit" type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>`}function ve(){const e=document.querySelector(".rating-container-js"),t=e.querySelectorAll(".exercises_btn_start_icon_rating");let s=e.querySelector(".user-rating-js");t.forEach((a,i)=>{a.addEventListener("mouseover",()=>o(i)),a.addEventListener("mouseout",r),a.addEventListener("click",()=>n(i+1))});function o(a){r();for(let i=0;i<=a;i++)t[i].classList.add("hovered"),s.textContent=`${i+1}`}function r(){t.forEach(a=>{const i=e.dataset.rating;a.classList.remove("hovered"),s.textContent=`${i||0}`})}function n(a){e.setAttribute("data-rating",a),t.forEach((i,L)=>{L+1<=a?i.classList.add("selected"):i.classList.remove("selected")})}}let f=[];const h=JSON.parse(localStorage.getItem("favorites"));h!=null&&h.length&&f.push(...h);function ye(e){W(e),f.push(e),localStorage.setItem("favorites",JSON.stringify(f))}const N=e=>{ee(e),f=f.filter(t=>t._id!==e),localStorage.setItem("favorites",JSON.stringify([...f]))};p.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class be{error(t){p.error({title:"Error",message:t})}success(t){p.success({title:"OK",message:t})}info(t){p.info({title:"Info",message:t})}}const S=new be,_e=document.querySelector(".filter-list-js");let I,x,O;async function Ee(e){e.preventDefault();const t=document.querySelector(".modal-get-raiting").dataset.id,o=document.querySelector(".rating-container-js").dataset.rating,r=document.querySelector(".raiting-form-field-input").value,n=document.querySelector(".raiting-form-field-comment").value,a={rate:Number(o),email:r,review:n};d.open();const i=await w.addExercisesRate(t,a);d.close(),i.message?S.error(`${i.message}`):(S.success(`Thank you for your mark - ${a.rate} for ${i.name}`),_.close())}async function Se(){const e=document.querySelector(".modal-info").dataset.id;_.close(),_.open(pe(e)),ve(),O=document.querySelector(".raiting-form"),O.addEventListener("submit",Ee)}async function we(e){const t=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;let r=window.location.href.toString().slice(-14);if(t.dataset.favorite==="false"){t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${c}#icon-trash"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="true",d.open();let n=await w.getOneExercises(s);d.close(),ye(n),r==="favorites.html"&&b()}else t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${c}#icon-heart"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="false",N(s),r==="favorites.html"&&b()}function Le(e){var r,n,a;const t=e.target;if(t.classList.contains("favourites_btn_trash_icon")){const i=t.dataset.id||((n=(r=t.closest("[data-id]"))==null?void 0:r.dataset)==null?void 0:n.id);if(!i)return;N(i),b();return}const s=t.closest("[data-id]"),o=(a=s==null?void 0:s.dataset)==null?void 0:a.id;o&&(t.classList.contains("favourites_btn_workout")||$e(o))}_e.addEventListener("click",Le);const $e=async e=>{if(!e)return;let t;try{d.open(),t=await w.getOneExercises(e)}catch(o){S.error((o==null?void 0:o.message)||String(o));return}finally{d.close()}if(!t){S.error("Exercise not found or request failed");return}let s=!1;try{const o=localStorage.getItem("favorites"),r=o?JSON.parse(o):[];s=Array.isArray(r)&&r.some(n=>(n==null?void 0:n._id)===e)}catch{s=!1}t.favorite=s,_.open(he(t)),x=document.querySelector(".refresh-button-js"),I=document.querySelector(".add-rating"),I&&I.addEventListener("click",Se),x&&x.addEventListener("click",we)};export{g as a,me as c,w as f,d as l,S as m,c as s};
//# sourceMappingURL=exercises-right-part-filter-ce74f0e1.js.map
