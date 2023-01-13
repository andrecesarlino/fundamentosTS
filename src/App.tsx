import { Header } from "./components/Header";
import { Post } from "./components/Post";

import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andrecesarlino.png',
      name: 'Andre Cesar Lino',
      role: 'Web Dev'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '<a href="#">jane.design/doctorcare</a>'},      
    ],
    publishedAt: new Date('2022-05-03 20:02:01'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/andrecesarlino.png',
      name: 'Pedro Lino',
      role: 'Não sei'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '<a href="#">jane.design/doctorcare</a>'},      
    ],
    publishedAt: new Date('2022-10-03 20:02:01'),
  },

];

export function App() {
  return (
    <div>

      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
            
          })}
        </main>
      </div>

    </div>
  )
}


