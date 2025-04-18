# Membangun SPA + API, Context, dan Hooks

Proyek ini adalah submission akhir pada course **Belajar Fundamental Aplikasi Web dengan React** di [Dicoding](dicoding.com).

- Hasil: ⭐⭐⭐⭐⭐

## Referensi

Silakan akses link contoh dari Aplikasi Catatan Pribadi V2 berikut agar Anda memiliki bayangan seperti apa harus membuat proyek submission-nya.

https://dicoding-react-notes-app-v2.netlify.app/

Pada kelas ini fokus membahas React, bukan penggunaan Fetch API, sehingga untuk bagian transaksi data ke API, kami sudah menyediakan fungsi yang bisa Anda manfaatkan. Anda bisa mendapatkan kodenya pada tautan: [network-data.js](https://github.com/dicodingacademy/a413-react-fundamental-labs/blob/099-shared-files/02-submissions/share-code/network-data.js). Anda bisa unduh kode tersebut dan simpan pada proyek submission, contohnya pada folder src -> utils.

## Kriteria

**Utama**

1. Memanfaatkan RESTful API sebagai sumber data

   Aplikasi harus memanfaatkan RESTful API sebagai sumber data dengan detail berikut.

   - RESTful API yang digunakan adalah https://notes-api.dicoding.dev/v1. Dokumentasi API bisa Anda akses pada tautan tersebut.
   - Harus menggunakan RESTful API sebagai sumber data dalam berbagai fitur di aplikasi catatan, seperti:
     - registrasi dan autentikasi,
     - daftar catatan,
     - daftar catatan terarsip (opsional),
     - detil catatan,
     - arsip/batal arsip catatan (opsional), dan
     - hapus catatan.
   - Karena kelas ini fokus membahas React, bukan penggunaan Fetch API, kami telah menyediakan fungsi dalam bertransaksi dengan API. Anda bisa melihatnya pada bilah **Referensi**.

2. Registrasi dan Autentikasi Pengguna

   Aplikasi memiliki fitur registrasi dan autentikasi (login) pengguna dengan detail berikut.

   - Membuat halaman baru untuk registrasi pengguna dengan input:
     - nama,
     - email,
     - password, dan
     - confirm password (opsional)
   - Membuat halaman baru untuk autentikasi (login) pengguna dengan input email dan password.
   - Menyimpan access token dari proses autentikasi di local storage (Anda bisa gunakan fungsi yang telah kami sediakan).
   - Simpan data pengguna yang terautentikasi pada komponen state untuk mengetahui pengguna telah terautentikasi atau belum.
   - Menyediakan tombol logout (keluar aplikasi) untuk menghapus autentikasi pengguna yang tersimpan.

3. Memproteksi Fitur Catatan

   Fitur catatan hanya dapat diakses oleh pengguna yang telah terautentikasi. Berikut detailnya.

   - Fitur catatan seperti daftar catatan, detail catatan, dan hapus catatan hanya dapat diakses bila pengguna telah melakukan autentikasi. Bila belum, pengguna hanya dapat mengakses halaman login atau registrasi saja.
   - Menampilkan resource catatan yang hanya dimiliki oleh pengguna yang terautentikasi.

4. Ubah Tema

   Aplikasi harus memiliki fitur ubah tema. Berikut detailnya:

   - Menyediakan tombol untuk mengubah tema gelap/terang.
   - Memanfaatkan React Context dalam membangun fitur ubah tema.
   - Menyimpan perubahan tema ke local storage agar perubahannya persisten.

5. Menggunakan Hooks

   Aplikasi menerapkan Hooks setidaknya untuk fitur/kode baru. Berikut detailnya:

   - Menerapkan Hooks dalam pengelolaan state setidaknya untuk fitur/kode pada halaman registrasi dan autentikasi pengguna.

6. Memenuhi seluruh kriteria utama submission sebelumnya

   Aplikasi harus dapat mempertahankan kriteria utama dari submission sebelumnya. Berikut detailnya.

   - Minimal terdapat 2 halaman yang berbeda.
   - Daftar catatan.
   - Detail catatan.
   - Menambahkan catatan baru.
   - Menghapus catatan.
   - Memvalidasi properti.

**Opsional**

1. Menampilkan indikasi loading

   - Aplikasi harus menampilkan indikasi loading ketika memuat data dari RESTful API sedang berlangsung.
   - Indikasi loading bisa apa pun, yang penting tidak mengganggu pengalaman pengguna. Gunakanlah kreativitas Anda.

2. Fitur ubah bahasa

   - Menyediakan tombol untuk mengubah bahasa Indonesia ke Inggris, atau sebaliknya.
   - Memanfaatkan React Context dalam membangun fitur ubah bahasa.
   - Menyimpan perubahan bahasa ke local storage agar perubahannya persisten.

## Tips & Tricks

**Ekstraksi duplikasi logika dengan custom hooks**

Dalam pengerjaan submission ke-2 setidaknya Anda akan membuat UI input pada halaman login dan registrasi. Ketika membangun UI input dengan controlled component, Anda akan menuliskan logika yang sama dalam membangun setiap inputnya. Karena itu, kami sarankan untuk mengekstraksi kode logika yang sifatnya nonvisual dalam membangun controlled component menggunakan custom hooks.

Berikut adalah contoh custom hooks yang bisa Anda buat untuk logika input.

```js
import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler];
}

export default useInput;
```

Selanjutnya, Anda bisa gunakan custom hooks tersebut dalam membangun controlled component.

```js
function InputLogin() {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <div className="input-login">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
      />
      // etc ..
    </div>
  );
}
```

## Penilaian

Submission Anda akan dinilai oleh Reviewer dengan skala 1-5. Untuk mendapatkan nilai tinggi, Anda bisa menerapkan beberapa saran berikut:

- Menerapkan kriteria opsional pada submission sebelumnya.
- Menerapkan kriteria opsional 1: Menampilkan indikasi loading.
- Menerapkan kriteria opsional 2: Menerapkan fitur ubah bahasa.
- Menuliskan kode dengan baik.
  - Mengekstraksi duplikasi logika menggunakan custom hooks.
  - Membuat Class Component hanya jika diperlukan saja. Contohnya, ketika sebuah komponen perlu menggunakan state atau memanfaatkan lifecycle method. Selebihnya, gunakanlah function component.
  - Memecah UI menjadi komponen sekecil mungkin (sesuai tanggung jawabnya).
  - Gaya penulisan kode harus konsisten, seperti penggunaan single quote/double quote ketika membuat nilai string, jumlah spasi dalam indentasi kode, atau penggunaan semicolon pada akhir statement.

Berikut adalah detail penilaian submission:

&starf;:
Semua ketentuan wajib terpenuhi, namun terdapat indikasi kecurangan dalam mengerjakan submission.

&starf;&starf;:
Semua ketentuan wajib terpenuhi, namun terdapat kekurangan pada penulisan kode. Seperti tidak menerapkan modularization atau gaya penulisan tidak konsisten.

&starf;&starf;&starf;:
Semua ketentuan wajib terpenuhi, namun tidak terdapat improvisasi atau persyaratan opsional yang dipenuhi.

&starf;&starf;&starf;&starf;:
Semua ketentuan wajib terpenuhi dan menerapkan minimal dua saran di atas.

&starf;&starf;&starf;&starf;&starf;:
Semua ketentuan wajib terpenuhi dan menerapkan seluruh saran di atas.

## Ketentuan Submission yang Akan Ditolak

- Kriteria utama tidak terpenuhi.
- Ketentuan berkas submission tidak terpenuhi.
- Menggunakan framework atau UI library selain React.
- Mengirimkan kode JavaScript yang telah di-minify.
- Melakukan kecurangan seperti tindakan plagiasi.
