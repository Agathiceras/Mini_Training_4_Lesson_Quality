/* Mini_Training_4_Lesson_Quality - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pl';
const CONTENT = {
  flag:'🇵🇱', dir:'ltr',
  ui:{
    heroCard1:"<b>W swoim tempie.</b> Twój postęp zapisuje się w tej przeglądarce.",
    heroCard2:"<b>Z ćwiczeniem praktycznym.</b> Każdy moduł kończy się krótkim sprawdzianem.",
    pbLabel:'ukończonych modułów',
    tapOpen:'Kliknij, aby otworzyć',
    tapFlip:'Kliknij, aby odwrócić',
    lblSee:'Co widzisz',
    lblDo:'Co robisz',
    lblSay:'Co możesz powiedzieć',
    lblReport:'Gdzie zgłosić',
    lblAvoid:'Unikaj',
    lblTip:'Wskazówka',
    stepOf:'Krok {i} z {n}',
    next:'Dalej',
    pageTitle:"Miniszkolenie · Jakość lekcji — szkolenie nauczycieli Kodland",
    logoSub:'Dział Rozwoju Nauczycieli',
    heroEyebrow:"🎯 Miniszkolenie",
    heroTitle:"Szczere spojrzenie na <span class=\"h-pill\">jakość lekcji</span>",
    heroIntro:"Otrzymujesz to szkolenie, ponieważ masz uczniów, którzy poprosili o zwrot pieniędzy z powodu jakości zajęć. Pokażemy ci, co możesz zrobić jako nauczyciel i jak radzić sobie w takich sytuacjach.",
    heroWork:"Ukończ 6 krótkich modułów. Aby odblokować kolejny moduł, musisz uzyskać co najmniej 70% w teście z każdego modułu. Całość zajmuje około 35–40 minut.",
    startBtn:"🚀 Rozpocznij szkolenie",
    pathLabel:'Twoja ścieżka nauki',
    devTitle:'Dev: odblokuj wszystkie moduły do przeglądu',
    backToPath:'Powrót do ścieżki',
    modulesPassed:'Zaliczone moduły: {done} / {total}',
    moduleN:'Moduł {n}',
    of:'z',
    locked:'🔒 Zablokowany',
    passedBadge:'✅ Zaliczony · {pct}%',
    reviewedBadge:'✅ Przejrzany',
    startBadge:'▶ Rozpocznij',
    reviewBadge:'▶ Przejrzyj',
    objective:'Cel',
    startCheck:'▶ Rozpocznij sprawdzian modułu',
    finishBtn:'▶ Ukończ miniszkolenie',
    doneBack:'✓ Gotowe — powrót do ścieżki',
    ixBadge:'📋 Sprawdzian modułu — 70%, aby odblokować kolejny moduł',
    ixItemBadge:'📋 Sprawdzian modułu — pytanie {i} z {n}',
    scoreSoFar:'Dotychczasowy wynik: {c} / {t}',
    continue:'Dalej →',
    sortWrong:'Nie do końca — poprawna odpowiedź to „{label}”.',
    resPassed:'Moduł zaliczony!',
    resFailed:'Jeszcze nie tym razem',
    resUnlocked:"Udało ci się odblokować kolejny moduł.",
    resDone:"Udało ci się ukończyć to miniszkolenie.",
    resNeed:'Aby odblokować kolejny moduł, potrzebujesz 70%. Przejrzyj powyższą część i spróbuj ponownie.',
    resContinue:'Przejdź do ścieżki nauki',
    resFinish:'Dalej',
    resBack:'Powrót do ścieżki',
    resReview:'Przejrzyj ten moduł',
    doneEyebrow:'Miniszkolenie ukończone',
    doneTitle:'🎉 Gratulacje!',
    doneP1:"🎉 <strong>Gratulacje! Udało ci się ukończyć to miniszkolenie.</strong>",
    doneP2:"To już wszystko! Wróć na stronę szkolenia w LMS, która przekierowała cię do tego miniszkolenia, aby zamknąć zadanie.",
    doneP3:"👉 <strong>Jeśli bezpośrednio pod szkoleniem w LMS widnieje sprawdzian lub test, rozwiąż go i uzyskaj wynik zaliczający</strong> — w przeciwnym razie zadanie może pozostać nieukończone.",
    doneP4:'Powodzenia! ❤️',
    doneP5:'',
    devUnlockAlert:'Tryb deweloperski: wszystkie moduły zostały odblokowane do przeglądu.',
    devOn:'🔓 Tryb deweloperski WŁ. — wszystkie moduły odblokowane',
    devOff:'🔒 Tryb deweloperski WYŁ. — postęp wyczyszczony',
    devBadge:'🔓 TRYB DEWELOPERSKI',
    doLabel:'✅ Używaj zwrotów',
    avoidLabel:'🚫 Unikaj',
    noticeLabel:'Zwróć uwagę:',
    cvSee:'Co widzisz:',
    cvDo:'Co robisz:',
    dtExample:'Przykład z prawdziwych zajęć',
    dtNext:'Następnie:',
    dtDone:"✅ To już wszystkie cztery obszary. Teraz sklasyfikuj to, co widzisz.",
    tlVideoTitle:'{label} — przykład z prawdziwych zajęć',
    tlVideoMeta:'Zobacz, jak ten etap wygląda na prawdziwej lekcji'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Wprowadzenie', emoji:'🧩', color:'var(--coral)',
 title:'Dlaczego tu jesteś',
 desc:'Dlaczego ten problem zasługuje na szczerą, konkretną samoocenę — i jakie zasady obowiązują, gdy wniosek o zwrot już się pojawił.',
 obj:'Zrozumieć, że ten problem dotyczy samej lekcji, dlaczego wczesne proszenie o pomoc to właściwy ruch, a także dowiedzieć się co dokładnie robić (a czego nie robić), gdy wniosek o zwrot już się pojawił.',
 sections:[
  {t:'🪞 Ten powód najtrudniej usłyszeć', html:`
   <div class="card"><p>Ten powód oznacza, że rodzina uznała za problem <strong>samą jakość lekcji</strong> — nie dziecko, nie poziom, nie harmonogram. Trudniej to usłyszeć niż większość pozostałych powodów i łatwo wpaść w defensywę albo szukać wytłumaczeń.</p></div>
   ${co('co-idea','💡',`<p><strong>To nie jest werdykt na twój temat jako osoby.</strong> To sygnał dotyczący konkretnych, możliwych do naprawienia zachowań na konkretnych lekcjach. Nauczyciele, którzy traktują go poważnie i rzeczowo, a nie osobiście, najszybciej poprawiają sytuację.</p>`)}
   ${co('co-star','🎓',`<p><strong>Wcześnie poproś kogoś z zewnątrz o spojrzenie na twoje nauczanie.</strong> Twój mentor regionalny jest właśnie po to — prośba o informację zwrotną na temat tego, jak uczysz, to właściwy ruch, a nie znak, że coś jest z tobą nie tak.</p>`)}
  `},
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   <div class="card"><p>Wszystko powyżej dotyczy wczesnego wychwytywania problemu. Możliwe jednak, że otwierasz to szkolenie, bo rodzina <strong>już</strong> poprosiła o zwrot pieniędzy. Zasady, które znajdziesz poniżej, obowiązują bez względu na okoliczności — zacznij od ich przeczytania, a potem wykorzystaj resztę szkolenia, aby zrozumieć, co do tego doprowadziło i co wciąż możesz zrobić na swoich lekcjach.</p></div>
   ${co('co-idea','💡',`<p><strong>Sam wniosek tworzy Dział Obsługi Klienta, nie ty</strong> — na tę część nie masz wpływu. Do ciebie wciąż należy wszystko, co od teraz dzieje się na lekcji, a to naprawdę sporo.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Nie mów nic o samym wniosku</strong> — ani dziecku, ani rodzinie — chyba że Dział Obsługi Klienta wyraźnie poprosi cię o przekazanie czegoś konkretnego. Twoim zadaniem jest teraz dostosowanie lekcji, a nie rozmowa z klientami.</p>`)}
  `},
  {t:'🎯 Następna lekcja to twoja szansa na pomoc dziecku', html:`
   <div class="card"><p>Możesz nie mieć okazji, by zmienić cokolwiek innego. Potraktuj najbliższą lekcję z tym dzieckiem jako moment, który o wszystkim zdecyduje.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Daj dziecku prawdziwą okazję do działania.</strong> Nie pytanie dla zasady — stwórz autentyczny moment, w którym zostaje zauważone i odnosi sukces.`},
     {ic:'🏆', html:`<strong>Zaplanuj wczesny, widoczny sukces.</strong> Dziecko powinno wyjść z lekcji z poczuciem, że daje radę, a nie że zostaje w tyle.`},
     {ic:'👀', html:`<strong>Konkretna uwaga</strong> — niech dziecko poczuje, że widzisz, w jego pracy, coś konkretnego, a nie tylko chwalisz ogólnikowo.`},
     {ic:'🤐', html:`<strong>Ani słowa o wniosku</strong> — nawet jeśli dziecko samo o nim wspomni, ciepło zmień temat i ucz dalej.`}
   ])}
  `},
  {t:'📮 Zgłaszaj szybko i znaj jedno bezpieczne zdanie', html:`
   <div class="card"><p>O tym, że wniosek istnieje, możesz dowiedzieć się z komentarzy Działu Obsługi Klienta w profilu dziecka w BO — nie ma automatycznego systemu, który by cię o tym powiadomił. Gdy dowiesz się o sytuacji, pamiętaj, że to, co widzisz na swoich lekcjach, jest dla Działu Obsługi Klienta bardzo ważną informacją, której nie mogą zdobyć w żaden inny sposób.</p></div>
   ${numlist([
     'Tego samego dnia zostaw komentarz w BO z dokładnym opisem swoich obserwacji. Umieść tam daty i konkrety, a nie wrażenia',
     'Jeśli je znasz, zacytuj dosłownie słowa rodziny',
     'Tego samego dnia poinformuj swojego lidera zespołu',
     'Nigdy nie potwierdzaj, że zwrot został zatwierdzony, i nie rozmawiaj o żadnych kwotach'
   ])}
   ${co('co-ok','✅',`<p><strong>Zdanie, które zawsze możesz powiedzieć:</strong> <em>„Dział Obsługi Klienta zajmuje się tą sprawą”.</em> Na tym kończy się twoja część rozmowy — dalej przejmuje ją Dział Obsługi Klienta.</p>`)}
  `},
  {t:'🌱 Nie odpuszczaj później', html:`
   <div class="card"><p>Niezależnie od tego, czy wniosek zostanie wycofany, dziecko zostanie w twojej grupie, czy przejdzie do innego nauczyciela lub formatu — przez kilka kolejnych lekcji poświęcaj mu szczególną uwagę. Pomoc, która jest oferowana przez jedną lekcję, a potem wszystko po cichu wraca do normy, często w ogóle nie daje skutku.</p></div>
  `}
 ]
},
{id:'structure', numLabel:'Moduł 1', emoji:'🧭', color:'var(--coral)',
 title:'Struktura lekcji',
 desc:'Dziewięcioetapowa struktura lekcji, dzięki której zajęcia wydają się kompletne, z przykładami z prawdziwych zajęć, a także o tym, jak czytać własne oceny jakości.',
 obj:'Zrozumieć, dlaczego spójna struktura lekcji to jedna z najsilniejszych dźwigni jakości, poznać dziewięć etapów i dowiedzieć się, jak czytać oceny jakości, żeby zobaczyć dokładnie, w którym miejscu tracisz uwagę klasy.',
 sections:[
  {t:'🧭 Chodzi o konsekwencję', html:`
   <div class="card"><p>Gdy uczeń pozna twój rytm, przestaje tracić energię na zastanawianie się, „co teraz będzie?”, i zamiast tego wkłada ją w naukę. Stosuj tę samą strukturę za każdym razem, aż stanie się drugą naturą — dla ciebie i dla uczniów.</p></div>
  `},
  {t:'🌅 Początek: cztery etapy', html:`
   ${timeline([
     {ic:'👋', label:'1 · Rozgrzewka', items:['Szybkie pytanie lub małe wyzwanie, które wprowadza ucznia w „tryb lekcji” — i moment budowania społeczności.'], video:'https://drive.google.com/file/d/1fMWyd6bfCcUauqIIaNldojVuHYg6J9JR/preview'},
     {ic:'📖', label:'2 · Powtórzenie poprzedniej lekcji', items:['Krótko wróć do tego, czego uczniowie nauczyli się ostatnio — ich własnymi słowami. „Pamiętam to” buduje prawdziwą pewność siebie.'], video:'https://drive.google.com/file/d/1J1jijTw8bj8l9yw9aMNXp9zHwxEbkWbY/preview'},
     {ic:'📋', label:'3 · Sprawdzenie pracy domowej', items:['Przejrzyjcie razem pracę domową — wychwyć nieporozumienia, doceń wysiłek, pokaż, że praca jest naprawdę zauważona.'], video:'https://drive.google.com/file/d/1H2Awetu6fkoatv2RMonUeBawgK7tsR3e/preview'},
     {ic:'🎯', label:'4 · Cel lekcji', items:['Powiedz wprost, czego dotyczy dzisiejsza lekcja. Uczeń, który nie wie, „po co” jest dzisiejsza lekcja, szybko się wyłącza.'], video:'https://drive.google.com/file/d/1cuqULcb1jxkwV_uepi-dnxFdx3FB41Si/preview'}
   ])}
  `},
  {t:'🎨 Środek: teoria i praktyka', html:`
   <div class="card"><p>Najdłuższy etap, na którym nowy materiał jest omawiany i od razu wykorzystywany. Podawaj teorię w małych porcjach — jedno pojęcie, potem praca z nim w praktyce — i <strong>najpierw pokazuj</strong>: zademonstruj na swoim ekranie, zanim uczniowie spróbują na swoich. Zaciekle chroń czas na praktykę; lekcja, na której dzieci tylko patrzyły, jak pracujesz, to lekcja, na której nikt tak naprawdę nie ćwiczył.</p></div>
  `},
  {t:'🏁 Koniec: odbicie lustrzane', html:`
   <div class="card"><p>Cztery etapy zamykające odzwierciedlają etapy otwierające w odwrotnej kolejności — lekcja kończy się tak, jak się zaczęła, co daje poczucie domknięcia i rytmu.</p></div>
   ${timeline([
     {ic:'📋', label:'1 · Podsumowanie lekcji', items:['Podsumuj to, co zostało omówione, ale pozwól też uczniowi zrobić to samodzielnie — jego własne słowa pokazują, co naprawdę zostało zrozumiane.'], video:'https://drive.google.com/file/d/1jNZGDMnRYh83xGd2NVHrZTdgXLagi2GZ/preview'},
     {ic:'📖', label:'2 · Zadanie pracy domowej', items:['Krystalicznie jasne instrukcje: co i jak zrobić. Niejasna praca domowa to praca domowa, która nie zostanie zrobiona.'], video:'https://drive.google.com/file/d/1qOYvENqjiYlwRaFvDb0A7W6JYgWPCjJc/preview'},
     {ic:'▶️', label:'3 · Zapowiedź następnej lekcji', items:['Zaintryguj tym, co będzie dalej — dzięki temu uczeń pozostaje emocjonalnie zaangażowany, a nie tylko odhacza zadania z listy.'], video:'https://drive.google.com/file/d/17bE6JdZmDFJ_igrWYhc7fnpD39b-k-2K/preview'},
     {ic:'✨', label:'4 · Zakończenie', items:['Zakończ z przytupem: świętuj to, co uczeń stworzył. Ostatnie 30 sekund to właśnie to, co uczeń bierze pod uwagę, decydując, czy przyjść następnym razem.'], video:'https://drive.google.com/file/d/1OTYSh07wSosjgsHFD05YvccD3NY2CgsX/preview'}
   ])}
  `},
  {t:'📊 Jak czytać oceny jakości', html:`
   <div class="card"><p>Twoje oceny jakości odpowiadają bezpośrednio tym etapom — ich celem jest pokazanie, w którym miejscu struktury coś się wymyka: pominięta rozgrzewka, niewypowiedziany cel, skrócony czas na praktykę, zakończenie, którego nie było.</p></div>
   ${co('co-idea','💡',`<p><strong>Czytaj je etap po etapie, a nie jako jeden ogólny wynik.</strong> Niski wynik bez kontekstu niewiele ci mówi; niski wynik przy „Celu lekcji” lub „Zakończeniu” mówi dokładnie, co zmienić na najbliższej lekcji.</p>`)}
  `}
 ],
 ix:{
  title:'Struktura lekcji — sprawdzian modułu',
  instr:'Pięć szybkich rund: sklasyfikuj każdy etap w lekcji i wskaż, który etap jest opisany. 70%, aby odblokować kolejny moduł.',
  items:[
   {type:'sort', prompt:'Gdzie należy ten etap?', card:'▶️ Zapowiedź następnej lekcji', zones:[{label:'🌅 Jeden z 4 etapów otwierających', fb:'Nie do końca — zapowiedź następnej lekcji należy do bloku zamykającego, a nie otwierającego.'},{label:'🏁 Jeden z 4 etapów zamykających', fb:'Zgadza się — to trzeci z czterech etapów zamykających, tuż przed zakończeniem.'}], correctZone:1},
   {type:'sort', prompt:'Który etap jest opisany?', card:'„Ten moment mówi uczniowi, po co jest dzisiejsza lekcja. Bez niego uczeń nie wie, do czego zmierza — i szybko się wyłącza.”', zones:[{label:'👋 Rozgrzewka', fb:'Nie do końca — rozgrzewka wprowadza w tryb lekcji, ale nie mówi, po co jest dzisiejsza lekcja. To cel lekcji.'},{label:'🎯 Cel lekcji', fb:'Zgadza się — jasne przedstawienie celu lekcji nadaje całej lekcji kierunek, za którym uczniowie mogą podążać.'},{label:'📋 Podsumowanie lekcji', fb:'Nie do końca — podsumowanie spogląda wstecz na to, co zostało omówione. Informacja, po co jest dzisiejsza lekcja, pojawia się na początku: to cel lekcji.'},{label:'✨ Zakończenie', fb:'Nie do końca — zakończenie zamyka lekcję. Informacja, po co jest dzisiejsza lekcja, pojawia się na początku: to cel lekcji.'}], correctZone:1},
   {type:'sort', prompt:'Gdzie należy ten etap?', card:'📖 Powtórzenie poprzedniej lekcji', zones:[{label:'🌅 Jeden z 4 etapów otwierających', fb:'Zgadza się — to drugi z czterech etapów otwierających, tuż po rozgrzewce.'},{label:'🏁 Jeden z 4 etapów zamykających', fb:'Nie do końca — powtórzenie poprzedniej lekcji otwiera lekcję, a nie ją zamyka.'}], correctZone:0},
   {type:'sort', prompt:'Który etap jest opisany?', card:'„Gdy uczeń ujmie własnymi słowami to, czego nauczył się dzisiaj, widać, co naprawdę zostało zrozumiane — i co trzeba utrwalić następnym razem.”', zones:[{label:'📖 Powtórzenie poprzedniej lekcji', fb:'Blisko — ale ten etap wraca do <em>poprzedniej</em> lekcji. Ujęcie <em>dzisiejszej</em> nauki własnymi słowami to podsumowanie lekcji.'},{label:'📋 Sprawdzenie pracy domowej', fb:'Nie do końca — ten etap dotyczy pracy domowej. To podsumowanie lekcji.'},{label:'▶️ Zapowiedź następnej lekcji', fb:'Nie do końca — zapowiedź patrzy w przyszłość. Ujęcie dzisiejszej lekcji własnymi słowami to podsumowanie lekcji.'},{label:'📋 Podsumowanie lekcji', fb:'Zgadza się — podsumowanie lekcji pozwala sprawdzić, co naprawdę zostało zrozumiane, słowami samego ucznia.'}], correctZone:3},
   {type:'sort', prompt:'Który etap jest opisany?', card:'„Ostatnie 30 sekund to właśnie to, co uczeń bierze pod uwagę, decydując, czy przyjść następnym razem — więc zakończ, świętując to, co stworzył.”', zones:[{label:'✨ Zakończenie', fb:'Zgadza się — zakończenie kończy lekcję z przytupem, a to uczucie sprawia, że uczeń wraca.'},{label:'📖 Zadanie pracy domowej', fb:'Nie do końca — zadanie pracy domowej dotyczy jasnych instrukcji. Powyższy tekst omawia zakończenie z przytupem.'},{label:'🎯 Cel lekcji', fb:'Nie do końca — cel lekcji pojawia się na początku. To zakończenie.'},{label:'👋 Rozgrzewka', fb:'Nie do końca — rozgrzewka otwiera lekcję. Ostatnie 30 sekund należą do zakończenia.'}], correctZone:0}
  ]
 }
},
{id:'prep', numLabel:'Moduł 2', emoji:'📚', color:'var(--coral)',
 title:'Czas na przygotowanie',
 desc:'Dlaczego to przestudiowanie przewodnika lekcji dzień wcześniej, a nie trzydzieści minut przed zajęciami, naprawdę chroni jakość lekcji — i gdzie znaleźć go w BO.',
 obj:'Nauczyć się przygotowywania się do lekcji z wyprzedzeniem wystarczającym, by wychwycić luki przed jej rozpoczęciem, dowiedzieć się gdzue znajdują się właściwe materiały w BackOffice i dowiedzieć się, gdzie szukać pomocy lub jak zgłosić problem z treścią.',
 sections:[
  {t:'⏳ Nie trzydzieści minut przed', html:`
   <div class="card"><p>Przygotowanie pół godziny — albo dziesięć minut — przed zajęciami nie zostawia miejsca na faktyczne nauczenie się czegoś, czego jeszcze nie wiesz. Jeśli jest pojęcie, fragment kodu lub narzędzie, w którym nie czujesz się pewnie, będziesz się go uczyć na żywo, przy uczniu.</p></div>
   ${co('co-idea','💡',`<p><strong>Przestudiuj przewodnik lekcji i materiały dzień wcześniej.</strong> Daje ci to czas, by zauważyć lukę we własnej wiedzy, błąd w materiale lub zadanie, którego do końca nie rozumiesz — i faktycznie coś z tym zrobić przed lekcją.</p>`)}
  `},
  {t:'🎯 Znaj cel, nie tylko kroki', html:`
   <div class="card"><p>Dobrze zrozum, co dzisiejsza lekcja ma faktycznie osiągnąć — a nie tylko sekwencję kroków w przewodniku lekcji. Gdy znasz cel, możesz dostosować do niego drogę, jeśli coś pójdzie inaczej niż w planie, nie tracąc sensu lekcji.</p></div>
   <img class="mt-pic" src="Pictures_T4/goals.png" alt="Przykładowa strona przewodnika lekcji z celami lekcji i efektami edukacyjnymi">
  `},
  {t:'🆘 Gdy znajdziesz lukę', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>Skorzystaj z kanału swojego kursu na Slacku.</strong> Inni nauczyciele niemal na pewno trafili na ten sam błąd lub ten sam niejasny krok.`},
     {ic:'🎓', html:`<strong>Zapytaj swojego mentora regionalnego</strong>, jeśli chodzi o to, jak nauczać lub wyjaśnić coś konkretnego.`},
     {ic:'👩‍💼', html:`<strong>Zapytaj lidera zespołu</strong>, jeśli chodzi o sam kurs, materiały lub coś, co wymaga poprawki u źródła.`}
   ])}
   ${co('co-star','⭐',`<p>Znalezienie luki dzień wcześniej i poproszenie o pomoc to dokładnie to, jak system ma działać. Odkrycie jej na żywo, na lekcji, to właśnie to, czemu ma zapobiegać czas na przygotowanie.</p>`)}
  `},
  {t:'🗂️ Jak znaleźć materiały kursu w BO', html:`
   <div class="card"><p>Przewodnik lekcji i prezentacja znajdują się w BackOffice (BO), przypisane do dokładnie tej karty kursu, z której uczysz — a nie na starej stronie wiki, która może być nieaktualna. Poniższa symulacja krok po kroku pokazuje, gdzie je znaleźć i gdzie zgłosić problem, jeśli coś w samej treści jest nie tak.</p></div>
   ${co('co-danger','🚨',`<p><strong>Zawsze sprawdzaj, czy ID otwieranego kursu zgadza się z tym, na który są zapisani twoi uczniowie.</strong> W BO obok siebie istnieją podobnie wyglądające kursy — prowadzenie lekcji z niewłaściwego, nawet z innej wersji tego samego kursu, może w kilka sekund wprowadzić chaos.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Materiały kursu i błędy w treści</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Materiały kursu i błędy w treści" loading="lazy"></iframe></div></div>
  `}
 ],
 ix:{
  title:'Czas na przygotowanie — sprawdzian modułu',
  instr:'70%, aby odblokować kolejny moduł.',
  items:[
   {type:'choice', prompt:'Kiedy należy przestudiować przewodnik lekcji i materiały?', opts:['Dzień wcześniej, żeby był czas na uzupełnienie ewentualnej luki','Tuż przed zajęciami, żeby mieć wszystko świeżo w głowie','Tylko jeśli to lekcja prowadzona po raz pierwszy'], correct:0, fb:'Dzień wcześniej masz czas, by faktycznie zająć się tym, co znajdziesz — luką, błędem, zadaniem, którego nie rozumiesz do końca.'},
   {type:'choice', prompt:'Znajdujesz w przewodniku lekcji fragment kodu, który nie działa. Co należy zrobić?', opts:['Pominąć tę część lekcji i liczyć, że nikt nie zauważy','Rozwiązać to na żywo podczas lekcji z uczniami','Zapytać na kanale kursu na Slacku, mentora lub lidera zespołu — i zgłosić to ikoną 🐞 w BO'], correct:2, fb:'Te kanały istnieją właśnie po to, żeby nie trzeba było rozwiązywać tego na żywo, w pojedynkę — a zgłoszenie sprawia, że błąd zostanie poprawiony dla każdej kolejnej grupy.'},
   {type:'choice', prompt:'Co należy sprawdzić przed otwarciem przewodnika lekcji w BO?', opts:['Czy do lekcji jest dołączona prezentacja','Czy ID kursu zgadza się z tym, na który są zapisani twoi uczniowie','Czy przewodnik lekcji był aktualizowany w tym miesiącu'], correct:1, fb:'W BO obok siebie istnieją podobne kursy. Prowadzenie lekcji z niewłaściwego ID kursu to jedna z najszybszych dróg do chaotycznej lekcji.'},
   {type:'choice', prompt:'Dlaczego znajomość celu lekcji jest bardziej przydatna niż sama znajomość kroków?', opts:['Pozwala dostosować drogę, gdy coś idzie inaczej, bez utraty sensu lekcji','Pozwala pominąć części przewodnika lekcji, które wydają ci się mniej przydatne','Pomaga szybciej skończyć lekcję'], correct:0, fb:'Znajomość „po co” pozwala elastycznie podejść do „jak”, nie tracąc tego, czemu lekcja służy.'}
  ]
 }
},
{id:'soft', numLabel:'Moduł 3', emoji:'🤝', color:'var(--coral)',
 title:'Umiejętności miękkie',
 desc:'Nawyki wykraczające poza znajomość przedmiotu, które sprawiają, że lekcja jest przyjemnym doświadczeniem dla ucznia. Obejmują tempo prowadzenia zajęć, sprawdzanie zrozumienia materiału i cierpliwość w komunikacji.',
 obj:'Stosowanie umiejętności miękkich, które pozwalają przekształcić wiedzę przedmiotową w naprawdę dobrą lekcję: elastyczność poznawcza, znajomość swoich uczniów, tworzenie bezpiecznej przestrzeni do popełniania błędów, motywowanie, dostosowanie tempa do wieku uczniów, sprawdzanie zrozumienia materiału, cierpliwy sposób komunikacji, równe poświęcanie uwagi wszystkim uczniom oraz konkretny feedback.',
 sections:[
  {t:'🤝 Nie chodzi tylko o znajomość materiału', html:`
   <div class="card"><p>Opanowanie przedmiotu jest konieczne, ale to nie ono sprawia, że na lekcji dobrze się przebywa. To zasługa zestawu nawyków, które nie mają nic wspólnego z wiedzą techniczną.</p></div>
   ${iconGrid([
     {ic:'🔄', html:`<strong>Elastyczność poznawcza.</strong> Dostosowywanie wyjaśnienia, tempa lub podejścia, gdy pierwsze nie trafia, zamiast powtarzania go głośniej.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Znajomość uczniów.</strong> Ich zainteresowania, to, co ich motywuje — dzięki temu przykłady trafiają, a ogólna lekcja staje się osobista.`},
     {ic:'🛡️', html:`<strong>Bezpieczne środowisko do popełniania błędów.</strong> Uczniowie podejmują ryzyko i naprawdę się uczą, gdy wiedzą, że zła odpowiedź nie spotka się z oceną.`},
     {ic:'🔥', html:`<strong>Widoczna pasja.</strong> Jeśli widzą u ciebie prawdziwe zainteresowanie, są bardziej zmotywowani do zaangażowania — tego nie da się udawać, ale łatwo zauważyć, gdy tego brakuje.`}
   ])}
  `},
  {t:'💬 Konstruktywna informacja zwrotna, zamiast ogólnikowej', html:`
   <div class="card"><p>„Dobra robota” nie mówi uczniowi niczego, co mógłby powtórzyć lub rozwinąć. Konstruktywna informacja zwrotna jest <strong>konkretna</strong> i wskazuje kierunek: co działa, a co poprawić lub zbadać dalej.</p></div>
   ${doavoid(
     ['„Udało ci się samodzielnie uruchomić pętlę — świetnie, to dokładnie ta logika, której potrzebowaliśmy”', '„Ta część jest mocna; spróbuj zastosować ten sam pomysł w następnej sekcji”', '„Widzę, że udało ci się samodzielnie naprawić ten błąd — jaki był twój tok myślenia?”'],
     ['„Dobra robota!” bez odniesienia do tego, co faktycznie zostało zrobione', '„To źle” bez wskazówki, czego spróbować zamiast tego', 'Informacja zwrotna, która pasowałaby do pracy dowolnego ucznia']
   )}
  `},
  {t:'🐢 Tempo lekcji i sprawdzanie zrozumienia materiału — szczególnie w przypadku młodszych dzieci', html:`
   <div class="card"><p>Lekcja może być poprawnie przeprowadzona, a mimo to przebiegać zbyt szybko dla dziecka, które masz przed sobą. Rodzice opisują takie sytuacje na przykład słowami: <em>„tutor przeszedł dalej, nie wyjaśniając zagadnienia”</em> lub <em>„metoda była odpowiednia dla starszych dzieci”</em>. Rozwiązaniem jest wolniejsze omówienie kolejnych kroków, używanie słów, które dziecko zna, oraz <strong>sprawdzanie, czy wszystko zrozumiało, zanim przejdziesz dalej</strong>. Nie wystarczy zapytać „Czy są jakieś pytania?” i kontynuować lekcję.</p></div>
   ${iconGrid([
     {ic:'1️⃣', html:`<strong>Jedno polecenie na raz.</strong> Przedstaw jeden krok, poczekaj, aż uczeń go wykona, a dopiero potem przejdź do następnego. Nie łącz trzech instrukcji w jednym zdaniu.`},
     {ic:'🖥️', html:`<strong>„Pokaż mi”.</strong> Poproś ucznia o udostępnienie ekranu. To, co zobaczysz, powie Ci znacznie więcej niż samo „tak, rozumiem”.`},
     {ic:'🗣️', html:`<strong>„Co zrobisz najpierw?”.</strong> Poproś ucznia, aby powtórzył, jaki będzie jego następny krok. Dzięki temu możesz wychwycić nieporozumienia, zanim zacznie pracować.`},
     {ic:'👍', html:`<strong>Szybkie sygnały:</strong> kciuk w górę, emoji lub reakcja po wykonaniu danego kroku. Dzięki temu możesz szybko sprawdzić, jak radzi sobie cała grupa.`},
     {ic:'⏳', html:`<strong>Czas na odpowiedź.</strong> Po zadaniu pytania odczekaj pięć sekund, zanim sam na nie odpowiesz lub wskażesz kolejną osobę.`},
     {ic:'📖', html:`<strong>Znane słowa.</strong> Wyjaśniaj nowe terminy przy pierwszym użyciu, podając przykład z codziennego życia uczniów.`}
   ])}
   ${dimTabs([
     {ic:'🧒', title:'Wiek 6–8 lat',
      intro:'Krótkie kroki, dużo pokazywania i bardzo mało słów.',
      tips:[
       {ic:'👀', html:`<strong>Pokaż każdy krok</strong> na swoim ekranie, zanim uczniowie spróbują wykonać go samodzielnie. Zadbaj o to, aby każdy krok obejmował tylko jedną czynność.`},
       {ic:'🔤', html:`<strong>Niektóre dzieci wciąż uczą się czytać.</strong> Czytaj polecenia na głos i zamiast długich tekstów używaj ikon, kolorów oraz wskazywania odpowiednich elementów.`},
       {ic:'🧸', html:`<strong>Przykłady z codziennego życia:</strong> <em>„Pętla jest jak mycie zębów: powtarzasz ten sam ruch raz za razem”.</em>`},
       {ic:'🎉', html:`<strong>Często sprawdzaj, czy uczniowie rozumieją materiał, i doceniaj</strong> każdy, nawet najmniejszy postęp.`}
      ]},
     {ic:'🧑', title:'Wiek 9–11 lat',
      intro:'Potrafią wykonywać krótkie sekwencje zadań, o ile sprawdzasz, czy wszystko rozumieją.',
      tips:[
       {ic:'📋', html:`<strong>Przedstaw dwa lub trzy kroki i zapisz je na czacie</strong> w formie listy, do której uczniowie będą mogli wrócić w razie potrzeby.`},
       {ic:'🗣️', html:`Zanim zaczną pracę, <strong>poproś ich, aby własnymi słowami wyjaśnili</strong>, co zamierzają zrobić.`},
       {ic:'🔍', html:`<strong>Sprawdzaj ekrany uczniów</strong> po każdym kroku, a nie dopiero na końcu.`},
       {ic:'🧩', html:`<strong>Wprowadzaj nowe terminy za pomocą przykładów,</strong> które uczniowie znają, na przykład z gier lub aplikacji, z których korzystają.`}
      ]},
     {ic:'🧑‍🎓', title:'Wiek 12+',
      intro:'Daj uczniom więcej samodzielności, ale nie myl ciszy ze zrozumieniem.',
      tips:[
       {ic:'🧠', html:`<strong>Wyjaśniaj, dlaczego coś robimy,</strong> a nie tylko jak to zrobić. Starsi uczniowie chętniej angażują się w zajęcia, gdy rozumieją logikę stojącą za danym zadaniem.`},
       {ic:'🗳️', html:`<strong>Korzystaj z anonimowych sposobów sprawdzania zrozumienia</strong> (ankiety lub reakcji). Nastolatkowie rzadko mówią „Nie rozumiem” na forum grupy.`},
       {ic:'🔒', html:`<strong>Zaproponuj możliwość zadawania pytań prywatnie na czacie,</strong> aby uczniowie mogli wyrazić swoje wątpliwości bez zwracania na siebie uwagi innych.`},
       {ic:'🚀', html:`<strong>Pracuj szybciej z uczniami, którzy pokazują, że opanowali materiał,</strong> i proponuj im dodatkowe wyzwania, nie pozostawiając przy tym pozostałych w tyle.`}
      ]}
   ],'✅ To trzy grupy wiekowe.')}
  `},
  {t:'🗣️ Cierpliwość w komunikacji — jakich sformułowań unikać i co mówić zamiast nich', html:`
   <div class="card"><p>Uczniowie bardziej zapamiętują to, jak się przy Tobie czuli, niż to, co im wyjaśniłeś. Jedno niecierpliwe zdanie może sprawić, że dziecko przestanie zadawać pytania, a rodzina oceni cały kurs słowami: <em>„tutor nie ma cierpliwości”</em>. Kiedy jesteśmy zmęczeni lub się spieszymy, łatwo sięgamy po takie sformułowania. Naucz się je rozpoznawać i przygotuj sobie odpowiednie zamienniki:</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>🚫 Zamiast mówić…</th><th>✅ Spróbuj powiedzieć…</th></tr>
    <tr><td><em>„Już to wyjaśniałem”.</em></td><td><em>„Pozwól, że pokażę Ci to w inny sposób”.</em></td></tr>
    <tr><td><em>„To jest łatwe”.</em></td><td><em>„To zadanie wymaga trochę praktyki. Zróbmy je razem”.</em></td></tr>
    <tr><td><em>„Pospiesz się, wszyscy na Ciebie czekamy”.</em></td><td><em>„Nie spiesz się. W międzyczasie pozostali mogą spróbować wykonać zadanie 2”.</em></td></tr>
    <tr><td><em>„Nie teraz”.</em> (do ucznia, który podnosi rękę)</td><td><em>„Widzę Cię, Leo. Zaraz będzie Twoja kolej”.</em></td></tr>
    <tr><td><em>„Zobacz, wszyscy inni sobie poradzili”.</em></td><td><em>„Pierwszą część masz już dobrze zrobioną. Przyjrzyjmy się teraz kolejnej”.</em></td></tr>
    <tr><td><em>„To jest źle”.</em></td><td><em>„Prawie! Co się stanie, jeśli zmienisz tę linijkę?”.</em></td></tr>
   </table></div>
   ${co('co-idea','⚖️',`<p><strong>Cierpliwość oznacza również sprawiedliwe traktowanie wszystkich uczniów.</strong> Rozdzielaj swoją uwagę: zmieniaj kolejność wypowiedzi, angażuj różnych uczniów i sprawdzaj postępy tych, którzy potrzebują więcej czasu, równie często jak tych, którzy pracują szybko. Dziecko, które czuje, że tutor rozmawia tylko z „dobrymi” uczniami, przestaje się starać.</p>`)}
  `},
  {t:'💌 Okazuj zainteresowanie nie tylko przy złych wiadomościach', html:`
   <div class="card"><p>Rodzic, który słyszy od ciebie tylko wtedy, gdy coś jest nie tak, zaczyna kojarzyć twoje wiadomości z problemami. Wysyłaj wiadomość również po to, by docenić coś dobrego — a nie tylko by zgłosić obawy.</p></div>
   ${co('co-star','⭐',`<p>Ten jeden nawyk — napisanie raz, z własnej inicjatywy, o czymś, co uczniowi się udało — zmienia sposób, w jaki rodzina odbiera wszystko, co wysyłasz później.</p>`)}
  `}
 ],
 ix:{
  title:'Umiejętności miękkie — sprawdzian modułu',
  instr:'Aby odblokować kolejny moduł, musisz uzyskać 70%.',
  items:[
   {type:'choice', prompt:'Uczeń nie rozumie twojego pierwszego wyjaśnienia. W jaki sposób wygląda zastosowanie elastyczności poznawczej w tej sytuacji?', opts:['Powtórzenie tego samego wyjaśnienia wolniej','Przejście dalej i powrót do tematu pod koniec lekcji','Zmiana podejścia — inne ujęcie, demonstracja, mniejsza porcja'], correct:2, fb:'Elastyczność oznacza zmianę podejścia, a nie tylko powtarzanie.'},
   {type:'sort', prompt:'Skarb czy śmieć? Czy to konstruktywna informacja zwrotna?', card:'„Udało ci się samodzielnie uruchomić pętlę — spróbuj zastosować ten sam pomysł w następnej sekcji.”', zones:[{label:'💎 Skarb — konstruktywna', fb:'Zgadza się — konkretnie mówi, co zadziałało, i wskazuje następny krok.'},{label:'🗑️ Śmieć — ogólnikowa', fb:'Nie do końca — ta informacja dokładnie nazywa, co uczeń zrobił i czego spróbować dalej. To jest konstruktywne.'}], correctZone:0},
   {type:'sort', prompt:'Skarb czy śmieć? Czy to konstruktywna informacja zwrotna?', card:'„Dobra robota dzisiaj, wszyscy!”', zones:[{label:'💎 Skarb — konstruktywna', fb:'Nie do końca — jest przyjazna, ale nikomu nie mówi, co powtórzyć lub rozwinąć.'},{label:'🗑️ Śmieć — ogólnikowa', fb:'Zgadza się — przyjazna, ale pasowałaby do każdego. Nazwij, co faktycznie zostało zrobione dobrze.'}], correctZone:1},
   {type:'choice', prompt:'Dlaczego warto pisać do rodzica o czymś dobrym, a nie tylko o problemach?', opts:['Rodzice oczekują tego jako formalności','Zmienia to sposób, w jaki rodzina odbiera wszystko, co wysyłasz później','Jest to potrzebne tylko wtedy, gdy uczeń ma słabe oceny'], correct:1, fb:'Pozytywne wiadomości wysyłane z własnej inicjatywy budują zaufanie, dzięki któremu trudniejsze rozmowy są później łatwiejsze.'},
   {type:'choice', prompt:'Wyjaśniłeś krok zadania grupie 7-latków i pytasz: „Czy są jakieś pytania?”. Nikt nie odpowiada. Co robisz dalej?', opts:['Przechodzisz dalej — cisza oznacza, że uczniowie zrozumieli.','Sprawdzasz, czy zrozumieli: „Pokażcie mi swoje ekrany” lub „Co zrobicie najpierw?” i ponownie pokazujesz sposób wykonania zadania osobom, które mają trudności.','Powtarzasz to samo wyjaśnienie szybciej, żeby zdążyć przejść do kolejnego kroku.'], correct:1, fb:'Cisza nie oznacza, że uczniowie zrozumieli materiał, szczególnie w przypadku młodszych dzieci. Szybkie sprawdzenie, na przykład poprzez prośbę „Pokaż mi”, pozwala wychwycić trudności, zanim przejdziesz dalej.'},
   {type:'sort', prompt:'Skarb czy śmieć? Czy jest to cierpliwa odpowiedź?', card:'Uczeń zadaje to samo pytanie po raz drugi. Odpowiadasz: „Już to wyjaśniałem”.', zones:[{label:'💎 Skarb — cierpliwa odpowiedź', fb:'Niezupełnie. Taka odpowiedź sprawia, że uczeń czuje, iż powinien już znać odpowiedź, a wiele dzieci po usłyszeniu czegoś takiego przestaje zadawać pytania.'},{label:'🗑️ Śmieć — niecierpliwa odpowiedź', fb:'Zgadza się! Zamiast tego spróbuj powiedzieć: „Pozwól, że pokażę Ci to w inny sposób”. Drugie pytanie oznacza, że pierwsze wyjaśnienie nie było wystarczająco zrozumiałe.'}], correctZone:1}
  ]
 }
},
{id:'professional', numLabel:'Moduł 4', emoji:'🧱', color:'var(--coral)',
 title:'Rzetelność i granice zawodowe',
 desc:'Punktualne rozpoczynanie zajęć i wykorzystywanie całego czasu lekcji, postępowanie w sytuacjach, gdy zajęcia nie mogą odbyć się zgodnie z planem, przejmowanie grupy oraz przestrzeganie granic zawodowych, które chronią uczniów, rodziny i Ciebie.',
 obj:'Rozpoczynać zajęcia punktualnie i prowadzić je przez cały zaplanowany czas, wiedzieć, kto podejmuje decyzję o konieczności przełożenia lekcji, sprawnie przejmować grupę oraz przestrzegać granic zawodowych dotyczących platform, kontaktu, uwagi, kamery i prywatności.',
 sections:[
  {t:'⏰ Zawsze punktualnie — przez cały czas trwania lekcji', html:`
   <div class="card"><p>Dla rodziny lekcja to czas, za który zapłaciła i wokół którego zaplanowała swój dzień. Tutor, który zaczyna dziesięć minut później, robi nieplanowaną przerwę lub kończy zajęcia przed czasem, to coś, co rodzina zauważa od razu — jeszcze zanim oceni treść lekcji. Rzetelność i punktualność są częścią jakości nauczania.</p></div>
   ${rclock([
     {ic:'🧰', when:'15 minut przed lekcją', t:'Przygotuj się wcześniej', d:'Dołącz wcześniej, sprawdź połączenie internetowe, kamerę i mikrofon, a także otwórz grupę i lekcję w BO.'},
     {ic:'🟢', when:'Godzina rozpoczęcia', t:'Zacznij punktualnie', d:'Pierwsze minuty są przeznaczone na rozgrzewkę, a nie na przygotowywanie sprzętu.'},
     {ic:'🎯', when:'W trakcie lekcji', t:'Pełny czas zajęć', d:'Zrealizuj wszystkie zaplanowane etapy, bez nieplanowanych przerw i dodatkowych zadań niezwiązanych z lekcją.'},
     {ic:'🏁', when:'Godzina zakończenia', t:'Zakończ punktualnie', d:'Nigdy nie kończ zajęć przed czasem. Podsumowanie i zapowiedź kolejnej lekcji również są częścią zajęć.'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Spóźniasz się lub nie możesz się połączyć?</strong> Natychmiast poinformuj swojego Team Leadera. Nie pozwól, aby uczniowie czekali bez żadnej informacji. Lekcja, która rozpoczęła się z opóźnieniem, nie zostaje „nadrobiona” przez zakończenie jej kilka minut wcześniej. Poinformuj swojego Team Leadera, aby mógł zdecydować, co zostanie zaproponowane rodzinie.</p>`)}
  `},
  {t:'📅 Kiedy lekcja nie może odbyć się zgodnie z planem', html:`
   <div class="card"><p>Choroby i sytuacje awaryjne się zdarzają. To, czy rodzina wykaże zrozumienie, zależy od tego, <strong>jak wcześnie otrzyma informację i co wydarzy się później</strong>. Wiadomość wysłana trzydzieści minut przed lekcją lub tutor, który po prostu się nie pojawia, to sytuacje określane przez rodziny jako <em>„brak organizacji”</em>. Często właśnie wtedy decydują się one poprosić o zwrot pieniędzy.</p></div>
   ${doavoid(
     ['Poinformuj swojego Team Leadera, <strong>gdy tylko dowiesz się</strong>, że nie możesz poprowadzić lekcji. Im wcześniej się o tym dowie, tym więcej będzie miał możliwości (zorganizowanie zastępstwa lub ustalenie nowego terminu).','Postępuj zgodnie z planem uzgodnionym z Team Leaderem, w tym z ustalonym sposobem poinformowania rodziny.','Przestrzegaj uzgodnionego harmonogramu zajęć — co tydzień tego samego dnia i o tej samej godzinie.','Jeśli lekcja się nie odbyła, pozostaw decyzję o jej odrobieniu swojemu Team Leaderowi.'],
     ['Samodzielnego odwoływania lub przekładania lekcji — tutorzy nie zmieniają terminów zajęć.','Informowania rodziny bezpośrednio w ostatniej chwili, bez konsultacji z Team Leaderem.','Obiecywania dodatkowej lekcji w ramach odrobienia zajęć lub rekompensaty.','Prowadzenia lekcji o innej godzinie niż uzgodniona, nawet jeśli ma to być „tylko ten jeden raz”.']
   )}
  `},
  {t:'🤝 Przejmowanie grupy', html:`
   <div class="card"><p>Rodziny zauważają zmiany tutorów, szczególnie gdy nikt ich o tym nie poinformował lub gdy każdy nowy tutor zaczyna wszystko od początku. Jeśli przejmujesz grupę, zadbaj o to, aby zmiana była kontynuacją dotychczasowej pracy, a nie jej rozpoczęciem od nowa.</p></div>
   ${stepFlow([
     {ic:'📖', label:'Przed pierwszą lekcją przeczytaj komentarze w BO i sprawdź postępy grupy.'},
     {ic:'👋', label:'Przedstaw się uczniom, a także rodzinom — zgodnie z ustaleniami z Team Leaderem.'},
     {ic:'🔁', label:'Zachowaj znane uczniom rutyny: zasady, strukturę zajęć i sposób udostępniania prac.'},
     {ic:'💬', label:'Zapytaj uczniów, co podobało im się w dotychczasowych lekcjach.'}
   ])}
  `},
  {t:'🧱 Granice zawodowe', html:`
   <div class="card"><p>Niektóre sytuacje nie dotyczą bezpośrednio umiejętności nauczania, ale mogą równie szybko zniszczyć zaufanie rodziny. Kliknij każdą sekcję:</p></div>
   ${symCards([
     {ic:'🏷️', title:'Tylko Kodland — podczas lekcji i poza nią',
      do:`Rozmawiaj wyłącznie o kursach i narzędziach Kodland. Jeśli zauważysz problem z platformą lub kursem, zgłoś go swojemu Team Leaderowi.`,
      avoid:`Promowania innej platformy, innej szkoły lub własnych prywatnych lekcji · negatywnego wypowiadania się o platformie lub kursie w obecności uczniów albo ich rodzin.`},
     {ic:'📵', title:'Kontakt wyłącznie przez oficjalne kanały',
      do:`Kontaktuj się z rodzinami za pośrednictwem kanałów wykorzystywanych w Twoim regionie do komunikacji dotyczącej zajęć Kodland. Poza lekcjami kontaktuj się z rodzicem, a nie bezpośrednio z dzieckiem.`,
      avoid:`Korzystania z prywatnych mediów społecznościowych lub prywatnych czatów do kontaktowania się z uczniami · zapraszania ich do wspólnego grania lub spotkań online po zajęciach · udostępniania swoich prywatnych danych kontaktowych.`},
     {ic:'📷', title:'Kamera i prywatność',
      do:`Raz, w uprzejmy sposób, zachęć uczniów do włączenia kamer i zaakceptuj ich decyzję. Niektórzy uczniowie pozostawiają kamerę wyłączoną z powodów kulturowych, religijnych lub osobistych. Zamiast tego zaproponuj udział przez czat, reakcje lub udostępnianie ekranu.`,
      say:`<em>„Nie ma problemu! Możesz uczestniczyć w zajęciach przez czat lub udostępniając swój ekran”.</em>`,
      avoid:`Nalegania lub pytania o powód przy całej grupie · robienia zrzutów ekranu lub zdjęć uczniów · udostępniania zdjęć lub danych osobowych uczniów.`},
     {ic:'🗨️', title:'Rozmowy odpowiednie do wieku uczniów',
      do:`Prowadź swobodne rozmowy na lekkie tematy odpowiednie do wieku grupy. Jeśli pojawi się wrażliwy temat, spokojnie skieruj rozmowę z powrotem na lekcję.`,
      avoid:`Dyskusji o polityce lub religii, tematach dla dorosłych czy problemach osobistych w obecności uczniów.`}
   ])}
   ${chatMock({
     name:'Rodzic', sub:'online', avatar:'👨', time:'19:40',
     msgs:[`Cześć! Mój syn bardzo Cię lubi. Czy mógłbyś/mogłabyś udzielać mu prywatnych lekcji poza Kodland? Płacilibyśmy bezpośrednio Tobie, byłoby to dla nas tańsze.`],
     title:'Jak odpowiesz?',
     text:'Rodzina jest z Ciebie zadowolona i prosi o coś, co przekracza granice zawodowe. Kliknij każdą odpowiedź, aby zobaczyć, co się stanie.',
     opts:[
      {t:`„Jasne! Wyślij mi swój numer, a ustalimy szczegóły”.`, ok:false, fb:`W ten sposób przenosisz ucznia poza Kodland i naruszasz granice zawodowe swojej roli. Nigdy nie umawiaj się na prywatne lekcje z rodziną ucznia Kodland.`},
      {t:`„Bardzo dziękuję! Cieszę się, że syn lubi nasze lekcje! Mogę jednak prowadzić z nim zajęcia wyłącznie za pośrednictwem Kodland. Jeśli chcieliby Państwo wykupić więcej lekcji lub wybrać inny format zajęć, Dział Obsługi Klienta pomoże Państwu poznać dostępne możliwości”.`, ok:true, fb:`To ciepła, jasna i profesjonalna odpowiedź. Dziękujesz za miłe słowa, zachowujesz granice i kierujesz rodzinę do osób, które mogą przedstawić dostępne opcje. Następnie poinformuj swojego Team Leadera o tej prośbie.`},
      {t:`„To niedozwolone. Proszę więcej mnie o to nie pytać”.`, ok:false, fb:`Granica jest właściwa, ale ton nie: rodzina miała dobre intencje i chciała wyrazić uznanie. Uprzejmie odmów i skieruj ją do Działu Obsługi Klienta.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Rzetelność i granice zawodowe — sprawdzian modułu',
  instr:'Przyporządkuj odpowiedzi do każdej sytuacji i wybierz najlepsze rozwiązanie. Aby odblokować końcową listę kontrolną, musisz uzyskać 70%.',
  items:[
   {type:'sort', prompt:'Czy to w porządku, czy przekracza granice zawodowe?', card:'Podczas lekcji, gdy uczniowie pracują, odpowiadasz na wiadomość od rodzica z innej grupy.', zones:[{label:'✅ W porządku', fb:'Niezupełnie. Czas lekcji należy do tych uczniów. Na wiadomości od innych rodzin możesz odpowiedzieć po zakończeniu zajęć.'},{label:'🚫 Przekracza granice', fb:'Zgadza się! Podczas lekcji całą swoją uwagę poświęcasz grupie. Rodziny to zauważają i mogą odebrać taką sytuację jako „tutor nie zwracał uwagi”.'}], correctZone:1},
   {type:'sort', prompt:'Czy to w porządku, czy przekracza granice zawodowe?', card:'Uczennica pozostawia kamerę wyłączoną z powodów religijnych. Pozwalasz jej uczestniczyć w zajęciach przez czat i udostępnianie ekranu.', zones:[{label:'✅ W porządku', fb:'Zgadza się! Uprzejmie zachęć do włączenia kamery, zaakceptuj decyzję uczennicy i zaproponuj inne sposoby uczestnictwa. Nigdy nie nalegaj.'},{label:'🚫 Przekracza granice', fb:'Niezupełnie. Poszanowanie powodów uczennicy i zaoferowanie jej innych sposobów uczestnictwa to właśnie właściwe postępowanie.'}], correctZone:0},
   {type:'choice', prompt:'Budzisz się chory i wiesz, że nie możesz poprowadzić dzisiejszej wieczornej lekcji. Co robisz?', opts:['Wysyłasz rodzinie wiadomość 30 minut przed lekcją, aby ją odwołać.','Natychmiast informujesz swojego Team Leadera, aby mógł zorganizować zastępstwo lub ustalić nowy termin, a następnie postępujesz zgodnie z jego wskazówkami dotyczącymi poinformowania rodziny.','Prowadzisz krótszą lekcję i kończysz ją wcześniej.'], correct:1, fb:'Tutorzy nie odwołują ani nie przekładają lekcji samodzielnie. Im wcześniej Twój Team Leader otrzyma informację, tym więcej będzie miał możliwości — a rodzina dowie się o sytuacji w ramach ustalonego planu, a nie w ostatniej chwili.'},
   {type:'sort', prompt:'Czy to w porządku, czy przekracza granice zawodowe?', card:'Po zajęciach zapraszasz dwóch uczniów do wspólnej gry online w Roblox.', zones:[{label:'✅ W porządku', fb:'Niezupełnie. Kontaktowanie się z uczniami poza lekcjami, szczególnie w celu prywatnego grania, przekracza granice zawodowe, nawet jeśli wydaje się to przyjaznym gestem.'},{label:'🚫 Przekracza granice', fb:'Zgadza się! Poza lekcjami kontaktujesz się z rodzicami za pośrednictwem oficjalnych kanałów. Nie utrzymuj prywatnego kontaktu z uczniami ani nie graj z nimi.'}], correctZone:1},
   {type:'choice', prompt:'Przejmujesz grupę po innym tutorze. Co należy zrobić przed pierwszą lekcją?', opts:['Rozpocząć kurs od lekcji 1, aby sprawdzić, na jakim etapie jest każdy uczeń.','Nie robić niczego szczególnego — uczniowie się do Ciebie przyzwyczają.','Przeczytać komentarze w BO i sprawdzić postępy grupy, zaplanować sposób przedstawienia się oraz zachować dotychczasowe rutyny grupy.'], correct:2, fb:'Ciągłość sprawia, że zmiana tutora jest dla uczniów bezpiecznym doświadczeniem. Poznaj historię grupy, przedstaw się i zachowaj znane uczniom rutyny.'}
  ]
 }
},
{id:'checklist', numLabel:'Lista kontrolna', emoji:'✅', color:'var(--coral)',
 title:'Końcowa lista kontrolna',
 desc:'Tu nie ma quizu — tylko najważniejsze punkty tego miniszkolenia, zanim je zakończysz.',
 obj:'Zapoznać się z poniższą listę kontrolną. Ten moduł nie jest oceniany — należy go przeczytać, a potem ukończyć miniszkolenie.',
 sections:[
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   ${numlist([
     'Tego samego dnia, w którym dowiaduję się o wniosku, zostawiam komentarz w BO i informuję lidera zespołu',
     'Moja następna lekcja z tym uczniem to prawdziwa próba pomocy — mogę dać uczniowi prawdziwą okazję do działania, pokazać mu jego sukcesy, przekazać konkretną uwagę, jednak ani słowa o wniosku',
     'Nigdy nie potwierdzam zatwierdzenia zwrotu i nie rozmawiam o kwotach — używam jednego bezpiecznego zdania, a resztę zostawiam Działowi Obsługi Klienta'
   ])}
  `},  {t:'🌱 Na każdej lekcji', html:`
   ${numlist([
     'Za każdym razem stosuję tę samą strukturę lekcji, żeby uczniowie znali rytm i wkładali energię w naukę',
     'Otwieram lekcję czterema etapami: rozgrzewką, powtórzeniem poprzedniej lekcji słowami ucznia, rzetelnym sprawdzeniem pracy domowej i jasno przedstawionym celem lekcji',
     'Na etapie teorii i praktyki uczę małymi porcjami, najpierw pokazuję na swoim ekranie i chronię czas na praktykę',
     'Zamykam lekcję etapami, stanowiącymi lustrzane odbicie rozpoczęcia: podsumowaniem lekcji słowami ucznia, jasnymi instrukcjami do pracy domowej, zapowiedzią następnej lekcji i zakończeniem, które docenia to, co uczniowie stworzyli',
     'Czytam swoje oceny jakości etap po etapie i poprawiam ten etap, który się wymyka, już na najbliższej lekcji',
     'Studiuję przewodnik lekcji i materiały dzień wcześniej — nie trzydzieści minut przed — i znam cel lekcji, a nie tylko kroki',
     'Otwieram przewodnik lekcji i prezentację z BO i sprawdzam, czy ID kursu zgadza się z tym, na który są zapisani moi uczniowie',
     'Gdy znajduję lukę, pytam na kanale kursu na Slacku, mojego mentora regionalnego lub lidera zespołu — a błędy w treści zgłaszam ikoną 🐞 w BO',
     'Gdy moje pierwsze wyjaśnienie nie trafia, zmieniam podejście — inne ujęcie, demonstracja, mniejsza porcja — zamiast je powtarzać',
     'Poznaję swoich uczniów i buduję bezpieczną przestrzeń, w której błędy nie są oceniane',
     'Daję konkretną, konstruktywną informację zwrotną: co zadziałało i czego spróbować dalej — nigdy samo „dobra robota”',
     'Piszę do rodzin także z dobrymi wiadomościami, nie tylko gdy coś idzie nie tak',
     'Przekazuję jedno polecenie na raz i sprawdzam zrozumienie, prosząc na przykład „Pokaż mi” lub pytając „Co zrobisz najpierw?”. Cisza nie oznacza, że uczniowie zrozumieli.',
     'Dostosowuję tempo i słownictwo do wieku uczniów: w przypadku najmłodszych stosuję bardzo krótkie kroki i demonstracje, a nowe terminy wyjaśniam za pomocą przykładów.',
     'Unikam niecierpliwych sformułowań, takich jak „Już to wyjaśniałem”, i sprawiedliwie rozdzielam swoją uwagę między wszystkich członków grupy.',
     'Dołączam do zajęć 15 minut wcześniej, rozpoczynam punktualnie, prowadzę lekcję przez cały zaplanowany czas i nigdy nie kończę jej przed czasem.',
     'Jeśli nie mogę poprowadzić lekcji, informuję swojego Team Leadera, gdy tylko się o tym dowiem. Nigdy samodzielnie nie odwołuję ani nie przekładam zajęć i nie obiecuję lekcji odrabiającej.',
     'Kiedy przejmuję grupę, najpierw czytam komentarze w BO, przedstawiam się i zachowuję rutyny, które uczniowie już znają.',
     'Przestrzegam granic zawodowych: korzystam wyłącznie z platform Kodland, kontaktuję się z rodzinami przez oficjalne kanały, poświęcam uczniom pełną uwagę podczas lekcji oraz szanuję decyzje każdego ucznia dotyczące kamery i jego prywatność.'
   ])}
  `},  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>To już całe miniszkolenie.</strong> Kiedy zechcesz, przejdź dalej — a potem wykonaj DST w LMS, aby zamknąć zadanie.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
