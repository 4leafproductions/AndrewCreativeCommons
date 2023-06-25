'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Tourbox from './tourbox/tourbox'
import Viewer from './viewer/viewer'
import Library from './library/library'
import Banner from './banner/banner'
import { Cinzel } from 'next/font/google'
import Tourswitch from './tourswitch/tourswitch'
import { useState } from 'react';

const cinzel = Cinzel({ weight: '500',subsets: ['latin'] });
const linkedin = 'https://www.linkedin.com/in/andrew-fowler-99a2468a/';
export default function Home() {
  const [isTourMode, setIsTourMode] = useState(false);
  const [activeBook, setActiveBook] = useState('Frankenstein');
  function tourMode(event: any){
    console.log('tour switch event: ',event.target.checked);
    setIsTourMode(event.target.checked);
  }

  function pickBook(key: any){
    setActiveBook(key);
    console.log('something got clicked',key);
  }

  return (
    <main className={styles.main}>
      <Tourbox tourMode={isTourMode} tourText = "Thanks for turning on the Technical Tour! I want this site to demonstrate both my technical and communication skills, so I created a Tourbox component to wrap all the features I'm happy with. When Technical Tour mode is on, mousing over any of these features will display some insightful text about what it does or how it was created. The Tourbox component works by accepting child components as a property and wrapping them in the tour components before React parses the JSX onto the page.">
        <Tourswitch tourMode={tourMode}/>
      </Tourbox>
      
      <Banner></Banner>
      <Tourbox tourMode={isTourMode} tourText = "This is the header for site. The bookshelf image is from my living room -- shot on a Nikon Z6 and edited in Adobe Photoshop to give a subdued background feel. The font is Cinzel from Google.">
        <div className={styles.description}>
          <h1 className={cinzel.className}>Andrew&apos;s Creative Commons Library</h1>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built with React and{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={80}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
      </Tourbox>

      <Tourbox tourMode={isTourMode} tourText = "This is the embedded PDF Viewer. The Viewer component accepts a property called file. Passing this property the name of any PDF switches the iframe viewer contents to that file.">
        <Viewer tourMode={isTourMode} file={activeBook}></Viewer>
      </Tourbox>

      <Tourbox tourMode={isTourMode} tourText = "These links will open a new tab and provide some additional insight on myself, as well as the technology used to build this application.">
        <div className={styles.grid}>
          
          <a
            href={linkedin}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              LinkedIn <span>-&gt;</span>
            </h2>
            <p>For more information about my skillset or to reach out, take a look at my profile on LinkedIn.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Next.js <span>-&gt;</span>
            </h2>
            <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://firebase.google.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Firebase <span>-&gt;</span>
            </h2>
            <p>
              This web application is built on React and Next, and deployed with Google Firebase.
            </p>
          </a>
        </div>
      </Tourbox>
    </main>
  )
}
