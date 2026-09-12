const games = {

    roblox: {
        name: "Roblox",

        rates: [
            ["80 R", "33"],
            ["160 R", "65"],
            ["240 R", "95"],
            ["320 R", "125"],
            ["500 R", "155"],
            ["1,000 R", "295"],
            ["1,500 R", "440"],
            ["2,000 R", "595"],
            ["2,500 R", "750"],
            ["3,000 R", "900"],
            ["3,500 R", "1,100"],
            ["5,000 R", "1,490"],
            ["10,000 R", "2,950"],
            ["15,000 R", "4,400"]
        ]
    }

};


// =========================================
// ใส่ลิงก์ติดต่อร้านตรงนี้
// =========================================

const CONTACT_URL = "#";


// =========================================
// แสดงราคา
// =========================================

function showGame(gameId) {

    const game = games[gameId];

    if (!game) return;

    document.getElementById("gameName").textContent =
        game.name;

    const ratesBox =
        document.getElementById("rates");

    ratesBox.innerHTML = "";

    game.rates.forEach(rate => {

        const row = document.createElement("div");

        row.className = "rate";

        row.innerHTML = `
            <div class="rate-amount">
                ${rate[0]}
            </div>

            <div class="rate-price">
                ${rate[1]}
                <span>บาท</span>
            </div>
        `;

        ratesBox.appendChild(row);

    });
}


// =========================================
// เลือกเกม
// =========================================

document.querySelectorAll(".game").forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".game")
            .forEach(btn => {
                btn.classList.remove("active");
            });

        button.classList.add("active");

        showGame(
            button.dataset.game
        );

    });

});


// =========================================
// ปุ่มติดต่อ
// =========================================

document.getElementById("contactTop").href =
    CONTACT_URL;

document.getElementById("contactBtn").href =
    CONTACT_URL;


// =========================================
// เริ่มต้น
// =========================================

showGame("roblox");
