import { NavLinks } from "@/components/custom/navbar";
import Select from "@/components/custom/select";
import { Sidebar } from "@/components/custom/sidebar";
import Image from "next/image";
import { UserCard } from "@/components/custom/userCard";
import { AttendanceCard } from "@/components/custom/calccard";
import { AttendanceTable } from "@/components/table/attendence";
import { attendanceData } from "@/data/attendance";

export default function Home() {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar />
      <div className="w-full flex flex-col">
        <NavLinks />
        <Select />
        <div className="flex overflow-scroll">
          {/* left */}
          <div className="flex flex-col gap-3 h-auto px-3">
            {Array.from({ length: 7 }).map((_, index) => (
              <UserCard key={index} />
            ))}
          </div>  
           
           {/* right */}
          
          <div className=" flex flex-col relative">
              <AttendanceCard/>
              <AttendanceTable data={attendanceData}/>
          </div>
 
        </div>
      </div>
    </div>
  );
}
