import dynamic from 'next/dynamic'

import Meta from '../modules/meta'
import Favicon from '../modules/favicon'
import Skipnav from '../modules/skipnav'
import Container from '../modules/container'

export default function PortfolioSPA(props) {
    return <>
        <Meta/>
        <Favicon/>
        <Skipnav/>

        {props.site_data &&
            <main>
                {props.site_data.map((block_data, key) => {
                    const Block = dynamic(() => import('../blocks/' + block_data.name));

                    return (
                        <Container key={key} id={block_data.name} classes={[block_data.settings.background_class]}>
                            <Block data={block_data}/>
                        </Container>
                    )
                })}
            </main>
        }
    </>
}

//get site data from admin endpoint
export async function getStaticProps(context) {
    const connection = await fetch(process.env.NEXT_PUBLIC_ENDPOINT_ADMIN + '/homepage')
    const response = await connection.json()

    return {
        props: {
            site_data: response,
            revalidate: 60*60 //revalidate every hour
        }
    }
}
