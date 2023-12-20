import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { web } from '../assets'

const ExperienceCard = ({ experience }) => {
  console.log(experience)
  return (
    <VerticalTimelineElement contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ backround: experience.iconBg }}
      icon={
        <img src={experience.icon} alt={experience.company_name} className='w-auto h-auto' />
      }>

      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo dolor ea repellat accusamus unde laboriosam hic, rem ut ab illo deleniti magni vel in, accusantium corrupti nihil voluptatem molestias.</p>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='mt-20'>
        <p className={styles.sectionSubText}>What I've done so far</p>
        <h1 className={styles.sectionHeadText}>Work Expirience</h1>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline layout='1-column-left'>
          {experiences.map((val, i) =>
            <ExperienceCard key={i} experience={val} />
          )}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'experience')
