import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Muhammad Fahad - Product Engineer | AI & Full-Stack Developer',
  description:
    'Portfolio of Muhammad Fahad, a Computer Science student and product-focused developer building full-stack applications and AI-powered products.',
  keywords: [
    'Muhammad Fahad',
    'Product Engineer',
    'AI Developer',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'Python',
    'FastAPI',
  ],
  authors: [{ name: 'Muhammad Fahad' }],
  openGraph: {
    title: 'Muhammad Fahad — Product Engineer | AI & Full-Stack Developer',
    description:
      'Portfolio of Muhammad Fahad, a Computer Science student and product-focused developer building full-stack applications and AI-powered products.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Fahad — Product Engineer | AI & Full-Stack Developer',
    description:
      'Portfolio of Muhammad Fahad, a Computer Science student and product-focused developer building full-stack applications and AI-powered products.',
  },
};

export default function RootLayout({ children }) {
  const themeScript = `(function(){try{var t=localStorage.theme;if(t==='light')document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark')}catch(e){}})()`;

  return (
    <html lang="en" className={`scroll-smooth dark ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${outfit.className} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}
