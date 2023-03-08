import './Header.css';
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';
import DisconnectWalletButton from '../DisconnectWalletButton/DisconnectWalletButton'

import { UserAddressAtom } from '../atom/UserWalletAddress'
import { useAtom } from 'jotai';

const Header = () => {

    const [userAddress] = useAtom(UserAddressAtom);

    return (
        <div className="main-header">
        <div className='connect'>
            <ConnectWalletButton />
            <DisconnectWalletButton/>
            <p style={{ color: 'white' }}>{userAddress}</p>
        </div>
    </div>
    );
};

export default Header;