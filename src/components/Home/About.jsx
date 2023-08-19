import {Container, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Container id='About'>
      <Typography  className='first-title' component='h6' sx={{textAlign:'start'}} variant='h6'>About</Typography>
      <Typography className='second-title' component='h4' sx={{textAlign:'start'}} variant='h4'>Welcome to RegFood</Typography>
      <Typography component='p'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Typography>
    </Container>
  )
}

export default About