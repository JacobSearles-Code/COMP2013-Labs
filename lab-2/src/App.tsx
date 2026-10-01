import './App.css'
import listings from "../src/data/data.ts"
import ResortContainer from "./pages/resortcontainer.tsx";

function App() {

  return (
    <div>
      <header>
        <h1>Resorts Lite</h1>
      </header>
        <ResortContainer listing={listings}/>
    </div>
  )
}
// ★
export default App
