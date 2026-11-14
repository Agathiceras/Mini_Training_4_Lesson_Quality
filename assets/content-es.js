/* Mini_Training_4_Lesson_Quality - Spanish content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='es';
const CONTENT = {
  flag:'🇪🇸', dir:'ltr',
  ui:{
    heroCard1:"<b>A tu ritmo.</b> Tu progreso se guarda en este navegador.",
    heroCard2:"<b>Práctica incluida.</b> Cada módulo termina con una comprobación breve.",
    pbLabel:'módulos completados',
    tapOpen:'Toca para abrir',
    tapFlip:'Toca para girar',
    lblSee:'Lo que ves',
    lblDo:'Lo que haces',
    lblSay:'Lo que puedes decir',
    lblReport:'Dónde reportar',
    lblAvoid:'Evita',
    lblTip:'Consejo',
    stepOf:'Paso {i} de {n}',
    next:'Siguiente',
    pageTitle:"Mini-entrenamiento · Calidad de las clases — Capacitación de tutores de Kodland",
    logoSub:'Departamento de Desarrollo de Tutores',
    heroEyebrow:"🎯 Mini-entrenamiento",
    heroTitle:"Una mirada honesta a la <span class=\"h-pill\">calidad de las clases</span>",
    heroIntro:"Has recibido este entrenamiento porque tienes estudiantes que han solicitado un reembolso por problemas con la calidad de la clase. Aquí te mostraremos qué puedes hacer como tutor y cómo manejar estas situaciones.",
    heroWork:"Completa los 6 módulos cortos. Necesitas obtener al menos un 70 % en la evaluación de cada módulo para desbloquear el siguiente. Duración total aproximada: 35–40 minutos.",
    startBtn:"🚀 Comenzar el entrenamiento",
    pathLabel:'Tu ruta de aprendizaje',
    devTitle:'Dev: desbloquear todos los módulos para revisión',
    backToPath:'Volver a la ruta',
    modulesPassed:'{done} / {total} módulos aprobados',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprobado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Comenzar',
    reviewBadge:'▶ Repasar',
    objective:'Objetivo',
    startCheck:'▶ Comenzar la comprobación del módulo',
    finishBtn:'▶ Finalizar el mini-entrenamiento',
    doneBack:'✓ Listo — volver a la ruta',
    ixBadge:'📋 Comprobación del módulo — 70 % para desbloquear el siguiente módulo',
    ixItemBadge:'📋 Comprobación del módulo — pregunta {i} de {n}',
    scoreSoFar:'Puntuación hasta ahora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'No exactamente — la respuesta correcta es «{label}».',
    resPassed:'¡Módulo aprobado!',
    resFailed:'Todavía no lo logras',
    resUnlocked:"Has desbloqueado el siguiente módulo.",
    resDone:"Has completado este mini-entrenamiento.",
    resNeed:'Necesitas un 70 % para desbloquear el siguiente módulo. Repasa la sección anterior y vuelve a intentar la comprobación.',
    resContinue:'Continuar a la ruta de aprendizaje',
    resFinish:'Continuar',
    resBack:'Volver a la ruta',
    resReview:'Repasar este módulo',
    doneEyebrow:'Mini-entrenamiento completado',
    doneTitle:'🎉 ¡Felicidades!',
    doneP1:"🎉 <strong>¡Felicidades! Has completado este mini-entrenamiento.</strong>",
    doneP2:"¡Ya terminaste aquí! Por favor, vuelve a la página de capacitación del LMS desde la que accediste a este mini-entrenamiento para cerrar la tarea.",
    doneP3:"👉 <strong>Si debajo de la capacitación en el LMS aparece una comprobación o evaluación, asegúrate de completarla y obtener una puntuación aprobatoria</strong> — de lo contrario, la tarea podría quedar incompleta.",
    doneP4:'¡Mucho éxito! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo Dev: todos los módulos están ahora desbloqueados para revisión.',
    devOn:'🔓 Modo Dev activado — todos los módulos desbloqueados',
    devOff:'🔒 Modo Dev desactivado — progreso borrado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Haz',
    avoidLabel:'🚫 Evita',
    noticeLabel:'Ten en cuenta:',
    cvSee:'Lo que ves:',
    cvDo:'Lo que haces:',
    dtExample:'Ejemplo de una clase real',
    dtNext:'Siguiente:',
    dtDone:"✅ Eso es todo sobre las cuatro áreas. Ahora, clasifica lo que ves.",
    tlVideoTitle:'{label} — un ejemplo de una clase real',
    tlVideoMeta:'Mira cómo se ve esta fase en una clase real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introducción', emoji:'🧩', color:'var(--coral)',
 title:'Por qué estás aquí',
 desc:'Por qué este motivo merece una autoevaluación honesta y concreta — y las reglas que se aplican cuando ya ha llegado una solicitud de reembolso.',
 obj:'Entender que este motivo tiene que ver con la clase en sí, por qué pedir ayuda pronto es exactamente lo correcto y qué hacer (y qué no hacer) exactamente cuando ya existe una solicitud de reembolso.',
 sections:[
  {t:'🪞 El más difícil de escuchar', html:`
   <div class="card"><p>Este motivo significa que una familia sintió que el problema era <strong>la calidad de la clase en sí</strong> — no el niño, ni el nivel, ni el horario. Es más difícil de escuchar que la mayoría de los otros, y es tentador ponerse a la defensiva o buscarle una explicación.</p></div>
   ${co('co-idea','💡',`<p><strong>No es un juicio sobre ti como persona.</strong> Es una señal sobre comportamientos concretos que se pueden corregir, en clases concretas. Los tutores que se lo toman en serio y de forma concreta — en lugar de personal — son los que le dan la vuelta más rápido.</p>`)}
   ${co('co-star','🎓',`<p><strong>Busca pronto una mirada externa sobre tu forma de enseñar.</strong> Tu Mentor Regional está justamente para esto — pedir retroalimentación sobre cómo enseñas es lo correcto, no una señal de que algo vaya mal contigo.</p>`)}
  `},
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   <div class="card"><p>Todo lo anterior trata de detectarlo pronto. Pero puede que estés abriendo este entrenamiento porque una familia <strong>ya</strong> ha pedido un reembolso. Las reglas de abajo se aplican sea cual sea el motivo — léelas primero y usa el resto del entrenamiento para entender qué te llevó hasta aquí y qué puedes seguir haciendo en la clase.</p></div>
   ${co('co-idea','💡',`<p><strong>La solicitud la crea Servicio al Cliente, no tú</strong> — esa parte no está en tus manos. Lo que sigue siendo tuyo es todo lo que sucede en la clase a partir de ahora, y no es poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>No digas nada sobre la solicitud en sí</strong> — ni al niño ni a la familia — a menos que Servicio al Cliente te pida expresamente decir algo concreto. Tu trabajo ahora es la clase, no la conversación.</p>`)}
  `},
  {t:'🎯 Tu próxima clase es el intento de recuperación', html:`
   <div class="card"><p>Puede que no tengas la oportunidad de cambiar nada más. Trata la próxima clase con este niño como el momento que lo decide todo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dale un turno de verdad.</strong> No una pregunta sin sentido, sino un momento genuino en el que se sienta visto y tenga éxito.`},
     {ic:'🏆', html:`<strong>Prepara un logro temprano y visible.</strong> Debe salir de la clase sintiéndose capaz, no rezagado.`},
     {ic:'👀', html:`<strong>Atención específica</strong> — haz que se sienta notado por algo concreto, no elogiado de forma genérica.`},
     {ic:'🤐', html:`<strong>Ni una palabra sobre la solicitud</strong> — incluso si el niño la menciona, redirige con calidez y sigue enseñando.`}
   ])}
  `},
  {t:'📮 Avisa rápido y conoce la única frase segura', html:`
   <div class="card"><p>Puedes enterarte de que existe una solicitud por los comentarios de Servicio al Cliente en el perfil del niño en BO — no hay ningún sistema automático que te avise. Una vez que lo sepas, lo que has visto en tus clases es información que Servicio al Cliente no tiene de ninguna otra forma.</p></div>
   ${numlist([
     'Deja un comentario en BO ese mismo día con exactamente lo que has visto — fechas y datos concretos, no impresiones',
     'Incluye las palabras exactas de la familia, textualmente, si las tienes',
     'Avisa a tu Team Leader ese mismo día',
     'Nunca confirmes que un reembolso ha sido aprobado ni hables de ninguna cantidad'
   ])}
   ${co('co-ok','✅',`<p><strong>El mensaje que siempre es seguro decir:</strong> <em>«Servicio al Cliente le ayudará con esto.»</em> Ahí termina tu parte de la conversación — Servicio al Cliente se encarga a partir de ese punto.</p>`)}
  `},
  {t:'🌱 Mantén el esfuerzo después', html:`
   <div class="card"><p>Tanto si la solicitud se retira, como si el niño sigue en tu grupo o pasa a otro tutor o a otro formato, sigue dándole un cuidado extra durante las siguientes clases. Una recuperación que se sostiene una clase y luego vuelve en silencio a la normalidad, muchas veces no se sostiene en absoluto.</p></div>
  `}
 ]
},
{id:'structure', numLabel:'Módulo 1', emoji:'🧭', color:'var(--coral)',
 title:'Estructura de la clase',
 desc:'La estructura en espejo de nueve fases que hace que una clase se sienta completa, con ejemplos de clases reales, y cómo leer tus evaluaciones de calidad.',
 obj:'Entender por qué una estructura de clase constante es una de las palancas más fuertes de la calidad, aprender las nueve fases y saber leer tus evaluaciones de calidad para ver exactamente dónde estás perdiendo al grupo.',
 sections:[
  {t:'🧭 La constancia es la clave', html:`
   <div class="card"><p>Cuando un estudiante aprende tu ritmo, deja de gastar energía en averiguar «¿y ahora qué toca?» y la dedica a aprender. Repite la misma estructura en cada clase hasta que salga sola — para ti y para ellos.</p></div>
  `},
  {t:'🌅 El inicio: cuatro fases', html:`
   ${timeline([
     {ic:'👋', label:'1 · Calentamiento', items:['Una pregunta rápida o un pequeño reto que pone al estudiante en «modo clase» — y un momento para construir comunidad.'], video:'https://drive.google.com/file/d/1fMWyd6bfCcUauqIIaNldojVuHYg6J9JR/preview'},
     {ic:'📖', label:'2 · Repaso de la clase anterior', items:['Retoma brevemente lo aprendido la última vez, con las propias palabras del estudiante. «Esto lo recuerdo» genera una confianza real.'], video:'https://drive.google.com/file/d/1J1jijTw8bj8l9yw9aMNXp9zHwxEbkWbY/preview'},
     {ic:'📋', label:'3 · Revisión de la tarea', items:['Revisen juntos la tarea para casa — detecta malentendidos, reconoce el esfuerzo y demuestra que el trabajo se ve de verdad.'], video:'https://drive.google.com/file/d/1H2Awetu6fkoatv2RMonUeBawgK7tsR3e/preview'},
     {ic:'🎯', label:'4 · Objetivo de la clase', items:['Di con claridad de qué trata la clase de hoy. Un estudiante que no sabe «para qué» es la clase de hoy se desconecta rápido.'], video:'https://drive.google.com/file/d/1cuqULcb1jxkwV_uepi-dnxFdx3FB41Si/preview'}
   ])}
  `},
  {t:'🎨 La parte central: teoría y práctica', html:`
   <div class="card"><p>La etapa más larga, en la que se enseña el material nuevo y se usa de inmediato. Da la teoría en pequeñas dosis — un concepto, y enseguida trabajo práctico con él — y <strong>muestra primero</strong>: hazlo en tu pantalla antes de que los estudiantes lo intenten en la suya. Protege el tiempo de práctica a toda costa; una clase en la que los niños solo te vieron trabajar a ti es una clase en la que nadie practicó de verdad.</p></div>
  `},
  {t:'🏁 El final: el espejo', html:`
   <div class="card"><p>Las cuatro fases de cierre reflejan las de inicio en orden inverso — la clase termina como empezó, dando una sensación de cierre y de ritmo.</p></div>
   ${timeline([
     {ic:'📋', label:'1 · Resumen de la clase', items:['Repasa lo que se vio, pero deja que el estudiante también lo resuma — sus propias palabras revelan lo que realmente quedó.'], video:'https://drive.google.com/file/d/1jNZGDMnRYh83xGd2NVHrZTdgXLagi2GZ/preview'},
     {ic:'📖', label:'2 · Asignación de la tarea', items:['Instrucciones clarísimas sobre qué hacer y cómo. Una tarea poco clara es una tarea que no se va a hacer.'], video:'https://drive.google.com/file/d/1qOYvENqjiYlwRaFvDb0A7W6JYgWPCjJc/preview'},
     {ic:'▶️', label:'3 · Adelanto de la próxima clase', items:['Despierta la curiosidad por lo que viene — mantiene al estudiante implicado emocionalmente, no solo siguiendo una lista de tareas.'], video:'https://drive.google.com/file/d/17bE6JdZmDFJ_igrWYhc7fnpD39b-k-2K/preview'},
     {ic:'✨', label:'4 · Cierre', items:['Termina en alto: celebra lo que el estudiante creó. Los últimos 30 segundos son los que pesan cuando decide si vuelve a conectarse la próxima vez.'], video:'https://drive.google.com/file/d/1OTYSh07wSosjgsHFD05YvccD3NY2CgsX/preview'}
   ])}
  `},
  {t:'📊 Cómo leer tus evaluaciones de calidad', html:`
   <div class="card"><p>Tus evaluaciones de calidad se corresponden directamente con estas fases — existen para mostrarte exactamente en qué punto de la estructura algo está fallando: un calentamiento que faltó, un objetivo que nunca se dijo, un tiempo de práctica recortado, un cierre que no llegó a ocurrir.</p></div>
   ${co('co-idea','💡',`<p><strong>Léelas fase por fase, no como una puntuación global.</strong> Una puntuación baja sin contexto te dice poco; una puntuación baja en «Objetivo de la clase» o en «Cierre» te dice exactamente qué cambiar en tu próxima clase.</p>`)}
  `}
 ],
 ix:{
  title:'Estructura de la clase — comprobación del módulo',
  instr:'Cinco rondas rápidas: ubica cada fase en la clase y adivina qué fase se describe. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'sort', prompt:'¿Dónde va esta fase?', card:'▶️ Adelanto de la próxima clase', zones:[{label:'🌅 Una de las 4 fases de inicio', fb:'No exactamente — el Adelanto de la próxima clase forma parte del bloque de cierre en espejo, no del inicio.'},{label:'🏁 Una de las 4 fases de cierre', fb:'Correcto — es la tercera de las cuatro fases de cierre, justo antes del Cierre.'}], correctZone:1},
   {type:'sort', prompt:'¿Qué fase se describe?', card:'«Este momento le dice al estudiante para qué es la clase de hoy. Sin él, no sabe hacia dónde está trabajando — y se desconecta rápido.»', zones:[{label:'👋 Calentamiento', fb:'No exactamente — el Calentamiento pone a los estudiantes en modo clase, pero no dice para qué es la clase de hoy. Eso es el Objetivo de la clase.'},{label:'🎯 Objetivo de la clase', fb:'Correcto — decir con claridad el Objetivo de la clase da a toda la clase una dirección que los estudiantes pueden seguir.'},{label:'📋 Resumen de la clase', fb:'No exactamente — el Resumen mira atrás, a lo que se vio. Decir para qué es la clase de hoy ocurre al principio: el Objetivo de la clase.'},{label:'✨ Cierre', fb:'No exactamente — el Cierre termina la clase. Saber para qué es la clase de hoy ocurre al principio: el Objetivo de la clase.'}], correctZone:1},
   {type:'sort', prompt:'¿Dónde va esta fase?', card:'📖 Repaso de la clase anterior', zones:[{label:'🌅 Una de las 4 fases de inicio', fb:'Correcto — es la segunda de las cuatro fases de inicio, justo después del Calentamiento.'},{label:'🏁 Una de las 4 fases de cierre', fb:'No exactamente — el Repaso de la clase anterior abre la clase, no la cierra.'}], correctZone:0},
   {type:'sort', prompt:'¿Qué fase se describe?', card:'«Dejar que el estudiante explique con sus propias palabras lo que aprendió hoy revela lo que realmente quedó — y lo que hay que reforzar la próxima vez.»', zones:[{label:'📖 Repaso de la clase anterior', fb:'Cerca — pero esa fase retoma la clase <em>anterior</em>. Explicar con sus palabras lo aprendido <em>hoy</em> es el Resumen de la clase.'},{label:'📋 Revisión de la tarea', fb:'No exactamente — la Revisión de la tarea repasa la tarea para casa. Esto es el Resumen de la clase.'},{label:'▶️ Adelanto de la próxima clase', fb:'No exactamente — el Adelanto mira hacia delante. Resumir hoy con sus propias palabras es el Resumen de la clase.'},{label:'📋 Resumen de la clase', fb:'Correcto — el Resumen de la clase te permite comprobar qué quedó realmente, con las propias palabras del estudiante.'}], correctZone:3},
   {type:'sort', prompt:'¿Qué fase se describe?', card:'«Los últimos 30 segundos son los que pesan cuando el estudiante decide si vuelve a conectarse la próxima vez — así que termina celebrando lo que creó.»', zones:[{label:'✨ Cierre', fb:'Correcto — el Cierre termina la clase en alto, y esa sensación es lo que hace volver al estudiante.'},{label:'📖 Asignación de la tarea', fb:'No exactamente — la Asignación de la tarea trata de dar instrucciones claras. Terminar en alto es el Cierre.'},{label:'🎯 Objetivo de la clase', fb:'No exactamente — el Objetivo de la clase ocurre al principio. Esto es el Cierre.'},{label:'👋 Calentamiento', fb:'No exactamente — el Calentamiento abre la clase. Los últimos 30 segundos son del Cierre.'}], correctZone:0}
  ]
 }
},
{id:'prep', numLabel:'Módulo 2', emoji:'📚', color:'var(--coral)',
 title:'Tiempo de preparación',
 desc:'Por qué estudiar el manual el día antes, y no treinta minutos antes, es lo que realmente protege la calidad de una clase — y dónde encontrarlo en BO.',
 obj:'Prepararte para una clase con tiempo suficiente para detectar lagunas antes de que empiece, encontrar el material correcto en BackOffice y saber exactamente dónde pedir ayuda o reportar un problema de contenido.',
 sections:[
  {t:'⏳ No treinta minutos antes', html:`
   <div class="card"><p>Una preparación hecha media hora — o diez minutos — antes de la clase no deja margen para aprender de verdad algo que todavía no sabes. Si hay un concepto, un fragmento de código o una herramienta que no dominas, lo estarás aprendiendo en directo, delante del estudiante.</p></div>
   ${co('co-idea','💡',`<p><strong>Estudia el manual y los materiales el día antes.</strong> Así tienes tiempo de notar una laguna en tus propios conocimientos, un error en el material o una actividad que no terminas de entender — y de hacer algo al respecto antes de la clase.</p>`)}
  `},
  {t:'🎯 Conoce el objetivo, no solo los pasos', html:`
   <div class="card"><p>Entiende con claridad qué pretende lograr realmente la clase de hoy — no solo la secuencia de pasos del manual. Cuando conoces el objetivo, puedes adaptar el camino si algo sale distinto de lo previsto, sin perder el sentido de la clase.</p></div>
   <img class="mt-pic" src="Pictures_T4/goals.png" alt="Ejemplo de página del manual con los objetivos de la clase y los resultados educativos">
  `},
  {t:'🆘 Cuando encuentras una laguna', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>Usa el canal de Slack de tu curso.</strong> Es casi seguro que otros tutores ya se toparon con el mismo error o el mismo paso confuso.`},
     {ic:'🎓', html:`<strong>Pregunta a tu Mentor Regional</strong> si se trata de cómo enseñar o explicar algo concreto.`},
     {ic:'👩‍💼', html:`<strong>Pregunta a tu Team Leader</strong> si se trata del curso en sí, de los materiales o de algo que hay que corregir más arriba.`}
   ])}
   ${co('co-star','⭐',`<p>Encontrar una laguna el día antes y pedir ayuda es exactamente el sistema funcionando como debe. Encontrarla en directo, en plena clase, es justo lo que el tiempo de preparación busca evitar.</p>`)}
  `},
  {t:'🗂️ Cómo encontrar el material de tu curso en BO', html:`
   <div class="card"><p>El manual de la clase y la presentación están dentro de BackOffice (BO), vinculados a la ficha exacta del curso que impartes — no en una página antigua de la wiki que podría estar desactualizada. La simulación de abajo te guía, paso a paso, por dónde encontrarlos y dónde reportar si algo del contenido en sí está mal.</p></div>
   ${co('co-danger','🚨',`<p><strong>Comprueba siempre que el ID del curso que abres coincide con el del curso en el que están inscritos tus estudiantes.</strong> En BO hay cursos de aspecto parecido uno al lado del otro — enseñar con el equivocado, aunque sea otra versión del mismo curso, puede convertir una clase en un caos en segundos.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Material del curso y errores de contenido</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Material del curso y errores de contenido" loading="lazy"></iframe></div></div>
  `}
 ],
 ix:{
  title:'Tiempo de preparación — comprobación del módulo',
  instr:'70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'choice', prompt:'¿Cuándo deberías estudiar el manual y los materiales de una clase?', opts:['El día antes, para tener tiempo de resolver cualquier laguna que encuentres','Justo antes de la clase, para tenerlo fresco','Solo cuando es una clase que nunca has impartido'], correct:0, fb:'El día antes te da tiempo para ocuparte de verdad de lo que encuentres — una laguna, un error, una actividad que no terminas de entender.'},
   {type:'choice', prompt:'Encuentras un fragmento de código en el manual que no funciona. ¿Qué haces?', opts:['Saltarte esa parte de la clase y esperar que nadie lo note','Resolverlo en directo durante la clase con los estudiantes','Preguntar en el canal de Slack de tu curso, a tu mentor o a tu Team Leader — y reportarlo con el icono 🐞 en BO'], correct:2, fb:'Estos canales existen justamente para que no tengas que resolverlo en directo y solo — y reportarlo hace que se corrija para todos los grupos que vienen después del tuyo.'},
   {type:'choice', prompt:'Antes de abrir el manual de la clase en BO, ¿qué deberías comprobar?', opts:['Que la clase tenga una presentación adjunta','Que el ID del curso coincida con el del curso en el que están inscritos tus estudiantes','Que el manual se haya actualizado este mes'], correct:1, fb:'En BO hay cursos parecidos uno al lado del otro. Enseñar con el ID de curso equivocado es una de las formas más rápidas de acabar con una clase caótica.'},
   {type:'choice', prompt:'¿Por qué es más útil conocer el objetivo de la clase que conocer solo los pasos?', opts:['Te permite adaptar el camino si algo sale distinto, sin perder el sentido','Te permite saltarte las partes del manual que te parecen menos útiles','Te ayuda a terminar la clase más rápido'], correct:0, fb:'Conocer el «porqué» te permite adaptar el «cómo» sin perder aquello para lo que era la clase.'}
  ]
 }
},
{id:'soft', numLabel:'Módulo 3', emoji:'🤝', color:'var(--coral)',
 title:'Habilidades blandas',
 desc:'Los hábitos que van más allá del dominio de una materia y que hacen que una clase sea una buena experiencia para los estudiantes. Incluyen el ritmo de la clase, la comprobación de la comprensión y la paciencia al comunicarte.',
 obj:'Aplicar las habilidades blandas que convierten el conocimiento de una materia en una clase realmente buena: flexibilidad cognitiva, conocimiento de tus estudiantes, un entorno seguro para cometer errores, motivación, un ritmo adecuado para la edad, comprobación de la comprensión, comunicación paciente, atención equitativa y retroalimentación específica.',
 sections:[
  {t:'🤝 No se trata solo de saber el contenido', html:`
   <div class="card"><p>Dominar la materia es necesario, pero no es lo que hace que una clase sea agradable. Eso viene de un conjunto de hábitos que no tienen nada que ver con el conocimiento técnico.</p></div>
   ${iconGrid([
     {ic:'🔄', html:`<strong>Flexibilidad cognitiva.</strong> Ajustar tu explicación, tu ritmo o tu enfoque cuando el primero no funciona, en lugar de repetirlo más alto.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Conocer a tus estudiantes.</strong> Sus intereses, lo que los motiva — es lo que hace que los ejemplos conecten y convierte una clase genérica en una que se siente personal.`},
     {ic:'🛡️', html:`<strong>Un entorno seguro para equivocarse.</strong> Los estudiantes se arriesgan y aprenden de verdad cuando saben que una respuesta incorrecta no se va a juzgar.`},
     {ic:'🔥', html:`<strong>Pasión visible.</strong> Si ven en ti un interés genuino, se motivan más a participar — no se puede fingir, pero se nota mucho cuando falta.`}
   ])}
  `},
  {t:'💬 Retroalimentación constructiva, no genérica', html:`
   <div class="card"><p>«Buen trabajo» no le dice al estudiante nada que pueda repetir o en lo que pueda apoyarse. La retroalimentación constructiva es <strong>concreta</strong> y señala una dirección: qué está funcionando y qué mejorar o explorar a continuación.</p></div>
   ${doavoid(
     ['«Hiciste funcionar el bucle tú solo — genial, esa es justo la lógica que necesitábamos»', '«Esta parte está muy bien; prueba a aplicar la misma idea en la siguiente sección»', '«Vi que arreglaste ese error tú solo — ¿cómo lo pensaste?»'],
     ['«¡Buen trabajo!» sin mencionar qué se hizo realmente', '«Eso está mal» sin ninguna indicación de qué probar en su lugar', 'Retroalimentación que serviría igual para el trabajo de cualquier estudiante']
   )}
  `},
  {t:'🐢 Ritmo de la clase y comprobación de la comprensión, especialmente con niños pequeños', html:`
   <div class="card"><p>Una clase puede estar bien explicada y aun así avanzar demasiado rápido para el niño que tienes delante. Las familias suelen describirlo con comentarios como <em>«el tutor pasó al siguiente tema sin explicar»</em> o <em>«el método era para niños mayores»</em>. La solución es explicar los pasos más despacio, utilizar palabras que el niño conozca y <strong>comprobar que haya entendido antes de continuar</strong>. No basta con preguntar «¿alguna pregunta?» y seguir adelante.</p></div>
   ${iconGrid([
     {ic:'1️⃣', html:`<strong>Una instrucción a la vez.</strong> Da un paso, espera a que lo completen y luego indica el siguiente. No acumules tres instrucciones en una sola oración.`},
     {ic:'🖥️', html:`<strong>«Muéstrame».</strong> Pide al estudiante que comparta su pantalla. Lo que ves te da mucha más información que un simple «sí, entendí».`},
     {ic:'🗣️', html:`<strong>«¿Qué vas a hacer primero?».</strong> Pedirle que explique cuál será el siguiente paso permite detectar confusiones antes de que empiece.`},
     {ic:'👍', html:`<strong>Señales rápidas:</strong> pulgares arriba, un emoji o una reacción cuando hayan terminado un paso. Así puedes ver rápidamente cómo va todo el grupo.`},
     {ic:'⏳', html:`<strong>Tiempo para responder.</strong> Después de hacer una pregunta, cuenta hasta cinco antes de responder tú mismo o darle la palabra a otra persona.`},
     {ic:'📖', html:`<strong>Palabras que conocen.</strong> Explica los términos nuevos la primera vez que los utilices y acompáñalos con un ejemplo de su vida cotidiana.`}
   ])}
   ${dimTabs([
     {ic:'🧒', title:'De 6 a 8 años',
      intro:'Pasos cortos, muchas demostraciones y muy pocas palabras.',
      tips:[
       {ic:'👀', html:`<strong>Demuestra cada paso</strong> en tu pantalla antes de que los estudiantes lo intenten y asegúrate de que cada paso incluya una sola acción.`},
       {ic:'🔤', html:`<strong>Algunos todavía están aprendiendo a leer.</strong> Lee las instrucciones en voz alta y utiliza íconos, colores y señalamientos en lugar de textos largos.`},
       {ic:'🧸', html:`<strong>Comparaciones cotidianas:</strong> <em>«Un bucle es como cepillarse los dientes: repites el mismo movimiento una y otra vez».</em>`},
       {ic:'🎉', html:`<strong>Comprueba su comprensión con frecuencia y celebra</strong> cada pequeño logro.`}
      ]},
     {ic:'🧑', title:'De 9 a 11 años',
      intro:'Pueden seguir una secuencia corta, siempre que compruebes que la están entendiendo.',
      tips:[
       {ic:'📋', html:`<strong>Presenta dos o tres pasos y escríbelos en el chat</strong> como una lista para que puedan consultarlos cuando lo necesiten.`},
       {ic:'🗣️', html:`Antes de empezar, <strong>pídeles que expliquen con sus propias palabras</strong> qué van a hacer.`},
       {ic:'🔍', html:`<strong>Revisa sus pantallas</strong> después de cada paso, no solamente al final.`},
       {ic:'🧩', html:`<strong>Introduce los términos nuevos con ejemplos</strong> que reconozcan, como los de los videojuegos o las aplicaciones que utilizan.`}
      ]},
     {ic:'🧑‍🎓', title:'De 12 años en adelante',
      intro:'Dales más autonomía, pero no confundas el silencio con la comprensión.',
      tips:[
       {ic:'🧠', html:`<strong>Explica por qué se hace algo,</strong> no solamente cómo hacerlo. Los estudiantes mayores se involucran más cuando entienden la lógica detrás de una actividad.`},
       {ic:'🗳️', html:`<strong>Utiliza comprobaciones anónimas</strong> (una encuesta o una reacción). Los adolescentes rara vez dicen «no entendí» delante de sus compañeros.`},
       {ic:'🔒', html:`<strong>Ofrece la posibilidad de hacer preguntas por privado en el chat</strong> para que puedan expresar sus dudas sin que los demás las vean.`},
       {ic:'🚀', html:`<strong>Avanza más rápido con quienes demuestren que ya entendieron</strong> y ofréceles un reto adicional, sin dejar atrás al resto del grupo.`}
      ]}
   ],'✅ Estos son los tres grupos de edad.')}
  `},
  {t:'🗣️ Paciencia al comunicarte: frases que debes evitar y qué decir en su lugar', html:`
   <div class="card"><p>Los estudiantes recuerdan más cómo los hiciste sentir que lo que les explicaste. Una sola frase impaciente puede hacer que un niño deje de hacer preguntas y que una familia describa todo el curso diciendo <em>«el tutor no tiene paciencia»</em>. Cuando estamos cansados o tenemos prisa, es fácil recurrir a estas frases. Identifícalas y ten preparada una alternativa:</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>🚫 En lugar de decir…</th><th>✅ Intenta decir…</th></tr>
    <tr><td><em>«Ya expliqué esto».</em></td><td><em>«Déjame explicártelo de otra manera».</em></td></tr>
    <tr><td><em>«Esto es fácil».</em></td><td><em>«Este ejercicio requiere un poco de práctica. Vamos a hacerlo juntos».</em></td></tr>
    <tr><td><em>«Apúrate, todos te estamos esperando».</em></td><td><em>«Tómate tu tiempo. Mientras tanto, los demás pueden intentar el reto 2».</em></td></tr>
    <tr><td><em>«Ahora no».</em> (a un estudiante que levanta la mano)</td><td><em>«Ya te vi, Leo. Tú sigues».</em></td></tr>
    <tr><td><em>«Mira, todos los demás pudieron hacerlo».</em></td><td><em>«Ya resolviste bien la primera parte. Ahora veamos la siguiente».</em></td></tr>
    <tr><td><em>«Eso está mal».</em></td><td><em>«¡Casi! ¿Qué pasa si cambias esta línea?».</em></td></tr>
   </table></div>
   ${co('co-idea','⚖️',`<p><strong>La paciencia también significa ser justo.</strong> Distribuye tu atención: alterna los turnos, haz preguntas a diferentes estudiantes y comprueba cómo van quienes necesitan más tiempo con la misma frecuencia que quienes avanzan rápido. Un niño que siente que el tutor solo habla con los estudiantes «buenos» deja de esforzarse.</p>`)}
  `},
  {t:'💌 Mostrar interés más allá de las malas noticias', html:`
   <div class="card"><p>Unos padres que solo tienen noticias tuyas cuando algo va mal empiezan a asociar tus mensajes con problemas. Escribe también para celebrar algo bueno — no solo para señalar preocupaciones.</p></div>
   ${co('co-star','⭐',`<p>Este único hábito — escribir una vez, sin que te lo pidan, sobre algo que el estudiante hizo bien — cambia cómo lee la familia todo lo que le envíes después.</p>`)}
  `}
 ],
 ix:{
  title:'Habilidades blandas — comprobación del módulo',
  instr:'Necesitas obtener un 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'choice', prompt:'Un estudiante no entiende tu primera explicación. ¿Cómo se ve aquí la flexibilidad cognitiva?', opts:['Repetir la misma explicación, más despacio','Seguir adelante y retomarlo al final de la clase','Cambiar el enfoque — otro ángulo, una demostración, una parte más pequeña'], correct:2, fb:'Flexibilidad significa cambiar el enfoque, no solo repetirlo.'},
   {type:'sort', prompt:'¿Tesoro o basura? ¿Es retroalimentación constructiva?', card:'«Hiciste funcionar el bucle tú solo — prueba a aplicar esa misma idea en la siguiente sección.»', zones:[{label:'💎 Tesoro — constructiva', fb:'Correcto — dice concretamente qué funcionó y señala un siguiente paso.'},{label:'🗑️ Basura — genérica', fb:'No exactamente — esta nombra exactamente lo que hizo el estudiante y qué probar después. Eso es constructivo.'}], correctZone:0},
   {type:'sort', prompt:'¿Tesoro o basura? ¿Es retroalimentación constructiva?', card:'«¡Buen trabajo hoy, todos!»', zones:[{label:'💎 Tesoro — constructiva', fb:'No exactamente — es amable, pero no le dice a nadie qué repetir o en qué apoyarse.'},{label:'🗑️ Basura — genérica', fb:'Correcto — es amable, pero serviría para cualquiera. Nombra lo que realmente se hizo bien.'}], correctZone:1},
   {type:'choice', prompt:'¿Por qué escribir a los padres sobre algo bueno, y no solo sobre problemas?', opts:['Los padres lo esperan como una formalidad','Cambia cómo lee la familia todo lo que le envíes después','Solo hace falta cuando las calificaciones del estudiante son bajas'], correct:1, fb:'Los mensajes positivos, sin que te los pidan, construyen la confianza que facilita después las conversaciones difíciles.'},
   {type:'choice', prompt:'Acabas de explicar un paso a un grupo de niños de 7 años y preguntas: «¿Alguna pregunta?». Nadie responde. ¿Qué haces a continuación?', opts:['Continúas con el siguiente paso: el silencio significa que entendieron.','Compruebas si entendieron: «Muéstrenme su pantalla» o «¿Qué van a hacer primero?». Vuelves a demostrar el procedimiento para quienes tengan dificultades.','Repites la misma explicación más rápido para que haya tiempo de avanzar al siguiente paso.'], correct:1, fb:'El silencio no significa que hayan entendido, especialmente cuando se trata de niños pequeños. Una comprobación rápida como «muéstrame» permite detectar confusiones antes de continuar.'},
   {type:'sort', prompt:'¿Es una respuesta paciente o impaciente?', card:'Un estudiante hace la misma pregunta por segunda vez. Tú respondes: «Ya expliqué esto».', zones:[{label:'💎 Tesoro — paciente', fb:'No exactamente. Esta respuesta transmite al estudiante que debería haber entendido y muchos niños dejan de hacer preguntas después de escuchar algo así.'},{label:'🗑️ Basura — impaciente', fb:'¡Correcto! En su lugar, intenta decir: «Déjame explicártelo de otra manera». Una segunda pregunta significa que la primera explicación no fue suficiente.'}], correctZone:1}
  ]
 }
},
{id:'professional', numLabel:'Módulo 4', emoji:'🧱', color:'var(--coral)',
 title:'Responsabilidad y límites profesionales',
 desc:'Comenzar a tiempo y aprovechar toda la duración de la clase, qué hacer cuando una clase no puede realizarse según lo planeado, cómo hacerse cargo de un grupo y cuáles son los límites profesionales que protegen a los estudiantes, las familias y a ti.',
 obj:'Comenzar a tiempo y dar la clase completa, saber quién decide cuándo es necesario reprogramarla, hacerse cargo de un grupo sin dificultades y mantener los límites profesionales relacionados con las plataformas, el contacto, la atención, la cámara y la privacidad.',
 sections:[
  {t:'⏰ Siempre a tiempo y durante toda la clase', html:`
   <div class="card"><p>Para una familia, la clase es un tiempo por el que pagó y alrededor del cual organizó su día. Un tutor que comienza diez minutos tarde, toma un descanso no planificado o termina antes de tiempo es algo que las familias notan de inmediato, mucho antes de evaluar el contenido. La puntualidad y la responsabilidad también forman parte de la calidad de la clase.</p></div>
   ${rclock([
     {ic:'🧰', when:'15 minutos antes', t:'Prepárate con anticipación', d:'Conéctate antes de la hora, comprueba tu conexión, cámara y micrófono, y abre el grupo y la clase en BO.'},
     {ic:'🟢', when:'Hora de inicio', t:'Comienza a tiempo', d:'Los primeros minutos son para la actividad inicial, no para preparar tu equipo.'},
     {ic:'🎯', when:'Durante la clase', t:'La clase completa', d:'Desarrolla todas las etapas planificadas, sin descansos no previstos ni tareas ajenas a la clase.'},
     {ic:'🏁', when:'Hora de finalización', t:'Termina a tiempo', d:'Nunca termines antes de la hora. El cierre y la vista previa de la siguiente clase también forman parte de la sesión.'}
   ])}
   ${co('co-danger','🚨',`<p><strong>¿Vas tarde o no puedes conectarte?</strong> Informa a tu Team Leader de inmediato. No dejes que los estudiantes esperen sin recibir ninguna explicación. Una clase que comienza tarde no se compensa terminando unos minutos antes. Informa a tu Team Leader para que pueda decidir qué ofrecerle a la familia.</p>`)}
  `},
  {t:'📅 Cuando una clase no puede realizarse según lo planeado', html:`
   <div class="card"><p>Las enfermedades y las emergencias ocurren. Lo que determina si una familia comprende la situación es <strong>qué tan pronto recibe la información y qué sucede después</strong>. Un mensaje enviado treinta minutos antes de la clase o un tutor que simplemente no se presenta son situaciones que las familias describen como <em>«desorganizadas»</em> y que, con frecuencia, las llevan a solicitar un reembolso.</p></div>
   ${doavoid(
     ['Informa a tu Team Leader <strong>tan pronto como sepas</strong> que no podrás dar una clase. Cuanto antes lo sepa, más opciones tendrá (un tutor sustituto o una nueva fecha).','Sigue el plan acordado con tu Team Leader, incluido el mensaje que se enviará a la familia.','Respeta el horario acordado para las clases: el mismo día y a la misma hora cada semana.','Si se perdió una clase, deja que tu Team Leader decida cómo se recuperará.'],
     ['Cancelar o cambiar una clase por tu cuenta. Los tutores no reprograman las clases.','Avisar directamente a la familia en el último momento sin consultar con tu Team Leader.','Prometer una clase de recuperación o una compensación.','Dar la clase en un horario diferente al acordado, incluso si es «solo por esta vez».']
   )}
  `},
  {t:'🤝 Hacerse cargo de un grupo', html:`
   <div class="card"><p>Las familias notan los cambios de tutor, especialmente cuando nadie les ha informado o cuando cada nuevo tutor empieza desde cero. Si te haces cargo de un grupo, procura que el cambio se sienta como una continuidad y no como un nuevo comienzo.</p></div>
   ${stepFlow([
     {ic:'📖', label:'Lee los comentarios en BO y revisa el progreso del grupo antes de tu primera clase.'},
     {ic:'👋', label:'Preséntate a los estudiantes y, según lo acordado con tu Team Leader, también a las familias.'},
     {ic:'🔁', label:'Mantén las rutinas que ya conocen: las reglas, la estructura de las clases y la forma en que comparten su trabajo.'},
     {ic:'💬', label:'Pregúntales a los estudiantes qué les ha gustado de las clases anteriores.'}
   ])}
  `},
  {t:'🧱 Los límites profesionales', html:`
   <div class="card"><p>Algunas situaciones no tienen que ver directamente con tus habilidades docentes, pero pueden acabar con la confianza de una familia igual de rápido. Selecciona cada apartado:</p></div>
   ${symCards([
     {ic:'🏷️', title:'Solo Kodland, dentro y fuera de la clase',
      do:`Habla únicamente sobre los cursos y las herramientas de Kodland. Si detectas un problema con la plataforma o con un curso, infórmalo a tu Team Leader.`,
      avoid:`Promocionar otra plataforma, otra escuela o tus propias clases particulares · hablar negativamente de la plataforma o del curso delante de los estudiantes o sus familias.`},
     {ic:'📵', title:'Contacto únicamente a través de canales oficiales',
      do:`Comunícate con las familias a través de los canales que utiliza tu región para las clases de Kodland. Fuera de las clases, tu contacto debe ser con los padres, no directamente con los niños.`,
      avoid:`Utilizar redes sociales personales o chats privados para comunicarte con los estudiantes · invitarlos a jugar videojuegos o reunirse en línea después de clase · compartir tus datos de contacto personales.`},
     {ic:'📷', title:'Cámara y privacidad',
      do:`Invita amablemente a los estudiantes a encender sus cámaras una vez y respeta su decisión. Algunos estudiantes mantienen la cámara apagada por motivos culturales, religiosos o personales. En su lugar, ofréceles participar mediante el chat, las reacciones o compartiendo su pantalla.`,
      say:`<em>«No hay ningún problema. Puedes participar a través del chat o compartiendo tu pantalla».</em>`,
      avoid:`Insistir o preguntar el motivo delante del grupo · tomar capturas de pantalla o fotografías de los estudiantes · compartir imágenes o información personal de los estudiantes.`},
     {ic:'🗨️', title:'Conversaciones adecuadas para la edad',
      do:`Mantén las conversaciones informales ligeras y apropiadas para la edad del grupo. Si surge un tema delicado, redirige la conversación tranquilamente hacia la clase.`,
      avoid:`Debates sobre política o religión, temas para adultos o problemas personales delante de los estudiantes.`}
   ])}
   ${chatMock({
     name:'Madre / padre', sub:'en línea', avatar:'👨', time:'19:40',
     msgs:[`¡Hola! A mi hijo le agradas mucho. ¿Podrías darle clases particulares fuera de Kodland? Te pagaríamos directamente, nos saldría más barato.`],
     title:'¿Cómo respondes?',
     text:'La familia está contenta contigo y te pide algo que sobrepasa los límites profesionales. Selecciona cada respuesta para ver qué sucede.',
     opts:[
      {t:`«¡Claro! Envíame tu número y nos ponemos de acuerdo».`, ok:false, fb:`Esto saca al estudiante de Kodland y rompe los límites profesionales de tu función. Nunca acuerdes clases particulares con una familia de Kodland.`},
      {t:`«¡Muchas gracias! Me alegra mucho saber que disfruta de nuestras clases. Sin embargo, solo puedo darle clases a través de Kodland. Si desean más clases o un formato diferente, el equipo de Atención al Cliente puede ayudarles a conocer las opciones disponibles».`, ok:true, fb:`Es una respuesta amable, clara y profesional. Agradeces el comentario, mantienes los límites y diriges a la familia hacia las personas que pueden ofrecerle otras opciones. Después, informa a tu Team Leader sobre la solicitud.`},
      {t:`«Eso no está permitido. Por favor, no vuelvas a pedirme algo así».`, ok:false, fb:`El límite que estableces es correcto, pero el tono no lo es: la familia lo dijo como un cumplido. Rechaza la propuesta amablemente y dirígela al equipo de Atención al Cliente.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Responsabilidad y límites profesionales — comprobación del módulo',
  instr:'Clasifica cada situación y elige la mejor respuesta. Necesitas obtener un 70 % para desbloquear la lista de verificación final.',
  items:[
   {type:'sort', prompt:'¿Está bien o cruza un límite profesional?', card:'Durante la clase, mientras los estudiantes trabajan, respondes un mensaje del padre o la madre de otro grupo.', zones:[{label:'✅ Está bien', fb:'No exactamente. El tiempo de la clase pertenece a estos estudiantes. Los mensajes de otras familias pueden esperar hasta que termine la sesión.'},{label:'🚫 Cruza un límite', fb:'¡Correcto! Durante la clase, tu atención debe estar centrada en el grupo. Las familias lo notan y pueden interpretar esta situación como «el tutor no estaba prestando atención».'}], correctZone:1},
   {type:'sort', prompt:'¿Está bien o cruza un límite profesional?', card:'Una estudiante mantiene su cámara apagada por motivos religiosos. Le permites participar mediante el chat y compartiendo su pantalla.', zones:[{label:'✅ Está bien', fb:'¡Correcto! Invita amablemente a encender la cámara, respeta la respuesta y ofrece otras formas de participar. Nunca insistas.'},{label:'🚫 Cruza un límite', fb:'No exactamente. Respetar los motivos de la estudiante y ofrecerle otras formas de participar es precisamente lo correcto.'}], correctZone:0},
   {type:'choice', prompt:'Te despiertas sintiéndote mal y sabes que no podrás dar la clase de esta tarde. ¿Qué haces?', opts:['Envías un mensaje a la familia 30 minutos antes de la clase para cancelarla.','Informas a tu Team Leader de inmediato para que pueda organizar un tutor sustituto o una nueva fecha, y sigues las indicaciones que te dé sobre cómo informar a la familia.','Das una clase más corta y terminas antes.'], correct:1, fb:'Los tutores no cancelan ni reprograman las clases por su cuenta. Cuanto antes lo sepa tu Team Leader, más opciones tendrá y la familia recibirá la información como parte de un plan, no en el último momento.'},
   {type:'sort', prompt:'¿Está bien o cruza un límite profesional?', card:'Después de clase, invitas a dos estudiantes a jugar Roblox juntos en línea.', zones:[{label:'✅ Está bien', fb:'No exactamente. El contacto con los estudiantes fuera de la clase, especialmente para jugar en privado, cruza un límite profesional, por más amistosa que parezca la invitación.'},{label:'🚫 Cruza un límite', fb:'¡Correcto! Fuera de la clase, tu contacto debe ser con los padres y a través de los canales oficiales. No debes mantener contacto privado ni jugar con los estudiantes.'}], correctZone:1},
   {type:'choice', prompt:'Vas a hacerte cargo de un grupo que antes estaba a cargo de otro tutor. ¿Qué debes hacer antes de tu primera clase?', opts:['Comenzar el curso desde la primera clase para saber en qué punto está cada estudiante.','No hacer nada especial. Los estudiantes se acostumbrarán a ti.','Leer los comentarios en BO y revisar el progreso del grupo, planificar cómo te presentarás y mantener las rutinas que el grupo ya conoce.'], correct:2, fb:'La continuidad hace que un cambio de tutor sea una experiencia segura para los estudiantes. Conoce la historia del grupo, preséntate y mantén las rutinas que ya conocen.'}
  ]
 }
},
{id:'checklist', numLabel:'Lista de verificación final', emoji:'✅', color:'var(--coral)',
 title:'Lista de verificación final',
 desc:'Aquí no hay examen — solo lo esencial de este mini-entrenamiento, antes de cerrarlo.',
 obj:'Repasa la lista de verificación de abajo. Este módulo no se califica — léela y luego finaliza el mini-entrenamiento.',
 sections:[
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   ${numlist([
     'Dejé un comentario en BO el mismo día en que supe de la solicitud y avisé a mi Team Leader',
     'Mi siguiente clase con este estudiante fue un intento real de recuperación — un turno de verdad, un logro visible, atención específica, ni una palabra sobre la solicitud',
     'Nunca confirmé una aprobación ni hablé de ninguna cantidad — usé la única frase segura y dejé el resto a Servicio al Cliente'
   ])}
  `}, {t:'🌱 En cada clase', html:`
   ${numlist([
     'Uso la misma estructura de clase cada vez, para que los estudiantes conozcan el ritmo y dediquen su energía a aprender',
     'Abro con las cuatro fases: un Calentamiento, un repaso de la clase anterior con las propias palabras del estudiante, una Revisión de la tarea de verdad y un Objetivo de la clase dicho con claridad',
     'En Teoría y práctica, enseño en pequeñas dosis, muestro primero en mi pantalla y protejo el tiempo de práctica',
     'Cierro con las fases en espejo: un Resumen de la clase con las propias palabras del estudiante, instrucciones claras para la tarea, un Adelanto de la próxima clase y un Cierre que celebra lo que crearon',
     'Leo mis evaluaciones de calidad fase por fase, y corrijo la fase que falla en mi próxima clase',
     'Estudio el manual y los materiales el día antes — no treinta minutos antes — y conozco el objetivo de la clase, no solo los pasos',
     'Abro el manual y la presentación desde BO, y compruebo que el ID del curso coincide con el del curso en el que están inscritos mis estudiantes',
     'Cuando encuentro una laguna, pregunto en el canal de Slack de mi curso, a mi Mentor Regional o a mi Team Leader — y reporto los errores de contenido con el icono 🐞 en BO',
     'Cuando mi primera explicación no funciona, cambio el enfoque — otro ángulo, una demostración, una parte más pequeña — en lugar de repetirla',
     'Conozco a mis estudiantes y construyo un espacio seguro donde no se juzgan los errores',
     'Doy retroalimentación concreta y constructiva: qué funcionó y qué probar después — nunca solo «buen trabajo»',
     'Escribo a las familias también para dar buenas noticias, no solo cuando algo va mal',
     'Doy una instrucción a la vez y compruebo la comprensión con preguntas como «muéstrame» o «¿qué vas a hacer primero?». El silencio no significa que hayan entendido.',
     'Adapto el ritmo y el vocabulario a la edad: utilizo pasos muy cortos y demostraciones para los más pequeños, y explico los términos nuevos con ejemplos.',
     'Evito frases impacientes como «ya expliqué esto» y distribuyo mi atención de manera equitativa entre todos los integrantes del grupo.',
     'Me conecto 15 minutos antes, comienzo a tiempo, doy la clase completa y nunca termino antes de la hora.',
     'Si no puedo dar una clase, informo a mi Team Leader tan pronto como lo sé. Nunca cancelo, cambio el horario ni prometo una clase de recuperación por mi cuenta.',
     'Cuando me hago cargo de un grupo, primero leo los comentarios en BO, me presento y mantengo las rutinas que el grupo ya conoce.',
     'Mantengo los límites profesionales: utilizo únicamente las plataformas de Kodland, me comunico a través de los canales oficiales, presto toda mi atención durante la clase y respeto la decisión de cada estudiante sobre el uso de la cámara y su privacidad.'
   ])}
  `}, {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Eso es todo el mini-entrenamiento.</strong> Cuando estés listo, continúa — y luego completa el DST en el LMS para cerrar la tarea.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
