'use client'
import { useState, useEffect } from 'react';


const ClaimPage = async () => {
 // const session = await getServerSession(authOptions)
  const [claims, setClaims] = useState([])



	const fetchClaims = async () => {
		try{
			const response = await fetch('/api/claim',{
				method: 'GET'
			})
			const data = await response.json()
			setClaims(data)
		}catch(err){
			console.log(err);
			setClaims([]);
		}
	}



 
	return (
	  <div className='pl-5'>
		<h1 className="text-red-700 pl-5 pt-3 text-2xl mb-4">Claims Tables</h1>
		<div className='p-3'>
			<button className="px-6 py-2 mt-4 pb  bg-red-500 text-white rounded-md">
			  Claim
			</button>
		</div>
		
		<div className="overflow-x-auto px-4">
		  <table className="min-w-full divide-y divide-gray-200">
			{/* Table headers */}
			<thead className="bg-red-50">
			  <tr>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
				  Status
				</th>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
				  Amount
				</th>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
				  Notes
				</th>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
				  Recommendation
				</th>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
				  Policy
				</th>
			  </tr>
			</thead>
			{/* Table body */}
			<tbody className="bg-white divide-y divide-gray-200">
			  {claims.map((claim) => (
				<tr key={claim._id}>
				  <td className="px-6 py-4 whitespace-nowrap">{claim.status}</td>
				  <td className="px-6 py-4 whitespace-nowrap">{claim.amount}</td>
				  <td className="px-6 py-4 whitespace-nowrap">{claim.notes}</td>
				  <td className="px-6 py-4 whitespace-nowrap">{claim.recommendation?.name}</td>
				  <td className="px-6 py-4 whitespace-nowrap">{claim.policy?.name}</td>
				</tr>
			  ))}
			</tbody>
		  </table>
		</div>
	  </div>
	);
  
}

export default ClaimPage