import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {WalletDisconnectButton, WalletModalProvider, WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css'

createRoot(document.getElementById('root')).render(
    <ConnectionProvider endpoint={'https://solana-devnet.g.alchemy.com/v2/zj-OD8ZTRNXORzpNidso3AhEQVgLbKJy'}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
                    <App />
            </WalletModalProvider>
        </WalletProvider>

    </ConnectionProvider>

)
