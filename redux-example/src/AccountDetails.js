import React from 'react';
import { useSelector } from 'react-redux';

const AccountDetails = () => {
    const data=useSelector(state=>state)
    console.log(data)
  return (
    <>
    <h1>AccountDetails</h1>
    <table>
        <thead>
            <tr>
            <th>Balance</th>
            <th>Username</th>
            <th>Mobilenumber</th>
            </tr>
        </thead>
        <tbody>
             <tr>
                <td>{data.account.balance}</td>
                <td>{data.account.fullname}</td>
                <td>{data.account.mobilenumber}</td>
             </tr>
        </tbody>
    </table>
    <h1>Transaction Details</h1>
    <table>
        <thead>
            <tr>
                <th>TransactionID</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {
                data.transaction.map((tr,index)=>(
                    <tr key={index}>
                       <td>{tr.id}</td>
                       <td>{tr.amount}</td>
                       <td>{tr.type}</td>
                       <td>{tr.date.toString()}</td>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
    </>
  )
}

export default AccountDetails