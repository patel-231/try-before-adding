/**
 * Translations Data
 */
const translations = {
    en: {
        app_title: "Manufacturing Cost Calculator",
        app_subtitle: "Optimize your production costs and pricing strategy.",
        menu_title: "App Menu",
        menu_calculator: "Main Calculator",
        menu_library: "Materials Library",
        restore_title: "Import Old Backup",
        btn_restore: "Upload Backup",
        section_product_details: "1. Product Details",
        label_product_name: "Product Name",
        section_quick_library: "2. Pick from Library",
        pick_material: "-- Select Material --",
        section_bom: "3. Bill of Materials (Parts)",
        label_part_name: "Part Name",
        label_price_kg: "Price per kg (₹)",
        label_weight_g: "Weight (grams)",
        btn_add_part: "Add Part",
        btn_update_part: "Update Part",
        th_part_name: "Part Name",
        th_cost: "Cost (₹)",
        th_action: "Action",
        section_expenses: "4. Monthly Expenses (Overheads)",
        label_labor: "Labor Cost (₹)",
        label_electricity: "Electricity Cost (₹)",
        label_rent: "Rent (₹)",
        label_qty: "Monthly Production Qty",
        section_packaging: "5. Packaging Costs",
        label_mini_box: "Small Box Cost (₹)",
        label_large_box: "Large Box Cost (₹)",
        label_qty_large: "Qty in Large Box",
        section_tax: "6. Tax (GST)",
        label_gst: "GST Percentage (%)",
        section_pricing: "7. Pricing Strategy",
        label_profit: "Target Profit Percentage (%)",
        btn_save_product: "Save Product",
        btn_clear_all: "Clear All",
        btn_backup: "TXT Backup",
        btn_pdf_report: "Download PDF Report",
        btn_add_library: "Add to Library",
        section_summary: "Financial Summary",
        summary_raw: "Raw Material Cost",
        summary_overhead: "Overhead per Unit",
        summary_packaging: "Packaging Cost per Unit",
        summary_profit_amt: "Profit Amount per Unit",
        summary_gst_amt: "GST Amount",
        summary_total: "Manufacturing Cost (Pre-Tax)",
        summary_large_box: "Price per Cartoon (કાર્ટૂન)",
        summary_selling: "Final Selling Price (incl. GST)",
        section_distribution: "Cost Distribution",
        section_saved: "Saved Products",
        search_placeholder: "Search saved products...",
        footer: "&copy; 2026 Manufacturing Cost Calculator.",
        msg_enter_product: "Please enter a Product Name first.",
        msg_saved: 'Product "{name}" saved successfully!',
        msg_confirm_clear: "Are you sure you want to clear all inputs?",
        msg_invalid_part: "Please enter valid part details.",
        msg_restore_success: "Data restored successfully!",
        load_btn: "Load",
        remove_btn: "Remove",
        edit_btn: "Edit",
        delete_btn: "Delete"
    },
    gu: {
        app_title: "મેન્યુફેક્ચરિંગ કોસ્ટ કેલ્ક્યુલેટર",
        app_subtitle: "તમારા ઉત્પાદન ખર્ચ અને કિંમત વ્યૂહરચનાને ઑપ્ટિમાઇઝ કરો.",
        menu_title: "એપ્લિકેશન મેનુ",
        menu_calculator: "મુખ્ય કેલ્ક્યુલેટર",
        menu_library: "મટીરીયલ લાયબ્રેરી",
        restore_title: "જૂનો બેકઅપ લાવો",
        btn_restore: "બેકઅપ અપલોડ કરો",
        section_product_details: "૧. ઉત્પાદન વિગતો",
        label_product_name: "ઉત્પાદનનું નામ",
        section_quick_library: "૨. લાયબ્રેરીમાંથી પસંદ કરો",
        pick_material: "-- મટીરીયલ પસંદ કરો --",
        section_bom: "૩. માલનું બિલ (ભાગો)",
        label_part_name: "ભાગનું નામ",
        label_price_kg: "કિલો દીઠ કિંમત (₹)",
        label_weight_g: "વજન (ગ્રામ)",
        btn_add_part: "ભાગ ઉમેરો",
        btn_update_part: "ભાગ અપડેટ કરો",
        th_part_name: "ભાગનું નામ",
        th_cost: "ખર્ચ (₹)",
        th_action: "ક્રિયા",
        section_expenses: "૪. માસિક ખર્ચ (ઓવરહેડ્સ)",
        label_labor: "મજૂરી ખર્ચ (₹)",
        label_electricity: "વીજળી ખર્ચ (₹)",
        label_rent: "ભાડું (₹)",
        label_qty: "માસિક ઉત્પાદન જથ્થો",
        section_packaging: "૫. પેકેજિંગ ખર્ચ",
        label_mini_box: "નાનું ખોખું (ખોખું) કિંમત (₹)",
        label_large_box: "મોટું કાર્ટૂન (કાર્ટૂન) કિંમત (₹)",
        label_qty_large: "એક કાર્ટૂનમાં કેટલા ખોખા?",
        section_tax: "૬. ટેક્સ (GST)",
        label_gst: "GST ટકાવારી (%)",
        section_pricing: "૭. કિંમત નિર્ધારણ વ્યૂહરચના",
        label_profit: "લક્ષિત નફો ટકાવારી (%)",
        btn_save_product: "ઉત્પાદન સાચવો",
        btn_clear_all: "બધું સાફ કરો",
        btn_backup: "TXT બેકઅપ",
        btn_pdf_report: "PDF રિપોર્ટ ડાઉનલોડ",
        btn_add_library: "લાયબ્રેરીમાં ઉમેરો",
        section_summary: "નાણાકીય સારાંશ",
        summary_raw: "કાચા માલનો ખર્ચ",
        summary_overhead: "એકમ દીઠ ઓવરહેડ",
        summary_packaging: "એકમ દીઠ પેકેજિંગ",
        summary_profit_amt: "નફાની રકમ",
        summary_gst_amt: "GST રકમ",
        summary_total: "ઉત્પાદન ખર્ચ (ટેક્સ વગર)",
        summary_large_box: "કાર્ટૂન દીઠ કિંમત (કાર્ટૂન)",
        summary_selling: "અંતિમ વેચાણ કિંમત (GST સાથે)",
        section_distribution: "ખર્ચ વિતરણ",
        section_saved: "સાચવેલા ઉત્પાદનો",
        search_placeholder: "ઉત્પાદન શોધો...",
        footer: "&copy; ૨૦૨૬ મેન્યુફેક્ચરિંગ કોસ્ટ કેલ્ક્યુલેટર.",
        msg_enter_product: "કૃપા કરીને પહેલા ઉત્પાદનનું નામ દાખલ કરો.",
        msg_saved: 'ઉત્પાદન "{name}" સાચવવામાં આવ્યું!',
        msg_confirm_clear: "શું તમે ચોક્કસ સાફ કરવા માંગો છો?",
        msg_invalid_part: "કૃપા કરીને સાચી વિગતો ભરો.",
        msg_restore_success: "ડેટા સફળતાપૂર્વક પાછો આવ્યો!",
        load_btn: "લોડ કરો",
        remove_btn: "દૂર કરો",
        edit_btn: "ફેરફાર કરો",
        delete_btn: "કાઢી નાખો"
    }
};

