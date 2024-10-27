import {useConnection, useWallet} from "@solana/wallet-adapter-react";
import {useState} from "react";

export default function Airdrop(){
    let [num,setNum]=useState("");
    let wallet=useWallet();
    let connection=useConnection();
    return(
        <div>
            <input placeholder='Enter SOL' className='p-1 rounded font-mono' type={"text"} onChange={(e)=>{setNum(e.target.value)}}/>
            <button className='font-mono text-white border-2 border-blue-800 p-2 rounded bg-gray-800 ml-4' onClick={async ()=>{
               await connection.connection.requestAirdrop(wallet.publicKey,1000000000*parseInt(num));
               alert(num+ "SOL added to your wallet!!!")
            }}>Request Airdrop</button>
        </div>
    )
}