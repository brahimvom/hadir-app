function onScanSuccess(decodedText, decodedResult) {
    // ملي يسكاني، دير Vibration (إلى كان تيليفون) وصوت
    console.log(`Scan Result: ${decodedText}`);
    alert("تم التسجيل: " + decodedText);
}

// إعدادات الكاميرا
const config = { 
    fps: 15, 
    qrbox: { width: 250, height: 250 },
    aspectRatio: 1.0
};

let html5QrcodeScanner = new Html5QrcodeScanner("reader", config, false);

// تشغيل الكاميرا مع معالجة الخطأ
html5QrcodeScanner.render(onScanSuccess, (err) => {
    // هاد السطر كيتجاهل الأخطاء البسيطة ديال "مالقيتش كود" باش ما يتبلوكاش
});