let state = {
    id: null, productName: '', parts: [],
    expenses: { labor: 0, electricity: 0, rent: 0, productionQty: 1 },
    packaging: { miniBoxCost: 0, largeBoxCost: 0, qtyInLarge: 1 },
    gstRate: 0, profitPercent: 20, currentLanguage: 'en',
    editingPartId: null, searchQuery: '', materialsLibrary: []
};

let costChart = null;

const elements = {
    sidebar: document.getElementById('app-sidebar'),
    hamburger: document.getElementById('hamburger-btn'),
    closeSidebar: document.getElementById('close-sidebar'),
    calcInputs: document.getElementById('calculator-inputs'),
    libManager: document.getElementById('library-manager'),
    productName: document.getElementById('product-name'),
    partName: document.getElementById('part-name'),
    priceKg: document.getElementById('price-kg'),
    weightG: document.getElementById('weight-g'),
    btnAddPart: document.getElementById('btn-add-part'),
    partsBody: document.getElementById('parts-body'),
    laborCost: document.getElementById('labor-cost'),
    electricityCost: document.getElementById('electricity-cost'),
    rentCost: document.getElementById('rent-cost'),
    productionQty: document.getElementById('production-qty'),
    miniBoxCost: document.getElementById('mini-box-cost'),
    largeBoxCost: document.getElementById('large-box-cost'),
    qtyInLarge: document.getElementById('qty-in-large'),
    gstRate: document.getElementById('gst-rate'),
    profitPercent: document.getElementById('profit-percent'),
    btnSaveProduct: document.getElementById('btn-save-product'),
    btnClearAll: document.getElementById('btn-clear-all'),
    btnDownloadBackup: document.getElementById('btn-download-backup'),
    btnDownloadPDF: document.getElementById('btn-download-pdf'),
    rawCostDisplay: document.getElementById('raw-cost-display'),
    overheadDisplay: document.getElementById('overhead-display'),
    packagingCostDisplay: document.getElementById('packaging-cost-display'),
    profitAmountDisplay: document.getElementById('profit-amount-display'),
    gstAmountDisplay: document.getElementById('gst-amount-display'),
    gstRow: document.getElementById('gst-row'),
    totalCostDisplay: document.getElementById('total-cost-display'),
    largeBoxPriceDisplay: document.getElementById('large-box-price-display'),
    sellingPriceDisplay: document.getElementById('selling-price-display'),
    savedProductsList: document.getElementById('saved-products-list'),
    productSearch: document.getElementById('product-search'),
    libBody: document.getElementById('library-body'),
    libName: document.getElementById('lib-material-name'),
    libPrice: document.getElementById('lib-material-price'),
    btnAddLib: document.getElementById('btn-add-library'),
    libSelector: document.getElementById('library-selector'),
    restoreFile: document.getElementById('restore-file')
};

