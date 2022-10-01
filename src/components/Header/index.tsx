// import { useEffect } from "react";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { useWeb3React } from '@web3-react/core';

const Header: React.FC = () => {
  const { activate } = useWeb3React()

  return <div>
    <p>Header</p>
    <button
      onClick={() => {
        activate(new WalletConnectConnector({}), (ex) => {
          console.log(ex)
        });
      }}
    >
      <p>Wallet Connect</p>
    </button>
  </div>;
};

export default Header;
