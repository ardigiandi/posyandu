function toggleAnswer(faqId) {
  var answer = document.getElementById(faqId);
  // Toggle visibility of the answer with animation
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
    setTimeout(() => {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }, 10); // Trigger transition
  } else {
    answer.style.maxHeight = "0px"; // Set max-height to 0 for collapsing effect
    setTimeout(() => {
      answer.classList.add("hidden");
    }, 300); // Hide after transition
  }
}

// NAVBAR
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

// JavaScript untuk validasi form
const form = document.getElementById("registration-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const tanggalLahir = document.getElementById("tanggal_lahir").value;
  const alamat = document.getElementById("alamat").value.trim();
  const noTelepon = document.getElementById("no_telepon").value.trim();

  if (!nama || !tanggalLahir || !alamat || !noTelepon) {
    alert("Harap isi semua bidang formulir!");
    return;
  }

  if (!/^\d{10,15}$/.test(noTelepon)) {
    alert("Nomor telepon harus terdiri dari 10-15 digit angka!");
    return;
  }

  alert("Formulir berhasil dikirim!");
  form.reset();
});
