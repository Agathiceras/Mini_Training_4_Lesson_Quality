/* Mini_Training_4_Lesson_Quality - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pl';
const CONTENT = {
  flag:'🇵🇱', dir:'ltr',
  ui:{
    pageTitle:"Miniszkolenie · Jakość lekcji — szkolenie nauczycieli Kodland",
    logoSub:'Dział Rozwoju Nauczycieli',
    heroEyebrow:"🎯 Miniszkolenie",
    heroTitle:"Szczere spojrzenie na <span class=\"h-pill\">jakość lekcji</span>",
    heroIntro:"Otrzymujesz to szkolenie, ponieważ masz uczniów, którzy poprosili o zwrot pieniędzy z powodu jakości zajęć. Pokażemy ci, co możesz zrobić jako nauczyciel i jak radzić sobie w takich sytuacjach.",
    heroWork:"Przejdź przez 5 krótkich modułów. Aby odblokować kolejny, w sprawdzianie każdego modułu potrzebujesz co najmniej 70%. Całość zajmie około 25–30 minut.",
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
    doneP2:"To już wszystko! Wróć na stronę szkolenia w LMS, z której trafiasz do tego miniszkolenia, aby zamknąć zadanie.",
    doneP3:"👉 <strong>Jeśli bezpośrednio pod szkoleniem w LMS widnieje sprawdzian lub test, rozwiąż go i uzyskaj wynik zaliczający</strong> — w przeciwnym razie zadanie może pozostać nieukończone.",
    doneP4:'Powodzenia! ❤️',
    doneP5:'',
    devUnlockAlert:'Tryb deweloperski: wszystkie moduły zostały odblokowane do przeglądu.',
    devOn:'🔓 Tryb deweloperski WŁ. — wszystkie moduły odblokowane',
    devOff:'🔒 Tryb deweloperski WYŁ. — postęp wyczyszczony',
    devBadge:'🔓 TRYB DEWELOPERSKI',
    doLabel:'✅ Rób tak',
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
 desc:'Dlaczego ten powód zasługuje na szczerą, konkretną samoocenę — i jakie zasady obowiązują, gdy wniosek o zwrot już wpłynął.',
 obj:'Zrozum, że ten powód dotyczy samej lekcji, dlaczego wczesne proszenie o pomoc to właściwy ruch, i co dokładnie robić (a czego nie robić), gdy wniosek o zwrot już istnieje.',
 sections:[
  {t:'🪞 Ten powód najtrudniej usłyszeć', html:`
   <div class="card"><p>Ten powód oznacza, że rodzina uznała za problem <strong>samą jakość lekcji</strong> — nie dziecko, nie poziom, nie harmonogram. Trudniej to usłyszeć niż większość pozostałych powodów i łatwo wpaść w defensywę albo szukać wytłumaczeń.</p></div>
   ${co('co-idea','💡',`<p><strong>To nie jest werdykt na twój temat jako osoby.</strong> To sygnał dotyczący konkretnych, możliwych do naprawienia zachowań na konkretnych lekcjach. Nauczyciele, którzy traktują go poważnie i rzeczowo — a nie osobiście — najszybciej odwracają sytuację.</p>`)}
   ${co('co-star','🎓',`<p><strong>Wcześnie poproś kogoś z zewnątrz o spojrzenie na twoje nauczanie.</strong> Twój mentor regionalny jest właśnie po to — prośba o informację zwrotną na temat tego, jak uczysz, to właściwy ruch, a nie znak, że coś jest z tobą nie tak.</p>`)}
  `},
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   <div class="card"><p>Wszystko powyżej dotyczy wczesnego wychwytywania problemu. Możliwe jednak, że otwierasz to szkolenie, bo rodzina <strong>już</strong> poprosiła o zwrot pieniędzy. Poniższe zasady obowiązują bez względu na powód — przeczytaj je najpierw, a potem wykorzystaj resztę szkolenia, aby zrozumieć, co do tego doprowadziło i co wciąż możesz zrobić na lekcji.</p></div>
   ${co('co-idea','💡',`<p><strong>Sam wniosek tworzy Dział Obsługi Klienta, nie ty</strong> — na tę część nie masz wpływu. Do ciebie wciąż należy wszystko, co od teraz dzieje się na lekcji, a to naprawdę sporo.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Nie mów nic o samym wniosku</strong> — ani dziecku, ani rodzinie — chyba że Dział Obsługi Klienta wyraźnie poprosi cię o przekazanie czegoś konkretnego. Twoim zadaniem jest teraz lekcja, a nie ta rozmowa.</p>`)}
  `},
  {t:'🎯 Następna lekcja to twoja szansa na ratunek', html:`
   <div class="card"><p>Możesz nie mieć okazji, by zmienić cokolwiek innego. Potraktuj najbliższą lekcję z tym dzieckiem jako moment, który o wszystkim zdecyduje.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Daj dziecku prawdziwą okazję do działania.</strong> Nie pytanie dla zasady — tylko autentyczny moment, w którym zostaje zauważone i odnosi sukces.`},
     {ic:'🏆', html:`<strong>Zaplanuj wczesny, widoczny sukces.</strong> Dziecko powinno wyjść z lekcji z poczuciem, że daje radę, a nie że zostaje w tyle.`},
     {ic:'👀', html:`<strong>Konkretna uwaga</strong> — niech dziecko poczuje, że zauważasz coś konkretnego, a nie chwalisz ogólnikowo.`},
     {ic:'🤐', html:`<strong>Ani słowa o wniosku</strong> — nawet jeśli dziecko samo o nim wspomni, ciepło zmień temat i ucz dalej.`}
   ])}
  `},
  {t:'📮 Zgłaszaj szybko i znaj jedno bezpieczne zdanie', html:`
   <div class="card"><p>O tym, że wniosek istnieje, możesz dowiedzieć się z komentarzy Działu Obsługi Klienta w profilu dziecka w BO — nie ma automatycznego systemu, który by cię o tym powiadomił. Gdy już wiesz, to, co widzisz na swoich lekcjach, jest informacją, której Dział Obsługi Klienta nie zdobędzie w żaden inny sposób.</p></div>
   ${numlist([
     'Tego samego dnia zostaw komentarz w BO z dokładnym opisem tego, co widzisz — daty i konkrety, a nie wrażenia',
     'Jeśli je znasz, zacytuj dosłownie słowa rodziny',
     'Tego samego dnia poinformuj swojego lidera zespołu',
     'Nigdy nie potwierdzaj, że zwrot został zatwierdzony, i nie rozmawiaj o żadnych kwotach'
   ])}
   ${co('co-ok','✅',`<p><strong>Zdanie, które zawsze jest bezpieczne:</strong> <em>„Dział Obsługi Klienta pomoże w tej sprawie.”</em> Na tym kończy się twoja część rozmowy — dalej przejmuje ją Dział Obsługi Klienta.</p>`)}
  `},
  {t:'🌱 Nie odpuszczaj później', html:`
   <div class="card"><p>Niezależnie od tego, czy wniosek zostanie wycofany, dziecko zostanie w twojej grupie, czy przejdzie do innego nauczyciela lub formatu — przez kilka kolejnych lekcji poświęcaj mu szczególną uwagę. Ratunek, który trzyma się przez jedną lekcję, a potem wszystko po cichu wraca do normy, często w ogóle się nie udaje.</p></div>
  `}
 ]
},
{id:'structure', numLabel:'Moduł 1', emoji:'🧭', color:'var(--coral)',
 title:'Struktura lekcji',
 desc:'Dziewięcioetapowa struktura lustrzana, dzięki której lekcja wydaje się kompletna, z przykładami z prawdziwych zajęć, oraz jak czytać własne oceny jakości.',
 obj:'Zrozum, dlaczego spójna struktura lekcji to jedna z najsilniejszych dźwigni jakości, poznaj dziewięć etapów i dowiedz się, jak czytać oceny jakości, żeby zobaczyć dokładnie, w którym miejscu tracisz uwagę klasy.',
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
  instr:'Pięć szybkich rund: umieść każdy etap w lekcji i odgadnij, który etap jest opisany. 70%, aby odblokować kolejny moduł.',
  items:[
   {type:'sort', prompt:'Gdzie należy ten etap?', card:'▶️ Zapowiedź następnej lekcji', zones:[{label:'🌅 Jeden z 4 etapów otwierających', fb:'Nie do końca — zapowiedź następnej lekcji należy do lustrzanego bloku zamykającego, a nie otwierającego.'},{label:'🏁 Jeden z 4 etapów zamykających', fb:'Zgadza się — to trzeci z czterech etapów zamykających, tuż przed zakończeniem.'}], correctZone:1},
   {type:'sort', prompt:'Który etap jest opisany?', card:'„Ten moment mówi uczniowi, po co jest dzisiejsza lekcja. Bez niego uczeń nie wie, do czego zmierza — i szybko się wyłącza.”', zones:[{label:'👋 Rozgrzewka', fb:'Nie do końca — rozgrzewka wprowadza w tryb lekcji, ale nie mówi, po co jest dzisiejsza lekcja. To cel lekcji.'},{label:'🎯 Cel lekcji', fb:'Zgadza się — jasne przedstawienie celu lekcji nadaje całej lekcji kierunek, za którym uczniowie mogą podążać.'},{label:'📋 Podsumowanie lekcji', fb:'Nie do końca — podsumowanie spogląda wstecz na to, co zostało omówione. Informacja, po co jest dzisiejsza lekcja, pojawia się na początku: to cel lekcji.'},{label:'✨ Zakończenie', fb:'Nie do końca — zakończenie zamyka lekcję. Informacja, po co jest dzisiejsza lekcja, pojawia się na początku: to cel lekcji.'}], correctZone:1},
   {type:'sort', prompt:'Gdzie należy ten etap?', card:'📖 Powtórzenie poprzedniej lekcji', zones:[{label:'🌅 Jeden z 4 etapów otwierających', fb:'Zgadza się — to drugi z czterech etapów otwierających, tuż po rozgrzewce.'},{label:'🏁 Jeden z 4 etapów zamykających', fb:'Nie do końca — powtórzenie poprzedniej lekcji otwiera lekcję, a nie ją zamyka.'}], correctZone:0},
   {type:'sort', prompt:'Który etap jest opisany?', card:'„Gdy uczeń ujmie własnymi słowami to, czego nauczył się dzisiaj, widać, co naprawdę zostało zrozumiane — i co trzeba utrwalić następnym razem.”', zones:[{label:'📖 Powtórzenie poprzedniej lekcji', fb:'Blisko — ale ten etap wraca do <em>poprzedniej</em> lekcji. Ujęcie <em>dzisiejszej</em> nauki własnymi słowami to podsumowanie lekcji.'},{label:'📋 Sprawdzenie pracy domowej', fb:'Nie do końca — ten etap dotyczy pracy domowej. To podsumowanie lekcji.'},{label:'▶️ Zapowiedź następnej lekcji', fb:'Nie do końca — zapowiedź patrzy w przyszłość. Ujęcie dzisiejszej lekcji własnymi słowami to podsumowanie lekcji.'},{label:'📋 Podsumowanie lekcji', fb:'Zgadza się — podsumowanie lekcji pozwala sprawdzić, co naprawdę zostało zrozumiane, słowami samego ucznia.'}], correctZone:3},
   {type:'sort', prompt:'Który etap jest opisany?', card:'„Ostatnie 30 sekund to właśnie to, co uczeń bierze pod uwagę, decydując, czy przyjść następnym razem — więc zakończ, świętując to, co stworzył.”', zones:[{label:'✨ Zakończenie', fb:'Zgadza się — zakończenie kończy lekcję z przytupem, a to uczucie sprawia, że uczeń wraca.'},{label:'📖 Zadanie pracy domowej', fb:'Nie do końca — zadanie pracy domowej dotyczy jasnych instrukcji. Zakończenie z przytupem to zakończenie.'},{label:'🎯 Cel lekcji', fb:'Nie do końca — cel lekcji pojawia się na początku. To zakończenie.'},{label:'👋 Rozgrzewka', fb:'Nie do końca — rozgrzewka otwiera lekcję. Ostatnie 30 sekund należą do zakończenia.'}], correctZone:0}
  ]
 }
},
{id:'prep', numLabel:'Moduł 2', emoji:'📚', color:'var(--coral)',
 title:'Czas na przygotowanie',
 desc:'Dlaczego to przestudiowanie przewodnika lekcji dzień wcześniej, a nie trzydzieści minut przed zajęciami, naprawdę chroni jakość lekcji — i gdzie znaleźć go w BO.',
 obj:'Przygotuj się do lekcji z wyprzedzeniem wystarczającym, by wychwycić luki przed jej rozpoczęciem, znajdź właściwe materiały w BackOffice i wiedz dokładnie, gdzie szukać pomocy lub zgłosić problem z treścią.',
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
 desc:'Nawyki wykraczające poza znajomość przedmiotu, dzięki którym na lekcji naprawdę dobrze się przebywa.',
 obj:'Stosuj umiejętności miękkie, które zamieniają wiedzę przedmiotową w naprawdę dobrą lekcję: elastyczność poznawczą, znajomość uczniów, bezpieczeństwo popełniania błędów, motywację i konkretną informację zwrotną.',
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
  {t:'💬 Informacja zwrotna konstruktywna, a nie ogólnikowa', html:`
   <div class="card"><p>„Dobra robota” nie mówi uczniowi niczego, co mógłby powtórzyć lub rozwinąć. Konstruktywna informacja zwrotna jest <strong>konkretna</strong> i wskazuje kierunek: co działa, a co poprawić lub zbadać dalej.</p></div>
   ${doavoid(
     ['„Udało ci się samodzielnie uruchomić pętlę — świetnie, to dokładnie ta logika, której potrzebowaliśmy”', '„Ta część jest mocna; spróbuj zastosować ten sam pomysł w następnej sekcji”', '„Widzę, że udało ci się samodzielnie naprawić ten błąd — jaki był twój tok myślenia?”'],
     ['„Dobra robota!” bez odniesienia do tego, co faktycznie zostało zrobione', '„To źle” bez wskazówki, czego spróbować zamiast tego', 'Informacja zwrotna, która pasowałaby do pracy dowolnego ucznia']
   )}
  `},
  {t:'💌 Okazuj zainteresowanie nie tylko przy złych wiadomościach', html:`
   <div class="card"><p>Rodzic, który słyszy od ciebie tylko wtedy, gdy coś jest nie tak, zaczyna kojarzyć twoje wiadomości z problemami. Wysyłaj wiadomość również po to, by docenić coś dobrego — a nie tylko by zgłosić obawy.</p></div>
   ${co('co-star','⭐',`<p>Ten jeden nawyk — napisanie raz, z własnej inicjatywy, o czymś, co uczniowi się udało — zmienia sposób, w jaki rodzina odbiera wszystko, co wysyłasz później.</p>`)}
  `}
 ],
 ix:{
  title:'Umiejętności miękkie — sprawdzian modułu',
  instr:'70%, aby odblokować końcową listę kontrolną.',
  items:[
   {type:'choice', prompt:'Uczeń nie rozumie twojego pierwszego wyjaśnienia. Jak wygląda tu elastyczność poznawcza?', opts:['Powtórzenie tego samego wyjaśnienia wolniej','Przejście dalej i powrót do tematu pod koniec lekcji','Zmiana podejścia — inne ujęcie, demonstracja, mniejsza porcja'], correct:2, fb:'Elastyczność oznacza zmianę podejścia, a nie tylko powtarzanie.'},
   {type:'sort', prompt:'Skarb czy śmieć? Czy to konstruktywna informacja zwrotna?', card:'„Udało ci się samodzielnie uruchomić pętlę — spróbuj zastosować ten sam pomysł w następnej sekcji.”', zones:[{label:'💎 Skarb — konstruktywna', fb:'Zgadza się — konkretnie mówi, co zadziałało, i wskazuje następny krok.'},{label:'🗑️ Śmieć — ogólnikowa', fb:'Nie do końca — ta informacja dokładnie nazywa, co uczeń zrobił i czego spróbować dalej. To jest konstruktywne.'}], correctZone:0},
   {type:'sort', prompt:'Skarb czy śmieć? Czy to konstruktywna informacja zwrotna?', card:'„Dobra robota dzisiaj, wszyscy!”', zones:[{label:'💎 Skarb — konstruktywna', fb:'Nie do końca — jest przyjazna, ale nikomu nie mówi, co powtórzyć lub rozwinąć.'},{label:'🗑️ Śmieć — ogólnikowa', fb:'Zgadza się — przyjazna, ale pasowałaby do każdego. Nazwij, co faktycznie zostało zrobione dobrze.'}], correctZone:1},
   {type:'choice', prompt:'Dlaczego warto pisać do rodzica o czymś dobrym, a nie tylko o problemach?', opts:['Rodzice oczekują tego jako formalności','Zmienia to sposób, w jaki rodzina odbiera wszystko, co wysyłasz później','Jest to potrzebne tylko wtedy, gdy uczeń ma słabe oceny'], correct:1, fb:'Pozytywne wiadomości wysyłane z własnej inicjatywy budują zaufanie, dzięki któremu trudniejsze rozmowy są później łatwiejsze.'}
  ]
 }
},
{id:'checklist', numLabel:'Lista kontrolna', emoji:'✅', color:'var(--coral)',
 title:'Końcowa lista kontrolna',
 desc:'Tu nie ma quizu — tylko najważniejsze punkty tego miniszkolenia, zanim je zamkniesz.',
 obj:'Przejrzyj poniższą listę kontrolną. Ten moduł nie jest oceniany — przeczytaj go, a potem ukończ miniszkolenie.',
 sections:[
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   ${numlist([
     'Tego samego dnia, w którym dowiaduję się o wniosku, zostawiam komentarz w BO i informuję lidera zespołu',
     'Moja następna lekcja z tym uczniem to prawdziwa próba ratunku — prawdziwa okazja do działania, widoczny sukces, konkretna uwaga, ani słowa o wniosku',
     'Nigdy nie potwierdzam zatwierdzenia zwrotu i nie rozmawiam o kwotach — używam jednego bezpiecznego zdania, a resztę zostawiam Działowi Obsługi Klienta'
   ])}
  `},  {t:'🌱 Na każdej lekcji', html:`
   ${numlist([
     'Za każdym razem stosuję tę samą strukturę lekcji, żeby uczniowie znali rytm i wkładali energię w naukę',
     'Otwieram lekcję czterema etapami: rozgrzewką, powtórzeniem poprzedniej lekcji słowami ucznia, rzetelnym sprawdzeniem pracy domowej i jasno przedstawionym celem lekcji',
     'Na etapie teorii i praktyki uczę małymi porcjami, najpierw pokazuję na swoim ekranie i chronię czas na praktykę',
     'Zamykam lekcję etapami lustrzanymi: podsumowaniem lekcji słowami ucznia, jasnymi instrukcjami do pracy domowej, zapowiedzią następnej lekcji i zakończeniem, które docenia to, co uczniowie stworzyli',
     'Czytam swoje oceny jakości etap po etapie i poprawiam ten etap, który się wymyka, już na najbliższej lekcji',
     'Studiuję przewodnik lekcji i materiały dzień wcześniej — nie trzydzieści minut przed — i znam cel lekcji, a nie tylko kroki',
     'Otwieram przewodnik lekcji i prezentację z BO i sprawdzam, czy ID kursu zgadza się z tym, na który są zapisani moi uczniowie',
     'Gdy znajduję lukę, pytam na kanale kursu na Slacku, mojego mentora regionalnego lub lidera zespołu — a błędy w treści zgłaszam ikoną 🐞 w BO',
     'Gdy moje pierwsze wyjaśnienie nie trafia, zmieniam podejście — inne ujęcie, demonstracja, mniejsza porcja — zamiast je powtarzać',
     'Poznaję swoich uczniów i buduję bezpieczną przestrzeń, w której błędy nie są oceniane',
     'Daję konkretną, konstruktywną informację zwrotną: co zadziałało i czego spróbować dalej — nigdy samo „dobra robota”',
     'Piszę do rodzin także z dobrymi wiadomościami, nie tylko gdy coś idzie nie tak'
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
