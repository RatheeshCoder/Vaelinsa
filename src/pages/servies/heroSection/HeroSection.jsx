import React from 'react'
import * as Style from './Style'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <Style.MainContainer>
            <Style.LeftContainer />
            <Style.RightContainer />

            <Style.ContentContainer>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    The
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Creative
                </motion.h1>
                <motion.span
                    style={{textAlign:'end', fontSize:'5rem'}}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Products
                </motion.span>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint error rem et iste, voluptas veniam dolores vero reprehenderit debitis soluta optio consequatur, labore aspernatur aliquam enim similique ratione ab.
                </motion.p>
            </Style.ContentContainer>

        </Style.MainContainer>
    )
}

export default HeroSection