function init() {
    loadLibrary(); loadSavedProducts(); setupEventListeners();
    applyLanguage(state.currentLanguage); updateUI();
    initChart(); initEnterToNext();
}

function setupEventListeners() {
    elements.hamburger.onclick = () => elements.sidebar.classList.add('active');
    elements.closeSidebar.onclick = () => elements.sidebar.classList.remove('active');
    document.getElementById('menu-calc-link').onclick = () => toggleSection('main');
    document.getElementById('menu-lib-link').onclick = () => toggleSection('library');
    elements.productName.oninput = (e) => state.productName = e.target.value;
    elements.laborCost.oninput = updateExpenses;
    elements.electricityCost.oninput = updateExpenses;
    elements.rentCost.oninput = updateExpenses;
    elements.productionQty.oninput = updateExpenses;
    elements.miniBoxCost.oninput = updatePackaging;
    elements.largeBoxCost.oninput = updatePackaging;
    elements.qtyInLarge.oninput = updatePackaging;
    elements.gstRate.onchange = (e) => { state.gstRate = parseFloat(e.target.value); calculateAndRender(); };
    elements.profitPercent.oninput = (e) => { state.profitPercent = parseFloat(e.target.value) || 0; calculateAndRender(); };
    elements.productSearch.oninput = (e) => { state.searchQuery = e.target.value.toLowerCase(); renderSavedProducts(); };
    elements.btnAddPart.onclick = () => state.editingPartId ? updatePart() : addPart();
    elements.btnAddLib.onclick = addLibraryItem;
    elements.btnSaveProduct.onclick = saveProduct;
    elements.btnClearAll.onclick = clearAll;
    elements.btnDownloadBackup.onclick = () => generateBackup(true);
    elements.btnDownloadPDF.onclick = generatePDF;
    elements.restoreFile.onchange = restoreData;
    elements.libSelector.onchange = (e) => {
        const item = state.materialsLibrary.find(m => m.id === parseInt(e.target.value));
        if (item) elements.priceKg.value = item.price;
    };
    document.querySelectorAll('.btn-lang').forEach(btn => btn.onclick = () => changeLanguage(btn.getAttribute('data-lang')));
}

function toggleSection(section) {
    elements.calcInputs.classList.toggle('hidden', section !== 'main');
    elements.libManager.classList.toggle('hidden', section !== 'library');
    elements.sidebar.classList.remove('active');
}

