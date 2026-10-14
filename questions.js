/* ============================================
   Questions — All phases data & Costume ideas
   ============================================ */

const COSTUME_IDEAS = [
  {
    id: 'cervezas',
    title: 'El Six-Pack Cervecero',
    tag: '🍻 Grupal (4 a 6 personas)',
    phrase: 'Si nos vamos a emborrachar, ¡que sea en paquete cerrado y con la tapa puesta!',
    desc: 'Cada quien una botella de Corona y todos metidos en la misma caja gigante. Imposible perderse en la rumba.',
    image: 'assets/disfraces/disfraz1.jpg',
    badge: 'Popular',
  },
  {
    id: 'scooby',
    title: 'Misterio a la Orden (La Banda de Scooby)',
    tag: '🔍 Cuarteto / Mixto',
    phrase: 'Resolviendo misterios paranormales y asaltando la nevera a las 3:00 AM 🔎🐕',
    desc: 'Fred, Daphne, Vilma y Shaggy. Estilo 10/10, icónico y perfecto para las fotos en grupo.',
    image: 'assets/disfraces/disfraz2.jpg',
    badge: 'Clásico',
  },
  {
    id: 'conejitas_zanahorias',
    title: 'Combo Épico: Las Conejitas con su Alimento',
    tag: '🐰🥕 Match Grupal / El Más Cotizado',
    phrase: 'Las conejitas con su alimento 🐰🥕: Ellas imponen la elegancia y ellos ponen los nutrientes. ¡El match más saludable y sabroso de la fiesta!',
    desc: 'Ellas de Conejitas elegantes y ellos de Zanahorias Gigantes. El concepto más viral y cómico de Halloween.',
    isCombo: true,
    image1: 'assets/disfraces/disfraz3_conejita.jpg',
    image2: 'assets/disfraces/disfraz3_zanahoria.jpg',
    image1Label: '🐰 Las Conejitas',
    image2Label: '🥕 Las Zanahorias',
    roles: [
      { id: 'conejita', text: '🐰 Voy de Conejita elegante', val: 'Conejita elegante 🐰' },
      { id: 'zanahoria', text: '🥕 Voy de Suculenta Zanahoria', val: 'Suculenta Zanahoria 🥕' },
      { id: 'combo', text: '✨ Coordinamos todo el combo', val: 'Combo Conejitas + Zanahorias 🐰🥕' },
    ],
    badge: '🔥 El Favorito',
  },
  {
    id: 'powerrangers',
    title: 'Las Power Rangers (Mórfosis Rumbera)',
    tag: '⚡ Squad de Amigas (5 Colores)',
    phrase: 'Listas para salvar la noche, desatar el Megazord y encender la pista de baile 🦸‍♀️💥',
    desc: 'Bodysuits brillantes, lentes futuristas y botas blancas. Actitud imponente y coordinada.',
    image: 'assets/disfraces/disfraz4.jpg',
    badge: 'Empoderadas',
  },
  {
    id: 'pitufos',
    title: 'La Pitufi-Banda (Invasión Azul)',
    tag: '🍄 Grupo de Hombres / Pura Risa',
    phrase: 'Pintados de azul de pies a cabeza, barbudos y listos para pitufear sin control hasta el amanecer 🧙‍♂️💙',
    desc: 'Cuerpo azul, barba blanca y gorro rojo. Cero vergüenza y 100% risas garantizadas.',
    image: 'assets/disfraces/disfraz5.jpg',
    badge: 'Desmadre',
  },
  {
    id: 'santos_pecadores',
    title: 'Santos y Pecadores (El Aquelarre Celestial)',
    tag: '✝️ Mixto / Glam & Provocador',
    phrase: 'Perdónanos padre porque hoy venimos a pecar y no precisamente a rezar 😇🖤',
    desc: 'Cura con crucifijo dorado, monjas atrevidas y ángel celestial. El look más estético de la noche.',
    image: 'assets/disfraces/disfraz6.jpg',
    badge: 'Aesthetic',
  },
  {
    id: 'otra_idea',
    title: '💡 Mi Propia Idea Loca / Otra propuesta',
    tag: '✨ Personalizado',
    phrase: 'Tengo algo en mente que va a romper expectativas...',
    desc: 'Escribe tu idea de disfraz para proponerla al parche o someterla a votación.',
    isCustom: true,
    badge: 'Creativo',
  },
];

