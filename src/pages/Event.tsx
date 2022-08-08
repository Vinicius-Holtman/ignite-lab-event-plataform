import { gql, useQuery } from '@apollo/client'
import { Header } from '../components/Header';
import { Lesson } from '../components/Lesson';
import { PlayerVideo } from '../components/PlayerVideo';
import { Sidebar } from '../components/Sidebar';


export function Event() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      
      <main className='flex flex-1'>
        <PlayerVideo />
        <Sidebar />
      </main>

      <Lesson />
    </div>
  )
}