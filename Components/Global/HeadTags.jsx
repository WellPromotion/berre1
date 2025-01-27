import Head from 'next/head'

export default function HeadTags(props) {

    const { headData } = props;

    return (
        <Head>
            <title>{undefined !== headData.title ? headData.title : "BERRE - WIP WBP"}</title>
            <meta name="description" content={undefined !== headData.meta ? headData.meta : ""} />
            {
                undefined !== headData.image ?
                <meta property="og:image" content={headData.image} key="ogimage" />
                :
                <meta property="og:image" content="https://shop.berre.ba/wp-content/uploads/2022/01/catalogue-berre.png" key="ogimage" />
            }
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"/>

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-P72TTN2N1P"></script>

            <script defer dangerouslySetInnerHTML={
                    { __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-P72TTN2N1P');
                    `}
            }></script>
            
        </Head>
    )
}
