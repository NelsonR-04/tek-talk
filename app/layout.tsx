import React from 'react';
import { NavMenu } from "@/cosmic/blocks/navigation-menu/NavMenu";
import '../styles/globals.css';
import { getGlobalData } from '../lib/cosmic';
import Generator from 'next/font/local';
import Header from '../components/Header';
import Head from 'next/head';

const sans = Generator({
  src: '../fonts/Generator-Variable.ttf',
  variable: '--font-sans',
});

export async function generateMetadata() {
  const siteData = await getGlobalData();
  return {
    title: siteData.metadata.site_title,
    description: siteData.metadata.site_tag,
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteData = await getGlobalData();

  return (
    <html lang='en' className={`${sans.variable} font-sans`}>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-3150133541573315" />
      </Head>
      <body className='bg-white dark:bg-zinc-950'>
        <Header name={siteData} />
        {/* @ts-ignore */}
        {/* <NavMenu
          className="flex justify-center my-10"
          query={{ type: "navigation-menus", slug: "header" }}
          hasMobileMenu
        /> */}
        {children}
        {/* @ts-ignore */}
        {/* <NavMenu
          className="flex justify-center my-10"
          query={{ type: "navigation-menus", slug: "footer" }}
        /> */}
      </body>
    </html>
  );
}
