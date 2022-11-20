import { ChakraProvider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import '../Styles/Home.css'
import foto from '../img/avatar.jpeg'
import logoGithub from '../img/logo-github.png'
import logoInsta from '../img/logo-insta.png'
import logoLinkedin from '../img/logo-linkedin.png'

export default function Home() {
    return (
        <>
            < ChakraProvider >

                <section>
                    <div className="information">
                        <Image
                            className='information-img'
                            boxSize='300px'
                            src={foto}
                        />
                        <div className='information-text'>
                            <p className="information-title">Maria Eduarda Souto</p>
                            <p className="information-subtitle">Desenvolvedora Front-end</p>
                        </div>
                        <ul className="information-list">
                            <li>
                                <a href="https://github.com/EduardaSouto28" target="_blank">
                                    <img src={logoGithub} alt="Logo do Github" className='information-list-img' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/eduarda2823/" target="_blank">
                                        <img src={logoInsta} alt="Logo do instagram" className='information-list-img' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/eduarda-souto-b975b3231/" target="_blank">
                                    <img src={logoLinkedin} alt="Logo do linkedin" className='information-list-img' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

            </ ChakraProvider >
        </>
    );
}