const QUESTIONS = {
  // PHASE 2: Paranormal Interrogation
  phase2: {
    es: [
      {
        id: 'nickname',
        emoji: '👻',
        title: '¿Cómo te llamas, criatura?',
        subtitle: 'Puede ser tu nombre real o tu alter ego de Halloween.',
        type: 'text',
        placeholder: 'Tu nombre o apodo…',
        required: true,
        storageKey: 'name',
      },
      {
        id: 'solo_group',
        emoji: '👥',
        title: '¿Vienes solo o acompañado?',
        subtitle: 'El fantasma necesita saber cuántas almas esperar.',
        type: 'options',
        options: [
          { id: 'solo', text: '🐺 Solo / Sola — lobo solitario', value: 'Solo' },
          { id: 'pareja', text: '💀 En pareja — terror romántico', value: 'En pareja' },
          { id: 'grupo', text: '👻 Con un grupo — el aquelarre', value: 'Con grupo' },
        ],
        storageKey: 'mode',
      },
      {
        id: 'has_costume',
        emoji: '🎭',
        title: '¿Ya tienes disfraz en mente?',
        subtitle: 'Sinceridad ante todo. No juzgamos. Bueno, un poco sí.',
        type: 'options',
        options: [
          { id: 'yes', text: '✅ Sí, ya tengo una idea clara', value: 'Ya tiene idea clara' },
          { id: 'ideas', text: '💡 Tengo ideas pero quiero ver las del parche', value: 'Quiere ver ideas' },
          { id: 'no', text: '🤷 No tengo ni idea, ayúdenme (Toy chiquito 🥺)', value: 'Necesita ideas urgentes', triggerPuppy: true },
          { id: 'last_minute', text: '⏰ Lo resolveré a última hora como siempre', value: 'Última hora' },
        ],
        storageKey: 'costume_status',
      },
      {
        id: 'terror_style',
        emoji: '🦇',
        title: '¿Qué estilo te va más en Halloween?',
        subtitle: 'Esto nos ayuda a entender tu espíritu fiestero.',
        type: 'options',
        options: [
          { id: 'funny', text: '😂 Humor y desmadre — disfraces épicos y ridículos', value: 'Humor y desmadre' },
          { id: 'terror', text: '🖤 Terror serio — sangre, oscuridad, misterio', value: 'Terror serio' },
          { id: 'creative', text: '✨ Creativo & Glam — algo llamativo y estético', value: 'Creativo y Glam' },
          { id: 'improvise', text: '🎲 Me adapto a lo que cuadremos en combo', value: 'En combo / Adaptable' },
        ],
        storageKey: 'style',
      },
    ],
    en: [
      {
        id: 'nickname',
        emoji: '👻',
        title: 'What\'s your name, creature?',
        subtitle: 'Can be your real name or your Halloween alter ego.',
        type: 'text',
        placeholder: 'Your name or nickname…',
        required: true,
        storageKey: 'name',
      },
      {
        id: 'solo_group',
        emoji: '👥',
        title: 'Coming alone or with company?',
        subtitle: 'The ghost needs to know how many souls to expect.',
        type: 'options',
        options: [
          { id: 'solo', text: '🐺 Solo — lone wolf', value: 'Solo' },
          { id: 'pareja', text: '💀 With a partner — romantic horror', value: 'With partner' },
          { id: 'grupo', text: '👻 With a group — the coven', value: 'With group' },
        ],
        storageKey: 'mode',
      },
      {
        id: 'has_costume',
        emoji: '🎭',
        title: 'Do you already have a costume?',
        subtitle: 'Be honest. We won\'t judge. Well, maybe a little.',
        type: 'options',
        options: [
          { id: 'yes', text: '✅ Yes, I have a clear idea', value: 'Has idea' },
          { id: 'ideas', text: '💡 I have ideas but want to see the group\'s', value: 'Wants ideas' },
          { id: 'no', text: '🤷 No clue, help me (I\'m tiny 🥺)', value: 'Needs help', triggerPuppy: true },
          { id: 'last_minute', text: '⏰ I\'ll do it last minute, as always', value: 'Last minute' },
        ],
        storageKey: 'costume_status',
      },
      {
        id: 'terror_style',
        emoji: '🦇',
        title: 'What\'s your Halloween style?',
        subtitle: 'This helps us understand your party spirit.',
        type: 'options',
        options: [
          { id: 'funny', text: '😂 Funny & crazy — hilarious costumes', value: 'Funny & crazy' },
          { id: 'terror', text: '🖤 Serious horror — blood, darkness, fear', value: 'Horror' },
          { id: 'creative', text: '✨ Creative & Glam — eye-catching', value: 'Creative & Glam' },
          { id: 'improvise', text: '🎲 Match the group theme', value: 'Group match' },
        ],
        storageKey: 'style',
      },
    ],
  },

  // PHASE 4: Night Plan & Specific Place Recommendation
  phase4: {
    es: [
      {
        id: 'place_recommendation',
        emoji: '📍',
        title: '¿Qué lugar recomiendas para ir? 🍻🎉',
        subtitle: 'Escribe tu bar, discoteca, casa o plan favorito. Tu sugerencia saldrá en el resumen para debatirla y votarla con el parche en WhatsApp.',
        type: 'place_input',
        placeholder: 'Ej: Theatron, la casa de Juan, una finca embrujada, bar en la 85...',
        quickTags: [
          '🏠 Casa de alguien (Plan rumbero)',
          '🪩 Discoteca / Bar temático',
          '🚌 Chiva Rumbera de Halloween',
          '🏚️ Finca embrujada',
          '🌮 Comer y tomar tranqui',
          '💃 Theatron / Zona Rosa',
        ],
        required: false,
        storageKey: 'place',
      },
      {
        id: 'availability',
        emoji: '🕐',
        title: '¿Cuánto tiempo tienes para la rumba?',
        subtitle: 'Para coordinar horarios de llegada y remate.',
        type: 'options',
        options: [
          { id: 'all_night', text: '🌙 Toda la noche — hasta que el sol nos eche', value: 'Toda la noche' },
          { id: 'few_hours', text: '⏰ Unas horas — llego temprano pero me cuido', value: 'Unas horas' },
          { id: 'flexible', text: '🤷 Flexible — depende del ambiente y las ganas', value: 'Flexible' },
        ],
        storageKey: 'availability',
      },
      {
        id: 'budget',
        emoji: '💰',
        title: '¿Cuánto quieres gastar aprox?',
        subtitle: 'Para buscar un plan donde nadie se quede por fuera.',
        type: 'options',
        options: [
          { id: 'low', text: '🪙 Poco — plan económico y rendidor', value: 'Económico' },
          { id: 'medium', text: '💵 Normal — rumba buena sin arruinarse', value: 'Normal' },
          { id: 'high', text: '💎 Sin límites — es Halloween, ¡se gasta lo que toque!', value: 'Sin límites' },
          { id: 'whatever', text: '🤷 Me adapto a lo que vote la mayoría', value: 'Lo que decida el grupo' },
        ],
        storageKey: 'budget',
      },
      {
        id: 'transport',
        emoji: '🚗',
        title: '¿Cómo te vas a mover / transporte?',
        subtitle: 'Para ver si armamos caravana o compartimos Uber.',
        type: 'options',
        options: [
          { id: 'own', text: '🚗 Tengo transporte propio / voy en carro', value: 'Transporte propio' },
          { id: 'need_ride', text: '🙋 Necesito aventón / me pego a un Uber', value: 'Necesita aventón' },
          { id: 'can_give', text: '🚐 Tengo cupos disponibles para llevar gente', value: 'Puede llevar gente' },
          { id: 'figure_out', text: '🤔 Lo cuadramos en el grupo de WhatsApp', value: 'Se cuadra en el grupo' },
        ],
        storageKey: 'transport',
      },
    ],
    en: [
      {
        id: 'place_recommendation',
        emoji: '📍',
        title: 'What place do you recommend going to? 🍻🎉',
        subtitle: 'Write your favorite bar, club, house or plan. Your proposal will appear in the summary to debate and vote on WhatsApp.',
        type: 'place_input',
        placeholder: 'E.g.: Theatron, someone\'s house, a haunted farm, club...',
        quickTags: [
          '🏠 House party',
          '🪩 Club / Themed bar',
          '🚌 Party bus',
          '🏚️ Haunted cottage',
          '🌮 Casual food & drinks',
          '💃 Downtown nightlife',
        ],
        required: false,
        storageKey: 'place',
      },
      {
        id: 'availability',
        emoji: '🕐',
        title: 'How much time do you have?',
        subtitle: 'To coordinate arrival and afterparty.',
        type: 'options',
        options: [
          { id: 'all_night', text: '🌙 All night — until sunrise', value: 'All night' },
          { id: 'few_hours', text: '⏰ A few hours — have an early curfew', value: 'A few hours' },
          { id: 'flexible', text: '🤷 Flexible — depends on the vibe', value: 'Flexible' },
        ],
        storageKey: 'availability',
      },
      {
        id: 'budget',
        emoji: '💰',
        title: 'Approximate budget?',
        subtitle: 'So we find a plan where nobody gets left out.',
        type: 'options',
        options: [
          { id: 'low', text: '🪙 Low — budget-friendly', value: 'Low' },
          { id: 'medium', text: '💵 Normal — great party without going broke', value: 'Normal' },
          { id: 'high', text: '💎 No limits — it\'s Halloween!', value: 'No limits' },
          { id: 'whatever', text: '🤷 I\'ll follow whatever the group votes', value: 'Group decides' },
        ],
        storageKey: 'budget',
      },
      {
        id: 'transport',
        emoji: '🚗',
        title: 'How are you getting there / transport?',
        subtitle: 'To coordinate carpools or shared rides.',
        type: 'options',
        options: [
          { id: 'own', text: '🚗 I have my own ride', value: 'Own transport' },
          { id: 'need_ride', text: '🙋 Need a ride / split an Uber', value: 'Needs a ride' },
          { id: 'can_give', text: '🚐 I have seats in my car', value: 'Can give rides' },
          { id: 'figure_out', text: '🤔 We\'ll figure it out in the WhatsApp group', value: 'Coordinate in group' },
        ],
        storageKey: 'transport',
      },
    ],
  },
};

