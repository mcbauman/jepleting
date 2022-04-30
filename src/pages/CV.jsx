import transl from "../components/transl.js"
import {Context} from "../context/langContext.js"
import { useContext } from "react"
import {FaHtml5,FaCss3, FaJs, FaNodeJs, FaReact, FaCamera, FaHeart, FaRunning, FaSwimmer, FaPhone, FaAt, FaFirefox, FaGithub, FaEnvelope } from "react-icons/fa"
import {IoBicycle} from "react-icons/io5"
import {MdFamilyRestroom} from "react-icons/md"
import walp from "./Walp2.jpg"

export default function Page2(){
    const {lang}=useContext(Context)
    return(
        <>
            <header>
                <h1>Matthias Baumann</h1>
                <h2>Web-Developer</h2>
            </header>
            <aside>
            <img src={walp} alt=""/>
                <article>
                    <h3>{transl[lang].resume}</h3>
                    <p>{transl[lang].resumeText}</p>
                </article>
                <article>
                    <h3>{transl[lang].skills}</h3>
                    <table>
                        <tbody>
                        <tr>
                            <th><FaHtml5/></th>
                            <td>html</td>
                        </tr>
                        <tr>
                            <th><FaCss3/></th>
                            <td>css</td>
                        </tr>
                        <tr>
                            <th><FaJs/></th>
                            <td>JavaScript</td>
                        </tr>
                        <tr>
                            <th><FaNodeJs/></th>
                            <td>node-js</td>
                        </tr>
                        <tr>
                            <th><FaReact/></th>
                            <td>React</td>
                        </tr>
                        </tbody>
                    </table>
                </article>
                <article>
                    <h3>{transl[lang].language}</h3>
                    <table>
                    <tbody>
                        <tr>
                            <td>{transl[lang].deutsch}</td>
                            <td>{transl[lang].motherTounge}</td>
                        </tr>
                        <tr>
                            <td>{transl[lang].english}</td>
                            <td>B2</td>
                        </tr>
                        <tr>
                            <td>{transl[lang].russisch}</td>
                            <td>A1</td>
                        </tr>
                    </tbody>
                </table>
                </article>
                <article>
                    <h3>Hobbys</h3>
                    <IoBicycle/>
                    <FaRunning/>
                    <FaSwimmer/>
                    <FaCamera/>
                    <MdFamilyRestroom/>
                </article>
                <article>
                <h3>{transl[lang].contact}</h3>
                <table>
                    <tbody>
                    <tr>
                        <th><FaPhone/></th>
                        <td><a href="tel:+491732030404">+491732030404</a></td>
                    </tr>
                    <tr>
                        <th><FaAt/></th>
                        <td><a href="mailto:matthias@jepleting.de">matthias@jepleting.de</a></td>
                    </tr>
                    <tr>
                        <th><FaFirefox/></th>
                        <td><a href="http://">www.jepleting.de</a></td>
                    </tr>
                    <tr>
                        <th><FaGithub/></th>
                        <td><a href="https://github.com/mcbauman">https://github.com/<br/>mcbauman</a> </td>
                    </tr>
                    <tr>
                        <th><FaEnvelope/></th>
                        <td>Skandinavienalle 2,<br />25479 Ellerau</td>
                    </tr>
                    </tbody>
                </table>
                </article>
            </aside>
            <main>
                <article>
                    <h3>{transl[lang].ausbildung}</h3>
                    <section>
                        <h4>{transl[lang].kurs}</h4>
                        <div>
                            <h5>DCI Digital Career Institute gGmbH (remote)</h5>
                            <h5>09.2021-09.2022</h5>
                        </div>
                    <ul>
                        <li>{transl[lang].kursText1}</li>
                        <li>{transl[lang].kursText2}</li>
                        <li>{transl[lang].kursText3}</li>
                    </ul>
                    </section>
                    <section>
                        <h4>{transl[lang].blw}</h4>
                        <div>
                            <h5>Universität Hamburg</h5>
                            <h5>09.2007-09.2010</h5>
                        </div>
                    </section>
                    <section>
                        <h4>{transl[lang].aublildungBKM}</h4>
                        <div>
                            <h5>Hamburger Sparkasse (Haspa) AG</h5>
                            <h5>08.2004-06.2006</h5>
                        </div>
                    </section>
                </article>
                <article>
                    <h3>{transl[lang].beruflicheErfahrungen}</h3>
                    <section>
                        <h4>Projekte DCI</h4>
                        <div>
                            <h5>remote</h5>
                            <h5>09.2021-09.2022</h5>
                        </div>
                    </section>
                    <section>
                        <h4>{transl[lang].selbststudium}</h4>
                        <div>
                            <h5>remote</h5>
                            <h5>04.2021-05.2021</h5>
                        </div>
                        <ul>
                            <li>{transl[lang].lernpojekt} fahrradfreunde.de<a href="http://github.com/mcbauman/kniffel" target="_blank" rel="noopener noreferrer"> <FaGithub/> </a><a href="http://mcbauman.github.io/kniffel/" target="_blank" rel="noopener noreferrer"> <FaFirefox/> </a></li>
                            <li>{transl[lang].lernpojekt} Kniffel<a href="https://github.com/mcbauman/fahrradfreunde" target="_blank" rel="noopener noreferrer"> <FaGithub/> </a><a href="https://mcbauman.github.io/fahrradfreunde/" target="_blank" rel="noopener noreferrer"> <FaFirefox/> </a></li>
                        </ul>
                    </section>
                    <section>
                        <h4>{transl[lang].sos}</h4>
                        <div>
                            <h5>SOS-Kinderdorf Harksheide e.V. (Norderstedt)</h5>
                            <h5>08.2020-07.2021 bis</h5>
                        </div>
                        <ul>
                            <li>{transl[lang].sosText}</li>
                        </ul>
                    </section>
                    <section>
                        <h4>{transl[lang].audibene}</h4>
                        <div>
                            <h5>Audibene (remote)</h5>
                            <h5>04.2020-07.2020</h5>
                        </div>
                        <ul>
                            <li>{transl[lang].audibeneText}</li>
                        </ul>
                    </section>
                    <section>
                        <h4>{transl[lang].dittmer}</h4>
                        <div>
                            <h5>Mobilfunk Dittmer GmbH (Bad Bramstedt)</h5>
                            <h5>02.2017-03.2020</h5>
                        </div>
                        <ul>
                            <li>{transl[lang].dittmerText1}</li>
                            <li>{transl[lang].dittmerText2}</li>
                        </ul>
                    </section>
                    <section>
                        <h4>{transl[lang].dittmerIZ}</h4>
                        <div>
                            <h5>Mobilfunk Dittmer GmbH (Itzehoe)</h5>
                            <h5>07.2016-01.2017</h5>
                        </div>
                        <ul>
                            <li>{transl[lang].dittmerIZText}</li>
                        </ul>
                    </section>
                    {/* <section>
                        <h4>{transl[lang].mediaMarkt}</h4>
                        <div>
                            <h5>MediaMarkt Hamburg-Altona</h5>
                            <h5>11.2015-06.2016</h5>
                        </div>
                        <ul>
                            <li>{transl[lang].mediaMarktText}</li>
                        </ul>
                    </section>
                    <section>
                        <h4>{transl[lang].lbs}</h4>
                        <div>
                            <h5>LBS Pinneberg</h5>
                            <h5>03.2014-03.2015</h5>
                        </div>
                        <ul>
                            <li>{transl[lang].lbsText}</li>
                            <li>{transl[lang].lbsText2}</li>
                        </ul>
                    </section> */}
                    <section>
                        <h4>{transl[lang].spk}</h4>
                        <div>
                            <h5>LBS/Sparkasse Elmshorn</h5>
                            <h5>10.2010-02.2014</h5>
                        </div>
                        <ul>
                            <li>{transl[lang].spkText1}</li>
                            <li>{transl[lang].spkText2}</li>
                            <li>{transl[lang].spkText3}</li>
                            <li>{transl[lang].spkText4}</li>
                        </ul>
                    </section>
                    {/* <section>
                        <h4>{transl[lang].vdf}</h4>
                        <div>
                            <h5>Vodafone Firmenkunden Hamburg</h5>
                            <h5>06.2006-09.2007</h5>
                        </div>
                        <ul>
                            <li>{transl[lang].vdfText1}</li>
                            <li>{transl[lang].vdfText2}</li>
                        </ul>
                    </section>
                    <section>
                        <h4>{transl[lang].haspa}</h4>
                        <div>
                            <h5>Hamburger Sparkasse (Haspa) AG</h5>
                            <h5>08.2004-06.2006</h5>
                        </div>
                        <ul>
                            <li>{transl[lang].paspaText}</li>
                        </ul>
                    </section> */}
                </article>
            </main>
        </>
    )
}