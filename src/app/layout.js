import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hajar BENDHIBA',
  description: 'I am Hajar BENDHIBA, a passionate full-stack web developer specializing in building interactive and responsive applications.',
  keywords: 'web development, full-stack developer, JavaScript, React, Node.js, MongoDB, Tailwind CSS, Hajar BENDHIBA, BENDHIBA, bendhiba, hajar, HAJAR, ben dhiba, bendheba, bndhiba',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./images/icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
