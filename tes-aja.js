const token = 'Qu8z1RwCifaCKz3zs7az'; // Token baru kamu
const target = '6285117090357';

console.log("🚀 Mencoba kirim dengan parameter message...");

const params = new URLSearchParams();
params.append('target', target);
params.append('url', 'https://placehold.co/600x400/00AA5B/white.png?text=TOKEN+BARU+OKE'); 
params.append('message', '🚨 TEST FOTO TERDETEKSI'); // TAMBAHKAN INI (WAJIB)
params.append('caption', 'FOTO TARGET');

fetch('https://api.fonnte.com/send', {
    method: 'POST',
    headers: { 'Authorization': token },
    body: params
})
.then(res => res.json())
.then(hasil => {
    console.log("HASIL FINAL:", hasil);
})
.catch(err => console.log("ERROR:", err));