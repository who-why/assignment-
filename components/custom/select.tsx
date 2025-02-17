"use client";

import { Search, Filter, ChevronDown, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Select() {
  const [view, setView] = useState("detailed");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedMonth, setSelectedMonth] = useState("July");

  return (
    <main className="p-5 w-full">
      <div className="flex flex-col  md:flex-row items-center justify-between gap-4">
        
        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input type="text" placeholder="Search" className="pl-9 w-full rounded-lg" />
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2 rounded-lg">
              <Filter className="h-4 w-4" />
              Filters
            </Button>

            <Button variant="outline" className="flex items-center gap-2 rounded-lg">
              Rows
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Export & View Options */}
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex items-center text-white bg-blue-600 hover:bg-blue-700 hover:text-white gap-2 rounded-lg w-full sm:w-auto">
            Export
            <Download className="h-4 w-4" />
          </Button>

          <Button variant="outline" className="flex items-center gap-2 rounded-lg w-full sm:w-auto">
            {view === "detailed" ? "Detailed View" : "Simple View"}
            <ChevronDown className="h-4 w-4" />
          </Button>

          <Button variant="outline" className="flex items-center gap-2 rounded-lg w-full sm:w-auto">
            {selectedMonth}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </main>
  );
}
