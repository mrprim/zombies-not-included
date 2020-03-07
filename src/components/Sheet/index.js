import React from 'react'
import Card from '../Card'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import './index.scss'

const Sheet = ({ hand }) =>
  <Paper className='Sheet'>
    <div className='content'>
      <Name hand={hand} />
      <Approaches hand={hand} />
    </div>
    <div className='cards' >
      <Grid container justify='center' spacing={32}>
        {hand.map(CardWrapper)}
      </Grid>
    </div>
  </Paper>

const Name = ({ hand }) => {
  const sorted = [...hand]
  sorted.sort(handNameSort)

  return <h1>
    {sorted.reduce((name, card) => name + (name.length && name.substr(-1) === '-' ? '' : ' ') + card.name, '')}
  </h1>
}

const handNameSort = (a, b) => {
  if (a.id === 'spider' && b.id !== 'spider') return -1
  if (b.id === 'spider' && a.id !== 'spider') return 1
  return 0
}

const Approaches = ({ hand }) => {
  const approaches = hand.reduce((final, card) => {
    card.approaches.forEach(approach => {
      const val = final[approach] || 0
      final[approach] = val + 1
    })
    return final
  }, {})

  const approachArray = Object.entries(approaches)

  approachArray.sort(sortApproachArray)
  return <span>{approachArray.map(([key, val]) => `${key}: +${val}`).join(', ')}</span>
}

const sortApproachArray = ([keyA, valueA], [keyB, valueB]) => {
  if (valueA > valueB) return -1
  if (valueA < valueB) return 1
}

const CardWrapper = props =>
  <Grid item xs>
    <Card {...props} />
  </Grid>

export default Sheet
