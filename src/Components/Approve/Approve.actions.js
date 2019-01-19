export const APPROVE = 'APPROVE'
export const APPROVE_SUCCESS = 'APPROVE_SUCCESS'
export const APPROVE_FAILURE = 'APPROVE_FAILURE'

export function approve() {
  return {
    type: APPROVE
  }
}

export function approveSuccess() {
  return {
    type: APPROVE_SUCCESS
  }
}

export function approveFailure(error) {
  return {
    type: APPROVE_FAILURE,
    error: error
  }
}
