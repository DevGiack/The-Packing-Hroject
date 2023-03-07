import './Header.css';
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';

const Header = () => (
    <div className="main-header">
        <div className='connect'>
            <ConnectWalletButton />
        </div>
       
    </div>
);

export default Header;