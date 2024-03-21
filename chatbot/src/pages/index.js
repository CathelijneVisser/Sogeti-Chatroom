// import/export
import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'

import Chat from "./components/chat.js"


const IndexPage = ({location}) => {
  //styling cssInJs
  const layout = {
    justifyContent: "space-between",
    // 'font-size': `${location.state.fontSize}rem`,
  }

  //html
  return (
    <body style={layout}>
      <Chat></Chat>   
      <section>
        <Link to='/info' title='go to extra info' > 
          <svg width="40" height="75" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45 0C36.75 0 30 6.75 30 15C30 23.25 36.75 30 45 30C53.25 30 60 23.25 60 15C60 6.75 53.25 0 45 0ZM22.5 37.5C10.05 37.5 0 47.55 0 60H15C15 55.8 18.3 52.5 22.5 52.5C26.7 52.5 30 55.8 30 60C30 64.2 15 84.6 15 97.5C15 110.4 25.05 120 37.5 120C49.95 120 60 109.95 60 97.5H45C45 101.7 41.7 105 37.5 105C33.3 105 30 101.7 30 97.5C30 92.1 45 69.9 45 60C45 47.85 34.95 37.5 22.5 37.5Z" fill="black"/>
          </svg>
        </Link>
        <Link to="/settings" title="go to settings">
          <svg width="75" height="75" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.7656 0L37.5312 14.8379C36.2843 15.212 35.1621 15.8354 34.0399 16.4589L19.202 10.2244L10.2244 19.202L16.4589 34.0399C15.8354 35.2868 15.3367 36.2843 14.8379 37.5312L0 43.7656V56.2344L14.8379 62.4688C15.3367 63.7157 15.8354 64.7132 16.4589 65.9601L10.2244 80.798L19.202 89.7756L34.0399 83.5411C35.1621 84.0399 36.2843 84.6633 37.5312 85.1621L43.7656 100H56.2344L62.4688 85.1621C63.591 84.6633 64.8379 84.1646 65.9601 83.5411L80.798 89.7756L89.7756 80.798L83.5411 65.9601C84.0399 64.8379 84.6633 63.591 85.1621 62.4688L100 56.2344V43.7656L85.1621 37.5312C84.788 36.409 84.1646 35.1621 83.5411 34.0399L89.7756 19.202L80.798 10.2244L65.9601 16.4589C64.8379 15.9601 63.591 15.3367 62.4688 14.8379L56.2344 0L43.7656 0ZM50 31.1721C60.3491 31.1721 68.7032 39.5262 68.7032 49.8753C68.7032 60.2244 60.3491 68.5786 50 68.5786C39.6509 68.5786 31.2968 60.2244 31.2968 49.8753C31.2968 39.5262 39.6509 31.1721 50 31.1721Z" />
          </svg>
        </Link>
      </section>

    </body>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage