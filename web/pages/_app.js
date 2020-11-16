import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import './styles/about.css'
import './styles/contacts.css'
import './styles/general.css'

export default function myApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}