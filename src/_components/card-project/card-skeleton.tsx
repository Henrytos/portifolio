import { Github, Link } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function CardSkeleton() {
  return (
    <Card className=" animate-pulse group w-full   pt-4 rounded-xl">
      <CardContent className="w-full h-full flex flex-col justify-between gap-y-6">
        <div className="h-60 w-full bg-slate-700 rounded-xl"></div>
        <div className="h-5 w-1/2 bg-slate-700 rounded-xl mt-4 mb-4"></div>
        <div className="space-y-2">
          <div className="w-full h-2 bg-slate-700 rounded"></div>
          <div className="w-11/12 h-2 bg-slate-700 rounded"></div>
          <div className="w-3/4 h-2 bg-slate-700 rounded"></div>
        </div>
        <div className="flex h-auto items-center gap-2 ">
          <Button asChild className="rounded-[.5rem]">
            <Link size={20} />
            <span className="ml-2">Visitar</span>
          </Button>
          <Button asChild variant={"outline"} className="rounded-[.5rem]">
            <Github size={20} />
            <span className="ml-2">Código fonte</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
