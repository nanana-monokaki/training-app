const FTP = 154;
const eventDate = new Date("2026-09-20T00:00:00+09:00");

const videos = {
  pullup: {
    title: "懸垂",
    set: "3回 x 3-5セット。できない日はネガティブ懸垂3回。",
    cue: "胸をバーに近づける意識。反動は使わず、肩をすくめない。",
    id: "vsAKt6YBd1A",
    fallback: "https://www.youtube.com/results?search_query=%E6%87%B8%E5%9E%82+%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0"
  },
  pushup: {
    title: "腕立て伏せ",
    set: "8-12回 x 3セット。",
    cue: "体を一直線に保ち、肘は開きすぎない。きつければ膝つき。",
    id: "d4dFDhRhuLc",
    fallback: "https://www.youtube.com/results?search_query=%E8%85%95%E7%AB%8B%E3%81%A6+%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0"
  },
  row: {
    title: "ワンハンドロウ",
    set: "左右10-12回 x 3セット。",
    cue: "背中を丸めず、肘を腰へ引く。首と肩に力を入れすぎない。",
    id: "v18dHxciPR8",
    fallback: "https://www.youtube.com/results?search_query=%E3%83%AF%E3%83%B3%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AD%E3%82%A6+%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0"
  },
  ytwl: {
    title: "YTWL",
    set: "各8回 x 2セット。",
    cue: "軽く小さく正確に。肩甲骨を動かし、首に力を入れない。",
    id: "LxP9Sqzfd4U",
    fallback: "https://www.youtube.com/results?search_query=YTWL+%E8%82%A9%E7%94%B2%E9%AA%A8"
  },
  goblet: {
    title: "ゴブレットスクワット",
    set: "10-12回 x 3セット。追い込みすぎない。",
    cue: "ダンベルを胸の前で持つ。膝とつま先の向きをそろえる。",
    id: "kDo3sQv0VHk",
    fallback: "https://www.youtube.com/results?search_query=%E3%82%B4%E3%83%96%E3%83%AC%E3%83%83%E3%83%88%E3%82%B9%E3%82%AF%E3%83%AF%E3%83%83%E3%83%88+%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0"
  },
  rdl: {
    title: "ダンベルRDL",
    set: "10-12回 x 3セット。",
    cue: "股関節を後ろへ引く。背中はまっすぐ、お尻ともも裏に効かせる。",
    id: "eFEVKmp3M4g",
    fallback: "https://www.youtube.com/results?search_query=%E3%83%80%E3%83%B3%E3%83%99%E3%83%AB+RDL+%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0"
  },
  split: {
    title: "ブルガリアンスクワット",
    set: "左右8回 x 2セット。疲労が強い週は省略。",
    cue: "前脚に体重を乗せる。膝が内側へ入らない範囲で浅めから。",
    id: "uODWo4YqbT8",
    fallback: "https://www.youtube.com/results?search_query=%E3%83%96%E3%83%AB%E3%82%AC%E3%83%AA%E3%82%A2%E3%83%B3%E3%82%B9%E3%82%AF%E3%83%AF%E3%83%83%E3%83%88+%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0"
  },
  calf: {
    title: "カーフレイズ",
    set: "15-20回 x 2セット。",
    cue: "上げ下げをゆっくり。壁に手を添えて左右差を減らす。",
    id: "UKXgHcEO-3o",
    fallback: "https://www.youtube.com/results?search_query=%E3%82%AB%E3%83%BC%E3%83%95%E3%83%AC%E3%82%A4%E3%82%BA+%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0"
  },
  plank: {
    title: "プランク",
    set: "35-45秒 x 3セット。",
    cue: "肘で床を押し、腰を反らない。呼吸を止めない。",
    id: "0G_OI6oVzLA",
    fallback: "https://www.youtube.com/results?search_query=%E3%83%97%E3%83%A9%E3%83%B3%E3%82%AF+%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0"
  },
  sideplank: {
    title: "サイドプランク",
    set: "左右25-35秒 x 2セット。",
    cue: "頭から足まで一直線。骨盤が落ちない秒数で止める。",
    id: "e2KU_wD_HMI",
    fallback: "https://www.youtube.com/results?search_query=%E3%82%B5%E3%82%A4%E3%83%89%E3%83%97%E3%83%A9%E3%83%B3%E3%82%AF+%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0"
  },
  deadbug: {
    title: "デッドバグ",
    set: "左右10回 x 2セット。",
    cue: "腰を床から浮かせない。手足を伸ばすほど難しくなる。",
    id: "K8E3RWbvhwM",
    fallback: "https://www.youtube.com/results?search_query=%E3%83%87%E3%83%83%E3%83%89%E3%83%90%E3%82%B0+%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0"
  },
  glute: {
    title: "グルートブリッジ",
    set: "12-15回 x 2セット。",
    cue: "腰ではなくお尻で持ち上げる。上で1秒止める。",
    id: "NUg_Xyn2okw",
    fallback: "https://www.youtube.com/results?search_query=%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%88%E3%83%96%E3%83%AA%E3%83%83%E3%82%B8+%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0"
  }
};

