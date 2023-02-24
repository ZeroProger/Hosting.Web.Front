import { FC } from 'react'

interface IServer {
	slug: string
}

const Server: FC<IServer> = ({ slug }) => {
	return <div>server content</div>
}

export default Server
