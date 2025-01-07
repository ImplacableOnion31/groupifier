const languageInfo = [
  { code: 'br', originalName: 'Brezhoneg', englishName: 'Breton' },
  { code: 'ca', originalName: 'Català', englishName: 'Catalan' },
  { code: 'en', originalName: 'English', englishName: 'English' },
  { code: 'eo', originalName: 'Esperanto', englishName: 'Esperanto' },
  { code: 'fr', originalName: 'Français', englishName: 'French' },
  { code: 'galo', originalName: 'Galo', englishName: 'Gallo' },
  { code: 'it', originalName: 'Italiano', englishName: 'Italian'},
  { code: 'de', originalName: 'Deutsch', englishName: 'German'},
  { code: 'tnt', originalName: 'Trentin', englishName: 'Trentin'},
];

const texts = {
  en: {
    eventLabel: 'Event',
    round: 'Round',
    group: 'Group',
    station: 'Station',
    name: 'Name',
    newCompetitor: 'New competitor',
    scr: 'Scr',
    result: 'Result',
    judge: 'Judge',
    comp: 'Comp',
    extra: 'Extra attempt',
    delegateInitials: 'Delegate initials',
    cutoff: 'Cutoff',
    timeLimit: 'Time limit',
    total: 'total',
    eventName: {
      '333': '3x3x3 Cube',
      '222': '2x2x2 Cube',
      '444': '4x4x4 Cube',
      '555': '5x5x5 Cube',
      '666': '6x6x6 Cube',
      '777': '7x7x7 Cube',
      '333bf': '3x3x3 Blindfolded',
      '333fm': '3x3x3 Fewest Moves',
      '333oh': '3x3x3 One-Handed',
      minx: 'Megaminx',
      pyram: 'Pyraminx',
      clock: 'Clock',
      skewb: 'Skewb',
      sq1: 'Square-1',
      '444bf': '4x4x4 Blindfolded',
      '555bf': '5x5x5 Blindfolded',
      '333mbf': '3x3x3 Multi-Blind',
    },
  },
  br: {
    eventLabel: 'Amprouenn',
    round: 'Tro',
    group: 'Stroll',
    station: "Lec'h",
    name: 'Anv',
    newCompetitor: 'Kenstrivadeg kentañ',
    scr: 'Mesk',
    result: "Disoc'h",
    judge: 'Barn',
    comp: 'Kens',
    extra: 'Adtaol-esae',
    delegateInitials: 'Dileuriad',
    cutoff: 'Amzer termen',
    timeLimit: 'Harz-amzer',
    total: 'hollad',
    eventName: {
      '333': 'Diñs 3x3x3',
      '222': 'Diñs 2x2x2',
      '444': 'Diñs 4x4x4',
      '555': 'Diñs 5x5x5',
      '666': 'Diñs 6x6x6',
      '777': 'Diñs 7x7x7',
      '333bf': '3x3x3 dall',
      '333fm': '3x3x3 diluziadur gwellekaet',
      '333oh': '3x3x3 gant un dorn',
      minx: 'Megaminks',
      pyram: 'Piraminks',
      clock: 'Klok',
      skewb: 'Skyoub',
      sq1: 'Skouer-Ouann',
      '444bf': '4x4x4 dall',
      '555bf': '5x5x5 dall',
      '333mbf': '3x3x3 meur a hini dall',
    },
  },
  ca: {
    eventLabel: 'Categoria',
    round: 'Ronda',
    group: 'Grup',
    station: 'Estació',
    name: 'Nom',
    newCompetitor: 'Nou competidor',
    scr: 'Bar',
    result: 'Resultat',
    judge: 'Jutge',
    comp: 'Comp',
    extra: 'Intent extra',
    delegateInitials: 'Inicials del delegat',
    cutoff: 'Tall',
    timeLimit: 'Temps límit',
    total: 'acumulatiu',
    eventName: {
      '333': 'Cub 3x3x3',
      '222': 'Cub 2x2x2',
      '444': 'Cub 4x4x4',
      '555': 'Cub 5x5x5',
      '666': 'Cub 6x6x6',
      '777': 'Cub 7x7x7',
      '333bf': '3x3x3 Cega',
      '333fm': '3x3x3 Menys Moviments',
      '333oh': '3x3x3 Una mà',
      minx: 'Megaminx',
      pyram: 'Pyraminx',
      clock: 'Clock',
      skewb: 'Skewb',
      sq1: 'Square-1',
      '444bf': '4x4x4 Cega',
      '555bf': '5x5x5 Cega',
      '333mbf': 'Múltiples 3x3x3 a Cegues',
    },
  },
  eo: {
    eventLabel: 'Konkursero',
    round: "Raŭnd'",
    group: 'Grupo',
    station: 'Stacio',
    name: 'Nomo',
    newCompetitor: 'Nova konkursanto',
    scr: 'Miks',
    result: 'Resulto',
    judge: 'Juĝ',
    comp: 'Part',
    extra: 'Ekstra solvo',
    delegateInitials: 'Inicialoj de la Delegito',
    cutoff: 'Ĉestempo',
    timeLimit: 'Tempolimo',
    total: 'entute',
    eventName: {
      '333': 'Kubo 3x3x3',
      '222': 'Kubo 2x2x2',
      '444': 'Kubo 4x4x4',
      '555': 'Kubo 5x5x5',
      '666': 'Kubo 6x6x6',
      '777': 'Kubo 7x7x7',
      '333bf': '3x3x3 Blinde',
      '333fm': '3x3x3 Optimigita Solvo',
      '333oh': '3x3x3 Unumane',
      minx: 'Megaminkso',
      pyram: 'Piraminkso',
      clock: 'Kloko',
      skewb: 'Skjubo',
      sq1: 'Skŭaro-1',
      '444bf': '4x4x4 Blinde',
      '555bf': '5x5x5 Blinde',
      '333mbf': '3x3x3 Pluraj kuboj blinde',
    },
  },
  fr: {
    eventLabel: 'Épreuve',
    round: 'Tour',
    group: 'Groupe',
    station: 'Station',
    name: 'Nom',
    newCompetitor: 'Première compétition',
    scr: 'Mél',
    result: 'Résultat',
    judge: 'Juge',
    comp: 'Comp',
    extra: 'Extra',
    delegateInitials: 'Initiales Délégué·e',
    cutoff: 'Cutoff',
    timeLimit: 'Time limit',
    total: 'total',
    eventName: {
      '333': 'Cube 3x3x3',
      '222': 'Cube 2x2x2',
      '444': 'Cube 4x4x4',
      '555': 'Cube 5x5x5',
      '666': 'Cube 6x6x6',
      '777': 'Cube 7x7x7',
      '333bf': "3x3x3 à l'aveugle",
      '333fm': '3x3x3 résolution optimisée',
      '333oh': '3x3x3 à une main',
      minx: 'Megaminx',
      pyram: 'Pyraminx',
      clock: 'Clock',
      skewb: 'Skewb',
      sq1: 'Square-1',
      '444bf': "4x4x4 à l'aveugle",
      '555bf': "5x5x5 à l'aveugle",
      '333mbf': "3x3x3 multiples à l'aveugle",
    },
  },
  galo: {
    eventLabel: 'Assaot',
    round: 'Tour',
    group: 'Groupe',
    station: 'Station',
    name: 'Nom',
    newCompetitor: 'Permiere course',
    scr: 'Mél',
    result: 'Fezûre',
    judge: 'Juje',
    comp: 'Cours',
    extra: 'Ajis',
    delegateInitials: 'Déléguë·ée',
    cutoff: 'Temp de pâssaje',
    timeLimit: 'Temp limite',
    total: 'en tout',
    eventName: {
      '333': 'Qhube 3x3x3',
      '222': 'Qhube 2x2x2',
      '444': 'Qhube 4x4x4',
      '555': 'Qhube 5x5x5',
      '666': 'Qhube 6x6x6',
      '777': 'Qhube 7x7x7',
      '333bf': '3x3x3 bôgné',
      '333fm': '3x3x3 chieu le pus court',
      '333oh': '3x3x3 o ene main',
      minx: 'Megaminx',
      pyram: 'Piraminx',
      clock: 'Cloc',
      skewb: 'Skyoub',
      sq1: 'Sqouère-Ouane',
      '444bf': '4x4x4 bôgné',
      '555bf': '5x5x5 bôgné',
      '333mbf': 'Puzieurs 3x3x3 bôgné',
    },
  },
  it: {
    eventLabel: 'Evento',
    round: 'Turno',
    group: 'Gruppo',
    station: 'Postazione',
    name: 'Nome',
    newCompetitor: 'Nuovo partecipante',
    scr: 'Mis',
    result: 'Risultato',
    judge: 'Giudice',
    comp: 'Part',
    extra: 'Tentativo extra',
    delegateInitials: 'Iniziali del delegato',
    cutoff: 'Taglio',
    timeLimit: 'Tempo limite',
    total: 'totale',
    eventName: {
      '333': 'Cubo 3x3x3',
      '222': 'Cubo 2x2x2',
      '444': 'Cubo 4x4x4',
      '555': 'Cubo 5x5x5',
      '666': 'Cubo 6x6x6',
      '777': 'Cubo 7x7x7',
      '333bf': '3x3x3 da Bendato',
      '333fm': '3x3x3 Fewest Moves',
      '333oh': '3x3x3 con una Mano',
      minx: 'Megaminx',
      pyram: 'Pyraminx',
      clock: 'Clock',
      skewb: 'Skewb',
      sq1: 'Square-1',
      '444bf': '4x4x4 da Bendato',
      '555bf': '5x5x5 da Bendato',
      '333mbf': '3x3x3 Multiplo da Bendato',
    },
  },
  de: {
    eventLabel: 'Disziplin',
    round: 'Runde',
    group: 'Gruppe',
    station: 'Station',
    name: 'Name',
    newCompetitor: 'Neuer Teilnehmer',
    scr: 'Scr',
    result: 'Ergebnis', 
    judge: 'Judge',
    comp: 'Teil',
    extra: 'zusätzlicher Versuch',
    delegateInitials: 'Delegates Anfangsbuchstaben ',
    cutoff: 'cutoff',
    timeLimit: 'Zeitlimit',
    total: 'gesamt',
    eventName: {
      '333': '3x3x3 Würfel',
      '222': '2x2x2 Würfel',
      '444': '4x4x4 Würfel',
      '555': '5x5x5 Würfel',
      '666': '6x6x6 Würfel',
      '777': '7x7x7 Würfel',
      '333bf': '3x3x3 Blind',
      '333fm': '3x3x3 Fewest Moves',
      '333oh': '3x3x3 Einhändig',
      minx: 'Megaminx',
      pyram: 'Pyraminx',
      clock: 'Clock',
      skewb: 'Skewb',
      sq1: 'Square-1',
      '444bf': '4x4x4 Blind',
      '555bf': '5x5x5 Blind',
      '333mbf': '3x3x3 Mehrfach Blind',
    }
  },
  tn: {
    eventLabel: 'Evènto',
    round: 'Turno',
    group: 'Grup',
    station: 'Pòst',
    name: 'Nòm',
    newCompetitor: 'Partecipante nof',
    scr: 'Mis',
    result: 'Tèmp',
    judge: 'Giùdice',
    comp: 'Part',
    extra: 'Tentatif extra',
    delegateInitials: 'Iniziai del delegà',
    cutoff: 'Tai',
    timeLimit: 'Tèmp lìmite',
    total: 'total',
    eventName: {
      '333': 'Cubo 3x3x3',
      '222': 'Cubo 2x2x2',
      '444': 'Cubo 4x4x4',
      '555': 'Cubo 5x5x5',
      '666': 'Cubo 6x6x6',
      '777': 'Cubo 7x7x7',
      '333bf': '3x3x3 sènza vardar',
      '333fm': '3x3x3 Fewest Moves',
      '333oh': '3x3x3 con na man',
      minx: 'Megaminx',
      pyram: 'Pyraminx',
      clock: 'Clock',
      skewb: 'Skewb',
      sq1: 'Square-1',
      '444bf': '4x4x4 sènza vardar',
      '555bf': '5x5x5 sènza vardar',
      '333mbf': '3x3x3 multipli sènza vardar',
    }
  }
};

export const translation = language => texts[language];
export default languageInfo;