const strengthGroups = {
  upper: ["pullup", "pushup", "row", "ytwl"],
  lower: ["goblet", "rdl", "split", "calf"],
  core: ["plank", "sideplank", "deadbug", "glute"],
  light: ["pullup", "row", "deadbug", "glute"]
};

const plans = {
  tohoku: {
    title: "ツールド東北180km",
    note: "2026年9月20日想定。Z2、SST、ロング、補給練習を主役にする。",
    days: [
      rest("月", "休養 + 可動域", "完全休養。余裕があれば股関節・臀部・肩甲骨を10分。"),
      ride("火", "SST / Threshold + 上半身", "75-90分", "基礎期 12分 x 3 @135-145W。強化期 15分 x 3。イベント6週前から20分 x 2 @140-150W。", "FTP Builder / SST系。コースはTempus Fugit、Tick Tock。", "upper", [
        zwift("Zwift workouts", "https://whatsonzwift.com/workouts"),
        zwift("Tempus Fugit", "https://whatsonzwift.com/world/watopia/route/tempus-fugit")
      ]),
      ride("水", "任意回復 or 休養 + 体幹", "0-45分", "@85-105W。疲労度4以上なら休む。", "Recovery Ride / Volcano Flat。", "core", [
        zwift("Volcano Flat", "https://whatsonzwift.com/world/watopia/route/volcano-flat")
      ]),
      ride("木", "VO2max または Tempo + 下半身", "70-90分", "通常 3分 x 4 @175-182W。疲労週はTempo 20分 x 2 @120-132W。", "VO2max系 / Gran Fondo Prep系。コースはMountain Route、Innsbruckring。", "lower", [
        zwift("Gran Fondo", "https://whatsonzwift.com/workouts/gran-fondo"),
        zwift("Mountain Route", "https://whatsonzwift.com/world/watopia/route/mountain-route")
      ]),
      rest("金", "完全休養", "固定休養。睡眠と炭水化物を削らない。"),
      ride("土", "ロングZ2", "2-5時間", "2.0h → 2.5h → 3.0h → 回復週。最終的に4-5h。基本@95-115W。糖質50-70g/時。", "Gran Fondo / Endurance。実走できる日は実走優先。", null, [
        zwift("Gran Fondo", "https://whatsonzwift.com/workouts/gran-fondo"),
        zwift("Big Foot Hills", "https://whatsonzwift.com/world/watopia/route/big-foot-hills")
      ]),
      ride("日", "Easy + 体幹", "45-75分", "@85-110W。脚が軽ければZ2、重ければ流すだけ。", "Endurance short / Recovery。", "core", [
        zwift("Tempus Fugit", "https://whatsonzwift.com/world/watopia/route/tempus-fugit")
      ])
    ]
  },
  long: {
    title: "短期ロング準備",
    note: "4週間で補給・登坂ペース・脚残しを整える。",
    days: [
      rest("月", "完全休養", "散歩・ストレッチだけ。"),
      ride("火", "SST + 上半身", "75-90分", "10分 x 3 @135-145W / レスト5分。", "SST系。コースはTempus Fugit。", "upper", [
        zwift("Tempus Fugit", "https://whatsonzwift.com/world/watopia/route/tempus-fugit")
      ]),
      ride("水", "回復走 + 体幹", "30-45分", "@85-105W。脚が重いなら休む。", "Recovery Ride / Volcano Flat。", "core", [
        zwift("Volcano Flat", "https://whatsonzwift.com/world/watopia/route/volcano-flat")
      ]),
      ride("木", "Z2持久", "75-90分", "@95-115W。会話できる強度。", "Endurance / Zone 2。", null, [
        zwift("Zwift workouts", "https://whatsonzwift.com/workouts")
      ]),
      rest("金", "完全休養", "睡眠と補給を優先。"),
      ride("土", "ロング", "2.5-4時間", "基本@95-115W、登りだけ120-135Wまで。糖質40-60g/時。", "Gran Fondo系または実走。", null, [
        zwift("Gran Fondo", "https://whatsonzwift.com/workouts/gran-fondo")
      ]),
      ride("日", "Easy + 軽補強", "45-60分", "@85-105W。疲れていれば完全休養。", "Recovery / Endurance short。", "light", [
        zwift("Volcano Flat", "https://whatsonzwift.com/world/watopia/route/volcano-flat")
      ])
    ]
  },
  base: {
    title: "通常期ワークアウト",
    note: "イベント後の維持用。減量・FTP向上・ロング耐性を回す。",
    days: [
      rest("月", "休養", "体重・体脂肪・睡眠の確認。"),
      ride("火", "FTP向上 + 上半身", "75-90分", "15分 x 3 @135-145W。余裕が出たら20分 x 2。", "FTP Builder / SST。", "upper", [
        zwift("FTP Builder", "https://whatsonzwift.com/workouts/ftp-builder")
      ]),
      ride("水", "筋トレ中心", "0-30分", "バイクなし。脚が軽ければ回復走30分まで。", "なし、またはRecovery Ride。", "lower", [
        zwift("Zwift workouts", "https://whatsonzwift.com/workouts")
      ]),
      ride("木", "VO2max + 体幹", "60-75分", "3分 x 5 @172-182W / レスト3分。月2回で十分。", "VO2max系。", "core", [
        zwift("Zwift workouts", "https://whatsonzwift.com/workouts")
      ]),
      rest("金", "休養", "ストレッチのみ。"),
      ride("土", "Z2ロング", "2-3.5時間", "@95-115W。減量期も補給は入れる。", "Endurance / Gran Fondo。", null, [
        zwift("Gran Fondo", "https://whatsonzwift.com/workouts/gran-fondo"),
        zwift("Tempus Fugit", "https://whatsonzwift.com/world/watopia/route/tempus-fugit")
      ]),
      ride("日", "Easy + 軽補強", "45-60分", "@85-105W。気分よく終える。", "Recovery。", "light", [
        zwift("Volcano Flat", "https://whatsonzwift.com/world/watopia/route/volcano-flat")
      ])
    ]
  }
};

