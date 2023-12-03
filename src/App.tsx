import { BrowserRouter } from 'react-router-dom'
// @ts-expect-error error
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import { ReactElement } from 'react'

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
