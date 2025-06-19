// pages/share/[id].tsx
import { GetServerSideProps } from "next";

const OGPreview = ({ title, image, description, url }: any) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:image" content={image} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </head>
            <body>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.location.replace("${url}")`,
                    }}
                />
            </body>
        </html>
    );
};

export default OGPreview;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listing/${id}`);
    const data = await res.json();

    const title = `${data.title} | ${data.location} | ₦${data.price?.toLocaleString?.()}`;
    const image = data.image;
    const description = data.description;
    const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/listings/${id}`;

    return {
        props: { title, image, description, url },
    };
};
