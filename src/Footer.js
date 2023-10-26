import SocialButtonsContainer from 'react-social-media-buttons'
import IMG_Linkedin from './images/icons8-linkedin-30.png'
import IMG_Mail from './images/icons8-mail-96.png'

const Footer = () => {
    return (
        <>
        <footer id="footer">
            {/* <h4>Get in touch</h4> */}
        <div class="socials">
                {/* <SocialButtonsContainer
  links={['https://www.linkedin.com/in/linkedin/viviengeschwind']}
  buttonStyle={{margin: '0px', backgroundColor: 'transparent', borderRadius: '30%'}}
  iconStyle={{color: '#000000'}}
  openNewTab={true}/> */}
  <a href="http://www.linkedin.com/in/viviengeschwind" target='_blank'><img src={IMG_Linkedin} width='20px'></img></a>
            <a href="mailto:vivien-geschwind@live.de"><img src={IMG_Mail} width='20px'></img></a>
                </div>
            <div class="footer-flex"><span class="center">Copyright © 2023 Vivien Geschwind.&nbsp;</span><span class="center">All Rights Reserved.</span></div>
        </footer>
        </>
    )
};
export default Footer
