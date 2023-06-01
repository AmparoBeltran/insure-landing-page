import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/Global"
import Header from "./components/Header"
import Hero from "./components/Hero"
import AttributesSection from "./components/AttributesSection"
import PortfolioSection from "./components/PortfolioSection"
import Footer from "./components/Footer"
const theme = {

  colors: {

    //### Primary
    darkViolet: 'hsl(256, 26%, 20%)',
    grayishBlue: 'hsl(216, 30%, 68%)',

    //### Neutral
    veryDarkViolet: 'hsl(270, 9%, 17%)',
    darkGrayishViolet: 'hsl(273, 4%, 51%)',
    veryLightGray: 'hsl(0, 0%, 98%)',
  },

  desktop: '1440px'
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Hero />
      <AttributesSection />
      <PortfolioSection />
      <Footer />
    </ThemeProvider>

  )
}

export default App
