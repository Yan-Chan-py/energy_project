import{l,f as d,m as c,c as $,s as h,a as w}from"./exercises-right-part-filter-fd54e1ce.js";import"./vendor-295897c2.js";const A=document.querySelector(".wrap-button"),T=document.querySelector(".muscles-list"),B=document.querySelector(".pagination-numbers"),P=document.querySelector(".title-exercises");A.addEventListener("click",F);document.addEventListener("DOMContentLoaded",()=>{E({filter:"Muscles",page:1,limit:12})});function j(){var t=window.scrollY||window.pageYOffset||document.documentElement.scrollTop,e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return t+i>=e}async function F(t){t.preventDefault(),P.innerHTML="Exercises";const{target:e,currentTarget:i}=t;if(e.nodeName!=="BUTTON")return;const s=e.dataset.name;e.classList.contains("btn-filter")&&[...i.children].forEach(a=>{a.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const n={filter:s,page:1,limit:12};T.innerHTML="",E(n)}async function E(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{l.open();const e=await d.getByFilterName(t);l.close();const i=e.results;if(!e||i.length===0){c.error("Sorry, we didn't find anything according to your request.");return}T.insertAdjacentHTML("beforeend",b(i)),window.addEventListener("scroll",function(){j()&&(console.log("Сторінка завантажилась до кінця!"),b(i))});const{totalPages:s}=e,n=JSON.stringify({totalPages:s,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),B.innerHTML="",x(s,t),p(1)}catch(e){console.log(e.message)}}function b(t){return t.map(({filter:e,name:i,imgURL:s})=>{let n=e.toLocaleLowerCase().replaceAll(" ","");return n==="bodyparts"&&(n="bodypart"),`
      <li class="muscles-item" data-name=${i} data-filter=${n}>
      <a href="" class="muscles-link" data-alt="${i}">
        <img loading="lazy" class="muscles-image" src="${s}" alt="${i}" width="290" height="242" >
        <button class="muscles-box-menu">
          <h3 class="muscles-small-title">${$(i)}</h3>
          <p class="muscles-text">${e}</p>
        </button>
      </a>
    </li>
    `}).join("")}const v=document.querySelector(".pagination-numbers"),I=document.querySelector(".muscles-list");let g=1;try{v.addEventListener("click",O),v.addEventListener("click",L)}catch(t){console.log(t)}let q;async function O(t){const e={...q,page:t.target.textContent};if(t.target.nodeName==="BUTTON"&&e.page!==g){if(e.filter){l.open();const i=await d.getByFilterName(e);l.close();const s=i.results;I.innerHTML=b(s)}else{l.open();const i=await d.getByFilterCategory(e);l.close(),S(i)}g=e.page,L()}}const R=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),v.appendChild(e)};function x(t,e){if(q=e,t!==1)for(let i=1;i<=t;i++)R(i)}function L(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{p(e)})})}function p(t){g=t,L(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))===g&&e.classList.add("active")})}const D=document.querySelector(".pagination-numbers"),f=document.querySelector(".filter-list-js"),z=document.querySelector(".title-exercises");f.addEventListener("click",J);async function J(t){var a,u,m;t.preventDefault();const e=t.target,i=e.closest("[data-filter]");if(!i)return;const s=i.dataset.filter;let n=null;if(e.nodeName==="IMG")n=e.alt;else{const r=e.closest("[data-alt]");n=((a=r==null?void 0:r.dataset)==null?void 0:a.alt)||null}if(!s||!n)return;localStorage.setItem("infoRequest",JSON.stringify({filter:s,categoryName:n})),(u=document.querySelector(".form-js"))==null||u.classList.remove("hidden-form");const o={[s]:n,page:1,limit:10};z.innerHTML=`Exercises / <span class="search-target" id="target-js">${$(n)}</span>`;try{l.open();const r=await d.getByFilterCategory(o);if((m=r==null?void 0:r.results)!=null&&m.length){f.classList.add("exercises_list"),f.classList.remove("muscles-list"),S(r),D.innerHTML="";const{totalPages:_}=r;x(_,o),p(1)}else c.info("Oops. please, try other category this list empty :(")}catch(r){c.error((r==null?void 0:r.message)||String(r))}finally{l.close()}}function S(t){var i;if(!((i=t==null?void 0:t.results)!=null&&i.length))return;const e=t.results.map(({_id:s,target:n,rating:o,name:a,burnedCalories:u,time:m,bodyPart:r})=>{const _=Number.isFinite(Number(o))?Number(o).toFixed(1):"—",k=(n==null?void 0:n.toString().length)>8?n.slice(0,8)+"...":n,M=(a==null?void 0:a.toString().length)>20?a.slice(0,20)+"...":a;return`
      <li class="exercises_list_item" id="${s}">
        <div class="exercises_list_item_up">
          <div class="exercises_list_item_up_left">
            <div class="exercises_workout">${k}</div>

            <p class="exercises_rating">${_}</p>

            <div class="rating-container-not-cursore">
              <svg class="exercises_start_icon" width="56" height="18" data-id="${s}">
                <use xlink:href="${h}#icon-star" data-id="${s}"></use>
              </svg>
            </div>
          </div>

          <div class="exercises_list_item_up_right">
            <button class="exercises_btn_start exercises_btn_start_text" data-id="${s}">
              Start
              <div class="arrow-container">
                <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id="${s}">
                  <use xlink:href="${h}#icon-arrow" data-id="${s}"></use>
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

          <h3 class="exercises_list_item_middle_title" id="name">${M}</h3>
        </div>

        <div class="exercises_list_item_bottom">
          <ul class="exercises_list_item_bottom_list">
            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Burned calories:
                <span>${u??""} / ${m??"your wish"} min</span>
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
      </li>`}).join("");f.innerHTML=e}const H=document.querySelector(".form-js"),N=document.querySelector(".pagination-numbers");H.addEventListener("submit",U);async function U(t){var i;t.preventDefault();const e=t.target.elements.search.value.trim().toLowerCase();if(e)try{l.open();const s={page:1,limit:100},n=await d.getByFilterCategory(s);if(!((i=n==null?void 0:n.results)!=null&&i.length)){c.info("Nothing was found");return}const o=n.results.filter(u=>u.name.toLowerCase().includes(e));if(!o.length){c.info("Nothing was found for this query"),N.innerHTML="";return}const a={...n,results:o,totalPages:1};S(a),N.innerHTML="",x(1,s),p(1),H.reset()}catch(s){console.log(s),c.error((s==null?void 0:s.message)||String(s))}finally{l.close()}}const C=document.querySelector("#subscribe-form"),y=C.querySelector("#email");C.addEventListener("submit",Y);async function Y(t){t.preventDefault();const{value:e}=y;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){c.info("Enter the following sample email - 'test@gmail.com'"),y.value="";return}try{l.open();const s=await d.addSubscription({email:e});l.close(),c.success(s.message)}catch(s){console.log(s)}finally{y.value=""}}
//# sourceMappingURL=main-4dd978b8.js.map
