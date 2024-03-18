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
  
  //js
  //socket.io


  //mic on and off
  // const [isActive, setIsActive] = React.useState(false)
  
  // function micOnOff () {
  //   if (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition) {
  //     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
  //     recognition.lang = 'en-US'
  //     recognition.start()
  //     recognition.onstart = () => {
  //       setIsActive(current => !current)
  //       console.log("recording started")
  //     }
  //     recognition.onresult = (event) => {
  //       const transcript = event.results[0][0].transcript
  //       console.log(transcript)
  //       AddMessage("dd", transcript)
  //     }
  //     recognition.onend = () => {
  //       setIsActive(current => !current)
  //       console.log("recording has ended")
  //     }
  //   } else {
  //     console.log("speech recognition not supported")
  //   }
  // }
  
  // //add message
  // const dl = React.useRef(null)   //dl aanroepen
  // function AddMessage (dd, transcript) {
  //   dd = document.createElement(dd)
  //   var p = document.createElement("p")
    
  //   p.textContent = transcript
  //   dl.current.appendChild(dd)
  //   dd.appendChild(p)
  //   dl.scrollTop = dl.scrollHeight
  // }



  //html
  return (
    <body style={layout}>
      
    
    
            {/* <button onClick={() => micOnOff () } className={isActive ? "active" : "notActive"}> 
                <svg width="45" height="75" viewBox="0 0 62 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.6995 0.871745L28.7185 0.867058L28.737 0.860906C29.1477 0.724569 29.566 0.618134 29.989 0.542224C31.3619 0.408052 32.746 0.594416 34.0508 1.09034C35.3619 1.58862 36.5652 2.38886 37.5793 3.4411C38.5935 4.49348 39.3949 5.77359 39.9277 7.19785C40.4606 8.62215 40.7119 10.1562 40.664 11.6975L40.6638 11.7053V11.7131V34.3665C40.6638 37.2522 39.6194 40.0114 37.7729 42.039C35.9278 44.065 33.436 45.1932 30.8488 45.1932C28.2616 45.1932 25.7697 44.065 23.9247 42.039C22.0782 40.0114 21.0338 37.2522 21.0338 34.3665V11.7131H21.0339L21.0337 11.7019C20.9777 9.18727 21.7175 6.73392 23.12 4.75959C24.5218 2.78602 26.4958 1.4167 28.6995 0.871745ZM0.507014 28.7031V28.6912L0.50645 28.6794C0.452405 27.5424 0.739224 26.4208 1.31772 25.4866C1.87946 24.5795 2.6833 23.9015 3.60595 23.5398H3.7204H3.73689L3.75334 23.5387C3.93752 23.5265 4.12219 23.5265 4.30637 23.5387L4.3727 23.5431L4.43787 23.53C5.10878 23.395 5.79845 23.4252 6.45826 23.6187C7.11829 23.8122 7.73482 24.1652 8.26215 24.656C8.78965 25.1469 9.21458 25.7632 9.50335 26.4625C9.79214 27.1619 9.93668 27.9248 9.92519 28.6957L9.92514 28.6957V28.7031V34.3665C9.92514 47.1702 19.2863 57.5199 31.0551 57.5199C42.8238 57.5199 52.185 47.1702 52.185 34.3665V28.7031C52.185 27.3194 52.686 26.0007 53.5653 25.0352C54.4431 24.0712 55.6232 23.5398 56.8425 23.5398C58.0619 23.5398 59.2419 24.0712 60.1197 25.0352C60.999 26.0007 61.5 27.3194 61.5 28.7031V34.3665C61.5 50.913 50.4056 64.5055 36.1207 67.1755L35.7126 67.2518V67.667V79.6733V80.1733H36.2126H41.3701C46.5746 80.1733 50.935 84.7354 51.1747 90.5H10.8324C11.072 84.7354 15.4325 80.1733 20.637 80.1733H25.7944H26.2944V79.6733V67.667V67.2549L25.89 67.1762C11.5992 64.3938 0.507014 50.91 0.507014 34.3665V28.7031Z" fill="black" stroke="black"/>
                </svg>
            </button> 
            <section>
                <dl ref={dl}>
                <dt><p>Hello how can I help you today?</p></dt>
                </dl>
            </section> */}
            <Chat></Chat>
        
      <section>
        <Link to='/info' title='go to extra info' > 
          <svg width="40" height="75" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45 0C36.75 0 30 6.75 30 15C30 23.25 36.75 30 45 30C53.25 30 60 23.25 60 15C60 6.75 53.25 0 45 0ZM22.5 37.5C10.05 37.5 0 47.55 0 60H15C15 55.8 18.3 52.5 22.5 52.5C26.7 52.5 30 55.8 30 60C30 64.2 15 84.6 15 97.5C15 110.4 25.05 120 37.5 120C49.95 120 60 109.95 60 97.5H45C45 101.7 41.7 105 37.5 105C33.3 105 30 101.7 30 97.5C30 92.1 45 69.9 45 60C45 47.85 34.95 37.5 22.5 37.5Z" fill="black"/>
          </svg>
        </Link>
        <Link to="/settings" title="go to settings">
          <svg width="75" height="75" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.7656 0L37.5312 14.8379C36.2843 15.212 35.1621 15.8354 34.0399 16.4589L19.202 10.2244L10.2244 19.202L16.4589 34.0399C15.8354 35.2868 15.3367 36.2843 14.8379 37.5312L0 43.7656V56.2344L14.8379 62.4688C15.3367 63.7157 15.8354 64.7132 16.4589 65.9601L10.2244 80.798L19.202 89.7756L34.0399 83.5411C35.1621 84.0399 36.2843 84.6633 37.5312 85.1621L43.7656 100H56.2344L62.4688 85.1621C63.591 84.6633 64.8379 84.1646 65.9601 83.5411L80.798 89.7756L89.7756 80.798L83.5411 65.9601C84.0399 64.8379 84.6633 63.591 85.1621 62.4688L100 56.2344V43.7656L85.1621 37.5312C84.788 36.409 84.1646 35.1621 83.5411 34.0399L89.7756 19.202L80.798 10.2244L65.9601 16.4589C64.8379 15.9601 63.591 15.3367 62.4688 14.8379L56.2344 0L43.7656 0ZM50 31.1721C60.3491 31.1721 68.7032 39.5262 68.7032 49.8753C68.7032 60.2244 60.3491 68.5786 50 68.5786C39.6509 68.5786 31.2968 60.2244 31.2968 49.8753C31.2968 39.5262 39.6509 31.1721 50 31.1721Z" fill="white"/>
          </svg>
        </Link>
      </section>

    </body>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage