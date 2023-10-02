'use client'

import { useCallback, useMemo, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

import { Button } from '@/shared/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogTitle } from '@/shared/ui/dialog'

import { acceptStyle, baseStyle, focusedStyle, rejectStyle } from '../config'

export function Dropzone({
	children,
	uploadPath,
}: {
	children: React.ReactNode
	uploadPath: string
}) {
	const [filesToUpload, setFilesToUpload] = useState<File[]>([])
	const [folderName, setFolderName] = useState<string | null>(null)

	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			const firstFile = acceptedFiles[0]
			const folder = firstFile.path?.split('/').at(1)

			if (folder) {
				setFolderName(folder)
			}

			setFilesToUpload([...filesToUpload, ...acceptedFiles])
		},
		[filesToUpload]
	)

	const { getRootProps, getInputProps, isFocused, isDragActive, isDragAccept, isDragReject } =
		useDropzone({ noClick: true, onDrop })

	const dropzoneStyles = useMemo(
		() => ({
			...baseStyle,
			...(isFocused ? focusedStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isFocused, isDragAccept, isDragReject]
	)

	const handleUploadFile = () => {
		console.log('upload files to backend api request')
		setFilesToUpload([])
		setFolderName(null)
	}

	const handleCancelUpload = () => {
		setFilesToUpload([])
		setFolderName(null)
	}

	return (
		<>
			<div className="w-full relative">
				<div {...getRootProps({ style: dropzoneStyles })}>
					<input {...getInputProps()} />
					{isDragActive && (
						<div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-xl bg-card opacity-50 rounded-layout">
							<p className="opacity-100">Перетащите сюда файлы для их загрузки</p>
						</div>
					)}
					{children}
				</div>
			</div>
			{filesToUpload.length > 0 && (
				<Dialog open>
					<DialogContent
						onEscapeKeyDown={handleCancelUpload}
						onPointerDownOutside={handleCancelUpload}
						hideClose
					>
						<DialogTitle>Загрузка файлов</DialogTitle>
						<div className="flex flex-col gap-4">
							<div className="flex flex-col gap-2">
								{folderName && filesToUpload.length > 0 && (
									<span>
										Папка <span className="font-bold">{folderName}</span> будет загружена в
										директорию:
									</span>
								)}
								{!folderName && filesToUpload.length === 1 && (
									<span>
										Файл <span className="font-bold">{filesToUpload[0].name}</span> будет загружен в
										директорию:
									</span>
								)}
								{!folderName && filesToUpload.length > 1 && (
									<span>Файлы ({filesToUpload.length}шт.) будут загружены в директорию:</span>
								)}
								<span className="font-semibold">~/{uploadPath}</span>
							</div>
						</div>
						<DialogFooter>
							<Button
								variant="outline"
								className="h-auto py-1 text-lg"
								onClick={handleCancelUpload}
								tabIndex={2}
							>
								Отменить
							</Button>
							<Button
								variant="primary"
								className="h-auto py-1 text-lg"
								onClick={handleUploadFile}
								tabIndex={1}
							>
								Загрузить
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			)}
		</>
	)
}
