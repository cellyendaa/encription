# Encryption
A project focused on implementing a dual encryption system for securely transmitting sensitive files. The system utilizes AES and RSA algorithms to ensure data privacy and security.

## Fitur
- Upload file mentah.
- Enkripsi menggunakan algoritma AES.
- Enkripsi lanjutan menggunakan algoritma RSA.
- Kirim file terenkripsi.
- Dekripsi menggunakan algoritma RSA.
- Dekripsi final menggunakan algoritma AES.
- Import dan download file hasil enkripsi atau dekripsi.

## Instalasi
1. Clone repositori ini:
   git clone https://github.com/cellyendaa/encription.git
   
2. Pindah ke direktori proyek:
   cd encryption
   
3. Instal dependensi:
   npm install
   
4. Jalankan aplikasi:
   npm run start

## Cara Penggunaan
1. Upload file mentah melalui antarmuka aplikasi.
2. Jalankan proses enkripsi dengan langkah berikut:
   - File akan dienkripsi menggunakan algoritma AES.
   - Hasil enkripsi AES dienkripsi ulang menggunakan algoritma RSA.
3. Kirim file terenkripsi melalui saluran aman.
4. Untuk dekripsi:
   - File dienkripsi RSA akan didekripsi terlebih dahulu.
   - Hasil dekripsi RSA kemudian didekripsi menggunakan AES untuk mendapatkan file asli.
5. Gunakan fitur import untuk memproses file, dan fitur download untuk mengunduh hasil enkripsi atau dekripsi.

## Teknologi yang Digunakan
- JavaScript
- Algoritma AES (Advanced Encryption Standard)
- Algoritma RSA (Rivest-Shamir-Adleman)
