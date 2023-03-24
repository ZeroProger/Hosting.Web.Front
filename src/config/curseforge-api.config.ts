export const getModloadersUrl = () => 'softwares/modloaders'
export const getModloaderUrl = (name: string) => `softwares/modloaders/${name}`

export const getMinecraftVersionsUrl = () => 'softwares/versions'
export const getMinecraftVersionUrl = (version: string) => `softwares/versions/${version}`

export const getModsSearchUrl = () => 'mods/search'
export const getModByIdUrl = (id: number) => `mods/${id}`
export const getModFullDescriptionUrl = (id: number) => `mods/${id}/description`

export const getClassesOfCategories = () => 'categories/grouped-by-class'
export const getModsCategories = () => 'categories'