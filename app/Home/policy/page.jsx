'use client'
import { fetchData } from 'next-auth/client/_utils'
import React, { useEffect, useState } from 'react'

function PolicyPage() {
	const [data, setData] = useState('');

	const makename = async () => {
	  const response =	await fetch('/api/hello', {
			method: 'GET'
		})
		const jsonData = await response.json()
		setData(jsonData.name)
	}

	useEffect(()=> {
		makename()
	}, [])

	return (
		<div className='container justify-center h-24'>
			<h1 className='text-2xl text-red-700'>Policy</h1>

			<button onClick={makename} className='py-3 px-2 bg-red-400 '> Hello</button>
			<p>{data}</p>
		</div>
	)
}

export default PolicyPage
