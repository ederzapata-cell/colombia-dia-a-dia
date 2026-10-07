
const UNIT_TITLES = {"1": "Parts of Speech", "2": "Grammatical Structures", "3": "Lexis: Meaning & Word Formation", "4": "Lexical Relationships & Register", "5": "Phonology: Sounds & Stress", "6": "Phonology: Intonation & Connected Speech", "7": "Functions", "8": "Language Skills & Subskills", "9": "Motivation, Exposure & Acquisition", "10": "Errors & L1/L2 Learning", "11": "Learners: Characteristics & Needs", "12": "Presenting Language", "13": "Teaching Activities & Techniques", "14": "Teaching Approaches & Lesson Frameworks", "15": "Assessment"};

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function unitProgress(unit) { return readJSON(`tktReadyModule1Unit${unit}`, {}); }
function history() { return readJSON("tktReadyExamHistory", []); }
function fullMocks() { return history().filter(x => x.mode === "full_mock"); }
function latestPart(part) { return history().find(x => x.mode === "part_review" && Number(x.part) === part) || null; }

function statusFor(score) {
  if (!Number.isFinite(score)) return { label:"No evidence", cls:"developing" };
  if (score >= 80) return { label:"Strong", cls:"strong" };
  if (score >= 65) return { label:"Developing", cls:"developing" };
  return { label:"Review", cls:"review" };
}

function mastery(unit) {
  const ev = [];
  const up = unitProgress(unit);
  if (Number.isFinite(up.latestMiniTestPct)) ev.push({value:up.latestMiniTestPct, weight:1});

  history().slice(0,3).forEach((a,i) => {
    const s = a.unitStats?.[unit];
    if (Number.isFinite(s?.percentage)) ev.push({value:s.percentage, weight:[.7,.5,.3][i]||.3});
  });

  if (!ev.length) return null;
  const tw = ev.reduce((s,x)=>s+x.weight,0);
  return Math.round(ev.reduce((s,x)=>s+x.value*x.weight,0)/tw);
}

function readinessScore() {
  const c = [];
  const mocks = fullMocks().slice(0,3);
  if (mocks.length) {
    const w=[.5,.3,.2].slice(0,mocks.length), tw=w.reduce((a,b)=>a+b,0);
    c.push({score:mocks.reduce((s,a,i)=>s+a.percentage*w[i],0)/tw, weight:.6});
  }

  const ps=[1,2,3].map(p=>latestPart(p)?.percentage).filter(Number.isFinite);
  if (ps.length) c.push({score:ps.reduce((a,b)=>a+b,0)/ps.length, weight:.2});

  const us=[];
  for(let u=1;u<=15;u++){
    const p=unitProgress(u);
    if(Number.isFinite(p.latestMiniTestPct)) us.push(p.latestMiniTestPct);
  }
  if(us.length) c.push({score:us.reduce((a,b)=>a+b,0)/us.length, weight:.2});

  if(!c.length) return 0;
  const tw=c.reduce((s,x)=>s+x.weight,0);
  return Math.round(c.reduce((s,x)=>s+x.score*(x.weight/tw),0));
}

function confidence() {
  const mocks=fullMocks().length;
  const parts=[1,2,3].filter(p=>latestPart(p)).length;
  let units=0;
  for(let u=1;u<=15;u++) if(mastery(u)!=null) units++;

  const score=Math.round(
    Math.min(50,(mocks/2)*50)+
    Math.min(20,(parts/3)*20)+
    Math.min(30,(units/15)*30)
  );
  return {score,label:score>=70?"High":score>=35?"Medium":"Low"};
}

function readinessLevel(score) {
  if(score<55) return "Not ready";
  if(score<70) return "Developing";
  if(score<80) return "Almost ready";

  const mocks=fullMocks(), latest=mocks[0];
  const parts=latest?Object.values(latest.partStats||{}).map(x=>x.percentage).filter(Number.isFinite):[];
  let units=0;
  for(let u=1;u<=15;u++) if(mastery(u)!=null) units++;

  return mocks.length>=2 && latest?.percentage>=75 && parts.length===3 &&
    Math.min(...parts)>=65 && units>=12 ? "TKT Ready":"Almost ready";
}

function messageFor(level) {
  return {
    "Not ready":"Build more unit knowledge and take your first exam-style attempts.",
    "Developing":"Your foundation is growing. Keep working on weak units and Part Reviews.",
    "Almost ready":"Your performance is improving. Review priority units before your next Full Mock.",
    "TKT Ready":"Your evidence is strong and consistent. Maintain readiness with targeted review and fresh mocks."
  }[level];
}

function completedUnits() {
  let n=0;
  for(let u=1;u<=15;u++) if(Number.isFinite(unitProgress(u).latestMiniTestPct)) n++;
  return n;
}
function nextUnit() {
  for(let u=1;u<=15;u++) if(!Number.isFinite(unitProgress(u).latestMiniTestPct)) return u;
  return 15;
}

function renderReadiness() {
  const score=readinessScore(), level=readinessLevel(score), conf=confidence(), mocks=fullMocks();
  const best=mocks.length?Math.max(...mocks.map(x=>x.percentage)):null;

  document.querySelector("#dashboardReadinessScore").textContent=score;
  document.querySelector("#dashboardReadinessLabel").textContent=level;
  document.querySelector("#dashboardReadinessMessage").textContent=messageFor(level);
  document.querySelector("#dashboardConfidence").textContent=`${conf.label} confidence`;
  document.querySelector("#dashboardEvidence").textContent=conf.label;
  document.querySelector("#dashboardLatestMock").textContent=mocks[0]?`${mocks[0].percentage}%`:"—";
  document.querySelector("#dashboardBestMock").textContent=Number.isFinite(best)?`${best}%`:"—";
  document.querySelector(".score-ring").style.background=
    `conic-gradient(var(--primary) 0 ${score}%, #E8EEF7 ${score}% 100%)`;
}

