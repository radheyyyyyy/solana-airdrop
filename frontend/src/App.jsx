import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {WalletDisconnectButton, WalletModalProvider, WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css'
import Airdrop from "./Components/Airdrop.jsx";

function App() {

  return (
      <div className='flex justify-center items-center bg-black w-full h-screen'>
        <ConnectionProvider endpoint={'https://solana-devnet.g.alchemy.com/v2/zj-OD8ZTRNXORzpNidso3AhEQVgLbKJy'}>
          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div className='grid grid-rows-3'>
                <div className='flex justify-center items-center row-span-1 m-3'><WalletMultiButton/></div>
                <div className='flex justify-center items-center row-span-1 m-3'><WalletDisconnectButton/></div>
                <div className='flex justify-center items-center row-span-1 m-3'><Airdrop/></div>
                <div className='w-full h-6 text-purple-500 font-mono'>
                  Enjoy by airdropping SOL into your devnet Account
                </div>
              </div>
            </WalletModalProvider>
          </WalletProvider>

        </ConnectionProvider>
      </div>
  )
}

export default App
