// === FUNGSI PILIH MENU UTAMA ===
function pilih(jenis) {
  const ruang = document.getElementById('menu-ruang');
  const datar = document.getElementById('menu-datar');

  ruang.style.display = "none";
  datar.style.display = "none";

  if (jenis === 'ruang') {
    ruang.style.display = "block";
  } else {
    datar.style.display = "block";
  }
}

// === SEMBUNYIKAN SEMUA TABEL HITUNG ===
function sembunyikanSemuaTabel() {
  const semuaTabel = document.querySelectorAll('#table-hitung > div');
  semuaTabel.forEach(tabel => tabel.style.display = 'none');
}

// === KUBUS ===
function kubus(jenis) {
  sembunyikanSemuaTabel(); // <--- sembunyikan semua tabel dulu

  if (jenis === 'volume') {
    document.getElementById('table-volume-kubus').style.display = "block";
  } else if (jenis === 'luas_permukaan') {
    document.getElementById('table-luas-kubus').style.display = "block";
  }
}

function hitungkubus(jenis) {
  if (jenis === 'volume') {
    const sisi = parseFloat(document.getElementById('sisi').value);
    const satuan = document.getElementById('satuan').value;
    const tampil = document.getElementById('volume-kubus');

    if (isNaN(sisi) || sisi <= 0) return alert("Masukkan panjang sisi yang benar!");

    const hasil = sisi ** 3;
    let hasilLiter = 0;
    if (satuan === 'cm3') hasilLiter = hasil / 1000;
    else if (satuan === 'm3') hasilLiter = hasil * 1000;

    tampil.style.display = "block";
    tampil.innerHTML = `
      <p>Volume Kubus: <strong>${hasil.toLocaleString()} ${satuan}</strong></p>
      <p>≈ <strong>${hasilLiter.toLocaleString()} liter</strong></p>
    `;

  } else if (jenis === 'luas_permukaan') {
    const sisi = parseFloat(document.getElementById('sisi-luas').value);
    const satuan = document.getElementById('satuan-luas').value;
    const tampil = document.getElementById('luas-kubus');

    if (isNaN(sisi) || sisi <= 0) return alert("Masukkan panjang sisi yang benar!");

    const hasil = 6 * (sisi * sisi);

    tampil.style.display = "block";
    tampil.innerHTML = `
      <p>Luas Permukaan Kubus: <strong>${hasil.toLocaleString()} ${satuan}</strong></p>
    `;
  }
}

// === BALOK ===
function balok(jenis) {
  sembunyikanSemuaTabel(); // <--- sembunyikan semua tabel dulu

  if (jenis === 'volume') {
    document.getElementById('table-volume-balok').style.display = "block";
  }
}

function hitungBalok(jenis) {
  const tampil = document.getElementById('volume-balok');
  const panjang = parseFloat(document.getElementById('panjang').value);
  const lebar = parseFloat(document.getElementById('lebar').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const satuan = document.getElementById('satuan-balok').value;

  if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi) || panjang <= 0 || lebar <= 0 || tinggi <= 0) {
    alert("Masukkan nilai panjang, lebar, dan tinggi yang benar!");
    return;
  }

  if (jenis === 'volume') {
    const volume = panjang * lebar * tinggi;
    let liter = 0;

    if (satuan === "m3") liter = volume * 1000; // 1 m³ = 1000 L
    else if (satuan === "cm3") liter = volume / 1000; // 1000 cm³ = 1 L

    tampil.style.display = "block";
    tampil.innerHTML = `
      <p><strong>Volume Balok:</strong> ${volume.toLocaleString()} ${satuan}</p>
      <p>≈ ${liter.toLocaleString()} liter</p>
    `;
  }
}
