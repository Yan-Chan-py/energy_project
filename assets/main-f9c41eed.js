var ce=Object.defineProperty;var ue=(e,t,s)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var B=(e,t,s)=>(ue(e,typeof t!="symbol"?t+"":t,s),s);import{i as de,g as me,a as fe,d as ge,b as Z,c as pe,e as he,s as ve,f as S}from"./vendor-295897c2.js";function ye(){document.querySelector(".filter-list-js").classList.add("hidden-form");const t=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",t.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const d="/energy_project/assets/sprite-c2a9f1af.svg",v=(e,t)=>e.length<=t?e:`${e.slice(0,t)}...`;function _e(e){const t=document.querySelector(".filter-list-js");t.classList.remove("hidden-form"),e.length>6?t.classList.add("scroll"):t.classList.remove("scroll");const s=e.map(({_id:i,target:o,name:r,bodyPart:a,burnedCalories:n,time:p})=>`
  <li class="favourites_list_item" id=${i}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${v(o,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash_icon favourites_btn_trash" data-id=${i}>
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash" data-id=${i}>
            <use class="favourites_btn_trash_icon" href="${d}#icon-trash" data-id=${i}></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${i}>
          <p class="favourites_btn_start_text" data-id=${i}>start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow" data-id=${i}>
            <use href="${d}#icon-arrow" data-id=${i}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${d}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${v(r,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${n}/${p}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${v(a,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${v(o,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");t.innerHTML=s}const be={apiKey:"AIzaSyCHjn7hmADqXOnoaTT-9Y2DPmibHk8NRXs",authDomain:"energy-project-85414.firebaseapp.com",projectId:"energy-project-85414",storageBucket:"energy-project-85414.firebasestorage.app",messagingSenderId:"254845757433",appId:"1:254845757433:web:1f1c887239cdf1eff37f28",measurementId:"G-1L4V3S7H1N"};console.log("Усі змінні середовища:",{VITE_FIREBASE_API_KEY:"AIzaSyCHjn7hmADqXOnoaTT-9Y2DPmibHk8NRXs",VITE_FIREBASE_AUTH_DOMAIN:"energy-project-85414.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"energy-project-85414",VITE_FIREBASE_STORAGE_BUCKET:"energy-project-85414.firebasestorage.app",VITE_FIREBASE_MESSAGING_SENDER_ID:"254845757433",VITE_FIREBASE_APP_ID:"1:254845757433:web:1f1c887239cdf1eff37f28",VITE_FIREBASE_MEASUREMENT_ID:"G-1L4V3S7H1N",BASE_URL:"/energy_project/",MODE:"production",DEV:!1,PROD:!0});const W=de(be),Se=me(W),R=fe(W),Ee=async e=>{const t=Se.currentUser;if(t)try{ve(Z(R,t.email,e._id),e)}catch(s){console.log(s.message)}},we=async e=>{const t=localStorage.getItem("user");if(t)try{ge(Z(R,t,e))}catch(s){console.log(s.message)}},Le=async()=>{const e=localStorage.getItem("user"),t=[];if(!e)return;(await pe(he(R,e))).forEach(i=>{t.push(i.data())}),localStorage.setItem("favorites",JSON.stringify(t))};function L(){Le();const e=JSON.parse(localStorage.getItem("favorites"));if(!(e!=null&&e.length)){ye();return}_e(e)}const D=document.getElementById("home"),P=document.getElementById("favorites"),U=document.getElementById("home-text"),J=document.getElementById("favorites-text");document.getElementById("navigation");const xe=window.location.href.toString();let $e=xe.slice(-14);const qe=()=>{$e==="favorites.html"?(D.classList.remove("active"),U.classList.remove("black"),P.classList.add("active"),J.classList.add("black"),L()):(D.classList.add("active"),U.classList.add("black"),P.classList.remove("active"),J.classList.remove("black"))};qe();document.getElementById("burger-button");const Te=document.getElementById("burger");document.getElementById("burger-button-close");const Ie=e=>{e.key==="Escape"&&Te.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};document.addEventListener("keydown",Ie);const z=document.getElementById("sign-in"),Ce=document.getElementById("sign-out"),Be=document.getElementById("user");Be.innerHTML=localStorage.getItem("user");window.location.href.toString();localStorage.getItem("user")&&(Ce.classList.remove("display-none"),z.classList.add("display-none"),z.style.display="none");const l=class{static handleErrors(t){return async()=>{try{return await t()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(t,s){const i=await fetch(t,s);if(!i.ok){const r=await i.text().catch(()=>"");throw new Error(`HTTP ${i.status} ${i.statusText} | ${t} | ${r.slice(0,200)}`)}return(i.headers.get("content-type")||"").includes("application/json")?i.json():i.text()}async getQuotes(){return await l.handleErrors(async()=>await l.fetchJson(`${l.BASE_URL}/quote`))()}async getByFilterName(t){return await l.handleErrors(async()=>{const i=new URLSearchParams({...t});return await l.fetchJson(`${l.BASE_URL}/filters?${i}`)})()}async getByFilterCategory(t){return await l.handleErrors(async()=>{const i=new URLSearchParams({...t});return await l.fetchJson(`${l.BASE_URL}/exercises?${i}`)})()}async getOneExercises(t){return await l.handleErrors(async()=>await l.fetchJson(`${l.BASE_URL}/exercises/${t}`))()}async addExercisesRate(t,s){return await l.handleErrors(async()=>{const o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await l.fetchJson(`${l.BASE_URL}/exercises/${t}/rating`,o)})()}async addSubscription(t){return await l.handleErrors(async()=>{const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await l.fetchJson(`${l.BASE_URL}/subscription`,i)})()}};let E=l;B(E,"BASE_URL","https://your-energy.b.goit.study/api");const g=new E,h=class{open(){(!h.loaderEl||h.loaderEl.classList.contains("js-loader"))&&(h.loaderEl.style.display="block")}close(){h.loaderEl&&(h.loaderEl.style.display="none")}};let w=h;B(w,"loaderEl",document.querySelector(".js-loader"));const c=new w;S.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class ke{error(t){S.error({title:"Error",message:t})}success(t){S.success({title:"OK",message:t})}info(t){S.info({title:"Info",message:t})}}const m=new ke;function M(e){if(e)return e[0].toUpperCase()+e.slice(1)}const y=document.querySelector(".wrap-button"),x=document.querySelector(".muscles-list"),V=document.querySelector(".pagination-numbers"),G=document.querySelector(".title-exercises");y&&y.addEventListener("click",Ne);const K=()=>{ee({filter:"Muscles",page:1,limit:12})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",K,{once:!0}):K();async function Ne(e){e.preventDefault(),G&&(G.textContent="Exercises");const t=e.target.closest("button[data-name]");if(!t||!(y!=null&&y.contains(t)))return;y.querySelectorAll("button").forEach(r=>r.classList.remove("btn-filter-active")),t.classList.add("btn-filter-active");const o={filter:t.dataset.name,page:1,limit:12};x&&(x.innerHTML=""),await ee(o)}async function ee(e){var t,s,i;(t=document.querySelector(".filter-list-js"))==null||t.classList.remove("exercises_list"),(s=document.querySelector(".form-js"))==null||s.classList.add("hidden-form");try{c.open();const o=await g.getByFilterName(e),r=(o==null?void 0:o.results)??[];if(!r.length){m.error("Sorry, we didn't find anything according to your request.");return}x&&(x.innerHTML=te(r));const a=(o==null?void 0:o.totalPages)??1;localStorage.setItem("infoRequest",JSON.stringify({totalPages:a,categoryName:e.filter})),(i=document.querySelector(".filter-list-js"))==null||i.classList.add("muscles-list"),V&&(V.innerHTML=""),H(a,e),I(1)}catch(o){m.error((o==null?void 0:o.message)||String(o))}finally{c.close()}}function te(e){return e.map(({filter:t,name:s,imgURL:i})=>{let o=(t||"").toLocaleLowerCase().replaceAll(" ","");return o==="bodyparts"&&(o="bodypart"),`
        <li class="muscles-item" data-name="${s}" data-filter="${o}">
          <a href="" class="muscles-link" data-alt="${s}">
            <img loading="lazy" class="muscles-image" src="${i}" alt="${s}" width="290" height="242">
            <button class="muscles-box-menu" type="button">
              <h3 class="muscles-small-title">${M(s)}</h3>
              <p class="muscles-text">${t}</p>
            </button>
          </a>
        </li>
      `}).join("")}const A=document.querySelector(".pagination-numbers"),je=document.querySelector(".muscles-list");let $=1;try{A.addEventListener("click",Ae),A.addEventListener("click",O)}catch(e){console.log(e)}let se;async function Ae(e){const t={...se,page:e.target.textContent};if(e.target.nodeName==="BUTTON"&&t.page!==$){if(t.filter){c.open();const s=await g.getByFilterName(t);c.close();const i=s.results;je.innerHTML=te(i)}else{c.open();const s=await g.getByFilterCategory(t);c.close(),F(s)}$=t.page,O()}}const Re=e=>{const t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),A.appendChild(t)};function H(e,t){if(se=t,e!==1)for(let s=1;s<=e;s++)Re(s)}function O(){document.querySelectorAll(".pagination-number").forEach(e=>{const t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",()=>{I(t)})})}function I(e){$=e,O(),document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))===$&&t.classList.add("active")})}const Me=document.querySelector(".pagination-numbers"),q=document.querySelector(".filter-list-js"),He=document.querySelector(".title-exercises");q.addEventListener("click",Oe);async function Oe(e){var a,n,p;e.preventDefault();const t=e.target,s=t.closest("[data-filter]");if(!s)return;const i=s.dataset.filter;let o=null;if(t.nodeName==="IMG")o=t.alt;else{const u=t.closest("[data-alt]");o=((a=u==null?void 0:u.dataset)==null?void 0:a.alt)||null}if(!i||!o)return;localStorage.setItem("infoRequest",JSON.stringify({filter:i,categoryName:o})),(n=document.querySelector(".form-js"))==null||n.classList.remove("hidden-form");const r={[i]:o,page:1,limit:10};He.innerHTML=`Exercises / <span class="search-target" id="target-js">${M(o)}</span>`;try{c.open();const u=await g.getByFilterCategory(r);if((p=u==null?void 0:u.results)!=null&&p.length){q.classList.add("exercises_list"),q.classList.remove("muscles-list"),F(u),Me.innerHTML="";const{totalPages:C}=u;H(C,r),I(1)}else m.info("Oops. please, try other category this list empty :(")}catch(u){m.error((u==null?void 0:u.message)||String(u))}finally{c.close()}}function F(e){var s;if(!((s=e==null?void 0:e.results)!=null&&s.length))return;const t=e.results.map(({_id:i,target:o,rating:r,name:a,burnedCalories:n,time:p,bodyPart:u})=>{const C=Number.isFinite(Number(r))?Number(r).toFixed(1):"—",ae=(o==null?void 0:o.toString().length)>8?o.slice(0,8)+"...":o,le=(a==null?void 0:a.toString().length)>20?a.slice(0,20)+"...":a;return`
      <li class="exercises_list_item" id="${i}">
        <div class="exercises_list_item_up">
          <div class="exercises_list_item_up_left">
            <div class="exercises_workout">${ae}</div>

            <p class="exercises_rating">${C}</p>

            <div class="rating-container-not-cursore">
              <svg class="exercises_start_icon" width="56" height="18" data-id="${i}">
                <use xlink:href="${d}#icon-star" data-id="${i}"></use>
              </svg>
            </div>
          </div>

          <div class="exercises_list_item_up_right">
            <button class="exercises_btn_start exercises_btn_start_text" data-id="${i}">
              Start
              <div class="arrow-container">
                <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id="${i}">
                  <use xlink:href="${d}#icon-arrow" data-id="${i}"></use>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div class="exercises_list_item_middle">
          <div class="exercises_list_item_middle_icon">
            <svg class="exercises_list_item_middle_icon_svg" width="24" height="24">
              <use xlink:href="${d}#icon-run-man"></use>
            </svg>
          </div>

          <h3 class="exercises_list_item_middle_title" id="name">${le}</h3>
        </div>

        <div class="exercises_list_item_bottom">
          <ul class="exercises_list_item_bottom_list">
            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Burned calories:
                <span>${n??""} / ${p??"your wish"} min</span>
              </p>
            </li>

            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Body part: <span>${v(u,5)}</span>
              </p>
            </li>

            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Target: <span>${v(o,7)}</span>
              </p>
            </li>
          </ul>
        </div>
      </li>`}).join("");q.innerHTML=t}const ie=document.querySelector(".form-js"),X=document.querySelector(".pagination-numbers");ie.addEventListener("submit",Fe);async function Fe(e){var s;e.preventDefault();const t=e.target.elements.search.value.trim().toLowerCase();if(t)try{c.open();const i={page:1,limit:100},o=await g.getByFilterCategory(i);if(!((s=o==null?void 0:o.results)!=null&&s.length)){m.info("Nothing was found");return}const r=o.results.filter(n=>n.name.toLowerCase().includes(t));if(!r.length){m.info("Nothing was found for this query"),X.innerHTML="";return}const a={...o,results:r,totalPages:1};F(a),X.innerHTML="",H(1,i),I(1),ie.reset()}catch(i){console.log(i),m.error((i==null?void 0:i.message)||String(i))}finally{c.close()}}class De{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=null,this.closeButton=null,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=t=>this.closeEsc(t),this.overlayClickHandler=t=>this.closeBack(t)}open(t){var s,i;this.overlay||(this.overlay=document.querySelector(".overlay")),this.overlay&&(this.overlay.innerHTML=t,this.overlay.style.zIndex=4,this.overlay.style.display="flex",this.modal=this.overlay.querySelector(".modal-info")||this.overlay.querySelector(".modal-get-raiting"),(s=this.modal)==null||s.classList.remove("visually-hidden"),this.closeButton=this.overlay.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),(i=this.closeButton)==null||i.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler))}close(){var t,s;this.overlay&&((t=this.modal)==null||t.classList.add("visually-hidden"),this.overlay.innerHTML="",this.overlay.style.display="none",this.overlay.style.zIndex=-1,document.body.classList.remove("no-scroll"),(s=this.closeButton)==null||s.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler),this.modal=null,this.closeButton=null)}closeEsc(t){t.key==="Escape"&&this.close()}closeBack(t){t.target===this.overlay&&this.close()}}const T=new De,oe=document.querySelector("#subscribe-form"),k=oe.querySelector("#email");oe.addEventListener("submit",Pe);async function Pe(e){e.preventDefault();const{value:t}=k;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)){m.info("Enter the following sample email - 'test@gmail.com'"),k.value="";return}try{c.open();const i=await g.addSubscription({email:t});c.close(),m.success(i.message)}catch(i){console.log(i)}finally{k.value=""}}function Ue(){return{quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")}}async function Y(){const{quoteText:e,quoteAuthor:t}=Ue();if(!e||!t)return;const s=localStorage.getItem("quote"),i=new Date().toDateString();if(s)try{const o=JSON.parse(s);if((o==null?void 0:o.date)===i&&(o!=null&&o.quote)){e.textContent=o.quote??"",t.textContent=o.author??"";return}}catch{}await Je(e,t)}async function Je(e,t){try{c.open();const s=await g.getQuotes();if(!s)return;const{author:i,quote:o}=s;localStorage.setItem("quote",JSON.stringify({author:i??"",quote:o??"",date:new Date().toDateString()})),e.textContent=o??"",t.textContent=i??""}finally{c.close()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Y,{once:!0}):Y();function ze(){const e=document.createElement("button");e.className="scroll-up-button hidden";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 32 32"),t.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${d}#icon-arrow`),t.appendChild(s),e.appendChild(t),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?e.classList.remove("hidden"):e.classList.add("hidden")}),document.body.appendChild(e)}ze();function ne(e,t=0){const s=Number(e);return Number.isFinite(s)?s:t}function f(e,t="—"){if(e==null)return t;const s=String(e).trim();return s||t}function Ve(e){const t=ne(e,0),s=Math.floor(t),i=t-s,o=Math.round(i*100);let r='<div class="rating-container-not-cursore" data-rating="0">';for(let n=1;n<=s;n+=1)r+=`<span class="star-js selected" data-value="${n}">
      <svg class="exercises_btn_start_icon_modal star-js selected">
        <use xlink:href="${d}#icon-star"></use>
      </svg>
    </span>`;if(s<5&&o>0){const n=s+1;r+=`<span class="last-star-js" data-value="${n}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
        <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
        <defs>
          <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
            <stop offset="${100-o}%" stop-color="rgba(244, 244, 244, 0.20)" />
            <stop offset="${o}%" stop-color="#EEA10C" />
          </linearGradient>
        </defs>
      </svg>
    </span>`}const a=s+(s<5&&o>0?1:0);for(let n=a+1;n<=5;n+=1)r+=`<span class="star-js" data-value="${n}">
      <svg class="exercises_btn_start_icon_modal star-js">
        <use xlink:href="${d}#icon-star"></use>
      </svg>
    </span>`;return r+"</div>"}function Ge(e){return e?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
      <span class="remote-favorites">Remove from favorites</span>
      <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
        <use href="${d}#icon-trash"></use>
      </svg>
    </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
    <span>Add to favorites</span>
    <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
      <use href="${d}#icon-heart"></use>
    </svg>
  </button>`}function Ke(e){const t=ne(e==null?void 0:e.rating,0),s=Number.isFinite(t)?t.toFixed(1):"—";return`<div class="modal-info" data-id="${f(e==null?void 0:e._id,"")}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${d}#icon-close"></use>
      </svg>
    </button>

    <div class="modal-image-vrapper">
      <img loading="lazy" class="modal-img" src="${f(e==null?void 0:e.gifUrl,"")}" alt="${f(e==null?void 0:e.name,"exercise")}" />
    </div>

    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${M(f(e==null?void 0:e.name,""))}</h3>
        <div class="rating-modal-container-wrapper">
          <p>${s}</p>
          ${Ve(t)}
        </div>
      </div>

      <hr class="modal-decoration-line" />

      <ul class="modal-table">
        <li><h4 class="title-collum">Target</h4><p class="data-collumn">${f(e==null?void 0:e.target)}</p></li>
        <li><h4 class="title-collum">Body Part</h4><p class="data-collumn">${f(e==null?void 0:e.bodyPart)}</p></li>
        <li><h4 class="title-collum">Equipment</h4><p class="data-collumn">${f(e==null?void 0:e.equipment)}</p></li>
        <li><h4 class="title-collum">Popular</h4><p class="data-collumn">${f(e==null?void 0:e.popularity)}</p></li>
        <li><h4 class="title-collum">Burned Calories</h4><p class="data-collumn">${f(e==null?void 0:e.burnedCalories,"")}/${f(e==null?void 0:e.time,"")} min</p></li>
      </ul>

      <hr class="modal-decoration-line" />

      <p class="about-exercise">${f(e==null?void 0:e.description,"")}</p>

      <div class="button-section-modal">
        <div class="refresh-button-js" data-favorite="${!!(e!=null&&e.favorite)}">
          ${Ge(!!(e!=null&&e.favorite))}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>
    </div>
  </div>`}function Xe(e){return`<div class="modal-get-raiting" data-id="${f(e,"")}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${d}#icon-close"></use>
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
                <use xlink:href="${d}#icon-star"></use>
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
  </div>`}function Ye(){const e=document.querySelector(".rating-container-js"),t=e.querySelectorAll(".exercises_btn_start_icon_rating");let s=e.querySelector(".user-rating-js");t.forEach((a,n)=>{a.addEventListener("mouseover",()=>i(n)),a.addEventListener("mouseout",o),a.addEventListener("click",()=>r(n+1))});function i(a){o();for(let n=0;n<=a;n++)t[n].classList.add("hovered"),s.textContent=`${n+1}`}function o(){t.forEach(a=>{const n=e.dataset.rating;a.classList.remove("hovered"),s.textContent=`${n||0}`})}function r(a){e.setAttribute("data-rating",a),t.forEach((n,p)=>{p+1<=a?n.classList.add("selected"):n.classList.remove("selected")})}}let _=[];const b=JSON.parse(localStorage.getItem("favorites"));b!=null&&b.length&&_.push(...b);function Qe(e){Ee(e),_.push(e),localStorage.setItem("favorites",JSON.stringify(_))}const re=e=>{we(e),_=_.filter(t=>t._id!==e),localStorage.setItem("favorites",JSON.stringify([..._]))},Ze=document.querySelector(".filter-list-js");let N,j,Q;async function We(e){e.preventDefault();const t=document.querySelector(".modal-get-raiting").dataset.id,i=document.querySelector(".rating-container-js").dataset.rating,o=document.querySelector(".raiting-form-field-input").value,r=document.querySelector(".raiting-form-field-comment").value,a={rate:Number(i),email:o,review:r};c.open();const n=await g.addExercisesRate(t,a);c.close(),n.message?m.error(`${n.message}`):(m.success(`Thank you for your mark - ${a.rate} for ${n.name}`),T.close())}async function et(){const e=document.querySelector(".modal-info").dataset.id;T.close(),T.open(Xe(e)),Ye(),Q=document.querySelector(".raiting-form"),Q.addEventListener("submit",We)}async function tt(e){const t=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;let o=window.location.href.toString().slice(-14);if(t.dataset.favorite==="false"){t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${d}#icon-trash"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="true",c.open();let r=await g.getOneExercises(s);c.close(),Qe(r),o==="favorites.html"&&L()}else t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${d}#icon-heart"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="false",re(s),o==="favorites.html"&&L()}function st(e){var o,r,a;const t=e.target;if(t.classList.contains("favourites_btn_trash_icon")){const n=t.dataset.id||((r=(o=t.closest("[data-id]"))==null?void 0:o.dataset)==null?void 0:r.id);if(!n)return;re(n),L();return}const s=t.closest("[data-id]"),i=(a=s==null?void 0:s.dataset)==null?void 0:a.id;i&&(t.classList.contains("favourites_btn_workout")||it(i))}Ze.addEventListener("click",st);const it=async e=>{if(!e)return;let t;try{c.open(),t=await g.getOneExercises(e)}catch(i){m.error((i==null?void 0:i.message)||String(i));return}finally{c.close()}if(!t){m.error("Exercise not found or request failed");return}let s=!1;try{const i=localStorage.getItem("favorites"),o=i?JSON.parse(i):[];s=Array.isArray(o)&&o.some(r=>(r==null?void 0:r._id)===e)}catch{s=!1}t.favorite=s,T.open(Ke(t)),j=document.querySelector(".refresh-button-js"),N=document.querySelector(".add-rating"),N&&N.addEventListener("click",et),j&&j.addEventListener("click",tt)};
//# sourceMappingURL=main-f9c41eed.js.map
