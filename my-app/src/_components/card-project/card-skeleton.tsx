import { Github } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function CardSkeleton() {
  return (
    <Card className=" animate-pulse group w-full lg:max-w-96  pt-4 rounded-xl">
      <CardContent>
        <div className="h-48 w-full bg-slate-700 rounded-xl"></div>
        <div className="h-5 w-1/2 bg-slate-700 rounded-xl mt-4 mb-4"></div>
        <div className="space-y-2">
          <div className="w-full h-2 bg-slate-700 rounded"></div>
          <div className="w-11/12 h-2 bg-slate-700 rounded"></div>
          <div className="w-3/4 h-2 bg-slate-700 rounded"></div>
        </div>
        <div className="flex h-auto items-center gap-2 mt-4">
          <Button asChild className="rounded-[.5rem]">
            <a>Visitar</a>
          </Button>
          <Button asChild variant={"outline"} className="rounded-[.5rem]">
            <a>
              {" "}
              <Github size={20} /> <span className="ml-2">Código fonte</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
