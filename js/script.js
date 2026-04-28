
// 🔥 تحديد الأداة وعرض البوكسات
function setMode(mode) {

    const content = document.getElementById("contentArea");

    let title = "";

    switch (mode) {
        case "pdf-word":
            title = "تحويل PDF إلى Word";
            break;
        case "word-excel":
            title = "تحويل Word إلى Excel";
            break;
        case "excel-word":
            title = "تحويل Excel إلى Word";
            break;
        case "pdf-images":
            title = "سحب صور من PDF";
            break;
        case "word-images":
            title = "سحب صور من Word";
            break;
        case "pdf-tables":
            title = "سحب جداول من PDF";
            break;
        case "excel-tables":
            title = "سحب جداول من Excel";
            break;
        default:
            title = "أداة";
    }

    let html = `
        <h1 style="margin-bottom:20px;">${title}</h1>
        <div class="cards">
    `;

    // 🔥 إنشاء 12 بوكس (3 صفوف × 4)
    for (let i = 1; i <= 12; i++) {

        let price, oldPrice;

        if (i === 1) {
            price = "مجاني";
            oldPrice = "";
        } else {
            price = `${i + 4}$`;
            oldPrice = `${i + 10}$`;
        }

        html += `
            <div class="card">
                <h3>الخطة ${i}</h3>

                <div class="price">
                    ${oldPrice ? `<span class="old">${oldPrice}</span>` : ""}
                    <span>${price}</span>
                </div>

                <p>
                    تحويل احترافي يحافظ على التنسيق والصور بنسبة عالية جداً
                </p>

                <button onclick="startAction('${mode}')">
                    ابدأ الآن
                </button>
            </div>
        `;
    }

    html += `</div>`;

    content.innerHTML = html;
}


// 🔥 عند الضغط على زر "ابدأ"
function startAction(mode) {

    // حالياً مجرد تجربة
    alert("تم اختيار: " + mode);

    // 🔥 لاحقاً نربطه بالتحويل الحقيقي
}


// 🔥 تشغيل افتراضي عند فتح الصفحة (اختياري)
window.onload = function () {
    setMode('pdf-word');
};