function renderContinue() {
  const u=nextUnit();
  document.querySelector("#dashboardContinueTitle").textContent=`Unit ${u} — ${UNIT_TITLES[u]}`;
  document.querySelector("#dashboardResumeUnit").href=`./unit.html?unit=${u}`;
  document.querySelector("#dashboardContinuePreparing").href=`./unit.html?unit=${u}`;
  document.querySelector("#dashboardContinueNext").textContent="Learn → Practice → Mini Test";
}

function renderProgress() {
  const done=completedUnits(), pct=Math.round((done/15)*100);
  document.querySelector("#dashboardCompletedUnits").textContent=`${done}/15`;
  document.querySelector("#dashboardModuleProgress").textContent=`${pct}%`;
  document.querySelector("#dashboardModuleProgressFill").style.width=`${pct}%`;
}

function renderRecommendation() {
  const weak=[];
  for(let u=1;u<=15;u++){
    const m=mastery(u);
    if(m!=null && m<65) weak.push({unit:u,score:m});
  }
  weak.sort((a,b)=>a.score-b.score);

  const title=document.querySelector("#dashboardRecommendationTitle");
  const msg=document.querySelector("#dashboardRecommendationMessage");
  const list=document.querySelector("#dashboardPriorityList");
  const action=document.querySelector("#dashboardRecommendationAction");

  if(weak.length){
    const top=weak.slice(0,3);
    title.textContent="Review your priority units";
    msg.textContent="These units are currently below your readiness target.";
    list.innerHTML=top.map(x=>`
      <a class="priority-row" href="./unit.html?unit=${x.unit}#practice">
        <span class="priority-number">${String(x.unit).padStart(2,"0")}</span>
        <span><strong>${UNIT_TITLES[x.unit]}</strong><small>Mastery ${x.score}%</small></span>
        <span class="arrow">→</span>
      </a>`).join("");
    action.href=`./unit.html?unit=${top[0].unit}#practice`;
    action.textContent=`Review Unit ${top[0].unit}`;
  } else if(!fullMocks().length){
    title.textContent="Take your first Full Mock";
    msg.textContent="Complete an 80-question Module 1 Full Mock to establish exam-level evidence.";
    list.innerHTML="";
    action.href="./exam.html?mode=mock";
    action.textContent="Start Full Mock";
  } else {
    title.textContent="Keep building evidence";
    msg.textContent="Use another fresh Part Review or Full Mock to confirm consistent performance.";
    list.innerHTML="";
    action.href="./exam.html?mode=mock";
    action.textContent="Open Full Mock";
  }
}

function attempts() {
  const out=[];
  history().forEach(x=>out.push({
    title:x.mode==="full_mock"?"Module 1 Full Mock":`Part ${x.part} Review`,
    subtitle:x.mode==="full_mock"?"80-question exam simulation":`Part ${x.part} exam-style review`,
    score:x.percentage, completedAt:x.completedAt, href:"./exam-results.html"
  }));

  for(let u=1;u<=15;u++){
    const r=unitProgress(u).latestResult;
    if(r?.completedAt) out.push({
      title:`Unit ${u} Mini Test`, subtitle:UNIT_TITLES[u],
      score:r.percentage, completedAt:r.completedAt,
      href:`./unit.html?unit=${u}#results`
    });
  }

  return out.sort((a,b)=>new Date(b.completedAt)-new Date(a.completedAt));
}

function fmtDate(value) {
  const d=new Date(value), now=new Date();
  if(d.toDateString()===now.toDateString()) return "Today";
  return d.toLocaleDateString(undefined,{month:"short",day:"numeric"});
}

function renderRecent(limit=5) {
  const holder=document.querySelector("#dashboardRecentResults");
  const rows=attempts().slice(0,limit);

  if(!rows.length){
    holder.innerHTML=`<div class="dashboard-empty-row"><strong>No results yet</strong><span>Complete a Mini Test, Part Review or Full Mock.</span></div>`;
    return;
  }

  holder.innerHTML=rows.map(x=>{
    const s=statusFor(x.score);
    return `<a class="result-row dashboard-result-link" href="${x.href}">
      <span><strong>${x.title}</strong><small>${x.subtitle}</small></span>
      <span class="score-cell">${x.score}%</span>
      <span><em class="status-chip ${s.cls}">${s.label}</em></span>
      <span>${fmtDate(x.completedAt)}</span>
    </a>`;
  }).join("");
}

let expanded=false;
document.querySelector("#dashboardViewAllResults")?.addEventListener("click",()=>{
  expanded=!expanded;
  renderRecent(expanded?25:5);
  document.querySelector("#dashboardViewAllResults").textContent=expanded?"Show less":"View all";
});

document.querySelectorAll(".profile-card").forEach(btn=>{
  btn.addEventListener("click",()=>alert("Profile and account settings will be connected with Firebase Auth."));
});

renderReadiness();
renderContinue();
renderProgress();
renderRecommendation();
renderRecent();
