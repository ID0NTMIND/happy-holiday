import Footer  from '../Footer/Footer';
import Header from '../Header/Header';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styleBtn from './Layout.module.css';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const btn = {
  position: 'absolute',
  top: '81%',
  left: 'calc(50% - 155px)',
  display: 'block',
  margin: '20px auto',
  width: '310px',
  height: '65px',
  padding: '20px 52px',
  backgroundColor: '#00c78b',
  borderRadius: '30px',
  color: 'white',
  textAlign: 'center',
}

const Layout = () => {
  const {text: {idText}, image: {idImg}} = useSelector(state => state);


  return (
    <div style={wrapper}>
      <Header />
      <Outlet />
      {idText && idImg && (
        <Link style={btn} className={styleBtn.button} to={`singleCard/${idText}/${idImg}`}>
          Поделиться открыткой
        </Link>
      )}
      <Footer />
    </div>
  );
}

export default Layout;