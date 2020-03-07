import { db } from './fire'

const getAllCards = () =>
  db.collection('cards').get().then(snapshot => {
    const cards = []
    snapshot.forEach(doc => {
      const data = doc.data()
      cards.push({
        id: doc.id,
        ...data
      })
    })
    return cards
  })

export default getAllCards
