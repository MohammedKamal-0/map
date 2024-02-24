
import { Inter } from 'next/font/google'
import './globals.css'
import SlideMenu from './Components/slideMenu/slideMenu'
import SliedUp from './Components/sildeUp/sliedUp'
import Map from './Components/map/Map'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'University Map',
  description: 'Application Development for the University of Baghdad Campus Navigation and Information Organization',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>



        <SlideMenu />
        <Map />
        <SliedUp />



        {children}
      </body>
    </html>
  )
}
