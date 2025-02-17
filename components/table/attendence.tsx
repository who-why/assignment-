"use client"

import { ChevronDown, MessageCircle, MoreVertical, Circle, Clock, User, MapPin, Link } from "lucide-react"
import type { AttendanceRecord } from "@/types/type"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface AttendanceTableProps {
  data: AttendanceRecord[]
}

export function AttendanceTable({ data }: AttendanceTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow className="hover:bg-gray-50">
            <TableHead className="w-[180px] font-medium">Date</TableHead>
            <TableHead className="font-medium">Time planned + WH</TableHead>
            <TableHead className="font-medium">Actual Time</TableHead>
            <TableHead className="font-medium">Fine/Bonus</TableHead>
            <TableHead className="font-medium">Error</TableHead>
            <TableHead className="font-medium">Cal. Att.</TableHead>
            <TableHead className="font-medium">Final Att.</TableHead>
            <TableHead className="text-right font-medium"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((record, index) => (
            <TableRow key={record.date} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
              <TableCell className="font-medium py-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-4 text-gray-500">{record.day}</span>
                  <span>{record.date}</span>
                </div>
              </TableCell>
              <TableCell className="py-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">
                    {record.timePlanned.start} - {record.timePlanned.end}
                  </span>
                  <span className="text-gray-500">= {record.timePlanned.hours}</span>
                </div>
              </TableCell>
              <TableCell className="py-2">
                <div className="flex items-center gap-2">
                  <span className={record.actualTime.isLate ? "text-red-500" : "text-gray-600"}>
                    {record.actualTime.start} - {record.actualTime.end}
                  </span>
                  <span className={record.actualTime.isLate ? "text-red-500" : "text-gray-400"}>
                    = {record.actualTime.hours}
                  </span>
                </div>
              </TableCell>
              <TableCell className="py-2">
                <div className="flex items-center gap-1">
                  <span className={record.fineBonus.type === "bonus" ? "text-green-700" : "text-red-700"}>
                    {record.fineBonus.type === "bonus" ? "+" : "-"}₹{record.fineBonus.amount}
                  </span>
                  <span className="text-gray-400">+900</span>
                </div>
              </TableCell>
              <TableCell className="py-2">
                <div className="flex items-center gap-1">
                  {record.errors.includes("location") && <MapPin className="h-4 w-4 text-red-500" />}
                  {record.errors.includes("time") && <Clock className="h-4 w-4 text-red-500" />}
                  {record.errors.includes("absent") && <User className="h-4 w-4 text-red-500" />}
                </div>
              </TableCell>
              <TableCell className="py-2">
                <span className="text-green-500">{record.calculatedAttendance}</span>
              </TableCell>
              <TableCell className="py-2">
                <div className="flex items-center gap-1">
                  <span className="text-gray-700">{record.finalAttendance}</span>
                  <ChevronDown className="h-3 w-3 text-gray-600" />
                </div>
              </TableCell>
              <TableCell className="py-2">
                <div className="flex items-center justify-end gap-4 pr-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Link  className="h-3.5 w-3.5 text-gray-600" />
                      <span className="text-xs text-gray-700">{record.actions.comments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-3.5 w-3.5 text-gray-600" />
                      <span className="text-xs text-gray-700">{record.actions.notifications}</span>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreVertical className="h-4 w-4 text-gray-700" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit record</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

