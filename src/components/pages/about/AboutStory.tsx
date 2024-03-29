import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import image from "../../../assets/elias-morr-lUQf5XDaVy0-unsplash.jpg";

const AboutStory = () => {

    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const localTheme = {
      card: {
        display: "flex",
        borderRadius: "0px",
        position: "relative",
        bgcolor: "rgba(0,0,0,0)",
        border: "none",
        backgroundImage: "none",
        boxShadow: "none",
        maxWidth: "100%",
        padding: "20px",
        gap: "20px",
        flexDirection: isSmScreen ? 'column' : 'row',
        justifyItems: 'center',
        alignItems: isSmScreen ? 'center' : 'flex-start',
      },
      textBox: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: -1
      },
      title: {
        position: "relative",
        // paddingBottom: "20px",
        color: theme.palette.primary.contrastText,
      },
      paragraphBox: {
        bgcolor: theme.palette.secondary.dark,
        borderRadius: "0px",
        position: "relative",
        zIndex: -1
      },
      paragraphTextBox: {
        zIndex: 1
      },
      paragraph: {
        // padding: "4px 20px 4px 20px",
        color: theme.palette.secondary.contrastText,
      },
      icon: {
        fontSize: "96px",
        color: theme.palette.info.light,
        position: "absolute",
        top: "16px",
        zIndex: -1
      },
    };

  return (
    <Container
        maxWidth="md"
        sx={
          localTheme.card
        }
      >
          <Box sx={localTheme.textBox}>
            <Typography
                align='right'
                variant="h6"
                gutterBottom
                paddingX={4}
                sx={
                  localTheme.title
                }
              >
                From the origins...
              </Typography>
  
                <Box sx={localTheme.paragraphBox} paddingX={4} paddingY={2}>
                    <HistoryEduIcon sx={localTheme.icon}/>
                    <Box sx={localTheme.paragraphTextBox}>
                        <Typography
                            variant="body2"
                            sx={localTheme.paragraph}
                        >
                            In the beginning, our journey sprouted from humble origins, the vegetables harvested from our very own organic urban garden. What started as a small endeavor soon blossomed into something greater when we decided to share our passion for fresh, sustainable ingredients with the community by opening a restaurant. As demand grew and our vision expanded, we recognized the importance of collaboration and sustainability in our culinary pursuits.
                        </Typography>
                    </Box>
                </Box>
          </Box>

          <Box>
            <img
                src={image}
                style={{
                    height: "300px",
                    width: "300px",
                    objectFit: "cover"
                }}
            />
          </Box>
        </Container>
  )
}

export default AboutStory