let calendarCursor = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

function rest(day, title, detail) {
  return { day, title, type: "休養", duration: "0-20分", detail, zwift: "なし", strength: null, links: [] };
}

function ride(day, title, duration, detail, zwift, strength, links = []) {
  return { day, title, type: "ライド", duration, detail, zwift, strength, links };
}

function zwift(label, url) {
  return { label, url };
}

function todayIndex() {
  const day = new Date().getDay();
  return day === 0 ? 6 : day - 1;
}

function daysLeft() {
  return Math.max(0, Math.ceil((eventDate - new Date()) / 86400000));
}

function exerciseHtml(key, embed = false) {
  const item = videos[key];
  const iframe = embed ? `
    <div class="video">
      <iframe src="https://www.youtube-nocookie.com/embed/${item.id}" title="${item.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  ` : "";
  return `
    <div class="exercise">
      <div class="exercise-title"><span>${item.title}</span><span class="hint">${item.set}</span></div>
      <p>${item.cue}</p>
      ${iframe}
      <a class="video-link" href="${item.fallback}" target="_blank" rel="noreferrer">動画が出ない場合はYouTubeで探す</a>
    </div>
  `;
}

function strengthHtml(groupKey, embed) {
  if (!groupKey) return `<p class="hint">筋トレなし。回復と補給を優先。</p>`;
  return strengthGroups[groupKey].map((key) => exerciseHtml(key, embed)).join("");
}

