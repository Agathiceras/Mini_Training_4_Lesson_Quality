/* Mini_Training_4_Lesson_Quality - Italian content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='it';
const CONTENT = {
  flag:'🇮🇹', dir:'ltr',
  ui:{
    heroCard1:"<b>Al tuo ritmo.</b> I tuoi progressi vengono salvati in questo browser.",
    heroCard2:"<b>Pratica inclusa.</b> Ogni modulo si chiude con una breve verifica.",
    pbLabel:'moduli completati',
    tapOpen:'Tocca per aprire',
    tapFlip:'Tocca per girare',
    lblSee:'Cosa vedi',
    lblDo:'Cosa fai',
    lblSay:'Cosa puoi dire',
    lblReport:'Dove segnalarlo',
    lblAvoid:'Da evitare',
    lblTip:'Consiglio',
    stepOf:'Passo {i} di {n}',
    next:'Avanti',
    pageTitle:"Mini-training · Qualità della lezione — Formazione tutor Kodland",
    logoSub:'Dipartimento Sviluppo Tutor',
    heroEyebrow:"🎯 Mini-training",
    heroTitle:"Uno sguardo onesto alla <span class=\"h-pill\">qualità della lezione</span>",
    heroIntro:"Hai ricevuto questa formazione perché alcuni dei tuoi studenti hanno chiesto un rimborso per problemi legati alla qualità della lezione. Qui ti mostriamo cosa puoi fare come tutor e come gestire queste situazioni.",
    heroWork:"Completa i 6 brevi moduli. Per sbloccare il modulo successivo, devi ottenere almeno il 70% nel test di ciascun modulo. Durata totale: circa 35–40 minuti.",
    startBtn:"🚀 Inizia la formazione",
    pathLabel:'Il tuo percorso di apprendimento',
    devTitle:'Dev: sblocca tutti i moduli per la revisione',
    backToPath:'Torna al percorso',
    modulesPassed:'{done} / {total} moduli superati',
    moduleN:'Modulo {n}',
    of:'di',
    locked:'🔒 Bloccato',
    passedBadge:'✅ Superato · {pct}%',
    reviewedBadge:'✅ Rivisto',
    startBadge:'▶ Inizia',
    reviewBadge:'▶ Rivedi',
    objective:'Obiettivo',
    startCheck:'▶ Inizia la verifica del modulo',
    finishBtn:'▶ Concludi il mini-training',
    doneBack:'✓ Fatto — torna al percorso',
    ixBadge:'📋 Verifica del modulo — 70% per sbloccare il modulo successivo',
    ixItemBadge:'📋 Verifica del modulo — domanda {i} di {n}',
    scoreSoFar:'Punteggio finora: {c} / {t}',
    continue:'Continua →',
    sortWrong:'Non proprio — la risposta giusta è “{label}”.',
    resPassed:'Modulo superato!',
    resFailed:'Non ci sei ancora',
    resUnlocked:"Hai sbloccato il modulo successivo.",
    resDone:"Hai completato questo mini-training.",
    resNeed:'Ti serve il 70% per sbloccare il modulo successivo. Rivedi la sezione qui sopra e riprova la verifica.',
    resContinue:'Torna al percorso di apprendimento',
    resFinish:'Continua',
    resBack:'Torna al percorso',
    resReview:'Rivedi questo modulo',
    doneEyebrow:'Mini-training completato',
    doneTitle:'🎉 Congratulazioni!',
    doneP1:"🎉 <strong>Congratulazioni! Hai completato questo mini-training.</strong>",
    doneP2:"Qui hai finito! Torna alla pagina della formazione nell’LMS da cui hai aperto questo mini-training per chiudere l’attività.",
    doneP3:"👉 <strong>Se nell’LMS, subito sotto la formazione, c’è una verifica o un test, assicurati di completarlo e di raggiungere il punteggio minimo richiesto</strong> — altrimenti l’attività potrebbe risultare incompleta.",
    doneP4:'Buona fortuna! ❤️',
    doneP5:'',
    devUnlockAlert:'Modalità dev: tutti i moduli sono ora sbloccati per la revisione.',
    devOn:'🔓 Modalità dev ATTIVA — tutti i moduli sbloccati',
    devOff:'🔒 Modalità dev DISATTIVATA — progressi cancellati',
    devBadge:'🔓 MODALITÀ DEV',
    doLabel:'✅ Da fare',
    avoidLabel:'🚫 Da evitare',
    noticeLabel:'Nota:',
    cvSee:'Cosa vedi:',
    cvDo:'Cosa fai:',
    dtExample:'Esempio da una lezione reale',
    dtNext:'Prossimo:',
    dtDone:"✅ Ecco tutte e quattro le aree. Ora classifica quello che vedi.",
    tlVideoTitle:'{label} — esempio da una lezione reale',
    tlVideoMeta:'Guarda come si svolge questa fase in una lezione reale'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduzione', emoji:'🧩', color:'var(--coral)',
 title:'Perché sei qui',
 desc:'Perché questo motivo merita un’autovalutazione onesta e concreta — e le regole da seguire quando una richiesta di rimborso è già arrivata.',
 obj:'Capire che questo motivo riguarda la lezione in sé, perché chiedere aiuto presto è proprio la mossa giusta, e cosa fare esattamente (e cosa non fare) quando una richiesta di rimborso esiste già.',
 sections:[
  {t:'🪞 Il più difficile da sentirsi dire', html:`
   <div class="card"><p>Questo motivo significa che una famiglia ha percepito come problema <strong>la qualità della lezione stessa</strong> — non il bambino, non il livello, non l’orario. È più difficile da accettare rispetto a quasi tutti gli altri motivi, e viene la tentazione di mettersi sulla difensiva o di trovare giustificazioni.</p></div>
   ${co('co-idea','💡',`<p><strong>Non è un giudizio su di te come persona.</strong> È un segnale su comportamenti specifici, e correggibili, in lezioni specifiche. I tutor che lo prendono sul serio e in modo concreto — invece che sul personale — sono quelli che ribaltano la situazione più in fretta.</p>`)}
   ${co('co-star','🎓',`<p><strong>Fatti osservare da occhi esterni, e presto.</strong> Il tuo Regional Mentor è lì proprio per questo: chiedere un feedback su come insegni è la mossa giusta, non il segno che c’è qualcosa che non va in te.</p>`)}
  `},
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   <div class="card"><p>Tutto quello che hai letto sopra serve a intercettare il problema in anticipo. Ma potresti aprire questa formazione perché una famiglia ha <strong>già</strong> chiesto un rimborso. Le regole qui sotto valgono qualunque sia il motivo: leggile per prime, poi usa il resto della formazione per capire cosa ha portato a questo punto e cosa puoi ancora fare a lezione.</p></div>
   ${co('co-idea','💡',`<p><strong>La richiesta viene creata dal Client Service, non da te</strong> — quella parte non dipende da te. Quello che resta nelle tue mani è tutto ciò che succede a lezione da qui in avanti, e non è poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Non dire nulla sulla richiesta</strong> — né al bambino, né alla famiglia — a meno che il Client Service non ti chieda esplicitamente di comunicare qualcosa di specifico. Ora il tuo compito è la lezione, non la conversazione.</p>`)}
  `},
  {t:'🎯 La tua prossima lezione è il tentativo di recupero', html:`
   <div class="card"><p>Potresti non avere altre occasioni per cambiare le cose. Considera la prossima lezione con questo bambino come il momento decisivo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dagli un vero turno.</strong> Non una domanda tanto per fare: un momento autentico in cui si senta visto e riesca in qualcosa.`},
     {ic:'🏆', html:`<strong>Prevedi un successo rapido e visibile.</strong> Deve uscire dalla lezione sentendosi capace, non indietro.`},
     {ic:'👀', html:`<strong>Attenzione specifica</strong> — fallo sentire notato per qualcosa di concreto, non lodato in modo generico.`},
     {ic:'🤐', html:`<strong>Nessun accenno alla richiesta</strong> — anche se è il bambino a tirarla fuori, cambia argomento con gentilezza e continua a insegnare.`}
   ])}
  `},
  {t:'📮 Segnala subito e conosci l’unica frase sicura', html:`
   <div class="card"><p>Puoi scoprire che esiste una richiesta dai commenti del Client Service sul profilo del bambino in BO: non c’è un sistema automatico che ti avvisa. Una volta che lo sai, quello che hai osservato nelle tue lezioni è un’informazione che il Client Service non può ottenere in nessun altro modo.</p></div>
   ${numlist([
     'Lascia un commento in BO il giorno stesso riportando esattamente ciò che hai osservato: date e fatti concreti, non impressioni',
     'Riporta le parole della famiglia, testuali, se le hai',
     'Coinvolgi il tuo Team Leader il giorno stesso',
     'Non confermare mai che un rimborso è stato approvato e non parlare mai di importi'
   ])}
   ${co('co-ok','✅',`<p><strong>La frase che è sempre sicura da dire:</strong> <em>“Il nostro Servizio Clienti vi aiuterà con questo.”</em> Lì finisce la tua parte della conversazione: da quel momento se ne occupa il Client Service.</p>`)}
  `},
  {t:'🌱 Continua anche dopo', html:`
   <div class="card"><p>Che la richiesta venga ritirata, che il bambino resti nel tuo gruppo o che passi a un altro tutor o formato, continua a dedicargli un’attenzione in più nelle lezioni successive. Un recupero che regge per una lezione e poi torna piano piano alla normalità spesso non regge affatto.</p></div>
  `}
 ]
},
{id:'structure', numLabel:'Modulo 1', emoji:'🧭', color:'var(--coral)',
 title:'Struttura della lezione',
 desc:'La struttura “a specchio” in nove fasi che fa sentire una lezione completa, con esempi da lezioni reali, e come leggere le tue valutazioni di qualità.',
 obj:'Capire perché una struttura della lezione costante è una delle leve più forti per la qualità, imparare le nove fasi e saper leggere le tue valutazioni di qualità per vedere esattamente in quale punto perdi l’attenzione della classe.',
 sections:[
  {t:'🧭 Il segreto è la costanza', html:`
   <div class="card"><p>Quando uno studente impara il tuo ritmo, smette di sprecare energie a chiedersi “e adesso cosa succede?” e le usa per imparare. Segui la stessa struttura ogni volta, finché non diventa naturale — per te e per loro.</p></div>
  `},
  {t:'🌅 L’inizio: quattro fasi', html:`
   ${timeline([
     {ic:'👋', label:'1 · Riscaldamento', items:['Una domanda veloce o una piccola sfida che porta lo studente in “modalità lezione” — e un momento per creare senso di gruppo.'], video:'https://drive.google.com/file/d/1fMWyd6bfCcUauqIIaNldojVuHYg6J9JR/preview'},
     {ic:'📖', label:'2 · Ripasso della lezione precedente', items:['Riprendi brevemente quanto imparato la volta scorsa, con le parole dello studente. Il “questo me lo ricordo” crea una vera fiducia in sé.'], video:'https://drive.google.com/file/d/1J1jijTw8bj8l9yw9aMNXp9zHwxEbkWbY/preview'},
     {ic:'📋', label:'3 · Controllo dei compiti', items:['Rivedete insieme i compiti: individua i fraintendimenti, apprezza l’impegno, fai vedere che il lavoro viene davvero guardato.'], video:'https://drive.google.com/file/d/1H2Awetu6fkoatv2RMonUeBawgK7tsR3e/preview'},
     {ic:'🎯', label:'4 · Obiettivo della lezione', items:['Spiega chiaramente di cosa si parla oggi. Uno studente che non sa “a cosa serve” la lezione di oggi perde interesse in fretta.'], video:'https://drive.google.com/file/d/1cuqULcb1jxkwV_uepi-dnxFdx3FB41Si/preview'}
   ])}
  `},
  {t:'🎨 La parte centrale: teoria e pratica', html:`
   <div class="card"><p>È la fase più lunga, in cui si spiega il nuovo argomento e lo si mette subito in pratica. Proponi la teoria a piccole dosi — un concetto, poi subito lavoro pratico su quello — e <strong>mostra prima tu</strong>: fai la dimostrazione sul tuo schermo prima che gli studenti provino sul loro. Difendi con decisione il tempo della pratica: una lezione in cui i ragazzi ti hanno solo guardato lavorare è una lezione in cui nessuno si è davvero esercitato.</p></div>
  `},
  {t:'🏁 La fine: lo specchio', html:`
   <div class="card"><p>Le quattro fasi finali riprendono quelle iniziali in ordine inverso: la lezione finisce come è cominciata, dando un senso di chiusura e di ritmo.</p></div>
   ${timeline([
     {ic:'📋', label:'1 · Riepilogo della lezione', items:['Riassumi ciò che avete visto, ma fallo riassumere anche allo studente: le sue parole rivelano cosa ha davvero assimilato.'], video:'https://drive.google.com/file/d/1jNZGDMnRYh83xGd2NVHrZTdgXLagi2GZ/preview'},
     {ic:'📖', label:'2 · Assegnazione dei compiti', items:['Istruzioni chiarissime su cosa fare e come. Compiti vaghi sono compiti che non verranno fatti.'], video:'https://drive.google.com/file/d/1qOYvENqjiYlwRaFvDb0A7W6JYgWPCjJc/preview'},
     {ic:'▶️', label:'3 · Anteprima della prossima lezione', items:['Anticipa cosa vi aspetta la prossima volta: mantiene lo studente coinvolto emotivamente, non solo intento a seguire una lista di attività.'], video:'https://drive.google.com/file/d/17bE6JdZmDFJ_igrWYhc7fnpD39b-k-2K/preview'},
     {ic:'✨', label:'4 · Chiusura', items:['Concludi in bellezza: festeggia ciò che lo studente ha creato. Gli ultimi 30 secondi sono quelli che pesano di più quando decide se presentarsi alla lezione successiva.'], video:'https://drive.google.com/file/d/1OTYSh07wSosjgsHFD05YvccD3NY2CgsX/preview'}
   ])}
  `},
  {t:'📊 Leggere le tue valutazioni di qualità', html:`
   <div class="card"><p>Le tue valutazioni di qualità corrispondono direttamente a queste fasi: servono a mostrarti esattamente in quale punto della struttura qualcosa sta cedendo — un riscaldamento saltato, un obiettivo mai dichiarato, un tempo di pratica ridotto, una chiusura che non c’è stata.</p></div>
   ${co('co-idea','💡',`<p><strong>Leggile fase per fase, non come un unico punteggio complessivo.</strong> Un punteggio basso senza contesto ti dice poco; un punteggio basso su “Obiettivo della lezione” o “Chiusura” ti dice esattamente cosa cambiare già nella prossima lezione.</p>`)}
  `}
 ],
 ix:{
  title:'Struttura della lezione — verifica del modulo',
  instr:'Cinque round veloci: colloca ogni fase nella lezione e indovina quale fase viene descritta. 70% per sbloccare il modulo successivo.',
  items:[
   {type:'sort', prompt:'Dove si colloca questa fase?', card:'▶️ Anteprima della prossima lezione', zones:[{label:'🌅 Una delle 4 fasi iniziali', fb:'Non proprio — l’Anteprima della prossima lezione fa parte del blocco finale a specchio, non di quello iniziale.'},{label:'🏁 Una delle 4 fasi finali', fb:'Esatto — è la terza delle quattro fasi finali, subito prima della Chiusura.'}], correctZone:1},
   {type:'sort', prompt:'Quale fase viene descritta?', card:'“Questo momento dice allo studente a cosa serve la lezione di oggi. Senza, non capisce verso cosa sta lavorando — e perde interesse in fretta.”', zones:[{label:'👋 Riscaldamento', fb:'Non proprio — il Riscaldamento porta gli studenti in modalità lezione, ma non dice a cosa serve la lezione di oggi. Questo è l’Obiettivo della lezione.'},{label:'🎯 Obiettivo della lezione', fb:'Esatto — dichiarare chiaramente l’Obiettivo della lezione dà a tutta la lezione una direzione che gli studenti possono seguire.'},{label:'📋 Riepilogo della lezione', fb:'Non proprio — il Riepilogo guarda indietro a ciò che avete visto. Dire a cosa serve la lezione di oggi avviene all’inizio: è l’Obiettivo della lezione.'},{label:'✨ Chiusura', fb:'Non proprio — la Chiusura conclude la lezione. Sapere a cosa serve la lezione di oggi avviene all’inizio: è l’Obiettivo della lezione.'}], correctZone:1},
   {type:'sort', prompt:'Dove si colloca questa fase?', card:'📖 Ripasso della lezione precedente', zones:[{label:'🌅 Una delle 4 fasi iniziali', fb:'Esatto — è la seconda delle quattro fasi iniziali, subito dopo il Riscaldamento.'},{label:'🏁 Una delle 4 fasi finali', fb:'Non proprio — il Ripasso della lezione precedente apre la lezione, non la chiude.'}], correctZone:0},
   {type:'sort', prompt:'Quale fase viene descritta?', card:'“Lasciare che lo studente metta in parole sue ciò che ha imparato oggi rivela cosa ha davvero assimilato — e cosa va rinforzato la volta successiva.”', zones:[{label:'📖 Ripasso della lezione precedente', fb:'Ci sei quasi — ma quella fase riprende la lezione <em>precedente</em>. Mettere in parole proprie quanto imparato <em>oggi</em> è il Riepilogo della lezione.'},{label:'📋 Controllo dei compiti', fb:'Non proprio — il Controllo dei compiti serve a rivedere i compiti. Questo è il Riepilogo della lezione.'},{label:'▶️ Anteprima della prossima lezione', fb:'Non proprio — l’Anteprima guarda avanti. Riassumere la lezione di oggi con parole proprie è il Riepilogo della lezione.'},{label:'📋 Riepilogo della lezione', fb:'Esatto — il Riepilogo della lezione ti permette di verificare cosa è stato davvero assimilato, con le parole dello studente.'}], correctZone:3},
   {type:'sort', prompt:'Quale fase viene descritta?', card:'“Gli ultimi 30 secondi sono quelli che lo studente valuta quando decide se presentarsi alla prossima lezione — quindi chiudi festeggiando ciò che ha creato.”', zones:[{label:'✨ Chiusura', fb:'Esatto — la Chiusura termina la lezione in bellezza, ed è quella sensazione a far tornare lo studente.'},{label:'📖 Assegnazione dei compiti', fb:'Non proprio — l’Assegnazione dei compiti riguarda istruzioni chiare. Chiudere in bellezza è la Chiusura.'},{label:'🎯 Obiettivo della lezione', fb:'Non proprio — l’Obiettivo della lezione arriva all’inizio. Questa è la Chiusura.'},{label:'👋 Riscaldamento', fb:'Non proprio — il Riscaldamento apre la lezione. Gli ultimi 30 secondi appartengono alla Chiusura.'}], correctZone:0}
  ]
 }
},
{id:'prep', numLabel:'Modulo 2', emoji:'📚', color:'var(--coral)',
 title:'Tempo di preparazione',
 desc:'Perché studiare il manuale il giorno prima, e non trenta minuti prima, è ciò che protegge davvero la qualità di una lezione — e dove trovarlo in BO.',
 obj:'Prepararti a una lezione con abbastanza anticipo da accorgerti delle lacune prima che inizi, trovare il materiale giusto nel BackOffice e sapere esattamente dove chiedere aiuto o segnalare un problema nei contenuti.',
 sections:[
  {t:'⏳ Non trenta minuti prima', html:`
   <div class="card"><p>Una preparazione fatta mezz’ora prima della lezione — o dieci minuti prima — non ti lascia il tempo di imparare davvero qualcosa che non sai già. Se c’è un concetto, un pezzo di codice o uno strumento su cui non ti senti sicuro, finirai per impararlo dal vivo, davanti allo studente.</p></div>
   ${co('co-idea','💡',`<p><strong>Studia il manuale e i materiali il giorno prima.</strong> Così hai il tempo di accorgerti di una lacuna nelle tue conoscenze, di un bug nel materiale o di un’attività che non ti è del tutto chiara — e di fare davvero qualcosa prima della lezione.</p>`)}
  `},
  {t:'🎯 Conosci l’obiettivo, non solo i passaggi', html:`
   <div class="card"><p>Cerca di capire con chiarezza quale risultato deve davvero raggiungere la lezione di oggi, non solo la sequenza di passaggi del manuale. Se conosci l’obiettivo, puoi adattare il percorso quando qualcosa va diversamente dal previsto, senza perdere il senso della lezione.</p></div>
   <img class="mt-pic" src="Pictures_T4/goals.png" alt="Esempio di pagina del manuale con gli obiettivi della lezione e i risultati di apprendimento">
  `},
  {t:'🆘 Quando trovi una lacuna', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>Usa il canale Slack del tuo corso.</strong> Quasi certamente altri tutor si sono già imbattuti nello stesso bug o nello stesso passaggio poco chiaro.`},
     {ic:'🎓', html:`<strong>Chiedi al tuo Regional Mentor</strong> se riguarda come insegnare o spiegare qualcosa di specifico.`},
     {ic:'👩‍💼', html:`<strong>Chiedi al tuo Team Leader</strong> se riguarda il corso in sé, i materiali o qualcosa da correggere a monte.`}
   ])}
   ${co('co-star','⭐',`<p>Trovare una lacuna il giorno prima e chiedere aiuto significa che il sistema funziona esattamente come dovrebbe. Trovarla dal vivo, a lezione, è proprio ciò che il tempo di preparazione serve a evitare.</p>`)}
  `},
  {t:'🗂️ Trovare il materiale del corso in BO', html:`
   <div class="card"><p>Il manuale della lezione e la presentazione si trovano nel BackOffice (BO), collegati esattamente al corso da cui stai insegnando — non su una vecchia pagina wiki che potrebbe non essere aggiornata. La simulazione qui sotto ti mostra, passo dopo passo, dove trovarli e dove segnalare eventuali errori nei contenuti.</p></div>
   ${co('co-danger','🚨',`<p><strong>Controlla sempre che l’ID del corso che apri corrisponda a quello a cui sono iscritti i tuoi studenti.</strong> In BO ci sono corsi molto simili uno accanto all’altro: insegnare da quello sbagliato, anche solo da una versione diversa dello stesso corso, può rendere una lezione caotica in pochi secondi.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Materiale del corso ed errori nei contenuti</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Materiale del corso ed errori nei contenuti" loading="lazy"></iframe></div></div>
  `}
 ],
 ix:{
  title:'Tempo di preparazione — verifica del modulo',
  instr:'70% per sbloccare il modulo successivo.',
  items:[
   {type:'choice', prompt:'Quando dovresti studiare il manuale e i materiali di una lezione?', opts:['Il giorno prima, così hai il tempo di sistemare eventuali lacune','Subito prima della lezione, così è tutto fresco in mente','Solo se è una lezione che non hai mai tenuto prima'], correct:0, fb:'Il giorno prima ti dà il tempo di risolvere davvero qualunque cosa trovi: una lacuna, un bug, un’attività che non ti è del tutto chiara.'},
   {type:'choice', prompt:'Trovi nel manuale un pezzo di codice che non funziona. Cosa fai?', opts:['Salti quella parte della lezione e speri che nessuno se ne accorga','Lo risolvi dal vivo durante la lezione insieme agli studenti','Chiedi nel canale Slack del tuo corso, al tuo mentor o al tuo Team Leader — e lo segnali con l’icona 🐞 in BO'], correct:2, fb:'Questi canali esistono proprio perché tu non debba risolverlo dal vivo, da solo — e segnalarlo fa sì che venga corretto per tutti i gruppi dopo il tuo.'},
   {type:'choice', prompt:'Prima di aprire il manuale della lezione in BO, cosa dovresti controllare?', opts:['Che alla lezione sia allegata una presentazione','Che l’ID del corso corrisponda a quello a cui sono iscritti i tuoi studenti','Che il manuale sia stato aggiornato questo mese'], correct:1, fb:'In BO esistono corsi simili uno accanto all’altro. Insegnare dall’ID di corso sbagliato è uno dei modi più rapidi per ritrovarsi con una lezione caotica.'},
   {type:'choice', prompt:'Perché conoscere l’obiettivo della lezione è più utile che conoscere solo i passaggi?', opts:['Ti permette di adattare il percorso se qualcosa va diversamente, senza perdere il senso della lezione','Ti permette di saltare le parti del manuale che trovi meno utili','Ti aiuta a finire la lezione più in fretta'], correct:0, fb:'Conoscere il “perché” ti permette di adattare il “come” senza perdere lo scopo della lezione.'}
  ]
 }
},
{id:'soft', numLabel:'Modulo 3', emoji:'🤝', color:'var(--coral)',
 title:'Soft skill',
 desc:'Le abitudini che vanno oltre la conoscenza della materia e che rendono una lezione piacevole per gli studenti. Includono il ritmo della lezione, la verifica della comprensione e la pazienza nel modo di comunicare.',
 obj:'Applicare le competenze trasversali che trasformano la conoscenza della materia in una lezione davvero efficace: flessibilità cognitiva, conoscenza dei propri studenti, un ambiente sicuro in cui poter commettere errori, motivazione, un ritmo adeguato all’età, verifica della comprensione, comunicazione paziente, attenzione equa e feedback specifici.',
 sections:[
  {t:'🤝 Non basta conoscere la materia', html:`
   <div class="card"><p>Padroneggiare la materia è necessario, ma non è ciò che rende piacevole stare a lezione. Questo nasce da un insieme di abitudini che non hanno nulla a che fare con le competenze tecniche.</p></div>
   ${iconGrid([
     {ic:'🔄', html:`<strong>Flessibilità cognitiva.</strong> Adattare la spiegazione, il ritmo o l’approccio quando il primo tentativo non funziona, invece di ripetere la stessa cosa a voce più alta.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Conoscere i tuoi studenti.</strong> I loro interessi, ciò che li motiva: è questo che rende efficaci gli esempi e trasforma una lezione generica in una lezione che sentono propria.`},
     {ic:'🛡️', html:`<strong>Un ambiente sicuro per sbagliare.</strong> Gli studenti si mettono in gioco e imparano davvero quando sanno che una risposta sbagliata non verrà giudicata.`},
     {ic:'🔥', html:`<strong>Una passione visibile.</strong> Se vedono in te un interesse autentico, sono più motivati a partecipare: non si può fingere, ma quando manca si nota.`}
   ])}
  `},
  {t:'💬 Feedback costruttivi, non generici', html:`
   <div class="card"><p>“Bravo” non dice allo studente nulla da ripetere o su cui costruire. Un feedback costruttivo è <strong>specifico</strong> e indica una direzione: cosa funziona e cosa migliorare o esplorare dopo.</p></div>
   ${doavoid(
     ['“Hai fatto funzionare il ciclo da solo — ottimo, è proprio la logica che ci serviva”', '“Questa parte è solida; prova ad applicare la stessa idea alla sezione successiva”', '“Ho visto che hai corretto quel bug da solo: come ci hai ragionato?”'],
     ['“Bravo!” senza alcun riferimento a ciò che è stato fatto', '“È sbagliato” senza indicare cosa provare invece', 'Feedback che andrebbero ugualmente bene per il lavoro di qualsiasi studente']
   )}
  `},
  {t:'🐢 Ritmo della lezione e verifica della comprensione — soprattutto con i bambini più piccoli', html:`
   <div class="card"><p>Una lezione può essere corretta e, allo stesso tempo, procedere troppo velocemente per il bambino che hai davanti. Le famiglie spesso descrivono questa situazione dicendo: <em>«Il tutor è passato all’argomento successivo senza spiegare»</em> oppure <em>«Il metodo era adatto a bambini più grandi»</em>. La soluzione è rallentare i passaggi, usare parole che il bambino conosce e <strong>verificare che abbia capito prima di andare avanti</strong>. Non basta chiedere «Ci sono domande?» e proseguire.</p></div>
   ${iconGrid([
     {ic:'1️⃣', html:`<strong>Un’istruzione alla volta.</strong> Spiega un passaggio, aspetta che venga completato e poi passa al successivo. Non inserire tre istruzioni in un’unica frase.`},
     {ic:'🖥️', html:`<strong>«Fammi vedere».</strong> Chiedi allo studente di condividere lo schermo: quello che vedi ti dà molte più informazioni rispetto a un semplice «Sì, ho capito».`},
     {ic:'🗣️', html:`<strong>«Cosa farai per prima cosa?».</strong> Chiedere allo studente di ripetere il passaggio successivo permette di individuare eventuali difficoltà prima che inizi.`},
     {ic:'👍', html:`<strong>Segnali rapidi:</strong> pollice in su, un’emoji o una reazione quando un passaggio è stato completato. In questo modo puoi avere una visione immediata di tutto il gruppo.`},
     {ic:'⏳', html:`<strong>Tempo di attesa.</strong> Dopo aver fatto una domanda, conta fino a cinque prima di rispondere tu stesso o dare la parola a qualcun altro.`},
     {ic:'📖', html:`<strong>Parole che conoscono.</strong> Spiega i termini nuovi la prima volta che li utilizzi, accompagnandoli con un esempio legato alla loro vita quotidiana.`}
   ])}
   ${dimTabs([
     {ic:'🧒', title:'Dai 6 agli 8 anni',
      intro:'Passaggi brevi, tante dimostrazioni e pochissime parole.',
      tips:[
       {ic:'👀', html:`<strong>Mostra ogni passaggio</strong> sul tuo schermo prima che gli studenti provino a svolgerlo e assicurati che ogni passaggio preveda una sola azione.`},
       {ic:'🔤', html:`<strong>Alcuni stanno ancora imparando a leggere.</strong> Leggi le istruzioni ad alta voce e usa icone, colori e indicazioni visive invece di testi lunghi.`},
       {ic:'🧸', html:`<strong>Esempi quotidiani:</strong> <em>«Un ciclo è come lavarsi i denti: ripeti lo stesso movimento più e più volte».</em>`},
       {ic:'🎉', html:`<strong>Verifica spesso la comprensione e festeggia</strong> ogni piccolo traguardo raggiunto.`}
      ]},
     {ic:'🧑', title:'Dai 9 agli 11 anni',
      intro:'Sono in grado di seguire una breve sequenza di passaggi, purché tu verifichi che abbiano capito.',
      tips:[
       {ic:'📋', html:`<strong>Proponi due o tre passaggi e scrivili nella chat</strong> sotto forma di elenco, così potranno consultarli quando ne avranno bisogno.`},
       {ic:'🗣️', html:`Prima di iniziare, <strong>chiedi loro di spiegare con parole proprie</strong> cosa faranno.`},
       {ic:'🔍', html:`<strong>Controlla i loro schermi</strong> dopo ogni passaggio, non soltanto alla fine.`},
       {ic:'🧩', html:`<strong>Introduci i nuovi termini con esempi</strong> che conoscono, come quelli tratti dai videogiochi o dalle app che utilizzano.`}
      ]},
     {ic:'🧑‍🎓', title:'Dai 12 anni in su',
      intro:'Concedi maggiore autonomia, ma non confondere il silenzio con la comprensione.',
      tips:[
       {ic:'🧠', html:`<strong>Spiega il perché,</strong> non soltanto il come. Gli studenti più grandi partecipano maggiormente quando comprendono la logica alla base di un’attività.`},
       {ic:'🗳️', html:`<strong>Utilizza verifiche anonime</strong> (un sondaggio o una reazione): gli adolescenti raramente dicono «Non ho capito» davanti ai propri compagni.`},
       {ic:'🔒', html:`<strong>Offri la possibilità di fare domande in privato tramite la chat,</strong> così potranno esprimere i propri dubbi senza essere visti dagli altri.`},
       {ic:'🚀', html:`<strong>Procedi più velocemente con chi dimostra di aver capito</strong> e proponi una sfida aggiuntiva, senza lasciare indietro gli altri.`}
      ]}
   ],'✅ Questi sono i tre gruppi di età.')}
  `},
  {t:'🗣️ Pazienza nel modo di comunicare — frasi da evitare e cosa dire al loro posto', html:`
   <div class="card"><p>Gli studenti ricordano più come li hai fatti sentire che ciò che hai spiegato. Una sola frase detta con impazienza può far smettere un bambino di fare domande e portare una famiglia a descrivere l’intero corso dicendo: <em>«Il tutor non ha pazienza»</em>. Quando siamo stanchi o abbiamo fretta, è facile ricorrere a queste espressioni. Impara a riconoscerle e tieni pronta un’alternativa:</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>🚫 Invece di dire…</th><th>✅ Prova a dire…</th></tr>
    <tr><td><em>«L’ho già spiegato».</em></td><td><em>«Lascia che te lo mostri in un altro modo».</em></td></tr>
    <tr><td><em>«È facile».</em></td><td><em>«Questo esercizio richiede un po’ di pratica: proviamoci insieme».</em></td></tr>
    <tr><td><em>«Sbrigati, ti stiamo aspettando tutti».</em></td><td><em>«Prenditi il tuo tempo. Nel frattempo, gli altri possono provare la sfida 2».</em></td></tr>
    <tr><td><em>«Non adesso».</em> (a uno studente che alza la mano)</td><td><em>«Ti ho visto, Leo. Tocca a te tra poco».</em></td></tr>
    <tr><td><em>«Guarda, tutti gli altri ci sono riusciti».</em></td><td><em>«Hai già completato correttamente la prima parte. Vediamo insieme la successiva».</em></td></tr>
    <tr><td><em>«È sbagliato».</em></td><td><em>«Ci sei quasi! Cosa succede se modifichi questa riga?».</em></td></tr>
   </table></div>
   ${co('co-idea','⚖️',`<p><strong>La pazienza significa anche essere equi.</strong> Distribuisci la tua attenzione: alterna i turni, coinvolgi studenti diversi e controlla chi ha bisogno di più tempo con la stessa frequenza di chi procede velocemente. Un bambino che sente che il tutor parla soltanto con gli studenti «bravi» smette di impegnarsi.</p>`)}
  `},
  {t:'💌 Fatti sentire non solo per le cattive notizie', html:`
   <div class="card"><p>Un genitore che ti sente solo quando qualcosa non va inizia ad associare i tuoi messaggi ai problemi. Scrivi anche per festeggiare qualcosa di bello, non solo per segnalare preoccupazioni.</p></div>
   ${co('co-star','⭐',`<p>Questa sola abitudine — scrivere una volta, di tua iniziativa, su qualcosa che lo studente ha fatto bene — cambia il modo in cui la famiglia leggerà tutto ciò che invierai in seguito.</p>`)}
  `}
 ],
 ix:{
  title:'Soft skill — verifica del modulo',
  instr:'È necessario ottenere il 70% per sbloccare il modulo successivo.',
  items:[
   {type:'choice', prompt:'Uno studente non segue la tua prima spiegazione. Cosa significa, in questo caso, flessibilità cognitiva?', opts:['Ripetere la stessa spiegazione, più lentamente','Andare avanti e riprenderla alla fine della lezione','Cambiare approccio: un’angolazione diversa, una dimostrazione, un passaggio più piccolo'], correct:2, fb:'Flessibilità significa cambiare approccio, non solo ripetere.'},
   {type:'sort', prompt:'Tesoro o spazzatura? È un feedback costruttivo?', card:'“Hai fatto funzionare il ciclo da solo — prova ad applicare la stessa idea alla sezione successiva.”', zones:[{label:'💎 Tesoro — costruttivo', fb:'Esatto — è specifico su cosa ha funzionato e indica un passo successivo.'},{label:'🗑️ Spazzatura — generico', fb:'Non proprio — questo indica esattamente cosa ha fatto lo studente e cosa provare dopo. È costruttivo.'}], correctZone:0},
   {type:'sort', prompt:'Tesoro o spazzatura? È un feedback costruttivo?', card:'“Bravi tutti oggi!”', zones:[{label:'💎 Tesoro — costruttivo', fb:'Non proprio — è gentile, ma non dice a nessuno cosa ripetere o su cosa costruire.'},{label:'🗑️ Spazzatura — generico', fb:'Esatto — gentile, ma andrebbe bene per chiunque. Indica concretamente cosa è stato fatto bene.'}], correctZone:1},
   {type:'choice', prompt:'Perché scrivere a un genitore per qualcosa di positivo, e non solo per i problemi?', opts:['I genitori se lo aspettano come una formalità','Cambia il modo in cui la famiglia leggerà tutto ciò che invierai in seguito','Serve solo quando i voti dello studente sono bassi'], correct:1, fb:'I messaggi positivi, mandati di tua iniziativa, costruiscono la fiducia che in futuro rende più facili le conversazioni difficili.'},
   {type:'choice', prompt:'Hai spiegato un passaggio a un gruppo di bambini di 7 anni e chiedi: «Ci sono domande?». Nessuno risponde. Cosa fai dopo?', opts:['Vai avanti: il silenzio significa che hanno capito.','Verifichi la comprensione: «Fatemi vedere il vostro schermo» oppure «Cosa farete per prima cosa?». Mostri nuovamente il procedimento a chi ha difficoltà.','Ripeti la stessa spiegazione più velocemente, così da avere tempo per passare al passaggio successivo.'], correct:1, fb:'Il silenzio non significa che gli studenti abbiano capito, soprattutto quando si tratta di bambini piccoli. Una rapida verifica come «Fammi vedere» permette di individuare eventuali difficoltà prima di proseguire.'},
   {type:'sort', prompt:'Tesoro o spazzatura? È una risposta paziente?', card:'Uno studente pone la stessa domanda per la seconda volta. Tu rispondi: «L’ho già spiegato».', zones:[{label:'💎 Tesoro — paziente', fb:'Non proprio. Questa risposta fa sentire lo studente come se avrebbe già dovuto capire e molti bambini smettono di fare domande dopo aver sentito una frase del genere.'},{label:'🗑️ Spazzatura — impaziente', fb:'Corretto! Prova invece a dire: «Lascia che te lo mostri in un altro modo». Se uno studente fa una seconda domanda, significa che la prima spiegazione non è stata abbastanza chiara.'}], correctZone:1}
  ]
 }
},
{id:'professional', numLabel:'Modulo 4', emoji:'🧱', color:'var(--coral)',
 title:'Affidabilità e limiti professionali',
 desc:'Iniziare puntualmente e svolgere l’intera lezione, sapere cosa fare quando una lezione non può svolgersi come previsto, prendere in carico un gruppo e rispettare i limiti professionali che proteggono gli studenti, le famiglie e te.',
 obj:'Iniziare puntualmente e svolgere l’intera lezione, sapere chi decide quando è necessario spostare una lezione, prendere in carico un gruppo senza difficoltà e rispettare i limiti professionali relativi alle piattaforme, ai contatti, all’attenzione, alla videocamera e alla privacy.',
 sections:[
  {t:'⏰ Sempre puntuali — per tutta la durata della lezione', html:`
   <div class="card"><p>Per una famiglia, la lezione rappresenta un momento per cui ha pagato e attorno al quale ha organizzato la propria giornata. Un tutor che inizia con dieci minuti di ritardo, fa una pausa non prevista o termina in anticipo è qualcosa che la famiglia nota immediatamente, molto prima di valutare i contenuti. L’affidabilità è parte integrante della qualità della lezione.</p></div>
   ${rclock([
     {ic:'🧰', when:'15 minuti prima', t:'Preparati in anticipo', d:'Collegati prima dell’orario previsto, verifica la connessione, la videocamera e il microfono, e apri il gruppo e la lezione in BO.'},
     {ic:'🟢', when:'Orario di inizio', t:'Inizia puntualmente', d:'I primi minuti servono per il riscaldamento iniziale, non per preparare la tua attrezzatura.'},
     {ic:'🎯', when:'Durante la lezione', t:'L’intera lezione', d:'Svolgi tutte le fasi previste, senza pause non programmate o attività estranee alla lezione.'},
     {ic:'🏁', when:'Orario di fine', t:'Termina puntualmente', d:'Non terminare mai in anticipo. Il riepilogo finale e l’anteprima della lezione successiva fanno parte della sessione.'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Sei in ritardo o non riesci a collegarti?</strong> Avvisa immediatamente il tuo Team Leader. Non lasciare gli studenti ad aspettare senza spiegazioni. Una lezione che inizia in ritardo non viene «recuperata» terminando qualche minuto dopo: informa il tuo Team Leader, così potrà decidere cosa proporre alla famiglia.</p>`)}
  `},
  {t:'📅 Quando una lezione non può svolgersi come previsto', html:`
   <div class="card"><p>Malattie ed emergenze possono capitare. Ciò che determina se una famiglia sarà comprensiva è <strong>quanto presto viene informata e cosa succede dopo</strong>. Un messaggio inviato trenta minuti prima della lezione o un tutor che semplicemente non si presenta sono situazioni che le famiglie descrivono come <em>«disorganizzate»</em> e spesso rappresentano il momento in cui decidono di chiedere un rimborso.</p></div>
   ${doavoid(
     ['Informa il tuo Team Leader <strong>non appena sai</strong> che non potrai svolgere una lezione. Prima lo saprà, più opzioni avrà a disposizione (un tutor sostitutivo o una nuova data).','Segui il piano concordato con il tuo Team Leader, compreso il messaggio da inviare alla famiglia.','Rispetta l’orario concordato per le lezioni: lo stesso orario, ogni settimana.','Se una lezione è stata persa, lascia che sia il tuo Team Leader a decidere come recuperarla.'],
     ['Annullare o spostare una lezione autonomamente: i tutor non riprogrammano le lezioni.','Avvisare direttamente la famiglia all’ultimo minuto, senza aver prima consultato il tuo Team Leader.','Promettere una lezione di recupero o un risarcimento.','Svolgere la lezione in un orario diverso da quello concordato, anche se «solo per questa volta».']
   )}
  `},
  {t:'🤝 Prendere in carico un gruppo', html:`
   <div class="card"><p>Le famiglie notano i cambiamenti di tutor, soprattutto quando nessuno le ha informate o quando ogni nuovo tutor ricomincia da zero. Se prendi in carico un gruppo, fai in modo che il cambiamento rappresenti una continuità, non un nuovo inizio.</p></div>
   ${stepFlow([
     {ic:'📖', label:'Leggi i commenti in BO e controlla i progressi del gruppo prima della tua prima lezione.'},
     {ic:'👋', label:'Presentati agli studenti e, in base a quanto concordato con il tuo Team Leader, anche alle famiglie.'},
     {ic:'🔁', label:'Mantieni le abitudini che già conoscono: le regole, la struttura delle lezioni e il modo in cui condividono i loro lavori.'},
     {ic:'💬', label:'Chiedi agli studenti cosa è piaciuto loro delle lezioni precedenti.'}
   ])}
  `},
  {t:'🧱 I limiti professionali', html:`
   <div class="card"><p>Alcune situazioni non riguardano direttamente le competenze didattiche, ma possono compromettere la fiducia di una famiglia altrettanto rapidamente. Seleziona ciascuna voce:</p></div>
   ${symCards([
     {ic:'🏷️', title:'Solo Kodland, durante e al di fuori della lezione',
      do:`Parla esclusivamente dei corsi e degli strumenti di Kodland. Se noti un problema con la piattaforma o con un corso, segnalalo al tuo Team Leader.`,
      avoid:`Promuovere un’altra piattaforma, un’altra scuola o le tue lezioni private · parlare negativamente della piattaforma o del corso davanti agli studenti o alle famiglie.`},
     {ic:'📵', title:'Contatti solo attraverso i canali ufficiali',
      do:`Comunica con le famiglie attraverso i canali utilizzati dalla tua regione per le lezioni di Kodland. Al di fuori delle lezioni, i tuoi contatti devono essere con i genitori, non direttamente con i bambini.`,
      avoid:`Utilizzare i social media personali o chat private per comunicare con gli studenti · invitarli a giocare o incontrarsi online dopo la lezione · condividere i tuoi dati di contatto personali.`},
     {ic:'📷', title:'Videocamera e privacy',
      do:`Invita gentilmente gli studenti ad accendere la videocamera una sola volta e rispetta la loro risposta. Alcuni studenti preferiscono tenerla spenta per motivi culturali, religiosi o personali. Offri loro altre modalità di partecipazione, come la chat, le reazioni o la condivisione dello schermo.`,
      say:`<em>«Nessun problema! Puoi partecipare tramite la chat o condividendo il tuo schermo».</em>`,
      avoid:`Insistere o chiedere il motivo davanti al gruppo · fare screenshot o fotografie degli studenti · condividere immagini o informazioni personali degli studenti.`},
     {ic:'🗨️', title:'Conversazioni adatte all’età',
      do:`Mantieni le conversazioni informali leggere e adatte all’età del gruppo. Se emerge un argomento delicato, riporta con calma la conversazione alla lezione.`,
      avoid:`Dibattiti sulla politica o sulla religione, argomenti per adulti o problemi personali davanti agli studenti.`}
   ])}
   ${chatMock({
     name:'Genitore', sub:'online', avatar:'👨', time:'19:40',
     msgs:[`Ciao! A mio figlio piaci molto. Potresti fargli delle lezioni private al di fuori di Kodland? Ti pagheremmo direttamente, per noi sarebbe più economico.`],
     title:'Come rispondi?',
     text:'La famiglia è soddisfatta di te e ti chiede qualcosa che supera i limiti professionali. Seleziona ogni risposta per scoprire cosa succede.',
     opts:[
      {t:`«Certo! Mandami il tuo numero e ci organizziamo».`, ok:false, fb:`In questo modo porti lo studente fuori da Kodland e violi i limiti professionali del tuo ruolo. Non concordare mai lezioni private con una famiglia di Kodland.`},
      {t:`«Grazie mille! Sono davvero felice che gli piacciano le nostre lezioni! Tuttavia, posso fare lezione con lui solo tramite Kodland. Se desiderate altre lezioni o un formato diverso, il Servizio Clienti potrà aiutarvi a conoscere le opzioni disponibili».`, ok:true, fb:`È una risposta cordiale, chiara e professionale. Ringrazi la famiglia, mantieni i limiti e la indirizzi alle persone che possono proporre altre soluzioni. Successivamente, informa il tuo Team Leader della richiesta.`},
      {t:`«Non è consentito. Per favore, non chiedermelo più».`, ok:false, fb:`Il limite che stabilisci è corretto, ma il tono non lo è: la famiglia intendeva la richiesta come un complimento. Rifiuta gentilmente e indirizzala al Servizio Clienti.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Affidabilità e limiti professionali — verifica del modulo',
  instr:'Classifica ogni situazione e scegli il comportamento migliore. È necessario ottenere il 70% per sbloccare la checklist finale.',
  items:[
   {type:'sort', prompt:'Va bene o supera un limite professionale?', card:'Durante la lezione, mentre gli studenti lavorano, rispondi a un messaggio del genitore di un altro gruppo.', zones:[{label:'✅ Va bene', fb:'Non proprio. Il tempo della lezione appartiene a questi studenti. I messaggi delle altre famiglie possono aspettare fino al termine della lezione.'},{label:'🚫 Supera un limite', fb:'Corretto! Durante la lezione, la tua attenzione deve essere rivolta al gruppo. Le famiglie lo notano e possono pensare che «il tutor non stesse prestando attenzione».'}], correctZone:1},
   {type:'sort', prompt:'Va bene o supera un limite professionale?', card:'Una studentessa tiene la videocamera spenta per motivi religiosi. Le permetti di partecipare tramite la chat e la condivisione dello schermo.', zones:[{label:'✅ Va bene', fb:'Corretto! Invita gentilmente ad accendere la videocamera, rispetta la risposta e offri altre modalità di partecipazione. Non insistere mai.'},{label:'🚫 Supera un limite', fb:'Non proprio. Rispettare le ragioni della studentessa e offrirle altri modi per partecipare è esattamente la cosa giusta da fare.'}], correctZone:0},
   {type:'choice', prompt:'Ti svegli e stai male, quindi sai che non potrai svolgere la lezione prevista per questa sera. Cosa fai?', opts:['Mandi un messaggio alla famiglia 30 minuti prima della lezione per annullarla.','Informi immediatamente il tuo Team Leader, affinché possa organizzare un tutor sostitutivo o una nuova data, e segui le sue indicazioni su come comunicare la situazione alla famiglia.','Svolgi una lezione più breve e termini in anticipo.'], correct:1, fb:'I tutor non annullano né riprogrammano autonomamente le lezioni. Prima il tuo Team Leader viene informato, più opzioni avrà a disposizione e la famiglia riceverà la comunicazione nell’ambito di un piano, non all’ultimo minuto.'},
   {type:'sort', prompt:'Va bene o supera un limite professionale?', card:'Dopo la lezione, inviti due studenti a giocare insieme online a Roblox.', zones:[{label:'✅ Va bene', fb:'Non proprio. Mantenere i contatti con gli studenti al di fuori della lezione, soprattutto per giocare in privato, supera i limiti professionali, anche se l’invito sembra amichevole.'},{label:'🚫 Supera un limite', fb:'Corretto! Al di fuori della lezione, i tuoi contatti devono essere con i genitori e attraverso i canali ufficiali. Non mantenere contatti privati e non giocare con gli studenti.'}], correctZone:1},
   {type:'choice', prompt:'Stai per prendere in carico un gruppo che prima era seguito da un altro tutor. Cosa dovresti fare prima della tua prima lezione?', opts:['Ricominciare il corso dalla lezione 1 per capire a che punto si trova ciascuno.','Non fare nulla di particolare: gli studenti si abitueranno a te.','Leggere i commenti in BO e controllare i progressi del gruppo, pianificare come presentarti e mantenere le abitudini che il gruppo già conosce.'], correct:2, fb:'La continuità rende il cambio di tutor un’esperienza più serena e sicura. Conosci la storia del gruppo, presentati e mantieni le abitudini che gli studenti già conoscono.'}
  ]
 }
},
{id:'checklist', numLabel:'Checklist finale', emoji:'✅', color:'var(--coral)',
 title:'Checklist finale',
 desc:'Niente quiz qui: solo l’essenziale di questo mini-training, prima di chiuderlo.',
 obj:'Rivedi la checklist qui sotto. Questo modulo non viene valutato: leggilo, poi concludi il mini-training.',
 sections:[
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   ${numlist([
     'Ho lasciato un commento in BO il giorno stesso in cui ho saputo della richiesta e ho coinvolto il mio Team Leader',
     'La mia lezione successiva con questo studente è stata un vero tentativo di recupero: un vero turno, un successo visibile, attenzione specifica, nessun accenno alla richiesta',
     'Non ho mai confermato l’approvazione né parlato di importi: ho usato l’unica frase sicura e ho lasciato il resto al Client Service'
   ])}
  `},  {t:'🌱 In ogni lezione', html:`
   ${numlist([
     'Seguo sempre la stessa struttura della lezione, così gli studenti conoscono il ritmo e usano le loro energie per imparare',
     'Apro con le quattro fasi: un Riscaldamento, un ripasso della lezione precedente con le parole dello studente, un vero Controllo dei compiti e un Obiettivo della lezione dichiarato chiaramente',
     'Nella parte di teoria e pratica, spiego a piccole dosi, mostro prima io sul mio schermo e difendo il tempo della pratica',
     'Chiudo con le fasi a specchio: un Riepilogo della lezione con le parole dello studente, istruzioni chiare per i compiti, un’Anteprima della prossima lezione e una Chiusura che festeggia ciò che hanno creato',
     'Leggo le mie valutazioni di qualità fase per fase e correggo la fase che sta cedendo già nella lezione successiva',
     'Studio il manuale e i materiali il giorno prima — non trenta minuti prima — e conosco l’obiettivo della lezione, non solo i passaggi',
     'Apro il manuale e la presentazione da BO e controllo che l’ID del corso corrisponda a quello a cui sono iscritti i miei studenti',
     'Quando trovo una lacuna, chiedo nel canale Slack del mio corso, al mio Regional Mentor o al mio Team Leader — e segnalo gli errori nei contenuti con l’icona 🐞 in BO',
     'Quando la mia prima spiegazione non funziona, cambio approccio — un’angolazione diversa, una dimostrazione, un passaggio più piccolo — invece di ripeterla',
     'Conosco i miei studenti e creo uno spazio sicuro in cui gli errori non vengono giudicati',
     'Do feedback specifici e costruttivi: cosa ha funzionato e cosa provare dopo — mai solo “bravo”',
     'Scrivo alle famiglie anche per le buone notizie, non solo quando qualcosa va storto',
     'Do un’istruzione alla volta e verifico la comprensione con domande come «Fammi vedere» o «Cosa farai per prima cosa?». Il silenzio non significa che gli studenti abbiano capito.',
     'Adatto il ritmo e il linguaggio all’età: utilizzo passaggi molto brevi e dimostrazioni per i più piccoli e spiego i nuovi termini con degli esempi.',
     'Evito frasi impazienti come «L’ho già spiegato» e distribuisco equamente la mia attenzione tra tutti i membri del gruppo.',
     'Mi collego 15 minuti prima, inizio puntualmente, svolgo l’intera lezione e non termino mai in anticipo.',
     'Se non posso svolgere una lezione, informo il mio Team Leader non appena lo so. Non annullo, sposto o prometto autonomamente una lezione di recupero.',
     'Quando prendo in carico un gruppo, leggo prima i commenti in BO, mi presento e mantengo le abitudini che il gruppo già conosce.',
     'Rispetto i limiti professionali: utilizzo solo le piattaforme di Kodland, comunico attraverso i canali ufficiali, dedico tutta la mia attenzione alla lezione e rispetto le decisioni di ogni studente riguardo alla videocamera e alla propria privacy.'
   ])}
  `},  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Questo è tutto il mini-training.</strong> Quando sei pronto, continua — poi completa il DST nell’LMS per chiudere l’attività.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
