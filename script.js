<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tulisan di Tengah</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
    }

    .background {
      background-image: url('img3.jpeg'); /* Ganti dengan URL gambar Anda */
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100%;
      position: relative; /* Agar teks di atas background */
      color: white;
      font-family: Arial, sans-serif;
    }

    .content {
      position: absolute; /* Posisi absolut untuk teks */
      top: 50%; /* Posisikan di tengah vertikal */
      left: 50%; /* Posisikan di tengah horizontal */
      transform: translate(-50%, -50%); /* Pastikan benar-benar di tengah */
      text-align: center; /* Teks rata tengah */
    }

    .content h1 {
      font-size: 3rem; /* Ukuran teks utama */
      margin: 0;
    }

    .content p {
      font-size: 1.5rem; /* Ukuran teks tambahan */
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="background">
    <div class="content">
      <h1>Selamat Datang</h1>
      <p>Ini adalah teks di tengah layar.</p>
    </div>
  </div>
</body>
</html>
