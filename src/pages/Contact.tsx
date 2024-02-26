import { Box, Typography } from "@mui/material"
import { ContactForm, ContactInfo, ContactMap } from "../components/pages/contact"


const Contact = () => {

  return (
    <Box maxWidth="lg" paddingX={4} sx={{ margin: "auto", position: "relative" }}>
      <Typography variant="h2">Contact</Typography>
      
      <ContactInfo />
      
      <ContactMap />

      <ContactForm />
    </Box>
  )
}

export default Contact