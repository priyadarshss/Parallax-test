import { Container } from '@chakra-ui/react'
import Header from '../components/Header'
import ParallaxSection from '../components/ParallaxSection'

function App() {
  return (
    <div>
      <Container
        py={25}
        minH='100vh'
        color='white'
        display='flex'
        justifyContent='center'
        background='linear-gradient(#27453e, #E6EEE0)'
      >
        <Header />
        <ParallaxSection />
      </Container>
    </div>
  )
}

export default App
