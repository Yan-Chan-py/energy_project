import{l as o,f as c,m as u,c as N,s as h,a as w}from"./assets/exercises-right-part-filter-4053d5bd.js";import"./assets/vendor-295897c2.js";const M=document.querySelector(".wrap-button"),$=document.querySelector(".muscles-list"),A=document.querySelector(".pagination-numbers"),B=document.querySelector(".title-exercises");M.addEventListener("click",j);document.addEventListener("DOMContentLoaded",()=>{E({filter:"Muscles",page:1,limit:12})});function P(){var t=window.scrollY||window.pageYOffset||document.documentElement.scrollTop,e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),s=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return t+s>=e}async function j(t){t.preventDefault(),B.innerHTML="Exercises";const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const i=e.dataset.name;e.classList.contains("btn-filter")&&[...s.children].forEach(l=>{l.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const n={filter:i,page:1,limit:12};$.innerHTML="",E(n)}async function E(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{o.open();const e=await c.getByFilterName(t);o.close();const s=e.results;if(!e||s.length===0){u.error("Sorry, we didn't find anything according to your request.");return}$.insertAdjacentHTML("beforeend",b(s)),window.addEventListener("scroll",function(){P()&&(console.log("Сторінка завантажилась до кінця!"),b(s))});const{totalPages:i}=e,n=JSON.stringify({totalPages:i,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),A.innerHTML="",x(i,t),p(1)}catch(e){console.log(e.message)}}function b(t){return t.map(({filter:e,name:s,imgURL:i})=>{let n=e.toLocaleLowerCase().replaceAll(" ","");return n==="bodyparts"&&(n="bodypart"),`
      <li class="muscles-item" data-name=${s} data-filter=${n}>
      <a href="" class="muscles-link" data-alt="${s}">
        <img loading="lazy" class="muscles-image" src="${i}" alt="${s}" width="290" height="242" >
        <button class="muscles-box-menu">
          <h3 class="muscles-small-title">${N(s)}</h3>
          <p class="muscles-text">${e}</p>
        </button>
      </a>
    </li>
    `}).join("")}const v=document.querySelector(".pagination-numbers"),F=document.querySelector(".muscles-list");let g=1;try{v.addEventListener("click",I),v.addEventListener("click",L)}catch(t){console.log(t)}let T;async function I(t){const e={...T,page:t.target.textContent};if(t.target.nodeName==="BUTTON"&&e.page!==g){if(e.filter){o.open();const s=await c.getByFilterName(e);o.close();const i=s.results;F.innerHTML=b(i)}else{o.open();const s=await c.getByFilterCategory(e);o.close(),S(s)}g=e.page,L()}}const O=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),v.appendChild(e)};function x(t,e){if(T=e,t!==1)for(let s=1;s<=t;s++)O(s)}function L(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{p(e)})})}function p(t){g=t,L(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))===g&&e.classList.add("active")})}const R=document.querySelector(".pagination-numbers"),f=document.querySelector(".filter-list-js"),D=document.querySelector(".title-exercises");f.addEventListener("click",z);async function z(t){var l,d,m;t.preventDefault();const e=t.target,s=e.closest("[data-filter]");if(!s)return;const i=s.dataset.filter;let n=null;if(e.nodeName==="IMG")n=e.alt;else{const r=e.closest("[data-alt]");n=((l=r==null?void 0:r.dataset)==null?void 0:l.alt)||null}if(!i||!n)return;(d=document.querySelector(".form-js"))==null||d.classList.remove("hidden-form");const a={[i]:n,page:1,limit:10};D.innerHTML=`Exercises / <span class="search-target" id="target-js">${N(n)}</span>`;try{o.open();const r=await c.getByFilterCategory(a);if((m=r==null?void 0:r.results)!=null&&m.length){f.classList.add("exercises_list"),f.classList.remove("muscles-list"),S(r),R.innerHTML="";const{totalPages:_}=r;x(_,a),p(1)}else u.info("Oops. please, try other category this list empty :(")}catch(r){u.error((r==null?void 0:r.message)||String(r))}finally{o.close()}}function S(t){var s;if(!((s=t==null?void 0:t.results)!=null&&s.length))return;const e=t.results.map(({_id:i,target:n,rating:a,name:l,burnedCalories:d,time:m,bodyPart:r})=>{const _=Number.isFinite(Number(a))?Number(a).toFixed(1):"—",H=(n==null?void 0:n.toString().length)>8?n.slice(0,8)+"...":n,k=(l==null?void 0:l.toString().length)>20?l.slice(0,20)+"...":l;return`
      <li class="exercises_list_item" id="${i}">
        <div class="exercises_list_item_up">
          <div class="exercises_list_item_up_left">
            <div class="exercises_workout">${H}</div>

            <p class="exercises_rating">${_}</p>

            <div class="rating-container-not-cursore">
              <svg class="exercises_start_icon" width="56" height="18" data-id="${i}">
                <use xlink:href="${h}#icon-star" data-id="${i}"></use>
              </svg>
            </div>
          </div>

          <div class="exercises_list_item_up_right">
            <button class="exercises_btn_start exercises_btn_start_text" data-id="${i}">
              Start
              <div class="arrow-container">
                <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id="${i}">
                  <use xlink:href="${h}#icon-arrow" data-id="${i}"></use>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div class="exercises_list_item_middle">
          <div class="exercises_list_item_middle_icon">
            <svg class="exercises_list_item_middle_icon_svg" width="24" height="24">
              <use xlink:href="${h}#icon-run-man"></use>
            </svg>
          </div>

          <h3 class="exercises_list_item_middle_title" id="name">${k}</h3>
        </div>

        <div class="exercises_list_item_bottom">
          <ul class="exercises_list_item_bottom_list">
            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Burned calories:
                <span>${d??""} / ${m??"your wish"} min</span>
              </p>
            </li>

            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Body part: <span>${w(r,5)}</span>
              </p>
            </li>

            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Target: <span>${w(n,7)}</span>
              </p>
            </li>
          </ul>
        </div>
      </li>`}).join("");f.innerHTML=e}const q=document.querySelector(".form-js"),J=document.querySelector(".pagination-numbers");q.addEventListener("submit",U);async function U(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;let{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),i=s.toLocaleLowerCase().replaceAll(" ","");i==="bodyparts"&&(i="bodypart");const n={[i]:e,page:1,limit:10};try{o.open();const a=await c.getByFilterCategory(n);o.open(),a.results.length||u.info("Nothing was found for this query"),J.innerHTML="";const{totalPages:l}=a;x(l,n),p(1),q.reset(),S(a)}catch(a){console.log(a)}}const C=document.querySelector("#subscribe-form"),y=C.querySelector("#email");C.addEventListener("submit",Y);async function Y(t){t.preventDefault();const{value:e}=y;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){u.info("Enter the following sample email - 'test@gmail.com'"),y.value="";return}try{o.open();const i=await c.addSubscription({email:e});o.close(),u.success(i.message)}catch(i){console.log(i)}finally{y.value=""}}
//# sourceMappingURL=commonHelpers2.js.map
