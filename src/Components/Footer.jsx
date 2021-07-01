import './Styles/Footer.css'
import Github from '../assets/github.png';
import YouTube from '../assets/youtube.png';
import Instagram from '../assets/instagram.png';
import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import Facebook from '../assets/facebook.png';

const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/ericatsu" target="_blank">
                <img
                    src={Github}
                    alt="GitHub"
                />
            </a>
            <a href="https://www.youtube.com/channel/UCZvhEk5BETiadTJY4CdxIIQ" target="_blank">
                <img
                    src={YouTube}
                    alt="YouTube"
                />
            </a>
            <a href="#" target="_blank">
                <img
                    src={Facebook}
                    alt="Facebook"
                />
            </a>
            <a href="#" target="_blank">
                <img
                    src={LinkedIn}
                    alt="LinkIn"
                />
            </a>
            <a href="https://twitter.com/ericKAatsu" target="_blank">
                <img
                    src={Twitter}
                    alt="Twitter"
                />
            </a>
        </footer>
    )
}

export default Footer
