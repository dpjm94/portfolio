import '../styles/styles.css'
import 'lazysizes'
import Shots from './modules/Shots'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import Modal from './modules/Modal'

new Modal()
new Shots();
new ClipboardJS('.btn');
new RevealOnScroll(document.querySelectorAll(".contact-section"), 80);
new MobileMenu();

if(module.hot){
    module.hot.accept()
}