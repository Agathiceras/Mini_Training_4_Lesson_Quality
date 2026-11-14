/* Mini_Training_4_Lesson_Quality - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='tr';
const CONTENT = {
  flag:'🇹🇷', dir:'ltr',
  ui:{
    heroCard1:"<b>Kendi hızınızda.</b> İlerlemeniz bu tarayıcıda kaydedilir.",
    heroCard2:"<b>Uygulama dahil.</b> Her modül kısa bir kontrolle biter.",
    pbLabel:'modül tamamlandı',
    tapOpen:'Açmak için dokunun',
    tapFlip:'Çevirmek için dokunun',
    lblSee:'Gördüğünüz',
    lblDo:'Yapmanız gereken',
    lblSay:'Söyleyebileceğiniz',
    lblReport:'Nereye bildirilir',
    lblAvoid:'Kaçının',
    lblTip:'İpucu',
    stepOf:'Adım {i} / {n}',
    next:'İleri',
    pageTitle:"Mini Eğitim · Ders Kalitesi — Kodland Eğitmen Eğitimi",
    logoSub:'Eğitmen Gelişim Departmanı',
    heroEyebrow:"🎯 Mini Eğitim",
    heroTitle:"<span class=\"h-pill\">Ders Kalitesine</span> Dürüst Bir Bakış",
    heroIntro:"Bu eğitimi, dersin kalitesiyle ilgili sorunlar nedeniyle iade talep eden öğrencileriniz olduğu için alıyorsunuz. Burada, bir eğitmen olarak neler yapabileceğinizi ve bu tür durumları nasıl yöneteceğinizi göstereceğiz.",
    heroWork:"6 kısa modülü tamamlayın. Bir sonraki modülün kilidini açmak için her modülün değerlendirmesinden en az %70 almanız gerekir. Toplam süre yaklaşık 35–40 dakikadır.",
    startBtn:"🚀 Eğitimi Başlat",
    pathLabel:'Öğrenme Yolunuz',
    devTitle:'Geliştirici: inceleme için tüm modüllerin kilidini aç',
    backToPath:'Öğrenme yoluna dön',
    modulesPassed:'{done} / {total} modül tamamlandı',
    moduleN:'Modül {n}',
    of:'/',
    locked:'🔒 Kilitli',
    passedBadge:'✅ Geçildi · %{pct}',
    reviewedBadge:'✅ İncelendi',
    startBadge:'▶ Başla',
    reviewBadge:'▶ İncele',
    objective:'Hedef',
    startCheck:'▶ Modül kontrolüne başla',
    finishBtn:'▶ Mini eğitimi bitir',
    doneBack:'✓ Tamamlandı — öğrenme yoluna dön',
    ixBadge:'📋 Modül kontrolü — sonraki modülün kilidini açmak için %70',
    ixItemBadge:'📋 Modül kontrolü — soru {i} / {n}',
    scoreSoFar:'Şu ana kadarki puan: {c} / {t}',
    continue:'Devam →',
    sortWrong:'Tam değil — doğru cevap “{label}”.',
    resPassed:'Modülü geçtiniz!',
    resFailed:'Henüz tam olmadı',
    resUnlocked:"Sonraki modülün kilidini açtınız.",
    resDone:"Bu mini eğitimi tamamladınız.",
    resNeed:'Sonraki modülün kilidini açmak için %70 almanız gerekiyor. Yukarıdaki bölümü yeniden gözden geçirin ve kontrolü tekrar deneyin.',
    resContinue:'Öğrenme yoluna devam et',
    resFinish:'Devam et',
    resBack:'Öğrenme yoluna dön',
    resReview:'Bu modülü incele',
    doneEyebrow:'Mini Eğitim Tamamlandı',
    doneTitle:'🎉 Tebrikler!',
    doneP1:"🎉 <strong>Tebrikler! Bu mini eğitimi tamamladınız.</strong>",
    doneP2:"Burada işiniz bitti! Ödevi kapatmak için lütfen bu mini eğitime eriştiğiniz LMS eğitim sayfasına geri dönün.",
    doneP3:"👉 <strong>LMS’de eğitimin hemen altında bir kontrol veya değerlendirme varsa, onu da tamamladığınızdan ve geçer puan aldığınızdan emin olun</strong> — aksi hâlde ödev tamamlanmamış olarak kalabilir.",
    doneP4:'Bol şans! ❤️',
    doneP5:'',
    devUnlockAlert:'Geliştirici modu: tüm modüllerin kilidi inceleme için açıldı.',
    devOn:'🔓 Geliştirici modu AÇIK — tüm modüllerin kilidi açık',
    devOff:'🔒 Geliştirici modu KAPALI — ilerleme sıfırlandı',
    devBadge:'🔓 GELİŞTİRİCİ MODU',
    doLabel:'✅ Yapın',
    avoidLabel:'🚫 Kaçının',
    noticeLabel:'Dikkat:',
    cvSee:'Gördüğünüz:',
    cvDo:'Yapmanız gereken:',
    dtExample:'Gerçek bir dersten örnek',
    dtNext:'Sonraki:',
    dtDone:"✅ Dört alanın hepsini gördünüz. Şimdi gördüklerinizi sınıflandırın.",
    tlVideoTitle:'{label} — gerçek bir ders örneği',
    tlVideoMeta:'Bu aşamanın gerçek bir derste nasıl göründüğünü izleyin'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Giriş', emoji:'🧩', color:'var(--coral)',
 title:'Neden Buradasınız',
 desc:'Bu neden neden dürüst ve somut bir öz değerlendirmeyi hak ediyor — ve bir iade talebi zaten oluşturulduysa hangi kurallar geçerli.',
 obj:'Bu nedenin dersin kendisiyle ilgili olduğunu, erkenden yardım istemenin neden tam olarak doğru hamle olduğunu ve bir iade talebi zaten varsa tam olarak ne yapmanız (ve ne yapmamanız) gerektiğini anlamak.',
 sections:[
  {t:'🪞 Duyması en zor olan', html:`
   <div class="card"><p>Bu neden, bir ailenin sorunun <strong>dersin kalitesinin kendisi</strong> olduğunu hissettiği anlamına gelir — çocuk değil, seviye değil, ders saati değil. Bunu duymak diğerlerinin çoğundan daha zordur ve savunmaya geçmek ya da bir açıklama bulup geçiştirmek cazip gelebilir.</p></div>
   ${co('co-idea','💡',`<p><strong>Bu, bir insan olarak sizin hakkınızda verilmiş bir hüküm değildir.</strong> Belirli derslerdeki, belirli ve düzeltilebilir davranışlarla ilgili bir işarettir. Bunu kişisel algılamak yerine ciddiye alan ve somut olarak ele alan eğitmenler durumu en hızlı tersine çevirir.</p>`)}
   ${co('co-star','🎓',`<p><strong>Ders anlatımınıza erkenden dışarıdan bir göz alın.</strong> Bölge Mentorunuz tam olarak bunun için var — nasıl ders anlattığınıza dair geri bildirim istemek, sizde bir sorun olduğunun işareti değil, doğru bir hamledir.</p>`)}
  `},
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   <div class="card"><p>Yukarıdakilerin hepsi bu durumu erkenden yakalamakla ilgili. Ancak bu eğitimi, bir aile <strong>zaten</strong> iade talep ettiği için açıyor olabilirsiniz. Aşağıdaki kurallar, sebep ne olursa olsun geçerlidir — önce bunları okuyun, ardından bu noktaya nasıl gelindiğini ve derste hâlâ neler yapabileceğinizi anlamak için eğitimin geri kalanından yararlanın.</p></div>
   ${co('co-idea','💡',`<p><strong>Talebin kendisini siz değil, Müşteri Hizmetleri oluşturur</strong> — o kısım sizin kontrolünüzde değil. Sizin elinizde olan, bundan sonra derste yaşanacak her şeydir ve bu hiç de az değildir.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Talebin kendisi hakkında hiçbir şey söylemeyin</strong> — ne çocuğa ne de aileye — Müşteri Hizmetleri sizden açıkça belirli bir şey söylemenizi istemedikçe. Şu anki göreviniz bu konuşma değil, derstir.</p>`)}
  `},
  {t:'🎯 Bir sonraki dersiniz, öğrenciyi kazanma fırsatınızdır', html:`
   <div class="card"><p>Başka hiçbir şeyi değiştirme şansınız olmayabilir. Bu çocukla yapacağınız bir sonraki dersi, sonucu belirleyecek an olarak görün.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Ona gerçek bir söz hakkı verin.</strong> Anlamsız bir soru değil — görüldüğü ve başardığı gerçek bir an.`},
     {ic:'🏆', html:`<strong>Erken ve görünür bir başarı planlayın.</strong> Dersten geride kalmış hissederek değil, başarabildiğini hissederek ayrılmalı.`},
     {ic:'👀', html:`<strong>Ona özel ilgi gösterin</strong> — genel geçer bir övgü yerine, somut bir şey için fark edildiğini hissettirin.`},
     {ic:'🤐', html:`<strong>Talepten hiç bahsetmeyin</strong> — çocuk konuyu kendisi açsa bile sıcak bir şekilde konuyu değiştirin ve derse devam edin.`}
   ])}
  `},
  {t:'📮 Hızlıca bildirin ve güvenli tek cümleyi bilin', html:`
   <div class="card"><p>Bir talep olduğunu, BO’da çocuğun profilindeki Müşteri Hizmetleri yorumlarından öğrenebilirsiniz — sizi bilgilendiren otomatik bir sistem yoktur. Bunu öğrendiğiniz andan itibaren, derslerinizde gördükleriniz Müşteri Hizmetleri’nin başka hiçbir yoldan edinemeyeceği bilgilerdir.</p></div>
   ${numlist([
     'Aynı gün BO’da tam olarak ne gördüğünüzü anlatan bir yorum bırakın — izlenimler değil, tarihler ve somut ayrıntılar',
     'Varsa, ailenin kendi sözlerini kelimesi kelimesine ekleyin',
     'Aynı gün Takım Liderinizi de bilgilendirin',
     'Bir iadenin onaylandığını asla teyit etmeyin ve herhangi bir tutar konuşmayın'
   ])}
   ${co('co-ok','✅',`<p><strong>Her zaman güvenle söyleyebileceğiniz cümle:</strong> <em>“Müşteri Hizmetleri bu konuda size yardımcı olacak.”</em> Konuşmadaki rolünüz burada biter — gerisini Müşteri Hizmetleri devralır.</p>`)}
  `},
  {t:'🌱 Sonrasında da özen göstermeye devam edin', html:`
   <div class="card"><p>Talep geri çekilse de, çocuk grubunuzda kalsa da ya da başka bir eğitmene veya formata geçse de, sonraki birkaç derste ona ekstra özen göstermeye devam edin. Bir ders boyunca işe yarayıp sonra sessizce eski hâline dönen bir kurtarma girişimi, çoğu zaman hiç işe yaramamış demektir.</p></div>
  `}
 ]
},
{id:'structure', numLabel:'Modül 1', emoji:'🧭', color:'var(--coral)',
 title:'Ders Yapısı',
 desc:'Bir dersin eksiksiz hissettirmesini sağlayan dokuz aşamalı ayna yapısı, gerçek ders örnekleriyle — ve kendi kalite değerlendirmelerinizi nasıl okuyacağınız.',
 obj:'Tutarlı bir ders yapısının neden ders kalitesini etkileyen en güçlü araçlardan biri olduğunu anlamak, dokuz aşamayı öğrenmek ve sınıfı tam olarak nerede kaybettiğinizi görmek için kalite değerlendirmelerinizi nasıl okuyacağınızı bilmek.',
 sections:[
  {t:'🧭 Önemli olan tutarlılık', html:`
   <div class="card"><p>Bir öğrenci sizin ritminizi öğrendiğinde, enerjisini “şimdi ne olacak?” diye düşünmeye değil, öğrenmeye harcar. Aynı yapıyı her seferinde uygulayın; ta ki hem sizin hem de onların için doğal hâle gelene kadar.</p></div>
  `},
  {t:'🌅 Başlangıç: dört aşama', html:`
   ${timeline([
     {ic:'👋', label:'1 · Isınma', items:['Öğrenciyi “ders moduna” geçiren hızlı bir soru veya küçük bir meydan okuma — ve aynı zamanda topluluk oluşturma anı.'], video:'https://drive.google.com/file/d/1fMWyd6bfCcUauqIIaNldojVuHYg6J9JR/preview'},
     {ic:'📖', label:'2 · Önceki Dersin Tekrarı', items:['Geçen derste öğrenilenleri öğrencinin kendi sözleriyle kısaca tekrar edin. “Bunu hatırlıyorum” demek gerçek bir özgüven oluşturur.'], video:'https://drive.google.com/file/d/1J1jijTw8bj8l9yw9aMNXp9zHwxEbkWbY/preview'},
     {ic:'📋', label:'3 · Ödev Kontrolü', items:['Ev ödevini birlikte gözden geçirin — yanlış anlamaları yakalayın, emeği övün, çalışmanın gerçekten görüldüğünü gösterin.'], video:'https://drive.google.com/file/d/1H2Awetu6fkoatv2RMonUeBawgK7tsR3e/preview'},
     {ic:'🎯', label:'4 · Dersin Hedefi', items:['Bugünün ne hakkında olduğunu açıkça söyleyin. Bugünün “ne için” olduğunu bilmeyen bir öğrencinin ilgisi çabucak kaybolur.'], video:'https://drive.google.com/file/d/1cuqULcb1jxkwV_uepi-dnxFdx3FB41Si/preview'}
   ])}
  `},
  {t:'🎨 Orta bölüm: teori ve pratik', html:`
   <div class="card"><p>Yeni konunun öğretildiği ve hemen uygulandığı en uzun aşamadır. Teoriyi küçük parçalar hâlinde tutun — bir kavram, ardından o kavramla uygulamalı çalışma — ve <strong>önce gösterin</strong>: öğrenciler kendi ekranlarında denemeden önce siz kendi ekranınızda gösterin. Pratik süresini kararlılıkla koruyun; çocukların yalnızca sizi izlediği bir ders, kimsenin gerçekten pratik yapmadığı bir derstir.</p></div>
  `},
  {t:'🏁 Bitiş: ayna', html:`
   <div class="card"><p>Kapanıştaki dört aşama, açılıştaki aşamaları tersten yansıtır — ders başladığı gibi biter ve bu, bir tamamlanmışlık ve ritim duygusu verir.</p></div>
   ${timeline([
     {ic:'📋', label:'1 · Ders Özeti', items:['İşlenenleri özetleyin, ama öğrencinin de özetlemesine izin verin — onun kendi sözleri, gerçekte neyin akılda kaldığını ortaya çıkarır.'], video:'https://drive.google.com/file/d/1jNZGDMnRYh83xGd2NVHrZTdgXLagi2GZ/preview'},
     {ic:'📖', label:'2 · Ödev Verme', items:['Ne yapılacağı ve nasıl yapılacağı konusunda son derece net talimatlar. Belirsiz bir ev ödevi, yapılmayacak bir ev ödevidir.'], video:'https://drive.google.com/file/d/1qOYvENqjiYlwRaFvDb0A7W6JYgWPCjJc/preview'},
     {ic:'▶️', label:'3 · Sonraki Dersin Ön İzlemesi', items:['Sırada ne olduğuna dair merak uyandırın — bu, öğrencinin yalnızca bir görev listesini takip etmesini değil, duygusal olarak da bağlı kalmasını sağlar.'], video:'https://drive.google.com/file/d/17bE6JdZmDFJ_igrWYhc7fnpD39b-k-2K/preview'},
     {ic:'✨', label:'4 · Kapanış', items:['Dersi yüksek bir notla bitirin: öğrencinin ürettiği şeyi kutlayın. Bir sonraki derse gelip gelmeyeceğine karar verirken tarttıkları, son 30 saniyedir.'], video:'https://drive.google.com/file/d/1OTYSh07wSosjgsHFD05YvccD3NY2CgsX/preview'}
   ])}
  `},
  {t:'📊 Kalite değerlendirmelerinizi okumak', html:`
   <div class="card"><p>Kalite değerlendirmeleriniz doğrudan bu aşamalarla eşleşir — yapının tam olarak neresinde bir şeylerin aksadığını göstermek için vardır: atlanan bir ısınma, hiç söylenmeyen bir hedef, kısa kesilen pratik süresi, hiç yapılmayan bir kapanış.</p></div>
   ${co('co-idea','💡',`<p><strong>Onları tek bir genel puan olarak değil, aşama aşama okuyun.</strong> Bağlamı olmayan düşük bir puan size pek bir şey söylemez; “Dersin Hedefi” veya “Kapanış” aşamasındaki düşük bir puan ise bir sonraki dersinizde tam olarak neyi değiştirmeniz gerektiğini söyler.</p>`)}
  `}
 ],
 ix:{
  title:'Ders Yapısı — modül kontrolü',
  instr:'Beş hızlı tur: her aşamayı dersteki yerine yerleştirin ve hangi aşamanın anlatıldığını tahmin edin. Sonraki modülün kilidini açmak için %70 gerekir.',
  items:[
   {type:'sort', prompt:'Bu aşama nereye ait?', card:'▶️ Sonraki Dersin Ön İzlemesi', zones:[{label:'🌅 Açılıştaki 4 aşamadan biri', fb:'Tam değil — Sonraki Dersin Ön İzlemesi, açılışın değil, aynalanan kapanış bloğunun bir parçasıdır.'},{label:'🏁 Kapanıştaki 4 aşamadan biri', fb:'Doğru — kapanıştaki dört aşamanın üçüncüsüdür ve Kapanış’tan hemen önce gelir.'}], correctZone:1},
   {type:'sort', prompt:'Hangi aşama anlatılıyor?', card:'“Bu an, öğrenciye bugünün ne için olduğunu söyler. Bu olmadan neye doğru çalıştığını anlayamaz — ve ilgisi çabucak kaybolur.”', zones:[{label:'👋 Isınma', fb:'Tam değil — Isınma öğrencileri ders moduna geçirir, ama bugünün ne için olduğunu söylemez. Bu, Dersin Hedefi’dir.'},{label:'🎯 Dersin Hedefi', fb:'Doğru — Dersin Hedefi’ni açıkça söylemek, tüm derse öğrencilerin takip edebileceği bir yön verir.'},{label:'📋 Ders Özeti', fb:'Tam değil — Özet, işlenenlere geriye dönük bakar. Bugünün ne için olduğunu söylemek başta yapılır: Dersin Hedefi.'},{label:'✨ Kapanış', fb:'Tam değil — Kapanış dersi bitirir. Bugünün ne için olduğunu bilmek başta gerçekleşir: Dersin Hedefi.'}], correctZone:1},
   {type:'sort', prompt:'Bu aşama nereye ait?', card:'📖 Önceki Dersin Tekrarı', zones:[{label:'🌅 Açılıştaki 4 aşamadan biri', fb:'Doğru — açılıştaki dört aşamanın ikincisidir ve Isınma’dan hemen sonra gelir.'},{label:'🏁 Kapanıştaki 4 aşamadan biri', fb:'Tam değil — Önceki Dersin Tekrarı dersi açar, kapatmaz.'}], correctZone:0},
   {type:'sort', prompt:'Hangi aşama anlatılıyor?', card:'“Öğrencinin bugün öğrendiklerini kendi sözleriyle ifade etmesine izin vermek, gerçekte neyin akılda kaldığını — ve bir dahaki sefere neyin pekiştirilmesi gerektiğini — ortaya çıkarır.”', zones:[{label:'📖 Önceki Dersin Tekrarı', fb:'Yaklaştınız — ancak o aşama <em>geçen</em> dersi tekrar eder. <em>Bugün</em> öğrenilenleri kendi sözleriyle ifade etmek Ders Özeti’dir.'},{label:'📋 Ödev Kontrolü', fb:'Tam değil — Ödev Kontrolü ev ödevini gözden geçirir. Bu, Ders Özeti’dir.'},{label:'▶️ Sonraki Dersin Ön İzlemesi', fb:'Tam değil — Ön İzleme ileriye bakar. Bugünü kendi sözleriyle özetlemek Ders Özeti’dir.'},{label:'📋 Ders Özeti', fb:'Doğru — Ders Özeti, gerçekte neyin akılda kaldığını öğrencinin kendi sözleriyle kontrol etmenizi sağlar.'}], correctZone:3},
   {type:'sort', prompt:'Hangi aşama anlatılıyor?', card:'“Öğrencinin bir sonraki derse gelip gelmeyeceğine karar verirken tarttığı şey son 30 saniyedir — bu yüzden dersi onun ürettiği şeyi kutlayarak bitirin.”', zones:[{label:'✨ Kapanış', fb:'Doğru — Kapanış dersi yüksek bir notla bitirir ve öğrenciyi geri getiren de bu histir.'},{label:'📖 Ödev Verme', fb:'Tam değil — Ödev Verme net talimatlarla ilgilidir. Dersi yüksek bir notla bitirmek Kapanış’tır.'},{label:'🎯 Dersin Hedefi', fb:'Tam değil — Dersin Hedefi başta yer alır. Bu, Kapanış’tır.'},{label:'👋 Isınma', fb:'Tam değil — Isınma dersi açar. Son 30 saniye Kapanış’a aittir.'}], correctZone:0}
  ]
 }
},
{id:'prep', numLabel:'Modül 2', emoji:'📚', color:'var(--coral)',
 title:'Hazırlık Süresi',
 desc:'Kılavuzu otuz dakika önce değil, bir gün önce çalışmak neden dersin kalitesini gerçekten korur — ve kılavuzu BO’da nerede bulacağınız.',
 obj:'Derse, eksikleri ders başlamadan yakalayabileceğiniz kadar zaman ayırarak hazırlanmak, BackOffice’te doğru materyali bulmak ve nereden yardım alacağınızı ya da bir içerik sorununu nereye bildireceğinizi tam olarak bilmek.',
 sections:[
  {t:'⏳ Otuz dakika önce değil', html:`
   <div class="card"><p>Dersten yarım saat — ya da on dakika — önce yapılan hazırlık, henüz bilmediğiniz bir şeyi gerçekten öğrenmenize zaman bırakmaz. Kendinizden emin olmadığınız bir kavram, bir kod parçası veya bir araç varsa, onu öğrencinin önünde canlı olarak öğreniyor olursunuz.</p></div>
   ${co('co-idea','💡',`<p><strong>Kılavuzu ve materyalleri bir gün önce çalışın.</strong> Bu, kendi bilginizdeki bir eksikliği, materyaldeki bir hatayı ya da tam olarak anlamadığınız bir etkinliği fark etmeniz — ve ders başlamadan bu konuda gerçekten bir şey yapabilmeniz için size zaman tanır.</p>`)}
  `},
  {t:'🎯 Yalnızca adımları değil, hedefi bilin', html:`
   <div class="card"><p>Bugünkü dersin gerçekte neyi başarmayı amaçladığını açıkça anlayın — yalnızca kılavuzdaki adımların sırasını değil. Hedefi bildiğinizde, bir şey planlandığından farklı giderse, dersin amacını kaybetmeden yolu ona göre uyarlayabilirsiniz.</p></div>
   <img class="mt-pic" src="Pictures_T4/goals.png" alt="Dersin hedeflerini ve eğitsel kazanımlarını gösteren örnek bir kılavuz sayfası">
  `},
  {t:'🆘 Bir eksik bulduğunuzda', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>Kursunuzun Slack kanalını kullanın.</strong> Diğer eğitmenler büyük ihtimalle aynı hatayla ya da aynı kafa karıştırıcı adımla karşılaşmıştır.`},
     {ic:'🎓', html:`<strong>Bölge Mentorunuza sorun</strong> — konu, belirli bir şeyin nasıl öğretileceği veya açıklanacağıyla ilgiliyse.`},
     {ic:'👩‍💼', html:`<strong>Takım Liderinize sorun</strong> — konu kursun kendisi, materyaller ya da üst kademede düzeltilmesi gereken bir şeyle ilgiliyse.`}
   ])}
   ${co('co-star','⭐',`<p>Bir eksiği bir gün önce bulup yardım istemek, sistemin tam olarak olması gerektiği gibi çalışmasıdır. Onu derste canlı olarak fark etmek ise hazırlık süresinin önlemek için var olduğu şeydir.</p>`)}
  `},
  {t:'🗂️ Kurs materyalinizi BO’da bulmak', html:`
   <div class="card"><p>Ders kılavuzu ve sunum, BackOffice (BO) içinde, tam olarak ders anlattığınız kurs kaydına bağlı olarak bulunur — güncelliğini yitirmiş olabilecek eski bir wiki sayfasında değil. Aşağıdaki simülasyon, bunları nerede bulacağınızı ve içeriğin kendisinde bir hata varsa nereye bildireceğinizi adım adım gösterir.</p></div>
   ${co('co-danger','🚨',`<p><strong>Açtığınız kurs ID’sinin öğrencilerinizin kayıtlı olduğu kursla eşleştiğini her zaman kontrol edin.</strong> BO’da birbirine benzeyen kurslar yan yana bulunur — yanlış kurstan, hatta aynı kursun farklı bir sürümünden ders anlatmak, bir dersi saniyeler içinde kaosa sürükleyebilir.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Kurs materyali ve içerik hataları</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Kurs materyali ve içerik hataları" loading="lazy"></iframe></div></div>
  `}
 ],
 ix:{
  title:'Hazırlık Süresi — modül kontrolü',
  instr:'Sonraki modülün kilidini açmak için %70 gerekir.',
  items:[
   {type:'choice', prompt:'Bir dersin kılavuzunu ve materyallerini ne zaman çalışmalısınız?', opts:['Bir gün önce, böylece bulduğunuz bir eksikliği gidermeye zamanınız olur','Dersten hemen önce, böylece aklınızda taze kalır','Yalnızca daha önce hiç anlatmadığınız bir dersse'], correct:0, fb:'Bir gün önce çalışmak, bulduğunuz her şeyi — bir eksikliği, bir hatayı, tam olarak anlamadığınız bir etkinliği — gerçekten ele almanız için size zaman tanır.'},
   {type:'choice', prompt:'Kılavuzda çalışmayan bir kod parçası buluyorsunuz. Ne yaparsınız?', opts:['Dersin o kısmını atlayıp kimsenin fark etmemesini ummak','Derste öğrencilerle birlikte canlı olarak çözmeye çalışmak','Kursunuzun Slack kanalına, mentorunuza veya Takım Liderinize sormak — ve BO’daki 🐞 simgesiyle bildirmek'], correct:2, fb:'Bu kanallar, sorunu derste canlı olarak ve tek başınıza çözmek zorunda kalmamanız için vardır — bildirmek de sorunun sizden sonraki tüm gruplar için düzeltilmesini sağlar.'},
   {type:'choice', prompt:'BO’da ders kılavuzunu açmadan önce neyi kontrol etmelisiniz?', opts:['Derse bir sunum eklenmiş olup olmadığını','Kurs ID’sinin öğrencilerinizin kayıtlı olduğu kursla eşleşip eşleşmediğini','Kılavuzun bu ay güncellenip güncellenmediğini'], correct:1, fb:'BO’da birbirine benzeyen kurslar yan yana bulunur. Yanlış kurs ID’siyle ders anlatmak, bir dersin kaosa dönmesinin en hızlı yollarından biridir.'},
   {type:'choice', prompt:'Dersin hedefini bilmek neden yalnızca adımları bilmekten daha faydalıdır?', opts:['Bir şey farklı giderse, dersin amacını kaybetmeden yolu uyarlamanızı sağlar','Kılavuzun daha az faydalı bulduğunuz kısımlarını atlayabileceğiniz anlamına gelir','Dersi daha hızlı bitirmenize yardımcı olur'], correct:0, fb:'“Neden”i bilmek, dersin ne için olduğunu kaybetmeden “nasıl”ı esnetmenizi sağlar.'}
  ]
 }
},
{id:'soft', numLabel:'Modül 3', emoji:'🤝', color:'var(--coral)',
 title:'Sosyal Beceriler',
 desc:'Bir dersi öğrenciler için keyifli hâle getiren, konuya hâkim olmanın ötesindeki alışkanlıklar. Bunlara dersin temposunu ayarlamak, öğrencilerin konuyu anlayıp anlamadığını kontrol etmek ve iletişimde sabırlı olmak dahildir.',
 obj:'Alan bilginizi gerçekten iyi bir derse dönüştüren sosyal becerileri uygulamak: bilişsel esneklik, öğrencilerinizi tanımak, hata yapmanın güvenli olduğu bir ortam oluşturmak, motivasyon sağlamak, yaşa uygun bir tempo belirlemek, konunun anlaşılıp anlaşılmadığını kontrol etmek, sabırlı bir iletişim dili kullanmak, tüm öğrencilere eşit ilgi göstermek ve belirli konulara yönelik geri bildirim vermek.',
 sections:[
  {t:'🤝 Mesele yalnızca konuyu bilmek değil', html:`
   <div class="card"><p>Konuya hâkim olmak gereklidir, ama bir dersi içinde olmaktan keyif alınan bir ders yapan şey bu değildir. Bu, teknik bilgiyle hiçbir ilgisi olmayan bir dizi alışkanlıktan gelir.</p></div>
   ${iconGrid([
     {ic:'🔄', html:`<strong>Bilişsel esneklik.</strong> İlk açıklamanız işe yaramadığında, onu daha yüksek sesle tekrarlamak yerine açıklamanızı, temponuzu veya yaklaşımınızı değiştirmek.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Öğrencilerinizi tanımak.</strong> İlgi alanları, onları neyin motive ettiği — örneklerin yerine oturmasını sağlayan ve sıradan bir dersi kişisel hissettiren şey budur.`},
     {ic:'🛡️', html:`<strong>Hatalar için güvenli bir ortam.</strong> Öğrenciler, yanlış bir cevabın yargılanmayacağını bildiklerinde risk alır ve gerçekten öğrenir.`},
     {ic:'🔥', html:`<strong>Görünür bir tutku.</strong> Sizden gerçek bir ilgi gördüklerinde derse katılmak için daha çok motive olurlar — bu taklit edilemez, ama eksik olduğunda fark edilir.`}
   ])}
  `},
  {t:'💬 Genel geçer değil, yapıcı geri bildirim', html:`
   <div class="card"><p>“Aferin” demek, öğrenciye tekrar edebileceği ya da üzerine inşa edebileceği hiçbir şey söylemez. Yapıcı geri bildirim <strong>somuttur</strong> ve bir yön gösterir: neyin işe yaradığını ve sırada neyin geliştirileceğini veya keşfedileceğini.</p></div>
   ${doavoid(
     ['“Döngüyü kendi başına çalıştırdın — harika, tam da ihtiyacımız olan mantık buydu”', '“Bu kısım çok iyi; aynı fikri bir sonraki bölüme de uygulamayı dene”', '“O hatayı kendi başına düzelttiğini fark ettim — orada nasıl düşündün?”'],
     ['Gerçekte ne yapıldığına hiç değinmeden “Aferin!” demek', 'Bunun yerine ne denenebileceğine dair hiçbir yön göstermeden “Bu yanlış” demek', 'Herhangi bir öğrencinin çalışmasına aynı şekilde uyabilecek bir geri bildirim']
   )}
  `},
  {t:'🐢 Dersin temposu ve konunun anlaşılıp anlaşılmadığını kontrol etmek — özellikle küçük yaştaki çocuklarda', html:`
   <div class="card"><p>Bir ders doğru şekilde anlatılmış olsa bile karşınızdaki çocuk için fazla hızlı ilerleyebilir. Aileler bu durumu genellikle <em>“Eğitmen açıklama yapmadan sonraki konuya geçti”</em> veya <em>“Kullanılan yöntem daha büyük çocuklar içindi”</em> şeklinde ifade eder. Çözüm, adımları daha yavaş anlatmak, çocuğun bildiği kelimeleri kullanmak ve <strong>devam etmeden önce konuyu anlayıp anlamadığını kontrol etmektir</strong>. Sadece “Sorusu olan var mı?” diye sorup derse devam etmek yeterli değildir.</p></div>
   ${iconGrid([
     {ic:'1️⃣', html:`<strong>Her seferinde tek bir yönerge verin.</strong> Bir adımı açıklayın, öğrencinin tamamlamasını bekleyin ve ardından bir sonraki adıma geçin. Tek bir cümlede arka arkaya üç farklı yönerge vermeyin.`},
     {ic:'🖥️', html:`<strong>“Bana göster.”</strong> Öğrenciden ekranını paylaşmasını isteyin. Ekranda gördükleriniz, “Evet, anladım” cevabından çok daha fazla bilgi verir.`},
     {ic:'🗣️', html:`<strong>“İlk olarak ne yapacaksın?”</strong> Öğrenciden bir sonraki adımı kendi cümleleriyle anlatmasını istemek, işe başlamadan önce kafasının karıştığı noktaları fark etmenizi sağlar.`},
     {ic:'👍', html:`<strong>Hızlı işaretler:</strong> Bir adım tamamlandığında başparmak işareti, emoji veya tepki kullanmalarını isteyin. Böylece tüm grubun durumunu bir bakışta görebilirsiniz.`},
     {ic:'⏳', html:`<strong>Yanıt vermeleri için zaman tanıyın.</strong> Bir soru sorduktan sonra kendiniz cevap vermeden veya başka bir öğrenciye söz vermeden önce beşe kadar sayın.`},
     {ic:'📖', html:`<strong>Bildikleri kelimeleri kullanın.</strong> Yeni terimleri ilk kez kullandığınızda açıklayın ve günlük yaşamlarından bir örnek verin.`}
   ])}
   ${dimTabs([
     {ic:'🧒', title:'6–8 yaş',
      intro:'Kısa adımlar, bolca gösterim ve çok az kelime kullanın.',
      tips:[
       {ic:'👀', html:`Öğrenciler denemeden önce <strong>her adımı kendi ekranınızda gösterin</strong> ve her adımın yalnızca tek bir işlem içermesine dikkat edin.`},
       {ic:'🔤', html:`<strong>Bazı çocuklar hâlâ okumayı öğreniyor olabilir.</strong> Talimatları sesli okuyun; uzun metinler yerine simgeler, renkler ve görsel işaretler kullanın.`},
       {ic:'🧸', html:`<strong>Günlük hayattan benzetmeler:</strong> <em>“Döngü, dişlerini fırçalamak gibidir: aynı hareketi tekrar tekrar yaparsın.”</em>`},
       {ic:'🎉', html:`<strong>Öğrencilerin konuyu anlayıp anlamadığını sık sık kontrol edin</strong> ve tamamladıkları her küçük adımı kutlayın.`}
      ]},
     {ic:'🧑', title:'9–11 yaş',
      intro:'Anlayıp anlamadıklarını kontrol ettiğiniz sürece kısa bir adım dizisini takip edebilirler.',
      tips:[
       {ic:'📋', html:`<strong>İki veya üç adımı bir liste hâlinde sohbete yazın.</strong> Böylece öğrenciler ihtiyaç duyduklarında bu listeye tekrar bakabilir.`},
       {ic:'🗣️', html:`Başlamadan önce <strong>ne yapacaklarını kendi cümleleriyle açıklamalarını isteyin.</strong>`},
       {ic:'🔍', html:`Ekranlarını yalnızca dersin sonunda değil, <strong>her adımdan sonra kontrol edin.</strong>`},
       {ic:'🧩', html:`<strong>Yeni terimleri,</strong> kullandıkları oyunlardan veya uygulamalardan tanıdıkları örneklerle açıklayın.`}
      ]},
     {ic:'🧑‍🎓', title:'12 yaş ve üzeri',
      intro:'Daha fazla bağımsızlık tanıyın ancak sessizliği konuyu anlamakla karıştırmayın.',
      tips:[
       {ic:'🧠', html:`<strong>Sadece nasıl yapılacağını değil, neden yapıldığını da açıklayın.</strong> Daha büyük yaştaki öğrenciler, bir etkinliğin arkasındaki mantığı anladıklarında derse daha fazla katılım gösterirler.`},
       {ic:'🗳️', html:`<strong>Anonim kontrol yöntemleri kullanın</strong> (anket veya tepki). Ergenlik çağındaki öğrenciler, arkadaşlarının önünde “Anlamadım” demeyi pek tercih etmez.`},
       {ic:'🔒', html:`Öğrencilerin başkaları tarafından görülmeden soru sorabilmeleri için <strong>özel sohbet üzerinden soru sorma seçeneği sunun.</strong>`},
       {ic:'🚀', html:`<strong>Konuyu anladığını gösteren öğrencilerle daha hızlı ilerleyin</strong> ve diğer öğrencileri geride bırakmadan onlara ek bir meydan okuma sunun.`}
      ]}
   ],'✅ İşte üç yaş grubu.')}
  `},
  {t:'🗣️ İletişimde sabırlı olmak — kaçınılması gereken ifadeler ve bunların yerine kullanılabilecek cümleler', html:`
   <div class="card"><p>Öğrenciler, onlara ne anlattığınızdan çok, kendilerini nasıl hissettirdiğinizi hatırlar. Sabırsızca söylenen tek bir cümle, bir çocuğun soru sormayı bırakmasına neden olabilir. Aileler de tüm kursu <em>“Eğitmenin hiç sabrı yok”</em> şeklinde değerlendirebilir. Yorgun veya aceleci olduğumuzda bu tür ifadelere başvurmamız kolaydır. Bu ifadeleri tanıyın ve yerlerine kullanabileceğiniz alternatifleri hazır bulundurun:</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>🚫 Şunu söylemek yerine…</th><th>✅ Şunu söylemeyi deneyin…</th></tr>
    <tr><td><em>“Bunu zaten açıkladım.”</em></td><td><em>“İstersen başka bir şekilde göstereyim.”</em></td></tr>
    <tr><td><em>“Bu çok kolay.”</em></td><td><em>“Bu biraz pratik gerektiriyor. Hadi birlikte yapalım.”</em></td></tr>
    <tr><td><em>“Acele et, hepimiz seni bekliyoruz.”</em></td><td><em>“Acele etme. Bu sırada diğerleri 2. etkinliği deneyebilir.”</em></td></tr>
    <tr><td><em>“Şimdi olmaz.”</em> (Elini kaldıran bir öğrenciye)</td><td><em>“Seni gördüm, Leyla. Sıradaki sensin.”</em></td></tr>
    <tr><td><em>“Bak, diğer herkes yapabildi.”</em></td><td><em>“İlk kısmı zaten doğru yaptın. Şimdi bir sonraki adıma bakalım.”</em></td></tr>
    <tr><td><em>“Bu yanlış.”</em></td><td><em>“Neredeyse oldu! Bu satırı değiştirirsen ne olur?”</em></td></tr>
   </table></div>
   ${co('co-idea','⚖️',`<p><strong>Sabırlı olmak aynı zamanda adil davranmak demektir.</strong> İlginizi tüm öğrencilere eşit şekilde dağıtın: söz sırasını değiştirin, farklı öğrencilere söz verin ve daha yavaş ilerleyen öğrencilerin durumunu hızlı ilerleyenler kadar sık kontrol edin. Eğitmenin yalnızca “başarılı” öğrencilerle ilgilendiğini düşünen bir çocuk çaba göstermeyi bırakabilir.</p>`)}
  `},
  {t:'💌 Yalnızca kötü haberler için değil, ilginizi her zaman gösterin', html:`
   <div class="card"><p>Sizden yalnızca bir şeyler ters gittiğinde haber alan bir veli, mesajlarınızı sorunlarla ilişkilendirmeye başlar. Yalnızca endişeleri bildirmek için değil, iyi bir şeyi kutlamak için de mesaj gönderin.</p></div>
   ${co('co-star','⭐',`<p>Bu tek alışkanlık — öğrencinin iyi yaptığı bir şey hakkında, kimse istemeden bir kez yazmak — ailenin bundan sonra gönderdiğiniz her şeyi nasıl okuyacağını değiştirir.</p>`)}
  `}
 ],
 ix:{
  title:'Sosyal Beceriler — modül kontrolü',
  instr:'Bir sonraki modülün kilidini açmak için %70 almanız gerekir.',
  items:[
   {type:'choice', prompt:'Bir öğrenci ilk açıklamanızı takip edemiyor. Burada bilişsel esneklik nasıl görünür?', opts:['Aynı açıklamayı daha yavaş tekrarlamak','Devam edip dersin sonunda konuya geri dönmek','Yaklaşımı değiştirmek — farklı bir açı, bir gösterim, daha küçük bir parça'], correct:2, fb:'Esneklik, yaklaşımı yalnızca tekrarlamak değil, değiştirmek demektir.'},
   {type:'sort', prompt:'Hazine mi, çöp mü? Bu yapıcı bir geri bildirim mi?', card:'“Döngüyü kendi başına çalıştırdın — aynı fikri bir sonraki bölüme de uygulamayı dene.”', zones:[{label:'💎 Hazine — yapıcı', fb:'Doğru — neyin işe yaradığı konusunda somuttur ve bir sonraki adımı gösterir.'},{label:'🗑️ Çöp — genel geçer', fb:'Tam değil — bu geri bildirim öğrencinin tam olarak ne yaptığını ve sırada ne deneyeceğini söylüyor. Bu yapıcıdır.'}], correctZone:0},
   {type:'sort', prompt:'Hazine mi, çöp mü? Bu yapıcı bir geri bildirim mi?', card:'“Bugün hepiniz harikaydınız!”', zones:[{label:'💎 Hazine — yapıcı', fb:'Tam değil — samimi bir cümle, ama kimseye neyi tekrar edeceğini veya neyin üzerine inşa edeceğini söylemiyor.'},{label:'🗑️ Çöp — genel geçer', fb:'Doğru — samimi, ama herkese uyar. Gerçekte neyin iyi yapıldığını söyleyin.'}], correctZone:1},
   {type:'choice', prompt:'Bir veliye neden yalnızca sorunlar hakkında değil, iyi bir şey hakkında da mesaj göndermelisiniz?', opts:['Veliler bunu bir formalite olarak bekler','Ailenin bundan sonra gönderdiğiniz her şeyi nasıl okuyacağını değiştirir','Yalnızca öğrencinin notları düşükken gereklidir'], correct:1, fb:'Kimse istemeden gönderilen olumlu mesajlar, ileride daha zor konuşmaları kolaylaştıran güveni oluşturur.'},
   {type:'choice', prompt:'7 yaşındaki bir öğrenci grubuna bir adımı açıkladınız ve “Sorusu olan var mı?” diye sordunuz. Kimse cevap vermedi. Şimdi ne yapmalısınız?', opts:['Devam edin: Sessizlik, konuyu anladıkları anlamına gelir.','Anlayıp anlamadıklarını kontrol edin: “Ekranınızı bana gösterin” veya “İlk olarak ne yapacaksınız?” diye sorun ve zorlanan öğrencilere adımı yeniden gösterin.','Sonraki adıma zaman kalması için aynı açıklamayı daha hızlı tekrarlayın.'], correct:1, fb:'Sessizlik, özellikle küçük yaştaki çocukların konuyu anladığı anlamına gelmez. “Bana göster” gibi hızlı bir kontrol, devam etmeden önce öğrencilerin kafasının karıştığı noktaları fark etmenizi sağlar.'},
   {type:'sort', prompt:'Hazine mi, çöp mü? Bu sabırlı bir yanıt mı?', card:'Bir öğrenci aynı soruyu ikinci kez soruyor. Siz de “Bunu zaten açıkladım” diyorsunuz.', zones:[{label:'💎 Hazine — sabırlı', fb:'Tam olarak değil. Bu yanıt, öğrencinin konuyu zaten anlamış olması gerektiğini düşündürür. Birçok çocuk böyle bir cevap duyduktan sonra soru sormayı bırakır.'},{label:'🗑️ Çöp — sabırsız', fb:'Doğru! Bunun yerine “İstersen başka bir şekilde göstereyim” demeyi deneyin. Aynı sorunun ikinci kez sorulması, ilk açıklamanın yeterince anlaşılır olmadığını gösterir.'}], correctZone:1}
  ]
 }
},
{id:'professional', numLabel:'Modül 4', emoji:'🧱', color:'var(--coral)',
 title:'Güvenilirlik ve Profesyonel Sınırlar',
 desc:'Derslere zamanında başlamak ve dersin tamamını gerçekleştirmek, bir ders planlandığı şekilde yapılamadığında ne yapılacağını bilmek, bir grubu devralmak ve öğrencileri, aileleri ve sizi koruyan profesyonel sınırları gözetmek.',
 obj:'Derslere zamanında başlamak ve dersin tamamını gerçekleştirmek, bir dersin ertelenmesi gerektiğinde kararı kimin verdiğini bilmek, bir grubu sorunsuz şekilde devralmak ve platformlar, iletişim, dikkat, kamera ve gizlilikle ilgili profesyonel sınırları korumak.',
 sections:[
  {t:'⏰ Her zaman zamanında — dersin tamamı boyunca', html:`
   <div class="card"><p>Bir aile için ders, ücretini ödediği ve günlük programını buna göre düzenlediği bir zaman dilimidir. Derse on dakika geç başlayan, planlanmamış bir mola veren veya dersi erken bitiren bir eğitmen, ailelerin içerikten çok önce fark ettiği ilk şeydir. Güvenilirlik, ders kalitesinin bir parçasıdır.</p></div>
   ${rclock([
     {ic:'🧰', when:'15 dakika önce', t:'Önceden hazır olun', d:'Dersten önce platforma katılın, internet bağlantınızı, kameranızı ve mikrofonunuzu kontrol edin. BO’da grubu ve dersi açın.'},
     {ic:'🟢', when:'Başlangıç saati', t:'Derse zamanında başlayın', d:'İlk dakikalar hazırlık yapmak için değil, derse ısınma etkinliğiyle başlamak içindir.'},
     {ic:'🎯', when:'Ders sırasında', t:'Dersin tamamı', d:'Planlanan tüm aşamaları gerçekleştirin. Planlanmamış molalar vermeyin ve ders dışındaki işlerle ilgilenmeyin.'},
     {ic:'🏁', when:'Bitiş saati', t:'Dersi zamanında bitirin', d:'Dersi asla erken bitirmeyin. Kapanış ve bir sonraki dersin ön izlemesi de dersin bir parçasıdır.'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Geç mi kalıyorsunuz veya bağlantı kuramıyor musunuz?</strong> Hemen Takım Liderinize haber verin. Öğrencileri hiçbir açıklama yapmadan bekletmeyin. Geç başlayan bir ders, birkaç dakika erken bitirilerek telafi edilmiş olmaz. Takım Liderinize haber verin ki aileye ne sunulacağına karar verebilsin.</p>`)}
  `},
  {t:'📅 Bir ders planlandığı şekilde gerçekleştirilemediğinde', html:`
   <div class="card"><p>Hastalıklar ve acil durumlar yaşanabilir. Ailenin bu durumu anlayışla karşılayıp karşılamayacağını belirleyen şey, <strong>ne kadar erken bilgilendirildiği ve sonrasında ne yapıldığıdır</strong>. Dersten otuz dakika önce gönderilen bir mesaj veya eğitmenin derse hiç katılmaması, ailelerin <em>“düzensizlik”</em> olarak tanımladığı durumlardır. Çoğu zaman ailelerin geri ödeme talep etmeye karar verdiği an da budur.</p></div>
   ${doavoid(
     ['Dersi gerçekleştiremeyeceğinizi <strong>öğrendiğiniz anda</strong> Takım Liderinize haber verin. Ne kadar erken bilgi sahibi olursa o kadar fazla seçeneği olur (yerinize başka bir eğitmen ayarlamak veya yeni bir tarih belirlemek gibi).','Aileye gönderilecek mesaj da dahil olmak üzere Takım Liderinizle kararlaştırılan planı takip edin.','Kararlaştırılan ders saatine her hafta uyun.','Bir ders yapılamadıysa telafi planına Takım Liderinizin karar vermesini bekleyin.'],
     ['Dersi kendi başınıza iptal etmek veya saatini değiştirmek. Eğitmenler dersleri yeniden planlayamaz.','Takım Liderinize danışmadan aileyi son dakikada doğrudan bilgilendirmek.','Telafi dersi veya tazminat sözü vermek.','“Sadece bu seferlik” olsa bile dersi kararlaştırılandan farklı bir saatte gerçekleştirmek.']
   )}
  `},
  {t:'🤝 Bir grubu devralmak', html:`
   <div class="card"><p>Aileler eğitmen değişikliklerini fark eder. Özellikle kendilerine önceden bilgi verilmediğinde veya her yeni eğitmen her şeye sıfırdan başladığında bu durum daha belirgin olur. Bir grubu devralıyorsanız değişikliğin yeniden başlangıç gibi değil, önceki sürecin devamı gibi hissettirmesini sağlayın.</p></div>
   ${stepFlow([
     {ic:'📖', label:'İlk dersinizden önce BO’daki yorumları okuyun ve grubun ilerlemesini kontrol edin.'},
     {ic:'👋', label:'Öğrencilere kendinizi tanıtın. Takım Liderinizle kararlaştırıldığı şekilde ailelere de kendinizi tanıtın.'},
     {ic:'🔁', label:'Öğrencilerin alışık olduğu rutinleri koruyun: kurallar, dersin yapısı ve çalışmalarını paylaşma şekilleri.'},
     {ic:'💬', label:'Öğrencilere şimdiye kadarki derslerde en çok neyi sevdiklerini sorun.'}
   ])}
  `},
  {t:'🧱 Profesyonel sınırlar', html:`
   <div class="card"><p>Bazı durumlar doğrudan öğretme becerileriyle ilgili değildir ancak ailelerin güvenini aynı hızla zedeleyebilir. Her başlığa dokunun:</p></div>
   ${symCards([
     {ic:'🏷️', title:'Ders sırasında ve dışında yalnızca Kodland',
      do:`Yalnızca Kodland’ın kursları ve araçları hakkında konuşun. Platformda veya kursta bir sorun fark ederseniz Takım Liderinize bildirin.`,
      avoid:`Başka bir platformu, okulu veya kendi özel derslerinizi tanıtmak · öğrencilerin veya ailelerin önünde platform ya da kurs hakkında olumsuz konuşmak.`},
     {ic:'📵', title:'Yalnızca resmî iletişim kanalları üzerinden iletişim',
      do:`Ailelerle Kodland dersleri için bölgenizde kullanılan iletişim kanalları üzerinden konuşun. Ders dışında iletişim kurmanız gereken kişi çocuk değil, ebeveyndir.`,
      avoid:`Öğrencilerle iletişim kurmak için kişisel sosyal medya hesaplarını veya özel sohbetleri kullanmak · öğrencileri dersten sonra oyun oynamaya ya da çevrim içi buluşmaya davet etmek · kişisel iletişim bilgilerinizi paylaşmak.`},
     {ic:'📷', title:'Kamera ve gizlilik',
      do:`Öğrencileri kameralarını açmaya nazikçe bir kez davet edin ve verdikleri yanıtı kabul edin. Bazı öğrenciler kültürel, dinî veya kişisel nedenlerle kameralarını kapalı tutabilir. Bunun yerine sohbet, tepkiler veya ekran paylaşımı yoluyla katılmalarını önerin.`,
      say:`<em>“Hiç sorun değil! Sohbet üzerinden veya ekranını paylaşarak derse katılabilirsin.”</em>`,
      avoid:`Israr etmek veya grubun önünde nedenini sormak · öğrencilerin ekran görüntülerini ya da fotoğraflarını almak · öğrencilerin fotoğraflarını veya kişisel bilgilerini paylaşmak.`},
     {ic:'🗨️', title:'Yaşa uygun konuşmalar',
      do:`Günlük sohbetleri hafif ve grubun yaşına uygun konularda tutun. Hassas bir konu gündeme gelirse sakin bir şekilde konuşmayı derse yönlendirin.`,
      avoid:`Öğrencilerin önünde siyaset veya din tartışmaları yapmak, yetişkinlere yönelik konular ya da kişisel sorunlar hakkında konuşmak.`}
   ])}
   ${chatMock({
     name:'Veli', sub:'çevrim içi', avatar:'👨', time:'19:40',
     msgs:[`Merhaba! Oğlum sizi gerçekten çok seviyor. Kodland dışında ona özel ders verebilir misiniz? Ücreti doğrudan size öderdik, bizim için daha uygun olurdu.`],
     title:'Nasıl yanıt vermelisiniz?',
     text:'Aile sizden memnun ve profesyonel sınırları aşan bir istekte bulunuyor. Her yanıta dokunarak neler olacağını görün.',
     opts:[
      {t:`“Tabii! Numaranızı gönderin, detayları ayarlarız.”`, ok:false, fb:`Bu, öğrenciyi Kodland dışına çıkarır ve görevinizin profesyonel sınırlarını ihlal eder. Kodland’daki bir aileyle asla özel ders konusunda anlaşmayın.`},
      {t:`“Çok teşekkür ederim! Derslerimizden keyif almasına gerçekten çok sevindim! Ancak kendisine yalnızca Kodland üzerinden ders verebilirim. Daha fazla ders almak veya farklı bir ders formatı tercih etmek isterseniz Müşteri Hizmetleri ekibi size mevcut seçenekler konusunda yardımcı olabilir.”`, ok:true, fb:`Bu yanıt nazik, açık ve profesyoneldir. Aileye teşekkür eder, profesyonel sınırlarınızı korur ve onları seçenekler sunabilecek doğru ekibe yönlendirirsiniz. Ardından bu isteği Takım Liderinize bildirin.`},
      {t:`“Bu yasak. Lütfen bir daha benden böyle bir şey istemeyin.”`, ok:false, fb:`Sınır koymanız doğru ancak kullandığınız ton uygun değil. Aile bu isteği bir iltifat olarak dile getirdi. Nazikçe reddedin ve aileyi Müşteri Hizmetleri ekibine yönlendirin.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Güvenilirlik ve profesyonel sınırlar — modül kontrolü',
  instr:'Her durumu sınıflandırın ve en doğru davranışı seçin. Son kontrol listesinin kilidini açmak için %70 almanız gerekir.',
  items:[
   {type:'sort', prompt:'Uygun mu, yoksa profesyonel sınırı aşıyor mu?', card:'Ders sırasında öğrenciler çalışırken başka bir grubun velisinden gelen mesaja cevap veriyorsunuz.', zones:[{label:'✅ Uygun', fb:'Tam olarak değil. Ders süresi bu öğrencilere aittir. Diğer ailelerden gelen mesajlar ders bittikten sonra yanıtlanabilir.'},{label:'🚫 Sınırı aşıyor', fb:'Doğru! Ders sırasında dikkatiniz tamamen grubun üzerinde olmalıdır. Aileler bunu fark eder ve “Eğitmen dersle ilgilenmiyordu” şeklinde yorumlayabilir.'}], correctZone:1},
   {type:'sort', prompt:'Uygun mu, yoksa profesyonel sınırı aşıyor mu?', card:'Bir öğrenci dinî nedenlerle kamerasını kapalı tutuyor. Sohbet ve ekran paylaşımı yoluyla derse katılmasına izin veriyorsunuz.', zones:[{label:'✅ Uygun', fb:'Doğru! Öğrenciyi nazikçe davet edin, kararına saygı gösterin ve derse katılması için başka yollar sunun. Asla ısrar etmeyin.'},{label:'🚫 Sınırı aşıyor', fb:'Tam olarak değil. Öğrencinin nedenlerine saygı göstermek ve başka katılım seçenekleri sunmak yapılması gereken doğru şeydir.'}], correctZone:0},
   {type:'choice', prompt:'Hastalanarak uyanıyorsunuz ve bu akşamki dersi gerçekleştiremeyeceğinizi biliyorsunuz. Ne yapmalısınız?', opts:['Dersi iptal etmek için dersten 30 dakika önce aileye mesaj gönderirsiniz.','Yerine başka bir eğitmen ayarlayabilmesi veya yeni bir tarih belirleyebilmesi için hemen Takım Liderinize haber verirsiniz. Aileyi bilgilendirme konusunda onun planını takip edersiniz.','Daha kısa bir ders yapar ve erken bitirirsiniz.'], correct:1, fb:'Eğitmenler dersleri kendi başlarına iptal etmez veya yeniden planlamaz. Takım Lideriniz ne kadar erken bilgilendirilirse o kadar fazla seçeneği olur. Böylece aileye son dakikada değil, önceden hazırlanmış bir plan doğrultusunda bilgi verilir.'},
   {type:'sort', prompt:'Uygun mu, yoksa profesyonel sınırı aşıyor mu?', card:'Ders bittikten sonra iki öğrenciyi çevrim içi olarak birlikte Roblox oynamaya davet ediyorsunuz.', zones:[{label:'✅ Uygun', fb:'Tam olarak değil. Öğrencilerle ders dışında iletişim kurmak, özellikle özel olarak oyun oynamak, ne kadar arkadaşça görünürse görünsün profesyonel sınırları aşar.'},{label:'🚫 Sınırı aşıyor', fb:'Doğru! Ders dışında iletişim ebeveynlerle ve resmî kanallar üzerinden kurulmalıdır. Öğrencilerle özel iletişim kurmayın veya onlarla oyun oynamayın.'}], correctZone:1},
   {type:'choice', prompt:'Başka bir eğitmenden bir grubu devralıyorsunuz. İlk dersinizden önce ne yapmalısınız?', opts:['Her öğrencinin seviyesini öğrenmek için kursa 1. dersten yeniden başlamak.','Özel bir şey yapmamak; öğrenciler size alışacaktır.','BO’daki yorumları okumak ve grubun ilerlemesini kontrol etmek, kendinizi nasıl tanıtacağınızı planlamak ve grubun alışık olduğu rutinleri korumak.'], correct:2, fb:'Süreklilik, eğitmen değişikliğinin öğrenciler için güvenli ve sorunsuz bir deneyim olmasını sağlar. Grubun geçmişini öğrenin, kendinizi tanıtın ve öğrencilerin alışık olduğu rutinleri koruyun.'}
  ]
 }
},
{id:'checklist', numLabel:'Son Kontrol Listesi', emoji:'✅', color:'var(--coral)',
 title:'Son Kontrol Listesi',
 desc:'Burada test yok — mini eğitimi kapatmadan önce temel noktaların bir özeti.',
 obj:'Aşağıdaki kontrol listesini gözden geçirin. Bu modül notlandırılmaz — okuyun, ardından mini eğitimi bitirin.',
 sections:[
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   ${numlist([
     'Talebi öğrendiğim gün BO’da bir yorum bıraktım ve Takım Liderimi bilgilendirdim',
     'Bu öğrenciyle yaptığım bir sonraki ders gerçek bir kazanma girişimiydi — gerçek bir söz hakkı, görünür bir başarı, özel ilgi ve talepten hiç bahsetmeden',
     'Onayı asla teyit etmedim ve herhangi bir tutar konuşmadım — güvenli tek cümleyi kullandım ve gerisini Müşteri Hizmetleri’ne bıraktım'
   ])}
  `},  {t:'🌱 Her derste', html:`
   ${numlist([
     'Her seferinde aynı ders yapısını uyguluyorum; böylece öğrenciler ritmi biliyor ve enerjilerini öğrenmeye harcıyor',
     'Dersi dört aşamayla açıyorum: bir Isınma, öğrencinin kendi sözleriyle önceki dersin tekrarı, gerçek bir Ödev Kontrolü ve açıkça ifade edilmiş bir Dersin Hedefi',
     'Teori ve Pratik bölümünde küçük parçalar hâlinde öğretiyor, önce kendi ekranımda gösteriyor ve pratik süresini koruyorum',
     'Dersi ayna aşamalarla kapatıyorum: öğrencinin kendi sözleriyle bir Ders Özeti, net ödev talimatları, Sonraki Dersin Ön İzlemesi ve ürettikleri şeyi kutlayan bir Kapanış',
     'Kalite değerlendirmelerimi aşama aşama okuyor ve aksayan aşamayı bir sonraki dersimde düzeltiyorum',
     'Kılavuzu ve materyalleri otuz dakika önce değil, bir gün önce çalışıyorum — ve yalnızca adımları değil, dersin hedefini de biliyorum',
     'Kılavuzu ve sunumu BO’dan açıyor ve kurs ID’sinin öğrencilerimin kayıtlı olduğu kursla eşleştiğini kontrol ediyorum',
     'Bir eksik bulduğumda kursumun Slack kanalına, Bölge Mentoruma veya Takım Liderime soruyorum — ve içerik hatalarını BO’daki 🐞 simgesiyle bildiriyorum',
     'İlk açıklamam yerine oturmadığında onu tekrarlamak yerine yaklaşımı değiştiriyorum — farklı bir açı, bir gösterim, daha küçük bir parça',
     'Öğrencilerimi tanıyor ve hataların yargılanmadığı güvenli bir alan oluşturuyorum',
     'Somut ve yapıcı geri bildirim veriyorum: neyin işe yaradığını ve sırada ne deneneceğini — asla sadece “aferin” demiyorum',
     'Ailelere yalnızca bir şeyler ters gittiğinde değil, iyi haberler için de mesaj gönderiyorum',
     'Her seferinde tek bir yönerge veririm ve “Bana göster” veya “İlk olarak ne yapacaksın?” gibi sorularla konunun anlaşılıp anlaşılmadığını kontrol ederim. Sessizlik, anlaşıldığı anlamına gelmez.',
     'Dersin temposunu ve kullandığım kelimeleri öğrencilerin yaşına göre ayarlarım: küçük yaştaki öğrenciler için çok kısa adımlar ve gösterimler kullanırım; yeni terimleri örneklerle açıklarım.',
     '“Bunu zaten açıkladım” gibi sabırsız ifadelerden kaçınırım ve gruptaki tüm öğrencilere eşit ilgi gösteririm.',
     'Dersten 15 dakika önce bağlanırım, zamanında başlarım, dersin tamamını gerçekleştiririm ve asla erken bitirmem.',
     'Bir dersi gerçekleştiremeyeceksem bunu öğrenir öğrenmez Takım Liderime haber veririm. Kendi başıma dersi asla iptal etmem, saatini değiştirmem veya telafi dersi sözü vermem.',
     'Bir grubu devraldığımda önce BO’daki yorumları okurum, kendimi tanıtırım ve grubun alışık olduğu rutinleri korurum.',
     'Profesyonel sınırları korurum: yalnızca Kodland platformlarını kullanırım, resmî iletişim kanalları üzerinden iletişim kurarım, ders boyunca tüm dikkatimi öğrencilere veririm ve her öğrencinin kamera kullanımıyla ilgili kararına ve gizliliğine saygı gösteririm.'
   ])}
  `},  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Mini eğitimin tamamı bu kadar.</strong> Hazır olduğunuzda devam edin — ardından ödevi kapatmak için LMS’deki DST’yi tamamlayın.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
