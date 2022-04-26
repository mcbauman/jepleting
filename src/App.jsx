import { useContext } from "react"
import Nav from "./Nav"
import {Routes,Route} from "react-router-dom"
import Page1 from "./pages/Page1.jsx"
import CV from "./pages/CV.jsx"
import Projects from "./pages/Projects.jsx"
import LogIn from "./pages/LogIn.jsx"
import SignIn from "./pages/SignIn.jsx"
import {Context} from "./context/langContext.js"

export default function App(){
    const {lang}=useContext(Context)
    return(
            <div className="mainWrapper"  id={lang}>
                <Nav/>
                <Routes>
                    <Route path="main/page1" element={<Page1/>}></Route>
                    <Route path="/" element={<CV/>}></Route>
                    <Route path="main/projects" element={<Projects/>}></Route>
                    <Route path="main/logIn" element={<LogIn/>}></Route>
                    <Route path="main/signIn" element={<SignIn/>}></Route>
                </Routes>
            </div>
    )
}