import { db } from './fire'

const deck = [
  {
    id: 'timeMaster',
    name: 'Time Master',
    approaches: ['careful', 'clever', 'flashy']
  },
  {
    id: 'supervillain',
    name: 'Supervillain',
    approaches: ['careful', 'clever', 'flashy']
  },
  {
    id: 'dwarf',
    name: 'Dwarf',
    approaches: ['careful', 'clever', 'forceful']
  },
  {
    id: 'robot',
    name: 'Robot',
    approaches: ['careful', 'clever', 'forceful']
  },
  {
    id: 'athlete',
    name: 'Athlete',
    approaches: ['careful', 'clever', 'quick']
  },
  {
    id: 'elf',
    name: 'Elf',
    approaches: ['careful', 'clever', 'quick']
  },
  {
    id: 'assassin',
    name: 'Assassin',
    approaches: ['careful', 'clever', 'sneaky']
  },
  {
    id: 'spy',
    name: 'Spy',
    approaches: ['careful', 'clever', 'sneaky']
  },
  {
    id: 'insectoid',
    name: 'Insectoid',
    approaches: ['careful', 'flashy', 'forceful']
  },
  {
    id: 'samurai',
    name: 'Samurai',
    approaches: ['careful', 'flashy', 'forceful']
  },
  {
    id: 'devil',
    name: 'Devil',
    approaches: ['careful', 'flashy', 'quick']
  },
  {
    id: 'stuntman',
    name: 'Stuntman',
    approaches: ['careful', 'flashy', 'quick']
  },
  {
    id: 'diplomat',
    name: 'Diplomat',
    approaches: ['careful', 'flashy', 'sneaky']
  },
  {
    id: 'ghost',
    name: 'Ghost',
    approaches: ['careful', 'flashy', 'sneaky']
  },
  {
    id: 'soldier',
    name: 'Soldier',
    approaches: ['careful', 'forceful', 'quick']
  },
  {
    id: 'dinosaur',
    name: 'Dinosaur',
    approaches: ['careful', 'forceful', 'quick']
  },
  {
    id: 'bouncer',
    name: 'Bouncer',
    approaches: ['careful', 'forceful', 'sneaky']
  },
  {
    id: 'bandit',
    name: 'Bandit',
    approaches: ['careful', 'forceful', 'sneaky']
  },
  {
    id: 'imp',
    name: 'Imp',
    approaches: ['careful', 'quick', 'sneaky']
  },
  {
    id: 'thief',
    name: 'Thief',
    approaches: ['careful', 'quick', 'sneaky']
  },
  {
    id: 'dragon',
    name: 'Dragon',
    approaches: ['clever', 'flashy', 'forceful']
  },
  {
    id: 'wizard',
    name: 'Wizard',
    approaches: ['clever', 'flashy', 'forceful']
  },
  {
    id: 'gunslinger',
    name: 'Gunslinger',
    approaches: ['clever', 'flashy', 'quick']
  },
  {
    id: 'spider',
    name: 'Spider-',
    approaches: ['clever', 'flashy', 'quick']
  },
  {
    id: 'merchant',
    name: 'Merchant',
    approaches: ['clever', 'flashy', 'sneaky']
  },
  {
    id: 'alien',
    name: 'Alien',
    approaches: ['clever', 'flashy', 'sneaky']
  },
  {
    id: 'pilot',
    name: 'Pilot',
    approaches: ['clever', 'forceful', 'quick']
  },
  {
    id: 'martian',
    name: 'Martian',
    approaches: ['clever', 'forceful', 'quick']
  },
  {
    id: 'mastermind',
    name: 'Mastermind',
    approaches: ['clever', 'forceful', 'sneaky']
  },
  {
    id: 'android',
    name: 'Android',
    approaches: ['clever', 'forceful', 'sneaky']
  },
  {
    id: 'psychic',
    name: 'Psychic',
    approaches: ['clever', 'quick', 'sneaky']
  },
  {
    id: 'scoundrel',
    name: 'Scoundrel',
    approaches: ['clever', 'quick', 'sneaky']
  },
  {
    id: 'musketeer',
    name: 'Musketeer',
    approaches: ['flashy', 'forceful', 'quick']
  },
  {
    id: 'viking',
    name: 'Viking',
    approaches: ['flashy', 'forceful', 'quick']
  },
  {
    id: 'hobgoblin',
    name: 'Hobgoblin',
    approaches: ['flashy', 'forceful', 'sneaky']
  },
  {
    id: 'eldritch',
    name: 'Eldritch',
    approaches: ['flashy', 'forceful', 'sneaky']
  },
  {
    id: 'speedster',
    name: 'Speedster',
    approaches: ['flashy', 'quick', 'sneaky']
  },
  {
    id: 'ninja',
    name: 'Ninja',
    approaches: ['flashy', 'quick', 'sneaky']
  },
  {
    id: 'pirate',
    name: 'Pirate',
    approaches: ['forceful', 'quick', 'sneaky']
  },
  {
    id: 'werewolf',
    name: 'Werewolf',
    approaches: ['forceful', 'quick', 'sneaky']
  }
]

const initDeck = () => deck.forEach(createCard)

const createCard = ({ id, name, approaches }) => {
  const data = { name, approaches }
  db.collection('cards').doc(id).set(data, { merge: true })
}

initDeck()
