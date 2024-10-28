import React from 'react';
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    let navigation=useNavigate();
    return (
        <div className="h-screen w-64 bg-gray-800 text-white flex flex-col items-center py-4">
            <h1 className="font-mono text-2xl font-semibold mb-6">Solana Dapp</h1>
            <WalletMultiButton/>
            <button onClick={()=>{navigation('/sendairdrop')}} className="mt-4 font-mono w-3/4 p-3 my-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                Send Airdrop
            </button>
            <button onClick={()=>{navigation('/sendsol')}} className="w-3/4 p-3 font-mono my-2 bg-green-600 rounded hover:bg-green-700 transition-colors">
                Send SOL
            </button>
        </div>
    );
};

export default Sidebar;