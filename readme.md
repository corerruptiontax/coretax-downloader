# coretaxDownloader

Ini adalah aplikasi Chrome Extension untuk mendownload faktur yang telah di-approve di aplikasi Coretax DJP. Aplikasi ini dibuat menggunakan JavaScript untuk menjalankan langkah-langkah download massal yang telah beredar menggunakan JavaScript.

## Disclaimer

Aplikasi ini hanya enhance dari fungsi JavaScript yang sudah banyak beredar yaitu:

```javascript
buttons.forEach((button, index) => {
    setTimeout(() => {
        button.click();
        console.log(`PDF terunduh ${index + 1}`);
    }, delay * index);
});
```

## Fitur
- Mendownload faktur yang telah di-approve secara otomatis.
- Menggunakan teknologi JavaScript untuk efisiensi dan kecepatan.

## Instalasi
1. Clone repositori ini atau download dalam bentuk zip.
2. Buka Chrome dan masuk ke `chrome://extensions/`.
3. Aktifkan "Developer mode" di pojok kanan atas.
4. Jangan lupa unzip terlebih dahulu di folder yang anda inginkan
5. Klik "Load unpacked" atau "Muat yang belum dibuka" dan pilih folder hasil clone.

## Penggunaan
1. Buka aplikasi Coretax DJP.
2. Buka e-faktur keluaran dan isi status faktur dengan 'APPROVED'
3. Load data terlebih dahulu dengan menekan tombol refresh di kiri atas
4. Pastikan data telah muncul di table 
5. Klik tombol ekstensi di kanan atas atau di sebelah kanan tab url atau sebelah kiri tombol download.
6. Klik Coretax Downloader dan kemudian klik tombol Download 
7. Akan muncul list di sebelah kanan layar, remove jika sudah selesai

## Kontribusi
Jika Anda ingin berkontribusi, silakan fork repositori ini dan buat pull request dengan perubahan Anda.

## Lisensi
Aplikasi ini tidak dilisensikan 

## Penulis
Dibuat oleh Hendry Lioenardi
## Gambar

Anda dapat menambahkan gambar dengan menggunakan sintaks berikut:

```markdown
![Alt text](url_gambar)
```

Contoh:

![Logo Coretax](https://example.com/logo.png)

Anda dapat menyertakan gambar di folder proyek Anda. Untuk melakukannya, Anda perlu memastikan bahwa gambar tersebut berada di dalam repositori Anda dan menggunakan path relatif untuk merujuk ke gambar tersebut. Contoh:

```markdown
![Logo Coretax](./images/logo.png)
```

Pastikan Anda menempatkan gambar di folder `images` di dalam repositori Anda.