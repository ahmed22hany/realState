import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Footer from './Footer'

import Navbar from './Navbar'

const Layout = ({ children }: any) => {
    return (
        <>
            <Head>
                <title>Real State</title>
            </Head>
            <Box maxW={'1280px'} m={'auto'}>
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    )
}

export default Layout