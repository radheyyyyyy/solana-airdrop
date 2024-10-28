import Sidebar from "./Sidebar.jsx";
import React, {useState} from "react";
import {PublicKey, SystemProgram,Transaction} from "@solana/web3.js";
import {useConnection, useWallet} from "@solana/wallet-adapter-react";

export default function SendSOL(){
    let [to,setTo]=useState("");
    let [amount,setAmount]=useState("");
    let wallet=useWallet();
    let connection=useConnection();
    return(
        <div className='bg-gray-700 w-full h-screen'>
            <div className='flex'>
                <Sidebar/>
                <div className='flex justify-center items-center w-full'>
                    <div>
                    <div className='w-full'>
                        <input type='text' className='mb-4 rounded font-mono p-2' onChange={(e)=>{setTo(e.target.value)}} placeholder={'Enter public address'}/>
                    </div>
                    <div>
                        <input type='text' className='mb-2 rounded font-mono p-2' onChange={(e)=>{setAmount(e.target.value)}} placeholder={'Enter amount in SOL'}/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={async ()=>{
                            let transaction=new Transaction();
                            transaction.add(
                                SystemProgram.transfer({
                                    toPubkey:new PublicKey(to),
                                    fromPubkey:wallet.publicKey,
                                    lamports:amount*1000000000
                                })
                            );
                            await wallet.sendTransaction(transaction,connection.connection);
                            alert("Transaction successful")

                        }} className='mt-2 border-2 border-purple-700 rounded p-2 text-white font-mono bg-gray-800'>Transfer</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}