'use client'

import { ToastContainer } from 'react-toastify'

export function ToastifyContainer() {
	return (
		<ToastContainer
			position="bottom-right"
			autoClose={3500}
			hideProgressBar={false}
			newestOnTop={false}
			rtl={false}
			closeOnClick
			pauseOnFocusLoss
			pauseOnHover
			draggable
			theme="dark"
			className="text-lg"
			toastClassName="mb-0"
		/>
	)
}
