import logovite from '../../public/vite.svg'
import logoreact from '../assets/react.svg'
import CountButtonComponent from './CountButtonComponent';


function MyBody() {
  
  return (
   <body>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={logovite} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={logoreact} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CountButtonComponent nameButton = "Clicca e aumenta" operator = {1}/>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </body>
  )
  
}

export default MyBody;
