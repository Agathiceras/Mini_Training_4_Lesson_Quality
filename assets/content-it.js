/* Mini_Training_4_Lesson_Quality - Italian content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='it';
const CONTENT = {
  flag:'🇮🇹', dir:'ltr',
  ui:{
    pageTitle:"Mini-training · Qualità della lezione — Formazione tutor Kodland",
    logoSub:'Dipartimento Sviluppo Tutor',
    heroEyebrow:"🎯 Mini-training",
    heroTitle:"Uno sguardo onesto alla <span class=\"h-pill\">qualità della lezione</span>",
    heroIntro:"Hai ricevuto questa formazione perché alcuni dei tuoi studenti hanno chiesto un rimborso per problemi legati alla qualità della lezione. Qui ti mostriamo cosa puoi fare come tutor e come gestire queste situazioni.",
    heroWork:"Completa 5 brevi moduli. Per sbloccare il modulo successivo devi ottenere almeno il 70% nella verifica di ciascun modulo. In tutto, circa 25–30 minuti.",
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
     {ic:'🙋', html:`<strong>Dagli un vero turno.</strong> Non una domanda tanto per fare: un momento autentico in cui si sente visto e riesce in qualcosa.`},
     {ic:'🏆', html:`<strong>Prevedi un successo rapido e visibile.</strong> Deve uscire dalla lezione sentendosi capace, non indietro.`},
     {ic:'👀', html:`<strong>Attenzione specifica</strong> — fallo sentire notato per qualcosa di concreto, non lodato in modo generico.`},
     {ic:'🤐', html:`<strong>Nessun accenno alla richiesta</strong> — anche se è il bambino a tirarla fuori, cambia argomento con gentilezza e continua a insegnare.`}
   ])}
  `},
  {t:'📮 Segnala subito e conosci l’unica frase sicura', html:`
   <div class="card"><p>Puoi scoprire che esiste una richiesta dai commenti del Client Service sul profilo del bambino in BO: non c’è un sistema automatico che ti avvisa. Una volta che lo sai, quello che hai osservato nelle tue lezioni è un’informazione che il Client Service non può ottenere in nessun altro modo.</p></div>
   ${numlist([
     'Lascia un commento in BO il giorno stesso con esattamente ciò che hai osservato: date e fatti concreti, non impressioni',
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
     {ic:'🎯', label:'4 · Obiettivo della lezione', items:['Di’ chiaramente di cosa si parla oggi. Uno studente che non sa “a cosa serve” la lezione di oggi perde interesse in fretta.'], video:'https://drive.google.com/file/d/1cuqULcb1jxkwV_uepi-dnxFdx3FB41Si/preview'}
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
   <div class="card"><p>Cerca di capire con chiarezza cosa deve davvero ottenere la lezione di oggi, non solo la sequenza di passaggi del manuale. Se conosci l’obiettivo, puoi adattare il percorso quando qualcosa va diversamente dal previsto, senza perdere il senso della lezione.</p></div>
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
 desc:'Le abitudini, oltre alla padronanza della materia, che rendono davvero piacevole stare a lezione.',
 obj:'Applicare le soft skill che trasformano la conoscenza della materia in una lezione davvero buona: flessibilità cognitiva, conoscenza dei tuoi studenti, un ambiente in cui si può sbagliare, motivazione e feedback specifici.',
 sections:[
  {t:'🤝 Non basta conoscere la materia', html:`
   <div class="card"><p>Padroneggiare la materia è necessario, ma non è ciò che rende piacevole stare a lezione. Quello nasce da un insieme di abitudini che non hanno nulla a che fare con le competenze tecniche.</p></div>
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
     ['“Bravo!” senza alcun riferimento a ciò che è stato fatto', '“È sbagliato” senza indicare cosa provare invece', 'Feedback che andrebbero bene allo stesso modo per il lavoro di qualsiasi studente']
   )}
  `},
  {t:'💌 Fatti sentire non solo per le cattive notizie', html:`
   <div class="card"><p>Un genitore che ti sente solo quando qualcosa non va inizia ad associare i tuoi messaggi ai problemi. Scrivi anche per festeggiare qualcosa di bello, non solo per segnalare preoccupazioni.</p></div>
   ${co('co-star','⭐',`<p>Questa sola abitudine — scrivere una volta, di tua iniziativa, su qualcosa che lo studente ha fatto bene — cambia il modo in cui la famiglia leggerà tutto ciò che invierai in seguito.</p>`)}
  `}
 ],
 ix:{
  title:'Soft skill — verifica del modulo',
  instr:'70% per sbloccare la checklist finale.',
  items:[
   {type:'choice', prompt:'Uno studente non segue la tua prima spiegazione. Cosa significa, in questo caso, flessibilità cognitiva?', opts:['Ripetere la stessa spiegazione, più lentamente','Andare avanti e riprenderla alla fine della lezione','Cambiare approccio: un’angolazione diversa, una dimostrazione, un passaggio più piccolo'], correct:2, fb:'Flessibilità significa cambiare approccio, non solo ripetere.'},
   {type:'sort', prompt:'Tesoro o spazzatura? È un feedback costruttivo?', card:'“Hai fatto funzionare il ciclo da solo — prova ad applicare la stessa idea alla sezione successiva.”', zones:[{label:'💎 Tesoro — costruttivo', fb:'Esatto — è specifico su cosa ha funzionato e indica un passo successivo.'},{label:'🗑️ Spazzatura — generico', fb:'Non proprio — questo indica esattamente cosa ha fatto lo studente e cosa provare dopo. È costruttivo.'}], correctZone:0},
   {type:'sort', prompt:'Tesoro o spazzatura? È un feedback costruttivo?', card:'“Bravi tutti oggi!”', zones:[{label:'💎 Tesoro — costruttivo', fb:'Non proprio — è gentile, ma non dice a nessuno cosa ripetere o su cosa costruire.'},{label:'🗑️ Spazzatura — generico', fb:'Esatto — gentile, ma andrebbe bene per chiunque. Indica concretamente cosa è stato fatto bene.'}], correctZone:1},
   {type:'choice', prompt:'Perché scrivere a un genitore per qualcosa di positivo, e non solo per i problemi?', opts:['I genitori se lo aspettano come una formalità','Cambia il modo in cui la famiglia leggerà tutto ciò che invierai in seguito','Serve solo quando i voti dello studente sono bassi'], correct:1, fb:'I messaggi positivi, mandati di tua iniziativa, costruiscono la fiducia che in futuro rende più facili le conversazioni difficili.'}
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
     'Scrivo alle famiglie anche per le buone notizie, non solo quando qualcosa va storto'
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
