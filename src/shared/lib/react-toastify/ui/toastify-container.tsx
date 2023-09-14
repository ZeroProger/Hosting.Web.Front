'use client'

import { ToastContainer } from 'react-toastify'

export function ToastifyContainer() {
	return (
		<ToastContainer
			position="bottom-right"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			rtl={false}
			closeOnClick
			pauseOnFocusLoss
			pauseOnHover
			draggable
			theme="dark"
		/>
	)
}
