import trans from "../components/lang"
import {Context} from "../context/langContext.js"
import { useContext } from "react"


export default function Page1(){
    const {lang}=useContext(Context)
    return(
        <>
            <header>
                <h1>Matthias Baumann</h1>
                <h2>Web-Developer</h2>
            </header>
            <aside>
                <h3>{trans[lang].underConst}</h3>
            </aside>
            <main>
                <table>
                    <tr>
                        <th>steps</th>
                        <th>status</th>
                        <th>date</th>
                        <th>used</th>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>Lebenslauf erstellt</td>
                        <td>24.04.2022</td>
                        <td>FontAwesome, html, css</td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>elementare Backendfuntionen</td>
                        <td>24.04.2022</td>
                        <td>Express(),Mongoose.Schema(), .env</td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>Mongoo Datenbank</td>
                        <td>24.04.2022</td>
                        <td>MongoDB Compass, cloud-host</td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>Grundlegendes Frontend</td>
                        <td>25.04.2022</td>
                        <td>React, Node-js, </td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>Übersetzung English/Deutsch</td>
                        <td>25.04.2022</td>
                        <td>useContext</td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>Basis-Styling</td>
                        <td>26.04.2022</td>
                        <td>css, scss</td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>Website geht online</td>
                        <td>26.04.2022</td>
                        <td>Ionos, Netlify</td>
                    </tr>
                    <tr>
                        <td>⚠️</td>
                        <td>Domain zuweisen</td>
                        <td>26.04.2022</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>⚠️</td>
                        <td>Routing verbessern</td>
                        <td>26.04.2022</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>⚠️</td>
                        <td>BackEnd online bringen</td>
                        <td>27.04.2022</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>⚠️</td>
                        <td>Responsivness</td>
                        <td>27.04.2022</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>❓</td>
                        <td>Wetter oder Maps</td>
                        <td>01.05.2022</td>
                        <td>API</td>
                    </tr>
                    <tr>
                        <td>❓</td>
                        <td>Landing Page</td>
                        <td>01.05.2022</td>
                        <td>CSS-Animations</td>
                    </tr>
                </table>
            </main>
        </>
    )
}