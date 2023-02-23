import { NextPage } from 'next'
import { useRouter } from 'next/router'

const ServerPage: NextPage = () => {
	const router = useRouter()
	const { slug } = router.query
	return <div>{slug}</div>
}

export default ServerPage
