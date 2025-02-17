export interface AttendanceRecord {
  date: string
  day: string
  timePlanned: {
    start: string
    end: string
    hours: string
  }
  actualTime: {
    start: string
    end: string
    hours: string
    isLate?: boolean
  }
  fineBonus: {
    amount: number
    type: "bonus" | "fine"
  }
  errors: ("location" | "time" | "absent")[]
  calculatedAttendance: string
  finalAttendance: string
  actions: {
    comments: number
    notifications: number
  }
}

