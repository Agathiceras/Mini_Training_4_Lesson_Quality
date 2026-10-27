/* Mini_Training_4_Lesson_Quality - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='en';
const CONTENT = {
  flag:'🇬🇧', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Lesson Quality — Kodland Tutor Training",
    logoSub:'Tutor Development Department',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"An Honest Look at <span class=\"h-pill\">Lesson Quality</span>",
    heroIntro:"You have received this training because you have students who have requested a refund due to issues with the quality of the class. Here, we'll show you what you can do as a tutor and how to handle these situations.",
    heroWork:"Work through 5 short modules. Each module check needs 70%+ to unlock the next. About 25–30 minutes total.",
    startBtn:"🚀 Start Training",
    pathLabel:'Your learning path',
    devTitle:'Dev: unlock all modules for review',
    backToPath:'Back to path',
    modulesPassed:'{done} / {total} modules passed',
    moduleN:'Module {n}',
    of:'of',
    locked:'🔒 Locked',
    passedBadge:'✅ Passed · {pct}%',
    reviewedBadge:'✅ Reviewed',
    startBadge:'▶ Start',
    reviewBadge:'▶ Review',
    objective:'Objective',
    startCheck:'▶ Start the module check',
    finishBtn:'▶ Finish the mini-training',
    doneBack:'✓ Done — back to path',
    ixBadge:'📋 Module check — 70% to unlock the next module',
    ixItemBadge:'📋 Module check — item {i} of {n}',
    scoreSoFar:'Score so far: {c} / {t}',
    continue:'Continue →',
    sortWrong:'Not quite — the right answer is "{label}".',
    resPassed:'Module passed!',
    resFailed:'Not quite there yet',
    resUnlocked:"You've unlocked the next module.",
    resDone:"You've completed this mini-training.",
    resNeed:'You need 70% to unlock the next module. Review the section above and try the check again.',
    resContinue:'Continue to learning path',
    resFinish:'Continue',
    resBack:'Back to path',
    resReview:'Review this module',
    doneEyebrow:'Mini-Training Complete',
    doneTitle:'🎉 Congratulations!',
    doneP1:"🎉 <strong>Congratulations! You've completed this mini-training.</strong>",
    doneP2:"You're all done here! Please return to the LMS training page where you accessed this mini-training to close out the assignment.",
    doneP3:"👉 <strong>If a check or assessment is listed directly below the training in the LMS, make sure to complete it and achieve a passing score</strong> — otherwise the assignment may remain incomplete.",
    doneP4:'Good luck! ❤️',
    doneP5:'',
    devUnlockAlert:'Dev mode: all modules are now unlocked for review.',
    devOn:'🔓 Dev mode ON — all modules unlocked',
    devOff:'🔒 Dev mode OFF — progress cleared',
    devBadge:'🔓 DEV MODE',
    doLabel:'✅ Do',
    avoidLabel:'🚫 Avoid',
    noticeLabel:'Notice:',
    cvSee:'What you see:',
    cvDo:'What you do:',
    dtExample:'Example from a real class',
    dtNext:'Next:',
    dtDone:"✅ That's all four areas. Next, classify what you see.",
    tlVideoTitle:'{label} — a real class example',
    tlVideoMeta:'Watch how this phase looks in a real lesson'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduction', emoji:'🧩', color:'var(--coral)',
 title:'Why You\'re Here',
 desc:'Why this reason deserves an honest, specific self-review — and the rules that apply once a refund request has already come in.',
 obj:'Understand that this reason is about the lesson itself, why asking for help early is exactly the right move, and exactly what to do (and not do) once a refund request already exists.',
 sections:[
  {t:'🪞 The one that\'s hardest to hear', html:`
   <div class="card"><p>This reason means a family felt the <strong>lesson quality itself</strong> was the problem — not the child, not the level, not the schedule. That's harder to hear than most of the others, and it's tempting to get defensive or explain it away.</p></div>
   ${co('co-idea','💡',`<p><strong>This is not a verdict on you as a person.</strong> It's a signal about specific, fixable behaviour in specific lessons. Tutors who take it seriously and specifically — rather than personally — turn it around fastest.</p>`)}
   ${co('co-star','🎓',`<p><strong>Get outside eyes on your teaching early.</strong> Your Regional Mentor is there exactly for this — asking for feedback on how you teach is the right move, not a sign that something is wrong with you.</p>`)}
  `},
  {t:'🛟 If a refund request already exists', html:`
   <div class="card"><p>Everything above is about catching this early. But you may be opening this training because a family has <strong>already</strong> asked for a refund. The rules below apply no matter the reason — read them first, then use the rest of this training to understand what led here and what you can still do in the lesson.</p></div>
   ${co('co-idea','💡',`<p><strong>The request itself is created by Client Service, not by you</strong> — that part isn't yours to control. What's still yours is everything that happens in the lesson from here, and that's not nothing.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Say nothing about the request itself</strong> — not to the child, not to the family — unless Client Service explicitly asks you to say something specific. Your job now is the lesson, not the conversation.</p>`)}
  `},
  {t:'🎯 Your next lesson is the save attempt', html:`
   <div class="card"><p>You may not get a chance to change anything else. Treat the very next lesson with this child as the moment that decides it.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Give them a real turn.</strong> Not a meaningless question — a genuine moment where they're seen and they succeed.`},
     {ic:'🏆', html:`<strong>Build in an early, visible win.</strong> They should leave the lesson feeling capable, not behind.`},
     {ic:'👀', html:`<strong>Specific attention</strong> — make them feel noticed for something concrete, not generically praised.`},
     {ic:'🤐', html:`<strong>No mention of the request</strong> — even if the child brings it up, redirect warmly and keep teaching.`}
   ])}
  `},
  {t:'📮 Notify fast, and know the one safe line', html:`
   <div class="card"><p>You can find out a request exists through Client Service's comments on the child's profile in BO — there's no automatic system that notifies you. Once you know, what you've seen in your lessons is information Client Service doesn't have any other way.</p></div>
   ${numlist([
     'Leave a comment in BO the same day with exactly what you\'ve seen — dates and specifics, not impressions',
     'Include the family\'s own words, verbatim, if you have them',
     'Loop in your Team Leader the same day',
     'Never confirm that a refund has been approved, or discuss any amount'
   ])}
   ${co('co-ok','✅',`<p><strong>The message that's always safe to say:</strong> <em>"Customer Service will help you with this."</em> That's where your part of the conversation ends — Client Service takes it from there.</p>`)}
  `},
  {t:'🌱 Keep it up afterward', html:`
   <div class="card"><p>Whether the request is withdrawn, the child stays in your group, or moves to another tutor or format, keep giving extra care for the next few lessons. A save that holds for one lesson and then quietly goes back to normal often doesn't hold at all.</p></div>
  `}
 ]
},
{id:'structure', numLabel:'Module 1', emoji:'🧭', color:'var(--coral)',
 title:'Lesson Structure',
 desc:'The nine-phase mirror structure that makes a lesson feel complete, with real class examples, and how to read your own quality evaluations.',
 obj:'Understand why a consistent lesson structure is one of the strongest levers for lesson quality, learn the nine phases, and know how to read your quality evaluations to see exactly where you\'re losing the room.',
 sections:[
  {t:'🧭 Consistency is the point', html:`
   <div class="card"><p>Once a student learns your rhythm, they stop spending energy figuring out "what happens now?" and spend it on learning instead. Run the same structure every time until it's second nature — for you and for them.</p></div>
  `},
  {t:'🌅 The beginning: four phases', html:`
   ${timeline([
     {ic:'👋', label:'1 · Warm-Up', items:['A quick question or tiny challenge that shifts the student into "lesson mode" — and a community-building moment.'], video:'https://drive.google.com/file/d/1fMWyd6bfCcUauqIIaNldojVuHYg6J9JR/preview'},
     {ic:'📖', label:'2 · Previous Lesson Revision', items:['Briefly revisit what was learned last time, in the student\'s own words. "I remember this" builds real confidence.'], video:'https://drive.google.com/file/d/1J1jijTw8bj8l9yw9aMNXp9zHwxEbkWbY/preview'},
     {ic:'📋', label:'3 · HW Check', items:['Go through the homework together — catch misunderstandings, praise effort, show the work is genuinely seen.'], video:'https://drive.google.com/file/d/1H2Awetu6fkoatv2RMonUeBawgK7tsR3e/preview'},
     {ic:'🎯', label:'4 · Lesson Goal', items:['State plainly what today is about. A student who doesn\'t know what today is "for" disengages quickly.'], video:'https://drive.google.com/file/d/1cuqULcb1jxkwV_uepi-dnxFdx3FB41Si/preview'}
   ])}
  `},
  {t:'🎨 The middle: theory & practice', html:`
   <div class="card"><p>The longest stage, where new material is taught and immediately used. Keep theory in small chunks — one concept, then hands-on work with it — and <strong>model first</strong>: demonstrate on your screen before students try it on theirs. Protect the practice time fiercely; a lesson where kids only watched you work is a lesson where nobody actually practised.</p></div>
  `},
  {t:'🏁 The end: the mirror', html:`
   <div class="card"><p>The closing four phases echo the opening ones in reverse — the lesson ends the way it began, giving a sense of closure and rhythm.</p></div>
   ${timeline([
     {ic:'📋', label:'1 · Lesson Summary', items:['Recap what was covered, but let the student summarise it too — their own words reveal what actually landed.'], video:'https://drive.google.com/file/d/1jNZGDMnRYh83xGd2NVHrZTdgXLagi2GZ/preview'},
     {ic:'📖', label:'2 · HW Assignment', items:['Crystal-clear instructions on what to do and how. Vague homework is homework that won\'t get done.'], video:'https://drive.google.com/file/d/1qOYvENqjiYlwRaFvDb0A7W6JYgWPCjJc/preview'},
     {ic:'▶️', label:'3 · Next Lesson Preview', items:['Tease what\'s coming next — keeps the student emotionally invested, not just following a task list.'], video:'https://drive.google.com/file/d/17bE6JdZmDFJ_igrWYhc7fnpD39b-k-2K/preview'},
     {ic:'✨', label:'4 · Wrap-Up', items:['End on a high: celebrate what the student created. The last 30 seconds are what they weigh when deciding whether to show up next time.'], video:'https://drive.google.com/file/d/1OTYSh07wSosjgsHFD05YvccD3NY2CgsX/preview'}
   ])}
  `},
  {t:'📊 Reading your quality evaluations', html:`
   <div class="card"><p>Your quality evaluations map directly onto these phases — they exist to show you exactly where in the structure something is slipping: a missed warm-up, a goal never stated, practice time that got cut short, a wrap-up that never happened.</p></div>
   ${co('co-idea','💡',`<p><strong>Read them phase by phase, not as one overall score.</strong> A low score with no context tells you little; a low score against "Lesson Goal" or "Wrap-Up" tells you exactly what to change in your very next lesson.</p>`)}
  `}
 ],
 ix:{
  title:'Lesson Structure — module check',
  instr:'Five quick rounds: place each phase in the lesson, and guess which phase is being described. 70% to unlock the next module.',
  items:[
   {type:'sort', prompt:'Where does this phase belong?', card:'▶️ Next Lesson Preview', zones:[{label:'🌅 One of the 4 opening phases', fb:'Not quite — Next Lesson Preview is part of the mirrored closing block, not the opening.'},{label:'🏁 One of the 4 closing phases', fb:'Correct — it\'s the third of the four closing phases, right before the Wrap-Up.'}], correctZone:1},
   {type:'sort', prompt:'Which phase is being described?', card:'"This moment tells the student what today is for. Without it, they can\'t tell what they\'re working towards — and they disengage quickly."', zones:[{label:'👋 Warm-Up', fb:'Not quite — the Warm-Up shifts students into lesson mode, but it doesn\'t say what today is for. That\'s the Lesson Goal.'},{label:'🎯 Lesson Goal', fb:'Correct — stating the Lesson Goal plainly gives the whole lesson a direction students can follow.'},{label:'📋 Lesson Summary', fb:'Not quite — the Summary looks back at what was covered. Saying what today is for happens at the start: the Lesson Goal.'},{label:'✨ Wrap-Up', fb:'Not quite — the Wrap-Up closes the lesson. Knowing what today is for happens at the start: the Lesson Goal.'}], correctZone:1},
   {type:'sort', prompt:'Where does this phase belong?', card:'📖 Previous Lesson Revision', zones:[{label:'🌅 One of the 4 opening phases', fb:'Correct — it\'s the second of the four opening phases, right after the Warm-Up.'},{label:'🏁 One of the 4 closing phases', fb:'Not quite — Previous Lesson Revision opens the lesson, it doesn\'t close it.'}], correctZone:0},
   {type:'sort', prompt:'Which phase is being described?', card:'"Letting the student put what they learned today into their own words reveals what actually landed — and what needs reinforcing next time."', zones:[{label:'📖 Previous Lesson Revision', fb:'Close — but that phase revisits the <em>last</em> lesson. Putting <em>today\'s</em> learning into their own words is the Lesson Summary.'},{label:'📋 HW Check', fb:'Not quite — the HW Check reviews homework. This is the Lesson Summary.'},{label:'▶️ Next Lesson Preview', fb:'Not quite — the Preview looks forward. Recapping today in their own words is the Lesson Summary.'},{label:'📋 Lesson Summary', fb:'Correct — the Lesson Summary lets you check what actually landed, in the student\'s own words.'}], correctZone:3},
   {type:'sort', prompt:'Which phase is being described?', card:'"The last 30 seconds are what the student weighs when deciding whether to show up next time — so end by celebrating what they created."', zones:[{label:'✨ Wrap-Up', fb:'Correct — the Wrap-Up ends the lesson on a high, and that feeling is what brings the student back.'},{label:'📖 HW Assignment', fb:'Not quite — the HW Assignment is about clear instructions. Ending on a high is the Wrap-Up.'},{label:'🎯 Lesson Goal', fb:'Not quite — the Lesson Goal happens at the start. This is the Wrap-Up.'},{label:'👋 Warm-Up', fb:'Not quite — the Warm-Up opens the lesson. The last 30 seconds belong to the Wrap-Up.'}], correctZone:0}
  ]
 }
},
{id:'prep', numLabel:'Module 2', emoji:'📚', color:'var(--coral)',
 title:'Preparation Time',
 desc:'Why studying the manual the day before, not thirty minutes before, is what actually protects a lesson\'s quality — and where to find it in BO.',
 obj:'Prepare for a lesson with enough time to catch gaps before it starts, find the right material in BackOffice, and know exactly where to get help or report a content problem.',
 sections:[
  {t:'⏳ Not thirty minutes before', html:`
   <div class="card"><p>Preparation done half an hour — or ten minutes — before class doesn't leave room to actually learn something you don't already know. If there's a concept, a piece of code, or a tool you're not confident with, you'll be learning it live, in front of the student.</p></div>
   ${co('co-idea','💡',`<p><strong>Study the manual and materials the day before.</strong> That gives you time to notice a gap in your own knowledge, a bug in the material, or an activity you don't fully understand — and to actually do something about it before the lesson.</p>`)}
  `},
  {t:'🎯 Know the objective, not just the steps', html:`
   <div class="card"><p>Understand clearly what today's lesson is actually meant to achieve — not just the sequence of steps in the manual. When you know the objective, you can adapt the path to it if something goes differently than planned, without losing the point of the lesson.</p></div>
   <img class="mt-pic" src="Pictures_T4/goals.png" alt="Example manual page showing the lesson objectives and educational outcomes">
  `},
  {t:'🆘 When you find a gap', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>Use your course's Slack channel.</strong> Other tutors have almost certainly hit the same bug or the same confusing step.`},
     {ic:'🎓', html:`<strong>Ask your Regional Mentor</strong> if it's about how to teach or explain something specific.`},
     {ic:'👩‍💼', html:`<strong>Ask your Team Leader</strong> if it's about the course itself, materials, or something that needs fixing upstream.`}
   ])}
   ${co('co-star','⭐',`<p>Finding a gap the day before and asking for help is exactly the system working as intended. Finding it live, in the lesson, is the thing preparation time is meant to prevent.</p>`)}
  `},
  {t:'🗂️ Finding your course material in BO', html:`
   <div class="card"><p>The lesson manual and presentation live inside BackOffice (BO), attached to the exact course record you're teaching from — not on an old wiki page that might be outdated. The simulation below walks you, step by step, through where to find them, and where to report it if something in the content itself is wrong.</p></div>
   ${co('co-danger','🚨',`<p><strong>Always check that the course ID you open matches the one your students are enrolled in.</strong> Similar-looking courses exist side by side in BO — teaching from the wrong one, even a different version of the same course, can turn a lesson chaotic in seconds.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Course material &amp; content errors</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Course material and content errors" loading="lazy"></iframe></div></div>
  `}
 ],
 ix:{
  title:'Preparation Time — module check',
  instr:'70% to unlock the next module.',
  items:[
   {type:'choice', prompt:'When should you study the manual and materials for a lesson?', opts:['The day before, so there\'s time to fix any gap you find','Right before class, so it\'s fresh in your mind','Only when it\'s a lesson you haven\'t taught before'], correct:0, fb:'The day before gives you time to actually address anything you find — a gap, a bug, an activity you don\'t fully understand.'},
   {type:'choice', prompt:'You find a piece of code in the manual that isn\'t working. What do you do?', opts:['Skip that part of the lesson and hope nobody notices','Work it out live during the lesson with the students','Ask in your course\'s Slack channel, your mentor or your Team Leader — and report it with the 🐞 icon in BO'], correct:2, fb:'These channels exist precisely so you don\'t have to solve it live, alone — and reporting it gets it fixed for every group after yours.'},
   {type:'choice', prompt:'Before opening the lesson manual in BO, what should you check?', opts:['That the lesson has a presentation attached','That the course ID matches the one your students are enrolled in','That the manual was updated this month'], correct:1, fb:'Similar courses exist side by side in BO. Teaching from the wrong course ID is one of the fastest ways to a chaotic lesson.'},
   {type:'choice', prompt:'Why is knowing the lesson\'s objective more useful than just knowing the steps?', opts:['It lets you adapt the path if something goes differently, without losing the point','It means you can skip parts of the manual you find less useful','It helps you finish the lesson faster'], correct:0, fb:'Knowing the "why" lets you flex the "how" without losing what the lesson was for.'}
  ]
 }
},
{id:'soft', numLabel:'Module 3', emoji:'🤝', color:'var(--coral)',
 title:'Soft Skills',
 desc:'The habits beyond subject mastery that actually make a lesson feel good to be in.',
 obj:'Apply the soft skills that turn subject knowledge into a genuinely good lesson: cognitive flexibility, knowing your students, safety to make mistakes, motivation, and specific feedback.',
 sections:[
  {t:'🤝 It\'s not only about knowing the material', html:`
   <div class="card"><p>Mastering the subject is necessary, but it isn't what makes a lesson feel good to be in. That comes from a set of habits that have nothing to do with technical knowledge.</p></div>
   ${iconGrid([
     {ic:'🔄', html:`<strong>Cognitive flexibility.</strong> Adjusting your explanation, pace or approach when the first one isn't landing, instead of repeating it louder.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Knowing your students.</strong> Their interests, what motivates them — it's what makes examples land and turns a generic lesson into one that feels personal.`},
     {ic:'🛡️', html:`<strong>A safe environment for mistakes.</strong> Students take risks and actually learn when they know a wrong answer won't be met with judgment.`},
     {ic:'🔥', html:`<strong>Visible passion.</strong> If they see genuine interest from you, they get more motivated to engage — this is not fakeable, but it is noticeable when it's missing.`}
   ])}
  `},
  {t:'💬 Feedback that\'s constructive, not generic', html:`
   <div class="card"><p>"Good job" tells a student nothing to repeat or build on. Constructive feedback is <strong>specific</strong>, and points in a direction: what's working, and what to improve or explore next.</p></div>
   ${doavoid(
     ['"You got the loop working on your own — nice, that\'s exactly the logic we needed"', '"This part is strong; try applying the same idea to the next section"', '"I noticed you fixed that bug yourself — what was your thinking there?"'],
     ['"Good job!" with no reference to what was actually done', '"That\'s wrong" with no direction on what to try instead', 'Feedback that would apply equally to any student\'s work']
   )}
  `},
  {t:'💌 Showing interest beyond the bad news', html:`
   <div class="card"><p>A parent who only hears from you when something's wrong starts to associate your messages with problems. Send a message to celebrate something good too — not only to flag concerns.</p></div>
   ${co('co-star','⭐',`<p>This one habit — writing once, unprompted, about something the student did well — changes how a family reads everything you send afterward.</p>`)}
  `}
 ],
 ix:{
  title:'Soft Skills — module check',
  instr:'70% to unlock the final checklist.',
  items:[
   {type:'choice', prompt:'A student doesn\'t follow your first explanation. What does cognitive flexibility look like here?', opts:['Repeating the same explanation, more slowly','Moving on and coming back to it at the end of the lesson','Changing the approach — a different angle, a demonstration, a smaller chunk'], correct:2, fb:'Flexibility means changing the approach, not just repeating it.'},
   {type:'sort', prompt:'Treasure or trash? Is this constructive feedback?', card:'"You got the loop working on your own — try applying that same idea to the next section."', zones:[{label:'💎 Treasure — constructive', fb:'Correct — it\'s specific about what worked and points to a next step.'},{label:'🗑️ Trash — generic', fb:'Not quite — this one names exactly what the student did and what to try next. That\'s constructive.'}], correctZone:0},
   {type:'sort', prompt:'Treasure or trash? Is this constructive feedback?', card:'"Good job today, everyone!"', zones:[{label:'💎 Treasure — constructive', fb:'Not quite — it\'s friendly, but it tells no one what to repeat or build on.'},{label:'🗑️ Trash — generic', fb:'Correct — friendly, but it would apply to anyone. Name what was actually done well.'}], correctZone:1},
   {type:'choice', prompt:'Why message a parent about something good, not only about problems?', opts:['Parents expect it as a formality','It changes how the family reads everything you send afterward','It\'s only needed when the student\'s grades are low'], correct:1, fb:'Positive, unprompted messages build the trust that makes harder conversations easier later.'}
  ]
 }
},
{id:'checklist', numLabel:'Final Checklist', emoji:'✅', color:'var(--coral)',
 title:'Final Checklist',
 desc:'No quiz here — just the essentials from this mini-training, before you close it out.',
 obj:'Review the checklist below. This module is ungraded — read it, then finish the mini-training.',
 sections:[
  {t:'🛟 If a refund request already exists', html:`
   ${numlist([
     'I left a comment in BO the same day I learned of the request, and looped in my Team Leader',
     'My next lesson with this student was a real save attempt — a real turn, a visible win, specific attention, no mention of the request',
     'I never confirmed approval or discussed an amount — I used the one safe line and left the rest to Client Service'
   ])}
  `},  {t:'🌱 In every lesson', html:`
   ${numlist([
     'I run the same lesson structure every time, so students know the rhythm and spend their energy on learning',
     'I open with the four phases: a Warm-Up, a revision of the previous lesson in the student\'s own words, a real HW Check, and a clearly stated Lesson Goal',
     'In Theory &amp; Practice, I teach in small chunks, model first on my screen, and protect the practice time',
     'I close with the mirror phases: a Lesson Summary in the student\'s own words, clear HW instructions, a Next Lesson Preview, and a Wrap-Up that celebrates what they created',
     'I read my quality evaluations phase by phase, and fix the phase that\'s slipping in my very next lesson',
     'I study the manual and materials the day before — not thirty minutes before — and I know the lesson\'s objective, not just the steps',
     'I open the manual and presentation from BO, and check the course ID matches the one my students are enrolled in',
     'When I find a gap, I ask in my course\'s Slack channel, my Regional Mentor or my Team Leader — and I report content errors with the 🐞 icon in BO',
     'When my first explanation doesn\'t land, I change the approach — a different angle, a demonstration, a smaller chunk — instead of repeating it',
     'I get to know my students and build a safe space where mistakes aren\'t judged',
     'I give specific, constructive feedback: what worked, and what to try next — never just "good job"',
     'I message families about good news too, not only when something goes wrong'
   ])}
  `},  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>That's the whole mini-training.</strong> When you're ready, continue — then complete the DST in the LMS to close out the assignment.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
