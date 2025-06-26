let tanya = true;
while (tanya) {
  let nyawa = 5;
  let main = true;
  let menang = 0;
  let kalah = 0;
  let hasil = "";

  while (main) {
    // menentukan value player
    let player = prompt(`Pilih "Gajah", "Semut" atau "Orang"? \nKamu Mempunyai ${nyawa} Kali Kesempatan`).toLowerCase();

    // validasi value player
    while (!player) {
      player = prompt(
        `Pilihan Harus Diisi! \nPilih "Gajah", "Semut" atau "Orang"? \nKamu Mempunyai ${nyawa} Kali Kesempatan`
      ).toLowerCase();
    }

    // menetukan nilai lawan
    let enemy = Math.floor(Math.random() * 3) + 1;

    if (enemy == 1) {
      enemy = "gajah";
    } else if (enemy == 2) {
      enemy = "semut";
    } else {
      enemy = "orang";
    }

    // menentukan hasil suit
    if (player == enemy) {
      hasil = "SERI";
    } else if (player == "gajah") {
      if (enemy == "orang") {
        hasil = "MENANG";
        nyawa--;
        menang++;
      } else {
        hasil = "KALAH";
        nyawa--;
        kalah++;
      }
    } else if (player == "semut") {
      if (enemy == "gajah") {
        hasil = "MENANG";
        nyawa--;
        menang++;
      } else {
        hasil = "KALAH";
        nyawa--;
        kalah++;
      }
    } else if (player == "orang") {
      if (enemy == "semut") {
        hasil = "MENANG";
        nyawa--;
        menang++;
      } else {
        hasil = "KALAH";
        nyawa--;
        kalah++;
      }
    } else {
      hasil = "MEMASUKKAN PILIHAN YANG SALAH!";
    }

    alert(
      `Kamu memilih ${player.toUpperCase()} dan Komputer memilih ${enemy.toUpperCase()} \nKAMU ${hasil}!\nSKOR Player ${menang} - ${kalah} Komputer`
    );

    if (nyawa == 0) {
      break;
    } else {
      main = confirm("Lanjut?");
    }
  }
  if (menang > kalah) {
    alert(`Player ${menang} - ${kalah} Komputer \nSELAMAT ANDA MENANG!`);
  } else if (menang < kalah) {
    alert(`Player ${menang} - ${kalah} Komputer \nANDA KALAH :(`);
  } else {
    alert(`Player ${menang} - ${kalah} Komputer \nPERTANDINGAN SERI!`);
  }

  tanya = confirm("Main Lagi?");
}
alert("Terima Kasih Sudah Bermain :)");