function updateExpenses() {
    state.expenses = { labor: parseFloat(elements.laborCost.value) || 0, electricity: parseFloat(elements.electricityCost.value) || 0, rent: parseFloat(elements.rentCost.value) || 0, productionQty: parseFloat(elements.productionQty.value) || 1 };
    calculateAndRender();
}

function updatePackaging() {
    state.packaging = { miniBoxCost: parseFloat(elements.miniBoxCost.value) || 0, largeBoxCost: parseFloat(elements.largeBoxCost.value) || 0, qtyInLarge: parseFloat(elements.qtyInLarge.value) || 1 };
    calculateAndRender();
}

function calculateAndRender() {
    const rawCost = state.parts.reduce((sum, p) => sum + p.cost, 0);
    const overheadPerUnit = (state.expenses.labor + state.expenses.electricity + state.expenses.rent) / (state.expenses.productionQty || 1);
    const packagingPerUnit = state.packaging.miniBoxCost + (state.packaging.largeBoxCost / (state.packaging.qtyInLarge || 1));
    const manufacturingCost = rawCost + overheadPerUnit + packagingPerUnit;
    const profitAmt = (manufacturingCost * state.profitPercent) / 100;
    const preTaxPrice = manufacturingCost + profitAmt;
    const gstAmt = (preTaxPrice * state.gstRate) / 100;
    const finalPrice = preTaxPrice + gstAmt;
    const largeBoxPrice = finalPrice * state.packaging.qtyInLarge;
    elements.rawCostDisplay.textContent = formatCurrency(rawCost);
    elements.overheadDisplay.textContent = formatCurrency(overheadPerUnit);
    elements.packagingCostDisplay.textContent = formatCurrency(packagingPerUnit);
    elements.profitAmountDisplay.textContent = formatCurrency(profitAmt);
    elements.gstRow.style.display = state.gstRate > 0 ? 'flex' : 'none';
    elements.gstAmountDisplay.textContent = formatCurrency(gstAmt);
    elements.totalCostDisplay.textContent = formatCurrency(manufacturingCost);
    elements.largeBoxPriceDisplay.textContent = formatCurrency(largeBoxPrice);
    elements.sellingPriceDisplay.textContent = formatCurrency(finalPrice);
    renderPartsTable(); updateChart(state.parts);
}

function addPart() {
    const name = elements.partName.value.trim(), price = parseFloat(elements.priceKg.value), weight = parseFloat(elements.weightG.value);
    if (!name || isNaN(price) || isNaN(weight)) return alert(translations[state.currentLanguage].msg_invalid_part);
    state.parts.push({ id: Date.now(), name, price, weight, cost: (price / 1000) * weight });
    elements.partName.value = ''; elements.priceKg.value = ''; elements.weightG.value = '';
    calculateAndRender();
}

function editPart(id) {
    const p = state.parts.find(p => p.id === id); if (!p) return;
    state.editingPartId = id; elements.partName.value = p.name; elements.priceKg.value = p.price; elements.weightG.value = p.weight;
    elements.btnAddPart.textContent = translations[state.currentLanguage].btn_update_part;
}

function updatePart() {
    const idx = state.parts.findIndex(p => p.id === state.editingPartId);
    if (idx !== -1) {
        const price = parseFloat(elements.priceKg.value), weight = parseFloat(elements.weightG.value);
        state.parts[idx] = { ...state.parts[idx], name: elements.partName.value, price, weight, cost: (price / 1000) * weight };
    }
    state.editingPartId = null; elements.btnAddPart.textContent = translations[state.currentLanguage].btn_add_part;
    elements.partName.value = ''; elements.priceKg.value = ''; elements.weightG.value = '';
    calculateAndRender();
}

function deletePart(id) { state.parts = state.parts.filter(p => p.id !== id); calculateAndRender(); }

function addLibraryItem() {
    const name = elements.libName.value.trim(), price = parseFloat(elements.libPrice.value);
    if (!name || isNaN(price)) return;
    state.materialsLibrary.push({ id: Date.now(), name, price });
    elements.libName.value = ''; elements.libPrice.value = '';
    saveLibrary(); renderLibrary();
}

