import { Modal } from 'antd';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchGamesByNameRequest } from '../../redux/actions/getGamesByName';
import { FilterWrapper } from '../FilterWrapper/FilterWrapper';
import './index.scss';

export function Header () {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0
  });

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
            onOk={() => setModalOpen(!modalOpen)}
            onCancel={() => setModalOpen(!modalOpen)}
            footer={false}
            closeIcon={
              <div
                ref={ref}
                style={{
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
                onKeyDown={(e) => {
                  if(e.key === 'Enter') {
                    dispatch(fetchGamesByNameRequest({
                      name: e.currentTarget.value
                    }));
                    setModalOpen(false);
                    navigate('/games');
                  }
                }}
                autoFocus />
              <span></span>	
            </span>
            <FilterWrapper visible={inView}/>
          </Modal>
        </div>
        <img className='header-logo' src="./images/logo.png" />
      </div>
    </div>
  );
}
