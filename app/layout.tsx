import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

// Define primary font: Inter
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Define secondary font: Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Specify weights needed
  variable: '--font-poppins',
  display: 'swap',
});

// Define metadata for the website
export const metadata: Metadata = {
  title: 'hueneu | Where stories find their aesthetic.',
  description: 'hueneu is a graphic design studio creating designs that whisper loud stories. We specialize in branding, packaging, social media, stationery, and creative projects.',
  keywords: ['graphic design', 'branding', 'packaging', 'social media', 'stationery', 'creative projects', 'hueneu', 'design studio', 'storytelling design'],
  authors: [{ name: 'hueneu Studio' }],
  creator: 'hueneu Studio',
  // Open Graph and Twitter card metadata can be added here for better social sharing
  // openGraph: {
  //   title: 'hueneu | Where stories find their aesthetic.',
  //   description: 'Designs that whisper loud stories.',
  //   url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9000',
  //   siteName: 'hueneu Studio',
  //   images: [
  //     {
  //       url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9000'}/og-image.png`, // Create and add an OG image
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: 'en_US',
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'hueneu | Where stories find their aesthetic.',
  //   description: 'Designs that whisper loud stories.',
  //   creator: '@hueneu_',
  //   images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9000'}/twitter-image.png`], // Create and add a Twitter image
  // },
};

/**
 * RootLayout component for the application.
 * This component wraps all pages and defines the global HTML structure.
 * It applies global styles, fonts, and metadata.
 *
 * @param {Readonly<{ children: React.ReactNode }>} props - Component props.
 * @param {React.ReactNode} props.children - Child components to be rendered within the layout.
 * @returns {JSX.Element} The root layout structure.
 */
export default function RootLayout({
  children,
}: Readonly<{ // Props for the RootLayout component
  children: React.ReactNode; // Children elements to be rendered within this layout
}>): JSX.Element {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      {/* 
        The <html> element sets the language to English.
        It applies CSS variables for Inter and Poppins fonts for global access.
        'scroll-smooth' enables smooth scrolling behavior across the site.
      */}
      <body className="bg-softOffWhite text-nearBlack antialiased">
        {/* 
          The <body> element applies:
          - Default background color: 'bg-softOffWhite' (custom theme color).
          - Default text color: 'text-nearBlack' (custom theme color).
          - 'antialiased' for smoother font rendering.
        */}
        {children} {/* Renders the active page content */}
      </body>
    </html>
  );
}
