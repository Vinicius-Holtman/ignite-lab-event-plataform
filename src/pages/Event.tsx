import { gql, useQuery } from '@apollo/client'
import { Header } from '../components/Header';
import { Lesson } from '../components/Lesson';
import { PlayerVideo } from '../components/PlayerVideo';
import { Sidebar } from '../components/Sidebar';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

export function Event() {
  const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY)

  return (
    <>
      <Header />
        
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>

      <PlayerVideo />
      <Sidebar />
      <Lesson />
    </>
  )
}