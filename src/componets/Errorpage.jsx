import { useRouteError } from "react-router-dom";
import '../Styles/Errorpage.css'
import { Spinner } from '@chakra-ui/react'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Esta página está em desenvolvimento</p>
            <p>Volte a página inicial e desfrute do que está disponível</p>
        </div>

    );
}