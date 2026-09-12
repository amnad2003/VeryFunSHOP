// =============================
// ตั้งค่าตรงนี้ได้ง่ายๆ
// =============================

// เปลี่ยนลิงก์ติดต่อร้านตรงนี้
const CONTACT_LINK = "https://www.facebook.com/profile.php?id=61590437739407";

// แก้ชื่อแพ็กเกจและราคาได้จากตรงนี้
const games = {

  roblox: {
    name: "Roblox",
    rates: [
      ["80 Robux", "33 บาท"],
      ["160 Robux", "65 บาท"],
      ["240 Robux", "95 บาท"],
      ["320 Robux", "125 บาท"],
      ["500 Robux", "155 บาท"],
      ["1,000 Robux", "295 บาท"],
      ["1,500 Robux", "440 บาท"],
      ["2,000 Robux", "595 บาท"],
      ["2,500 Robux", "750 บาท"],
      ["3,000 Robux", "900 บาท"],
      ["3,500 Robux", "1,100 บาท"],
      ["5,000 Robux", "1,490 บาท"],
      ["10,000 Robux", "2,950 บาท"],
      ["15,000 Robux", "4,400 บาท"]
    ]
  },

const gameName = document.getElementById("gameName");
const rates = document.getElementById("rates");
const contactBtn = document.getElementById("contactBtn");
const contactTop = document.getElementById("contactTop");

contactBtn.href = CONTACT_LINK;
contactTop.href = CONTACT_LINK;

function showGame(id) {
  const game = games[id];
  gameName.textContent = game.name;

  rates.innerHTML = game.rates.map(([item, price]) => `
    <div class="rate-row">
      <span>${item}</span>
      <strong>${price}</strong>
    </div>
  `).join("");
}

document.querySelectorAll(".game").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".game").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    showGame(button.dataset.game);
  });
});

showGame("roblox");
