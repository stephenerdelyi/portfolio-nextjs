import Head from 'next/head'
import dynamic from 'next/dynamic'

import Meta from '../modules/meta'
import Favicon from '../modules/favicon'
import Skipnav from '../modules/skipnav'
import Container from '../modules/container'
import Scripts from '../modules/scripts'

export default function PortfolioSPA(props) {
    return <>
        <Meta/>
        <Favicon/>
        <Skipnav/>

        {props && props.site_data &&
            <main>
                {props.site_data.map((block_data, key) => {
                    var Block = dynamic(() => import('../blocks/' + block_data.name));

                    return (
                        <Container key={key} id={block_data.name} classes={[block_data.settings.background_class]}>
                            <Block data={block_data}/>
                        </Container>
                    )
                })}
            </main>
        }

        <Scripts/>
    </>
}

//get site data from admin endpoint
export async function getServerSideProps(context) {
    //var connection = await fetch('https://admin.steveerdelyi.com/wp-json/portfolio/homepage/')
    var connection = await fetch('http://portfolio-headless-wp.lndo.site/wp-json/portfolio/homepage/')
    var response = await connection.json()

    return {
        props: {
            site_data: response
        }
    }
}
