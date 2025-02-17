import { AttendanceRecord } from "@/types/type"

export const attendanceData: AttendanceRecord[] = [
  {
    date: "31-Jun-2025",
    day: "M",
    timePlanned: {
      start: "09:00 AM",
      end: "06:30 PM",
      hours: "09:00 H",
    },
    actualTime: {
      start: "09:01 AM",
      end: "06:32 PM",
      hours: "09:01 H",
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: [],
    calculatedAttendance: "P",
    finalAttendance: "P",
    actions: {
      comments: 3,
      notifications: 3,
    },
  },
  {
    date: "30-Jun-2025",
    day: "M",
    timePlanned: {
      start: "09:00 AM",
      end: "06:30 PM",
      hours: "09:00 H",
    },
    actualTime: {
      start: "09:01 AM",
      end: "06:32 PM",
      hours: "09:01 H",
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: [],
    calculatedAttendance: "P",
    finalAttendance: "P",
    actions: {
      comments: 3,
      notifications: 3,
    },
  },
  {
    date: "29-Jun-2025",
    day: "W",
    timePlanned: {
      start: "09:00 AM",
      end: "06:30 PM",
      hours: "09:00 H",
    },
    actualTime: {
      start: "09:01 AM",
      end: "02:32 PM",
      hours: "04:01 H",
      isLate: true,
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: ["location", "time"],
    calculatedAttendance: "P",
    finalAttendance: "HD",
    actions: {
      comments: 3,
      notifications: 3,
    },
  },
  {
    date: "28-Jun-2025",
    day: "T",
    timePlanned: {
      start: "09:00 AM",
      end: "06:30 PM",
      hours: "09:00 H",
    },
    actualTime: {
      start: "09:01 AM",
      end: "09:32 PM",
      hours: "12:01 H",
      isLate: true,
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: ["time", "absent"],
    calculatedAttendance: "P + OT",
    finalAttendance: "P + OT",
    actions: {
      comments: 3,
      notifications: 3,
    },
  },
  {
    date: "27-Jun-2025",
    day: "F",
    timePlanned: {
      start: "09:00 AM",
      end: "06:30 PM",
      hours: "09:00 H",
    },
    actualTime: {
      start: "09:01 AM",
      end: "05:32 PM",
      hours: "08:01 H",
      isLate: true,
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: ["time"],
    calculatedAttendance: "P - LT",
    finalAttendance: "P - LT",
    actions: {
      comments: 3,
      notifications: 3,
    },
  },
  {
    date: "26-Jun-2025",
    day: "S",
    timePlanned: {
      start: "09:00 AM",
      end: "06:30 PM",
      hours: "09:00 H",
    },
    actualTime: {
      start: "09:01 AM",
      end: "05:32 PM",
      hours: "08:01 H",
      isLate: true,
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: ["time"],
    calculatedAttendance: "P + WO",
    finalAttendance: "P + WO",
    actions: {
      comments: 3,
      notifications: 3,
    },
  },
  {
    date: "25-Jun-2025",
    day: "W",
    timePlanned: {
      start: "-",
      end: "-",
      hours: "-",
    },
    actualTime: {
      start: "09:01 AM",
      end: "09:32 PM",
      hours: "12:01 H",
      isLate: true,
    },
    fineBonus: {
      amount: -500,
      type: "fine",
    },
    errors: ["time", "absent"],
    calculatedAttendance: "P + WO - LT",
    finalAttendance: "P + WO - LT",
    actions: {
      comments: 3,
      notifications: 3,
    },
  },
  {
    date: "24-Jun-2025",
    day: "M",
    timePlanned: {
      start: "-",
      end: "-",
      hours: "-",
    },
    actualTime: {
      start: "09:01 AM",
      end: "05:32 PM",
      hours: "08:01 H",
      isLate: true,
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: ["time"],
    calculatedAttendance: "P + WO - LT",
    finalAttendance: "P + WO - LT",
    actions: {
      comments: 3,
      notifications: 3,
    },
  },
  {
    date: "23-Jun-2025",
    day: "T",
    timePlanned: {
      start: "-",
      end: "-",
      hours: "-",
    },
    actualTime: {
      start: "09:01 AM",
      end: "05:32 PM",
      hours: "08:01 H",
      isLate: true,
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: ["time"],
    calculatedAttendance: "P + WO - LT",
    finalAttendance: "P + WO - LT",
    actions: {
      comments: 3,
      notifications: 3,
    },
  },
  {
    date: "22-Jun-2025",
    day: "W",
    timePlanned: {
      start: "-",
      end: "-",
      hours: "-",
    },
    actualTime: {
      start: "09:01 AM",
      end: "05:32 PM",
      hours: "08:01 H",
      isLate: true,
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: ["time"],
    calculatedAttendance: "P + WO - LT",
    finalAttendance: "P + WO - LT",
    actions: {
      comments: 3,
      notifications: 3,
    },
  },
  {
    date: "21-Jun-2025",
    day: "S",
    timePlanned: {
      start: "-",
      end: "-",
      hours: "-",
    },
    actualTime: {
      start: "09:01 AM",
      end: "05:32 PM",
      hours: "08:01 H",
      isLate: true,
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: ["time"],
    calculatedAttendance: "P + WO - LT",
    finalAttendance: "P + WO - LT",
    actions: {
      comments: 3,
      notifications: 3,
    },
},
{
    date: "20-Jun-2025",
    day: "F",
    timePlanned: {
      start: "-",
      end: "-",
      hours: "-",
    },
    actualTime: {
      start: "09:01 AM",
      end: "05:32 PM",
      hours: "08:01 H",
      isLate: true,
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: ["time"],
    calculatedAttendance: "P + WO - LT",
    finalAttendance: "P + WO - LT",
    actions: {
      comments: 3,
      notifications: 3,
    },
},
{
    date: "19-Jun-2025",
    day: "W",
    timePlanned: {
      start: "-",
      end: "-",
      hours: "-",
    },
    actualTime: {
      start: "09:01 AM",
      end: "05:32 PM",
      hours: "08:01 H",
      isLate: true,
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: ["time"],
    calculatedAttendance: "P + WO - LT",
    finalAttendance: "P + WO - LT",
    actions: {
      comments: 3,
      notifications: 3,
    },
},
{
    date: "18-Jun-2025",
    day: "T",
    timePlanned: {
      start: "-",
      end: "-",
      hours: "-",
    },
    actualTime: {
      start: "09:01 AM",
      end: "05:32 PM",
      hours: "08:01 H",
      isLate: true,
    },
    fineBonus: {
      amount: 500,
      type: "bonus",
    },
    errors: ["time"],
    calculatedAttendance: "P + WO - LT",
    finalAttendance: "P + WO - LT",
    actions: {
      comments: 3,
      notifications: 3,
    },
},

];