function saveLibrary() { localStorage.setItem('mfg_library', JSON.stringify(state.materialsLibrary)); }
function loadLibrary() { state.materialsLibrary = JSON.parse(localStorage.getItem('mfg_library') || '[]'); renderLibrary(); }

function renderLibrary() {
    elements.libBody.innerHTML = ''; elements.libSelector.innerHTML = `<option value="">${translations[state.currentLanguage].pick_material}</option>`;
    state.materialsLibrary.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.name}</td><td>₹${item.price.toFixed(2)}</td><td><button class="btn-delete" onclick="window.app.deleteLibraryItem(${item.id})">Remove</button></td>`;
        elements.libBody.appendChild(tr);
        const opt = document.createElement('option'); opt.value = item.id; opt.textContent = `${item.name} (₹${item.price})`;
        elements.libSelector.appendChild(opt);
    });
}

function deleteLibraryItem(id) { state.materialsLibrary = state.materialsLibrary.filter(m => m.id !== id); saveLibrary(); renderLibrary(); }

function saveProduct() {
    if (!state.productName) return alert(translations[state.currentLanguage].msg_enter_product);
    const products = JSON.parse(localStorage.getItem('mfg_products') || '[]');
    const data = { ...state, date: new Date().toISOString() };
    if (state.id) {
        const idx = products.findIndex(p => p.id === state.id);
        if (idx !== -1) products[idx] = data; else products.push(data);
    } else {
        data.id = Date.now(); products.push(data);
    }
    localStorage.setItem('mfg_products', JSON.stringify(products));
    renderSavedProducts(); alert(translations[state.currentLanguage].msg_saved.replace('{name}', state.productName));
}

function renderSavedProducts() {
    const products = JSON.parse(localStorage.getItem('mfg_products') || '[]');
    elements.savedProductsList.innerHTML = '';
    products.filter(p => p.productName.toLowerCase().includes(state.searchQuery)).forEach(p => {
        const li = document.createElement('li'); li.className = 'list-group-item';
        li.innerHTML = `<span>${p.productName} <small>${new Date(p.date).toLocaleDateString()}</small></span>
            <div class="item-actions">
                <button onclick="window.app.loadProduct(${p.id})">Load</button>
                <button onclick="window.app.deleteSavedProduct(${p.id})" class="btn-delete">Remove</button>
            </div>`;
        elements.savedProductsList.appendChild(li);
    });
}

function loadProduct(id) {
    const p = JSON.parse(localStorage.getItem('mfg_products') || '[]').find(x => x.id === id);
    if (!p) return; const curLang = state.currentLanguage; state = { ...p, currentLanguage: curLang }; updateUI();
}

function deleteSavedProduct(id) {
    const filter = JSON.parse(localStorage.getItem('mfg_products') || '[]').filter(x => x.id !== id);
    localStorage.setItem('mfg_products', JSON.stringify(filter)); renderSavedProducts();
}

function generatePDF() {
    const { jsPDF } = window.jspdf; const doc = new jsPDF(); const t = translations[state.currentLanguage];
    doc.setFontSize(22); doc.text(t.app_title, 105, 20, { align: 'center' });
    doc.setFontSize(12); doc.text(`Product: ${state.productName}`, 20, 40);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);
    const body = state.parts.map(p => [p.name, `₹${p.price}`, `${p.weight}g`, `₹${p.cost.toFixed(2)}`]);
    doc.autoTable({ head: [[t.th_part_name, 'Price/kg', 'Weight', 'Cost']], body, startY: 60 });
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.text(`Overhead per unit: ${elements.overheadDisplay.textContent}`, 20, finalY);
    doc.text(`Packaging per unit: ${elements.packagingCostDisplay.textContent}`, 20, finalY + 10);
    doc.setFontSize(14); doc.text(`TOTAL COST (Pre-Tax): ${elements.totalCostDisplay.textContent}`, 20, finalY + 25);
    doc.text(`GST (${state.gstRate}%): ${elements.gstAmountDisplay.textContent}`, 20, finalY + 35);
    doc.setTextColor(37, 99, 235); doc.text(`FINAL SELLING PRICE: ${elements.sellingPriceDisplay.textContent}`, 20, finalY + 45);
    doc.save(`${state.productName}_Report.pdf`);
}

function generateBackup(download = true) {
    const content = `REPORT: ${state.productName}\nDATE: ${new Date().toLocaleString()}\n\n--PARTS--\n` +
        state.parts.map(p => `${p.name}: ₹${p.cost.toFixed(2)}`).join('\n') +
        `\n\n--SUMMARY--\nTotal Cost: ${elements.totalCostDisplay.textContent}\nGST: ${state.gstRate}%\nSelling Price: ${elements.sellingPriceDisplay.textContent}`;
    if (download) {
        const blob = new Blob([content], { type: 'text/plain' });
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${state.productName}_Backup.txt`;
        a.click();
    }
    return JSON.stringify(state);
}

