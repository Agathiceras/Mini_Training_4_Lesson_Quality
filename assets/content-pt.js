/* Mini_Training_4_Lesson_Quality - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    heroCard1:"<b>No seu ritmo.</b> Seu progresso fica salvo neste navegador.",
    heroCard2:"<b>Com prática.</b> Cada módulo termina com uma verificação rápida.",
    pbLabel:'módulos concluídos',
    tapOpen:'Toque para abrir',
    tapFlip:'Toque para virar',
    lblSee:'O que você vê',
    lblDo:'O que você faz',
    lblSay:'O que você pode dizer',
    lblReport:'Onde relatar',
    lblAvoid:'Evite',
    lblTip:'Dica',
    stepOf:'Passo {i} de {n}',
    next:'Próximo',
    pageTitle:"Minitreinamento · Qualidade da Aula — Treinamento de Tutores Kodland",
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:"🎯 Minitreinamento",
    heroTitle:"Um olhar honesto sobre a <span class=\"h-pill\">Qualidade da Aula</span>",
    heroIntro:"Você recebeu este treinamento porque tem alunos que pediram reembolso por problemas na qualidade da aula. Aqui, vamos mostrar o que você pode fazer como tutor e como lidar com essas situações.",
    heroWork:"Conclua os 6 módulos curtos. É necessário obter pelo menos 70% de acerto na avaliação de cada etapa para desbloquear a próxima. Duração total aproximada: 35–40 minutos.",
    startBtn:"🚀 Começar o treinamento",
    pathLabel:'Sua trilha de aprendizagem',
    devTitle:'Dev: desbloquear todos os módulos para revisão',
    backToPath:'Voltar à trilha',
    modulesPassed:'{done} / {total} módulos concluídos',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprovado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Começar',
    reviewBadge:'▶ Revisar',
    objective:'Objetivo',
    startCheck:'▶ Iniciar a verificação do módulo',
    finishBtn:'▶ Concluir o minitreinamento',
    doneBack:'✓ Pronto — voltar à trilha',
    ixBadge:'📋 Verificação do módulo — 70% para liberar o próximo módulo',
    ixItemBadge:'📋 Verificação do módulo — item {i} de {n}',
    scoreSoFar:'Pontuação até agora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'Não foi dessa vez — a resposta certa é “{label}”.',
    resPassed:'Módulo aprovado!',
    resFailed:'Ainda não foi dessa vez',
    resUnlocked:"Você liberou o próximo módulo.",
    resDone:"Você concluiu este minitreinamento.",
    resNeed:'Você precisa de Acerte 70% do quiz para liberar o próximo módulo. Revise a seção acima e tente a verificação de novo.',
    resContinue:'Continuar para a trilha de aprendizagem',
    resFinish:'Continuar',
    resBack:'Voltar à trilha',
    resReview:'Revisar este módulo',
    doneEyebrow:'Minitreinamento concluído',
    doneTitle:'🎉 Parabéns!',
    doneP1:"🎉 <strong>Parabéns! Você concluiu este minitreinamento.</strong>",
    doneP2:"Está tudo pronto por aqui! Volte à página de treinamento no LMS de onde você acessou este minitreinamento para encerrar a tarefa.",
    doneP3:"👉 <strong>Se houver uma verificação ou avaliação listada logo abaixo do treinamento no LMS, não deixe de fazê-la e de obter a nota para aprovação</strong> — caso contrário, a tarefa pode continuar incompleta.",
    doneP4:'Boa sorte! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo Dev: todos os módulos estão desbloqueados para revisão.',
    devOn:'🔓 Modo Dev ATIVADO — todos os módulos desbloqueados',
    devOff:'🔒 Modo Dev DESATIVADO — progresso apagado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Faça',
    avoidLabel:'🚫 Evite',
    noticeLabel:'Atenção:',
    cvSee:'O que você vê:',
    cvDo:'O que você faz:',
    dtExample:'Exemplo de uma aula real',
    dtNext:'Próximo:',
    dtDone:"✅ Essas são as quatro áreas. Agora, classifique o que você vê.",
    tlVideoTitle:'{label} — exemplo de uma aula real',
    tlVideoMeta:'Veja como essa fase aparece em uma aula real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introdução', emoji:'🧩', color:'var(--coral)',
 title:'Por que você está aqui',
 desc:'Por que este motivo merece uma autoavaliação honesta e específica — e as regras que valem quando um pedido de reembolso já foi feito.',
 obj:'Entender que este motivo diz respeito à aula em si, por que pedir ajuda cedo é exatamente a atitude certa e o que fazer (e o que não fazer) quando já existe um pedido de reembolso.',
 sections:[
  {t:'🪞 O mais difícil de ouvir', html:`
   <div class="card"><p>Este motivo significa que uma família sentiu que o problema era a <strong>qualidade da aula em si</strong> — não a criança, não o nível, não o horário. É mais difícil de ouvir do que a maioria dos outros motivos, e dá vontade de se defender ou de explicar o problema.</p></div>
   ${co('co-idea','💡',`<p><strong>Isto não é um veredito sobre você como pessoa.</strong> É um sinal sobre comportamentos específicos e corrigíveis em aulas específicas. Os tutores que levam isso a sério e de forma específica — em vez de pessoal — viram o jogo mais rápido.</p>`)}
   ${co('co-star','🎓',`<p><strong>Peça um olhar externo sobre a sua aula logo no início.</strong> Seu Mentor Regional existe justamente para isso — pedir feedback sobre como você ensina é a atitude certa, não um sinal de que há algo errado com você.</p>`)}
  `},
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   <div class="card"><p>Tudo o que foi dito acima é sobre identificar isso cedo. Mas talvez você esteja abrindo este treinamento porque uma família <strong>já</strong> pediu reembolso. As regras abaixo valem independentemente do motivo — leia-as primeiro e use o restante deste treinamento para entender o que levou a essa situação e o que ainda dá para fazer na aula.</p></div>
   ${co('co-idea','💡',`<p><strong>O pedido em si é criado pelo Client Service, não por você</strong> — essa parte não está nas suas mãos. O que continua sendo seu é tudo o que acontece na aula daqui em diante, e isso não é pouco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Não diga nada sobre o pedido em si</strong> — nem para a criança, nem para a família — a menos que o Client Service peça explicitamente que você diga algo específico. Seu trabalho agora é a aula, não a conversa.</p>`)}
  `},
  {t:'🎯 Sua próxima aula é a tentativa de reverter', html:`
   <div class="card"><p>Talvez você não tenha chance de mudar mais nada. Trate a próxima aula com essa criança como o momento que decide tudo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dê espaço para ela participar de verdade.</strong> Não faça uma pergunta só por fazer. Crie um momento genuíno em que ela se sinta valorizada e tenha a oportunidade de acertar.`},
     {ic:'🏆', html:`<strong>Garanta uma conquista cedo e bem visível.</strong> Ela deve sair da aula se sentindo capaz, não para trás.`},
     {ic:'👀', html:`<strong>Atenção específica</strong> — faça com que ela se sinta notada por algo concreto, não elogiada de forma genérica.`},
     {ic:'🤐', html:`<strong>Nenhuma menção ao pedido</strong> — mesmo que a criança toque no assunto, redirecione com carinho e continue ensinando.`}
   ])}
  `},
  {t:'📮 Avise rápido e conheça a única frase segura', html:`
   <div class="card"><p>Você pode descobrir se há um pedido de reembolso por meio dos comentários do Client Service no perfil do aluno, no BO. Não há nenhum sistema automático que envie esse aviso. Quando ficar sabendo, lembre-se de que as informações que você obteve durante as aulas são algo que o Client Service não tem como conseguir de outra forma.</p></div>
   ${numlist([
     'Deixe um comentário no BO no mesmo dia com exatamente o que você viu — datas e detalhes específicos, não impressões',
     'Inclua as palavras da própria família, literalmente, se você as tiver',
     'Avise seu Team Leader no mesmo dia',
     'Nunca confirme que um reembolso foi aprovado nem discuta qualquer valor'
   ])}
   ${co('co-ok','✅',`<p><strong>A mensagem que é sempre seguro dizer:</strong> <em>“O Atendimento ao Cliente vai ajudar vocês com isso.”</em> Aí termina a sua parte da conversa — o Atendimento ao Cliente assume a partir daí.</p>`)}
  `},
  {t:'🌱 Mantenha o cuidado depois', html:`
   <div class="card"><p>Independentemente de o pedido de reembolso ser retirado, de a criança continuar no seu grupo ou de passar para outro tutor ou formato, continue dedicando atenção extra às aulas seguintes. Uma mudança positiva que dura apenas uma aula e depois dá lugar à rotina habitual dificilmente se sustenta a longo prazo.</p></div>
  `}
 ]
},
{id:'structure', numLabel:'Módulo 1', emoji:'🧭', color:'var(--coral)',
 title:'Estrutura da aula',
 desc:'A estrutura espelhada de nove fases que faz a aula parecer completa, com exemplos de aulas reais, e como ler suas próprias avaliações de qualidade.',
 obj:'Entender por que uma estrutura de aula consistente é uma das maiores alavancas da qualidade da aula, aprender as nove fases e saber ler suas avaliações de qualidade para ver exatamente onde você está perdendo a turma.',
 sections:[
  {t:'🧭 A consistência é o ponto central', html:`
   <div class="card"><p>Quando o aluno aprende o seu ritmo, ele deixa de gastar energia tentando descobrir “o que acontece agora?” e passa a usá-la para aprender. Siga a mesma estrutura sempre, até que ela se torne natural — para você e para eles.</p></div>
  `},
  {t:'🌅 O início: quatro fases', html:`
   ${timeline([
     {ic:'👋', label:'1 · Aquecimento', items:['Uma pergunta rápida ou um pequeno desafio que coloca o aluno no “modo aula” — e um momento de construção de comunidade.'], video:'https://drive.google.com/file/d/1fMWyd6bfCcUauqIIaNldojVuHYg6J9JR/preview'},
     {ic:'📖', label:'2 · Revisão da aula anterior', items:['Retome rapidamente o que foi aprendido na última vez, com as palavras do próprio aluno. “Eu me lembro disso” gera confiança de verdade.'], video:'https://drive.google.com/file/d/1J1jijTw8bj8l9yw9aMNXp9zHwxEbkWbY/preview'},
     {ic:'📋', label:'3 · Verificação da lição de casa', items:['Revisem a lição de casa juntos — identifique mal-entendidos, elogie o esforço, mostre que o trabalho foi realmente visto.'], video:'https://drive.google.com/file/d/1H2Awetu6fkoatv2RMonUeBawgK7tsR3e/preview'},
     {ic:'🎯', label:'4 · Objetivo da aula', items:['Diga com clareza do que trata a aula de hoje. Um aluno que não sabe para que serve a aula de hoje perde o interesse rapidamente.'], video:'https://drive.google.com/file/d/1cuqULcb1jxkwV_uepi-dnxFdx3FB41Si/preview'}
   ])}
  `},
  {t:'🎨 O meio: teoria e prática', html:`
   <div class="card"><p>A etapa mais longa, em que o conteúdo novo é ensinado e imediatamente usado. Mantenha a teoria em blocos pequenos — um conceito, depois a prática com ele — e <strong>demonstre primeiro</strong>: mostre na sua tela antes que os alunos tentem na deles. Proteja o tempo de prática com firmeza; uma aula em que as crianças só ficaram olhando você trabalhar é uma aula em que ninguém praticou de verdade.</p></div>
  `},
  {t:'🏁 O final: o espelho', html:`
   <div class="card"><p>As quatro fases finais retomam as iniciais em ordem inversa. Assim, a aula termina como começou, criando uma sensação de fechamento e de ritmo.</p></div>
   ${timeline([
     {ic:'📋', label:'1 · Resumo da aula', items:['Recapitule o conteúdo da aula, mas também peça ao aluno que faça seu próprio resumo. As palavras dele revelam o que realmente aprendeu.'], video:'https://drive.google.com/file/d/1jNZGDMnRYh83xGd2NVHrZTdgXLagi2GZ/preview'},
     {ic:'📖', label:'2 · Instruções da lição de casa', items:['Instruções claríssimas sobre o que fazer e como. Lição de casa vaga é lição de casa que não será feita.'], video:'https://drive.google.com/file/d/1qOYvENqjiYlwRaFvDb0A7W6JYgWPCjJc/preview'},
     {ic:'▶️', label:'3 · Prévia da próxima aula', items:['Dê um gostinho do que vem a seguir — mantém o aluno envolvido emocionalmente, e não apenas cumprindo uma lista de tarefas.'], video:'https://drive.google.com/file/d/17bE6JdZmDFJ_igrWYhc7fnpD39b-k-2K/preview'},
     {ic:'✨', label:'4 · Encerramento', items:['Termine em alta: celebre o que o aluno criou. Os últimos 30 segundos são o que ele pesa ao decidir se volta na próxima vez.'], video:'https://drive.google.com/file/d/1OTYSh07wSosjgsHFD05YvccD3NY2CgsX/preview'}
   ])}
  `},
  {t:'📊 Lendo suas avaliações de qualidade', html:`
   <div class="card"><p>Suas avaliações de qualidade correspondem diretamente a estas fases — elas existem para mostrar exatamente onde da estrutura algo está falhando: um aquecimento que não aconteceu, um objetivo que nunca foi dito, um tempo de prática que foi encurtado, um encerramento que não houve.</p></div>
   ${co('co-idea','💡',`<p><strong>Leia-as fase por fase, não como uma nota geral.</strong> Uma nota baixa sem contexto diz pouco; uma nota baixa em “Objetivo da aula” ou “Encerramento” diz exatamente o que mudar na sua próxima aula.</p>`)}
  `}
 ],
 ix:{
  title:'Estrutura da aula — verificação do módulo',
  instr:'Cinco rodadas rápidas: coloque cada fase no lugar certo da aula e adivinhe qual fase está sendo descrita. Acerte 70% do quiz para liberar o próximo módulo.',
  items:[
   {type:'sort', prompt:'A qual parte da aula pertence esta fase?', card:'▶️ Prévia da próxima aula', zones:[{label:'🌅 Uma das 4 fases iniciais', fb:'Não exatamente — a Prévia da próxima aula faz parte do bloco final espelhado, não do início.'},{label:'🏁 Uma das 4 fases finais', fb:'Correto — é a terceira das quatro fases finais, logo antes do Encerramento.'}], correctZone:1},
   {type:'sort', prompt:'Qual fase está sendo descrita?', card:'“Este momento diz ao aluno para que serve a aula de hoje. Sem ele, o aluno não sabe aonde está querendo chegar — e perde o interesse rapidamente.”', zones:[{label:'👋 Aquecimento', fb:'Não exatamente — o Aquecimento coloca os alunos no modo aula, mas não diz para que serve a aula de hoje. Isso é o Objetivo da aula.'},{label:'🎯 Objetivo da aula', fb:'Correto — dizer com clareza o Objetivo da aula dá a toda a aula uma direção que os alunos conseguem seguir.'},{label:'📋 Resumo da aula', fb:'Não exatamente — o Resumo olha para trás, para o que foi visto. Dizer para que serve a aula de hoje acontece no início: o Objetivo da aula.'},{label:'✨ Encerramento', fb:'Não exatamente — o Encerramento fecha a aula. Saber para que serve a aula de hoje acontece no início: o Objetivo da aula.'}], correctZone:1},
   {type:'sort', prompt:'A qual parte da aula pertence esta fase?', card:'📖 Revisão da aula anterior', zones:[{label:'🌅 Uma das 4 fases iniciais', fb:'Correto — é a segunda das quatro fases iniciais, logo depois do Aquecimento.'},{label:'🏁 Uma das 4 fases finais', fb:'Não exatamente — a Revisão da aula anterior abre a aula, não a encerra.'}], correctZone:0},
   {type:'sort', prompt:'Qual fase está sendo descrita?', card:'“Deixar o aluno dizer com as próprias palavras o que aprendeu hoje revela o que realmente ficou — e o que precisa ser reforçado na próxima vez.”', zones:[{label:'📖 Revisão da aula anterior', fb:'Quase — mas essa fase retoma a <em>última</em> aula. Colocar o que se aprendeu <em>hoje</em> em palavras próprias é o Resumo da aula.'},{label:'📋 Verificação da lição de casa', fb:'Não exatamente — a Verificação da lição de casa revisa a lição. Isto é o Resumo da aula.'},{label:'▶️ Prévia da próxima aula', fb:'Não exatamente — a Prévia olha para a frente. Recapitular o dia de hoje com as palavras do aluno é o Resumo da aula.'},{label:'📋 Resumo da aula', fb:'Correto — o Resumo da aula permite verificar o que realmente ficou, nas palavras do próprio aluno.'}], correctZone:3},
   {type:'sort', prompt:'Qual fase está sendo descrita?', card:'“Os últimos 30 segundos são o que o aluno pesa ao decidir se volta na próxima vez — então termine celebrando o que ele criou.”', zones:[{label:'✨ Encerramento', fb:'Correto — o Encerramento termina a aula em alta, e é essa sensação que faz o aluno voltar.'},{label:'📖 Instruções da lição de casa', fb:'Não exatamente — as Instruções da lição de casa tratam de passar orientações claras. Terminar em alta é o Encerramento.'},{label:'🎯 Objetivo da aula', fb:'Não exatamente — o Objetivo da aula acontece no início. Isto é o Encerramento.'},{label:'👋 Aquecimento', fb:'Não exatamente — o Aquecimento abre a aula. Os últimos 30 segundos pertencem ao Encerramento.'}], correctZone:0}
  ]
 }
},
{id:'prep', numLabel:'Módulo 2', emoji:'📚', color:'var(--coral)',
 title:'Tempo de preparação',
 desc:'Por que estudar o manual no dia anterior, e não trinta minutos antes, é o que realmente protege a qualidade da aula — e onde encontrá-lo no BO.',
 obj:'Preparar-se para a aula com tempo suficiente para identificar lacunas antes que ela comece, encontrar o material certo no BackOffice e saber exatamente onde buscar ajuda ou relatar um problema de conteúdo.',
 sections:[
  {t:'⏳ Não trinta minutos antes', html:`
   <div class="card"><p>Uma preparação feita meia hora — ou dez minutos — antes da aula não deixa espaço para aprender de verdade algo que você ainda não sabe. Se há um conceito, um trecho de código ou uma ferramenta com que você não se sente seguro, você vai aprender isso ao vivo, na frente do aluno.</p></div>
   ${co('co-idea','💡',`<p><strong>Estude o manual e os materiais no dia anterior.</strong> Assim você tem tempo de perceber uma lacuna no seu próprio conhecimento, um erro no material ou uma atividade que você não entende por completo — e de fazer algo a respeito antes da aula.</p>`)}
  `},
  {t:'🎯 Conheça o objetivo, não só os passos', html:`
   <div class="card"><p>Entenda com clareza o que a aula de hoje realmente pretende alcançar — não apenas a sequência de passos do manual. Quando você conhece o objetivo, pode adaptar o caminho a ele se algo sair diferente do planejado, sem perder o sentido da aula.</p></div>
   <img class="mt-pic" src="Pictures_T4/goals.png" alt="Exemplo de página do manual mostrando os objetivos da aula e os resultados educacionais">
  `},
  {t:'🆘 Quando você encontrar uma lacuna', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>Use o canal de Slack do seu curso.</strong> Outros tutores quase certamente já toparam com o mesmo erro ou com o mesmo passo confuso.`},
     {ic:'🎓', html:`<strong>Pergunte ao seu Mentor Regional</strong> se for sobre como ensinar ou explicar algo específico.`},
     {ic:'👩‍💼', html:`<strong>Pergunte ao seu Team Leader</strong> se for sobre o curso em si, os materiais ou algo que precise ser corrigido na origem.`}
   ])}
   ${co('co-star','⭐',`<p>Encontrar uma lacuna no dia anterior e pedir ajuda é exatamente o sistema funcionando como deveria. Encontrá-la ao vivo, na aula, é justamente o que o tempo de preparação existe para evitar.</p>`)}
  `},
  {t:'🗂️ Encontrando o material do seu curso no BO', html:`
   <div class="card"><p>O manual da aula e a apresentação ficam no BackOffice (BO), anexados ao registro específico do curso que você está ministrando — e não em uma página antiga da wiki, que pode estar desatualizada. A simulação abaixo mostra, passo a passo, onde encontrá-los e onde relatar eventuais erros no próprio conteúdo.</p></div>
   ${co('co-danger','🚨',`<p><strong>Sempre confira se o ID do curso que você abre é o mesmo em que seus alunos estão matriculados.</strong> Cursos de aparência parecida existem lado a lado no BO — dar aula com o curso errado, mesmo uma versão diferente do mesmo curso, pode transformar uma aula em caos em segundos.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Material do curso &amp; erros de conteúdo</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Material do curso e erros de conteúdo" loading="lazy"></iframe></div></div>
  `}
 ],
 ix:{
  title:'Tempo de preparação — verificação do módulo',
  instr:'Acerte 70% do quiz para liberar o próximo módulo.',
  items:[
   {type:'choice', prompt:'Quando você deve estudar o manual e os materiais de uma aula?', opts:['No dia anterior, para haver tempo de corrigir qualquer lacuna que você encontrar','Logo antes da aula, para estar fresco na sua memória','Só quando for uma aula que você nunca deu antes'], correct:0, fb:'No dia anterior você tem tempo de realmente resolver o que encontrar — uma lacuna, um erro, uma atividade que você não entende por completo.'},
   {type:'choice', prompt:'Você encontra no manual um trecho de código que não funciona. O que você faz?', opts:['Pular essa parte da aula e torcer para que ninguém perceba','Resolver ao vivo durante a aula, com os alunos','Perguntar no canal de Slack do seu curso, ao seu mentor ou ao seu Team Leader — e relatar com o ícone 🐞 no BO'], correct:2, fb:'Esses canais existem justamente para que você não precise resolver isso ao vivo e sozinho — e relatar faz com que o problema seja corrigido para todos os grupos depois do seu.'},
   {type:'choice', prompt:'Antes de abrir o manual da aula no BO, o que você deve conferir?', opts:['Que a aula tem uma apresentação anexada','Que o ID do curso é o mesmo em que seus alunos estão matriculados','Que o manual foi atualizado neste mês'], correct:1, fb:'Cursos parecidos existem lado a lado no BO. Dar aula com o ID de curso errado é um dos caminhos mais rápidos para uma aula caótica.'},
   {type:'choice', prompt:'Por que conhecer o objetivo da aula é mais útil do que conhecer apenas os passos?', opts:['Permite adaptar o caminho se algo sair diferente, sem perder o sentido da aula','Significa que você pode pular partes do manual que acha menos úteis','Ajuda a terminar a aula mais rápido'], correct:0, fb:'Saber o “porquê” permite flexibilizar o “como” sem perder o propósito da aula.'}
  ]
 }
},
{id:'soft', numLabel:'Módulo 3', emoji:'🤝', color:'var(--coral)',
 title:'Habilidades interpessoais',
 desc:'Os hábitos que vão muito além do domínio técnico do conteúdo e que transformam a aula em uma experiência verdadeiramente agradável para o aluno. Isso inclui o controle do ritmo da aula, as técnicas de verificação de compreensão e a paciência na comunicação.',
 obj:'Aplicar as habilidades interpessoais que elevam o seu conhecimento técnico ao nível de uma aula de excelência: flexibilidade cognitiva, conhecer os alunos individualmente, criar um ambiente seguro para o erro, motivação constante, ritmo adequado à faixa etária, verificação real de aprendizado, comunicação paciente, atenção igualitária e feedback construtivo e direcionado.',
 sections:[
  {t:'🤝 Não é só dominar o conteúdo', html:`
   <div class="card"><p>Dominar o conteúdo é necessário, mas não é isso que faz uma aula ser agradável de viver. Isso vem de um conjunto de hábitos que não têm nada a ver com conhecimento técnico.</p></div>
   ${iconGrid([
     {ic:'🔄', html:`<strong>Flexibilidade cognitiva.</strong> Ajustar sua explicação, o ritmo ou a abordagem quando a primeira não está funcionando, em vez de repeti-la mais alto.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Conhecer seus alunos.</strong> Os interesses deles, o que os motiva — é o que faz os exemplos funcionarem e transforma uma aula genérica em algo que parece pessoal.`},
     {ic:'🛡️', html:`<strong>Um ambiente seguro para errar.</strong> Os alunos se arriscam e realmente aprendem quando sabem que uma resposta errada não será recebida com julgamento.`},
     {ic:'🔥', html:`<strong>Paixão visível.</strong> Se eles percebem interesse genuíno da sua parte, ficam mais motivados a participar — isso não dá para fingir, mas a falta dele é perceptível.`}
   ])}
  `},
  {t:'💬 Feedback construtivo, não genérico', html:`
   <div class="card"><p>“Bom trabalho” não diz ao aluno nada que ele possa repetir ou desenvolver. O feedback construtivo é <strong>específico</strong> e aponta uma direção: o que está funcionando e o que melhorar ou explorar a seguir.</p></div>
   ${doavoid(
     ['“Você fez o loop funcionar sozinho — muito bem, essa é exatamente a lógica de que precisávamos”', '“Esta parte está forte; tente aplicar a mesma ideia na próxima seção”', '“Percebi que você corrigiu esse erro sozinho — o que você estava pensando ali?”'],
     ['“Bom trabalho!” sem nenhuma referência ao que foi realmente feito', '“Está errado” sem nenhuma direção sobre o que tentar no lugar', 'Um feedback que serviria igualmente para o trabalho de qualquer aluno']
   )}
  `},
  {t:'🐢 Ritmo da aula e verificação de compreensão — especialmente com crianças pequenas', html:`
   <div class="card"><p>Uma aula pode estar tecnicamente impecável e, ainda assim, avançar rápido demais para a criança que está do outro lado da tela. As famílias costumam relatar essa frustração com comentários do tipo: <em>“o tutor passou para o próximo assunto sem explicar direito”</em> ou <em>“parece que a metodologia é para crianças mais velhas”</em>. A solução é fracionar as etapas, usar vocabulário adequado à idade e <strong>comprovar que a criança entendeu antes de seguir em frente</strong>. Não basta perguntar “alguma dúvida?” e avançar.</p></div>
   ${iconGrid([
     {ic:'1️⃣', html:`<strong>Uma instrução por vez.</strong> Dê um comando, aguarde o aluno concluir e só então passe para o próximo passo. Nunca acumule três instruções na mesma frase.`},
     {ic:'🖥️', html:`<strong>“Mostre para mim.”</strong> Peça ao aluno que compartilhe a tela. O que você observa ali oferece muito mais informações do que um simples “sim, entendi” dito no microfone.`},
     {ic:'🗣️', html:`<strong>“O que você vai fazer primeiro?”</strong> Pedir que o aluno explique qual será a próxima ação dele ajuda a diagnosticar bloqueios antes mesmo que ele comece.`},
     {ic:'👍', html:`<strong>Sinais rápidos:</strong> um polegar para cima, um emoji ou uma reação na tela quando uma etapa for concluída. Essa tática simples permite que você monitore todo o grupo em segundos.`},
     {ic:'⏳', html:`<strong>Tempo para responder.</strong> Depois de lançar uma pergunta, conte mentalmente até cinco antes de respondê-la você mesmo ou repassar a palavra para outro aluno.`},
     {ic:'📖', html:`<strong>Palavras que eles conhecem.</strong> Traduza termos técnicos na primeira vez em que eles aparecerem, sempre fazendo um paralelo com o cotidiano dos alunos.`}
   ])}
   ${dimTabs([
     {ic:'🧒', title:'De 6 a 8 anos',
      intro:'Etapas extremamente curtas, muitas demonstrações e pouquíssimas palavras.',
      tips:[
       {ic:'👀', html:`<strong>Demonstre cada ação</strong> na sua própria tela antes de pedir que os alunos tentem fazer e restrinja cada instrução a um único clique ou movimento.`},
       {ic:'🔤', html:`<strong>Algumas crianças ainda estão em fase de alfabetização.</strong> Leia as instruções em voz alta e abuse de ícones, cores e referências visuais em vez de longos textos.`},
       {ic:'🧸', html:`<strong>Use analogias do cotidiano:</strong> <em>“Um loop (laço de repetição) é igual a escovar os dentes: você faz o mesmo movimento várias vezes seguidas”.</em>`},
       {ic:'🎉', html:`<strong>Verifique a compreensão a cada minuto e celebre</strong> cada pequena conquista efusivamente.`}
      ]},
     {ic:'🧑', title:'De 9 a 11 anos',
      intro:'Conseguem acompanhar sequências curtas de ações, desde que você verifique o entendimento ao longo do processo.',
      tips:[
       {ic:'📋', html:`<strong>Agrupe de duas a três etapas e deixe-as escritas em tópicos no chat.</strong> Assim, eles ganham autonomia para consultar a lista.`},
       {ic:'🗣️', html:`Antes de dar o sinal verde para começarem, <strong>peça que algum aluno explique com as próprias palavras</strong> qual é o objetivo daquela rodada.`},
       {ic:'🔍', html:`<strong>Verifique o progresso nas telas compartilhadas</strong> após cada rodada, não apenas no final do projeto.`},
       {ic:'🧩', html:`<strong>Apresente os novos conceitos usando exemplos</strong> de jogos e aplicativos que fazem parte do universo deles.`}
      ]},
     {ic:'🧑‍🎓', title:'A partir dos 12 anos',
      intro:'Dê maior autonomia à turma, mas tome cuidado: silêncio não significa compreensão.',
      tips:[
       {ic:'🧠', html:`<strong>Explique o “porquê” e não apenas o “como”.</strong> Os alunos mais velhos engajam muito mais quando enxergam a lógica e a utilidade por trás de uma ferramenta.`},
       {ic:'🗳️', html:`<strong>Use verificações anônimas</strong> (uma enquete rápida ou reações na tela). Adolescentes raramente admitem um “não entendi” na frente dos colegas.`},
       {ic:'🔒', html:`<strong>Deixe clara a possibilidade de usarem o chat privado para dúvidas:</strong> muitos preferem perguntar diretamente a você, longe dos olhares da turma.`},
       {ic:'🚀', html:`<strong>Avance mais rápido com aqueles que já demonstraram facilidade,</strong> oferecendo desafios extras para que não fiquem ociosos, mas garanta suporte aos que precisam de mais tempo.`}
      ]}
   ],'✅ Esses são os três grupos etários.')}
  `},
  {t:'🗣️ Paciência na comunicação — frases para evitar e o que dizer no lugar', html:`
   <div class="card"><p>Os alunos se lembrarão muito mais de como você os fez sentir do que dos conceitos que você explicou. Uma única frase atravessada ou impaciente pode travar uma criança, inibindo novas perguntas, e gerar um feedback da família de que <em>“o tutor não tem paciência com os alunos”</em>. É comum escorregarmos nessas frases quando estamos correndo contra o relógio. O segredo é identificá-las a tempo e ter uma resposta acolhedora na ponta da língua:</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>🚫 Em vez de dizer…</th><th>✅ Experimente dizer…</th></tr>
    <tr><td><em>“Eu já expliquei isso.”</em></td><td><em>“Vamos olhar isso de outro jeito. Deixe-me mostrar de novo.”</em></td></tr>
    <tr><td><em>“Mas isso é fácil.”</em></td><td><em>“Este passo exige um pouco mais de prática mesmo. Vamos fazer juntos.”</em></td></tr>
    <tr><td><em>“Anda logo, a turma inteira está esperando você.”</em></td><td><em>“Pode ir com calma. Pessoal, enquanto ele termina, tentem o desafio 2.”</em></td></tr>
    <tr><td><em>“Agora não.”</em> (para um aluno de mão levantada)</td><td><em>“Eu já vi a sua mão, Leo! Assim que eu terminar aqui, você é o próximo.”</em></td></tr>
    <tr><td><em>“Olha só, todo mundo já conseguiu.”</em></td><td><em>“Você já acertou toda a primeira parte! Vamos dar uma olhada no que faltou.”</em></td></tr>
    <tr><td><em>“Está errado.”</em></td><td><em>“Quase lá! O que acontece se você mudar esse número aqui?”</em></td></tr>
   </table></div>
   ${co('co-idea','⚖️',`<p><strong>Paciência também é sinônimo de justiça.</strong> Distribua sua atenção de forma equilibrada: faça rodízios nos turnos de fala, convide alunos diferentes para compartilhar a tela e garanta que aqueles que precisam de mais tempo recebam o mesmo nível de suporte e entusiasmo que os “rapidinhos” da turma. Um aluno que percebe que o tutor só elogia os “bons” rapidamente desiste de tentar.</p>`)}
  `},
  {t:'💌 Demonstrando interesse além das más notícias', html:`
   <div class="card"><p>Um responsável que só recebe notícias suas quando algo vai mal passa a associar suas mensagens a problemas. Envie também uma mensagem para celebrar algo bom — não apenas para sinalizar preocupações.</p></div>
   ${co('co-star','⭐',`<p>Este único hábito — enviar uma mensagem uma vez, espontaneamente, sobre algo que o aluno fez bem — muda a forma como a família lê tudo o que você envia depois.</p>`)}
  `}
 ],
 ix:{
  title:'Habilidades interpessoais — verificação do módulo',
  instr:'É necessário obter 70% de acerto para desbloquear o próximo módulo.',
  items:[
   {type:'choice', prompt:'Um aluno não acompanha a sua primeira explicação. Como é a flexibilidade cognitiva nesse caso?', opts:['Repetir a mesma explicação, mais devagar','Seguir em frente e voltar a isso no fim da aula','Mudar a abordagem — outro ângulo, uma demonstração, um bloco menor'], correct:2, fb:'Flexibilidade significa mudar a abordagem, e não só repeti-la.'},
   {type:'sort', prompt:'Tesouro ou lixo? Este é um feedback construtivo?', card:'“Você fez o loop funcionar sozinho — tente aplicar essa mesma ideia na próxima seção.”', zones:[{label:'💎 Tesouro — construtivo', fb:'Correto — é específico sobre o que funcionou e aponta um próximo passo.'},{label:'🗑️ Lixo — genérico', fb:'Não exatamente — este feedback diz exatamente o que o aluno fez e o que tentar a seguir. Isso é construtivo.'}], correctZone:0},
   {type:'sort', prompt:'Tesouro ou lixo? Este é um feedback construtivo?', card:'“Bom trabalho hoje, pessoal!”', zones:[{label:'💎 Tesouro — construtivo', fb:'Não exatamente — é simpático, mas não diz a ninguém o que repetir ou desenvolver.'},{label:'🗑️ Lixo — genérico', fb:'Correto — é simpático, mas serviria para qualquer um. Diga o que foi realmente bem feito.'}], correctZone:1},
   {type:'choice', prompt:'Por que mandar uma mensagem a um responsável sobre algo bom, e não só sobre problemas?', opts:['Os responsáveis esperam isso como formalidade','Muda a forma como a família lê tudo o que você envia depois','Só é necessário quando as notas do aluno estão baixas'], correct:1, fb:'Mensagens positivas e espontâneas constroem a confiança que facilita conversas mais difíceis depois.'},
   {type:'choice', prompt:'Você explicou uma etapa para uma turma de crianças de 7 anos e perguntou: “Alguma dúvida?”. Ninguém respondeu. O que você deve fazer em seguida?', opts:['Continuar para a próxima etapa: o silêncio geral indica que todos acompanharam.','Verificar ativamente o entendimento: “Mostrem as telas para mim” ou “O que nós vamos fazer primeiro?”. Se alguém estiver travado, demonstrar de novo.','Repetir a mesma explicação em um ritmo mais rápido, para garantir que absorveram sem atrasar a aula.'], correct:1, fb:'Silêncio não é sinônimo de compreensão, principalmente na primeira infância. Uma checagem ativa e visual (“mostre a tela”) diagnostica as dúvidas antes que a turma avance e se perca.'},
   {type:'sort', prompt:'Tesouro ou Lixo? Esta é uma resposta paciente?', card:'Um aluno faz exatamente a mesma pergunta pela segunda vez e você responde: “Eu já expliquei isso”.', zones:[{label:'💎 Tesouro — atitude paciente', fb:'Incorreto. Essa resposta embute a cobrança de que o aluno “já deveria saber”, inibindo-o severamente de tirar novas dúvidas.'},{label:'🗑️ Lixo — atitude impaciente', fb:'Correto! A alternativa acolhedora seria: “Vamos olhar isso de outro jeito, vou te mostrar de novo”. Se a criança perguntou pela segunda vez, significa que a sua primeira explicação não conectou com a forma como ela aprende.'}], correctZone:1}
  ]
 }
},
{id:'professional', numLabel:'Módulo 4', emoji:'🧱', color:'var(--coral)',
 title:'Confiabilidade e limites profissionais',
 desc:'A importância de começar no horário e entregar toda a carga horária prevista, os protocolos para quando um imprevisto impede a aula, como assumir uma turma já em andamento de forma fluida e o respeito inegociável aos limites profissionais que protegem os alunos, as famílias e você mesmo.',
 obj:'Começar no horário pontualmente e ministrar a aula completa, entender que a remarcação cabe exclusivamente à liderança, assumir turmas novas garantindo continuidade e aplicar rigorosamente os limites éticos sobre o uso de plataformas, contatos diretos, atenção exclusiva e privacidade.',
 sections:[
  {t:'⏰ Sempre no horário — e durante toda a aula', html:`
   <div class="card"><p>Para uma família, a aula é um serviço contratado e um compromisso ao redor do qual a casa se organizou. Um tutor que se atrasa dez minutos, faz pausas não combinadas ou encerra a aula antes da hora é notado instantaneamente — muito antes de qualquer avaliação sobre a qualidade da didática. A pontualidade e o respeito à carga horária são a base da confiança no seu trabalho.</p></div>
   ${rclock([
     {ic:'🧰', when:'15 minutos antes', t:'Preparação prévia', d:'Acesse a plataforma com antecedência, teste conexão, câmera e microfone, e já deixe a turma e o material abertos no BO.'},
     {ic:'🟢', when:'Horário de início', t:'Comece no horário cravado', d:'Os primeiros minutos da aula existem para o aquecimento pedagógico com os alunos, não para configurar seus equipamentos.'},
     {ic:'🎯', when:'Durante a aula', t:'A aula por inteiro', d:'Cumpra o roteiro planejado sem interrupções não programadas e sem dividir sua atenção com tarefas externas (uso de celular, abas paralelas, etc).'},
     {ic:'🏁', when:'Horário de término', t:'Encerre no horário', d:'Nunca termine a aula antes do previsto. O momento de fechamento e o “spoiler” da próxima aula fazem parte da carga horária.'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Vai se atrasar ou está sem internet?</strong> Comunique seu Team Leader imediatamente. Não deixe a sala aberta com os alunos aguardando no escuro. Uma aula que começa atrasada não é “compensada” simplesmente terminando minutos antes. O Team Leader deve ser avisado a tempo de definir como a escola se posicionará com a família.</p>`)}
  `},
  {t:'📅 Quando uma aula não pode acontecer conforme o planejado', html:`
   <div class="card"><p>Imprevistos de saúde e quedas de energia acontecem. A diferença entre uma família compreensiva e uma reclamação acalorada está <strong>na antecedência do aviso e na organização do plano de contingência</strong>. Avisar a família faltando trinta minutos ou simplesmente <em>“não aparecer”</em> transmite um amadorismo profundo — e é o gatilho perfeito para um pedido de reembolso.</p></div>
   ${doavoid(
     ['Comunique seu Team Leader <strong>no mesmo instante</strong> em que perceber que não poderá lecionar. O tempo joga a favor dele: quanto mais cedo ele souber, maiores as chances de alocar um tutor substituto ou alinhar uma nova data de forma organizada.','Siga rigorosamente o plano de comunicação definido pelo Team Leader sobre o que será informado aos responsáveis.','Mantenha a grade: o mesmo horário contratado, rigorosamente todas as semanas.','Se a aula não ocorreu, a decisão de como e quando ela será reposta cabe exclusivamente ao Team Leader e ao Atendimento ao Cliente.'],
     ['Cancelar a aula ou sugerir mudanças de horário por conta própria — tutores não possuem autonomia para remarcar aulas.','Avisar a família diretamente em cima da hora, passando por cima do protocolo da liderança.','Prometer aulas de reposição, bônus ou formatos alternativos para compensar a ausência.','Lecionar em um horário fora da grade oficial da turma, mesmo sob a desculpa de ser “só por hoje”.']
   )}
  `},
  {t:'🤝 Assumindo uma turma já em andamento', html:`
   <div class="card"><p>As famílias são muito sensíveis às trocas de tutor, especialmente quando a mudança ocorre sem aviso prévio ou quando o novo profissional parece “cair de paraquedas” sem conhecer o histórico dos alunos. Se você assumir uma turma, o seu desafio é construir continuidade, e não forçar um recomeço.</p></div>
   ${stepFlow([
     {ic:'📖', label:'Leia o histórico: estude todos os comentários no BO e o progresso da turma antes de entrar na sua primeira aula.'},
     {ic:'👋', label:'Apresente-se: faça uma introdução acolhedora aos alunos e, seguindo o alinhamento com seu Team Leader, envie também uma mensagem de apresentação às famílias.'},
     {ic:'🔁', label:'Mantenha a previsibilidade: preserve as rotinas que o grupo já domina — regras de convivência, dinâmica das etapas e a forma de compartilhar os projetos.'},
     {ic:'💬', label:'Construa pontes: pergunte aos alunos o que eles mais gostaram de fazer e aprender nas aulas passadas.'}
   ])}
  `},
  {t:'🧱 Os limites profissionais inegociáveis', html:`
   <div class="card"><p>Alguns limites éticos não têm relação com a sua habilidade de ensinar programação ou design, mas podem destruir a credibilidade da escola e a sua reputação em um piscar de olhos. Selecione cada tópico para entender a conduta exigida:</p></div>
   ${symCards([
     {ic:'🏷️', title:'Somente o ecossistema Kodland, dentro e fora da aula',
      do:`Trabalhe, mencione e respire apenas os cursos, materiais e plataformas oficiais da Kodland. Se identificar lentidão ou falhas sistêmicas na plataforma, reporte ao Team Leader.`,
      avoid:`Promover outras escolas, plataformas externas ou oferecer seus serviços como professor particular · tecer comentários negativos ou depreciativos sobre a plataforma ou os currículos na frente das famílias e dos alunos.`},
     {ic:'📵', title:'Contato estritamente pelos canais oficiais',
      do:`A comunicação com a família deve ocorrer exclusivamente pelas ferramentas e canais oficiais adotados pela sua região. Toda comunicação fora do horário de aula deve ser direcionada aos responsáveis, e nunca à criança.`,
      avoid:`Trocar mensagens privadas com alunos por redes sociais, WhatsApp particular ou fóruns de jogos · aceitar ou enviar convites para jogar online após a aula · compartilhar seu telefone ou e-mail pessoal.`},
     {ic:'📷', title:'Câmera e privacidade',
      do:`Faça um convite gentil no início da aula para que abram as câmeras, mas respeite a negativa imediatamente. A decisão de manter a câmera fechada pode envolver restrições culturais, religiosas ou o direito à própria imagem. Ofereça recursos paralelos para engajar esse aluno (chat, microfone, reações).`,
      say:`<em>“Sem problemas! Quem não puder abrir a câmera hoje pode interagir comigo mandando mensagens no chat ou compartilhando a tela do projeto!”</em>`,
      avoid:`Insistir na abertura da câmera, exigir justificativas na frente do grupo · fazer capturas de tela, fotos ou vídeos não autorizados da turma · vazar qualquer dado pessoal dos estudantes.`},
     {ic:'🗨️', title:'Conversas adequadas à idade',
      do:`Mantenha os momentos de quebra-gelo leves e voltados ao universo infantil/adolescente (jogos, séries, hobbies). Se um assunto espinhoso surgir na turma, redirecione o foco para o projeto do dia com sutileza.`,
      avoid:`Puxar ou dar palco para debates sobre política, pautas religiosas, assuntos voltados ao público adulto ou desabafar sobre seus problemas pessoais com os alunos.`}
   ])}
   ${chatMock({
     name:'Responsável', sub:'online', avatar:'👨', time:'19:40',
     msgs:[`Olá! Meu filho adora o seu jeito de ensinar. Você poderia dar aulas particulares para ele fora da Kodland? A gente te paga diretamente, ficaria mais barato para nós.`],
     title:'Como responder?',
     text:'A família fez um elogio sincero, mas o pedido ultrapassa uma fronteira profissional crítica (aliciamento de alunos). Avalie as opções:',
     opts:[
      {t:`“Claro! Anote meu número aqui no chat e a gente combina os detalhes.”`, ok:false, fb:`Essa atitude quebra seu contrato de exclusividade e desvia um aluno da base da empresa. Nunca aceite propostas de aulas por fora.`},
      {t:`“Muito obrigado! Fico extremamente feliz em saber que ele gosta das nossas aulas! Contudo, o meu vínculo de aulas com ele é exclusivamente via Kodland. Se vocês quiserem aumentar a carga horária ou testar outro formato, a equipe de Atendimento ao Cliente tem ótimas opções para oferecer.”`, ok:true, fb:`O tom é empático, profissional e firme. Você valida o elogio, demarca a fronteira ética e direciona os pais ao setor comercial correto. Na sequência, comunique o ocorrido ao seu Team Leader.`},
      {t:`“Isso não é permitido pela escola. Por favor, não me faça esse tipo de proposta novamente.”`, ok:false, fb:`Você manteve o limite, mas errou o tom. A família agiu com base na confiança e no elogio, não por malícia. Recusar de forma grosseira gera um atrito desnecessário.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Confiabilidade e limites profissionais — verificação do módulo',
  instr:'Classifique cada situação e escolha a melhor atitude. É necessário obter 70% de acerto para desbloquear a lista de verificação final.',
  items:[
   {type:'sort', prompt:'Conduta adequada ou Quebra de limite?', card:'Durante a aula, enquanto os alunos desenvolvem o projeto prático, você aproveita o silêncio para responder a uma mensagem no celular do responsável por outra turma.', zones:[{label:'✅ Conduta adequada', fb:'Incorreto. O tempo daquela aula é exclusivo daquela turma. O atendimento a outras famílias deve ocorrer após o encerramento da sessão.'},{label:'🚫 Quebra de limite profissional', fb:'Correto! Durante a aula, 100% do seu foco pertence àqueles alunos. As famílias percebem a dispersão e isso costuma virar reclamação de que “o tutor parecia estar fazendo outra coisa”.'}], correctZone:1},
   {type:'sort', prompt:'Conduta adequada ou Quebra de limite?', card:'Uma aluna não abre a câmera por motivos religiosos da família. Você entende a situação e incentiva a participação dela pelo chat e compartilhando a tela do projeto.', zones:[{label:'✅ Conduta adequada', fb:'Correto! Você fez o convite inicial, respeitou o limite da família sem constranger a aluna e garantiu que ela continuasse incluída na dinâmica da aula.'},{label:'🚫 Quebra de limite profissional', fb:'Incorreto. Respeitar o direito à privacidade e imagem da aluna e buscar alternativas pedagógicas é a conduta esperada.'}], correctZone:0},
   {type:'choice', prompt:'Você acorda se sentindo mal e tem certeza de que não conseguirá lecionar a aula daquela noite. O que você deve fazer?', opts:['Mandar uma mensagem direta para a família 30 minutos antes do horário avisando do cancelamento.','Notificar seu Team Leader imediatamente para que ele ganhe tempo de acionar um substituto ou organizar a remarcação, seguindo as diretrizes dele sobre a comunicação aos responsáveis.','Forçar a saúde, entrar na aula, dar o conteúdo pela metade e encerrar a sessão mais cedo.'], correct:1, fb:'O tutor não tem autonomia para cancelar aulas. Quanto mais cedo o Team Leader for envolvido, mais alternativas a operação tem — e a família recebe a notícia amparada por um plano B estruturado, não por um aviso desesperado em cima da hora.'},
   {type:'sort', prompt:'Conduta adequada ou Quebra de limite?', card:'Após a aula, como forma de criar vínculo, você convida dois alunos da turma para jogar uma partida de Roblox juntos.', zones:[{label:'✅ Conduta adequada', fb:'Incorreto. A interação privada pós-aula, mesmo dentro de um ambiente de jogo, fere as políticas de segurança infantil e os protocolos de comunicação da empresa.'},{label:'🚫 Quebra de limite profissional', fb:'Correto! Fora do horário de aula, todo contato deve ser restrito aos responsáveis e utilizando os canais oficiais da empresa. Jamais estabeleça vínculos particulares em fóruns ou jogos online com seus alunos.'}], correctZone:1},
   {type:'choice', prompt:'Você foi alocado para assumir uma turma que vinha sendo acompanhada por outro tutor. O que é fundamental fazer antes da sua primeira aula com eles?', opts:['Recomeçar o curso desde a aula 1 para nivelar a turma com a sua didática.','Agir normalmente e não dar explicações — crianças se adaptam rápido a trocas.','Estudar os históricos no BO, analisar o progresso técnico da turma, planejar uma apresentação acolhedora e manter as regras e rotinas que os alunos já estão acostumados.'], correct:2, fb:'A troca de tutores só é bem-sucedida se houver continuidade. Honre o histórico da turma, apresente-se com empatia e preserve o terreno seguro que eles já conhecem.'}
  ]
 }
},
{id:'checklist', numLabel:'Checklist final', emoji:'✅', color:'var(--coral)',
 title:'Checklist final',
 desc:'Sem quiz aqui — apenas o essencial deste minitreinamento, antes de você encerrar.',
 obj:'Revise o checklist abaixo. Este módulo não vale nota — leia e conclua o minitreinamento.',
 sections:[
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   ${numlist([
     'Deixei um comentário no BO no mesmo dia em que soube do pedido e avisei meu Team Leader',
     'Minha próxima aula com esse aluno foi uma tentativa real de reverter a situação — um momento de protagonismo de verdade, uma conquista visível, atenção específica, nenhuma menção ao pedido',
     'Nunca confirmei aprovação nem discuti valores. Usei a única frase segura e deixei o resto com o Client Service'
   ])}
  `},  {t:'🌱 Em toda aula', html:`
   ${numlist([
     'Sigo a mesma estrutura de aula todas as vezes, para que os alunos conheçam o ritmo e gastem sua energia aprendendo',
     'Abro com as quatro fases: um Aquecimento, uma revisão da aula anterior com as palavras do próprio aluno, uma Verificação da lição de casa de verdade e um Objetivo da aula dito com clareza',
     'Na Teoria e Prática, ensino em blocos pequenos, demonstro primeiro na minha tela e protejo o tempo de prática',
     'Encerro com as fases espelhadas: um Resumo da aula com as palavras do aluno, instruções claras da lição de casa, uma Prévia da próxima aula e um Encerramento que celebra o que ele criou',
     'Leio minhas avaliações de qualidade fase por fase e corrijo a fase que está falhando já na minha próxima aula',
     'Estudo o manual e os materiais no dia anterior — não trinta minutos antes — e conheço o objetivo da aula, não só os passos',
     'Abro o manual e a apresentação pelo BO e confiro se o ID do curso é o mesmo em que meus alunos estão matriculados',
     'Quando encontro uma lacuna, pergunto no canal de Slack do meu curso, ao meu Mentor Regional ou ao meu Team Leader — e relato erros de conteúdo com o ícone 🐞 no BO',
     'Quando minha primeira explicação não funciona, mudo a abordagem — outro ângulo, uma demonstração, um bloco menor — em vez de repeti-la',
     'Conheço meus alunos e construo um espaço seguro onde os erros não são julgados',
     'Dou feedback específico e construtivo: o que funcionou e o que tentar a seguir — nunca apenas “bom trabalho”',
     'Mando mensagens para as famílias também com boas notícias, não só quando algo dá errado',
     'Dou apenas uma instrução por vez e faço checagens ativas como “mostre a tela para mim” ou “qual é o próximo passo?”. Compreendo que silêncio não significa aprendizado.',
     'Adapto minha fala e o ritmo à faixa etária: passos curtíssimos e recursos visuais para os mais novos; analogias palpáveis para todos.',
     'Controlo meu estresse: troco frases impacientes (como “eu já expliquei”) por abordagens construtivas, e dou suporte igualitário a todos da turma.',
     'Logado e preparado com 15 minutos de antecedência. Início pontual. Entrega da aula inteira, sem pausas alheias e sem terminar antes do relógio.',
     'Em caso de ausência por força maior, aciono meu Team Leader no mesmo instante. Jamais cancelo aulas, remarco horários ou prometo reposições por fora.',
     'Ao assumir uma turma em andamento, estudo o histórico no BO, faço uma transição acolhedora e dou continuidade à rotina daquele grupo.',
     'Protejo a escola, o aluno e a mim mesmo: uso exclusivamente os canais oficiais, proíbo interações privadas com alunos, mantenho foco total durante a aula e respeito estritamente as decisões sobre câmera e privacidade.'
   ])}
  `},  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Esse é todo o minitreinamento.</strong> Quando estiver pronto, continue — depois conclua o DST no LMS para encerrar a tarefa.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
