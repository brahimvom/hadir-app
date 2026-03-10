function onScanSuccess(decodedText, decodedResult) {
   
    console.log(`Scan Result: ${decodedText}`);
    alert("تم التسجيل: " + decodedText);
}


const config = { 
    fps: 15, 
    qrbox: { width: 250, height: 250 },
    aspectRatio: 1.0
};

let html5QrcodeScanner = new Html5QrcodeScanner("reader", config, false);


html5QrcodeScanner.render(onScanSuccess, (err) => {
    
const html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", 
    { 
        fps: 20, 
        qrbox: { width: 200, height: 200 }, 
        aspectRatio: 1.0
    }
);
});
