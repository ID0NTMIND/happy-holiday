import Container from '../Container/Container';
import style from './Footer.module.css'
import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as TGIcon } from '../../img/tg.svg';
import { ReactComponent as PINTERESTIcon } from '../../img/pinterest.svg';
import { ReactComponent as STUMBLEIcon } from '../../img/stumbleupon.svg';


const Footer = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.wrapper}>
        <div className={style.contacts}>
          <p>Design: <a href='https://t.me/Mrshamallowww'>Anastasia Ilina</a></p>
          <p>Coder: </p>
          <p>© HBCard, 2022</p>
        </div>
        <ul className={style.social}>
          <li className={style.item}>
            <a href='https://vk.com/idntmnd' className={style.link}>
              <VKIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href='https://vk.com/idntmnd' className={style.link}>
              <TGIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href='https://vk.com/idntmnd' className={style.link}>
              <PINTERESTIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href='https://vk.com/idntmnd' className={style.link}>
              <STUMBLEIcon />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
);


export default Footer;