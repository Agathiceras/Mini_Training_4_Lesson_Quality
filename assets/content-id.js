/* Mini_Training_4_Lesson_Quality - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='id';
const CONTENT = {
  flag:'🇮🇩', dir:'ltr',
  ui:{
    heroCard1:"<b>Sesuai kecepatanmu.</b> Progresmu tersimpan di browser ini.",
    heroCard2:"<b>Termasuk latihan.</b> Setiap modul diakhiri dengan pengecekan singkat.",
    pbLabel:'modul selesai',
    tapOpen:'Ketuk untuk membuka',
    tapFlip:'Ketuk untuk membalik',
    lblSee:'Yang kamu lihat',
    lblDo:'Yang kamu lakukan',
    lblSay:'Yang bisa kamu katakan',
    lblReport:'Ke mana melapor',
    lblAvoid:'Hindari',
    lblTip:'Tips',
    stepOf:'Langkah {i} dari {n}',
    next:'Berikutnya',
    pageTitle:"Mini-Training · Kualitas Pelajaran — Pelatihan Tutor Kodland",
    logoSub:'Departemen Pengembangan Tutor',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Melihat <span class=\"h-pill\">Kualitas Pelajaran</span> Secara Jujur",
    heroIntro:"Kamu menerima pelatihan ini karena ada siswamu yang mengajukan refund karena masalah kualitas kelas. Di sini kami akan menunjukkan apa yang bisa kamu lakukan sebagai tutor dan cara menangani situasi seperti ini.",
    heroWork:"Pelajari 6 modul singkat. Setiap tes modul membutuhkan nilai minimal 70% untuk membuka modul berikutnya. Total waktu pengerjaan sekitar 35–40 menit.",
    startBtn:"🚀 Mulai Pelatihan",
    pathLabel:'Jalur belajarmu',
    devTitle:'Dev: buka semua modul untuk ditinjau',
    backToPath:'Kembali ke jalur',
    modulesPassed:'{done} / {total} modul lulus',
    moduleN:'Modul {n}',
    of:'dari',
    locked:'🔒 Terkunci',
    passedBadge:'✅ Lulus · {pct}%',
    reviewedBadge:'✅ Sudah ditinjau',
    startBadge:'▶ Mulai',
    reviewBadge:'▶ Tinjau',
    objective:'Tujuan',
    startCheck:'▶ Mulai cek modul',
    finishBtn:'▶ Selesaikan mini-training',
    doneBack:'✓ Selesai — kembali ke jalur',
    ixBadge:'📋 Cek modul — 70% untuk membuka modul berikutnya',
    ixItemBadge:'📋 Cek modul — soal {i} dari {n}',
    scoreSoFar:'Skor sementara: {c} / {t}',
    continue:'Lanjut →',
    sortWrong:'Belum tepat — jawaban yang benar adalah “{label}”.',
    resPassed:'Modul lulus!',
    resFailed:'Belum berhasil',
    resUnlocked:"Kamu sudah membuka modul berikutnya.",
    resDone:"Kamu sudah menyelesaikan mini-training ini.",
    resNeed:'Kamu butuh 70% untuk membuka modul berikutnya. Tinjau lagi bagian di atas, lalu coba cek ini sekali lagi.',
    resContinue:'Lanjut ke jalur belajar',
    resFinish:'Lanjut',
    resBack:'Kembali ke jalur',
    resReview:'Tinjau modul ini',
    doneEyebrow:'Mini-Training Selesai',
    doneTitle:'🎉 Selamat!',
    doneP1:"🎉 <strong>Selamat! Kamu sudah menyelesaikan mini-training ini.</strong>",
    doneP2:"Semuanya sudah selesai di sini! Silakan kembali ke halaman pelatihan di LMS tempat kamu membuka mini-training ini untuk menuntaskan tugasnya.",
    doneP3:"👉 <strong>Jika ada cek atau penilaian yang tercantum tepat di bawah pelatihan ini di LMS, pastikan kamu menyelesaikannya dan mencapai nilai kelulusan</strong> — jika tidak, tugasnya bisa tetap tercatat belum selesai.",
    doneP4:'Semoga sukses! ❤️',
    doneP5:'',
    devUnlockAlert:'Mode dev: semua modul sekarang terbuka untuk ditinjau.',
    devOn:'🔓 Mode dev AKTIF — semua modul terbuka',
    devOff:'🔒 Mode dev NONAKTIF — progres dihapus',
    devBadge:'🔓 MODE DEV',
    doLabel:'✅ Lakukan',
    avoidLabel:'🚫 Hindari',
    noticeLabel:'Perhatikan:',
    cvSee:'Yang kamu lihat:',
    cvDo:'Yang kamu lakukan:',
    dtExample:'Contoh dari kelas sungguhan',
    dtNext:'Berikutnya:',
    dtDone:"✅ Itu dia keempat area. Selanjutnya, klasifikasikan apa yang kamu lihat.",
    tlVideoTitle:'{label} — contoh dari kelas sungguhan',
    tlVideoMeta:'Tonton seperti apa fase ini dalam pelajaran sungguhan'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Pendahuluan', emoji:'🧩', color:'var(--coral)',
 title:'Kenapa Penting Memahaminya',
 desc:'Mengapa keluhan soal kualitas kelas perlu disikapi dengan evaluasi diri yang jujur dan spesifik, hingga do and don’ts jika permintaan refund sudah masuk',
 obj:'Memahami bahwa alasan ini berkaitan dengan pelajarannya sendiri, mengapa meminta bantuan sejak awal adalah langkah yang tepat, dan apa persisnya yang harus (dan tidak boleh) dilakukan jika permintaan refund sudah ada.',
 sections:[
  {t:'🪞 Alasan yang paling sulit didengar', html:`
   <div class="card"><p>Alasan ini berarti ada keluarga yang merasa <strong>kualitas pelajarannya lah</strong> yang menjadi masalah — bukan anaknya, bukan levelnya, bukan jadwalnya. Alasan ini lebih sulit diterima dibanding alasan lainnya, dan wajar jika kamu ingin membela diri atau mencari pembenaran.</p></div>
   ${co('co-idea','💡',`<p><strong>Ini bukan penilaian atas dirimu sebagai pribadi.</strong> Ini adalah sinyal tentang perilaku tertentu yang bisa diperbaiki, di pelajaran-pelajaran tertentu. Tutor yang menanggapinya dengan serius dan spesifik — bukan secara pribadi — adalah yang paling cepat memperbaikinya.</p>`)}
   ${co('co-star','🎓',`<p><strong>Minta pandangan dari luar tentang caramu mengajar sejak awal.</strong> Regional Mentor-mu ada justru untuk hal ini — meminta masukan tentang caramu mengajar adalah langkah yang tepat, bukan tanda bahwa ada yang salah denganmu.</p>`)}
  `},
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   <div class="card"><p>Semua hal di atas adalah cara menyadari tanda ini sejak dini. Tapi mungkin kamu membuka pelatihan ini karena ada keluarga yang <strong>sudah</strong> mengajukan refund. Aturan di bawah ini berlaku apa pun alasannya. Baca dulu, lalu gunakan materi selanjutnya di pelatihan ini untuk memahami apa yang menyebabkannya dan apa yang masih bisa kamu lakukan di kelas.</p></div>
   ${co('co-idea','💡',`<p><strong>Permintaannya sendiri dibuat oleh Client Service, bukan oleh kamu</strong> — bagian itu bukan wewenangmu. Yang masih menjadi bagianmu adalah semua yang terjadi di kelas mulai sekarang, dan itu bukan hal kecil.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Jangan membicarakan permintaan refund itu sama sekali</strong> — tidak kepada anak, tidak kepada keluarga — kecuali Client Service secara jelas memintamu menyampaikan sesuatu yang spesifik. Tugasmu sekarang adalah pelajarannya, bukan percakapan itu.</p>`)}
  `},
  {t:'🎯 Pelajaran berikutnya adalah kesempatan untuk mempertahankannya', html:`
   <div class="card"><p>Mungkin kamu tidak punya kesempatan untuk mengubah hal lain. Perlakukan pelajaran berikutnya dengan anak ini sebagai momen penentu.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Beri dia giliran yang sungguhan.</strong> Bukan pertanyaan basa-basi — tapi momen nyata saat dia diperhatikan dan berhasil.`},
     {ic:'🏆', html:`<strong>Ciptakan keberhasilan yang cepat dan terlihat.</strong> Dia harus meninggalkan kelas dengan perasaan mampu, bukan tertinggal.`},
     {ic:'👀', html:`<strong>Perhatian yang spesifik</strong> — buat dia merasa diperhatikan karena sesuatu yang konkret, bukan sekadar dipuji secara umum.`},
     {ic:'🤐', html:`<strong>Jangan menyinggung permintaan refund</strong> — bahkan jika anak itu yang membahasnya, alihkan dengan hangat dan lanjutkan mengajar.`}
   ])}
  `},
  {t:'📮 Laporkan dengan cepat, dan ingat satu kalimat yang aman', html:`
   <div class="card"><p>Kamu bisa tahu bahwa ada permintaan refund dari komentar Client Service di profil anak di BO — tidak ada sistem otomatis yang memberitahumu. Begitu kamu tahu, apa yang kamu lihat di pelajaranmu adalah informasi yang tidak bisa didapatkan Client Service dengan cara lain.</p></div>
   ${numlist([
     'Tinggalkan komentar di BO pada hari yang sama berisi persis apa yang kamu lihat — tanggal dan detail, bukan kesan',
     'Sertakan kata-kata keluarga itu sendiri, apa adanya, jika kamu punya',
     'Libatkan Team Leader-mu pada hari yang sama',
     'Jangan pernah mengonfirmasi bahwa refund sudah disetujui, atau membahas nominal apa pun'
   ])}
   ${co('co-ok','✅',`<p><strong>Kalimat yang selalu aman untuk diucapkan:</strong> <em>“Tim Customer Service akan membantu Anda terkait hal ini.”</em> Di situlah bagianmu dalam percakapan berakhir — Client Service yang akan melanjutkannya.</p>`)}
  `},
  {t:'🌱 Pertahankan setelahnya', html:`
   <div class="card"><p>Entah permintaannya dibatalkan, anak itu tetap di grupmu, atau pindah ke tutor atau format lain, tetap berikan perhatian ekstra selama beberapa pelajaran berikutnya. Upaya mempertahankan yang hanya bertahan satu pelajaran lalu diam-diam kembali seperti biasa sering kali tidak berhasil sama sekali.</p></div>
  `}
 ]
},
{id:'structure', numLabel:'Modul 1', emoji:'🧭', color:'var(--coral)',
 title:'Struktur Pelajaran',
 desc:'Sembilan fase pelajaran yang saling mencerminkan dan membuat pelajaran terasa lengkap, contoh dari kelas sungguhan, serta cara membaca evaluasi kualitasmu sendiri.',
 obj:'Memahami mengapa struktur pelajaran yang konsisten adalah salah satu faktor terkuat untuk kualitas pelajaran, mempelajari sembilan fasenya, dan mengetahui cara membaca evaluasi kualitasmu untuk melihat persis di bagian mana kamu kehilangan perhatian kelas.',
 sections:[
  {t:'🧭 Konsistensi adalah kuncinya', html:`
   <div class="card"><p>Begitu siswa sudah mengenal ritmemu, mereka berhenti menghabiskan energi untuk menebak “sekarang ngapain?” dan menggunakannya untuk belajar. Jalankan struktur yang sama setiap kali sampai menjadi kebiasaan — bagimu dan bagi mereka.</p></div>
  `},
  {t:'🌅 Bagian awal: empat fase', html:`
   ${timeline([
     {ic:'👋', label:'1 · Pemanasan', items:['Pertanyaan singkat atau tantangan kecil yang mengalihkan siswa ke “mode belajar” — sekaligus momen untuk membangun komunitas.'], video:'https://drive.google.com/file/d/1fMWyd6bfCcUauqIIaNldojVuHYg6J9JR/preview'},
     {ic:'📖', label:'2 · Ulasan Pelajaran Sebelumnya', items:['Ulas singkat apa yang dipelajari di pertemuan sebelumnya, dengan kata-kata siswa sendiri. “Aku ingat ini” membangun rasa percaya diri yang nyata.'], video:'https://drive.google.com/file/d/1J1jijTw8bj8l9yw9aMNXp9zHwxEbkWbY/preview'},
     {ic:'📋', label:'3 · Cek PR', items:['Bahas PR bersama — temukan kesalahpahaman, puji usahanya, tunjukkan bahwa hasil kerjanya benar-benar dilihat.'], video:'https://drive.google.com/file/d/1H2Awetu6fkoatv2RMonUeBawgK7tsR3e/preview'},
     {ic:'🎯', label:'4 · Tujuan Pelajaran', items:['Sampaikan dengan jelas tentang apa pelajaran hari ini. Siswa yang tidak tahu pelajaran hari ini “untuk apa” cepat kehilangan minat.'], video:'https://drive.google.com/file/d/1cuqULcb1jxkwV_uepi-dnxFdx3FB41Si/preview'}
   ])}
  `},
  {t:'🎨 Bagian tengah: teori & praktik', html:`
   <div class="card"><p>Tahap terpanjang, saat materi baru diajarkan dan langsung dipraktikkan. Sampaikan teori dalam potongan-potongan kecil — satu konsep, lalu langsung praktik — dan <strong>contohkan dulu</strong>: peragakan di layarmu sebelum siswa mencobanya di layar mereka. Jaga waktu praktik dengan sungguh-sungguh; pelajaran di mana anak-anak hanya menontonmu bekerja adalah pelajaran di mana tidak ada yang benar-benar berlatih.</p></div>
  `},
  {t:'Bagian akhir: cerminan bagian awal', html:`
   <div class="card"><p>Empat fase penutup adalah cerminan dari empat fase pembuka dengan urutan terbalik — pelajaran ditutup seperti saat dibuka, sehingga terasa tuntas dan berirama.</p></div>
   ${timeline([
     {ic:'📋', label:'1 · Ringkasan Pelajaran', items:['Ulas kembali apa yang sudah dibahas, tapi biarkan siswa juga merangkumnya — kata-kata mereka sendiri menunjukkan apa yang benar-benar dipahami.'], video:'https://drive.google.com/file/d/1jNZGDMnRYh83xGd2NVHrZTdgXLagi2GZ/preview'},
     {ic:'📖', label:'2 · Pemberian PR', items:['Instruksi yang sangat jelas tentang apa yang harus dikerjakan dan bagaimana caranya. PR yang tidak jelas adalah PR yang tidak akan dikerjakan.'], video:'https://drive.google.com/file/d/1qOYvENqjiYlwRaFvDb0A7W6JYgWPCjJc/preview'},
     {ic:'▶️', label:'3 · Pratinjau Pelajaran Berikutnya', items:['Beri bocoran tentang materi pertemuan berikutnya — ini membuat siswa penasaran dan menantikan kelas selanjutnya, bukan sekadar menjalankan daftar tugas.'], video:'https://drive.google.com/file/d/17bE6JdZmDFJ_igrWYhc7fnpD39b-k-2K/preview'},
     {ic:'✨', label:'4 · Penutup', items:['Menemukan kekurangan sehari sebelumnya lalu meminta bantuan adalah tanda bahwa sistemnya berjalan dengan baik. Waktu persiapan yang cukup justru untuk mencegah kamu baru menemukannya di tengah pelajaran.'], video:'https://drive.google.com/file/d/1OTYSh07wSosjgsHFD05YvccD3NY2CgsX/preview'}
   ])}
  `},
  {t:'📊 Membaca evaluasi kualitasmu', html:`
   <div class="card"><p>Evaluasi kualitasmu disusun berdasarkan fase-fase ini — tujuannya untuk menunjukkan bagian mana dari struktur yang terlewat: pemanasan yang dilewati, tujuan yang tidak disampaikan, waktu praktik yang terpotong, atau penutup yang tidak dilakukan.</p></div>
   ${co('co-idea','💡',`<p><strong>Baca per fase, bukan sebagai satu skor keseluruhan.</strong> Skor keseluruhan yang rendah tidak banyak membantu; skor rendah pada “Tujuan Pelajaran” atau “Penutup” menunjukkan dengan jelas apa yang perlu diubah di pelajaranmu berikutnya.</p>`)}
  `}
 ],
 ix:{
  title:'Struktur Pelajaran — cek modul',
  instr:'Lima soal singkat: tentukan posisi setiap fase dalam pelajaran, dan tebak fase mana yang sedang dijelaskan. 70% untuk membuka modul berikutnya.',
  items:[
   {type:'sort', prompt:'Di mana fase ini berada?', card:'▶️ Pratinjau Pelajaran Berikutnya', zones:[{label:'🌅 Salah satu dari 4 fase pembuka', fb:'Belum tepat — Pratinjau Pelajaran Berikutnya adalah bagian dari blok penutup yang mencerminkan pembuka, bukan bagian pembuka.'},{label:'🏁 Salah satu dari 4 fase penutup', fb:'Benar — ini fase ketiga dari empat fase penutup, tepat sebelum Penutup.'}], correctZone:1},
   {type:'sort', prompt:'Fase mana yang sedang dijelaskan?', card:'“Momen ini memberi tahu siswa apa tujuan pelajaran hari ini. Tanpanya, mereka tidak tahu arah belajarnya — dan cepat kehilangan minat.”', zones:[{label:'👋 Pemanasan', fb:'Belum tepat — Pemanasan mengalihkan siswa ke mode belajar, tapi tidak menyampaikan untuk apa pelajaran hari ini. Itu adalah Tujuan Pelajaran.'},{label:'🎯 Tujuan Pelajaran', fb:'Benar — menyampaikan Tujuan Pelajaran dengan jelas memberi seluruh pelajaran arah yang bisa diikuti siswa.'},{label:'📋 Ringkasan Pelajaran', fb:'Belum tepat — Ringkasan melihat kembali apa yang sudah dibahas. Menyampaikan untuk apa pelajaran hari ini dilakukan di awal: Tujuan Pelajaran.'},{label:'✨ Penutup', fb:'Belum tepat — Penutup mengakhiri pelajaran. Mengetahui untuk apa pelajaran hari ini terjadi di awal: Tujuan Pelajaran.'}], correctZone:1},
   {type:'sort', prompt:'Di mana fase ini berada?', card:'📖 Ulasan Pelajaran Sebelumnya', zones:[{label:'🌅 Salah satu dari 4 fase pembuka', fb:'Benar — ini fase kedua dari empat fase pembuka, tepat setelah Pemanasan.'},{label:'🏁 Salah satu dari 4 fase penutup', fb:'Belum tepat — Ulasan Pelajaran Sebelumnya membuka pelajaran, bukan menutupnya.'}], correctZone:0},
   {type:'sort', prompt:'Fase mana yang sedang dijelaskan?', card:'“Membiarkan siswa mengungkapkan apa yang dia pelajari hari ini dengan kata-katanya sendiri menunjukkan apa yang benar-benar dipahami — dan apa yang perlu diperkuat di pertemuan berikutnya.”', zones:[{label:'📖 Ulasan Pelajaran Sebelumnya', fb:'Hampir — tapi fase itu mengulas pelajaran <em>sebelumnya</em>. Mengungkapkan pelajaran <em>hari ini</em> dengan kata-kata sendiri adalah Ringkasan Pelajaran.'},{label:'📋 Cek PR', fb:'Belum tepat — Cek PR membahas pekerjaan rumah. Ini adalah Ringkasan Pelajaran.'},{label:'▶️ Pratinjau Pelajaran Berikutnya', fb:'Belum tepat — Pratinjau melihat ke depan. Mengulas pelajaran hari ini dengan kata-kata sendiri adalah Ringkasan Pelajaran.'},{label:'📋 Ringkasan Pelajaran', fb:'Benar — Ringkasan Pelajaran memungkinkanmu mengecek apa yang benar-benar dipahami, dengan kata-kata siswa sendiri.'}], correctZone:3},
   {type:'sort', prompt:'Fase mana yang sedang dijelaskan?', card:'“30 detik terakhir adalah hal yang dipertimbangkan siswa saat memutuskan apakah akan hadir lagi — jadi akhiri dengan merayakan apa yang sudah mereka buat.”', zones:[{label:'✨ Penutup', fb:'Benar — Penutup mengakhiri pelajaran dengan semangat, dan perasaan itulah yang membuat siswa kembali.'},{label:'📖 Pemberian PR', fb:'Belum tepat — Pemberian PR adalah tentang instruksi yang jelas. Mengakhiri dengan semangat adalah Penutup.'},{label:'🎯 Tujuan Pelajaran', fb:'Belum tepat — Tujuan Pelajaran terjadi di awal. Ini adalah Penutup.'},{label:'👋 Pemanasan', fb:'Belum tepat — Pemanasan membuka pelajaran. 30 detik terakhir adalah milik Penutup.'}], correctZone:0}
  ]
 }
},
{id:'prep', numLabel:'Modul 2', emoji:'📚', color:'var(--coral)',
 title:'Waktu Persiapan',
 desc:'Mengapa mempelajari panduan sehari sebelum kelas (bukan 30 menit sebelumnya) sangat menentukan kualitas pelajaran — dan di mana menemukannya di BO.',
 obj:'Mempersiapkan pelajaran dengan waktu yang cukup untuk menemukan kekurangan sebelum pelajaran dimulai, menemukan materi yang tepat di BackOffice, dan tahu persis ke mana harus meminta bantuan atau melaporkan masalah materi.',
 sections:[
  {t:'⏳ Bukan tiga puluh menit sebelumnya', html:`
   <div class="card"><p>Persiapan yang dilakukan setengah jam — atau bahkan sepuluh menit — sebelum kelas tidak menyisakan waktu untuk benar-benar mempelajari hal yang belum kamu pahami. Jika ada konsep, potongan kode, atau alat yang belum kamu kuasai, kamu terpaksa mempelajarinya saat kelas berlangsung, di depan siswa.</p></div>
   ${co('co-idea','💡',`<p><strong>Pelajari panduan dan materinya sehari sebelumnya.</strong> Dengan begitu kamu punya waktu untuk menyadari kekurangan dalam pengetahuanmu sendiri, bug di materi, atau aktivitas yang belum sepenuhnya kamu pahami — dan benar-benar melakukan sesuatu sebelum pelajaran dimulai.</p>`)}
  `},
  {t:'🎯 Pahami tujuannya, bukan hanya langkah-langkahnya', html:`
   <div class="card"><p>Pahami dengan jelas apa yang sebenarnya ingin dicapai oleh pelajaran hari ini — bukan hanya urutan langkah di panduan. Saat kamu tahu tujuannya, kamu bisa menyesuaikan jalannya jika ada yang berjalan berbeda dari rencana, tanpa kehilangan inti pelajarannya.</p></div>
   <img class="mt-pic" src="Pictures_T4/goals.png" alt="Contoh halaman panduan yang menampilkan tujuan pelajaran dan hasil pembelajaran">
  `},
  {t:'🆘 Saat kamu menemukan kekurangan', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>Gunakan channel Slack kursusmu.</strong> Tutor lain hampir pasti pernah menemukan bug yang sama atau langkah yang sama membingungkannya.`},
     {ic:'🎓', html:`<strong>Tanyakan kepada Regional Mentor-mu</strong> jika ini tentang cara mengajarkan atau menjelaskan sesuatu yang spesifik.`},
     {ic:'👩‍💼', html:`<strong>Tanyakan kepada Team Leader-mu</strong> jika ini tentang kursusnya sendiri, materinya, atau sesuatu yang perlu diperbaiki dari pusat.`}
   ])}
   ${co('co-star','⭐',`<p>Menemukan kekurangan sehari sebelumnya lalu meminta bantuan adalah tanda bahwa sistemnya berjalan sebagaimana mestinya. Menemukannya secara langsung, di tengah pelajaran, adalah hal yang ingin dicegah dengan waktu persiapan.</p>`)}
  `},
  {t:'🗂️ Menemukan materi kursusmu di BO', html:`
   <div class="card"><p>Panduan pelajaran dan presentasi ada di dalam BackOffice (BO), terlampir di data kursus yang sedang kamu ajarkan — bukan di halaman wiki lama yang mungkin sudah tidak diperbarui. Simulasi di bawah ini akan memandumu, langkah demi langkah, ke tempat menemukannya, dan ke mana melaporkannya jika ada yang salah di materinya.</p></div>
   ${co('co-danger','🚨',`<p><strong>Selalu pastikan ID kursus yang kamu buka sama dengan kursus yang diikuti siswamu.</strong> Kursus-kursus yang tampak mirip ada berdampingan di BO — mengajar dari kursus yang salah, bahkan versi lain dari kursus yang sama, bisa membuat pelajaran kacau dalam hitungan detik.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Materi kursus &amp; kesalahan materi</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Materi kursus dan kesalahan materi" loading="lazy"></iframe></div></div>
  `}
 ],
 ix:{
  title:'Waktu Persiapan — cek modul',
  instr:'70% untuk membuka modul berikutnya.',
  items:[
   {type:'choice', prompt:'Kapan sebaiknya kamu mempelajari panduan dan materi untuk sebuah pelajaran?', opts:['Sehari sebelumnya, supaya ada waktu untuk memperbaiki kekurangan yang kamu temukan','Tepat sebelum kelas, supaya masih segar di ingatan','Hanya jika itu pelajaran yang belum pernah kamu ajarkan'], correct:0, fb:'Sehari sebelumnya memberimu waktu untuk benar-benar menangani apa pun yang kamu temukan — kekurangan, bug, atau aktivitas yang belum sepenuhnya kamu pahami.'},
   {type:'choice', prompt:'Kamu menemukan potongan kode di panduan yang tidak berfungsi. Apa yang kamu lakukan?', opts:['Melewatkan bagian itu dan berharap tidak ada yang sadar','Mencari solusinya secara langsung saat pelajaran bersama siswa','Bertanya di channel Slack kursusmu, kepada mentor, atau Team Leader-mu — dan melaporkannya lewat ikon 🐞 di BO'], correct:2, fb:'Channel-channel ini ada supaya kamu tidak perlu menyelesaikannya sendirian di tengah kelas — dan dengan melaporkannya, masalahnya akan diperbaiki untuk grup-grup lain setelahmu.'},
   {type:'choice', prompt:'Sebelum membuka panduan pelajaran di BO, apa yang harus kamu cek?', opts:['Bahwa pelajaran tersebut punya presentasi terlampir','Bahwa ID kursusnya sama dengan kursus yang diikuti siswamu','Bahwa panduannya diperbarui bulan ini'], correct:1, fb:'Kursus-kursus yang mirip ada berdampingan di BO. Mengajar dari ID kursus yang salah adalah salah satu cara tercepat menuju pelajaran yang kacau.'},
   {type:'choice', prompt:'Mengapa memahami tujuan pelajaran lebih berguna daripada sekadar tahu langkah-langkahnya?', opts:['Kamu bisa menyesuaikan jalannya jika ada yang berjalan berbeda, tanpa kehilangan intinya','Kamu bisa melewatkan bagian panduan yang menurutmu kurang berguna','Membantumu menyelesaikan pelajaran lebih cepat'], correct:0, fb:'Memahami “mengapa” membuatmu bisa menyesuaikan “bagaimana” tanpa kehilangan tujuan pelajarannya.'}
  ]
 }
},
{id:'soft', numLabel:'Modul 3', emoji:'🤝', color:'var(--coral)',
 title:'Soft Skills',
 desc:'Kebiasaan dan keterampilan di luar penguasaan materi yang membuat suasana belajar menjadi menyenangkan — termasuk mengatur tempo pembelajaran, memastikan pemahaman siswa, dan menggunakan kata-kata dengan sabar.',
 obj:'Menerapkan soft skills yang mengubah pengetahuan materi menjadi pengalaman belajar yang benar-benar baik: fleksibilitas kognitif, mengenal siswa, menciptakan lingkungan yang aman untuk melakukan kesalahan, motivasi, menyesuaikan tempo dengan usia siswa, memastikan pemahaman, menggunakan ungkapan yang sabar, memberikan perhatian yang merata, dan memberikan umpan balik yang spesifik.',
 sections:[
  {t:'🤝 Bukan hanya soal menguasai materi', html:`
   <div class="card"><p>Menguasai materi itu perlu, tapi bukan itu yang membuat sebuah pelajaran terasa menyenangkan untuk diikuti. Itu datang dari serangkaian kebiasaan yang tidak ada hubungannya dengan pengetahuan teknis.</p></div>
   ${iconGrid([
     {ic:'🔄', html:`<strong>Fleksibilitas kognitif.</strong> Menyesuaikan penjelasan, tempo, atau pendekatanmu saat yang pertama tidak berhasil, alih-alih mengulanginya dengan suara lebih keras.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Mengenal siswamu.</strong> Minat mereka, apa yang memotivasi mereka — inilah yang membuat contoh mudah dipahami dan mengubah pelajaran yang umum menjadi pelajaran yang terasa personal.`},
     {ic:'🛡️', html:`<strong>Lingkungan yang aman untuk berbuat salah.</strong> Siswa berani mengambil risiko dan benar-benar belajar saat mereka tahu jawaban yang salah tidak akan dihakimi.`},
     {ic:'🔥', html:`<strong>Semangat yang terlihat.</strong> Jika mereka melihat minat yang tulus darimu, mereka lebih termotivasi untuk terlibat — semangat seperti ini tidak bisa dibuat-buat, dan siswa akan langsung merasakannya jika tidak ada.`}
   ])}
  `},
  {t:'💬 Umpan balik yang membangun, bukan yang umum', html:`
   <div class="card"><p>“Bagus” tidak memberi tahu siswa apa yang perlu diulang atau dikembangkan. Umpan balik yang membangun itu <strong>spesifik</strong>, dan menunjukkan arah: apa yang sudah berhasil, dan apa yang perlu diperbaiki atau dijelajahi berikutnya.</p></div>
   ${doavoid(
     ['“Kamu berhasil membuat perulangannya berjalan sendiri — keren, itu persis logika yang kita butuhkan”', '“Bagian ini sudah bagus; coba terapkan ide yang sama di bagian berikutnya”', '“Aku lihat kamu memperbaiki bug itu sendiri — gimana cara kamu berpikir tadi?”'],
     ['“Bagus!” tanpa menyebut apa yang sebenarnya dikerjakan', '“Itu salah” tanpa arahan tentang apa yang bisa dicoba', 'Umpan balik yang bisa berlaku sama untuk hasil kerja siswa mana pun']
   )}
  `},
  {t:'🐢 Tempo pembelajaran dan memastikan pemahaman — terutama untuk anak-anak yang lebih kecil', html:`
   <div class="card"><p>Sebuah pelajaran bisa saja benar secara materi, tetapi tetap berjalan terlalu cepat bagi anak yang sedang Anda ajar. Orang tua sering menggambarkannya dengan mengatakan, <em>“Tutor melanjutkan materi tanpa menjelaskannya terlebih dahulu”</em> atau <em>“Metode yang digunakan terlalu sulit untuk anak seusianya”</em>. Solusinya adalah memperlambat setiap langkah, menggunakan kata-kata yang mudah dipahami anak, dan <strong>memastikan mereka mengerti sebelum melanjutkan</strong> — bukan sekadar bertanya “Ada pertanyaan?” lalu langsung melanjutkan.</p></div>
   ${iconGrid([
     {ic:'1️⃣', html:`<strong>Satu instruksi dalam satu waktu.</strong> Berikan satu langkah, tunggu sampai selesai, lalu berikan langkah berikutnya — jangan menggabungkan tiga instruksi dalam satu kalimat.`},
     {ic:'🖥️', html:`<strong>“Tunjukkan kepada saya.”</strong> Minta siswa untuk membagikan layar mereka. Apa yang Anda lihat akan memberi lebih banyak informasi daripada sekadar jawaban “Ya, saya mengerti”.`},
     {ic:'🗣️', html:`<strong>“Apa yang akan kamu lakukan pertama kali?”</strong> Meminta siswa menjelaskan kembali langkah berikutnya dapat membantu mendeteksi kebingungan sebelum mereka mulai mengerjakannya.`},
     {ic:'👍', html:`<strong>Sinyal cepat:</strong> acungan jempol, emoji, atau reaksi ketika suatu langkah selesai — dengan begitu, Anda dapat melihat perkembangan seluruh kelompok dengan cepat.`},
     {ic:'⏳', html:`<strong>Waktu untuk berpikir.</strong> Setelah mengajukan pertanyaan, hitung sampai lima sebelum menjawab sendiri atau menunjuk siswa lain.`},
     {ic:'📖', html:`<strong>Gunakan kata-kata yang mereka pahami.</strong> Jelaskan istilah baru saat pertama kali menggunakannya, dengan contoh yang dekat dengan kehidupan mereka.`}
   ])}
   ${dimTabs([
     {ic:'🧒', title:'Usia 6–8 tahun',
      intro:'Langkah-langkah singkat, banyak demonstrasi, dan sesedikit mungkin kata-kata.',
      tips:[
       {ic:'👀', html:`<strong>Demonstrasikan setiap langkah</strong> melalui layar Anda sebelum siswa mencobanya — dan pastikan setiap langkah hanya berisi satu tindakan.`},
       {ic:'🔤', html:`<strong>Beberapa siswa masih belajar membaca.</strong> Bacakan instruksi dengan suara keras dan gunakan ikon, warna, serta penunjuk arah daripada teks yang panjang.`},
       {ic:'🧸', html:`<strong>Gunakan perbandingan sehari-hari:</strong> <em>“Loop itu seperti menyikat gigi: kamu mengulangi gerakan yang sama berkali-kali.”</em>`},
       {ic:'🎉', html:`<strong>Sering-seringlah memeriksa pemahaman dan berikan apresiasi</strong> untuk setiap langkah kecil yang berhasil diselesaikan.`}
      ]},
     {ic:'🧑', title:'Usia 9–11 tahun',
      intro:'Mereka dapat mengikuti beberapa langkah secara berurutan — selama Anda memastikan mereka memahaminya.',
      tips:[
       {ic:'📋', html:`<strong>Berikan dua atau tiga langkah, lalu tuliskan di chat</strong> dalam bentuk daftar agar mereka bisa melihatnya kembali.`},
       {ic:'🗣️', html:`<strong>Minta mereka menjelaskan kembali</strong> apa yang akan dilakukan sebelum mulai mengerjakan.`},
       {ic:'🔍', html:`<strong>Periksa layar mereka</strong> setelah setiap langkah — jangan hanya di akhir.`},
       {ic:'🧩', html:`<strong>Perkenalkan istilah baru dengan contoh</strong> yang mereka kenali, misalnya dari game atau aplikasi yang mereka gunakan.`}
      ]},
     {ic:'🧑‍🎓', title:'Usia 12 tahun ke atas',
      intro:'Berikan lebih banyak kemandirian — tetapi jangan menganggap diam berarti sudah memahami.',
      tips:[
       {ic:'🧠', html:`<strong>Jelaskan alasan di balik suatu langkah,</strong> bukan hanya cara melakukannya — siswa yang lebih besar akan lebih tertarik ketika mereka memahami logikanya.`},
       {ic:'🗳️', html:`<strong>Gunakan pemeriksaan anonim</strong> (polling atau reaksi) — remaja jarang mengatakan “Saya tidak mengerti” di depan teman-temannya.`},
       {ic:'🔒', html:`<strong>Sediakan pilihan untuk bertanya melalui chat pribadi</strong> agar mereka bisa bertanya tanpa harus terlihat oleh orang lain.`},
       {ic:'🚀', html:`<strong>Percepat tempo untuk siswa yang sudah menunjukkan pemahaman</strong> dan berikan tantangan tambahan — tanpa meninggalkan siswa lainnya.`}
      ]}
   ],'✅ Itulah tiga kelompok usia.')}
  `},
  {t:'🗣️ Kesabaran dalam berbicara — ungkapan yang harus dihindari dan alternatif yang lebih baik', html:`
   <div class="card"><p>Siswa lebih mengingat bagaimana perasaan mereka saat belajar bersama Anda daripada apa yang Anda jelaskan. Satu kalimat yang menunjukkan ketidaksabaran dapat membuat anak berhenti bertanya — dan orang tua bisa menilai keseluruhan kursus sebagai pengalaman di mana <em>“tutornya tidak sabar”</em>. Saat lelah atau terburu-buru, kita semua bisa saja menggunakan ungkapan seperti ini. Kenali ungkapan tersebut dan siapkan alternatif yang lebih baik:</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>🚫 Daripada mengatakan…</th><th>✅ Coba katakan…</th></tr>
    <tr><td><em>“Saya sudah menjelaskan ini.”</em></td><td><em>“Mari saya tunjukkan dengan cara lain.”</em></td></tr>
    <tr><td><em>“Ini mudah.”</em></td><td><em>“Bagian ini membutuhkan sedikit latihan — mari kita kerjakan bersama.”</em></td></tr>
    <tr><td><em>“Cepat, kami semua sedang menunggumu.”</em></td><td><em>“Tidak perlu terburu-buru. Sementara itu, yang lain bisa mencoba tantangan 2.”</em></td></tr>
    <tr><td><em>“Bukan sekarang.”</em> (kepada siswa yang mengangkat tangan)</td><td><em>“Saya melihat kamu, Leo — sebentar lagi giliranmu.”</em></td></tr>
    <tr><td><em>“Lihat, semua orang sudah bisa melakukannya.”</em></td><td><em>“Bagian pertama sudah kamu kerjakan dengan benar. Mari kita lihat bagian berikutnya.”</em></td></tr>
    <tr><td><em>“Itu salah.”</em></td><td><em>“Hampir benar — apa yang terjadi jika kamu mengubah baris ini?”</em></td></tr>
   </table></div>
   ${co('co-idea','⚖️',`<p><strong>Kesabaran juga berarti bersikap adil.</strong> Bagikan perhatian Anda secara merata: berikan giliran kepada siswa secara bergantian, ajukan pertanyaan kepada siswa yang berbeda, dan periksa perkembangan siswa yang lebih lambat sesering Anda memeriksa siswa yang lebih cepat. Anak yang merasa tutor hanya berbicara dengan siswa yang “pintar” akan berhenti berusaha.</p>`)}
  `},
  {t:'💌 Tunjukkan kepedulian, bukan hanya saat ada kabar buruk', html:`
   <div class="card"><p>Orang tua yang hanya mendengar kabar darimu saat ada masalah akan mulai mengaitkan pesan-pesanmu dengan masalah. Kirim juga pesan untuk merayakan hal baik — bukan hanya untuk menyampaikan kekhawatiran.</p></div>
   ${co('co-star','⭐',`<p>Satu kebiasaan ini — menulis sekali, tanpa diminta, tentang sesuatu yang dilakukan siswa dengan baik — mengubah cara keluarga membaca semua pesan yang kamu kirim setelahnya.</p>`)}
  `}
 ],
 ix:{
  title:'Soft Skills — cek modul',
  instr:'Diperlukan nilai 70% untuk membuka modul berikutnya.',
  items:[
   {type:'choice', prompt:'Seorang siswa tidak bisa mengikuti penjelasan pertamamu. Seperti apa fleksibilitas kognitif dalam situasi ini?', opts:['Mengulangi penjelasan yang sama, dengan lebih pelan','Melanjutkan dan kembali membahasnya di akhir pelajaran','Mengubah pendekatannya — sudut pandang yang berbeda, peragaan, atau potongan yang lebih kecil'], correct:2, fb:'Fleksibilitas berarti mengubah pendekatannya, bukan sekadar mengulanginya.'},
   {type:'sort', prompt:'Harta karun atau sampah? Apakah ini umpan balik yang membangun?', card:'“Kamu berhasil membuat perulangannya jalan sendiri — coba terapkan ide yang sama di bagian berikutnya.”', zones:[{label:'💎 Harta karun — membangun', fb:'Benar — spesifik tentang apa yang berhasil dan menunjukkan langkah berikutnya.'},{label:'🗑️ Sampah — umum', fb:'Belum tepat — umpan balik ini menyebutkan persis apa yang dilakukan siswa dan apa yang bisa dicoba berikutnya. Itu membangun.'}], correctZone:0},
   {type:'sort', prompt:'Harta karun atau sampah? Apakah ini umpan balik yang membangun?', card:'“Kerja bagus hari ini, semuanya!”', zones:[{label:'💎 Harta karun — membangun', fb:'Belum tepat — memang ramah, tapi tidak memberi tahu siapa pun apa yang perlu diulang atau dikembangkan.'},{label:'🗑️ Sampah — umum', fb:'Benar — ramah, tapi bisa berlaku untuk siapa saja. Sebutkan apa yang sebenarnya sudah dilakukan dengan baik.'}], correctZone:1},
   {type:'choice', prompt:'Mengapa mengirim pesan kepada orang tua tentang hal yang baik, bukan hanya tentang masalah?', opts:['Orang tua mengharapkannya sebagai formalitas','Ini mengubah cara keluarga membaca semua pesan yang kamu kirim setelahnya','Hanya diperlukan saat nilai siswa rendah'], correct:1, fb:'Pesan positif tanpa diminta membangun kepercayaan yang membuat percakapan sulit menjadi lebih mudah di kemudian hari.'},
   {type:'choice', prompt:'Anda telah menjelaskan suatu langkah kepada sekelompok anak berusia 7 tahun dan bertanya, “Ada pertanyaan?” Tidak ada yang menjawab. Apa yang harus Anda lakukan selanjutnya?', opts:['Lanjutkan ke materi berikutnya — diam berarti mereka sudah mengerti.','Periksa pemahaman mereka: “Coba tunjukkan layar kalian” atau “Apa yang akan kalian lakukan pertama kali?”, lalu demonstrasikan kembali untuk siswa yang masih mengalami kesulitan.','Ulangi penjelasan yang sama dengan lebih cepat agar ada cukup waktu untuk langkah berikutnya.'], correct:1, fb:'Diam bukan berarti memahami, terutama bagi anak-anak yang lebih kecil. Permintaan sederhana seperti “Coba tunjukkan” dapat membantu mendeteksi kebingungan sebelum Anda melanjutkan.'},
   {type:'sort', prompt:'Harta karun atau sampah? Apakah ini merupakan respons yang sabar?', card:'Seorang siswa menanyakan hal yang sama untuk kedua kalinya. Anda menjawab: “Saya sudah menjelaskan ini.”', zones:[{label:'💎 Harta karun — sabar', fb:'Belum tepat — respons ini membuat siswa merasa bahwa mereka seharusnya sudah memahami penjelasan tersebut. Banyak anak akhirnya berhenti bertanya setelah mendengarnya.'},{label:'🗑️ Sampah — tidak sabar', fb:'Benar — cobalah mengatakan “Mari saya tunjukkan dengan cara lain”. Pertanyaan kedua menunjukkan bahwa penjelasan pertama belum dipahami.'}], correctZone:1}
  ]
 }
},
{id:'professional', numLabel:'Modul 4', emoji:'🧱', color:'var(--coral)',
 title:'Keandalan dan Batasan Profesional',
 desc:'Memulai kelas tepat waktu dan menggunakan seluruh durasi pelajaran, tindakan yang harus dilakukan ketika kelas tidak dapat berlangsung sesuai rencana, mengambil alih kelompok siswa, serta batasan profesional yang melindungi siswa, keluarga, dan diri Anda sendiri.',
 obj:'Memulai kelas tepat waktu dan memberikan pelajaran secara penuh, memahami siapa yang berwenang memutuskan perubahan jadwal kelas, mengambil alih kelompok dengan lancar, serta menjaga batasan profesional terkait platform, komunikasi, perhatian, kamera, dan privasi.',
 sections:[
  {t:'⏰ Selalu tepat waktu — dan berikan pelajaran secara penuh', html:`
   <div class="card"><p>Bagi keluarga, waktu belajar adalah waktu yang telah mereka bayar dan mereka jadwalkan dalam aktivitas sehari-hari. Tutor yang terlambat sepuluh menit, mengambil jeda yang tidak direncanakan, atau mengakhiri kelas lebih awal akan menjadi hal pertama yang diperhatikan keluarga — jauh sebelum mereka menilai kualitas materi. Keandalan merupakan bagian dari kualitas pembelajaran.</p></div>
   ${rclock([
     {ic:'🧰', when:'15 menit sebelumnya', t:'Bersiap lebih awal', d:'Masuk lebih awal, periksa koneksi internet, kamera, dan mikrofon Anda, serta buka grup dan materi pelajaran di BO.'},
     {ic:'🟢', when:'Waktu mulai', t:'Mulai tepat waktu', d:'Menit-menit pertama merupakan bagian dari kegiatan pemanasan — bukan waktu untuk menyiapkan peralatan Anda.'},
     {ic:'🎯', when:'Selama kelas', t:'Pelajaran secara penuh', d:'Laksanakan seluruh tahapan pembelajaran yang telah direncanakan, tanpa jeda yang tidak direncanakan dan tanpa mengerjakan hal lain di luar kegiatan mengajar.'},
     {ic:'🏁', when:'Waktu selesai', t:'Akhiri tepat waktu', d:'Jangan pernah mengakhiri kelas lebih awal. Kegiatan penutup dan pengenalan materi berikutnya juga merupakan bagian dari pelajaran.'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Terlambat atau tidak bisa terhubung?</strong> Segera beri tahu Team Leader Anda — jangan biarkan siswa menunggu tanpa informasi. Kelas yang dimulai terlambat tidak bisa “diganti” dengan mengakhirinya beberapa menit lebih awal. Beri tahu Team Leader agar mereka dapat memutuskan solusi atau kompensasi yang akan ditawarkan kepada keluarga.</p>`)}
  `},
  {t:'📅 Ketika kelas tidak dapat berlangsung sesuai rencana', html:`
   <div class="card"><p>Sakit dan keadaan darurat bisa terjadi. Hal yang menentukan apakah keluarga dapat memakluminya adalah <strong>seberapa cepat mereka mendapatkan informasi dan apa yang dilakukan selanjutnya</strong>. Pesan yang dikirim 30 menit sebelum kelas dimulai, atau tutor yang tidak hadir tanpa pemberitahuan, adalah hal yang sering digambarkan keluarga sebagai <em>“tidak terorganisasi”</em> — dan sering kali menjadi momen ketika mereka mulai meminta pengembalian dana.</p></div>
   ${doavoid(
     ['Beri tahu Team Leader <strong>segera setelah Anda mengetahui</strong> bahwa Anda tidak dapat mengajar suatu kelas. Semakin cepat mereka mengetahuinya, semakin banyak pilihan yang tersedia (tutor pengganti atau tanggal baru).','Ikuti rencana yang telah disepakati dengan Team Leader, termasuk pesan yang akan disampaikan kepada keluarga.','Pertahankan jadwal kelas yang telah disepakati — setiap minggu, pada waktu yang sama.','Jika ada kelas yang terlewat, biarkan Team Leader yang memutuskan pengaturan kelas pengganti.'],
     ['Membatalkan atau memindahkan jadwal kelas atas keputusan sendiri — tutor tidak berwenang menjadwalkan ulang kelas.','Memberi tahu keluarga secara langsung pada menit-menit terakhir tanpa koordinasi dengan Team Leader.','Menjanjikan kelas pengganti atau kompensasi.','Mengajar pada waktu yang berbeda dari jadwal yang telah disepakati, meskipun hanya “sekali ini saja”.']
   )}
  `},
  {t:'🤝 Mengambil alih kelompok', html:`
   <div class="card"><p>Keluarga memperhatikan pergantian tutor — terutama ketika mereka tidak mendapatkan pemberitahuan atau ketika setiap tutor baru memulai semuanya dari awal. Jika Anda mengambil alih suatu kelompok, pastikan pergantian tersebut terasa seperti kelanjutan pembelajaran, bukan memulai kembali dari nol.</p></div>
   ${stepFlow([
     {ic:'📖', label:'Baca komentar di BO dan periksa perkembangan kelompok sebelum mengajar untuk pertama kalinya.'},
     {ic:'👋', label:'Perkenalkan diri kepada siswa dan, sesuai kesepakatan dengan Team Leader, kepada keluarga mereka.'},
     {ic:'🔁', label:'Pertahankan rutinitas yang sudah mereka kenal: aturan, struktur kelas, dan cara mereka membagikan hasil pekerjaan.'},
     {ic:'💬', label:'Tanyakan kepada siswa apa yang mereka sukai dari pelajaran sebelumnya.'}
   ])}
  `},
  {t:'🧱 Batasan profesional', html:`
   <div class="card"><p>Beberapa situasi sama sekali tidak berkaitan dengan kemampuan mengajar, tetapi dapat merusak kepercayaan keluarga dengan sangat cepat. Ketuk setiap bagian untuk melihat detailnya:</p></div>
   ${symCards([
     {ic:'🏷️', title:'Hanya Kodland, selama dan di sekitar kegiatan pembelajaran',
      do:`Bicarakan hanya tentang kursus dan perangkat Kodland. Jika Anda menemukan masalah pada platform atau kursus, laporkan kepada Team Leader Anda.`,
      avoid:`Mempromosikan platform lain, sekolah lain, atau menawarkan les privat Anda sendiri · berbicara negatif tentang platform atau kursus di depan siswa maupun keluarga.`},
     {ic:'📵', title:'Komunikasi hanya melalui saluran resmi',
      do:`Berkomunikasilah dengan keluarga melalui saluran yang digunakan oleh wilayah Anda untuk kegiatan pembelajaran Kodland. Di luar kelas, komunikasi Anda dilakukan dengan orang tua — bukan secara pribadi dengan anak.`,
      avoid:`Menggunakan media sosial pribadi atau chat pribadi dengan siswa · mengajak siswa bermain game atau bertemu secara online setelah kelas · membagikan informasi kontak pribadi Anda.`},
     {ic:'📷', title:'Kamera dan privasi',
      do:`Ajak siswa untuk menyalakan kamera dengan sopan, cukup satu kali, lalu terima keputusan mereka. Beberapa siswa memilih untuk tidak menyalakan kamera karena alasan budaya, agama, atau pribadi. Sebagai alternatif, tawarkan penggunaan chat, reaksi, atau berbagi layar.`,
      say:`<em>“Tidak masalah sama sekali — kamu tetap bisa berpartisipasi melalui chat atau dengan membagikan layar.”</em>`,
      avoid:`Memaksa siswa menyalakan kamera atau menanyakan alasannya di depan kelompok · mengambil tangkapan layar atau foto siswa · membagikan gambar atau informasi pribadi siswa.`},
     {ic:'🗨️', title:'Percakapan yang sesuai dengan usia siswa',
      do:`Jaga percakapan ringan agar tetap sesuai dengan usia kelompok. Jika topik sensitif muncul, arahkan kembali pembicaraan ke materi pelajaran dengan tenang.`,
      avoid:`Perdebatan mengenai politik atau agama, topik orang dewasa, atau masalah pribadi di depan siswa.`}
   ])}
   ${chatMock({
     name:'Orang tua', sub:'online', avatar:'👨', time:'19:40',
     msgs:[`Hai! Anak saya sangat menyukai Anda. Bisakah Anda memberikan les privat di luar Kodland? Kami akan membayar Anda secara langsung, sehingga biayanya lebih murah bagi kami.`],
     title:'Bagaimana Anda harus menjawab?',
     text:'Keluarga merasa puas dengan Anda — tetapi mereka meminta sesuatu yang melanggar batasan profesional. Ketuk setiap jawaban untuk melihat apa yang akan terjadi.',
     opts:[
      {t:`“Tentu! Kirimkan nomor Anda, nanti kita atur bersama.”`, ok:false, fb:`Hal ini akan membawa siswa keluar dari Kodland dan melanggar batasan profesional dalam peran Anda. Jangan pernah mengatur les privat dengan keluarga siswa Kodland.`},
      {t:`“Terima kasih banyak, saya sangat senang dia menikmati pelajaran kita! Namun, saya hanya bisa mengajarnya melalui Kodland. Jika Anda menginginkan lebih banyak pelajaran atau format yang berbeda, Customer Service akan membantu Anda dengan pilihan-pilihannya.”`, ok:true, fb:`Hangat, jelas, dan profesional. Anda mengucapkan terima kasih, tetap berpegang pada batasan profesional, dan mengarahkan keluarga kepada pihak yang dapat menawarkan berbagai pilihan. Setelah itu, beri tahu Team Leader mengenai permintaan tersebut.`},
      {t:`“Itu tidak diperbolehkan, tolong jangan tanyakan hal itu lagi.”`, ok:false, fb:`Batasan yang disampaikan memang benar, tetapi nadanya kurang tepat: keluarga bermaksud menyampaikan pujian. Tolak permintaan tersebut dengan ramah dan arahkan mereka ke Customer Service.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Keandalan dan batasan profesional — cek modul',
  instr:'Klasifikasikan setiap situasi dan pilih tindakan yang paling tepat. Diperlukan nilai 70% untuk membuka daftar periksa terakhir.',
  items:[
   {type:'sort', prompt:'Tidak masalah atau melanggar batasan?', card:'Selama pelajaran berlangsung, ketika siswa sedang mengerjakan tugas, Anda membalas pesan dari orang tua siswa di kelompok lain.', zones:[{label:'✅ Tidak masalah', fb:'Belum tepat — waktu pelajaran adalah milik siswa yang sedang Anda ajar. Pesan dari keluarga lain harus menunggu hingga kelas selesai.'},{label:'🚫 Melanggar batasan', fb:'Benar — selama pelajaran berlangsung, perhatian Anda harus tetap tertuju pada kelompok tersebut. Keluarga akan memperhatikannya dan dapat menilai bahwa “tutornya tidak memperhatikan siswa”.'}], correctZone:1},
   {type:'sort', prompt:'Tidak masalah atau melanggar batasan?', card:'Seorang siswi selalu mematikan kameranya karena alasan agama. Anda mengizinkannya berpartisipasi melalui chat dan berbagi layar.', zones:[{label:'✅ Tidak masalah', fb:'Benar — ajak siswa dengan sopan, terima jawabannya, dan tawarkan cara lain untuk berpartisipasi. Jangan pernah memaksa.'},{label:'🚫 Melanggar batasan', fb:'Belum tepat — menghormati alasan siswa dan menawarkan cara lain untuk berpartisipasi adalah tindakan yang benar.'}], correctZone:0},
   {type:'choice', prompt:'Anda bangun dalam keadaan sakit dan mengetahui bahwa Anda tidak dapat mengajar kelas malam ini. Apa yang harus Anda lakukan?', opts:['Mengirim pesan kepada keluarga 30 menit sebelum kelas untuk membatalkannya.','Segera memberi tahu Team Leader agar mereka dapat mengatur tutor pengganti atau tanggal baru — kemudian ikuti rencana yang telah mereka tetapkan untuk keluarga.','Mengajar kelas dengan durasi lebih singkat dan mengakhirinya lebih awal.'], correct:1, fb:'Tutor tidak boleh membatalkan atau menjadwalkan ulang kelas atas keputusan sendiri. Semakin cepat Team Leader mengetahui situasinya, semakin banyak pilihan yang tersedia — dan keluarga akan menerima informasi berdasarkan rencana yang jelas, bukan pemberitahuan pada menit-menit terakhir.'},
   {type:'sort', prompt:'Tidak masalah atau melanggar batasan?', card:'Setelah kelas selesai, Anda mengajak dua siswa untuk bermain Roblox bersama secara online.', zones:[{label:'✅ Tidak masalah', fb:'Belum tepat — menghubungi siswa di luar jam pelajaran, terutama untuk bermain secara pribadi, melanggar batasan profesional, meskipun terlihat sebagai tindakan yang ramah.'},{label:'🚫 Melanggar batasan', fb:'Benar — di luar kelas, komunikasi Anda dengan siswa harus dilakukan melalui orang tua dan saluran resmi. Tidak boleh ada komunikasi pribadi atau bermain bersama siswa.'}], correctZone:1},
   {type:'choice', prompt:'Anda akan mengambil alih kelompok dari tutor lain. Apa yang harus Anda lakukan sebelum mengajar untuk pertama kalinya?', opts:['Memulai kembali kursus dari pelajaran pertama agar Anda mengetahui kemampuan setiap siswa.','Tidak perlu melakukan persiapan khusus — siswa akan terbiasa dengan Anda.','Membaca komentar di BO dan memeriksa perkembangan kelompok, merencanakan cara memperkenalkan diri, serta mempertahankan rutinitas yang sudah dikenal oleh kelompok tersebut.'], correct:2, fb:'Kesinambungan pembelajaran membuat pergantian tutor terasa aman dan nyaman bagi siswa. Kenali riwayat kelompok, perkenalkan diri, dan pertahankan rutinitas yang sudah mereka kenal.'}
  ]
 }
},
{id:'checklist', numLabel:'Checklist Akhir', emoji:'✅', color:'var(--coral)',
 title:'Checklist Akhir',
 desc:'Tidak ada kuis di sini — hanya hal-hal penting dari mini-training ini, sebelum kamu menutupnya.',
 obj:'Tinjau checklist di bawah ini. Modul ini tidak dinilai — baca, lalu selesaikan mini-training-nya.',
 sections:[
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   ${numlist([
     'Saya meninggalkan komentar di BO di hari yang sama saat saya mengetahui permintaan itu, dan melibatkan Team Leader saya',
     'Pelajaran berikutnya dengan siswa ini adalah upaya nyata untuk mempertahankannya — giliran yang sungguhan, keberhasilan yang terlihat, perhatian yang spesifik, tanpa menyinggung permintaan refund',
     'Saya tidak pernah mengonfirmasi persetujuan atau membahas nominal — saya menggunakan satu kalimat yang aman dan menyerahkan sisanya kepada Client Service'
   ])}
  `},  {t:'🌱 Di setiap pelajaran', html:`
   ${numlist([
     'Saya menjalankan struktur pelajaran yang sama setiap kali, supaya siswa mengenal ritmenya dan menggunakan energinya untuk belajar',
     'Saya membuka dengan empat fase: Pemanasan, ulasan pelajaran sebelumnya dengan kata-kata siswa sendiri, Cek PR yang sungguhan, dan Tujuan Pelajaran yang disampaikan dengan jelas',
     'Di Teori &amp; Praktik, saya mengajar dalam potongan kecil, mencontohkan dulu di layar saya, dan menjaga waktu praktik',
     'Saya menutup dengan fase cermin: Ringkasan Pelajaran dengan kata-kata siswa sendiri, instruksi PR yang jelas, Pratinjau Pelajaran Berikutnya, dan Penutup yang merayakan apa yang sudah mereka buat',
     'Saya membaca evaluasi kualitas saya per fase, dan memperbaiki fase yang terlewat di pelajaran saya berikutnya',
     'Saya mempelajari panduan dan materi sehari sebelumnya — bukan tiga puluh menit sebelumnya — dan saya memahami tujuan pelajarannya, bukan hanya langkah-langkahnya',
     'Saya membuka panduan dan presentasi dari BO, dan memastikan ID kursusnya sama dengan kursus yang diikuti siswa saya',
     'Saat menemukan kekurangan, saya bertanya di channel Slack kursus saya, kepada Regional Mentor atau Team Leader saya — dan saya melaporkan kesalahan materi lewat ikon 🐞 di BO',
     'Saat penjelasan pertama saya tidak berhasil, saya mengubah pendekatannya — sudut pandang yang berbeda, peragaan, potongan yang lebih kecil — alih-alih mengulanginya',
     'Saya mengenal siswa saya dan membangun ruang aman di mana kesalahan tidak dihakimi',
     'Saya memberikan umpan balik yang spesifik dan membangun: apa yang berhasil, dan apa yang bisa dicoba berikutnya — tidak pernah hanya “bagus”',
     'Saya juga mengirim pesan kepada keluarga tentang kabar baik, bukan hanya saat ada yang salah',
     'Saya memberikan satu instruksi dalam satu waktu dan memastikan pemahaman dengan bertanya “Coba tunjukkan” atau “Apa yang akan kamu lakukan pertama kali?” — diam bukan berarti memahami.',
     'Saya menyesuaikan tempo dan penggunaan kata-kata dengan usia siswa: langkah yang sangat singkat dan didemonstrasikan untuk anak-anak yang lebih kecil, serta istilah baru yang dijelaskan menggunakan contoh.',
     'Saya menghindari ungkapan yang menunjukkan ketidaksabaran seperti “Saya sudah menjelaskan ini” dan membagikan perhatian secara adil kepada seluruh anggota kelompok.',
     'Saya bergabung 15 menit lebih awal, memulai kelas tepat waktu, memberikan pelajaran secara penuh, dan tidak pernah mengakhiri kelas lebih awal.',
     'Jika saya tidak dapat mengajar suatu kelas, saya segera memberi tahu Team Leader setelah mengetahuinya — saya tidak pernah membatalkan, memindahkan jadwal, atau menjanjikan kelas pengganti atas keputusan sendiri.',
     'Ketika mengambil alih suatu kelompok, saya terlebih dahulu membaca komentar di BO, memperkenalkan diri, dan mempertahankan rutinitas yang sudah dikenal oleh kelompok tersebut.',
     'Saya menjaga batasan profesional: hanya menggunakan platform Kodland, berkomunikasi melalui saluran resmi, memberikan perhatian penuh selama pelajaran, serta menghormati pilihan kamera dan privasi setiap siswa.'
   ])}
  `},  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Itulah keseluruhan mini-training ini.</strong> Jika sudah siap, lanjutkan — lalu selesaikan DST di LMS untuk menuntaskan tugasnya.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
