import { SELECT_TARGET } from './types'

export const selectTarget = (targetId) => {
  return (
    type: SELECT_TARGET,
    payload: targetId
  )
}