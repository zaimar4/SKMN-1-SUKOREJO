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
  sembunyikanSemuaTabel();

  if (jenis === 'volume') {
    document.getElementById('table-volume-balok').style.display = "block";
  } else if (jenis === 'luas_permukaan') {
    document.getElementById('table-luas-balok').style.display = "block";
  }
}

function hitungBalok(jenis) {
  if (jenis === 'volume') {
    const panjang = parseFloat(document.getElementById('panjang').value);
    const lebar = parseFloat(document.getElementById('lebar').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const satuan = document.getElementById('satuan-balok').value;
    const tampil = document.getElementById('volume-balok');

    if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi) || panjang <= 0 || lebar <= 0 || tinggi <= 0) {
      alert("Masukkan nilai panjang, lebar, dan tinggi yang benar!");
      return;
    }

    const volume = panjang * lebar * tinggi;
    let liter = 0;

    if (satuan === "m3") liter = volume * 1000;
    else if (satuan === "cm3") liter = volume / 1000;

    tampil.style.display = "block";
    tampil.innerHTML = `
      <p><strong>Volume Balok:</strong> ${volume.toLocaleString()} ${satuan}</p>
      <p>≈ ${liter.toLocaleString()} liter</p>
    `;
  }

  else if (jenis === 'luas_permukaan') {
    const panjang = parseFloat(document.getElementById('panjang-luas').value);
    const lebar = parseFloat(document.getElementById('lebar-luas').value);
    const tinggi = parseFloat(document.getElementById('tinggi-luas').value);
    const satuan = document.getElementById('satuan-luas-balok').value;
    const tampil = document.getElementById('luas-balok');

    if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi) || panjang <= 0 || lebar <= 0 || tinggi <= 0) {
      alert("Masukkan nilai panjang, lebar, dan tinggi yang benar!");
      return;
    }

    const luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

    tampil.style.display = "block";
    tampil.innerHTML = `
      <p><strong>Luas Permukaan Balok:</strong> ${luas.toLocaleString()} ${satuan}</p>
    `;
  }
}


// === PERSEGI ===
function persegi(jenis) {
  sembunyikanSemuaTabel();
  if (jenis === 'luas') {
    document.getElementById('table-luas-persegi').style.display = "block";
  } else if (jenis === 'keliling') {
    document.getElementById('table-keliling-persegi').style.display = "block";
  }
}

function hitungPersegi(jenis) {
  let sisi, satuan, tampil;

  if (jenis === 'luas') {
    sisi = parseFloat(document.getElementById('sisi-persegi-luas').value);
    satuan = document.getElementById('satuan-persegi').value;
    tampil = document.getElementById('hasil-luas-persegi');
  } else if (jenis === 'keliling') {
    sisi = parseFloat(document.getElementById('sisi-persegi').value);
    satuan = document.getElementById('satuan-persegi').value;
    tampil = document.getElementById('hasil-keliling-persegi');
  }

  if (isNaN(sisi) || sisi <= 0) {
    alert("Masukkan panjang sisi yang benar!");
    return;
  }

  if (jenis === 'luas') {
    const hasil = sisi * sisi;
    tampil.style.display = "block";
    tampil.innerHTML = `
      <p><strong>Luas Persegi:</strong> ${hasil.toLocaleString()} ${satuan}</p>
    `;
  } else if (jenis === 'keliling') {
    const hasil = sisi * 4;
    tampil.style.display = "block";
    tampil.innerHTML = `
      <p><strong>Keliling Persegi:</strong> ${hasil.toLocaleString()} ${satuan}</p>
    `;
  }
}

