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
                        <th></th>
                        <th>{trans[lang].status}</th>
                        <th>{trans[lang].used}</th>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>{trans[lang].cv}</td>
                        <td>FontAwesome, html, css</td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>{trans[lang].backE}</td>
                        <td>Express(),Mongoose.Schema(), .env</td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>{trans[lang].mongo}</td>
                        <td>MongoDB Compass, cloud-host</td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>{trans[lang].frontend}</td>
                        <td>React, Node-js, </td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>{trans[lang].tranlations}</td>
                        <td>useContext</td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>{trans[lang].styling}</td>
                        <td>css, scss</td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>{trans[lang].deploy}</td>
                        <td>Ionos, Netlify</td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>{trans[lang].routes}</td>
                        <td>Github</td>
                    </tr>
                    <tr>
                        <td>⚠️</td>
                        <td>{trans[lang].domain}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>{trans[lang].routing}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>⚠️</td>
                        <td>{trans[lang].backend}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>✅</td>
                        <td>{trans[lang].response}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>❓</td>
                        <td>{trans[lang].api}</td>
                        <td>API</td>
                    </tr>
                    <tr>
                        <td>❓</td>
                        <td>{trans[lang].landing}</td>
                        <td>CSS-Animations</td>
                    </tr>
                </table>
            </main>
        </>
    )
}