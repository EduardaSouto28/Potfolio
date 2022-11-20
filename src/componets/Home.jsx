import { ChakraProvider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import '../Styles/Home.css'

export default function Home() {
    return (
        <>
            < ChakraProvider >

                <section>
                    <div className="information">
                        <Image
                            className='information-img'
                            boxSize='300px'
                            src='../public/avatar.jpeg'
                        />
                        <div className='information-text'>
                            <p className="information-title">Maria Eduarda Souto</p>
                            <p className="information-subtitle">Desenvolvedora Front-end</p>
                        </div>
                        <ul className="information-list">
                            <li>
                                <a href="https://github.com/EduardaSouto28" target="_blank">
                                    <img src="../public/logo-github.png" alt="Logo do Github" className='information-list-img' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/eduarda2823/" target="_blank">
                                    <img src="../public/logo-insta.png" alt="Logo do instagram" className='information-list-img' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/eduarda-souto-b975b3231/" target="_blank">
                                    <img src="../public/logo-linkedin.png" alt="Logo do linkedin" className='information-list-img' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

            </ ChakraProvider >
        </>
    );
}