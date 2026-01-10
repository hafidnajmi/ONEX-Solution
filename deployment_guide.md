# Panduan Lengkap Deploy (GitHub & Vercel)

Berikut adalah panduan lengkap mulai dari upload kode dari laptop Anda ke GitHub, sampai website Online menggunakan Vercel.

## 1. Upload Kode ke GitHub (Terminal)
Lakukan langkah ini di terminal (VS Code) setiap kali Anda membuat perubahan pada kode dan ingin meng-update website.

**Langkah-langkah:**

1.  **Buka Terminal** di VS Code (`Ctrl + ` `).
2.  **Masukkan perintah berikut satu per satu:**

```powershell
# 1. Masukkan semua file yang berubah ke 'staging area'
git add .

# 2. Simpan perubahan dengan pesan (bebas, contoh: "update website")
git commit -m "Update konten website"

# 3. Kirim (upload) perubahan ke GitHub
git push
```

*Jika `git push` berhasil tanpa error, berarti kode Anda di GitHub sudah paling baru dan **SIAP** untuk tahap selanjutnya.*

---

## 2. Deploy ke Vercel (Hanya Sekali)
Langkah ini hanya perlu dilakukan **sekali saja** saat pertama kali men-deploy website. Untuk update selanjutnya, Vercel akan **otomatis** meng-update website Anda setiap kali Anda melakukan `git push` (Langkah 1).

### A. Mendaftar / Login
1. Buka [https://vercel.com/signup](https://vercel.com/signup).
2. Pilih **"Continue with GitHub"**.
3. Login dan ikuti instruksi sampai masuk ke Dashboard.

### B. Import Project
1. Di Dashboard Vercel, klik tombol **"Add New..."** -> **"Project"**.
2. Di daftar "Import Git Repository", cari **ONEX-Solution**.
3. Klik tombol **"Import"** di sebelahnya.

### C. Deploy
1. Vercel akan otomatis mendeteksi project **Astro**.
2. **JANGAN** ubah pengaturan apapun (Build Command, Output Directory, dll). Biarkan default.
3. Klik tombol **"Deploy"**.

### D. Selesai
1. Tunggu 1-2 menit hingga proses Build selesai.
2. Jika layar menampilkan screenshot website Anda dengan konfeti, selamat! Website Anda sudah Online.
3. Klik kotak screenshot untuk melihat hasilnya.

---

## Tips Tambahan: Mengganti Domain
Jika ingin alamat website lebih profesional (contoh: `onexsolution.com`):
1. Beli domain di penyedia (Niagahoster, RumahWeb, GoDaddy, dll).
2. Di Dashboard Vercel project Anda, buka **Settings** > **Domains**.
3. Masukkan nama domain Anda.
4. Ikuti instruksi setting DNS yang muncul di layar Vercel.