// Costume Generator Data for extra ideas
const COSTUME_GROUPS = {
  es: [
    {
      theme: '🧟 Clásicos del terror',
      costumes: ['Drácula', 'Frankenstein', 'Momia', 'Hombre lobo', 'Novia de Frankenstein'],
      desc: 'Los iconos del horror. Nunca fallan y siempre impresionan.',
    },
    {
      theme: '🎬 Personajes de película',
      costumes: ['Beetlejuice', 'Wednesday Addams', 'Ghostbusters', 'Freddy Krueger', 'Pennywise'],
      desc: 'Reconocibles al instante. Perfectos si quieren ir coordinados.',
    },
    {
      theme: '🦸 Villanos unidos',
      costumes: ['Joker', 'Harley Quinn', 'Maléfica', 'Cruella', 'Thanos'],
      desc: 'Porque ser el villano siempre es más divertido.',
    },
    {
      theme: '🍔 Disfraces absurdos',
      costumes: ['Taco gigante', 'Enchufe y tomacorriente', 'Bolsa de basura', 'WiFi señal baja', 'Error 404'],
      desc: 'Para los que prefieren hacer reír que asustar.',
    },
    {
      theme: '👾 Gaming & Pop Culture',
      costumes: ['Among Us', 'Minecraft Creeper', 'Mario y Luigi', 'Pac-Man y fantasmas', 'Los Sims'],
      desc: 'Para la generación gamer. Pixels y diversión.',
    },
  ],
  en: [
    {
      theme: '🧟 Horror Classics',
      costumes: ['Dracula', 'Frankenstein', 'Mummy', 'Werewolf', 'Bride of Frankenstein'],
      desc: 'Horror icons. They never fail and always impress.',
    },
    {
      theme: '🎬 Movie Characters',
      costumes: ['Beetlejuice', 'Wednesday Addams', 'Ghostbusters', 'Freddy Krueger', 'Pennywise'],
      desc: 'Instantly recognizable. Perfect for coordinated groups.',
    },
    {
      theme: '🦸 United Villains',
      costumes: ['Joker', 'Harley Quinn', 'Maleficent', 'Cruella', 'Thanos'],
      desc: 'Because being the villain is always more fun.',
    },
  ],
};

function getQuestions(phase) {
  const data = QUESTIONS[phase];
  return data ? (data[currentLang] || data.es) : [];
}

function getCostumeIdeas() {
  return COSTUME_IDEAS;
}

function getCostumeGroups() {
  return COSTUME_GROUPS[currentLang] || COSTUME_GROUPS.es;
}
