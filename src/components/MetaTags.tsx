import Head from "next/head";
import React from "react";

interface Props {
  title: string;
  description: string;
  route?: string;
}

const MetaTags = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
      {props?.route ? (
        <link
          rel="canonical"
          href={`https://www.hapartment.org/${props.route}`}
          key="canonical"
        />
      ) : (
        <link
          rel="canonical"
          href="https://www.hapartment.org"
          key="canonical"
        />
      )}

      <meta name="description" content={props.description} />

      <meta
        name="keywords"
        content="Hapartment digital marketplace,Hapartment,renting a home,rent apartment or house, renting a property,for rent homes by owner,apartment list,housing listings,list house for rent,homes apartments for rent,rental listings,rental property listings,list apartment for rent,find apartments for rent,how to rent a house,finding homes for rent,how to rent out a house,housing homes for rent,list home for rent,pay my rent,how to get out of an apartment lease,how to rent out your house,renting out your house,my rentals,best place to list rental property,property management rental listings,rental listings by owner,find renters,rent my house,should i sell or rent my house,renting out a house,how to rent your house,new homes for rent,renting a house vs apartment,rent your home,places for rent by owner,find places to rent,out house rental,"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="title" content={props.title} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />

      <meta
        property="og:image"
        content="https://res.cloudinary.com/hapartments/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.18_PM_img0qq.jpg"
      />
      <meta property="og:type" content="website" />

      {props?.route ? (
        <meta
          property="og:url"
          content={`https://www.hapartment.org/${props.route}`}
        />
      ) : (
        <meta property="og:url" content="https://www.hapartment.org" />
      )}
      <meta name="twitter:card" content="Hapartment" />

      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Hapartment Digital Marketplace" />

      <meta property="og:site_name" content="Hapartment Digital Marketplace" />
      <meta
        name="twitter:image:alt"
        content="https://res.cloudinary.com/dewqmrtqo/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.18_PM_img0qq.jpg"
      />
    </Head>
  );
};

export default MetaTags;
