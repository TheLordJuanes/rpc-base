import Head from 'next/head'
import RegisterForm from '../components/RegisterForm'

export default function Register() {

    return (

        <div className="container">

            <Head>

                <meta charSet="UTF-8" />

                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossOrigin="anonymous" />

                <title>RPC - Sign up</title>

                <link rel="icon" href="/logo.ico" />

            </Head>

            <RegisterForm />

        </div>
    )
}