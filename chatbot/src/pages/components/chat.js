import * as React from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:5001')


export default function Chat() {
  // styles -komen nog

    // connecting with server
    React.useEffect(() => {

        socket.on('message', async (message, callback) => {
          console.log(message)
        })
      }, [])

  //mic on and off
  const [isActive, setIsActive] = React.useState(false)



  //add message
  const htmlElementUl = React.useRef(null)                
  function AddMessage (role, transcript) {
    let htmlElementLi = document.createElement("li")         
    let htmlElementP = document.createElement("p")       
    
    htmlElementLi.classList.add(role) 
    htmlElementP.textContent = transcript                
    htmlElementUl.current.appendChild(htmlElementLi)                
    htmlElementLi.appendChild(htmlElementP)                        
    htmlElementUl.scrollTop = htmlElementUl.scrollHeight           
  }


    return (
        <main>
            <button title='microphone' onClick={ micOnOff () } className={isActive ? "active" : "notActive"}> 
                <svg width="45" height="75" viewBox="0 0 62 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.6995 0.871745L28.7185 0.867058L28.737 0.860906C29.1477 0.724569 29.566 0.618134 29.989 0.542224C31.3619 0.408052 32.746 0.594416 34.0508 1.09034C35.3619 1.58862 36.5652 2.38886 37.5793 3.4411C38.5935 4.49348 39.3949 5.77359 39.9277 7.19785C40.4606 8.62215 40.7119 10.1562 40.664 11.6975L40.6638 11.7053V11.7131V34.3665C40.6638 37.2522 39.6194 40.0114 37.7729 42.039C35.9278 44.065 33.436 45.1932 30.8488 45.1932C28.2616 45.1932 25.7697 44.065 23.9247 42.039C22.0782 40.0114 21.0338 37.2522 21.0338 34.3665V11.7131H21.0339L21.0337 11.7019C20.9777 9.18727 21.7175 6.73392 23.12 4.75959C24.5218 2.78602 26.4958 1.4167 28.6995 0.871745ZM0.507014 28.7031V28.6912L0.50645 28.6794C0.452405 27.5424 0.739224 26.4208 1.31772 25.4866C1.87946 24.5795 2.6833 23.9015 3.60595 23.5398H3.7204H3.73689L3.75334 23.5387C3.93752 23.5265 4.12219 23.5265 4.30637 23.5387L4.3727 23.5431L4.43787 23.53C5.10878 23.395 5.79845 23.4252 6.45826 23.6187C7.11829 23.8122 7.73482 24.1652 8.26215 24.656C8.78965 25.1469 9.21458 25.7632 9.50335 26.4625C9.79214 27.1619 9.93668 27.9248 9.92519 28.6957L9.92514 28.6957V28.7031V34.3665C9.92514 47.1702 19.2863 57.5199 31.0551 57.5199C42.8238 57.5199 52.185 47.1702 52.185 34.3665V28.7031C52.185 27.3194 52.686 26.0007 53.5653 25.0352C54.4431 24.0712 55.6232 23.5398 56.8425 23.5398C58.0619 23.5398 59.2419 24.0712 60.1197 25.0352C60.999 26.0007 61.5 27.3194 61.5 28.7031V34.3665C61.5 50.913 50.4056 64.5055 36.1207 67.1755L35.7126 67.2518V67.667V79.6733V80.1733H36.2126H41.3701C46.5746 80.1733 50.935 84.7354 51.1747 90.5H10.8324C11.072 84.7354 15.4325 80.1733 20.637 80.1733H25.7944H26.2944V79.6733V67.667V67.2549L25.89 67.1762C11.5992 64.3938 0.507014 50.91 0.507014 34.3665V28.7031Z" fill="black" stroke="black"/>
                </svg>
            </button>
            <section>
                <ul ref={htmlElementUl}>
                <li className='bot'><p>Hello how can I help you today?</p></li>
                </ul>
            </section>
        </main>
    )
}

export function Head() {
  return (
    <>
      <html lang="en" />
      <title>Chatbot</title>
    </>
  )
}
