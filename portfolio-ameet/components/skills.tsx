'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { delay, motion } from 'framer-motion'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.7);
    return (
        <section ref={ref} id="skills" className='mb-28 max-w-[58rem] scroll-my-28 text-center sm:mb-40'>
            <SectionHeading>
                My Skills
            </SectionHeading>
            <ul className='group flex flex-wrap justify-center gap-2 text-lg text-gray-800 sm:mx-2 mx-6'>
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgb(255, 102, 255)"
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 300
                        }}
                        viewport={{
                            once: true
                        }}
                        className='bg-white border-black rounded-xl shadow-sm px-5 py-3 cursor-pointer'
                        custom={index}
                        
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section >
    )
}