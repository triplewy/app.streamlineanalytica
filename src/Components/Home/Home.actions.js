export const YESTERDAY_RECAP = 'YESTERDAY_RECAP'
export const YESTERDAY_RECAP_SUCCESS = 'YESTERDAY_RECAP_SUCCESS'
export const YESTERDAY_RECAP_FAILURE = 'YESTERDAY_RECAP_FAILURE'

export const WEEK_RECAP = 'WEEK_RECAP'
export const WEEK_RECAP_SUCCESS = 'WEEK_RECAP_SUCCESS'
export const WEEK_RECAP_FAILURE = 'WEEK_RECAP_FAILURE'

export function yesterdayRecap() {
  return {
    type: YESTERDAY_RECAP
  }
}

export function yesterdayRecapSuccess(lines, machines, reports) {
  return {
    type: YESTERDAY_RECAP_SUCCESS,
    lines: lines,
    machines: machines,
    reports: reports
  }
}

export function yesterdayRecapFailure(error) {
  return {
    type: YESTERDAY_RECAP_FAILURE,
    error: error,
  }
}

export function weekRecap() {
  return {
    type: WEEK_RECAP
  }
}

export function weekRecapSuccess(lines, machines, reports) {
  return {
    type: WEEK_RECAP_SUCCESS,
    lines: lines,
    machines: machines,
    reports: reports
  }
}

export function weekRecapFailure(error) {
  return {
    type: WEEK_RECAP_FAILURE,
    error: error,
  }
}
