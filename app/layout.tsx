import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';

import '@/app/styles/main.css';
import { MainLayout } from '@/app/layout';

const montserrat = localFont({
  src: [
    {
      path: './fonts/Montserrat-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal'
    },
    {
      path: './fonts/Montserrat-Italic-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'italic'
    }
  ],
  variable: '--font-montserrat'
});

const pretendard = localFont({
  src: [
    {
      path: './fonts/Pretendard-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: './fonts/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: './fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: './fonts/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-pretendard'
});

export const metadata: Metadata = {
  title: 'your title',
  description: 'your description'
  // openGraph: {
  //   title: 'Your Site Title',
  //   description: 'A brief description of your website',
  //   url: 'https://yourwebsite.com',
  //   images: [
  //     {
  //       url: 'https://yourwebsite.com/og-image.png',
  //       width: 800,
  //       height: 600
  //     }
  //   ]
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   site: '@yourtwitterhandle'
  // }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${pretendard.variable}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
