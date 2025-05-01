import { Box, Typography } from "@mui/material"

const HomeComponent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}
    >
      <Typography variant="h3" color="warning">
        Welcome Home
      </Typography>
    </Box>
  )
}

export default HomeComponent