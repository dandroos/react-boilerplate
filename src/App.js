import logo from "./logo.svg"
import "./App.css"
import { Box, Container, Typography } from "@mui/material"
import { connect } from "react-redux"

function App({ deviceType, windowOrientation }) {
  return (
    <Box
      minHeight={"100vh"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Container>
        <Typography>The current device type is set to {deviceType}</Typography>
        <Typography>The window is {windowOrientation}</Typography>
      </Container>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  deviceType: state.deviceType,
  windowOrientation: state.windowOrientation,
})

export default connect(mapStateToProps)(App)
