import Head from 'next/head'
import Image from 'next/image'

import Header from '../blocks/header'
import About from '../blocks/about'
import Resume from '../blocks/resume'
import Portfolio from '../blocks/portfolio'

import Meta from '../modules/meta'
import Skipnav from '../modules/skipnav'
import Container from '../modules/container'
import Favicon from '../modules/favicon'

export default function PortfolioSPA() {
    return <>
        <Meta></Meta>
        <Favicon></Favicon>
        <Skipnav></Skipnav>

        <main>
            <Container id="header" classes={['container--grey-gradient']} aria_label="Steve Erdelyi">
                <Header></Header>
            </Container>
            <Container id="about" classes={['container--white']} aria_label="About">
                <About></About>
            </Container>
            <Container id="resume" classes={['container--grey']} aria_label="Résumé">
                <Resume></Resume>
            </Container>
            <Container id="portfolio" classes={['container--white']} aria_label="Portfolio">
                <Portfolio></Portfolio>
            </Container>
        </main>
        <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
    </>
}
