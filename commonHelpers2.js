import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",function(n){n.preventDefault();const t=document.querySelector('[name="delay"]').value,s=document.querySelector('input[name="state"]:checked').value;new Promise((e,r)=>{s==="fulfilled"?setTimeout(()=>e(t),t):s==="rejected"&&setTimeout(()=>r(t),t)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})});const i=document.createElement("style");i.textContent=`
            .form {
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                flex-direction: column;
                gap: 8px;
            }
        `;document.head.appendChild(i);
//# sourceMappingURL=commonHelpers2.js.map
