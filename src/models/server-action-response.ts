type ActionStatus = 'success' | 'error'

export interface ActionResponse<T = unknown> {
  status: ActionStatus
  message: string
  data?: T
}

export type ActionResult<T> = Promise<ActionResponse<T>>
