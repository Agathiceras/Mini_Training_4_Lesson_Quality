/* Mini_Training_4_Lesson_Quality - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='id';
const CONTENT = {
  flag:'🇮🇩', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Kualitas Pelajaran — Pelatihan Tutor Kodland",
    logoSub:'Departemen Pengembangan Tutor',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Melihat <span class=\"h-pill\">Kualitas Pelajaran</span> Secara Jujur",
    heroIntro:"Kamu menerima pelatihan ini karena ada siswamu yang mengajukan refund karena masalah kualitas kelas. Di sini kami akan menunjukkan apa yang bisa kamu lakukan sebagai tutor dan cara menangani situasi seperti ini.",
    heroWork:"Selesaikan 5 modul singkat. Setiap cek modul butuh nilai 70%+ untuk membuka modul berikutnya. Total sekitar 25–30 menit.",
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
 title:'Mengapa Kamu di Sini',
 desc:'Mengapa alasan ini layak mendapat evaluasi diri yang jujur dan spesifik — dan aturan yang berlaku jika permintaan refund sudah masuk.',
 obj:'Memahami bahwa alasan ini berkaitan dengan pelajarannya sendiri, mengapa meminta bantuan sejak awal adalah langkah yang tepat, dan apa persisnya yang harus (dan tidak boleh) dilakukan jika permintaan refund sudah ada.',
 sections:[
  {t:'🪞 Alasan yang paling sulit didengar', html:`
   <div class="card"><p>Alasan ini berarti sebuah keluarga merasa <strong>kualitas pelajarannya sendiri</strong> yang menjadi masalah — bukan anaknya, bukan levelnya, bukan jadwalnya. Ini lebih sulit didengar dibanding sebagian besar alasan lainnya, dan wajar jika muncul keinginan untuk membela diri atau mencari pembenaran.</p></div>
   ${co('co-idea','💡',`<p><strong>Ini bukan penilaian atas dirimu sebagai pribadi.</strong> Ini adalah sinyal tentang perilaku tertentu yang bisa diperbaiki, di pelajaran-pelajaran tertentu. Tutor yang menanggapinya dengan serius dan spesifik — bukan secara pribadi — adalah yang paling cepat memperbaikinya.</p>`)}
   ${co('co-star','🎓',`<p><strong>Minta pandangan dari luar tentang caramu mengajar sejak awal.</strong> Regional Mentor-mu ada justru untuk hal ini — meminta masukan tentang caramu mengajar adalah langkah yang tepat, bukan tanda bahwa ada yang salah denganmu.</p>`)}
  `},
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   <div class="card"><p>Semua hal di atas adalah tentang menangkap tanda ini sejak dini. Tapi mungkin kamu membuka pelatihan ini karena sebuah keluarga <strong>sudah</strong> mengajukan refund. Aturan di bawah ini berlaku apa pun alasannya — baca dulu, lalu gunakan sisa pelatihan ini untuk memahami apa yang menyebabkannya dan apa yang masih bisa kamu lakukan di kelas.</p></div>
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
 desc:'Struktur cermin sembilan fase yang membuat pelajaran terasa lengkap, dengan contoh dari kelas sungguhan, dan cara membaca evaluasi kualitasmu sendiri.',
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
  {t:'🏁 Bagian akhir: cerminnya', html:`
   <div class="card"><p>Empat fase penutup mencerminkan fase pembuka dalam urutan terbalik — pelajaran berakhir seperti saat dimulai, memberikan rasa tuntas dan ritme.</p></div>
   ${timeline([
     {ic:'📋', label:'1 · Ringkasan Pelajaran', items:['Ulas kembali apa yang sudah dibahas, tapi biarkan siswa juga merangkumnya — kata-kata mereka sendiri menunjukkan apa yang benar-benar dipahami.'], video:'https://drive.google.com/file/d/1jNZGDMnRYh83xGd2NVHrZTdgXLagi2GZ/preview'},
     {ic:'📖', label:'2 · Pemberian PR', items:['Instruksi yang sangat jelas tentang apa yang harus dikerjakan dan bagaimana caranya. PR yang tidak jelas adalah PR yang tidak akan dikerjakan.'], video:'https://drive.google.com/file/d/1qOYvENqjiYlwRaFvDb0A7W6JYgWPCjJc/preview'},
     {ic:'▶️', label:'3 · Pratinjau Pelajaran Berikutnya', items:['Beri bocoran tentang apa yang akan datang — ini membuat siswa tetap terlibat secara emosional, bukan sekadar mengikuti daftar tugas.'], video:'https://drive.google.com/file/d/17bE6JdZmDFJ_igrWYhc7fnpD39b-k-2K/preview'},
     {ic:'✨', label:'4 · Penutup', items:['Akhiri dengan semangat: rayakan apa yang sudah dibuat siswa. 30 detik terakhir adalah hal yang mereka pertimbangkan saat memutuskan apakah akan hadir lagi di pertemuan berikutnya.'], video:'https://drive.google.com/file/d/1OTYSh07wSosjgsHFD05YvccD3NY2CgsX/preview'}
   ])}
  `},
  {t:'📊 Membaca evaluasi kualitasmu', html:`
   <div class="card"><p>Evaluasi kualitasmu dipetakan langsung ke fase-fase ini — tujuannya untuk menunjukkan persis di bagian mana dari struktur ada yang terlewat: pemanasan yang terlewat, tujuan yang tidak pernah disampaikan, waktu praktik yang terpotong, penutup yang tidak pernah terjadi.</p></div>
   ${co('co-idea','💡',`<p><strong>Baca per fase, bukan sebagai satu skor keseluruhan.</strong> Skor rendah tanpa konteks tidak banyak memberi tahu; skor rendah pada “Tujuan Pelajaran” atau “Penutup” memberi tahu persis apa yang perlu diubah di pelajaranmu berikutnya.</p>`)}
  `}
 ],
 ix:{
  title:'Struktur Pelajaran — cek modul',
  instr:'Lima ronde singkat: tempatkan setiap fase di pelajaran, dan tebak fase mana yang sedang dijelaskan. 70% untuk membuka modul berikutnya.',
  items:[
   {type:'sort', prompt:'Di mana fase ini berada?', card:'▶️ Pratinjau Pelajaran Berikutnya', zones:[{label:'🌅 Salah satu dari 4 fase pembuka', fb:'Belum tepat — Pratinjau Pelajaran Berikutnya adalah bagian dari blok penutup yang mencerminkan pembuka, bukan bagian pembuka.'},{label:'🏁 Salah satu dari 4 fase penutup', fb:'Benar — ini fase ketiga dari empat fase penutup, tepat sebelum Penutup.'}], correctZone:1},
   {type:'sort', prompt:'Fase mana yang sedang dijelaskan?', card:'“Momen ini memberi tahu siswa untuk apa pelajaran hari ini. Tanpanya, mereka tidak tahu apa yang sedang mereka tuju — dan cepat kehilangan minat.”', zones:[{label:'👋 Pemanasan', fb:'Belum tepat — Pemanasan mengalihkan siswa ke mode belajar, tapi tidak menyampaikan untuk apa pelajaran hari ini. Itu adalah Tujuan Pelajaran.'},{label:'🎯 Tujuan Pelajaran', fb:'Benar — menyampaikan Tujuan Pelajaran dengan jelas memberi seluruh pelajaran arah yang bisa diikuti siswa.'},{label:'📋 Ringkasan Pelajaran', fb:'Belum tepat — Ringkasan melihat kembali apa yang sudah dibahas. Menyampaikan untuk apa pelajaran hari ini dilakukan di awal: Tujuan Pelajaran.'},{label:'✨ Penutup', fb:'Belum tepat — Penutup mengakhiri pelajaran. Mengetahui untuk apa pelajaran hari ini terjadi di awal: Tujuan Pelajaran.'}], correctZone:1},
   {type:'sort', prompt:'Di mana fase ini berada?', card:'📖 Ulasan Pelajaran Sebelumnya', zones:[{label:'🌅 Salah satu dari 4 fase pembuka', fb:'Benar — ini fase kedua dari empat fase pembuka, tepat setelah Pemanasan.'},{label:'🏁 Salah satu dari 4 fase penutup', fb:'Belum tepat — Ulasan Pelajaran Sebelumnya membuka pelajaran, bukan menutupnya.'}], correctZone:0},
   {type:'sort', prompt:'Fase mana yang sedang dijelaskan?', card:'“Membiarkan siswa mengungkapkan apa yang dia pelajari hari ini dengan kata-katanya sendiri menunjukkan apa yang benar-benar dipahami — dan apa yang perlu diperkuat di pertemuan berikutnya.”', zones:[{label:'📖 Ulasan Pelajaran Sebelumnya', fb:'Hampir — tapi fase itu mengulas pelajaran <em>sebelumnya</em>. Mengungkapkan pelajaran <em>hari ini</em> dengan kata-kata sendiri adalah Ringkasan Pelajaran.'},{label:'📋 Cek PR', fb:'Belum tepat — Cek PR membahas pekerjaan rumah. Ini adalah Ringkasan Pelajaran.'},{label:'▶️ Pratinjau Pelajaran Berikutnya', fb:'Belum tepat — Pratinjau melihat ke depan. Mengulas pelajaran hari ini dengan kata-kata sendiri adalah Ringkasan Pelajaran.'},{label:'📋 Ringkasan Pelajaran', fb:'Benar — Ringkasan Pelajaran memungkinkanmu mengecek apa yang benar-benar dipahami, dengan kata-kata siswa sendiri.'}], correctZone:3},
   {type:'sort', prompt:'Fase mana yang sedang dijelaskan?', card:'“30 detik terakhir adalah hal yang dipertimbangkan siswa saat memutuskan apakah akan hadir lagi — jadi akhiri dengan merayakan apa yang sudah mereka buat.”', zones:[{label:'✨ Penutup', fb:'Benar — Penutup mengakhiri pelajaran dengan semangat, dan perasaan itulah yang membuat siswa kembali.'},{label:'📖 Pemberian PR', fb:'Belum tepat — Pemberian PR adalah tentang instruksi yang jelas. Mengakhiri dengan semangat adalah Penutup.'},{label:'🎯 Tujuan Pelajaran', fb:'Belum tepat — Tujuan Pelajaran terjadi di awal. Ini adalah Penutup.'},{label:'👋 Pemanasan', fb:'Belum tepat — Pemanasan membuka pelajaran. 30 detik terakhir adalah milik Penutup.'}], correctZone:0}
  ]
 }
},
{id:'prep', numLabel:'Modul 2', emoji:'📚', color:'var(--coral)',
 title:'Waktu Persiapan',
 desc:'Mengapa mempelajari panduan sehari sebelumnya, bukan tiga puluh menit sebelumnya, adalah hal yang benar-benar menjaga kualitas pelajaran — dan di mana menemukannya di BO.',
 obj:'Mempersiapkan pelajaran dengan waktu yang cukup untuk menemukan kekurangan sebelum pelajaran dimulai, menemukan materi yang tepat di BackOffice, dan tahu persis ke mana harus meminta bantuan atau melaporkan masalah materi.',
 sections:[
  {t:'⏳ Bukan tiga puluh menit sebelumnya', html:`
   <div class="card"><p>Persiapan yang dilakukan setengah jam — atau sepuluh menit — sebelum kelas tidak menyisakan ruang untuk benar-benar mempelajari hal yang belum kamu kuasai. Jika ada konsep, potongan kode, atau alat yang belum kamu kuasai, kamu akan mempelajarinya secara langsung, di depan siswa.</p></div>
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
   <div class="card"><p>Panduan pelajaran dan presentasi ada di dalam BackOffice (BO), terlampir pada data kursus yang persis sedang kamu ajarkan — bukan di halaman wiki lama yang mungkin sudah tidak terbaru. Simulasi di bawah ini akan memandumu, langkah demi langkah, ke tempat menemukannya, dan ke mana melaporkannya jika ada yang salah di materinya.</p></div>
   ${co('co-danger','🚨',`<p><strong>Selalu pastikan ID kursus yang kamu buka sama dengan kursus yang diikuti siswamu.</strong> Kursus-kursus yang tampak mirip ada berdampingan di BO — mengajar dari kursus yang salah, bahkan versi lain dari kursus yang sama, bisa membuat pelajaran kacau dalam hitungan detik.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Materi kursus &amp; kesalahan materi</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Materi kursus dan kesalahan materi" loading="lazy"></iframe></div></div>
  `}
 ],
 ix:{
  title:'Waktu Persiapan — cek modul',
  instr:'70% untuk membuka modul berikutnya.',
  items:[
   {type:'choice', prompt:'Kapan sebaiknya kamu mempelajari panduan dan materi untuk sebuah pelajaran?', opts:['Sehari sebelumnya, supaya ada waktu untuk memperbaiki kekurangan yang kamu temukan','Tepat sebelum kelas, supaya masih segar di ingatan','Hanya jika itu pelajaran yang belum pernah kamu ajarkan'], correct:0, fb:'Sehari sebelumnya memberimu waktu untuk benar-benar menangani apa pun yang kamu temukan — kekurangan, bug, atau aktivitas yang belum sepenuhnya kamu pahami.'},
   {type:'choice', prompt:'Kamu menemukan potongan kode di panduan yang tidak berfungsi. Apa yang kamu lakukan?', opts:['Melewatkan bagian itu dan berharap tidak ada yang sadar','Mencari solusinya secara langsung saat pelajaran bersama siswa','Bertanya di channel Slack kursusmu, kepada mentor, atau Team Leader-mu — dan melaporkannya lewat ikon 🐞 di BO'], correct:2, fb:'Saluran-saluran ini ada justru supaya kamu tidak perlu menyelesaikannya secara langsung, sendirian — dan dengan melaporkannya, masalahnya diperbaiki untuk semua grup setelah grupmu.'},
   {type:'choice', prompt:'Sebelum membuka panduan pelajaran di BO, apa yang harus kamu cek?', opts:['Bahwa pelajaran tersebut punya presentasi terlampir','Bahwa ID kursusnya sama dengan kursus yang diikuti siswamu','Bahwa panduannya diperbarui bulan ini'], correct:1, fb:'Kursus-kursus yang mirip ada berdampingan di BO. Mengajar dari ID kursus yang salah adalah salah satu cara tercepat menuju pelajaran yang kacau.'},
   {type:'choice', prompt:'Mengapa memahami tujuan pelajaran lebih berguna daripada sekadar tahu langkah-langkahnya?', opts:['Kamu bisa menyesuaikan jalannya jika ada yang berjalan berbeda, tanpa kehilangan intinya','Kamu bisa melewatkan bagian panduan yang menurutmu kurang berguna','Membantumu menyelesaikan pelajaran lebih cepat'], correct:0, fb:'Memahami “mengapa” membuatmu bisa menyesuaikan “bagaimana” tanpa kehilangan tujuan pelajarannya.'}
  ]
 }
},
{id:'soft', numLabel:'Modul 3', emoji:'🤝', color:'var(--coral)',
 title:'Soft Skills',
 desc:'Kebiasaan di luar penguasaan materi yang benar-benar membuat sebuah pelajaran terasa menyenangkan untuk diikuti.',
 obj:'Menerapkan soft skills yang mengubah penguasaan materi menjadi pelajaran yang benar-benar bagus: fleksibilitas kognitif, mengenal siswamu, rasa aman untuk berbuat salah, motivasi, dan umpan balik yang spesifik.',
 sections:[
  {t:'🤝 Bukan hanya soal menguasai materi', html:`
   <div class="card"><p>Menguasai materi itu perlu, tapi bukan itu yang membuat sebuah pelajaran terasa menyenangkan untuk diikuti. Itu datang dari serangkaian kebiasaan yang tidak ada hubungannya dengan pengetahuan teknis.</p></div>
   ${iconGrid([
     {ic:'🔄', html:`<strong>Fleksibilitas kognitif.</strong> Menyesuaikan penjelasan, tempo, atau pendekatanmu saat yang pertama tidak berhasil, alih-alih mengulanginya dengan suara lebih keras.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Mengenal siswamu.</strong> Minat mereka, apa yang memotivasi mereka — inilah yang membuat contoh mudah dipahami dan mengubah pelajaran yang umum menjadi pelajaran yang terasa personal.`},
     {ic:'🛡️', html:`<strong>Lingkungan yang aman untuk berbuat salah.</strong> Siswa berani mengambil risiko dan benar-benar belajar saat mereka tahu jawaban yang salah tidak akan dihakimi.`},
     {ic:'🔥', html:`<strong>Semangat yang terlihat.</strong> Jika mereka melihat minat yang tulus darimu, mereka lebih termotivasi untuk terlibat — ini tidak bisa dipalsukan, tapi akan terasa saat tidak ada.`}
   ])}
  `},
  {t:'💬 Umpan balik yang membangun, bukan yang umum', html:`
   <div class="card"><p>“Bagus” tidak memberi tahu siswa apa yang perlu diulang atau dikembangkan. Umpan balik yang membangun itu <strong>spesifik</strong>, dan menunjukkan arah: apa yang sudah berhasil, dan apa yang perlu diperbaiki atau dijelajahi berikutnya.</p></div>
   ${doavoid(
     ['“Kamu berhasil membuat perulangannya jalan sendiri — keren, itu persis logika yang kita butuhkan”', '“Bagian ini sudah kuat; coba terapkan ide yang sama di bagian berikutnya”', '“Aku lihat kamu memperbaiki bug itu sendiri — gimana cara kamu berpikir tadi?”'],
     ['“Bagus!” tanpa menyebut apa yang sebenarnya dikerjakan', '“Itu salah” tanpa arahan tentang apa yang bisa dicoba', 'Umpan balik yang bisa berlaku sama untuk hasil kerja siswa mana pun']
   )}
  `},
  {t:'💌 Tunjukkan kepedulian, bukan hanya saat ada kabar buruk', html:`
   <div class="card"><p>Orang tua yang hanya mendengar kabar darimu saat ada masalah akan mulai mengaitkan pesan-pesanmu dengan masalah. Kirim juga pesan untuk merayakan hal baik — bukan hanya untuk menyampaikan kekhawatiran.</p></div>
   ${co('co-star','⭐',`<p>Satu kebiasaan ini — menulis sekali, tanpa diminta, tentang sesuatu yang dilakukan siswa dengan baik — mengubah cara keluarga membaca semua pesan yang kamu kirim setelahnya.</p>`)}
  `}
 ],
 ix:{
  title:'Soft Skills — cek modul',
  instr:'70% untuk membuka checklist akhir.',
  items:[
   {type:'choice', prompt:'Seorang siswa tidak bisa mengikuti penjelasan pertamamu. Seperti apa fleksibilitas kognitif dalam situasi ini?', opts:['Mengulangi penjelasan yang sama, dengan lebih pelan','Melanjutkan dan kembali membahasnya di akhir pelajaran','Mengubah pendekatannya — sudut pandang yang berbeda, peragaan, atau potongan yang lebih kecil'], correct:2, fb:'Fleksibilitas berarti mengubah pendekatannya, bukan sekadar mengulanginya.'},
   {type:'sort', prompt:'Harta karun atau sampah? Apakah ini umpan balik yang membangun?', card:'“Kamu berhasil membuat perulangannya jalan sendiri — coba terapkan ide yang sama di bagian berikutnya.”', zones:[{label:'💎 Harta karun — membangun', fb:'Benar — spesifik tentang apa yang berhasil dan menunjukkan langkah berikutnya.'},{label:'🗑️ Sampah — umum', fb:'Belum tepat — umpan balik ini menyebutkan persis apa yang dilakukan siswa dan apa yang bisa dicoba berikutnya. Itu membangun.'}], correctZone:0},
   {type:'sort', prompt:'Harta karun atau sampah? Apakah ini umpan balik yang membangun?', card:'“Kerja bagus hari ini, semuanya!”', zones:[{label:'💎 Harta karun — membangun', fb:'Belum tepat — memang ramah, tapi tidak memberi tahu siapa pun apa yang perlu diulang atau dikembangkan.'},{label:'🗑️ Sampah — umum', fb:'Benar — ramah, tapi bisa berlaku untuk siapa saja. Sebutkan apa yang sebenarnya sudah dilakukan dengan baik.'}], correctZone:1},
   {type:'choice', prompt:'Mengapa mengirim pesan kepada orang tua tentang hal yang baik, bukan hanya tentang masalah?', opts:['Orang tua mengharapkannya sebagai formalitas','Ini mengubah cara keluarga membaca semua pesan yang kamu kirim setelahnya','Hanya diperlukan saat nilai siswa rendah'], correct:1, fb:'Pesan positif tanpa diminta membangun kepercayaan yang membuat percakapan sulit menjadi lebih mudah di kemudian hari.'}
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
     'Saya juga mengirim pesan kepada keluarga tentang kabar baik, bukan hanya saat ada yang salah'
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
