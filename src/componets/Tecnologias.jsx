import '../Styles/Tecnologias.css'
import logoHtml from '../img/logo-html.png'
import logoCSS from '../img/logo-css.png'
import logoJs from '../img/logo-js.png'
import logoVue from '../img/logo-vue.png'
import logoReact from '../img/logo-react.png'
import logoGit from '../img/logo-git.png'

export default function Tecnologias() {
    return (
        <>
            <ul className='list'>
                <li className='list-itens'>
                    <img src={logoHtml} className='list-itens-img'></img>
                </li>
                <li className='list-itens' >
                    <img src={logoCSS} className='list-itens-img'></img>
                </li>
                <li className='list-itens' >
                    <img src={logoJs} className='list-itens-img'></img>
                </li>
                <li className='list-itens' >
                    <img src={logoVue} className='list-itens-img'></img>
                </li>
                <li className='list-itens' >
                    <img src={logoReact} className='list-itens-img'></img>
                </li>
                <li className='list-itens' >
                    <img src={logoGit} className='list-itens-img'></img>
                </li>
            </ul>

        </>
    );
}