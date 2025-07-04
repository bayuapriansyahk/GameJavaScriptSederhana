let ulang = true;

function bruteForceTools() {
  let password = prompt(
    "Ini adalah simulasi BruteForce sederhana \nUntuk melihat simulasinya silahkan membuka console pada web browser \nMasukkan password!"
  );

  while (!password) {
    password = prompt("Password tidak boleh KOSONG! \nSilahkan isi password!");
  }

  const target = [password];

  const lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperCase = lowerCase.map((huruf) => huruf.toUpperCase());
  const angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => num.toString());
  const simbol = [
    "`",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "{",
    "]",
    "}",
    "\\",
    "|",
    ";",
    ":",
    "'",
    '"',
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
  ];

  const karakter = [...lowerCase, ...upperCase, ...angka, ...simbol];

  const bruteForceArr = [];
  let bruteForce = "";
  let i = 0;
  let a = 0;

  function nextChar() {
    if (password.length !== bruteForceArr.length) {
      const interval = setInterval(() => {
        console.log(karakter[a]);

        if (karakter[a] === password[i]) {
          clearInterval(interval);
          alert(`Karakter ketemu: ${karakter[a]}`);
          bruteForceArr.push(karakter[a]);
          a = 0;
          i++;

          if (password.length === bruteForceArr.length) {
            for (const hasil of bruteForceArr) {
              bruteForce += hasil;
            }

            if (password === bruteForce) {
              alert(`Password berhasil ditemukan: "${bruteForce}"`);
              ulang = confirm("Lagi?");
              if (ulang === true) {
                bruteForceTools();
              } else {
                alert("Terima kasih sudah bermain :)");
              }
            } else {
              alert("Password Tidak Ditemukan");
            }
          }
        } else {
          a++;
        }
      }, 100);
    }
  }

  let x = 0;
  while (x < password.length) {
    nextChar();
    x++;
  }
}

bruteForceTools();
