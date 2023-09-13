import NavBar from '@/components/NavBar/NavBar'
import './globals.css'
import {Roboto} from "next/font/google"

export const metadata = {
  title: 'PT AUCO',
  description: 'Prueba técnica AUCO',
  author: 'Laura Machetá'
}
const roboto = Roboto({
  weight: ["300","400", "500"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={roboto.className}>
      <NavBar />
      <div className="flex justify-center items-center mt-20 flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </body>
  </html>
  )
}
