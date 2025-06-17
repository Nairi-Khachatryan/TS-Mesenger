import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Row, Col } from 'antd';
import './AppLayout.css'

export const AppLayout = () => {
  return (
    <Row className='app-layout-container' >
      <Col>
        <Header />
      </Col>
      <Col>
        <main>
          <Outlet />
        </main>
      </Col>
      <Col>
        <Footer />
      </Col>
    </Row>
  );
};
