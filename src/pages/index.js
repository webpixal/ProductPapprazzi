import Image from 'next/image'
import {Fira_Sans_Extra_Condensed} from 'next/font/google'
import Home from './Home/Home'

const OpenSans = Fira_Sans_Extra_Condensed({ 
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900']
 })

function App() {
  return (
    <main className={OpenSans.className}>
        <Home/>

    </main>
    )
}
export default App 
