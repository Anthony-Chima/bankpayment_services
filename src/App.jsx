import React from 'react'
import styles from './style'
import { Stats, Business, Billing , CardDeal , Testimonials,  Clients,  CTA , Footer, NavBar, Hero} from './components'

const App = () => (
   <div  className="bg-primary w-full overflow-hidden border-8 border-yellow-800">
        <div className={` ${styles.paddingX} ${styles.flexCenter} border-8 border-purple-800`}>
            <div  className={` ${styles.boxWidth}  ${styles.flexCenter} border-8 border-yellow-400`} >
                <NavBar /> 
            </div>
        </div>

      <div className={`bg-primary ${styles.flexStart} border-8 border-green-800`}>
        <div className={`${styles.boxWidth} border-8 border-green-400`}>
          <Hero />
          
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}  border-8 border-blue-800`}>
        <div className={`${styles.boxWidth}  border-8 border-blue-400`}>
          <Stats />
          <Business/> 
          <Billing/> 
          <CardDeal/> 
          <Testimonials/> 
          <Clients/> 
          <CTA/> 
          <Footer/>
        </div>
      </div>

    </div>
)
  

export default App