function dayHtml(day, index, open = false) {
  const tagClass = day.type === "休養" ? "tag rest" : "tag";
  const durationLabel = day.type === "ライド" ? `Zwift ${day.duration}` : day.duration;
  const links = day.links.length ? `
    <div class="zwift-links">
      ${day.links.map((item) => `<a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>`).join("")}
    </div>
  ` : "";
  return `
    <article class="accordion ${open ? "open" : ""}">
      <button class="acc-trigger" type="button" aria-expanded="${open}">
        <span><span class="${tagClass}">${day.day}</span>${day.title}</span>
        <span>${durationLabel}</span>
      </button>
      <div class="acc-body">
        <div class="workout">
          <p><b>Zwift目安時間:</b> ${day.duration}</p>
          <p><b>内容:</b> ${day.detail}</p>
          <p><b>Zwift:</b> ${day.zwift}</p>
          ${links}
        </div>
        ${strengthHtml(day.strength, true)}
      </div>
    </article>
  `;
}

function render() {
  const goal = document.querySelector("#goalSelect").value;
  const plan = plans[goal];
  const idx = todayIndex();
  document.querySelector("#goalTitle").textContent = plan.title;
  document.querySelector("#goalNote").textContent = plan.note;
  document.querySelector("#daysLeft").textContent = goal === "tohoku" ? `${daysLeft()}日` : "任意";
  document.querySelector("#todayText").textContent = `FTP${FTP}W / ${plan.title}`;
  document.querySelector("#todayCard").innerHTML = dayHtml(plan.days[idx], idx, true);
  document.querySelector("#weekList").innerHTML = plan.days.map((day, i) => dayHtml(day, i, i === idx)).join("");
  bindAccordions();
}

