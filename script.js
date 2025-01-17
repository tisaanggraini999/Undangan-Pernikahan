// Fungsi untuk memperbarui nama tamu berdasarkan parameter URL
function updateGuestName() {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('guest');
  if (guestName) {
    document.getElementById('guest-name').textContent = guestName;
  }
}

// Countdown Timer
const countdownDate = new Date("Feb 14, 2025 00:00:00").getTime();
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    countdownElement.textContent = "It's time!";
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdownElement.textContent = `${days} days remaining`;
  }
}

setInterval(updateCountdown, 1000);

// Auto-scrolling ke halaman selanjutnya
let currentPage = 1;

function scrollPages() {
  if (currentPage === 1) {
    document.getElementById('page-1').classList.remove('active');
    document.getElementById('page-2').classList.add('active');
    currentPage++;
  } else if (currentPage === 2) {
    document.getElementById('page-2').classList.remove('active');
    document.getElementById('page-3').classList.add('active');
    currentPage++;
  } else if (currentPage === 3) {
    document.getElementById('page-3').classList.remove('active');
    document.getElementById('page-4').classList.add('active');
    currentPage++;
  }
}

// Event Listeners
document.getElementById('open-invite').addEventListener('click', scrollPages);

// Menampilkan halaman pertama dan memperbarui nama tamu
document.addEventListener('DOMContentLoaded', () => {
  updateGuestName();
  document.getElementById('page-1').classList.add('active');
});
