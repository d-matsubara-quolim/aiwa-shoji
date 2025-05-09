import { createApp } from "./vue.esm-browser.js"
import Header from './header-component.js'
import Footer from './footer-component.js'

const header = createApp(Header)
const footer = createApp(Footer)
header.mount('header')
footer.mount('footer')
