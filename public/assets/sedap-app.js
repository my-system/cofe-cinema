function initPreloader(){initLenis(),initFav(),initCookies(),initFluidCursor(),initSoundToggle(),animatePreloaederIntro()}function animatePreloaederIntro(){const e=document.querySelector("[data-preloader]");if(!e)return void animatePreloaederShort();const t=document.querySelector('[data-barba="container"]'),a=e.querySelector(".new-preloader_loader"),r=a.querySelector("[data-preloader-percent]"),n=e.querySelector("[data-preloader-logo]"),o=e.querySelector(".new-preloader_img"),i=o.querySelector("img"),l=e.querySelectorAll('[data-el="h"]'),c=e.querySelectorAll('[data-el="p"]'),s=e.querySelectorAll('[data-el="ctn"]'),d=e.querySelectorAll('[class*="new-preloader_title_w"]');CustomEase.create("loaderEase","M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.79,0.904,0.86,1,1,1"),setTimeout(scrollToTop,100),lockScroll(),gsap.set([l,c,s],{visibility:"visible"}),gsap.set([d,n],{translateZ:10});const u=gsap.timeline().add((()=>{const t=Flip.getState([d,n]);d.forEach(((t,a)=>{e.querySelector(`.new-preloader_title-p2_c${a+1}`).appendChild(t)})),e.querySelector(".new-preloader_logo_p2").appendChild(n),Flip.from(t,{duration:durL,ease:"InOut",stagger:stagger,scale:!0,overwrite:!0})})).to({},{duration:durL+4*stagger}).add((()=>{const t=Flip.getState([d,n]);d.forEach(((t,a)=>{e.querySelector(`.new-preloader_title-p3_c${a+1}`).appendChild(t)})),e.querySelector(".new-preloader_logo_p3").appendChild(n),Flip.from(t,{duration:durL,ease:"InOut",scale:!0,overwrite:!0})})).fromTo(o,{clipPath:"inset(50% 0% 50% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:durL-.2,ease:"InOut"},"<+=0.2").fromTo(i,{scale:1.2,translateZ:10},{scale:1,translateZ:10,duration:durL-.2,ease:"InOut"},"<").to({},{duration:durS}).add((()=>{const t=Flip.getState(d);d.forEach(((t,a)=>{e.querySelector(`.new-preloader_title-p2_c${a+1}`).appendChild(t)})),Flip.from(t,{duration:durL,ease:"InOut"})})).to(o,{clipPath:"inset(50% 0% 50% 0%)",duration:durL-.4,ease:"InOut"},"<").to(i,{scale:1.2,translateZ:10,duration:durL-.4,ease:"InOut"},"<");gsap.timeline().add((()=>{animateTextH(l,"reveal",0),animateTextP(c,"reveal",0),animateCtn(s,"reveal",0)})).to({},{duration:durL}).to({val:0},{val:100,duration:3,ease:"loaderEase",onUpdate:function(){const e=this.targets()[0].val;r.textContent=`${String(Math.round(e)).padStart(2,"0")}%`,a.style.setProperty("--progress",e/100)}}).add(u,"<").fromTo(e,{clipPath:"polygon(0% 0%, 0% 100%, 45% 100%, 45% 50%, 55% 50%, 55% 50%, 45% 50%, 45% 100%, 100% 100%, 100% 0%)"},{clipPath:"polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 100% 100%, 100% 0%)",duration:1.5*durL,ease:"InOut"}).fromTo(t,{scale:.5,translateZ:10,transformOrigin:"center 50vh"},{scale:1,translateZ:10,duration:1.5*durL,ease:"InOut",onComplete:()=>gsap.set(t,{clearProps:"scale,transformOrigin"})},"<").add((()=>initPageTransitions()),"-=0.2").add((()=>{unlockScroll(),gsap.set(e,{display:"none"}),ScrollTrigger.refresh();try{sessionStorage.setItem("hasVisited","true")}catch(e){}}));document.querySelector("[data-master-preloader]").remove()}function animatePreloaederShort(){const e=document.querySelector(".transition-container"),t=document.querySelector("[data-preloader]");gsap.fromTo(e,{opacity:0},{opacity:1,duration:durL,ease:"Out"}),gsap.set(t,{display:"none"}),initPageTransitions(),document.querySelector("[data-master-preloader]").remove()}function initPageTransitions(){async function e({current:e}){const t=window.scrollY;ScrollTrigger.getAll().forEach((t=>{e.container.contains(t.trigger)&&t.disable(!1)})),e.container._mm=mm,e.container.style.pointerEvents="none",e.container.style.paddingRight="var(--scrollbar-width)";const a=e.container.querySelector(".header");a&&(a.style.paddingRight="var(--scrollbar-width)"),gsap.set(e.container,{position:"fixed",top:-t,left:0,right:0,zIndex:0,transformOrigin:`center calc(${t}px + 50vh)`,translateZ:10}),lockScroll(),animateVisibleElements(e.container,"hide")}async function t({current:e}){return gsap.to(e.container,{opacity:0,scale:.75,duration:durL,ease:"InOut"})}async function a({current:e}){ScrollTrigger.getAll().forEach((t=>{e.container.contains(t.trigger)&&t.kill()})),localLenisInstances=localLenisInstances.filter((t=>!e.container.contains(t.wrapper)||(t._ticker&&gsap.ticker.remove(t._ticker),t.destroy(),!1))),activeFrameInstances=activeFrameInstances.filter((t=>!e.container.contains(t._wrapper)||(t.loading.then((()=>t.destroy())).catch((()=>{})),!1))),e.container._mm.revert(),e.container.remove()}async function r({next:e}){scrollToTop(),gsap.set(e.container,{zIndex:1,height:"100vh",overflow:"hidden"}),mm=gsap.matchMedia(),initScripts(e.container),initAllParallax(e.container),ScrollTrigger.refresh(!0)}async function n({next:e}){await gsap.fromTo(e.container,{clipPath:"polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 100% 100%, 100% 0%)",translateZ:10},{clipPath:"polygon(0% 0%, 0% 100%, 45% 100%, 45% 50%, 55% 50%, 55% 50%, 45% 50%, 45% 100%, 100% 100%, 100% 0%)",translateZ:10,duration:durL,ease:"InOut"}),gsap.set(e.container,{clearProps:"clipPath,height,overflow,transform"})}async function o(e){initResetWebflow(e),lenis.resize(),unlockScroll()}barba.init({debug:!1,preventRunning:!0,transitions:[{name:"default",sync:!0,once(e){initScripts(document),initAllParallax(document)},async beforeLeave(t){await e(t)},async leave(e){await t(e)},async afterLeave(e){await a(e)},async beforeEnter(e){await r(e)},async enter(e){await n(e)},async afterEnter(e){await o(e)}}]})}function initScripts(e){initLocalLenis(e),initThemeChange(e),initSnapSections(e),initHideHeader(e),initForm(e),initUtmFields(e),initPlayPauseVideoScroll(e),initOther(e),initCurrentTime(e),initNextEntity(e),initIndexCounter(e),initScrollRevealFirst(e),initScrollElementsReveal(e),initActiveFrameScroll(e),initMagneticEffect(e),initNavItemHover(e),initLinkHover(e),initPins(e),initTFTLjson(e),initCard(e),initAccordion(e),initSlider(e),initCarousel(e),initLightbox(e),initImageZoom(e),initStickySlider(e),initTabsParts(e),initInsideTabs(e),initModalCta(e),initModalMenu(e),initModalTip(e),initModalVideo(e),initFloatingTips(e),initTranistionFlow(e),initSketchScene(e),initHeroReel(e)}function initLenis(){lenis=new Lenis({wrapper:window,duration:1.2,smoothWheel:!0,syncTouch:!0,touchMultiplier:1.5,allowNestedScroll:!0,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),infinite:!1}),lenis.on("scroll",ScrollTrigger.update),gsap.ticker.add((e=>lenis.raf(1e3*e))),gsap.ticker.lagSmoothing(0)}function initLocalLenis(e=document){e.querySelectorAll("[data-lenis-scroll]").forEach((e=>{const t=new Lenis({wrapper:e,duration:.6,smoothWheel:!0,touchMultiplier:2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),infinite:!1});localLenisInstances.push(t);const a=e=>t.raf(1e3*e);gsap.ticker.add(a),t._ticker=a}))}function initFav(){
  const a=document.createElement("canvas");a.width=32;a.height=32;
  const r=a.getContext("2d");
  document.querySelectorAll('link[rel*="icon"]').forEach(e=>e.remove());
  const i=document.createElement("link");i.rel="icon";document.head.appendChild(i);
  r.fillStyle="#211A19";r.fillRect(0,0,32,32);
  r.strokeStyle="rgba(249,244,238,0.25)";r.strokeRect(1.5,1.5,29,29);
  r.fillStyle="#F9F4EE";r.font="bold 16px Georgia, serif";r.textAlign="center";r.textBaseline="middle";
  r.fillText("W",16,17);
  i.href=a.toDataURL("image/png");
}function initCookies(){function e(e){try{localStorage.setItem("cookies",e)}catch(e){}gsap.to(t,{yPercent:100,duration:durM,ease:"In",onComplete:()=>t.remove()})}const t=document.querySelector("[data-cookies]");if(!t)return;let a=null;try{a=localStorage.getItem("cookies")}catch(e){}a?t.remove():(gsap.fromTo(t,{yPercent:100},{yPercent:0,duration:durM,delay:delayReveal,ease:"Out"}),document.querySelector('[data-cookies="accept"]').addEventListener("click",(()=>e("accepted"))),document.querySelector('[data-cookies="decline"]').addEventListener("click",(()=>e("declined"))))}function initThemeChange(e=document){function t(e,t,r){if("none"===getComputedStyle(e).display)return;const n=e.getBoundingClientRect();a.forEach((a=>{const o=a.getBoundingClientRect(),i=o.left+o.width/2;i<n.left||i>n.right||ScrollTrigger.create({trigger:e,start:()=>`top top+=${o.top+o.height/2}`,end:()=>`bottom top+=${o.top+o.height/2}`,markers:!1,onEnter:()=>{a.classList.add(t),a.classList.remove(...r)},onEnterBack:()=>{a.classList.add(t),a.classList.remove(...r)}})}))}const a=e.querySelectorAll("[data-theme]");a.length&&(e.querySelectorAll('[data-bg="color"]').forEach((e=>{t(e,"theme_on-color",["theme_on-light","theme_on-dark"])})),e.querySelectorAll('[data-bg="light"]').forEach((e=>{t(e,"theme_on-light",["theme_on-dark","theme_on-color"])})),e.querySelectorAll('[data-bg="dark"]').forEach((e=>{t(e,"theme_on-dark",["theme_on-light","theme_on-color"])})))}function initSnapSections(e=document){mm.add(`(min-width: ${breakPoint}px)`,(()=>{lenis._snapScroll&&(lenis.off("scroll",lenis._snapScroll),lenis._snapScroll=null);const t=gsap.utils.toArray("[data-snap]",e);if(!t.length||!lenis)return;let a=null;lenis._snapScroll=()=>{clearTimeout(a),a=setTimeout((()=>{const e=window.innerHeight;let a=null,r=0;t.forEach((t=>{const n=t.getBoundingClientRect(),o=(Math.min(n.bottom,e)-Math.max(n.top,0))/Math.min(t.offsetHeight,e);o>.5&&o>r&&(r=o,a=t)})),a&&lenis.scrollTo(a,{duration:durL,easing:gsap.parseEase("Ease")})}),40)},lenis.on("scroll",lenis._snapScroll)}))}function initHideHeader(e=document){const t=e.querySelector("[data-header]");if(!t)return;hideHeaderScroll&&lenis.off("scroll",hideHeaderScroll);let a=0,r=null;hideHeaderScroll=({scroll:e,limit:n})=>{const o=e>a?"down":"up";"up"===o?null===r&&(r=a):r=null,a=e;e>=n-10||null!==r&&r-e>=40?gsap.to(t,{yPercent:0,duration:durM,ease:"Out",overwrite:!0}):"down"===o&&e>100&&gsap.to(t,{yPercent:-200,duration:durM,ease:"Out",overwrite:!0})},lenis.on("scroll",hideHeaderScroll)}function initForm(e=document){e.querySelectorAll("[data-form-btn]").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const a=e.closest("form");if(!a)return;const r=e.querySelectorAll('[hover="text"]'),n=()=>{r.forEach((e=>{e.textContent="Sending..."}))};a.addEventListener("submit",n,{once:!0}),a.requestSubmit()}))})),e.querySelectorAll(".input_field").forEach((e=>{const t=e.parentElement.querySelector(".input_label");t&&(e.addEventListener("focusin",(()=>t.classList.add("focused"))),e.addEventListener("focusout",(()=>{e.value.trim()||t.classList.remove("focused")})))})),e.querySelectorAll('input[type="tel"]').forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d+\-]/g,"")}))})),e.querySelectorAll('input[name="Name"]').forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[\d!@#$%^&*()_+=\[\]{};:'"\\|,.<>\/?~`]/g,"")}))}))}function initUtmFields(e=document){const t={utm_source:utmParams.get("utm_source")||"",utm_medium:utmParams.get("utm_medium")||"",utm_campaign:utmParams.get("utm_campaign")||"",utm_content:utmParams.get("utm_content")||"",utm_url:utmParams.get("utm_url")||"",page_url:window.location.href};Object.entries(t).forEach((([t,a])=>{e.querySelectorAll(`input[name="${t}"]`).forEach((e=>{e.value=a}))}))}function initCountrySelect(e=document){const t=e.querySelector("[data-select-countries]");if(!t)return;const a=[{label:"Afghanistan",dialCode:"+93",cca2:"AF"},{label:"Albania",dialCode:"+355",cca2:"AL"},{label:"Algeria",dialCode:"+213",cca2:"DZ"},{label:"Argentina",dialCode:"+54",cca2:"AR"},{label:"Armenia",dialCode:"+374",cca2:"AM"},{label:"Australia",dialCode:"+61",cca2:"AU"},{label:"Austria",dialCode:"+43",cca2:"AT"},{label:"Azerbaijan",dialCode:"+994",cca2:"AZ"},{label:"Bahrain",dialCode:"+973",cca2:"BH"},{label:"Bangladesh",dialCode:"+880",cca2:"BD"},{label:"Belarus",dialCode:"+375",cca2:"BY"},{label:"Belgium",dialCode:"+32",cca2:"BE"},{label:"Bolivia",dialCode:"+591",cca2:"BO"},{label:"Bosnia and Herzegovina",dialCode:"+387",cca2:"BA"},{label:"Brazil",dialCode:"+55",cca2:"BR"},{label:"Bulgaria",dialCode:"+359",cca2:"BG"},{label:"Cambodia",dialCode:"+855",cca2:"KH"},{label:"Canada",dialCode:"+1",cca2:"CA"},{label:"Chile",dialCode:"+56",cca2:"CL"},{label:"China",dialCode:"+86",cca2:"CN"},{label:"Colombia",dialCode:"+57",cca2:"CO"},{label:"Croatia",dialCode:"+385",cca2:"HR"},{label:"Cuba",dialCode:"+53",cca2:"CU"},{label:"Cyprus",dialCode:"+357",cca2:"CY"},{label:"Czech Republic",dialCode:"+420",cca2:"CZ"},{label:"Denmark",dialCode:"+45",cca2:"DK"},{label:"Ecuador",dialCode:"+593",cca2:"EC"},{label:"Egypt",dialCode:"+20",cca2:"EG"},{label:"Estonia",dialCode:"+372",cca2:"EE"},{label:"Ethiopia",dialCode:"+251",cca2:"ET"},{label:"Finland",dialCode:"+358",cca2:"FI"},{label:"France",dialCode:"+33",cca2:"FR"},{label:"Georgia",dialCode:"+995",cca2:"GE"},{label:"Germany",dialCode:"+49",cca2:"DE"},{label:"Ghana",dialCode:"+233",cca2:"GH"},{label:"Greece",dialCode:"+30",cca2:"GR"},{label:"Guatemala",dialCode:"+502",cca2:"GT"},{label:"Honduras",dialCode:"+504",cca2:"HN"},{label:"Hong Kong",dialCode:"+852",cca2:"HK"},{label:"Hungary",dialCode:"+36",cca2:"HU"},{label:"India",dialCode:"+91",cca2:"IN"},{label:"Indonesia",dialCode:"+62",cca2:"ID"},{label:"Iran",dialCode:"+98",cca2:"IR"},{label:"Iraq",dialCode:"+964",cca2:"IQ"},{label:"Ireland",dialCode:"+353",cca2:"IE"},{label:"Israel",dialCode:"+972",cca2:"IL"},{label:"Italy",dialCode:"+39",cca2:"IT"},{label:"Japan",dialCode:"+81",cca2:"JP"},{label:"Jordan",dialCode:"+962",cca2:"JO"},{label:"Kazakhstan",dialCode:"+7",cca2:"KZ"},{label:"Kenya",dialCode:"+254",cca2:"KE"},{label:"Kuwait",dialCode:"+965",cca2:"KW"},{label:"Kyrgyzstan",dialCode:"+996",cca2:"KG"},{label:"Latvia",dialCode:"+371",cca2:"LV"},{label:"Lebanon",dialCode:"+961",cca2:"LB"},{label:"Libya",dialCode:"+218",cca2:"LY"},{label:"Lithuania",dialCode:"+370",cca2:"LT"},{label:"Luxembourg",dialCode:"+352",cca2:"LU"},{label:"Malaysia",dialCode:"+60",cca2:"MY"},{label:"Mexico",dialCode:"+52",cca2:"MX"},{label:"Moldova",dialCode:"+373",cca2:"MD"},{label:"Mongolia",dialCode:"+976",cca2:"MN"},{label:"Montenegro",dialCode:"+382",cca2:"ME"},{label:"Morocco",dialCode:"+212",cca2:"MA"},{label:"Netherlands",dialCode:"+31",cca2:"NL"},{label:"New Zealand",dialCode:"+64",cca2:"NZ"},{label:"Nigeria",dialCode:"+234",cca2:"NG"},{label:"North Macedonia",dialCode:"+389",cca2:"MK"},{label:"Norway",dialCode:"+47",cca2:"NO"},{label:"Oman",dialCode:"+968",cca2:"OM"},{label:"Pakistan",dialCode:"+92",cca2:"PK"},{label:"Panama",dialCode:"+507",cca2:"PA"},{label:"Paraguay",dialCode:"+595",cca2:"PY"},{label:"Peru",dialCode:"+51",cca2:"PE"},{label:"Philippines",dialCode:"+63",cca2:"PH"},{label:"Poland",dialCode:"+48",cca2:"PL"},{label:"Portugal",dialCode:"+351",cca2:"PT"},{label:"Qatar",dialCode:"+974",cca2:"QA"},{label:"Romania",dialCode:"+40",cca2:"RO"},{label:"Russia",dialCode:"+7",cca2:"RU"},{label:"Saudi Arabia",dialCode:"+966",cca2:"SA"},{label:"Serbia",dialCode:"+381",cca2:"RS"},{label:"Singapore",dialCode:"+65",cca2:"SG"},{label:"Slovakia",dialCode:"+421",cca2:"SK"},{label:"Slovenia",dialCode:"+386",cca2:"SI"},{label:"South Africa",dialCode:"+27",cca2:"ZA"},{label:"South Korea",dialCode:"+82",cca2:"KR"},{label:"Spain",dialCode:"+34",cca2:"ES"},{label:"Sri Lanka",dialCode:"+94",cca2:"LK"},{label:"Sweden",dialCode:"+46",cca2:"SE"},{label:"Switzerland",dialCode:"+41",cca2:"CH"},{label:"Syria",dialCode:"+963",cca2:"SY"},{label:"Taiwan",dialCode:"+886",cca2:"TW"},{label:"Tajikistan",dialCode:"+992",cca2:"TJ"},{label:"Tanzania",dialCode:"+255",cca2:"TZ"},{label:"Thailand",dialCode:"+66",cca2:"TH"},{label:"Tunisia",dialCode:"+216",cca2:"TN"},{label:"Turkey",dialCode:"+90",cca2:"TR"},{label:"Turkmenistan",dialCode:"+993",cca2:"TM"},{label:"UAE",dialCode:"+971",cca2:"AE"},{label:"Uganda",dialCode:"+256",cca2:"UG"},{label:"Ukraine",dialCode:"+380",cca2:"UA"},{label:"United Kingdom",dialCode:"+44",cca2:"GB"},{label:"United States",dialCode:"+1",cca2:"US"},{label:"Uruguay",dialCode:"+598",cca2:"UY"},{label:"Uzbekistan",dialCode:"+998",cca2:"UZ"},{label:"Venezuela",dialCode:"+58",cca2:"VE"},{label:"Vietnam",dialCode:"+84",cca2:"VN"},{label:"Yemen",dialCode:"+967",cca2:"YE"}].sort(((e,t)=>e.label.localeCompare(t.label)));t.innerHTML=a.map((e=>`<option value="${e.dialCode}" data-label="${e.label}" ${"AE"===e.cca2?"selected":""}>${e.label} (${e.dialCode})</option>`)).join(""),t.addEventListener("change",(()=>{[...t.options].forEach((e=>{e.textContent=e.selected?e.value:`${e.dataset.label} (${e.value})`}))})),t.dispatchEvent(new Event("change"))}function initPlayPauseVideoScroll(e=document){gsap.utils.toArray("[data-video-playpause]",e).forEach((e=>{const t=e.querySelector(".video");t&&(t.load(),t.currentTime=0,ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onEnter:()=>t.play().catch((()=>{})),onEnterBack:()=>t.play().catch((()=>{})),onLeave:()=>t.pause(),onLeaveBack:()=>t.pause()}))}))}function animateTextH(e,t,a){const r=gsap.utils.toArray(e);if(!r.length)return;const n=gsap.timeline();return r.forEach(((e,r)=>{if(!e.textContent.trim())return;e._split||(e._split=new SplitText(e,{type:"lines,words",tag:"span",linesClass:"split-line",wordsClass:"split-word",mask:"lines"}),e.querySelectorAll(".split-line").forEach((e=>{""===e.textContent.trim()&&e.replaceWith(document.createElement("br"))})));const o=r*stagger;switch(t){case"reveal":n.fromTo(e._split.words,{yPercent:135},{yPercent:0,duration:durL,delay:(a??delayReveal)+o,stagger:stagger,ease:"Out",overwrite:!0},0);break;case"hide":n.to(e._split.words,{yPercent:-135,duration:durS,delay:a??0,stagger:.25*stagger,ease:"In",overwrite:!0},0);break;case"initial":gsap.set(e._split.words,{yPercent:135})}})),n}function animateTextP(e,t,a){const r=gsap.utils.toArray(e);if(!r.length)return;const n=gsap.timeline();return r.forEach(((e,r)=>{if(!e.textContent.trim())return;e._split||(e._split=new SplitText(e,{type:"lines,words",tag:"span",linesClass:"split-line",wordsClass:"split-word",mask:"lines"}),e.querySelectorAll(".split-line").forEach((e=>{""===e.textContent.trim()&&e.replaceWith(document.createElement("br"))})));const o=r*stagger;switch(t){case"reveal":n.fromTo(e._split.lines,{yPercent:110},{yPercent:0,duration:durL,delay:(a??delayReveal)+o,stagger:stagger,ease:"Out",overwrite:!0},0);break;case"hide":n.to(e._split.lines,{yPercent:-110,duration:durS,delay:a??0,stagger:.5*stagger,ease:"In",overwrite:!0},0);break;case"initial":gsap.set(e._split.lines,{yPercent:110})}})),n}function animateCtn(e,t,a){const r=gsap.utils.toArray(e);if(r.length)switch(t){case"reveal":return gsap.fromTo(r,{opacity:0,y:"3.333rem"},{opacity:1,y:"0rem",duration:durL,delay:a??delayReveal,stagger:stagger,ease:"Out",overwrite:!0});case"hide":return gsap.to(r,{opacity:0,y:"0rem",duration:durS,delay:a??0,stagger:.5*stagger,ease:"In",overwrite:!0});case"initial":gsap.set(r,{opacity:0,y:"3.333rem"})}}function animateLine(e,t,a){const r=gsap.utils.toArray(e);if(r.length)switch(t){case"reveal":return gsap.fromTo(r,{clipPath:"inset(0% 100% -1px 0%)"},{clipPath:"inset(0% 0% -1px 0%)",duration:durL,delay:a??delayReveal,stagger:stagger,ease:"Out",overwrite:!0});case"hide":return gsap.to(r,{clipPath:"inset(0% 0% -1px 100%)",duration:durS,delay:a??0,stagger:.5*stagger,ease:"In",overwrite:!0});case"initial":gsap.set(r,{clipPath:"inset(0% 0% -1px 100%)"})}}function animateImg(e,t,a,r="next"){const n=gsap.utils.toArray(e);if(!n.length)return;const o=n.map((e=>e.firstElementChild)),[i,l]={next:["inset(0% 0% 100% 0%)","inset(100% 0% 0% 0%)"],prev:["inset(100% 0% 0% 0%)","inset(0% 0% 100% 0%)"]}[r],c=gsap.timeline({defaults:{duration:durL,ease:"InOut",overwrite:!0}});switch(t){case"reveal":c.delay(a??delayReveal).fromTo(n,{clipPath:i},{clipPath:"inset(0% 0% 0% 0%)"}).fromTo(o,{scale:1.5},{scale:1},"<");break;case"hide":c.delay(a??0).to(n,{clipPath:l}).to(o,{scale:1.5},"<");break;case"initial":gsap.set(n,{clipPath:i}),gsap.set(o,{scale:1.5})}return c}function animateVisibleElements(e=document,t){const a={h:animateTextH,p:animateTextP,ctn:animateCtn,line:animateLine,slide:animateImg};Object.keys(a).forEach((r=>{const n=e.querySelectorAll(`[data-scroll-reveal="${r}"], [data-el="${r}"]`);n.length&&n.forEach((e=>{const n=e.getBoundingClientRect();n.top<window.innerHeight&&n.bottom>0&&a[r](e,t,0)}))}))}function lockScroll(){const e=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.setProperty("--scrollbar-width",`${e}px`),document.documentElement.style.overflow="hidden",lenis.stop()}function unlockScroll(){document.documentElement.style.removeProperty("--scrollbar-width"),document.documentElement.style.overflow="",lenis.start()}function scrollToTop(){window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0,lenis&&lenis.scrollTo(0,{immediate:!0,force:!0})}function initResetWebflow(e){try{let t=(new DOMParser).parseFromString(e.next.html,"text/html").querySelector("html")?.getAttribute("data-wf-page");if(t)document.documentElement.setAttribute("data-wf-page",t);if(window.Webflow){window.Webflow.destroy();window.Webflow.ready()}}catch(err){}}function initOther(e=document){const t=e.querySelectorAll(".year");if(t.length){const e=(new Date).getFullYear();t.forEach((t=>{t.textContent=e}))}const a=e.querySelector("[data-btn-back]");a&&a.addEventListener("click",(()=>history.back()));const r=e.querySelectorAll('[data-scroll-trigger="refresh"]');r.length&&r.forEach((e=>{new IntersectionObserver((([e])=>{e.isIntersecting&&ScrollTrigger.refresh()})).observe(e)}));const n=e.querySelectorAll("[data-comma-list]");n.length&&n.forEach((e=>{const t=e.querySelectorAll("[data-comma]");t.length&&t[t.length-1].remove()}));const o=e.querySelectorAll('[data-empty="w"]');o.length&&o.forEach((e=>{e.querySelector('[data-empty="item"]')||e.remove()})),mm.add(`(min-width: ${breakPoint}px)`,(()=>{const t=e.querySelector(".amen-s_quote");if(t){const a=e.querySelector(".amen-cms_list_item:nth-child(2) .grid");if(!t||!a)return;a.appendChild(t),ScrollTrigger.refresh()}}));const i=e.querySelector(".inside-w");if(i){const t=e.querySelectorAll("[data-lightbox]").length-i.querySelectorAll("[data-lightbox]").length,a=i.querySelectorAll(".inside-img-cms_list_item"),r=i.querySelectorAll(".inside-desc-cms_list_item");let n=t;r.forEach(((e,t)=>{const r=e.querySelector("[data-lightbox-btn]");r&&r.setAttribute("data-lightbox-btn",n),a[t]&&(n+=a[t].querySelectorAll("[data-lightbox]").length)}))}}function initCurrentTime(e=document){function t(){a.isConnected?a.textContent=(new Date).toLocaleTimeString("en-GB",{timeZone:"Asia/Jakarta",hour:"2-digit",minute:"2-digit"}):clearInterval(r)}const a=e.querySelector("[data-current-time]");if(!a)return;const r=setInterval(t,1e3);t()}function initNextEntity(e=document){const t=e.querySelector("[data-next-entity]");if(!t)return;const a=t.getAttribute("data-next-entity"),r=[...t.querySelectorAll("[data-next-entity-item]")];if(!r.length)return;const n=r.findIndex((e=>e.dataset.nextEntityItem===a)),o=r[n+1]??r[0];r.forEach((e=>{e!==o&&e.remove()}))}function initIndexCounter(e=document){const t=e.querySelectorAll("[data-index]");t.length&&t.forEach((e=>{e.querySelectorAll('[data-index="text"]').forEach(((e,t)=>{e.textContent=`${t+1}.0`}))}))}function initScrollRevealFirst(e=document){const t=e.querySelectorAll("[data-reveal-first]");if(!t.length)return;const a=new Map;t.forEach((e=>{const t=e.parentElement;a.has(t)||a.set(t,[]),a.get(t).push(e)})),a.forEach((e=>{e.slice(1).forEach((e=>{e.querySelectorAll("[data-scroll-reveal]").forEach((e=>e.removeAttribute("data-scroll-reveal")))}))}))}function initAllParallax(e=document){gsap.utils.toArray('[data-parallax="img"]',e).forEach((e=>{const t=e.closest('[data-parallax="w"]');if(!t)return;const a=window.innerWidth<breakPoint;a&&"off"===t.dataset.mob||(a||"off"!==t.dataset.desk)&&gsap.fromTo(e,{yPercent:-15,translateZ:10},{yPercent:15,translateZ:10,ease:"none",immediateRender:!1,scrollTrigger:{trigger:t,start:"top bottom",scrub:!0}})})),gsap.utils.toArray("[data-parallax-img-in]",e).forEach((e=>{const t=e.closest('[data-parallax="w"]');if(!t)return;const a=window.innerWidth<breakPoint;a&&"off"===t.dataset.mob||(a||"off"!==t.dataset.desk)&&gsap.fromTo(e,{yPercent:-15,translateZ:10},{yPercent:0,translateZ:10,ease:"none",immediateRender:!1,scrollTrigger:{trigger:t,start:"top bottom",end:"top top",scrub:!0}})})),gsap.utils.toArray("[data-parallax-img-out]",e).forEach((e=>{const t=e.closest('[data-parallax="w"]');if(!t)return;const a=window.innerWidth<breakPoint;a&&"off"===t.dataset.mob||(a||"off"!==t.dataset.desk)&&gsap.fromTo(e,{yPercent:0,translateZ:10},{yPercent:15,translateZ:10,ease:"none",immediateRender:!1,scrollTrigger:{trigger:t,start:"bottom bottom",end:"bottom top",scrub:!0}})})),gsap.utils.toArray("[data-parallax-s-in]",e).forEach((e=>{const t=window.innerWidth>=breakPoint?50:30;gsap.from(e,{opacity:.3,yPercent:-t,translateZ:10,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom bottom",scrub:!0}})})),gsap.utils.toArray("[data-parallax-s-out]",e).forEach((e=>{const t=window.innerWidth>=breakPoint?50:30;gsap.to(e,{opacity:.3,yPercent:t,translateZ:10,ease:"none",scrollTrigger:{trigger:e,start:"top top",end:"bottom top",scrub:!0}})})),mm.add(`(min-width: ${breakPoint}px)`,(()=>{const t=e.querySelector(".footer-w");if(t){const e=t.querySelector(".footer-s_main");gsap.fromTo(e,{yPercent:-50,translateZ:10},{yPercent:0,translateZ:10,ease:"none",immediateRender:!1,scrollTrigger:{trigger:t,start:"top bottom",end:"bottom bottom",scrub:!0}})}}))}function initScrollElementsReveal(e=document){function t(e,t,a){const r=e.closest("[data-scroll-horizontal]");ScrollTrigger.create({trigger:e,containerAnimation:r?._horizontalTween,start:r?"left bottom":"top bottom",once:!0,onEnter:()=>a(t,"reveal",.2)})}const a={h:animateTextH,p:animateTextP,ctn:animateCtn,line:animateLine,slide:animateImg};Object.entries(a).forEach((([a,r])=>{const n=e.querySelectorAll(`[data-scroll-reveal="${a}"]`);if(!n.length)return;const o=new Map;n.forEach((e=>{const t=e.closest('[data-scroll-reveal="w"]')||e;o.has(t)||o.set(t,{trigger:t,items:[]}),o.get(t).items.push(e)})),o.forEach((({trigger:e,items:a})=>{gsap.set(a,{visibility:"visible"}),t(e,a,r),r(a,"initial")}))}))}function initActiveFrameScroll(e=document){
  e.querySelectorAll('[data-activeframe="w"]').forEach(w=>{
    const v=w.querySelector("video");
    if(!v)return;
    v.muted=!0;v.playsInline=!0;
    ScrollTrigger.create({
      trigger:w,
      start:"top bottom",
      end:"bottom top",
      onEnter:()=>v.play().catch(()=>{}),
      onEnterBack:()=>v.play().catch(()=>{}),
      onLeave:()=>v.pause(),
      onLeaveBack:()=>v.pause()
    });
    gsap.fromTo(v,{scale:1.12},{
      scale:1,
      ease:"none",
      scrollTrigger:{
        trigger:w,
        start:"top bottom",
        end:"bottom top",
        scrub:!0
      }
    });
  });
}function initMagneticEffect(e=document){mm.add(`(min-width: ${breakPoint}px)`,(()=>{const t=e.querySelectorAll("[data-magnetic-strength]"),a=(e,t)=>{gsap.killTweensOf(e),(t?gsap.set:gsap.to)(e,{x:0,y:0,force3D:!0,clearProps:"all",...!t&&{ease:"elastic.out(1, 0.3)",duration:1.6}})},r=e=>e.querySelectorAll("[data-magnetic-inner-target]"),n=e=>{const t=e.currentTarget;a(t,!0),r(t).forEach((e=>a(e,!0)))},o=e=>{const t=e.currentTarget,a=t.getBoundingClientRect(),n=parseFloat(t.dataset.magneticStrength)||25,o=parseFloat(t.dataset.magneticStrengthInner)||n,i=((e.clientX-a.left)/t.offsetWidth-.5)*(n/16),l=((e.clientY-a.top)/t.offsetHeight-.5)*(n/16);gsap.to(t,{x:i+"em",y:l+"em",force3D:!0,ease:"power4.out",duration:1.6}),r(t).forEach((r=>{gsap.to(r,{x:((e.clientX-a.left)/t.offsetWidth-.5)*(o/16)+"em",y:((e.clientY-a.top)/t.offsetHeight-.5)*(o/16)+"em",force3D:!0,ease:"power4.out",duration:2})}))},i=e=>{const t=e.currentTarget;a(t,!1),r(t).forEach((e=>a(e,!1)))};t.forEach((e=>{e.addEventListener("mouseenter",n),e.addEventListener("mousemove",o),e.addEventListener("mouseleave",i)}))}))}function initNavItemHover(e=document){mm.add(`(min-width: ${breakPoint}px)`,(()=>{e.querySelectorAll("[hover-nav-item]").forEach((e=>{function t(){n.chars.length&&o.chars.length&&(gsap.fromTo(n.chars,{opacity:1,yPercent:0},{opacity:0,yPercent:-100,duration:durM,ease:"Out",stagger:stagger/5,overwrite:!0,force3D:!0}),gsap.fromTo(o.chars,{yPercent:100,opacity:0},{opacity:1,yPercent:0,duration:durM,ease:"Out",stagger:stagger/5,overwrite:!0,force3D:!0}))}function a(){n.chars.length&&o.chars.length&&(gsap.to(n.chars,{opacity:1,yPercent:0,duration:durM,ease:"Out",stagger:stagger/5,overwrite:!0,force3D:!0}),gsap.to(o.chars,{opacity:0,yPercent:100,duration:durM,ease:"Out",stagger:stagger/5,overwrite:!0,force3D:!0}))}const r=e.querySelectorAll("[hover='text']");if(r.length<2)return;const n=new SplitText(r[0],{type:"chars",tag:"span",charsClass:"split-char",smartWrap:!0}),o=new SplitText(r[1],{type:"chars",tag:"span",charsClass:"split-char",smartWrap:!0});gsap.set(o.chars,{yPercent:100,opacity:0});const i=e.closest("[hover-nav-item-trigger]")||e;i.addEventListener("mouseenter",t),i.addEventListener("mouseleave",a)}))}))}function initLinkHover(e=document){mm.add(`(min-width: ${breakPoint}px)`,(()=>{e.querySelectorAll("[hover-link]").forEach((e=>{function t(){gsap.fromTo(r,{xPercent:-101},{xPercent:0,duration:durL,ease:"Out",overwrite:!0})}function a(){gsap.to(r,{xPercent:101,duration:durL,ease:"Out",overwrite:!0})}const r=e.querySelector("[hover='line']");if(!r)return;gsap.set(r,{xPercent:-101,yPercent:-100});const n=e.closest("[hover-link-item-trigger]")||e;n.addEventListener("mouseenter",t),n.addEventListener("mouseleave",a)}))}))}function initPins(e=document){const t=e.querySelectorAll("[data-pin]");t.length&&t.forEach((e=>{const t=e.querySelector('[data-ico-plus="v"]'),a=e.querySelectorAll("[data-pin-pulse]"),r=e.offsetWidth;if(a.length&&gsap.fromTo(a,{opacity:1,width:r,height:r},{opacity:0,width:2*r,height:2*r,duration:durL,ease:"In",stagger:.2,repeat:-1}),t){function n(){gsap.fromTo(t,{rotate:0},{rotate:-90,duration:durM,ease:"Out",overwrite:!0})}function o(){gsap.to(t,{rotate:-180,duration:durM,ease:"Out",overwrite:!0})}e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",o)}}))}function initTFTLjson(e=document){}function initCard(e=document){e.querySelectorAll("[hover-card]").forEach((e=>{function t(){r.length&&animateTextH(r,"reveal",0),n.length&&animateTextP(n,"reveal",0),o.length&&animateLine(o,"reveal",0)}function a(){r.length&&animateTextH(r,"hide",0),n.length&&animateTextP(n,"hide",0),o.length&&animateLine(o,"hide",0)}e.querySelector('[hover="info"]');const r=e.querySelectorAll('[hover="h"]'),n=e.querySelectorAll('[hover="p"]'),o=e.querySelectorAll('[hover="line"]');r.length&&animateTextH(r,"initial"),n.length&&animateTextP(n,"initial"),o.length&&animateLine(o,"initial");let i=null;e.addEventListener("mouseenter",(()=>{clearTimeout(i),i=setTimeout(t,160)})),e.addEventListener("mouseleave",(()=>{clearTimeout(i),a()}))}))}function initAccordion(e=document){let t=null;e.querySelectorAll("[data-accordion-card]").forEach((e=>{function a(){gsap.to(n,{height:"auto",duration:durL,ease:"Out",onComplete:()=>{ScrollTrigger.refresh()}}),gsap.fromTo(o,{rotate:0},{rotate:-90,duration:durM,ease:"InOut",overwrite:!0}),animateTextP(i,"reveal"),animateImg(l,"reveal")}
function r(){gsap.to(n,{height:0,duration:durL,ease:"Out",onComplete:()=>{ScrollTrigger.refresh()},overwrite:!0}),gsap.to(o,{rotate:-180,duration:durM,ease:"InOut",overwrite:!0}),animateTextP(i,"hide"),animateImg(l,"hide")}const n=e.querySelector('[data-accordion-card="content"]'),o=e.querySelector('[data-ico-plus="v"]'),i=e.querySelectorAll('[data-accordion-card="p"]'),l=e.querySelectorAll('[data-accordion-card="img"]');n&&(gsap.set(n,{height:0,overflow:"hidden"}),e.addEventListener("click",(()=>{t&&t!==e&&t.closeFunc(),t!==e?(a(),t=e):(r(),t=null)})),e.closeFunc=r)})),ScrollTrigger.refresh()}function initSlider(e=document){const t=gsap.utils.toArray("[data-slider]",e);t.length&&t.forEach((e=>{function t(){r.$current&&r.$total&&(r.$current.textContent=r.current+1,r.$total.textContent=r.length)}function a(e){r.$slides[r.prev].style.zIndex=1,r.$slides[r.current].style.zIndex=2,gsap.timeline().fromTo(r.$imgs[r.prev],{scale:1},{duration:durL,scale:1.5,ease:"Ease"},"<"),gsap.timeline().fromTo(r.$slides[r.current],{clipPath:e?n:o},{clipPath:i,duration:durL,ease:"Ease",onComplete:()=>{r.$slides[r.prev].style.zIndex="auto",r.$slides[r.current].style.zIndex=1,r.animating=!1}}).fromTo(r.$imgs[r.current],{scale:1.5},{scale:1,duration:durL,ease:"Ease"},"<")}const r={$slides:e.querySelectorAll('[data-slider="slide"]'),$imgs:e.querySelectorAll('[data-slider="slide"] [data-slider="img"]'),$pag:e.querySelector('[data-slider="pag"]'),$prev:e.querySelector('[data-slider="prev"]'),$next:e.querySelector('[data-slider="next"]'),$current:e.querySelector('[data-slider="current"]'),$total:e.querySelector('[data-slider="total"]'),current:0,prev:null,animating:!1};if(r.length=r.$slides.length,!r.length||!r.$prev||!r.$next)return;if(1===r.length)return void(r.$pag.style.display="none");const n="inset(0% 0% 0% 100%)",o="inset(0% 100% 0% 0%)",i="inset(0% 0% 0% 0%)";gsap.set(r.$slides,{clipPath:o}),gsap.set(r.$slides[r.current],{clipPath:i}),t(),r.$prev.addEventListener("click",(()=>{r.animating||(r.animating=!0,r.prev=r.current,r.current=0===r.current?r.length-1:r.current-1,t(),a(!1))})),r.$next.addEventListener("click",(()=>{r.animating||(r.animating=!0,r.prev=r.current,r.current=r.current===r.length-1?0:r.current+1,t(),a(!0))}))}))}function initCarousel(e=document){e.querySelectorAll("[data-carousel]").forEach((e=>{const t=e.querySelector(".swiper");if(!t)return;const a=e.querySelector('[data-slider="progress"]'),r=e.querySelector('[data-slider="current"]'),n=e.querySelector('[data-slider="total"]');new Swiper(t,{direction:"horizontal",freeMode:{enabled:!0,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,sticky:!1},a11y:{enabled:!1},slidesPerView:"auto",grabCursor:!0,mousewheel:{forceToAxis:!0},navigation:{nextEl:e.querySelector('[data-slider="next"]'),prevEl:e.querySelector('[data-slider="prev"]')},speed:800,on:{progress(e,t){a&&(a.style.width=100*t+"%")},slideChange(e){r&&(r.textContent=e.realIndex+1)},afterInit(e){r&&(r.textContent=1),n&&(n.textContent=e.slides.length)}}})}))}function initLightbox(e=document){function t(){u&&(u.textContent=String(g+1).padStart(2,"0")),p&&(p.textContent=String(f.length).padStart(2,"0")),m&&gsap.to(m,{width:(g+1)/f.length*100+"%",duration:durS,ease:"Out"})}function a(e){g=e,l.src=f[g],t(),gsap.set(i,{display:"block"}),gsap.fromTo(i,{opacity:0},{opacity:1,duration:durM,ease:"Out"}),gsap.fromTo(l,{opacity:0,scale:.5},{opacity:1,scale:1,duration:durM,ease:"Out"}),lockScroll()}function r(){gsap.to(i,{opacity:0,duration:durS,ease:"In",onComplete:()=>{gsap.set(i,{display:"none"})}}),unlockScroll()}function n(e){const a=1===e?-125:125,r=1===e?125:-125;gsap.to(l,{xPercent:a,duration:durS,ease:"In",onComplete:()=>{g=(g+e+f.length)%f.length,l.src=f[g],t(),gsap.fromTo(l,{xPercent:r},{xPercent:0,duration:durM,ease:"Out"})}})}const o=e.querySelectorAll("[data-lightbox]");if(!o.length)return;const i=e.querySelector("[data-lightbox-modal]"),l=i.querySelector("[data-lightbox-img]"),c=i.querySelector('[data-slider="close"]'),s=i.querySelector('[data-slider="prev"]'),d=i.querySelector('[data-slider="next"]'),u=i.querySelector('[data-slider="current"]'),p=i.querySelector('[data-slider="total"]'),m=i.querySelector('[data-slider="progress"]');let g=0;const f=Array.from(o).map((e=>e.src||e.dataset.src));gsap.set(i,{display:"none"}),e.querySelectorAll("[data-lightbox-btn]").forEach((e=>{e.addEventListener("click",(()=>a(Number(e.dataset.lightboxBtn))))})),o.forEach(((e,t)=>e.addEventListener("click",(()=>a(t))))),c.addEventListener("click",r),s.addEventListener("click",(()=>n(-1))),d.addEventListener("click",(()=>n(1))),document.addEventListener("keydown",(e=>{"Escape"===e.key&&r(),"ArrowLeft"===e.key&&n(-1),"ArrowRight"===e.key&&n(1)}));let v=0;i.addEventListener("touchstart",(e=>{v=e.touches[0].clientX}),{passive:!0}),i.addEventListener("touchend",(e=>{const t=v-e.changedTouches[0].clientX;Math.abs(t)<50||n(t>0?1:-1)}),{passive:!0})}function initImageZoom(e=document){function t(){g+=.08*(m-g),gsap.set(o,{y:g})}function a(){u=!0;const e=window.innerWidth/o.offsetWidth,a=o.offsetHeight*e;p=Math.max(0,(a-window.innerHeight)/2),g=0,m=0,gsap.to(o,{scale:e,duration:durM,ease:"Out"}),gsap.ticker.add(t),i&&c&&gsap.to([i,c],{yPercent:100,duration:durM,ease:"Out"}),l&&gsap.to(l,{xPercent:100,duration:durM,ease:"Out"}),d&&(d.textContent="Zoom out"),o.style.cursor="zoom-out"}function r(){u=!1,gsap.ticker.remove(t),m=0,gsap.to(o,{scale:1,y:0,duration:durM,ease:"Out"}),i&&c&&gsap.to([i,c],{yPercent:0,duration:durM,ease:"Out"}),l&&gsap.to(l,{xPercent:0,duration:durM,ease:"Out"}),d&&(d.textContent="Zoom in"),o.style.cursor="zoom-in"}const n=e.querySelector("[data-lightbox-content]");if(!n)return;const o=n.querySelector("[data-lightbox-img]");if(!o)return;const i=n.parentElement?.querySelector(".modal_pag"),l=n.parentElement?.querySelector(".modal_close"),c=n.parentElement?.querySelector(".img-over-grad"),s=e.querySelector('[floating-tip="zoom"]'),d=s?.querySelector(".l1");let u=!1,p=0,m=0,g=0;o.style.cursor="zoom-in",document.addEventListener("mousemove",(e=>{if(!u||p<=0)return;const t=e.clientY/window.innerHeight;m=p*(1-2*t)})),o.addEventListener("click",(()=>u?r():a())),document.addEventListener("keydown",(e=>{"Escape"===e.key&&r(),"ArrowLeft"===e.key&&r(),"ArrowRight"===e.key&&r()}))}function initStickySlider(e=document){mm.add(`(min-width: ${breakPoint}px)`,(()=>{e.querySelectorAll("[data-sticky-slider]").forEach((e=>{function t(e){e.querySelectorAll("[data-el]").forEach((e=>{s[e.dataset.el]?.(e,"initial")}))}function a(e){const t=l[e].offsetTop-l[0].offsetTop;l.forEach((e=>e.classList.remove("is-active"))),l[e].classList.add("is-active"),gsap.to(c,{y:-t,duration:durM,ease:"Out"})}function r(e,t){const a=e.querySelectorAll("[data-el]");return e._hide?.kill(),gsap.set(e,{display:"block",zIndex:++u}),gsap.set(a,{clearProps:"opacity",overwrite:!0}),a.forEach(((e,a)=>{s[e.dataset.el]?.(e,"reveal",a*stagger,t)})),a.length*stagger+durL}function n(e){if(e===d)return;const t=o[d],n=o[e],i=t.querySelectorAll('[data-el]:not([data-el="slide"])'),l=e>d?"next":"prev";d=e,gsap.to(i,{opacity:0,duration:.2,ease:"Out"});const c=r(n,l);a(e),t._hide=gsap.delayedCall(c,(()=>{gsap.set(t,{display:"none"})}))}const o=gsap.utils.toArray("[data-sticky-slide]",e),i=gsap.utils.toArray("[data-sticky-trigger]",e),l=gsap.utils.toArray("[data-sticky-name]",e),c=e.querySelector("[data-sticky-names]");if(!o.length)return;const s={slide:animateImg,h:animateTextH,p:animateTextP,line:animateLine,ctn:animateCtn};let d=0,u=o.length;o.slice(1).forEach(t),gsap.set(o.slice(1),{display:"none"}),a(0),i.forEach(((e,t)=>{ScrollTrigger.create({trigger:e,start:"top center",end:"bottom center",onEnter:()=>n(t),onEnterBack:()=>n(t)})})),l.forEach(((e,t)=>{e.addEventListener("click",(()=>{lenis.scrollTo(i[t],{offset:-window.innerHeight/2+i[t].offsetHeight/2})}))}))}))}))}function initTabsParts(e=document){const t=e.querySelectorAll("[data-tabs]");t.length&&t.forEach((e=>{const t=[...e.querySelectorAll("[data-tab-trigger]")],a=e.querySelectorAll("[data-tab-content]");let r=0,n=!1;t[0].classList.add("is-active"),a[0].classList.add("is-active"),t.forEach(((a,o)=>{a.addEventListener("click",(()=>{if(o===r||n)return;const i=t[r],l=e.querySelector(`[data-tab-content="${i.getAttribute("data-tab-trigger")}"]`),c=l.querySelectorAll('[data-tab="h"]'),s=l.querySelectorAll('[data-tab="p"]'),d=l.querySelectorAll('[data-tab="ctn"]'),u=l.querySelectorAll('[data-tab="slide"]'),p=e.querySelector(`[data-tab-content="${a.getAttribute("data-tab-trigger")}"]`),m=p.querySelectorAll('[data-tab="h"]'),g=p.querySelectorAll('[data-tab="p"]'),f=p.querySelectorAll('[data-tab="ctn"]'),v=p.querySelectorAll('[data-tab="slide"]');gsap.killTweensOf([l,p]),n=!0,gsap.set(p,{display:"block",position:"relative",zIndex:1}),gsap.set(l,{display:"block",position:"absolute",zIndex:0}),animateTextH(m,"initial"),animateTextP(g,"initial"),animateCtn(f,"initial"),animateImg(v,"initial"),ScrollTrigger.refresh(),gsap.timeline({onComplete:()=>{n=!1}}).add((()=>{animateTextH(c,"hide",0),animateTextP(s,"hide",0),animateCtn(d,"hide",0),animateImg(u,"hide",0),animateImg(v,"reveal",0)})).to({},{duration:durM}).add((()=>{animateTextH(m,"reveal",0),animateTextP(g,"reveal",0),animateCtn(f,"reveal",0)})).to({},{duration:durS}).set(l,{display:"none"}),i.classList.remove("is-active"),a.classList.add("is-active"),r=o}))}))}))}function initInsideTabs(e=document){const t=e.querySelector(".inside-w");if(t){const r=t.querySelectorAll(".inside-desc-cms_list_item"),n=t.querySelectorAll(".inside-img-cms_list_item"),o=t.querySelectorAll(".inside-title-cms_list_item");function a(e){if("none"===r[e].style.display){r.forEach(((t,a)=>{gsap.set(t,{display:a===e?"block":"none"})}));const t=r[e].querySelectorAll('[data-card="p"]'),a=r[e].querySelectorAll('[data-card="ctn"]');animateTextP(t,"reveal"),animateCtn(a,"reveal"),n.forEach(((t,a)=>gsap.set(t,{zIndex:a===e?1:0}))),gsap.fromTo(n[e],{scale:1.25,translateZ:10},{scale:1,translateZ:10,duration:durL,ease:"Out"})}}gsap.set(r,{display:"none"}),a(0),o.forEach(((e,t)=>{ScrollTrigger.create({trigger:e,start:"top center",end:"bottom center",onEnter:()=>a(t),onEnterBack:()=>a(t)})}))}}function initModalCta(e=document){e.querySelectorAll("[data-modal-cta-btn]").forEach((t=>{function a(){initCountrySelect();const e=window.innerWidth<breakPoint;gsap.set([o,l],{display:"block"}),gsap.fromTo(i,{xPercent:e?0:100,yPercent:e?100:0},{xPercent:0,yPercent:0,duration:durL,ease:"Out",overwrite:!0}),gsap.fromTo(l,{opacity:0},{opacity:1,duration:durL,ease:"Out",overwrite:!0}),lockScroll()}function r(){const e=window.innerWidth<breakPoint;gsap.to(i,{xPercent:e?0:100,yPercent:e?100:0,duration:durM,ease:"In",onComplete:()=>{gsap.set([o,l],{display:"none"})},overwrite:!0}),gsap.to(l,{opacity:0,duration:durM,ease:"In",overwrite:!0}),unlockScroll()}const n=t.getAttribute("data-modal-cta-btn"),o=e.querySelector(`[data-modal-cta="${n}"]`);if(!o)return;const i=o.querySelector("[data-modal-container]"),l=o.querySelector("[data-modal-over]"),c=o.querySelectorAll("[data-modal-close]");let s=!1;gsap.set(o,{display:"none"}),t.addEventListener("click",(()=>{s||(a(),s=!0)})),c.forEach((e=>{e.addEventListener("click",(()=>{s&&(r(),s=!1)}))})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&s&&(r(),s=!1)}))}))}function initModalMenu(e=document){e.querySelectorAll("[data-modal-menu-btn]").forEach((t=>{function a(){gsap.set([o,l],{display:"block"}),lenis.scrollTo(window.scrollY-10,{immediate:!0}),m.forEach((e=>{e.classList.add("theme_on-dark")})),u.forEach((e=>e.classList.toggle("is-active"))),gsap.fromTo(i,{yPercent:0},{yPercent:0,duration:durL,ease:"Out",overwrite:!0}),gsap.to(p,{rotate:90,duration:durM,ease:"InOut"}),gsap.fromTo(l,{opacity:0},{opacity:1,duration:durM,ease:"Out",overwrite:!0}),animateCtn(s,"reveal"),animateTextP(d,"reveal"),lockScroll()}function r(){m.forEach((e=>{e.classList.remove("theme_on-dark")})),u.forEach((e=>e.classList.toggle("is-active"))),gsap.to(i,{yPercent:0,duration:durM,ease:"In",onComplete:()=>{gsap.set([o,l],{display:"none"})},overwrite:!0}),gsap.to(p,{rotate:0,duration:durM,ease:"InOut"}),gsap.to(l,{opacity:0,duration:durM,ease:"In",overwrite:!0}),animateCtn(s,"hide"),animateTextP(d,"hide"),unlockScroll()}const n=t.getAttribute("data-modal-menu-btn"),o=e.querySelector(`[data-modal-menu="${n}"]`);if(!o)return;const i=o.querySelector("[data-modal-container]"),l=o.querySelector("[data-modal-over]"),c=e.querySelectorAll(`[data-modal-close="${n}"]`),s=[...o.querySelector('[data-modal="list"]').children],d=o.querySelectorAll("[data-modal-p]"),u=t.querySelectorAll(".header_menu_label"),p=t.querySelector("[data-ico-menu]"),m=e.querySelectorAll("[data-theme]");let g=!1;gsap.set(o,{display:"none"}),t.addEventListener("click",(()=>{g?(r(),g=!1):(a(),g=!0)})),c.forEach((e=>{e.addEventListener("click",(()=>{g&&(r(),g=!1)}))})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&g&&(r(),g=!1)}))}))}function initModalTip(e=document){mm.add(`(max-width: ${breakPoint-1}px)`,(()=>{e.querySelectorAll("[data-modal-tip-btn]").forEach((t=>{function a(){gsap.set([o,l],{display:"block"}),gsap.fromTo(i,{yPercent:125},{yPercent:0,duration:durL,ease:"Out",overwrite:!0}),gsap.fromTo(l,{opacity:0},{opacity:1,duration:durL,ease:"Out",overwrite:!0}),lockScroll()}function r(){gsap.to(i,{yPercent:125,duration:durM,ease:"In",onComplete:()=>{gsap.set([o,l],{display:"none"})},overwrite:!0}),gsap.to(l,{opacity:0,duration:durM,ease:"In",overwrite:!0}),unlockScroll()}const n=t.getAttribute("data-modal-tip-btn"),o=e.querySelector(`[data-modal-tip="${n}"]`);if(!o)return;const i=o.querySelector("[data-modal-container]"),l=o.querySelector("[data-modal-over]"),c=o.querySelectorAll("[data-modal-close]");let s=!1;gsap.set(o,{display:"none"}),t.addEventListener("click",(()=>{s||(a(),s=!0)})),c.forEach((e=>{e.addEventListener("click",(()=>{s&&(r(),s=!1)}))}))}))}))}function initModalVideo(e=document){e.querySelectorAll("[data-modal-video-btn]").forEach((t=>{function a(){gsap.set(o,{display:"block"}),i.src=n,i.muted=!1,i.controls=!1,i.volume=.5,i.currentTime=0,i.play().catch((()=>{})),gsap.fromTo(i,{scale:1.25},{scale:1,duration:durL,ease:"Out",overwrite:!0}),lockScroll()}function r(){gsap.set(o,{display:"none"}),i.pause(),i.removeAttribute("src"),i.load(),unlockScroll()}const n=t.getAttribute("data-modal-video-btn"),o=e.querySelector("[data-modal-video]");if(!o)return;const i=o.querySelector("[data-modal-video-el]"),l=o.querySelectorAll("[data-modal-close]");let c=!1;gsap.set(o,{display:"none"}),t.addEventListener("click",(()=>{c||(a(),c=!0)})),l.forEach((e=>{e.addEventListener("click",(()=>{c&&(r(),c=!1)}))})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&c&&(r(),c=!1)}))}))}function initFloatingTips(e=document){mm.add(`(min-width: ${breakPoint}px)`,(()=>{function t(e,t,a){const r=e.getBoundingClientRect(),o=r.left-(parseFloat(gsap.getProperty(e,"--x"))||0),i=r.top-(parseFloat(gsap.getProperty(e,"--y"))||0);return{"--x":gsap.utils.clamp(n-o,window.innerWidth-r.width-n-o,t)+"px","--y":gsap.utils.clamp(n-i,window.innerHeight-r.height-n-i,a)+"px"}}function a(e,a,r){gsap.set(e,t(e,a,r)),e.classList.add("is-active"),l.add(e),e._parts.forEach(((e,t)=>{o[e.dataset.el]?.(e,"reveal",t*stagger)}))}function r(e){e.classList.remove("is-active"),l.delete(e),e._parts.forEach((e=>{o[e.dataset.el]?.(e,"hide",0)}))}const n=8,o={slide:animateImg,h:animateTextH,p:animateTextP,line:animateLine,ctn:animateCtn},i=new Map([...e.querySelectorAll("[floating-tip]")].map((e=>(e._parts=e.querySelectorAll("[data-el]"),e._parts.forEach((e=>o[e.dataset.el]?.(e,"initial"))),[e.getAttribute("floating-tip"),e])))),l=new Set;e.addEventListener("mousemove",(e=>{l.forEach((a=>{gsap.to(a,{...t(a,e.clientX,e.clientY),duration:2*durL,ease:"power3"})}))})),e.querySelectorAll("[floating-tip-trigger]").forEach((e=>{const t=i.get(e.getAttribute("floating-tip-trigger"));t&&(e.addEventListener("mouseenter",(e=>a(t,e.clientX,e.clientY))),e.addEventListener("mouseleave",(()=>r(t))),e.matches(":hover")&&a(t,0,0))}))}))}function initTranistionFlow(e=document){mm.add(`(min-width: ${breakPoint}px)`,(()=>{const t=e.querySelector(".our-values-w");if(t){const e=t.querySelector(".our-values-s_desc").querySelectorAll("p");ScrollTrigger.create({trigger:t,start:"20% top",onEnter:()=>animateTextP(e,"hide"),onLeaveBack:()=>animateTextP(e,"reveal")})}if(t){const e=t.querySelector(".our-values-s_progress");ScrollTrigger.create({trigger:t,start:"top top",end:"bottom bottom",onUpdate:t=>e.style.setProperty("--progress",t.progress)})}}));const t=e.querySelector(".mission-s_title_offset");t&&gsap.from(t,{width:0,ease:"InOut",duration:durL,delay:delayReveal,scrollTrigger:{trigger:t,start:"top bottom"}});const a=e.querySelectorAll('[data-scroll-reveal="card"]');a.length&&a.forEach((e=>{gsap.fromTo(e,{yPercent:35},{yPercent:0,duration:durL,ease:"Out",scrollTrigger:{trigger:e,start:"top bottom",once:!1}})}));const r=e.querySelectorAll('[data-scroll-reveal="carousel"]');r.length&&r.forEach((e=>{const t=e.children;gsap.from(t,{opacity:0,xPercent:25,duration:durL,ease:"Out",stagger:3*stagger,scrollTrigger:{trigger:e,start:"top bottom",once:!1}})}))}async function initSketchScene(e=document){
  const canvas = e.querySelector("[data-skech-scene]");
  if (!canvas) return;
  const THREE = await import("/assets/vendor/three.module.js");
  if (!canvas.isConnected) return;

  gsap.set(canvas, { opacity: 0 });
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.setClearColor(0xffffff, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1690 / 1258, 0.1, 100);
  camera.position.set(0, 0, 3.15);

  const video = document.createElement("video");
  Object.assign(video, {
    src: "/assets/videos/01_fasad_sore.mp4",
    crossOrigin: "anonymous",
    muted: true,
    defaultMuted: true,
    loop: true,
    playsInline: true,
    preload: "auto"
  });

  const loader = new THREE.TextureLoader();
  const imgTex = await loader.loadAsync("/assets/01_tampak_depan_golden_hour.jpg");
  imgTex.minFilter = THREE.LinearFilter;
  imgTex.magFilter = THREE.LinearFilter;

  const vidTex = new THREE.VideoTexture(video);
  vidTex.minFilter = THREE.LinearFilter;
  vidTex.magFilter = THREE.LinearFilter;

  const uniforms = {
    uImage: { value: imgTex },
    uVideo: { value: vidTex },
    uUseVideo: { value: 0.0 },
    uReveal: { value: 0.0 },
    uResolution: { value: new THREE.Vector2(1690, 1258) }
  };

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Real-time Architectural Pencil & Ink Line-Art Shader on pure white paper (blended via mix-blend-mode: multiply)
  const fragmentShader = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uImage;
    uniform sampler2D uVideo;
    uniform float uUseVideo;
    uniform float uReveal;
    uniform vec2 uResolution;

    float luma(vec3 c) {
      return dot(c, vec3(0.299, 0.587, 0.114));
    }

    vec3 sampleSrc(vec2 uv) {
      // Fit 16:9 source into 1690x1258 frame cleanly
      vec2 sUv = (uv - 0.5) * vec2(0.88, 1.0) + 0.5;
      sUv = clamp(sUv, 0.002, 0.998);
      vec3 cImg = texture2D(uImage, sUv).rgb;
      vec3 cVid = texture2D(uVideo, sUv).rgb;
      return mix(cImg, cVid, uUseVideo);
    }

    float sobel(vec2 uv, vec2 stepSize) {
      float tl = luma(sampleSrc(uv + vec2(-stepSize.x,  stepSize.y)));
      float t  = luma(sampleSrc(uv + vec2( 0.0,         stepSize.y)));
      float tr = luma(sampleSrc(uv + vec2( stepSize.x,  stepSize.y)));
      float l  = luma(sampleSrc(uv + vec2(-stepSize.x,  0.0)));
      float r  = luma(sampleSrc(uv + vec2( stepSize.x,  0.0)));
      float bl = luma(sampleSrc(uv + vec2(-stepSize.x, -stepSize.y)));
      float b  = luma(sampleSrc(uv + vec2( 0.0,        -stepSize.y)));
      float br = luma(sampleSrc(uv + vec2( stepSize.x, -stepSize.y)));
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return sqrt(gx*gx + gy*gy);
    }

    void main() {
      vec2 texel = 1.0 / uResolution;
      // Multi-scale architectural ink & graphite edge extraction
      float eFine = sobel(vUv, texel * 1.15);
      float eMed  = sobel(vUv, texel * 2.4);
      float eWide = sobel(vUv, texel * 4.2);

      float edge = clamp(eFine * 1.45 + eMed * 0.75 + eWide * 0.35, 0.0, 1.0);
      edge = smoothstep(0.09, 0.48, edge);

      // Subtle architectural cross-hatching in shadow regions
      float lum = luma(sampleSrc(vUv));
      float hatch1 = sin((vUv.x + vUv.y) * 950.0) * 0.5 + 0.5;
      float hatch2 = sin((vUv.x - vUv.y) * 950.0) * 0.5 + 0.5;
      float shade = (1.0 - smoothstep(0.18, 0.58, lum)) * 0.32 * step(0.65, hatch1);
      float deepShade = (1.0 - smoothstep(0.08, 0.32, lum)) * 0.25 * step(0.65, hatch2);

      // Architectural construction grid extension lines
      float draftLines = (step(0.9985, fract(vUv.x * 6.0)) + step(0.9985, fract(vUv.y * 5.0))) * 0.12;

      // Soft vignette so sketch fades naturally into paper edges
      float vigX = smoothstep(0.02, 0.18, vUv.x) * smoothstep(0.01, 0.28, 1.0 - vUv.x);
      float vigY = smoothstep(0.03, 0.20, vUv.y) * smoothstep(0.04, 0.24, 1.0 - vUv.y);
      float vignette = vigX * vigY;

      // Progressive drawing reveal on scroll
      float sweep = smoothstep(vUv.x * 0.75 + (1.0 - vUv.y) * 0.25 - 0.15, vUv.x * 0.75 + (1.0 - vUv.y) * 0.25 + 0.15, uReveal * 1.25);

      float totalInk = clamp((edge * 0.92 + shade + deepShade + draftLines) * vignette * sweep, 0.0, 1.0);

      // Pure white paper (1.0) -> transparent under mix-blend-mode: multiply
      // Ink color: deep espresso charcoal
      vec3 paper = vec3(1.0);
      vec3 inkColor = vec3(0.13, 0.10, 0.095);
      vec3 finalCol = mix(paper, inkColor, totalInk);

      gl_FragColor = vec4(finalCol, 1.0);
    }
  `;

  const geo = new THREE.PlaneGeometry(2.45, 1.82, 32, 24);
  const mat = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  const state = { x: 0, y: 0, scroll: 0 };
  const qx = gsap.quickTo(state, "x", { duration: durM, ease: "Out" });
  const qy = gsap.quickTo(state, "y", { duration: durM, ease: "Out" });

  function onMove(ev) {
    if (ev.pointerType === "touch") return;
    qx((ev.clientX / window.innerWidth) * 2 - 1);
    qy((ev.clientY / window.innerHeight) * 2 - 1);
  }
  function onLeave() { qx(0); qy(0); }

  const ro = new ResizeObserver(() => {
    if (!canvas.isConnected) return;
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  });
  ro.observe(canvas);
  renderer.setSize(canvas.clientWidth || 800, canvas.clientHeight || 600, false);

  gsap.to(canvas, { opacity: 1, duration: durM, ease: "Out" });

  video.addEventListener("loadeddata", () => {
    uniforms.uUseVideo.value = 1.0;
  }, { once: true });

  ScrollTrigger.create({
    trigger: canvas.closest(".section") || canvas,
    start: "top 85%",
    end: "bottom top",
    onEnter: () => {
      gsap.to(uniforms.uReveal, { value: 1.0, duration: 1.8, ease: "power2.out" });
      video.play().catch(() => {});
    },
    onEnterBack: () => {
      uniforms.uReveal.value = 1.0;
      video.play().catch(() => {});
    },
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause()
  });

  gsap.fromTo(state, { scroll: -1 }, {
    scroll: 1,
    ease: "none",
    scrollTrigger: {
      trigger: canvas.closest(".section") || canvas,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  window.addEventListener("pointermove", onMove);
  document.documentElement.addEventListener("mouseleave", onLeave);

  function renderTick() {
    if (!canvas.isConnected) {
      gsap.ticker.remove(renderTick);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      renderer.dispose();
      return;
    }
    mesh.rotation.y = state.x * 0.14;
    mesh.rotation.x = state.y * 0.10 + state.scroll * 0.08;
    renderer.render(scene, camera);
  }
  gsap.ticker.add(renderTick);
}
async function initFluidCursor(){function e(e){const{width:t,height:a}=e.getBoundingClientRect(),r=e.cloneNode(!0);r.removeAttribute("style"),r.setAttribute("width",d),r.setAttribute("height",Math.round(d*a/t)),r.querySelectorAll("[fill]").forEach((e=>e.setAttribute("fill","#fff")));const n=new Image;n.onload=()=>{e._fluidMask=new i.Texture(n),e._fluidMask.anisotropy=S.capabilities.getMaxAnisotropy(),e._fluidMask.needsUpdate=!0},n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(r))}function t(){const t="none"===o.style.display?document.querySelector("[data-fluid-mask] svg"):null;t!==H&&(H?._fluidMask?.dispose(),H=t,t&&e(t));const a=t?._fluidMask;if(!a)return void D.uniforms.uMaskRect.value.set(-2,-2,1,1);let r=1;for(let e=t.parentElement;e;e=e.parentElement)r*=parseFloat(getComputedStyle(e).opacity);const n=t.getBoundingClientRect();D.uniforms.uMask.value=a,D.uniforms.uMaskOpacity.value=r**4,D.uniforms.uMaskRect.value.set(n.left/window.innerWidth,1-n.bottom/window.innerHeight,n.width/window.innerWidth,n.height/window.innerHeight)}function a(e,t){C.material=e,S.setRenderTarget(t),S.render(C,b)}function r(){if(!(W++>300)){U.splice(0).forEach((({x:e,y:t,dx:r,dy:n})=>{R.uniforms.uPoint.value.set(e,t),R.uniforms.uColor.value.set(r,n,1),R.uniforms.uTarget.value=k.read.texture,a(R,k.write),k.swap(),R.uniforms.uTarget.value=P.read.texture,a(R,P.write),P.swap()})),O.uniforms.uVelocity.value=k.read.texture,a(O,L),F.uniforms.uTexture.value=A.read.texture,a(F,A.write),A.swap();for(let e=0;e<m;e++)B.uniforms.uPressure.value=A.read.texture,a(B,A.write),A.swap();$.uniforms.uPressure.value=A.read.texture,$.uniforms.uVelocity.value=k.read.texture,a($,k.write),k.swap(),_.uniforms.uVelocity.value=k.read.texture,_.uniforms.uSource.value=k.read.texture,_.uniforms.uDissipation.value=f,a(_,k.write),k.swap(),_.uniforms.uVelocity.value=k.read.texture,_.uniforms.uSource.value=P.read.texture,_.uniforms.uDissipation.value=g,a(_,P.write),P.swap(),t(),D.uniforms.uDensity.value=P.read.texture,a(D,null)}}const n=document.querySelector("[data-fluid-cursor]");if(!n)return;const o=document.querySelector("[data-preloader]"),i=await import("/assets/vendor/three.module.js"),l=[249/255,244/255,238/255],c=.03,s=3,d=4096,u=128,p=512,m=3,g=.98,f=1,v=.5,h=.005,y=5,w=.016,S=new i.WebGLRenderer({canvas:n,alpha:!0,premultipliedAlpha:!0});S.setClearColor(0,0),S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.setSize(window.innerWidth,window.innerHeight,!1);const b=new i.Camera,x=new i.BufferGeometry;x.setAttribute("position",new i.Float32BufferAttribute([-1,-1,0,3,-1,0,-1,3,0],3));const C=new i.Mesh(x);C.frustumCulled=!1;const E=(e,t,a)=>new i.WebGLRenderTarget(e,e,{type:i.HalfFloatType,format:t,minFilter:a,magFilter:a,depthBuffer:!1}),T=(...e)=>({read:E(...e),write:E(...e),swap(){[this.read,this.write]=[this.write,this.read]}}),P=T(p,i.RGBAFormat,i.LinearFilter),k=T(u,i.RGFormat,i.LinearFilter),A=T(u,i.RedFormat,i.NearestFilter),L=E(u,i.RedFormat,i.NearestFilter),q="\n    precision highp float;\n    in vec3 position;\n    uniform vec2 texelSize;\n    out vec2 vUv;\n    out vec2 vL;\n    out vec2 vR;\n    out vec2 vT;\n    out vec2 vB;\n    void main() {\n      vUv = position.xy * 0.5 + 0.5;\n      vL = vUv - vec2(texelSize.x, 0.0);\n      vR = vUv + vec2(texelSize.x, 0.0);\n      vT = vUv + vec2(0.0, texelSize.y);\n      vB = vUv - vec2(0.0, texelSize.y);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ",M={value:new i.Vector2(1/u,1/u)},I=(e,t)=>new i.RawShaderMaterial({glslVersion:i.GLSL3,vertexShader:q,fragmentShader:`\n      precision highp float;\n      precision highp sampler2D;\n      uniform vec2 texelSize;\n      in vec2 vUv;\n      in vec2 vL;\n      in vec2 vR;\n      in vec2 vT;\n      in vec2 vB;\n      out vec4 fragColor;\n      ${e}\n    `,uniforms:{texelSize:M,...t},blending:i.NoBlending,depthTest:!1,depthWrite:!1}),R=I("\n    uniform sampler2D uTarget;\n    uniform float uAspect;\n    uniform vec3 uColor;\n    uniform vec2 uPoint;\n    uniform float uRadius;\n    void main() {\n      vec2 p = vUv - uPoint;\n      p.x *= uAspect;\n      fragColor = vec4(texture(uTarget, vUv).xyz + exp(-dot(p, p) / uRadius) * uColor, 1.0);\n    }\n  ",{uTarget:{value:null},uAspect:{value:window.innerWidth/window.innerHeight},uColor:{value:new i.Vector3},uPoint:{value:new i.Vector2},uRadius:{value:h}}),_=I("\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform float uDt;\n    uniform float uDissipation;\n    void main() {\n      vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * texelSize;\n      fragColor = vec4(uDissipation * texture(uSource, coord).xyz, 1.0);\n    }\n  ",{uVelocity:{value:null},uSource:{value:null},uDt:{value:w},uDissipation:{value:1}}),O=I("\n    uniform sampler2D uVelocity;\n    void main() {\n      float L = texture(uVelocity, vL).x;\n      float R = texture(uVelocity, vR).x;\n      float T = texture(uVelocity, vT).y;\n      float B = texture(uVelocity, vB).y;\n      vec2 C = texture(uVelocity, vUv).xy;\n      if (vL.x < 0.0) L = -C.x;\n      if (vR.x > 1.0) R = -C.x;\n      if (vT.y > 1.0) T = -C.y;\n      if (vB.y < 0.0) B = -C.y;\n      fragColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);\n    }\n  ",{uVelocity:{value:null}}),F=I("\n    uniform sampler2D uTexture;\n    uniform float uValue;\n    void main() {\n      fragColor = uValue * texture(uTexture, vUv);\n    }\n  ",{uTexture:{value:null},uValue:{value:v}}),B=I("\n    uniform sampler2D uPressure;\n    uniform sampler2D uDivergence;\n    void main() {\n      float L = texture(uPressure, vL).x;\n      float R = texture(uPressure, vR).x;\n      float T = texture(uPressure, vT).x;\n      float B = texture(uPressure, vB).x;\n      float div = texture(uDivergence, vUv).x;\n      fragColor = vec4((L + R + B + T - div) * 0.25, 0.0, 0.0, 1.0);\n    }\n  ",{uPressure:{value:null},uDivergence:{value:L.texture}}),$=I("\n    uniform sampler2D uPressure;\n    uniform sampler2D uVelocity;\n    void main() {\n      float L = texture(uPressure, vL).x;\n      float R = texture(uPressure, vR).x;\n      float T = texture(uPressure, vT).x;\n      float B = texture(uPressure, vB).x;\n      fragColor = vec4(texture(uVelocity, vUv).xy - vec2(R - L, T - B), 0.0, 1.0);\n    }\n  ",{uPressure:{value:null},uVelocity:{value:null}
}),D=I("\n    uniform sampler2D uDensity;\n    uniform vec3 uColor;\n    uniform float uIntensity;\n    uniform sampler2D uMask;\n    uniform vec4 uMaskRect;\n    uniform float uMaskIntensity;\n    uniform float uMaskOpacity;\n    void main() {\n      float density = texture(uDensity, vUv).b;\n      vec2 m = (vUv - uMaskRect.xy) / uMaskRect.zw;\n      float inside = step(0.0, m.x) * step(m.x, 1.0) * step(0.0, m.y) * step(m.y, 1.0);\n      float logo = texture(uMask, m).a * inside * uMaskOpacity * clamp(density * uMaskIntensity, 0.0, 1.0);\n      float a = max(clamp(density * uIntensity, 0.0, 1.0), logo);\n      fragColor = vec4(uColor * a, a);\n    }\n  ",{uDensity:{value:null},uColor:{value:new i.Vector3(...l)},uIntensity:{value:c},uMask:{value:null},uMaskRect:{value:new i.Vector4(-2,-2,1,1)},uMaskIntensity:{value:s},uMaskOpacity:{value:1}});let H=null;const U=[];let W=1/0,V=null,z=null;window.addEventListener("pointermove",(e=>{const t=e.clientX,a=e.clientY;null===V||t===V&&a===z||(U.push({x:t/window.innerWidth,y:1-a/window.innerHeight,dx:(t-V)*y,dy:(z-a)*y}),W=0),V=t,z=a})),window.addEventListener("resize",(()=>{S.setSize(window.innerWidth,window.innerHeight,!1),R.uniforms.uAspect.value=window.innerWidth/window.innerHeight})),gsap.ticker.add(r)}gsap.registerPlugin(ScrollTrigger,CustomEase,SplitText,Flip);let lenis=null,localLenisInstances=[],breakPoint=992,mm=gsap.matchMedia(),resizeTimeout=null,lastWidth=window.innerWidth;const utmParams=new URLSearchParams(window.location.search);let hideHeaderScroll=null,activeFrameInstances=[],durS=.4,durM=.8,durL=1.2,stagger=.1,delayReveal=.3;CustomEase.create("InOut","0.75,0,0.25,1"),CustomEase.create("Out","0.25,1,0.5,1"),CustomEase.create("In","0.5,0,0.75,0"),CustomEase.create("Ease","0.25,0.1,0.25,1"),CustomEase.create("Write","0.333,0,0.667,1"),CustomEase.create("diveIn","0.6,0,0,1"),CustomEase.create("horScroll","0.25,0,0.75,1"),document.documentElement.style.setProperty("--_100svh",`${window.innerHeight}px`),window.addEventListener("resize",(()=>{window.innerWidth!==lastWidth&&(lastWidth=window.innerWidth,clearTimeout(resizeTimeout),resizeTimeout=setTimeout((()=>{ScrollTrigger.refresh(!0)}),40))})),history.scrollRestoration="manual",initPreloader();


function initHeroReel(e = document) {
  const reel = e.querySelector("[data-hero-reel]");
  if (!reel) return;
  const slides = [...reel.querySelectorAll(".hero-reel-slide")];
  const dots = [...e.querySelectorAll("[data-hero-dot]")];
  const bar = e.querySelector("[data-hero-progress]");
  const idxNum = e.querySelector("[data-hero-index]");
  const nameEl = e.querySelector("[data-hero-name]");
  const locEl = e.querySelector("[data-hero-loc]");
  const linkEl = e.querySelector("[data-hero-link]");
  if (!slides.length) return;

  let current = 0;
  let tween = null;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => {
      const v = s.querySelector("video");
      if (i === current) {
        s.classList.add("is-active");
        if (v) { v.currentTime = 0; v.play().catch(() => {}); }
      } else {
        s.classList.remove("is-active");
        if (v) v.pause();
      }
    });
    dots.forEach((d, i) => d.classList.toggle("is-active", i === current));
    const activeSlide = slides[current];
    if (idxNum) idxNum.textContent = activeSlide.dataset.index || (current + 1);
    if (nameEl) nameEl.textContent = activeSlide.dataset.name || "";
    if (locEl) locEl.textContent = activeSlide.dataset.loc || "";
    if (linkEl && activeSlide.dataset.href) linkEl.setAttribute("href", activeSlide.dataset.href);

    if (tween) tween.kill();
    if (bar) {
      tween = gsap.fromTo(bar, { scaleX: 0 }, {
        scaleX: 1,
        duration: 6.5,
        ease: "none",
        onComplete: () => goTo(current + 1)
      });
    }
  }

  dots.forEach((d, i) => {
    d.addEventListener("click", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      goTo(i);
    });
  });

  goTo(0);
}

function initSoundToggle() {
  const btn = document.querySelector("[data-sound-toggle]");
  if (!btn || btn._bound) return;
  btn._bound = true;
  let ctx = null;
  let playing = false;
  let masterGain = null;

  function startAmbient() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      ctx = new AudioCtx();
      masterGain = ctx.createGain();
      masterGain.gain.value = 0.001;
      masterGain.connect(ctx.destination);

      // Warm acoustic chord pad (Fmaj9 warm espresso lounge chord)
      const freqs = [174.61, 220.0, 261.63, 329.63, 392.0];
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const g = ctx.createGain();
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.value = f;
        osc.detune.value = (idx - 2) * 4;
        filter.type = "lowpass";
        filter.frequency.value = 620;
        g.gain.value = 0.045 / freqs.length;
        osc.connect(filter);
        filter.connect(g);
        g.connect(masterGain);
        osc.start();
      });
    }
    if (ctx.state === "suspended") ctx.resume();
    gsap.to(masterGain.gain, { value: 0.35, duration: 1.2 });
    playing = true;
    btn.classList.add("is-playing");
  }

  function stopAmbient() {
    if (masterGain) {
      gsap.to(masterGain.gain, { value: 0.0001, duration: 0.6 });
    }
    playing = false;
    btn.classList.remove("is-playing");
  }

  btn.addEventListener("click", () => {
    playing ? stopAmbient() : startAmbient();
  });
}
