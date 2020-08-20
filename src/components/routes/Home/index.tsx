import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import styled from 'styled-components'

const MainContainer = styled(Grid)`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 20px;
`

const Home: React.FC = () => {
  return (
    <MainContainer container>
      <Grid item xs={3}>
        <Paper style={{padding: 50}} />
      </Grid>
      <Grid item xs={3}>
        <Paper style={{padding: 50}} />
      </Grid>
      <Grid item xs={3}>
        <Paper style={{padding: 50}} />
      </Grid>
      <Grid item xs={3}>
        <Paper style={{padding: 50}} />
      </Grid>
    </MainContainer>
  )
}

export default Home
