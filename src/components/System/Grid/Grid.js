import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import DieMenu from '../../App/Die/DieMenu.js'

const MainGrid = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
        <DieMenu />
      </Grid.Column>
      <Grid.Column width={11}>
        <Image src='/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default MainGrid