import { ChakraProvider } from '@chakra-ui/react'
import { Outlet } from "react-router-dom";
import '../Styles/HomePage.css'
import { darkMode } from "../data/darkMode";
import logoDark from '../img/logo-dark.png'
import { Link } from 'react-router-dom';


export default function Homepage() {

    function mode() {
        if (classHome === "homepage-dark") {
            light()
        } else if (classHome === "homepage-light") {
            dark()
        }
    }

    const dark = darkMode((state) => state.darkMode);
    const light = darkMode((state) => state.lightMode);
    const classHome = darkMode((state) => state.classHome);
    const classNav = darkMode((state) => state.classNav);

    return (
        <>
            < ChakraProvider >

                <section className={classHome}>
                    <div className={classNav}>
                        <ul className='homepage__nav-list'>
                            <li>
                                <Link to={'/'} className='homepage__nav-itens'> Início </Link>
                            </li>
                            <li>
                                <Link to={'Tecnologias'} className='homepage__nav-itens'> Tecnologias </Link>
                            </li>
                            <li>
                                <Link to={'potfolio'} className='homepage__nav-itens'> Portfólio </Link>
                            </li>
                            <li>
                                <Link to={'hobbies'} className='homepage__nav-itens'> Hobbies </Link>
                            </li>
                        </ul>
                        <button onClick={mode}>
                            <img src={logoDark} className='homepage__nav-img' />
                        </button>
                    </div>

                    <div className="homepage__information">
                        <Outlet />
                    </div>

                </section>

            </ ChakraProvider >
        </>
    );
}