import{l as c,f as d,m as o,c as E,s as b,a as N}from"./exercises-right-part-filter-1612d1ec.js";import"./vendor-295897c2.js";const m=document.querySelector(".wrap-button"),f=document.querySelector(".muscles-list"),q=document.querySelector(".pagination-numbers"),w=document.querySelector(".title-exercises");m&&m.addEventListener("click",j);const C=()=>{k({filter:"Muscles",page:1,limit:12})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",C,{once:!0}):C();async function j(t){t.preventDefault(),w&&(w.textContent="Exercises");const e=t.target.closest("button[data-name]");if(!e||!(m!=null&&m.contains(e)))return;m.querySelectorAll("button").forEach(r=>r.classList.remove("btn-filter-active")),e.classList.add("btn-filter-active");const s={filter:e.dataset.name,page:1,limit:12};f&&(f.innerHTML=""),await k(s)}async function k(t){var e,n,i;(e=document.querySelector(".filter-list-js"))==null||e.classList.remove("exercises_list"),(n=document.querySelector(".form-js"))==null||n.classList.add("hidden-form");try{c.open();const s=await d.getByFilterName(t),r=(s==null?void 0:s.results)??[];if(!r.length){o.error("Sorry, we didn't find anything according to your request.");return}f&&(f.innerHTML=M(r));const l=(s==null?void 0:s.totalPages)??1;localStorage.setItem("infoRequest",JSON.stringify({totalPages:l,categoryName:t.filter})),(i=document.querySelector(".filter-list-js"))==null||i.classList.add("muscles-list"),q&&(q.innerHTML=""),S(l,t),y(1)}catch(s){o.error((s==null?void 0:s.message)||String(s))}finally{c.close()}}function M(t){return t.map(({filter:e,name:n,imgURL:i})=>{let s=(e||"").toLocaleLowerCase().replaceAll(" ","");return s==="bodyparts"&&(s="bodypart"),`
        <li class="muscles-item" data-name="${n}" data-filter="${s}">
          <a href="" class="muscles-link" data-alt="${n}">
            <img loading="lazy" class="muscles-image" src="${i}" alt="${n}" width="290" height="242">
            <button class="muscles-box-menu" type="button">
              <h3 class="muscles-small-title">${E(n)}</h3>
              <p class="muscles-text">${e}</p>
            </button>
          </a>
        </li>
      `}).join("")}const x=document.querySelector(".pagination-numbers"),R=document.querySelector(".muscles-list");let p=1;try{x.addEventListener("click",D),x.addEventListener("click",L)}catch(t){console.log(t)}let A;async function D(t){const e={...A,page:t.target.textContent};if(t.target.nodeName==="BUTTON"&&e.page!==p){if(e.filter){c.open();const n=await d.getByFilterName(e);c.close();const i=n.results;R.innerHTML=M(i)}else{c.open();const n=await d.getByFilterCategory(e);c.close(),$(n)}p=e.page,L()}}const I=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),x.appendChild(e)};function S(t,e){if(A=e,t!==1)for(let n=1;n<=t;n++)I(n)}function L(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{y(e)})})}function y(t){p=t,L(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))===p&&e.classList.add("active")})}const O=document.querySelector(".pagination-numbers"),_=document.querySelector(".filter-list-js"),z=document.querySelector(".title-exercises");_.addEventListener("click",J);async function J(t){var l,u,g;t.preventDefault();const e=t.target,n=e.closest("[data-filter]");if(!n)return;const i=n.dataset.filter;let s=null;if(e.nodeName==="IMG")s=e.alt;else{const a=e.closest("[data-alt]");s=((l=a==null?void 0:a.dataset)==null?void 0:l.alt)||null}if(!i||!s)return;localStorage.setItem("infoRequest",JSON.stringify({filter:i,categoryName:s})),(u=document.querySelector(".form-js"))==null||u.classList.remove("hidden-form");const r={[i]:s,page:1,limit:10};z.innerHTML=`Exercises / <span class="search-target" id="target-js">${E(s)}</span>`;try{c.open();const a=await d.getByFilterCategory(r);if((g=a==null?void 0:a.results)!=null&&g.length){_.classList.add("exercises_list"),_.classList.remove("muscles-list"),$(a),O.innerHTML="";const{totalPages:h}=a;S(h,r),y(1)}else o.info("Oops. please, try other category this list empty :(")}catch(a){o.error((a==null?void 0:a.message)||String(a))}finally{c.close()}}function $(t){var n;if(!((n=t==null?void 0:t.results)!=null&&n.length))return;const e=t.results.map(({_id:i,target:s,rating:r,name:l,burnedCalories:u,time:g,bodyPart:a})=>{const h=Number.isFinite(Number(r))?Number(r).toFixed(1):"—",F=(s==null?void 0:s.toString().length)>8?s.slice(0,8)+"...":s,H=(l==null?void 0:l.toString().length)>20?l.slice(0,20)+"...":l;return`
      <li class="exercises_list_item" id="${i}">
        <div class="exercises_list_item_up">
          <div class="exercises_list_item_up_left">
            <div class="exercises_workout">${F}</div>

            <p class="exercises_rating">${h}</p>

            <div class="rating-container-not-cursore">
              <svg class="exercises_start_icon" width="56" height="18" data-id="${i}">
                <use xlink:href="${b}#icon-star" data-id="${i}"></use>
              </svg>
            </div>
          </div>

          <div class="exercises_list_item_up_right">
            <button class="exercises_btn_start exercises_btn_start_text" data-id="${i}">
              Start
              <div class="arrow-container">
                <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id="${i}">
                  <use xlink:href="${b}#icon-arrow" data-id="${i}"></use>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div class="exercises_list_item_middle">
          <div class="exercises_list_item_middle_icon">
            <svg class="exercises_list_item_middle_icon_svg" width="24" height="24">
              <use xlink:href="${b}#icon-run-man"></use>
            </svg>
          </div>

          <h3 class="exercises_list_item_middle_title" id="name">${H}</h3>
        </div>

        <div class="exercises_list_item_bottom">
          <ul class="exercises_list_item_bottom_list">
            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Burned calories:
                <span>${u??""} / ${g??"your wish"} min</span>
              </p>
            </li>

            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Body part: <span>${N(a,5)}</span>
              </p>
            </li>

            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Target: <span>${N(s,7)}</span>
              </p>
            </li>
          </ul>
        </div>
      </li>`}).join("");_.innerHTML=e}const P=document.querySelector(".form-js"),T=document.querySelector(".pagination-numbers");P.addEventListener("submit",Z);async function Z(t){var n;t.preventDefault();const e=t.target.elements.search.value.trim().toLowerCase();if(e)try{c.open();const i={page:1,limit:100},s=await d.getByFilterCategory(i);if(!((n=s==null?void 0:s.results)!=null&&n.length)){o.info("Nothing was found");return}const r=s.results.filter(u=>u.name.toLowerCase().includes(e));if(!r.length){o.info("Nothing was found for this query"),T.innerHTML="";return}const l={...s,results:r,totalPages:1};$(l),T.innerHTML="",S(1,i),y(1),P.reset()}catch(i){console.log(i),o.error((i==null?void 0:i.message)||String(i))}finally{c.close()}}const B=document.querySelector("#subscribe-form"),v=B.querySelector("#email");B.addEventListener("submit",G);async function G(t){t.preventDefault();const{value:e}=v;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){o.info("Enter the following sample email - 'test@gmail.com'"),v.value="";return}try{c.open();const i=await d.addSubscription({email:e});c.close(),o.success(i.message)}catch(i){console.log(i)}finally{v.value=""}}
//# sourceMappingURL=main-a8d44e5b.js.map
