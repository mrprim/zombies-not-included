import React, { Component } from 'react'
import getDeck from '../../db/getDeck'
import random from '../../utils/random'
import Sheet from '../Sheet'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import './index.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      deck: [],
      hand: []
    } // <- set up react state

    this.shuffle = this.shuffle.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentWillMount () {
    this.setDeck().then(this.reset)
  }

  setDeck () {
    return getDeck().then(deck => {
      this.setState({
        deck,
        hand: []
      })
    })
  }

  drawCard () {
    const drawn = random(this.state.deck)
    const deck = this.state.deck.filter(card => drawn.id !== card.id)
    const hand = this.state.hand
    hand.push(drawn)

    return this.setState({
      deck,
      hand
    })
  }

  shuffle () {
    const deck = this.state.deck
    const hand = this.state.hand

    const shuffled = deck.concat(hand)

    return this.setState({
      hand: [],
      deck: shuffled
    })
  }

  async reset () {
    await this.shuffle()
    await this.drawCard()
    await this.drawCard()
  }

  render () {
    if (!this.state.deck.length) {
      return null
    }

    return (
      <div className='App'>
        <Grid container justify='center' alignItems='flex-start' spacing={0}>
          <Grid item xs={11} sm={10} md={9}>
            <Sheet hand={this.state.hand} />
            <Fab className='resetButton' color='primary' variant='extended' onClick={this.reset}>
              Draw
            </Fab>
          </Grid>
        </Grid>

      </div>
    )
  }
}

export default App
