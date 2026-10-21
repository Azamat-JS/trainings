const locationBtn = document.querySelector(".location-btn")
const batteryBtn = document.querySelector(".battery-btn")
const cameraBtn = document.querySelector(".camera-btn");
const resultText = document.querySelector(".show-result")


function getBattery() {
    let batteryPromise = navigator.getBattery();

    batteryPromise.then((batteryObject) => {
        resultText.innerHTML = `
    ${batteryObject.level * 100}%
    `
    });
}

cameraBtn.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        const videoElement = document.getElementById('webcam');
        videoElement.srcObject = stream;

        console.log("Kamera muvaffaqiyatli yoqildi!");
    } catch (error) {
        console.error("Kamerani yoqishda xatolik yuz berdi:", error);
        alert("Kameraga ruxsat berilmadi yoki qurilma topilmadi.");
    }
});

locationBtn.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
            resultText.innerHTML = `
    User ni uzunlikdagi joylashuvi: ${longitude.toFixed(1)}
    <br />
    User ni kenglikdagi joylashuvi: ${latitude.toFixed(1)}`
        }
    );
})