function bindAccordions() {
  document.querySelectorAll(".acc-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".accordion");
      const isOpen = card.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function logKey() {
  return `training-log-${new Date().toISOString().slice(0, 10)}`;
}

function historyKey() {
  return "training-log-history";
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function loadHistory() {
  const history = JSON.parse(localStorage.getItem(historyKey()) || "[]");
  return Array.isArray(history) ? history : [];
}

function saveHistory(history) {
  localStorage.setItem(historyKey(), JSON.stringify(history));
}

function hydrateLog() {
  const params = new URLSearchParams(location.search);
  const paramValues = {};
  if (params.get("weight")) paramValues.weight = params.get("weight");
  if (params.get("bodyFat")) paramValues.bodyFat = params.get("bodyFat");
  if (params.get("bodyfat")) paramValues.bodyFat = params.get("bodyfat");

  try {
    const history = loadHistory();
    const fromHistory = history.find((item) => item.date === todayIso()) || {};
    const saved = JSON.parse(localStorage.getItem(logKey()) || "{}");
    const merged = { ...saved, ...fromHistory, ...paramValues };
    ["weight", "bodyFat", "fatigue", "status", "memo"].forEach((id) => {
      const el = document.querySelector(`#${id}`);
      if (merged[id]) el.value = merged[id];
    });
    syncLogControls();
  } catch {
    document.querySelector("#saveStatus").textContent = "保存データを読めませんでした。";
  }
}

function numeric(value) {
  const parsed = Number.parseFloat(String(value).replace(",", "."));
  return Number.isFinite(parsed) ? parsed : null;
}

function upsertTodayLog(data) {
  const history = loadHistory().filter((item) => item.date !== data.date);
  history.push(data);
  history.sort((a, b) => a.date.localeCompare(b.date));
  saveHistory(history);
}

function drawChart(canvasId, history, field, label, color, minOverride = null, maxOverride = null) {
  const canvas = document.querySelector(`#${canvasId}`);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  const points = history
    .map((item) => ({ date: item.date, value: numeric(item[field]) }))
    .filter((item) => item.value !== null)
    .slice(-30);

  ctx.fillStyle = "#6b6b6b";
  ctx.font = "24px sans-serif";

  if (points.length === 0) {
    ctx.fillText(`${label}の記録がありません`, 28, 58);
    return;
  }

  const values = points.map((item) => item.value);
  const minValue = minOverride ?? Math.min(...values);
  const maxValue = maxOverride ?? Math.max(...values);
  const padding = maxValue === minValue ? 1 : (maxValue - minValue) * 0.12;
  const min = minOverride ?? minValue - padding;
  const max = maxOverride ?? maxValue + padding;
  const plot = { left: 54, right: width - 22, top: 24, bottom: height - 48 };

  ctx.strokeStyle = "#dedede";
  ctx.lineWidth = 2;
  for (let i = 0; i < 4; i += 1) {
    const y = plot.top + ((plot.bottom - plot.top) / 3) * i;
    ctx.beginPath();
    ctx.moveTo(plot.left, y);
    ctx.lineTo(plot.right, y);
    ctx.stroke();
  }

  ctx.fillStyle = "#6b6b6b";
  ctx.font = "18px sans-serif";
  ctx.fillText(max.toFixed(1), 8, plot.top + 6);
  ctx.fillText(min.toFixed(1), 8, plot.bottom);

  const xFor = (index) => points.length === 1
    ? (plot.left + plot.right) / 2
    : plot.left + ((plot.right - plot.left) / (points.length - 1)) * index;
  const yFor = (value) => plot.bottom - ((value - min) / (max - min || 1)) * (plot.bottom - plot.top);

  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.beginPath();
  points.forEach((point, index) => {
    const x = xFor(index);
    const y = yFor(point.value);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  points.forEach((point, index) => {
    const x = xFor(index);
    const y = yFor(point.value);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "#202020";
  ctx.font = "20px sans-serif";
  ctx.fillText(points[0].date.slice(5), plot.left, height - 18);
  ctx.textAlign = "right";
  ctx.fillText(points[points.length - 1].date.slice(5), plot.right, height - 18);
  ctx.textAlign = "left";
}

function renderHistory() {
  const history = loadHistory();
  const recent = history.slice(-30);
  drawChart("weightChart", recent, "weight", "体重", "#ff0000");
  drawChart("bodyFatChart", recent, "bodyFat", "体脂肪率", "#202020");
  drawChart("fatigueChart", recent, "fatigue", "疲労度", "#b90000", 1, 5);

  const list = document.querySelector("#historyList");
  const count = document.querySelector("#historyCount");
  if (count) count.textContent = `${history.length}件`;
  if (!list) return;

  const rows = history.slice().reverse();
  if (rows.length === 0) {
    list.innerHTML = `<div class="empty-state">まだ記録がありません。</div>`;
    return;
  }

  list.innerHTML = rows.map((item) => `
    <article class="history-item">
      <div class="history-meta">
        <b>${item.date}</b>
        <span>体重 ${item.weight || "-"}kg</span>
        <span>体脂肪 ${item.bodyFat || "-"}%</span>
        <span>疲労度 ${item.fatigue || "-"}</span>
        <span>${item.status || "未入力"}</span>
      </div>
      ${item.memo ? `<p>${escapeHtml(item.memo)}</p>` : `<p class="hint">メモなし</p>`}
    </article>
  `).join("");
}

function renderCalendar() {
  const calendar = document.querySelector("#trainingCalendar");
  const title = document.querySelector("#calendarTitle");
  const detail = document.querySelector("#calendarDetail");
  if (!calendar || !title || !detail) return;

  const history = loadHistory();
  const byDate = new Map(history.map((item) => [item.date, item]));
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  title.textContent = `${year}年${month + 1}月`;

  const first = new Date(year, month, 1);
  const start = new Date(year, month, 1 - first.getDay());
  const today = todayIso();
  const labels = ["日", "月", "火", "水", "木", "金", "土"];
  const cells = labels.map((label) => `<div class="calendar-weekday">${label}</div>`);

  for (let i = 0; i < 42; i += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const iso = toIsoDate(date);
    const item = byDate.get(iso);
    const status = normalizeStatus(item?.status);
    const outside = date.getMonth() !== month ? " outside" : "";
    const isToday = iso === today ? " today" : "";
    const hasMemo = item?.memo ? `<span class="memo-mark">メモ</span>` : "";
    cells.push(`
      <button class="calendar-day ${status.className}${outside}${isToday}" type="button" data-date="${iso}">
        <span class="date"><span>${date.getDate()}</span>${hasMemo}</span>
        <span class="status">${status.label}</span>
      </button>
    `);
  }

  calendar.innerHTML = cells.join("");
  calendar.querySelectorAll(".calendar-day").forEach((button) => {
    button.addEventListener("click", () => showCalendarDetail(button.dataset.date));
  });
  showCalendarDetail(today);
}

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function normalizeStatus(status) {
  if (status === "実施") return { label: "実施", className: "done" };
  if (status === "短縮") return { label: "短縮", className: "short" };
  if (status === "休養") return { label: "休養", className: "rest" };
  return { label: "未入力", className: "none" };
}

function showCalendarDetail(date) {
  const detail = document.querySelector("#calendarDetail");
  if (!detail) return;
  const item = loadHistory().find((entry) => entry.date === date);
  if (!item) {
    detail.innerHTML = `
      <article class="calendar-detail-card">
        <h3>${date}</h3>
        <p class="hint">この日の記録はありません。</p>
      </article>
    `;
    return;
  }
  detail.innerHTML = `
    <article class="calendar-detail-card">
      <h3>${item.date}</h3>
      <div class="history-meta">
        <span>体重 <b>${item.weight || "-"}kg</b></span>
        <span>体脂肪 <b>${item.bodyFat || "-"}%</b></span>
        <span>疲労度 <b>${item.fatigue || "-"}</b></span>
        <span>状態 <b>${item.status || "未入力"}</b></span>
      </div>
      ${item.memo ? `<p>${escapeHtml(item.memo)}</p>` : `<p class="hint">メモなし</p>`}
    </article>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.querySelector("#goalSelect").addEventListener("change", (event) => {
  localStorage.setItem("goal", event.target.value);
  render();
});

function syncLogControls() {
  const weight = document.querySelector("#weight");
  const bodyFat = document.querySelector("#bodyFat");
  const fatigue = document.querySelector("#fatigue");
  const status = document.querySelector("#status");
  document.querySelector("#weightValue").textContent = `${Number(weight.value).toFixed(1)}kg`;
  document.querySelector("#bodyFatValue").textContent = `${Number(bodyFat.value).toFixed(1)}%`;
  document.querySelector("#fatigueValue").textContent = fatigue.value;
  document.querySelector("#statusValue").textContent = status.value;
  document.querySelectorAll("[data-status]").forEach((button) => {
    button.classList.toggle("active", button.dataset.status === status.value);
  });
}

["weight", "bodyFat", "fatigue"].forEach((id) => {
  document.querySelector(`#${id}`).addEventListener("input", syncLogControls);
});

document.querySelectorAll("[data-status]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#status").value = button.dataset.status;
    syncLogControls();
  });
});

document.querySelector("#saveLog").addEventListener("click", () => {
  const data = { date: todayIso(), updatedAt: new Date().toISOString() };
  ["weight", "bodyFat", "fatigue", "status", "memo"].forEach((id) => {
    data[id] = document.querySelector(`#${id}`).value;
  });
  localStorage.setItem(logKey(), JSON.stringify(data));
  upsertTodayLog(data);
  document.querySelector("#saveStatus").textContent = "保存しました。";
  renderHistory();
  renderCalendar();
});

document.querySelector("#clearLog").addEventListener("click", () => {
  localStorage.removeItem(logKey());
  saveHistory(loadHistory().filter((item) => item.date !== todayIso()));
  ["weight", "bodyFat", "memo"].forEach((id) => {
    if (id === "memo") document.querySelector(`#${id}`).value = "";
  });
  document.querySelector("#weight").value = "57.0";
  document.querySelector("#bodyFat").value = "21.0";
  document.querySelector("#fatigue").value = "3";
  document.querySelector("#status").value = "未入力";
  document.querySelector("#saveStatus").textContent = "今日の記録を削除しました。";
  syncLogControls();
  renderHistory();
  renderCalendar();
});

document.querySelector("#prevMonth").addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
  renderCalendar();
});

document.querySelector("#nextMonth").addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
  renderCalendar();
});

const savedGoal = localStorage.getItem("goal");
if (savedGoal && plans[savedGoal]) document.querySelector("#goalSelect").value = savedGoal;
hydrateLog();
syncLogControls();
render();
renderHistory();
renderCalendar();
