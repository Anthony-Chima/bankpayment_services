import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () =>  (
  <section className={`${styles.flexCenter} border flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => {
      
      return (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}> 
        <h4 className={`fony-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white `}>
          {stat.value} 
        </h4>
          <p className={`fony-poppins font-normal xs:text-[20px] text-[1px] xs:leading-[26px] leading-[1px] text-gradient uppercase ml-3 `}>
            {stat.title}
          </p> 
      </div>
    )})}
  </section>
  )

export default Stats
