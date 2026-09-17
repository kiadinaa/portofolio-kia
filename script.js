const form = document.getElementById("nilaiForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();

        const tugas = parseFloat(document.getElementById("tugas").value);
        const sikap = parseFloat(document.getElementById("sikap").value);
        const kehadiran = parseFloat(document.getElementById("kehadiran").value);
        const uts = parseFloat(document.getElementById("uts").value);
        const uas = parseFloat(document.getElementById("uas").value);

        const hasilNama = document.getElementById("hasilNama");
        const nilaiAkhirElement = document.getElementById("nilaiAkhir");
        const nilaiHurufElement = document.getElementById("nilaiHuruf");
        const statusElement = document.getElementById("status");
        const pesanKehadiran = document.getElementById("pesanKehadiran");

        if (
            !nama ||
            isNaN(tugas) ||
            isNaN(sikap) ||
            isNaN(kehadiran) ||
            isNaN(uts) ||
            isNaN(uas)
        ) {
            alert("Mohon isi semua data terlebih dahulu.");
            return;
        }

        if (
            tugas < 0 || tugas > 100 ||
            sikap < 0 || sikap > 100 ||
            kehadiran < 0 || kehadiran > 100 ||
            uts < 0 || uts > 100 ||
            uas < 0 || uas > 100
        ) {
            alert("Nilai harus berada di antara 0 sampai 100.");
            return;
        }

        const nilaiAkhir =
            (tugas * 0.40) +
            (sikap * 0.20) +
            (uts * 0.15) +
            (uas * 0.25);

        let nilaiHuruf;
        let bobotIPK;
        let status;

        if (nilaiAkhir >= 90) {
            nilaiHuruf = "A";
            bobotIPK = "4.00";
            status = "LULUS";
        } else if (nilaiAkhir >= 85) {
            nilaiHuruf = "A-";
            bobotIPK = "3.67";
            status = "LULUS";
        } else if (nilaiAkhir >= 80) {
            nilaiHuruf = "B+";
            bobotIPK = "3.33";
            status = "LULUS";
        } else if (nilaiAkhir >= 75) {
            nilaiHuruf = "B";
            bobotIPK = "3.00";
            status = "LULUS";
        } else if (nilaiAkhir >= 70) {
            nilaiHuruf = "B-";
            bobotIPK = "2.50";
            status = "LULUS";
        } else if (nilaiAkhir >= 65) {
            nilaiHuruf = "C";
            bobotIPK = "2.00";
            status = "LULUS";
        } else if (nilaiAkhir >= 50) {
            nilaiHuruf = "D";
            bobotIPK = "1.00";
            status = "TIDAK LULUS";
        } else {
            nilaiHuruf = "E / F";
            bobotIPK = "0.00";
            status = "TIDAK LULUS";
        }

        hasilNama.textContent = nama;
        nilaiAkhirElement.textContent = nilaiAkhir.toFixed(2);
        nilaiHurufElement.textContent = nilaiHuruf;
        statusElement.textContent = status;

        if (kehadiran < 75) {
            pesanKehadiran.classList.remove("hidden");
        } else {
            pesanKehadiran.classList.add("hidden");
        }
    });
}