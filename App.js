import Header from './app-js/components/header.js'
import Router from './app-js/helpers/router.js'
const App =()=>{

    const $root = document.getElementById('root')
    $root.innerHTML = ''
    const $Fragment = document.createDocumentFragment()
    const $mainHome = document.createElement('section')
    

    $mainHome.classList.add('main__box')

    $Fragment.appendChild(Header())
    $Fragment.appendChild($mainHome)
    $root.appendChild($Fragment)
    Router()
}
export default App