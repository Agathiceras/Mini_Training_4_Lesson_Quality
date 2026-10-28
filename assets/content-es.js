/* Mini_Training_4_Lesson_Quality - Spanish content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='es';
const CONTENT = {
  flag:'🇪🇸', dir:'ltr',
  ui:{
    pageTitle:"Mini-entrenamiento · Calidad de las clases — Capacitación de tutores de Kodland",
    logoSub:'Departamento de Desarrollo de Tutores',
    heroEyebrow:"🎯 Mini-entrenamiento",
    heroTitle:"Una mirada honesta a la <span class=\"h-pill\">calidad de las clases</span>",
    heroIntro:"Has recibido este entrenamiento porque tienes estudiantes que han solicitado un reembolso por problemas con la calidad de la clase. Aquí te mostraremos qué puedes hacer como tutor y cómo manejar estas situaciones.",
    heroWork:"Completa 5 módulos cortos. Cada comprobación de módulo requiere un 70 % o más para desbloquear el siguiente. En total, unos 25–30 minutos.",
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
   <div class="card"><p>Todo lo anterior trata de detectarlo pronto. Pero puede que estés abriendo este entrenamiento porque una familia <strong>ya</strong> ha pedido un reembolso. Las reglas de abajo se aplican sea cual sea el motivo — léelas primero y usa el resto del entrenamiento para entender qué llevó hasta aquí y qué puedes seguir haciendo en la clase.</p></div>
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
 desc:'Los hábitos, más allá de dominar la materia, que hacen que una clase sea un lugar agradable en el que estar.',
 obj:'Aplicar las habilidades blandas que convierten el conocimiento de la materia en una clase realmente buena: flexibilidad cognitiva, conocer a tus estudiantes, seguridad para equivocarse, motivación y retroalimentación concreta.',
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
  {t:'💌 Mostrar interés más allá de las malas noticias', html:`
   <div class="card"><p>Unos padres que solo tienen noticias tuyas cuando algo va mal empiezan a asociar tus mensajes con problemas. Escribe también para celebrar algo bueno — no solo para señalar preocupaciones.</p></div>
   ${co('co-star','⭐',`<p>Este único hábito — escribir una vez, sin que te lo pidan, sobre algo que el estudiante hizo bien — cambia cómo lee la familia todo lo que le envíes después.</p>`)}
  `}
 ],
 ix:{
  title:'Habilidades blandas — comprobación del módulo',
  instr:'70 % para desbloquear la lista de verificación final.',
  items:[
   {type:'choice', prompt:'Un estudiante no entiende tu primera explicación. ¿Cómo se ve aquí la flexibilidad cognitiva?', opts:['Repetir la misma explicación, más despacio','Seguir adelante y retomarlo al final de la clase','Cambiar el enfoque — otro ángulo, una demostración, una parte más pequeña'], correct:2, fb:'Flexibilidad significa cambiar el enfoque, no solo repetirlo.'},
   {type:'sort', prompt:'¿Tesoro o basura? ¿Es retroalimentación constructiva?', card:'«Hiciste funcionar el bucle tú solo — prueba a aplicar esa misma idea en la siguiente sección.»', zones:[{label:'💎 Tesoro — constructiva', fb:'Correcto — dice concretamente qué funcionó y señala un siguiente paso.'},{label:'🗑️ Basura — genérica', fb:'No exactamente — esta nombra exactamente lo que hizo el estudiante y qué probar después. Eso es constructivo.'}], correctZone:0},
   {type:'sort', prompt:'¿Tesoro o basura? ¿Es retroalimentación constructiva?', card:'«¡Buen trabajo hoy, todos!»', zones:[{label:'💎 Tesoro — constructiva', fb:'No exactamente — es amable, pero no le dice a nadie qué repetir o en qué apoyarse.'},{label:'🗑️ Basura — genérica', fb:'Correcto — es amable, pero serviría para cualquiera. Nombra lo que realmente se hizo bien.'}], correctZone:1},
   {type:'choice', prompt:'¿Por qué escribir a los padres sobre algo bueno, y no solo sobre problemas?', opts:['Los padres lo esperan como una formalidad','Cambia cómo lee la familia todo lo que le envíes después','Solo hace falta cuando las calificaciones del estudiante son bajas'], correct:1, fb:'Los mensajes positivos, sin que te los pidan, construyen la confianza que facilita después las conversaciones difíciles.'}
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
     'Escribo a las familias también para dar buenas noticias, no solo cuando algo va mal'
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
