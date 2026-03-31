const bulb = document.getElementById('bulb');
const btn = document.getElementById('btnControl');
const slider = document.getElementById('brightness');

let isOn = false;

function updateBrightness() {
    if (isOn) {
        let val = slider.value;
        // Yorug'lik darajasiga qarab rangni va nurni o'zgartiramiz
        // 255, 242, 0 - bu sariq rangning RGB kodi
        bulb.style.backgroundColor = `rgba(255, 242, 0, ${val / 100})`;
        bulb.style.boxShadow = `0px 0px ${val}px rgba(255, 242, 0, 0.8)`;
    }
}

function toggleBulb() {
    isOn = !isOn;
    
    if (isOn) {
        btn.innerText = "O'chirish";
        slider.disabled = false;
        updateBrightness(); // Yoqqanda darhol oxirgi holatni ko'rsatadi
    } else {
        btn.innerText = "Yoqish";
        slider.disabled = true;
        // O'chganda stillarni tozalaymiz
        bulb.style.backgroundColor = "#444"; 
        bulb.style.boxShadow = "none";
    }
}

slider.addEventListener('input', updateBrightness);
