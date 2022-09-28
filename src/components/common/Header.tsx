import { Modal } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterWrapper } from '../FilterWrapper/FilterWrapper';
import './index.scss';

export function Header () {
  const [modalOpen, setModalOpen] = useState(false);

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
          <Modal
            visible={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            footer={false}
            closeIcon={
              <div style={{
                height: '32px',
                width: '32px',
                marginLeft: '25px',
                backgroundSize: 'cover',
                backgroundImage: 'url(../images/close.png)',
                alignItems: 'center'
              }}></div>}
          >
            <span className="input" style={{width: '100%'}}>
              <input 
                style={{width: '100%'}}
                type="text" 
                placeholder="game name..." 
                autoFocus />
              <span></span>	
            </span>
            <FilterWrapper />
          </Modal>
        </div>
        <img className='header-logo' src="./images/logo.png" />
      </div>
    </div>
  );
}
