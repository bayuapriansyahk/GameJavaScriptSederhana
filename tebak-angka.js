let tanya = true;

while (tanya) {
  let nilaiMaksimal = parseInt(prompt("Masukkan Nilai Maksimal"));

  while (!nilaiMaksimal) {
    nilaiMaksimal = parseInt(prompt("Nilai Maksimal Harus Diisi!"));
  }

  const angkaRahasia = Math.floor(Math.random() * nilaiMaksimal) + 1;
  let nyawa = 4;
  let tebak = parseInt(prompt(`Silahkan Tebak Angka Rahasianya! \nKamu Mempunyai Kesempatan ${nyawa + 1} kali.`));

  while (parseInt(tebak) !== angkaRahasia) {
    while (!tebak) {
      tebak = parseInt(prompt(`Nilai Tebak Harus Diisi! \nKamu Mempunyai Kesempatan ${nyawa + 1} kali.`));
    }
    if (parseInt(tebak) > angkaRahasia) {
      nyawa--;
      tebak = parseInt(prompt(`Angka Terlalu Tinggi! \nKamu Mempunyai Kesempatan ${nyawa + 1} kali.`));
    } else {
      nyawa--;
      tebak = parseInt(prompt(`Angka Terlalu Rendah! \nKamu Mempunyai Kesempatan ${nyawa + 1} kali.`));
    }

    if (nyawa == 0) {
      break;
    }
  }
  if (nyawa == 0) {
    if (parseInt(tebak) === angkaRahasia) {
      alert(
        `Selamat Anda Benar! Angka Rahasianya Adalah ${angkaRahasia} \nAnda Berhasil Menjawab Dengan Sisa Kesempatan ${
          nyawa + 1
        } Kali`
      );
    } else {
      alert(`Sayang Sekali Kesempatan Anda Sudah Habis :( \nAngka Rahasinya Adalah ${angkaRahasia}`);
    }
  } else {
    alert(
      `Selamat Anda Benar! Angka Rahasianya Adalah ${angkaRahasia} \nAnda Berhasil Menjawab Dengan Sisa Kesempatan ${
        nyawa + 1
      } Kali`
    );
  }
  tanya = confirm("Main Lagi?");
}
alert("Terima Kasih Sudah Bermain :)");
