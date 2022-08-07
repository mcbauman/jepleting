import { useContext } from "react"
import { NavLink } from "react-router-dom"
import trans from "./components/lang"
import {Context} from "./context/langContext.js"

export default function Header(){

    const {lang,setLang}=useContext(Context)
    return(
        <header>
            {/* <nav>
                <div>
                    <NavLink to="/main/page1">{trans[lang].page1}</NavLink>
                    <NavLink to="/">{trans[lang].page2}</NavLink>
                    <NavLink to="main/projects">{trans[lang].proj}</NavLink>
                    <NavLink to="/main/logIn">{trans[lang].logIn}</NavLink>
                    <NavLink to="/main/signIn">{trans[lang].signIn}</NavLink>
                </div>
            </nav> */}
            <h1>Matthias Baumann</h1>
            <h1>Web-Developer</h1>
            <select onChange={(e)=>setLang(e.target.value)}name="lang" id="lang">
                <option value="en">🇬🇧</option>
                <option value="de">🇩🇪</option>
                <option value="ke">🇰🇪</option>
            </select>
        </header>


    )
}