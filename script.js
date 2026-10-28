const currencies = ['₴', '$', '€', 'zł'];
let currentCurrency = localStorage.getItem('app_currency') || '₴';

const langData = {
    ua: {
        langCode: "RU",
        title: "Реальний вихлоп",
        subtitle: "Калькулятор реального профіту кур'єра",
        calendarBtn: "Календар",
        tabShift: "Зміна",
        tabOrder: "Замовлення",
        tabProfile: "Профіль",
        profileSubtitle: "Статистика, ранг та твої досягнення",
        orderSubtitle: "Швидкий розрахунок: чи варто брати це замовлення?",
        orderPay: "Оплата за замовлення",
        orderDist: "Загальний шлях по замовленню (км)",
        orderCalcBtn: "Розрахувати вигоду замовлення",
        orderNet: "Чистий профіт:",
        orderAmort: "Амортизація:",
        wearLabel: "Амортизація за 1 км",
        serviceLabel: "Сервіс / Джерело",
        optGlovo: "Glovo (Жовтий)",
        optBolt: "Bolt Food (Зелений)",
        optLocal: "Локальний заклад (Синій)",
        optOther: "Інше",
        revLabel: "Виручка",
        tipsLabel: "Чай",
        distLabel: "Пробіг (км)",
        fuelLabel: "Пальне",
        hoursLabel: "Час на лінії (годин)",
        submitBtn: "Додати зміну",
        resTitle: "Підсумки зміни:",
        netLabel: "Чистий профіт:",
        hourLabel: "Вихлоп за годину:",
        wearResLabel: "Амортизація:",
        chartTitle: "Динаміка профіту",
        achTitle: "🏆 Досягнення кур'єра",
        backupTitle: "💾 Резервна копія даних",
        exportBtn: "📤 Експорт",
        importBtn: "📥 Імпорт",
        supportBtn: "☕ Донат автору (на каву)",
        modalTitle: "Календар та підсумки",
        mProfit: "Профіт за міс",
        mTips: "Чай за міс",
        mDist: "Пробіг",
        mHour: "За год. сер.",
        shiftsFor: "Дата:",
        fillDateBtn: "➕ Заповнити зміну",
        closeBtn: "Закрити",
        goalBtn: "🎯 Ціль місяця",
        rankTitle: "Ранг:",
        modalGoalTitle: "Ціль по профіту на місяць",
        modalGoalSub: "Вкажи суму чистими, яку хочеш заробити за поточний місяць.",
        saveGoal: "Зберегти",
        cancelGoal: "Скасувати",
        modalVehTitle: "Свій транспорт",
        modalVehSub: "Вкажи назву та амортизацію за 1 км.",
        saveVehBtn: "Додати",
        cancelVehBtn: "Скасувати",
        verdictTop: "🔥 ЧУДОВЕ ЗАМОВЛЕННЯ — ВАРТО ЇХАТИ!",
        verdictNormal: "⚠️ НОРМАЛЬНО, АЛЕ МОЖНА ДУМАТИ",
        verdictBad: "❌ В МІНУС АБО МАЛО — КРАЩЕ ВІДМОВИТИСЬ",
        weekDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
        months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]
    },
    ru: {
        langCode: "UA",
        title: "Реальный выхлоп",
        subtitle: "Калькулятор реального профита курьера",
        calendarBtn: "Календарь",
        tabShift: "Смена",
        tabOrder: "Заказ",
        tabProfile: "Профиль",
        profileSubtitle: "Статистика, ранг и твои достижения",
        orderSubtitle: "Быстрый расчет: стоит ли принимать этот заказ?",
        orderPay: "Оплата за заказ",
        orderDist: "Общий путь по заказу (км)",
        orderCalcBtn: "Рассчитать выгоду заказа",
        orderNet: "Чистый профит:",
        orderAmort: "Амортизация:",
        wearLabel: "Амортизация за 1 км",
        serviceLabel: "Сервис / Источник",
        optGlovo: "Glovo (Желтый)",
        optBolt: "Bolt Food (Зеленый)",
        optLocal: "Локальное заведение (Синий)",
        optOther: "Другое",
        revLabel: "Выручка",
        tipsLabel: "Чаевые",
        distLabel: "Пробег (км)",
        fuelLabel: "Топливо",
        hoursLabel: "Время на линии (часов)",
        submitBtn: "Добавить смену",
        resTitle: "Итоги смены:",
        netLabel: "Чистый профит:",
        hourLabel: "Выхлоп в час:",
        wearResLabel: "Амортизация:",
        chartTitle: "Динамика профита",
        achTitle: "🏆 Достижения курьера",
        backupTitle: "💾 Резервная копия данных",
        exportBtn: "📤 Экспорт",
        importBtn: "📥 Импорт",
        supportBtn: "☕ Донат автору (на кохфе)",
        modalTitle: "Календарь и итоги",
        mProfit: "Профит за мес",
        mTips: "Чай за мес",
        mDist: "Пробег",
        mHour: "В час ср.",
        shiftsFor: "Дата:",
        fillDateBtn: "➕ Заполнить смену",
        closeBtn: "Закрыть",
        goalBtn: "🎯 Цель месяца",
        rankTitle: "Ранг:",
        modalGoalTitle: "Цель по профиту на месяц",
        modalGoalSub: "Укажи сумму чистыми, которую хочешь заработать за текущий месяц.",
        saveGoal: "Сохранить",
        cancelGoal: "Отмена",
        modalVehTitle: "Свой транспорт",
        modalVehSub: "Укажи название и амортизацию за 1 км.",
        saveVehBtn: "Добавить",
        cancelVehBtn: "Отмена",
        verdictTop: "🔥 ОТЛИЧНЫЙ ЗАКАЗ — СТОИТ ЕХАТЬ!",
        verdictNormal: "⚠️ НОРМАЛЬНО, НО ЕСТЬ СМЫСЛ ДУМАТЬ",
        verdictBad: "❌ В МИНУС ИЛИ МАЛО — ЛУЧШЕ ОТКАЗАТЬСЯ",
        weekDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    }
};

