import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonCard() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
          <div className="flex gap-4">
            <Skeleton className="w-12 h-12 rounded-full" />
            <Skeleton className="h-12 w-9/12 rounded-lg" />
          </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-8/12" />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Skeleton className="w-20 h-9" />
      </CardFooter>
    </Card>
  );
}
