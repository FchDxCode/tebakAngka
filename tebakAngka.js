let game = true;

while (game) {
    alert("Game Tebak Angka \nPilih No 1-10\nHanya Mempunyai 3 Kesempatan!");

    let comp = Math.floor(Math.random() * 10) + 1;
    console.log(comp);

    let hasil = "";

    for (kesempatan = 2; kesempatan >= 0; kesempatan--) {
        let user = prompt("Tebak Angkanya :");
        if (user == comp && kesempatan != 0) {
            hasil = "Selamat Anda Benarr Bree!";
            alert(hasil);
            break;
        } else if (user < comp && kesempatan != 0) {
            hasil = "Angka Anda Terlalu Rendah Bree!";
            alert(hasil + "\nKesempatan Anda Tinggal " + kesempatan + "x");
        } else if (user > comp && kesempatan != 0) {
            hasil = "Angka Anda Terlalu Besar Bree!";
            alert(hasil + "\nKesempatan Anda Tinggal " + kesempatan + "x");
        } else if (kesempatan == 0) {
            alert("Game Over Kesempatan habis dan permainan telah selesai!" + "\nAngka Yang Dicari Adalah: " + comp + "\n Silahkan Bermain Lagi:v");
        };
    }
}

game = confirm("Main Lagi Kah Banjj?");

alert("Arigatou Sudah Bermain!");