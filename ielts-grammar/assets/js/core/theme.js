/* core/theme.js: Tự động / Sáng / Tối, remembered per browser */
// ---------- theme ----------
const THEMES=["auto","light","dark"], TNAME={auto:"Tự động",light:"Sáng",dark:"Tối"};
let theme="auto"; try{ theme=localStorage.getItem("theme12")||"auto"; }catch(e){}
function applyTheme(){
  const r=document.documentElement; theme==="auto"?r.removeAttribute("data-theme"):r.setAttribute("data-theme",theme);
  const b=document.getElementById("themeBtn"); if(b){ b.querySelector("span").textContent=TNAME[theme]; b.dataset.mode=theme; }
}
document.getElementById("themeBtn").addEventListener("click",()=>{ theme=THEMES[(THEMES.indexOf(theme)+1)%3]; try{ localStorage.setItem("theme12",theme); }catch(e){} applyTheme(); });
applyTheme();
