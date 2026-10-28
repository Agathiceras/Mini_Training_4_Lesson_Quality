/* Mini_Training_4_Lesson_Quality - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    pageTitle:"Minitreinamento · Qualidade da Aula — Treinamento de Tutores Kodland",
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:"🎯 Minitreinamento",
    heroTitle:"Um olhar honesto sobre a <span class=\"h-pill\">Qualidade da Aula</span>",
    heroIntro:"Você recebeu este treinamento porque tem alunos que pediram reembolso por problemas na qualidade da aula. Aqui, vamos mostrar o que você pode fazer como tutor e como lidar com essas situações.",
    heroWork:"Complete 5 módulos curtos. Cada verificação de módulo exige 70% ou mais para liberar o próximo. Cerca de 25 a 30 minutos no total.",
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
    resNeed:'Você precisa de 70% para liberar o próximo módulo. Revise a seção acima e tente a verificação de novo.',
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
   ${co('co-idea','💡',`<p><strong>O pedido em si é criado pelo Atendimento ao Cliente, não por você</strong> — essa parte não está nas suas mãos. O que continua sendo seu é tudo o que acontece na aula daqui em diante, e isso não é pouco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Não diga nada sobre o pedido em si</strong> — nem para a criança, nem para a família — a menos que o Atendimento ao Cliente peça explicitamente que você diga algo específico. Seu trabalho agora é a aula, não a conversa.</p>`)}
  `},
  {t:'🎯 Sua próxima aula é a tentativa de reverter', html:`
   <div class="card"><p>Talvez você não tenha chance de mudar mais nada. Trate a próxima aula com essa criança como o momento que decide tudo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dê a ela um momento de protagonismo de verdade.</strong> Não uma pergunta sem sentido — um momento genuíno em que ela é vista e tem sucesso.`},
     {ic:'🏆', html:`<strong>Garanta uma conquista cedo e bem visível.</strong> Ela deve sair da aula se sentindo capaz, não para trás.`},
     {ic:'👀', html:`<strong>Atenção específica</strong> — faça com que ela se sinta notada por algo concreto, não elogiada de forma genérica.`},
     {ic:'🤐', html:`<strong>Nenhuma menção ao pedido</strong> — mesmo que a criança toque no assunto, redirecione com carinho e continue ensinando.`}
   ])}
  `},
  {t:'📮 Avise rápido e conheça a única frase segura', html:`
   <div class="card"><p>Você pode descobrir que existe um pedido pelos comentários do Atendimento ao Cliente no perfil da criança no BO — não há nenhum sistema automático que avise você. Quando você souber, o que você viu nas suas aulas é uma informação que o Atendimento ao Cliente não tem de nenhuma outra forma.</p></div>
   ${numlist([
     'Deixe um comentário no BO no mesmo dia com exatamente o que você viu — datas e detalhes específicos, não impressões',
     'Inclua as palavras da própria família, literalmente, se você as tiver',
     'Avise seu Team Leader no mesmo dia',
     'Nunca confirme que um reembolso foi aprovado nem discuta qualquer valor'
   ])}
   ${co('co-ok','✅',`<p><strong>A mensagem que é sempre seguro dizer:</strong> <em>“O Atendimento ao Cliente vai ajudar vocês com isso.”</em> Aí termina a sua parte da conversa — o Atendimento ao Cliente assume a partir daí.</p>`)}
  `},
  {t:'🌱 Mantenha o cuidado depois', html:`
   <div class="card"><p>Se o pedido for retirado, se a criança continuar no seu grupo ou passar para outro tutor ou formato, continue dedicando atenção extra nas próximas aulas. Uma reversão que se sustenta por uma aula e depois volta discretamente ao normal muitas vezes não se sustenta de forma alguma.</p></div>
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
   <div class="card"><p>As quatro fases finais ecoam as iniciais na ordem inversa — a aula termina como começou, trazendo sensação de fechamento e de ritmo.</p></div>
   ${timeline([
     {ic:'📋', label:'1 · Resumo da aula', items:['Recapitule o que foi visto, mas deixe o aluno resumir também — as palavras dele revelam o que realmente ficou.'], video:'https://drive.google.com/file/d/1jNZGDMnRYh83xGd2NVHrZTdgXLagi2GZ/preview'},
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
  instr:'Cinco rodadas rápidas: coloque cada fase no lugar certo da aula e adivinhe qual fase está sendo descrita. 70% para liberar o próximo módulo.',
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
   <div class="card"><p>O manual da aula e a apresentação ficam dentro do BackOffice (BO), anexados ao registro exato do curso a partir do qual você leciona — não em uma página de wiki antiga que pode estar desatualizada. A simulação abaixo mostra, passo a passo, onde encontrá-los e onde relatar caso algo no próprio conteúdo esteja errado.</p></div>
   ${co('co-danger','🚨',`<p><strong>Sempre confira se o ID do curso que você abre é o mesmo em que seus alunos estão matriculados.</strong> Cursos de aparência parecida existem lado a lado no BO — dar aula com o curso errado, mesmo uma versão diferente do mesmo curso, pode transformar uma aula em caos em segundos.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Material do curso &amp; erros de conteúdo</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Material do curso e erros de conteúdo" loading="lazy"></iframe></div></div>
  `}
 ],
 ix:{
  title:'Tempo de preparação — verificação do módulo',
  instr:'70% para liberar o próximo módulo.',
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
 desc:'Os hábitos, além do domínio do conteúdo, que realmente tornam uma aula agradável de viver.',
 obj:'Aplicar as habilidades interpessoais que transformam o conhecimento do conteúdo em uma aula realmente boa: flexibilidade cognitiva, conhecer seus alunos, segurança para errar, motivação e feedback específico.',
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
  {t:'💌 Demonstrando interesse além das más notícias', html:`
   <div class="card"><p>Um responsável que só recebe notícias suas quando algo vai mal passa a associar suas mensagens a problemas. Envie também uma mensagem para celebrar algo bom — não apenas para sinalizar preocupações.</p></div>
   ${co('co-star','⭐',`<p>Este único hábito — escrever uma vez, espontaneamente, sobre algo que o aluno fez bem — muda a forma como a família lê tudo o que você envia depois.</p>`)}
  `}
 ],
 ix:{
  title:'Habilidades interpessoais — verificação do módulo',
  instr:'70% para liberar o checklist final.',
  items:[
   {type:'choice', prompt:'Um aluno não acompanha a sua primeira explicação. Como é a flexibilidade cognitiva nesse caso?', opts:['Repetir a mesma explicação, mais devagar','Seguir em frente e voltar a isso no fim da aula','Mudar a abordagem — outro ângulo, uma demonstração, um bloco menor'], correct:2, fb:'Flexibilidade significa mudar a abordagem, e não só repeti-la.'},
   {type:'sort', prompt:'Tesouro ou lixo? Este é um feedback construtivo?', card:'“Você fez o loop funcionar sozinho — tente aplicar essa mesma ideia na próxima seção.”', zones:[{label:'💎 Tesouro — construtivo', fb:'Correto — é específico sobre o que funcionou e aponta um próximo passo.'},{label:'🗑️ Lixo — genérico', fb:'Não exatamente — este feedback diz exatamente o que o aluno fez e o que tentar a seguir. Isso é construtivo.'}], correctZone:0},
   {type:'sort', prompt:'Tesouro ou lixo? Este é um feedback construtivo?', card:'“Bom trabalho hoje, pessoal!”', zones:[{label:'💎 Tesouro — construtivo', fb:'Não exatamente — é simpático, mas não diz a ninguém o que repetir ou desenvolver.'},{label:'🗑️ Lixo — genérico', fb:'Correto — é simpático, mas serviria para qualquer um. Diga o que foi realmente bem feito.'}], correctZone:1},
   {type:'choice', prompt:'Por que mandar uma mensagem a um responsável sobre algo bom, e não só sobre problemas?', opts:['Os responsáveis esperam isso como formalidade','Muda a forma como a família lê tudo o que você envia depois','Só é necessário quando as notas do aluno estão baixas'], correct:1, fb:'Mensagens positivas e espontâneas constroem a confiança que facilita conversas mais difíceis depois.'}
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
     'Nunca confirmei aprovação nem discuti valores — usei a única frase segura e deixei o resto com o Atendimento ao Cliente'
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
     'Mando mensagens para as famílias também com boas notícias, não só quando algo dá errado'
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
