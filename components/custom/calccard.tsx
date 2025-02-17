"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { UserCard } from "./userCard";
import usercard from "../../public/images/usercard.jpeg";

export function AttendanceCard() {
  return (
    <Card className="w-full flex bg-white rounded-xl shadow-xl overflow-hidden">
      {/* user card */}
      <div className="p-4 bg-white border-0">
      <Card className="p-4 sm:p-5 min-w-[160px] border-0 flex flex-col items-center sm:flex-row gap-3 w-full max-w-xs sm:max-w-sm rounded-lg mx-auto text-center sm:text-left">
      <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
        <AvatarImage src={usercard.src} alt="Bhaskar Sharma" />
        <AvatarFallback>BS</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h3 className="font-semibold text-sm sm:text-base text-gray-900">Bhaskar Sharma</h3>
        <p className="text-xs sm:text-sm text-gray-500">Sales Manager • Sales Dept.</p>
      </div>
    </Card>
      </div>
      
      {/* table */}
      <div className="px-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border">
                <th className="py-3 font-medium text-left w-20 border"></th>
                <th className="py-3 font-medium text-left px-6 border">P</th>
                <th className="py-3 font-medium text-left px-6 border">A</th>
                <th className="py-3 font-medium text-left px-6 border">WO</th>
                <th className="py-3 font-medium text-left px-6 border">
                  Σ Bonus/Fine
                </th>
                <th className="py-3 font-medium text-left px-6 border">OT</th>
                <th className="py-3 font-medium text-left px-6 border">LT</th>
                <th className="py-3 font-medium text-left px-6 border">OT+LT</th>
                <th className="py-3 font-medium text-left px-6 border">Final Att.</th>
                <th className="py-3 font-medium text-left px-6 border"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 border ">
              <tr className="border-b border-gray-200">
                <td className="py-2.5 text-gray-700 border text-center">Cal.</td>
                <td className="px-6 py-2.5 border">17.5</td>
                <td className="px-6 py-2.5 border">2.5</td>
                <td className="px-6 py-2.5 border">11</td>
                <td className="px-6 py-2.5 text-emerald-600 border">+2000</td>
                <td className="px-6 py-2.5 border">17:32 H</td>
                <td className="px-6 py-2.5 text-red-500 border">-12:00 H</td>
                <td className="px-6 py-2.5 border">05:32 H</td>
                <td className="px-6 py-2.5 border">20</td>
                <td className="px-6 py-2.5 text-xs text-gray-700 border">
                  Finalised by Rahul
                </td>
              </tr>
              <tr>
                <td className="py-2.5 text-gray-700 border text-center">Final</td>
                <td className="px-6 py-2.5 border">23.5</td>
                <td className="px-6 py-2.5 border">3.5</td>
                <td className="px-6 py-2.5 border">4</td>
                <td className="px-6 py-2.5 text-emerald-600 border">+400</td>
                <td className="px-6 py-2.5 border">12:30 H</td>
                <td className="px-6 py-2.5 text-red-500 border">-19:00</td>
                <td className="px-6 py-2.5 text-red-500 border">-06:30 H</td>
                <td className="px-6 py-2.5 border">27</td>
                <td className="px-6 py-2.5 text-xs text-gray-700 border">
                  Locked by Shriniwas
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}
