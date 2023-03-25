import { CurseForgeService } from '@/services/curseforge.service'

import { AppDispatch } from '../index'

import { ISearchModsRequest } from './../../shared/types/requests/curseforge-requests.types'
import { modsActions } from './../slices/mods.slice'

export const fetchModDescription = (modId: number) => {
	return async (dispatch: AppDispatch) => {
		try {
			const {
				data: { data: description },
			} = await CurseForgeService.getModFullDescription(modId)

			dispatch(modsActions.setModDescription(description))
		} catch (e) {
			return console.log(e)
		}
	}
}

export const fetchMod = (modId: number) => {
	return async (dispatch: AppDispatch) => {
		try {
			const {
				data: { data: mod },
			} = await CurseForgeService.getModById(modId)

			dispatch(modsActions.setMod(mod))
		} catch (e) {
			return console.error(e)
		}
	}
}

export const fetchMods = (req: ISearchModsRequest) => {
	return async (dispatch: AppDispatch) => {
		try {
			const {
				data: { data: mods },
			} = await CurseForgeService.getMods(req)

			dispatch(modsActions.setMods(mods))
		} catch (e) {
			return console.log(e)
		}
	}
}

export const fetchModsClassesWithCategories = () => {
	return async (dispatch: AppDispatch) => {
		try {
			const {
				data: { data: classes },
			} = await CurseForgeService.getClassesOfModsCategories()

			dispatch(modsActions.setClassesWithCategories(classes))
		} catch (e) {
			return console.log(e)
		}
	}
}
