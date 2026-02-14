var N=Object.defineProperty;var F=(e,t,s)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var L=(e,t,s)=>(F(e,typeof t!="symbol"?t+"":t,s),s);import{i as D,g as U,a as J,d as P,b as A,c as z,e as V,s as G,f as p}from"./vendor-295897c2.js";function K(){document.querySelector(".filter-list-js").classList.add("hidden-form");const t=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",t.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const l="/energy_project/assets/sprite-c2a9f1af.svg",h=(e,t)=>e.length<=t?e:`${e.slice(0,t)}...`;function X(e){const t=document.querySelector(".filter-list-js");t.classList.remove("hidden-form"),e.length>6?t.classList.add("scroll"):t.classList.remove("scroll");const s=e.map(({_id:o,target:n,name:i,bodyPart:a,burnedCalories:r,time:S})=>`
  <li class="favourites_list_item" id=${o}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${h(n,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash_icon favourites_btn_trash" data-id=${o}>
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash" data-id=${o}>
            <use class="favourites_btn_trash_icon" href="${l}#icon-trash" data-id=${o}></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${o}>
          <p class="favourites_btn_start_text" data-id=${o}>start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow" data-id=${o}>
            <use href="${l}#icon-arrow" data-id=${o}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${l}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${h(i,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${r}/${S}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${h(a,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${h(n,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");t.innerHTML=s}const Y={apiKey:"AIzaSyCHjn7hmADqXOnoaTT-9Y2DPmibHk8NRXs",authDomain:"energy-project-85414.firebaseapp.com",projectId:"energy-project-85414",storageBucket:"energy-project-85414.firebasestorage.app",messagingSenderId:"254845757433",appId:"1:254845757433:web:1f1c887239cdf1eff37f28",measurementId:"G-1L4V3S7H1N"};console.log("Усі змінні середовища:",{VITE_FIREBASE_API_KEY:"AIzaSyCHjn7hmADqXOnoaTT-9Y2DPmibHk8NRXs",VITE_FIREBASE_AUTH_DOMAIN:"energy-project-85414.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"energy-project-85414",VITE_FIREBASE_STORAGE_BUCKET:"energy-project-85414.firebasestorage.app",VITE_FIREBASE_MESSAGING_SENDER_ID:"254845757433",VITE_FIREBASE_APP_ID:"1:254845757433:web:1f1c887239cdf1eff37f28",VITE_FIREBASE_MEASUREMENT_ID:"G-1L4V3S7H1N",BASE_URL:"/energy_project/",MODE:"production",DEV:!1,PROD:!0});const H=D(Y),Q=U(H),I=J(H),Z=async e=>{const t=Q.currentUser;if(t)try{G(A(I,t.email,e._id),e)}catch(s){console.log(s.message)}},W=async e=>{const t=localStorage.getItem("user");if(t)try{P(A(I,t,e))}catch(s){console.log(s.message)}},ee=async()=>{const e=localStorage.getItem("user"),t=[];if(!e)return;(await z(V(I,e))).forEach(o=>{t.push(o.data())}),localStorage.setItem("favorites",JSON.stringify(t))};function _(){ee();const e=JSON.parse(localStorage.getItem("favorites"));if(!(e!=null&&e.length)){K();return}X(e)}const B=document.getElementById("home"),q=document.getElementById("favorites"),T=document.getElementById("home-text"),C=document.getElementById("favorites-text");document.getElementById("navigation");const te=window.location.href.toString();let se=te.slice(-14);const oe=()=>{se==="favorites.html"?(B.classList.remove("active"),T.classList.remove("black"),q.classList.add("active"),C.classList.add("black"),_()):(B.classList.add("active"),T.classList.add("black"),q.classList.remove("active"),C.classList.remove("black"))};oe();document.getElementById("burger-button");const ne=document.getElementById("burger");document.getElementById("burger-button-close");const re=e=>{e.key==="Escape"&&ne.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};document.addEventListener("keydown",re);const j=document.getElementById("sign-in"),ie=document.getElementById("sign-out"),ae=document.getElementById("user");ae.innerHTML=localStorage.getItem("user");window.location.href.toString();localStorage.getItem("user")&&(ie.classList.remove("display-none"),j.classList.add("display-none"),j.style.display="none");class ce{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=null,this.closeButton=null,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=t=>this.closeEsc(t),this.overlayClickHandler=t=>this.closeBack(t)}open(t){var s,o;this.overlay||(this.overlay=document.querySelector(".overlay")),this.overlay&&(this.overlay.innerHTML=t,this.overlay.style.zIndex=4,this.overlay.style.display="flex",this.modal=this.overlay.querySelector(".modal-info")||this.overlay.querySelector(".modal-get-raiting"),(s=this.modal)==null||s.classList.remove("visually-hidden"),this.closeButton=this.overlay.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),(o=this.closeButton)==null||o.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler))}close(){var t,s;this.overlay&&((t=this.modal)==null||t.classList.add("visually-hidden"),this.overlay.innerHTML="",this.overlay.style.display="none",this.overlay.style.zIndex=-1,document.body.classList.remove("no-scroll"),(s=this.closeButton)==null||s.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler),this.modal=null,this.closeButton=null)}closeEsc(t){t.key==="Escape"&&this.close()}closeBack(t){t.target===this.overlay&&this.close()}}const b=new ce,c=class{static handleErrors(t){return async()=>{try{return await t()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(t,s){const o=await fetch(t,s);if(!o.ok){const i=await o.text().catch(()=>"");throw new Error(`HTTP ${o.status} ${o.statusText} | ${t} | ${i.slice(0,200)}`)}return(o.headers.get("content-type")||"").includes("application/json")?o.json():o.text()}async getQuotes(){return await c.handleErrors(async()=>await c.fetchJson(`${c.BASE_URL}/quote`))()}async getByFilterName(t){return await c.handleErrors(async()=>{const o=new URLSearchParams({...t});return await c.fetchJson(`${c.BASE_URL}/filters?${o}`)})()}async getByFilterCategory(t){return await c.handleErrors(async()=>{const o=new URLSearchParams({...t});return await c.fetchJson(`${c.BASE_URL}/exercises?${o}`)})()}async getOneExercises(t){return await c.handleErrors(async()=>await c.fetchJson(`${c.BASE_URL}/exercises/${t}`))()}async addExercisesRate(t,s){return await c.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await c.fetchJson(`${c.BASE_URL}/exercises/${t}/rating`,n)})()}async addSubscription(t){return await c.handleErrors(async()=>{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await c.fetchJson(`${c.BASE_URL}/subscription`,o)})()}};let v=c;L(v,"BASE_URL","https://your-energy.b.goit.study/api");const w=new v,m=class{open(){(!m.loaderEl||m.loaderEl.classList.contains("js-loader"))&&(m.loaderEl.style.display="block")}close(){m.loaderEl&&(m.loaderEl.style.display="none")}};let y=m;L(y,"loaderEl",document.querySelector(".js-loader"));const d=new y;function le(){return{quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")}}async function R(){const{quoteText:e,quoteAuthor:t}=le();if(!e||!t)return;const s=localStorage.getItem("quote"),o=new Date().toDateString();if(s)try{const n=JSON.parse(s);if((n==null?void 0:n.date)===o&&(n!=null&&n.quote)){e.textContent=n.quote??"",t.textContent=n.author??"";return}}catch{}await ue(e,t)}async function ue(e,t){try{d.open();const s=await w.getQuotes();if(!s)return;const{author:o,quote:n}=s;localStorage.setItem("quote",JSON.stringify({author:o??"",quote:n??"",date:new Date().toDateString()})),e.textContent=n??"",t.textContent=o??""}finally{d.close()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",R,{once:!0}):R();function de(){const e=document.createElement("button");e.className="scroll-up-button hidden";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 32 32"),t.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${l}#icon-arrow`),t.appendChild(s),e.appendChild(t),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?e.classList.remove("hidden"):e.classList.add("hidden")}),document.body.appendChild(e)}de();function me(e){if(e)return e[0].toUpperCase()+e.slice(1)}function M(e,t=0){const s=Number(e);return Number.isFinite(s)?s:t}function u(e,t="—"){if(e==null)return t;const s=String(e).trim();return s||t}function fe(e){const t=M(e,0),s=Math.floor(t),o=t-s,n=Math.round(o*100);let i='<div class="rating-container-not-cursore" data-rating="0">';for(let r=1;r<=s;r+=1)i+=`<span class="star-js selected" data-value="${r}">
      <svg class="exercises_btn_start_icon_modal star-js selected">
        <use xlink:href="${l}#icon-star"></use>
      </svg>
    </span>`;if(s<5&&n>0){const r=s+1;i+=`<span class="last-star-js" data-value="${r}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
        <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
        <defs>
          <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
            <stop offset="${100-n}%" stop-color="rgba(244, 244, 244, 0.20)" />
            <stop offset="${n}%" stop-color="#EEA10C" />
          </linearGradient>
        </defs>
      </svg>
    </span>`}const a=s+(s<5&&n>0?1:0);for(let r=a+1;r<=5;r+=1)i+=`<span class="star-js" data-value="${r}">
      <svg class="exercises_btn_start_icon_modal star-js">
        <use xlink:href="${l}#icon-star"></use>
      </svg>
    </span>`;return i+"</div>"}function he(e){return e?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
      <span class="remote-favorites">Remove from favorites</span>
      <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
        <use href="${l}#icon-trash"></use>
      </svg>
    </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
    <span>Add to favorites</span>
    <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
      <use href="${l}#icon-heart"></use>
    </svg>
  </button>`}function ge(e){const t=M(e==null?void 0:e.rating,0),s=Number.isFinite(t)?t.toFixed(1):"—";return`<div class="modal-info" data-id="${u(e==null?void 0:e._id,"")}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${l}#icon-close"></use>
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
          ${he(!!(e!=null&&e.favorite))}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>
    </div>
  </div>`}function pe(e){return`<div class="modal-get-raiting" data-id="${u(e,"")}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${l}#icon-close"></use>
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
                <use xlink:href="${l}#icon-star"></use>
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
  </div>`}function ve(){const e=document.querySelector(".rating-container-js"),t=e.querySelectorAll(".exercises_btn_start_icon_rating");let s=e.querySelector(".user-rating-js");t.forEach((a,r)=>{a.addEventListener("mouseover",()=>o(r)),a.addEventListener("mouseout",n),a.addEventListener("click",()=>i(r+1))});function o(a){n();for(let r=0;r<=a;r++)t[r].classList.add("hovered"),s.textContent=`${r+1}`}function n(){t.forEach(a=>{const r=e.dataset.rating;a.classList.remove("hovered"),s.textContent=`${r||0}`})}function i(a){e.setAttribute("data-rating",a),t.forEach((r,S)=>{S+1<=a?r.classList.add("selected"):r.classList.remove("selected")})}}let f=[];const g=JSON.parse(localStorage.getItem("favorites"));g!=null&&g.length&&f.push(...g);function ye(e){Z(e),f.push(e),localStorage.setItem("favorites",JSON.stringify(f))}const O=e=>{W(e),f=f.filter(t=>t._id!==e),localStorage.setItem("favorites",JSON.stringify([...f]))};p.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class _e{error(t){p.error({title:"Error",message:t})}success(t){p.success({title:"OK",message:t})}info(t){p.info({title:"Info",message:t})}}const E=new _e,be=document.querySelector(".filter-list-js");let $,x,k;async function Ee(e){e.preventDefault();const t=document.querySelector(".modal-get-raiting").dataset.id,o=document.querySelector(".rating-container-js").dataset.rating,n=document.querySelector(".raiting-form-field-input").value,i=document.querySelector(".raiting-form-field-comment").value,a={rate:Number(o),email:n,review:i};d.open();const r=await w.addExercisesRate(t,a);d.close(),r.message?E.error(`${r.message}`):(E.success(`Thank you for your mark - ${a.rate} for ${r.name}`),b.close())}async function we(){const e=document.querySelector(".modal-info").dataset.id;b.close(),b.open(pe(e)),ve(),k=document.querySelector(".raiting-form"),k.addEventListener("submit",Ee)}async function Se(e){const t=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;let n=window.location.href.toString().slice(-14);if(t.dataset.favorite==="false"){t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${l}#icon-trash"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="true",d.open();let i=await w.getOneExercises(s);d.close(),ye(i),n==="favorites.html"&&_()}else t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${l}#icon-heart"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="false",O(s),n==="favorites.html"&&_()}function Le(e){var n,i,a;const t=e.target;if(t.classList.contains("favourites_btn_trash_icon")){const r=t.dataset.id||((i=(n=t.closest("[data-id]"))==null?void 0:n.dataset)==null?void 0:i.id);if(!r)return;O(r),_();return}const s=t.closest("[data-id]"),o=(a=s==null?void 0:s.dataset)==null?void 0:a.id;o&&(t.classList.contains("favourites_btn_workout")||$e(o))}be.addEventListener("click",Le);const $e=async e=>{if(!e)return;let t;try{d.open(),t=await w.getOneExercises(e)}catch(o){E.error((o==null?void 0:o.message)||String(o));return}finally{d.close()}if(!t){E.error("Exercise not found or request failed");return}let s=!1;try{const o=localStorage.getItem("favorites"),n=o?JSON.parse(o):[];s=Array.isArray(n)&&n.some(i=>(i==null?void 0:i._id)===e)}catch{s=!1}t.favorite=s,b.open(ge(t)),x=document.querySelector(".refresh-button-js"),$=document.querySelector(".add-rating"),$&&$.addEventListener("click",we),x&&x.addEventListener("click",Se)};export{h as a,me as c,w as f,d as l,E as m,l as s};
//# sourceMappingURL=exercises-right-part-filter-1612d1ec.js.map
