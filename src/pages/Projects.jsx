import trans from "../components/lang"
import {Context} from "../context/langContext.js"
import { useContext, useState } from "react"
import {FaGithub,FaFirefox} from "react-icons/fa"

export default function Projects(){
    const {lang,loggedIn,setLoggedIn}=useContext(Context)
    return(
        <>
            <header>
                <h1>{trans[lang].projects}</h1>
            </header>
            <aside>
                <h3>{trans[lang].underConst}</h3>
            </aside>
            <main>
                <table>
                    <tbody>
                    <tr>
                        <td>{trans[lang].kniffel}</td>
                        <td>{trans[lang].kniffelText}</td>
                        <td><a href="http://github.com/mcbauman/kniffel" target="_blank" rel="noopener noreferrer"><FaGithub/></a></td>
                        <td><a href="http://mcbauman.github.io/kniffel/" target="_blank" rel="noopener noreferrer"><FaFirefox/></a></td>
                    </tr>
                    <tr>
                        <td>fahrradfreunde.de</td>
                        <td>{trans[lang].ffText}</td>
                        <td><a href="https://github.com/mcbauman/fahrradfreunde" target="_blank" rel="noopener noreferrer"><FaGithub/></a></td>
                        <td><a href="https://mcbauman.github.io/fahrradfreunde/" target="_blank" rel="noopener noreferrer"><FaFirefox/></a></td>
                    </tr>
                    <tr>
                        <td>{trans[lang].example}</td>
                        <td>{trans[lang].exampleText}</td>
                        <td><a href="https://github.com/mcbauman/TutoringUseEffect" target="_blank" rel="noopener noreferrer"><FaGithub/></a></td>
                    </tr>
                    <tr>
                        <td>{trans[lang].repFront}</td>
                        <td>{trans[lang].repFrontText}</td>
                        <td><a href="https://github.com/mcbauman/react-repeating-Forlage" target="_blank" rel="noopener noreferrer"><FaGithub/></a></td>
                        <td><a href="https://classy-youtiao-acda1b.netlify.app" target="_blank" rel="noopener noreferrer"> <FaFirefox/> </a></td>
                    </tr>
                    <tr>
                        <td>Aviation-Weather</td>
                        <td>Groupwork Project</td>
                        <td><a href="https://github.com/mcbauman/weather_Groupwork" target="_blank" rel="noopener noreferrer"> <FaGithub/> </a></td>
                        <td><a href="http://sleepy-sierra-90704.herokuapp.com" target="_blank" rel="noopener noreferrer"> <FaFirefox/></a></td>
                    </tr>
                    <tr>
                        <td>Full Stack</td>
                        <td>{trans[lang].mernText}</td>
                        <td><a href="https://github.com/mcbauman/secondFullStack" target="_blank" rel="noopener noreferrer"><FaGithub/></a></td>
                    </tr>
                    <tr>
                        <td>{trans[lang].this}</td>
                        <td>Frontend</td>
                        <td><a href="https://github.com/mcbauman/jepleting" target="_blank" rel="noopener noreferrer"><FaGithub/></a></td>
                    </tr>

                    <tr>
                        <td>{trans[lang].this}</td>
                        <td>Backend</td>
                        <td><a href="https://github.com/mcbauman/jepleting-Server" target="_blank" rel="noopener noreferrer"><FaGithub/></a></td>
                    </tr>
                    </tbody>
                </table>
            </main>
        </>
    )
}