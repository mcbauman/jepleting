import { useContext } from "react"
import { NavLink } from "react-router-dom"
import trans from "./components/lang"
import {Context} from "./context/langContext.js"

export default function Header(){

    const {lang,setLang}=useContext(Context)
    return(
        <nav>
            <div>
                <NavLink to="/main/page1">{trans[lang].page1}</NavLink>
                <NavLink to="/">{trans[lang].page2}</NavLink>
                <NavLink to="/main/logIn">{trans[lang].logIn}</NavLink>
                <NavLink to="/main/signIn">{trans[lang].signIn}</NavLink>
            </div>
            <select onChange={(e)=>setLang(e.target.value)}name="lang" id="lang">
                <option value="en">🇬🇧</option>
                <option value="de">🇩🇪</option>
                <option value="ke">🇰🇪</option>
            </select>
        </nav>
    )
}