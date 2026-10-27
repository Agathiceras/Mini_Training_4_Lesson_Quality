/* Mini_Training_4_Lesson_Quality - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='tr';
const CONTENT = {
  flag:'🇹🇷', dir:'ltr',
  ui:{
    pageTitle:"Mini Eğitim · Ders Kalitesi — Kodland Eğitmen Eğitimi",
    logoSub:'Eğitmen Gelişim Departmanı',
    heroEyebrow:"🎯 Mini Eğitim",
    heroTitle:"<span class=\"h-pill\">Ders Kalitesine</span> Dürüst Bir Bakış",
    heroIntro:"Bu eğitimi, dersin kalitesiyle ilgili sorunlar nedeniyle iade talep eden öğrencileriniz olduğu için alıyorsunuz. Burada, bir eğitmen olarak neler yapabileceğinizi ve bu tür durumları nasıl yöneteceğinizi göstereceğiz.",
    heroWork:"5 kısa modülü tamamlayın. Bir sonraki modülün kilidini açmak için her modül kontrolünde en az %70 almanız gerekir. Toplam süre yaklaşık 25–30 dakikadır.",
    startBtn:"🚀 Eğitimi Başlat",
    pathLabel:'Öğrenme yolunuz',
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
 desc:'Konuya hâkimiyetin ötesinde, bir dersi gerçekten içinde olmaktan keyif alınan bir ders hâline getiren alışkanlıklar.',
 obj:'Konu bilgisini gerçekten iyi bir derse dönüştüren sosyal becerileri uygulamak: bilişsel esneklik, öğrencilerinizi tanımak, hata yapmanın güvenli olduğu bir ortam, motivasyon ve somut geri bildirim.',
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
  {t:'💌 Yalnızca kötü haberler için değil, ilginizi her zaman gösterin', html:`
   <div class="card"><p>Sizden yalnızca bir şeyler ters gittiğinde haber alan bir veli, mesajlarınızı sorunlarla ilişkilendirmeye başlar. Yalnızca endişeleri bildirmek için değil, iyi bir şeyi kutlamak için de mesaj gönderin.</p></div>
   ${co('co-star','⭐',`<p>Bu tek alışkanlık — öğrencinin iyi yaptığı bir şey hakkında, kimse istemeden bir kez yazmak — ailenin bundan sonra gönderdiğiniz her şeyi nasıl okuyacağını değiştirir.</p>`)}
  `}
 ],
 ix:{
  title:'Sosyal Beceriler — modül kontrolü',
  instr:'Son kontrol listesinin kilidini açmak için %70 gerekir.',
  items:[
   {type:'choice', prompt:'Bir öğrenci ilk açıklamanızı takip edemiyor. Burada bilişsel esneklik nasıl görünür?', opts:['Aynı açıklamayı daha yavaş tekrarlamak','Devam edip dersin sonunda konuya geri dönmek','Yaklaşımı değiştirmek — farklı bir açı, bir gösterim, daha küçük bir parça'], correct:2, fb:'Esneklik, yaklaşımı yalnızca tekrarlamak değil, değiştirmek demektir.'},
   {type:'sort', prompt:'Hazine mi, çöp mü? Bu yapıcı bir geri bildirim mi?', card:'“Döngüyü kendi başına çalıştırdın — aynı fikri bir sonraki bölüme de uygulamayı dene.”', zones:[{label:'💎 Hazine — yapıcı', fb:'Doğru — neyin işe yaradığı konusunda somuttur ve bir sonraki adımı gösterir.'},{label:'🗑️ Çöp — genel geçer', fb:'Tam değil — bu geri bildirim öğrencinin tam olarak ne yaptığını ve sırada ne deneyeceğini söylüyor. Bu yapıcıdır.'}], correctZone:0},
   {type:'sort', prompt:'Hazine mi, çöp mü? Bu yapıcı bir geri bildirim mi?', card:'“Bugün hepiniz harikaydınız!”', zones:[{label:'💎 Hazine — yapıcı', fb:'Tam değil — samimi bir cümle, ama kimseye neyi tekrar edeceğini veya neyin üzerine inşa edeceğini söylemiyor.'},{label:'🗑️ Çöp — genel geçer', fb:'Doğru — samimi, ama herkese uyar. Gerçekte neyin iyi yapıldığını söyleyin.'}], correctZone:1},
   {type:'choice', prompt:'Bir veliye neden yalnızca sorunlar hakkında değil, iyi bir şey hakkında da mesaj göndermelisiniz?', opts:['Veliler bunu bir formalite olarak bekler','Ailenin bundan sonra gönderdiğiniz her şeyi nasıl okuyacağını değiştirir','Yalnızca öğrencinin notları düşükken gereklidir'], correct:1, fb:'Kimse istemeden gönderilen olumlu mesajlar, ileride daha zor konuşmaları kolaylaştıran güveni oluşturur.'}
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
     'Ailelere yalnızca bir şeyler ters gittiğinde değil, iyi haberler için de mesaj gönderiyorum'
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
