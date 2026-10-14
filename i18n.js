/* ============================================
   i18n — Bilingual support (ES / EN)
   ============================================ */

const I18N = {
  es: {
    // Phase 1
    detected: 'Se ha detectado una posible víctima…',
    mission: 'Tenemos una misión para ti esta noche de Halloween.<br>Pero antes de abrir la puerta, necesitamos saber algunas cosas.',
    dare: '¿Te atreves?',
    yes_btn: 'SÍ, QUIERO SABER MÁS',
    no_btn: 'NO, YO SOY MUY SANO PARA ESTAS COSAS',
    attempts: 'Intentos de escape:',

    // Navigation
    prev: '← Anterior',
    next: 'Siguiente →',
    see_summary: 'Ver mi resumen',

    // Phase labels
    paranormal_file: 'EXPEDIENTE PARANORMAL',
    costume_lab: 'LABORATORIO DE DISFRACES',
    night_plan: 'PLAN DE LA NOCHE',

    // Phase 5
    file_approved: '🎃 EXPEDIENTE APROBADO 👻',
    ghost_approved: 'El fantasma ha revisado tu expediente y te ha dado acceso.',
    countdown_title: '⏳ Cuenta regresiva',
    days: 'días',
    hours: 'horas',
    minutes: 'min',
    seconds: 'seg',
    costume_ideas: '🧛 Ideas de disfraces grupales',
    new_ideas: '🎲 Otras ideas',
    copy_summary: '📋 Copiar mi expediente',
    join_group: '💬 Unirme al grupo de WhatsApp',
    restart: '🔄 Volver a empezar',
    copy_hint: 'Copia tu expediente y pégalo en el grupo cuando te unas. ¡Así todos sabrán tu plan!',
    copied: '✅ ¡Expediente copiado!',

    // Ghost rejection messages
    ghost_reject: [
      '¿En serio? ¿Ni una noche de terror? El fantasma está decepcionado… 😢',
      '¡Oye, vuelve aquí! ¡Los dulces no se comen solos! 🍬',
      'El fantasma ha empezado a llorar. ¿Estás contento? 👻💧',
      'Dicen que quien rechaza tres veces una invitación de Halloween, recibe visitas nocturnas… 🌙',
      'A ver, pensémoslo de otra forma: habrá comida gratis. ¿Ahora sí? 🍕',
      'El fantasma está buscando tu dirección para ir a buscarte. Solo digo… 📍',
      '¡ÚLTIMA OPORTUNIDAD! …es broma, te voy a seguir preguntando. 😏',
      'Mira, el fantasma ya se ha puesto su disfraz. No lo hagas perder el tiempo. 🎭',
      'Nota mental: no invitar a esta persona a nada nunca. …mentira, ven por favor. 😭',
      'El fantasma ha convocado una reunión de emergencia con los otros fantasmas. Opinan que deberías venir. 👻👻👻',
    ],
    ghost_accept_after_reject: '¡LO SABÍA! ¡Sabía que había espíritu festivo en ti! 🎉👻',
    ghost_accept: '¡Excelente decisión! Prepara tu alma para una noche que no olvidarás… 🌙',
    ghost_welcome: '¡Bienvenido al expediente paranormal! Responde con sinceridad… o no. Al fantasma le da igual. 😏',

    // Secret file categories
    secret_hunter: {
      title: '🔫 Cazador de Fantasmas',
      desc: 'Valiente, decidido y listo para la acción. Eres el tipo de persona que entra primera a la casa embrujada y sale riendo. Los fantasmas te tienen respeto… o miedo.',
    },
    secret_chaos: {
      title: '🌪️ Caos con Patas',
      desc: 'Nadie sabe qué vas a hacer, ni siquiera tú. Pero todos saben que la noche va a ser memorable gracias a ti. Eres impredecible de la mejor manera.',
    },
    secret_director: {
      title: '🎬 Director del Aquelarre',
      desc: 'Organizas, decides y tienes visión. Si hay un plan, probablemente es porque tú lo hiciste. Los demás solo necesitan seguirte y disfrutar.',
    },
    secret_victim: {
      title: '💀 Víctima Potencial',
      desc: 'Inocente, curioso y un poco asustadizo. Eres la persona que grita en las películas de terror y que hace que todo sea más divertido. ¡No te preocupes, te protegeremos!',
    },
    secret_legend: {
      title: '👑 Leyenda de Halloween',
      desc: 'Has respondido todo, tienes plan, disfraz, ideas y energía. Eres la persona que hace que Halloween pase de ser una noche cualquiera a una historia épica.',
    },

    // Summary template
    summary_header: '🎃 EXPEDIENTE DE HALLOWEEN 👻',
    summary_name: '🧛 Nombre',
    summary_costume: '🕸️ Disfraz',
    summary_style: '🦇 Estilo',
    summary_mode: '👥 Modalidad',
    summary_budget: '💰 Presupuesto',
    summary_place: '📍 Plan y lugar',
    summary_availability: '🕐 Disponibilidad',
    summary_transport: '🚗 Transporte',
    summary_food: '🍔 Comida',
    summary_idea: '💡 Propuesta personal',
    summary_footer: 'El fantasma ha aprobado mi expediente. Ahora falta decidir el plan de verdad. 🎃',
  },

  en: {
    detected: 'A potential victim has been detected…',
    mission: 'We have a mission for you this Halloween night.<br>But before opening the door, we need to know a few things.',
    dare: 'Do you dare?',
    yes_btn: 'YES, I WANT TO KNOW MORE',
    no_btn: 'NO, I\'M TOO PURE FOR THIS',
    attempts: 'Escape attempts:',

    prev: '← Back',
    next: 'Next →',
    see_summary: 'See my summary',

    paranormal_file: 'PARANORMAL FILE',
    costume_lab: 'COSTUME LAB',
    night_plan: 'NIGHT PLAN',

    file_approved: '🎃 FILE APPROVED 👻',
    ghost_approved: 'The ghost has reviewed your file and granted you access.',
    countdown_title: '⏳ Countdown',
    days: 'days',
    hours: 'hours',
    minutes: 'min',
    seconds: 'sec',
    costume_ideas: '🧛 Group costume ideas',
    new_ideas: '🎲 New ideas',
    copy_summary: '📋 Copy my file',
    join_group: '💬 Join WhatsApp group',
    restart: '🔄 Start over',
    copy_hint: 'Copy your file and paste it in the group when you join. That way everyone will know your plan!',
    copied: '✅ File copied!',

    ghost_reject: [
      'Seriously? Not even one night of terror? The ghost is disappointed… 😢',
      'Hey, come back! The candy won\'t eat itself! 🍬',
      'The ghost has started crying. Are you happy now? 👻💧',
      'They say whoever rejects a Halloween invitation three times gets midnight visitors… 🌙',
      'Let\'s think about this differently: there will be free food. How about now? 🍕',
      'The ghost is looking up your address to come find you. Just saying… 📍',
      'LAST CHANCE! …just kidding, I\'ll keep asking. 😏',
      'Look, the ghost already put on its costume. Don\'t waste its time. 🎭',
      'Mental note: never invite this person anywhere. …just kidding, please come. 😭',
      'The ghost called an emergency meeting with the other ghosts. They all think you should come. 👻👻👻',
    ],
    ghost_accept_after_reject: 'I KNEW IT! I knew there was party spirit in you! 🎉👻',
    ghost_accept: 'Excellent choice! Prepare your soul for an unforgettable night… 🌙',
    ghost_welcome: 'Welcome to the paranormal file! Answer honestly… or don\'t. The ghost doesn\'t care. 😏',

    secret_hunter: {
      title: '🔫 Ghost Hunter',
      desc: 'Brave, determined and ready for action. You\'re the kind of person who walks into the haunted house first and comes out laughing. Ghosts respect you… or fear you.',
    },
    secret_chaos: {
      title: '🌪️ Walking Chaos',
      desc: 'Nobody knows what you\'ll do, not even you. But everyone knows the night will be memorable because of you. You\'re unpredictable in the best way.',
    },
    secret_director: {
      title: '🎬 Coven Director',
      desc: 'You organize, decide and have vision. If there\'s a plan, you probably made it. Everyone else just needs to follow you and enjoy.',
    },
    secret_victim: {
      title: '💀 Potential Victim',
      desc: 'Innocent, curious and a bit scared. You\'re the person who screams in horror movies and makes everything more fun. Don\'t worry, we\'ll protect you!',
    },
    secret_legend: {
      title: '👑 Halloween Legend',
      desc: 'You answered everything, have a plan, costume, ideas and energy. You\'re the person who turns Halloween from just another night into an epic story.',
    },

    summary_header: '🎃 HALLOWEEN FILE 👻',
    summary_name: '🧛 Name',
    summary_costume: '🕸️ Costume',
    summary_style: '🦇 Style',
    summary_mode: '👥 Mode',
    summary_budget: '💰 Budget',
    summary_place: '📍 Plan & place',
    summary_availability: '🕐 Availability',
    summary_transport: '🚗 Transport',
    summary_food: '🍔 Food',
    summary_idea: '💡 Personal idea',
    summary_footer: 'The ghost approved my file. Now we need to figure out the real plan. 🎃',
  },
};

let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  localStorage.setItem('halloween-lang', lang);

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    }
  });
}

function t(key) {
  return I18N[currentLang]?.[key] ?? I18N.es[key] ?? key;
}

function tObj(key) {
  return I18N[currentLang]?.[key] ?? I18N.es[key] ?? {};
}

function initLang() {
  const saved = localStorage.getItem('halloween-lang');
  if (saved && I18N[saved]) {
    currentLang = saved;
  }
  setLang(currentLang);
}
