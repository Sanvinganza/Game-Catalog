import { Link } from 'react-router-dom';
import './header.scss';

export function Header () {

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
        <div className="header--item">

          <div className="header--item-icon" style={{backgroundImage: 'url(../images/search.png)'}}>
            
          </div>
        </div>
        
      </div>
      <img className='header-logo' src="./images/logo.png" />
    </div>
  );
}
