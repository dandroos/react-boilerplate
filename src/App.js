import logo from './logo.svg'
import './App.css'
import { Box, Container, Typography } from '@mui/material'
import { connect } from 'react-redux'

function App({ deviceType }) {
  return (
    <Box
      minHeight={'100vh'}
      display='flex'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
    >
      <Container>
        <Typography>The current device type is set to {deviceType}</Typography>
      </Container>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  deviceType: state.deviceType,
})

export default connect(mapStateToProps)(App)