let currentLang = localStorage.getItem('app_lang') || 'ua';
let selectedTargetDate = null;

function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

function safeSetHtml(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

function toggleCurrency() {
    currencies.push(currencies.shift());
    currentCurrency = currencies[0];
    localStorage.setItem('app_currency', currentCurrency);
    safeSetText('currencyBtn', currentCurrency);
    document.querySelectorAll('.currency-label').forEach(el => el.innerText = currentCurrency);
    updateGamification();
    loadChartData();
    renderCalendar();
}

function toggleLang() {
    currentLang = currentLang === 'ua' ? 'ru' : 'ua';
    localStorage.setItem('app_lang', currentLang);
    updateTexts();
    renderCalendar();
    loadChartData();
    updateGamification();
}

function switchTab(tab) {
    const shiftSec = document.getElementById('sectionShift');
    const orderSec = document.getElementById('sectionOrder');
    const profileSec = document.getElementById('sectionProfile');
    
    const shiftBtn = document.getElementById('tabShiftBtn');
    const orderBtn = document.getElementById('tabOrderBtn');
    const profileBtn = document.getElementById('tabProfileBtn');

    if (shiftSec) shiftSec.classList.add('hidden');
    if (orderSec) orderSec.classList.add('hidden');
    if (profileSec) profileSec.classList.add('hidden');

    if (shiftBtn) shiftBtn.className = "py-2 text-[11px] font-bold rounded-xl transition text-slate-400 hover:text-white";
    if (orderBtn) orderBtn.className = "py-2 text-[11px] font-bold rounded-xl transition text-slate-400 hover:text-white";
    if (profileBtn) profileBtn.className = "py-2 text-[11px] font-bold rounded-xl transition text-slate-400 hover:text-white";

    if (tab === 'shift') {
        if (shiftSec) shiftSec.classList.remove('hidden');
        if (shiftBtn) shiftBtn.className = "py-2 text-[11px] font-bold rounded-xl transition app-btn-active";
    } else if (tab === 'order') {
        if (orderSec) orderSec.classList.remove('hidden');
        if (orderBtn) orderBtn.className = "py-2 text-[11px] font-bold rounded-xl transition app-btn-active";
    } else if (tab === 'profile') {
        if (profileSec) profileSec.classList.remove('hidden');
        if (profileBtn) profileBtn.className = "py-2 text-[11px] font-bold rounded-xl transition app-btn-active";
        loadChartData();
    }
}

function updateTexts() {
    const t = langData[currentLang];
    safeSetText('langBtn', t.langCode);
    safeSetText('currencyBtn', currentCurrency);
    safeSetText('t-title', t.title);
    safeSetText('t-subtitle', t.subtitle);
    safeSetText('t-calendar-btn', t.calendarBtn);
    safeSetText('t-tab-shift', t.tabShift);
    safeSetText('t-tab-order', t.tabOrder);
    safeSetText('t-tab-profile', t.tabProfile);
    safeSetText('t-profile-subtitle', t.profileSubtitle);
    safeSetText('t-order-subtitle', t.orderSubtitle);
    safeSetText('t-order-pay', t.orderPay);
    safeSetText('t-order-dist', t.orderDist);
    safeSetText('t-order-calc-btn', t.orderCalcBtn);
    safeSetText('t-order-net-label', t.orderNet);
    safeSetText('t-order-am-label', t.orderAmort);
    safeSetText('t-wear-label', t.wearLabel);
    safeSetText('t-order-wear-label', t.wearLabel);
    safeSetText('t-service-label', t.serviceLabel);
    
    const sel = document.getElementById('serviceSource');
    if (sel && sel.options.length >= 4) {
        sel.options[0].text = t.optGlovo;
        sel.options[1].text = t.optBolt;
        sel.options[2].text = t.optLocal;
        sel.options[3].text = t.optOther;
    }

    safeSetText('t-rev-label', t.revLabel);
    safeSetText('t-tips-label', t.tipsLabel);
    safeSetText('t-dist-label', t.distLabel);
    safeSetHtml('t-fuel-label', `${currentLang === 'ua' ? 'Пальне' : 'Топливо'} (<span class="currency-label">${currentCurrency}</span>)`);
    safeSetText('t-hours-label', t.hoursLabel);
    safeSetText('t-submit-btn', t.submitBtn);
    safeSetText('t-res-title', t.resTitle);
    safeSetText('t-net-label', t.netLabel);
    safeSetText('t-hour-label', t.hourLabel);
    safeSetText('t-wear-res-label', t.wearResLabel);
    safeSetText('t-chart-title', t.chartTitle);
    safeSetText('t-ach-title', t.achTitle);
    safeSetText('t-backup-title', t.backupTitle);
    safeSetText('t-export-btn', t.exportBtn);
    safeSetText('t-import-btn', t.importBtn);
    safeSetText('t-support-btn', t.supportBtn);
    safeSetText('t-modal-title', t.modalTitle);
    safeSetText('t-m-profit', t.mProfit);
    safeSetText('t-m-tips', t.mTips);
    safeSetText('t-m-dist', t.mDist);
    safeSetText('t-m-hour', t.mHour);
    safeSetText('t-shifts-for', t.shiftsFor);
    safeSetText('t-btn-fill-date', t.fillDateBtn);
    safeSetText('t-close-btn', t.closeBtn);
    safeSetText('t-goal-btn', t.goalBtn);
    safeSetText('t-rank-title', t.rankTitle);
    safeSetText('t-modal-goal-title', t.modalGoalTitle);
    safeSetText('t-modal-goal-sub', t.modalGoalSub);
    safeSetText('t-save-goal', t.saveGoal);
    safeSetText('t-cancel-goal', t.cancelGoal);
    safeSetText('t-modal-veh-title', t.modalVehTitle);
    safeSetText('t-modal-veh-sub', t.modalVehSub);
    safeSetText('t-save-veh-btn', t.saveVehBtn);
    safeSetText('t-cancel-veh-btn', t.cancelVehBtn);

    const wdContainer = document.getElementById('weekDaysHeader');
    if (wdContainer) {
        wdContainer.innerHTML = t.weekDays.map(d => `<span>${d}</span>`).join('');
    }
}

const defaultVehicles = [
    { id: 'scooter', name: '🛵 Мото', wear: 1.5, type: 'scooter' },
    { id: 'bicycle', name: '🚲 Вело', wear: 0.3, type: 'bicycle' },
    { id: 'car', name: '🚗 Авто', wear: 4.0, type: 'car' }
];

function renderVehicles() {
    const container = document.getElementById('vehiclesContainer');
    const orderContainer = document.getElementById('orderVehiclesContainer');
    if (!container || !orderContainer) return;

    container.innerHTML = '';
    orderContainer.innerHTML = '';

    let customVehicles = JSON.parse(localStorage.getItem('custom_vehicles')) || [];
    let allVehicles = [...defaultVehicles, ...customVehicles];

    allVehicles.forEach((v, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.id = `btn-${v.id || 'custom_' + index}`;
        btn.className = "vehicle-btn bg-[#0b0b16] border border-[#232342] text-slate-400 font-bold py-2 px-3 rounded-xl text-xs transition relative group";
        btn.innerHTML = `<span>${v.name}</span>${index >= defaultVehicles.length ? `<span onclick="event.stopPropagation(); deleteCustomVehicle(${index - defaultVehicles.length})" class="absolute top-0.5 right-1 text-slate-600 hover:text-red-400 text-[10px]">✕</span>` : ''}`;
        btn.onclick = () => selectVehicle(v.id || 'custom_' + index, v.wear, v.type);
        container.appendChild(btn);

        const orderBtn = document.createElement('button');
        orderBtn.type = 'button';
        orderBtn.id = `btn-order-${v.id || 'custom_' + index}`;
        orderBtn.className = "order-vehicle-btn bg-[#0b0b16] border border-[#232342] text-slate-400 font-bold py-2 px-3 rounded-xl text-xs transition relative group";
        orderBtn.innerHTML = `<span>${v.name}</span>${index >= defaultVehicles.length ? `<span onclick="event.stopPropagation(); deleteCustomVehicle(${index - defaultVehicles.length})" class="absolute top-0.5 right-1 text-slate-600 hover:text-red-400 text-[10px]">✕</span>` : ''}`;
        orderBtn.onclick = () => selectOrderVehicle(v.id || 'custom_' + index, v.wear);
        orderContainer.appendChild(orderBtn);
    });

    if (allVehicles.length > 0) {
        selectVehicle(allVehicles[0].id || 'custom_0', allVehicles[0].wear, allVehicles[0].type);
        selectOrderVehicle(allVehicles[0].id || 'custom_0', allVehicles[0].wear);
    }
}

function selectVehicle(id, wearRate, type) {
    const wearInput = document.getElementById('wearRateInput');
    if (wearInput) wearInput.value = wearRate;
    document.querySelectorAll('.vehicle-btn').forEach(btn => {
        btn.className = "vehicle-btn bg-[#0b0b16] border border-[#232342] text-slate-400 font-bold py-2 px-3 rounded-xl text-xs transition relative group";
    });
    const activeBtn = document.getElementById(`btn-${id}`);
    if (activeBtn) {
        activeBtn.className = "vehicle-btn app-btn-active font-bold py-2 px-3 rounded-xl text-xs transition relative group";
    }
    const fuelContainer = document.getElementById('fuelContainer');
    const fuelInput = document.getElementById('fuel');
    if (fuelContainer && fuelInput) {
        if (type === 'bicycle') {
            fuelContainer.style.display = 'none';
            fuelInput.value = '0';
        } else {
            fuelContainer.style.display = 'block';
            if (fuelInput.value === '0') fuelInput.value = '';
        }
    }
}

function selectOrderVehicle(id, wearRate) {
    const orderWearInput = document.getElementById('orderWearRateInput');
    if (orderWearInput) orderWearInput.value = wearRate;
    document.querySelectorAll('.order-vehicle-btn').forEach(btn => {
        btn.className = "order-vehicle-btn bg-[#0b0b16] border border-[#232342] text-slate-400 font-bold py-2 px-3 rounded-xl text-xs transition relative group";
    });
    const activeBtn = document.getElementById(`btn-order-${id}`);
    if (activeBtn) {
        activeBtn.className = "order-vehicle-btn app-btn-active font-bold py-2 px-3 rounded-xl text-xs transition relative group";
    }
}

function openCustomVehicleModal() {
    const modal = document.getElementById('customVehicleModal');
    if (modal) modal.classList.remove('hidden');
}

function closeCustomVehicleModal() {
    const modal = document.getElementById('customVehicleModal');
    if (modal) modal.classList.add('hidden');
}

function saveCustomVehicle() {
    const nameEl = document.getElementById('customVehName');
    if (!nameEl) return;
    const name = nameEl.value.trim();
    const wear = parseVal('customVehWear');
    if (!name || wear <= 0) return;
    let customVehicles = JSON.parse(localStorage.getItem('custom_vehicles')) || [];
    customVehicles.push({ name, wear, type: 'custom' });
    localStorage.setItem('custom_vehicles', JSON.stringify(customVehicles));
    closeCustomVehicleModal();
    renderVehicles();
}

function deleteCustomVehicle(index) {
    let customVehicles = JSON.parse(localStorage.getItem('custom_vehicles')) || [];
    customVehicles.splice(index, 1);
    localStorage.setItem('custom_vehicles', JSON.stringify(customVehicles));
    renderVehicles();
}

function exportData() {
    const data = {
        history: JSON.parse(localStorage.getItem('shift_history')) || [],
        vehicles: JSON.parse(localStorage.getItem('custom_vehicles')) || [],
        goal: localStorage.getItem('monthly_goal') || '',
        currency: currentCurrency
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `real_exhaust_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.history) localStorage.setItem('shift_history', JSON.stringify(data.history));
            if (data.vehicles) localStorage.setItem('custom_vehicles', JSON.stringify(data.vehicles));
            if (data.goal) localStorage.setItem('monthly_goal', data.goal);
            if (data.currency) {
                currentCurrency = data.currency;
                localStorage.setItem('app_currency', currentCurrency);
            }
            alert(currentLang === 'ua' ? "Дані успішно імпортовано!" : "Данные успешно импортированы!");
            location.reload();
        } catch (err) {
            alert(currentLang === 'ua' ? "Помилка читання файлу!" : "Ошибка чтения файла!");
        }
    };
    reader.readAsText(file);
}

function calculateOrder() {
    const pay = parseVal('orderPay'), dist = parseVal('orderDist'), wearRate = parseVal('orderWearRateInput');
    const amort = dist * wearRate, net = pay - amort;
    const resBox = document.getElementById('orderResults');
    const verdictBox = document.getElementById('orderVerdictBox');
    const verdictText = document.getElementById('orderVerdictText');
    const t = langData[currentLang];

    if (resBox) resBox.classList.remove('hidden');
    safeSetText('orderNet', net.toFixed(1) + ' ' + currentCurrency);
    safeSetText('orderAmort', amort.toFixed(1) + ' ' + currentCurrency);

    if (verdictBox && verdictText) {
        if (net > 70) {
            verdictBox.className = "p-4 rounded-xl border bg-emerald-950/40 border-emerald-500/50 text-emerald-300 text-center";
            verdictText.innerText = t.verdictTop;
        } else if (net > 30) {
            verdictBox.className = "p-4 rounded-xl border bg-sky-950/40 border-sky-500/50 text-sky-300 text-center";
            verdictText.innerText = t.verdictNormal;
        } else {
            verdictBox.className = "p-4 rounded-xl border bg-red-950/40 border-red-500/50 text-red-400 text-center";
            verdictText.innerText = t.verdictBad;
        }
    }
}

let earningsChart = null;
function initChart(history) {
    const canvasElem = document.getElementById('earningsChart');
    if (!canvasElem) return;
    const ctx = canvasElem.getContext('2d');
    const dailyTotals = {};
    history.forEach(item => {
        if (!dailyTotals[item.fullDate]) dailyTotals[item.fullDate] = { dateStr: item.dateStr, netProfit: 0, fullDate: item.fullDate };
        dailyTotals[item.fullDate].netProfit += item.netProfit;
    });
    const sortedData = Object.values(dailyTotals).sort((a, b) => new Date(a.fullDate) - new Date(b.fullDate));
    const labels = sortedData.map(item => item.dateStr);
    const data = sortedData.map(item => item.netProfit);

    if (earningsChart) earningsChart.destroy();
    earningsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Чистий профіт',
                data: data,
                borderColor: '#38bdf8',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: '#232342' } },
                y: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: '#232342' } }
            }
        }
    });
}

function parseVal(id) {
    const el = document.getElementById(id);
    if (!el) return 0;
    return parseFloat(el.value.trim().replace(',', '.')) || 0;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('shiftForm');
    const resultsDiv = document.getElementById('results');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const service = document.getElementById('serviceSource').value;
            const revenue = parseVal('revenue'), tips = parseVal('tips'), distance = parseVal('distance'), fuel = parseVal('fuel'), hours = parseVal('hours'), wearRate = parseVal('wearRateInput');
            const safeHours = hours > 0 ? hours : 1;
            const netProfit = (revenue + tips) - fuel - (distance * wearRate);
            const perHour = netProfit / safeHours;

            safeSetText('resNetProfit', netProfit.toFixed(1) + ' ' + currentCurrency);
            safeSetText('resPerHour', perHour.toFixed(1) + ' ' + currentCurrency + '/год');
            safeSetText('resWear', (distance * wearRate).toFixed(1) + ' ' + currentCurrency);
            if (resultsDiv) resultsDiv.classList.remove('hidden');

            let fullDateStr, dateStr;
            if (selectedTargetDate) {
                fullDateStr = selectedTargetDate.fullDateStr;
                dateStr = selectedTargetDate.dateStr;
            } else {
                const now = new Date();
                fullDateStr = now.toISOString().split('T')[0];
                dateStr = now.toLocaleDateString().slice(0, 5);
            }

            let history = JSON.parse(localStorage.getItem('shift_history')) || [];
            history.unshift({ id: Date.now(), fullDate: fullDateStr, dateStr, service, distance, hours, tips, netProfit, perHour });
            localStorage.setItem('shift_history', JSON.stringify(history));

            clearTargetDate();
            loadChartData();
            updateGamification();
        });
    }

    updateTexts();
    loadChartData();
    renderVehicles();
});

let activeDate = new Date();

function loadChartData() {
    let history = JSON.parse(localStorage.getItem('shift_history')) || [];
    initChart(history);
    updateGamification();
}

function openGoalModal() {
    const modal = document.getElementById('goalModal');
    const input = document.getElementById('monthlyGoalInput');
    if (modal) modal.classList.remove('hidden');
    if (input) input.value = localStorage.getItem('monthly_goal') || '';
}

function closeGoalModal() {
    const modal = document.getElementById('goalModal');
    if (modal) modal.classList.add('hidden');
}

function saveMonthlyGoal() {
    localStorage.setItem('monthly_goal', parseVal('monthlyGoalInput'));
    closeGoalModal();
    updateGamification();
}

function updateGamification() {
    const history = JSON.parse(localStorage.getItem('shift_history')) || [];
    const now = new Date();
    let monthProfit = 0, totalDistance = 0, maxProfitInShift = 0;
    history.forEach(s => {
        const sDate = new Date(s.fullDate);
        if (sDate.getFullYear() === now.getFullYear() && sDate.getMonth() === now.getMonth()) monthProfit += s.netProfit;
        totalDistance += parseFloat(s.distance) || 0;
        if (s.netProfit > maxProfitInShift) maxProfitInShift = s.netProfit;
    });
    const goal = parseFloat(localStorage.getItem('monthly_goal')) || 20000;
    const percent = goal > 0 ? Math.min(Math.round((monthProfit / goal) * 100), 100) : 0;
    
    const bar = document.getElementById('goalProgressBar');
    if (bar) bar.style.width = percent + '%';
    safeSetText('goalProgressText', `${Math.round(monthProfit)} / ${goal} ${currentCurrency}`);
    safeSetText('goalPercentText', percent + '%');

    let rankName = currentLang === 'ua' ? "🧢 Новачок асфальту" : "🧢 Новичок асфальта";
    if (totalDistance > 1000) rankName = currentLang === 'ua' ? "⚡ Гроза навігатора" : "⚡ Гроза навигатора";
    if (totalDistance > 3000) rankName = currentLang === 'ua' ? "🔥 Ветеран вихлопу" : "🔥 Ветеран выхлопа";
    if (totalDistance > 7000) rankName = currentLang === 'ua' ? "👑 Легенда доставки" : "👑 Легенда доставки";
    safeSetText('courierRank', rankName);

    renderAchievements(history.length, totalDistance, maxProfitInShift);
}

function renderAchievements(shiftsCount, totalDist, maxProfit) {
    const achContainer = document.getElementById('achievementsGrid');
    if (!achContainer) return;
    achContainer.innerHTML = '';
    const achs = [
        { icon: "🚀", titleRu: "Старт!", titleUa: "Старт!", descRu: "Сохранить 1 смену", descUa: "Зберегти 1 зміну", unlocked: shiftsCount >= 1 },
        { icon: "🛣️", titleRu: "Турист", titleUa: "Турист", descRu: "Проехать 500 км", descUa: "Проїхати 500 км", unlocked: totalDist >= 500 },
        { icon: "💰", titleRu: "Куш", titleUa: "Куш", descRu: "Профит > 1500 за смену", descUa: "Профіт > 1500 за зміну", unlocked: maxProfit >= 1500 }
    ];
    achs.forEach(a => {
        const div = document.createElement('div');
        div.className = `p-2.5 rounded-2xl border flex flex-col items-center text-center transition ${a.unlocked ? 'bg-sky-500/10 border-sky-500/30 text-sky-300' : 'bg-[#0b0b16] border-[#232342] text-slate-600 opacity-50'}`;
        div.innerHTML = `<span class="text-lg mb-0.5">${a.icon}</span><span class="text-[10px] font-bold">${currentLang === 'ua' ? a.titleUa : a.titleRu}</span><span class="text-[8px] ${a.unlocked ? 'text-slate-400' : 'text-slate-600'} mt-0.5">${currentLang === 'ua' ? a.descUa : a.descRu}</span>`;
        achContainer.appendChild(div);
    });
}

function openCalendarModal() {
    const modal = document.getElementById('calendarModal');
    if (modal) modal.classList.remove('hidden');
    renderCalendar();
}

function closeCalendarModal() {
    const modal = document.getElementById('calendarModal');
    const detailsBox = document.getElementById('shiftDetailsBox');
    if (modal) modal.classList.add('hidden');
    if (detailsBox) detailsBox.classList.add('hidden');
}

function changeMonth(direction) {
    activeDate.setMonth(activeDate.getMonth() + direction);
    renderCalendar();
}

function renderCalendar() {
    const t = langData[currentLang], grid = document.getElementById('calendarDaysGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const year = activeDate.getFullYear(), month = activeDate.getMonth();
    safeSetText('monthYearTitle', `${t.months[month]} ${year}`);

    const history = JSON.parse(localStorage.getItem('shift_history')) || [];
    const shiftsByDate = {};
    let monthProfit = 0, monthTips = 0, monthDistance = 0, monthHours = 0;

    history.forEach(s => {
        if (!shiftsByDate[s.fullDate]) shiftsByDate[s.fullDate] = [];
        shiftsByDate[s.fullDate].push(s);
        const sDate = new Date(s.fullDate);
        if (sDate.getFullYear() === year && sDate.getMonth() === month) {
            monthProfit += s.netProfit;
            monthTips += parseFloat(s.tips) || 0;
            monthDistance += parseFloat(s.distance) || 0;
            monthHours += parseFloat(s.hours) || 0;
        }
    });

    safeSetText('monthTotalProfit', monthProfit.toFixed(0) + ' ' + currentCurrency);
    safeSetText('monthTotalTips', monthTips.toFixed(0) + ' ' + currentCurrency);
    safeSetText('monthTotalDistance', monthDistance.toFixed(0) + ' км');
    safeSetText('monthAvgPerHour', (monthHours > 0 ? (monthProfit / monthHours) : 0).toFixed(1) + ' ' + currentCurrency);

    const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7;
    const totalDays = new Date(year, month + 1, 0).getDate();
    for (let i = 0; i < firstDayIndex; i++) grid.appendChild(document.createElement('div'));

    for (let day = 1; day <= totalDays; day++) {
        const fullDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const cell = document.createElement('div');
        const dayShifts = shiftsByDate[fullDateStr];
        cell.className = "aspect-square rounded-xl flex flex-col items-center justify-center text-xs font-bold border transition cursor-pointer relative " + (dayShifts?.length ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" : "bg-[#0b0b16] border-[#232342] text-slate-400 hover:bg-[#1c1c36]");
        cell.innerHTML = dayShifts?.length ? `<span>${day}</span><span class="text-[9px] text-emerald-400 font-normal">${dayShifts.length} з.</span>` : day;
        cell.onclick = () => showDayDetails(fullDateStr, `${String(day).padStart(2, '0')}.${String(month + 1).padStart(2, '0')}`, dayShifts || []);
        grid.appendChild(cell);
    }
}

let tempSelectedDate = null;
function showDayDetails(fullDateStr, dateStr, shifts) {
    tempSelectedDate = { fullDateStr, dateStr };
    const container = document.getElementById('shiftsListContainer');
    const detailsBox = document.getElementById('shiftDetailsBox');
    if (!container) return;
    container.innerHTML = '';
    safeSetText('selectedDateTitle', dateStr);
    if (detailsBox) detailsBox.classList.remove('hidden');
    if (shifts.length === 0) { container.innerHTML = `<p class="text-[11px] text-slate-500 italic">Змін за цей день поки немає.</p>`; return; }
    shifts.forEach(shift => {
        const item = document.createElement('div');
        item.className = "app-card p-2.5 rounded-xl border border-[#232342] flex justify-between items-center text-xs";
        item.innerHTML = `<div><span class="px-2 py-0.5 rounded-md font-bold text-[10px] bg-sky-500/20 text-sky-300 inline-block mb-1">${shift.service}</span><span class="text-[10px] text-slate-400 block">${shift.distance} км • ${shift.hours} год</span></div><div class="text-right flex items-center gap-2"><span class="font-bold text-emerald-400">+${shift.netProfit.toFixed(1)} ${currentCurrency}</span><button onclick="deleteShift(${shift.id})" class="text-slate-600 hover:text-red-400 px-1">✕</button></div>`;
        container.appendChild(item);
    });
}

function selectDateForInput() {
    if (!tempSelectedDate) return;
    selectedTargetDate = tempSelectedDate;
    closeCalendarModal();
    const banner = document.getElementById('targetDateBanner');
    if (banner) banner.classList.remove('hidden');
    safeSetText('targetDateText', selectedTargetDate.dateStr);
    switchTab('shift');
}

function clearTargetDate() {
    selectedTargetDate = null;
    const banner = document.getElementById('targetDateBanner');
    if (banner) banner.classList.add('hidden');
}

function deleteShift(id) {
    let history = JSON.parse(localStorage.getItem('shift_history')) || [];
    localStorage.setItem('shift_history', JSON.stringify(history.filter(item => item.id !== id)));
    renderCalendar();
    loadChartData();
    const detailsBox = document.getElementById('shiftDetailsBox');
    if (detailsBox) detailsBox.classList.add('hidden');
}