# GameRate Simple

เว็บแสดงเรทราคาเติมเกมแบบง่ายสำหรับ GitHub Pages

## แก้ราคา
เปิดไฟล์ `script.js` แล้วแก้ข้อมูลใน `const games`

## แก้ลิงก์ติดต่อ
ใน `script.js` แก้:
`const CONTACT_LINK = "https://discord.gg/ใส่ลิงก์ของคุณ";`

ตัวอย่าง:
`const CONTACT_LINK = "https://discord.gg/xxxxxx";`

สามารถใช้ลิงก์ Discord, Facebook, LINE หรือหน้าเว็บร้านได้

## GitHub Pages
1. สร้าง Repository ใหม่
2. อัปโหลด `index.html`, `style.css`, `script.js`
3. ไป Settings > Pages
4. เลือก Deploy from branch
5. เลือก branch `main` และ `/ (root)`
