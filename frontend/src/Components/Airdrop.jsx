import {useConnection, useWallet} from "@solana/wallet-adapter-react";
import React, {useState} from "react";
import Sidebar from "./Sidebar.jsx";

export default function Airdrop(){
    let [num,setNum]=useState("");
    let wallet=useWallet();
    let connection=useConnection();
    let [balance,setBalance]=useState("");
    return(
        <div className='bg-gray-900 w-full h-screen'>
            <div className='flex'>
                <Sidebar/>
        <div className='flex justify-center items-center w-full'>
            <div>
                <div className='text-white font-mono mb-4'>{"Balance: " + balance}</div>
                <input placeholder='Enter SOL' className='p-1 rounded font-mono' type={"text"} onChange={(e) => {
                    setNum(e.target.value)
                }}/>
                <button className='font-mono text-white border-2 border-blue-800 p-2 rounded bg-gray-800 ml-4'
                        onClick={async () => {
                            await connection.connection.requestAirdrop(wallet.publicKey, 1000000000 * parseInt(num));
                            let res = await connection.connection.getBalance(wallet.publicKey);
                            setBalance(parseInt(res / 1000000000).toString());
                            alert(num + " SOL added to your wallet!!!")
                        }}>Request Airdrop
                </button>

                <div className='w-full mt-4 h-6 text-purple-500 font-mono'>
                    Enjoy by airdropping SOL into your devnet Account
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}