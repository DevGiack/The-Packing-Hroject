import './Header.css';
import connect from '../../utils/connect'

const Header = () => (
    <div className="main-header">
        <div className='connect'>
            <button onClick={connect}>Connect</button>
        </div>
       
    </div>
);

export default Header;