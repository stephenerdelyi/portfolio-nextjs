import Head from 'next/head'

import Meta from '../modules/meta'
import Favicon from '../modules/favicon'
import Skipnav from '../modules/skipnav'
import Container from '../modules/container'

import Header from '../blocks/header'
import About from '../blocks/about'
import Resume from '../blocks/resume'
import Portfolio from '../blocks/portfolio'
import Contact from '../blocks/contact'
import Footer from '../blocks/footer'
import Scripts from '../modules/scripts'

export async function getServerSideProps(context) {
    var connection = await fetch('https://admin.steveerdelyi.com/wp-json/portfolio/homepage/')
    //var connection = await fetch('http://portfolio-headless-wp.lndo.site/wp-json/portfolio/homepage/')
    var response = await connection.json()

    return {
        props: {
            data: response
        }
    }
}

export default function PortfolioSPA(site_data) {
    return <>
        <Meta/>
        <Favicon/>
        <Skipnav/>

        <main>
            <Container id="header" classes={['container--grey-gradient']} aria_label="Steve Erdelyi">
                <Header data={site_data.data[0]}/>
            </Container>
            <Container id="about" classes={['container--white']} aria_label="About">
                <About/>
            </Container>
            <Container id="resume" classes={['container--grey']} aria_label="Résumé">
                <Resume/>
            </Container>
            <Container id="portfolio" classes={['container--white']} aria_label="Portfolio">
                <Portfolio/>
            </Container>
            <Container id="contact" classes={['container--blue-gradient']} aria_label="Contact">
                <Contact/>
            </Container>
            <Container id="footer" classes={['container--dark-grey']} aria_label="Copyright">
                <Footer/>
            </Container>
        </main>

        <Scripts/>
    </>
}
