import { Box, Link } from "@mui/material"
import { Stack, Typography } from "@mui/material"

export function Explore() {
  return (
    <>
      <Stack
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 3,
        padding: 2,
        gap: 1
      }}
      >
        <Typography variant='body1'>O que está acontecendo?</Typography>

        <Box sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
          <Typography variant='caption' color="text.secondary">Esportes - Há 45 min</Typography>
          <Typography variant='subtitle2'>Brasil x Argentina</Typography>
        </Box>

        <Box sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
          <Typography variant='caption' color="text.secondary">Assunto do Momento</Typography>
          <Typography variant='subtitle2'>BBB</Typography>
        </Box>

        <Box sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
          <Typography variant='caption' color="text.secondary">Música - Assunto do Momento</Typography>
          <Typography variant='subtitle2'>Taylor Swift</Typography>
        </Box>

        <Box sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
          <Typography variant='caption' color="text.secondary">Cinema - Assunto do Momento</Typography>
          <Typography variant='subtitle2'>Oscar 2026</Typography>
        </Box>

        <Link href='#' variant='caption'>Mostrar mais</Link>

      </Stack>
    </>
  )
}
