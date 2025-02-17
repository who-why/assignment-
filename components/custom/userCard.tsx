"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import usercard from '../../public/images/usercard.jpeg';

export function UserCard() {
  return (
    <Card className="p-4 min-w-[200px] sm:p-5 flex flex-col items-center sm:flex-row gap-3 w-full max-w-xs sm:max-w-sm rounded-lg mx-auto text-center sm:text-left">
      <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
        <AvatarImage src={usercard.src} alt="Bhaskar Sharma" />
        <AvatarFallback>BS</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h3 className="font-semibold text-sm sm:text-base text-gray-900">Bhaskar Sharma</h3>
        <p className="text-xs sm:text-sm text-gray-500">Sales Manager • Sales Dept.</p>
      </div>
    </Card>
  );
}
