import { createStore } from 'effector'

import { IPlayer } from '../types/requests'

const players: IPlayer[] = []

export const $players = createStore<IPlayer[]>([])
