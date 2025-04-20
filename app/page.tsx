"use client";

//import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Card,
  //CardContent,
  //CardDescription,
  //CardFooter,
  CardHeader,
  CardTitle, 
} from "@/components/ui/card";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div>
      <main>
      <div className="grid grid-cols-3 gap-8">
        {tasks?.map(({ _id, text }) => <Card key={_id}>
          <CardHeader>
          <CardTitle>{text}</CardTitle>
          </CardHeader></Card>)}
      
      </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}