import React from 'react'
import MaterialCard from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'

const Card = ({ id, name, approaches }) =>
  <MaterialCard className='Card' key={id}>
    <CardHeader title={name} />
    <CardContent>
      {approaches.join(', ')}
    </CardContent>
  </MaterialCard>

export default Card
