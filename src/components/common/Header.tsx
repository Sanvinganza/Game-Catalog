import Search from 'antd/lib/input/Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export function Header () {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className='header'>
      <div className="header-container">
        <div className="header--item" style={{marginInlineEnd: 'auto'}}>
          <Link to="/">
            <div className="header--item-icon" style={{backgroundImage: 'url(../images/home.png)'}}></div>
          </Link>
        </div>
        <div className="header--item">
          <Link to="/catalog">
            <div className="header--item-icon" style={{backgroundImage: 'url(../images/catalog.png)'}}></div>
          </Link>
        </div>
        <div className="header--item search-wrapper">
          <div className="header--item-icon" onClick={()=>setModalOpen(!modalOpen)} style={{backgroundImage: 'url(../images/search.png)'}}></div>
          {modalOpen?
            <Search
              className='search-modal'
            />
            :
            null}
        </div>
        {/* <Modal
          visible={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
          footer={false}
          centered
          bodyStyle={{
            backgroundColor: "rgba(66, 50, 126, 0.88)"
          }}
          mask={false}
          closeIcon={<div style={{
            height: '16px',
            width: '16px',
            margin: '5px',
            backgroundImage: 'url(../images/delete.png)'
          }}></div>}
        >
        </Modal> */}
      </div>
      <img className='header-logo' src="./images/logo.png" />
    </div>
  );
}
