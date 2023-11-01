import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

const Officer = async() => {
	const session = await getServerSession(authOptions)

	if(session.user.role !== 'officer'){
		return (
			<section className="py-24">
				<div className="container h-full justify-center ">
					<h1 className="text-2xl font-bold">
						You are not authorized to access this <span className="text-red-500">Page</span> 
					</h1>
				</div>
			</section>
		)
	}
	return (
		<div>
			Hello mama
		</div>
	)
}

export default Officer