function restoreData(e) {
    const f = e.target.files[0]; if (!f) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        try {
            const data = JSON.parse(ev.target.result);
            if (data.productName) { state = data; updateUI(); alert(translations[state.currentLanguage].msg_restore_success); }
        } catch (err) { alert("Please upload a valid .json backup file."); }
    };
    reader.readAsText(f);
}

function updateUI() {
    elements.productName.value = state.productName;
    elements.laborCost.value = state.expenses.labor || '';
    elements.electricityCost.value = state.expenses.electricity || '';
    elements.rentCost.value = state.expenses.rent || '';
    elements.productionQty.value = state.expenses.productionQty || 1;
    elements.miniBoxCost.value = state.packaging.miniBoxCost || '';
    elements.largeBoxCost.value = state.packaging.largeBoxCost || '';
    elements.qtyInLarge.value = state.packaging.qtyInLarge || 1;
    elements.gstRate.value = state.gstRate;
    elements.profitPercent.value = state.profitPercent;
    calculateAndRender();
}

function formatCurrency(v) { return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(v); }

function applyLanguage(l) {
    state.currentLanguage = l;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[l][key]) el.innerHTML = translations[l][key];
    });
    renderLibrary(); renderSavedProducts();
}

function changeLanguage(l) {
    state.currentLanguage = l;
    document.querySelectorAll('.btn-lang').forEach(b => b.classList.toggle('active', b.getAttribute('data-lang') === l));
    applyLanguage(l);
}

function clearAll() {
    if (confirm(translations[state.currentLanguage].msg_confirm_clear)) {
        state = { ...state, id: null, productName: '', parts: [], expenses: { labor: 0, electricity: 0, rent: 0, productionQty: 1 }, packaging: { miniBoxCost: 0, largeBoxCost: 0, qtyInLarge: 1 }, gstRate: 0, profitPercent: 20 };
        updateUI();
    }
}

function initEnterToNext() {
    const focusable = Array.from(document.querySelectorAll('input, select, button.btn-primary'));
    focusable.forEach((el, index) => {
        el.onkeydown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); const n = focusable[index + 1]; if (n) { n.focus(); if (n.tagName === 'INPUT') n.select(); }
            }
        };
    });
}

function renderPartsTable() {
    elements.partsBody.innerHTML = ''; const t = translations[state.currentLanguage];
    state.parts.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${p.name}</td><td>${formatCurrency(p.cost)}</td><td><button class="btn-edit" onclick="window.app.editPart(${p.id})">${t.edit_btn}</button><button class="btn-delete" onclick="window.app.deletePart(${p.id})">${t.delete_btn}</button></td>`;
        elements.partsBody.appendChild(tr);
    });
}

function initChart() {
    const ctx = document.getElementById('costChart').getContext('2d');
    costChart = new Chart(ctx, { type: 'doughnut', data: { labels: [], datasets: [{ data: [], backgroundColor: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'], borderWidth: 0 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { position: 'bottom' } } } });
}

function updateChart(parts) {
    if (!costChart) return;
    if (parts.length === 0) { costChart.data.labels = ['No Data']; costChart.data.datasets[0].data = [1]; costChart.data.datasets[0].backgroundColor = ['#e2e8f0']; }
    else { costChart.data.labels = parts.map(p => p.name); costChart.data.datasets[0].data = parts.map(p => p.cost); }
    costChart.update();
}

window.app = { deletePart, editPart, loadProduct, deleteSavedProduct, deleteLibraryItem, toggleSection };
document.addEventListener('DOMContentLoaded', init);
