import { Card, CardContent, CardHeader, CardTitle } from "@/_components/ui/card";
import { FolderClosed } from "lucide-react";
import { CardLink } from "./card-link";
import { Button } from "@/_components/ui/button";
import { Text } from "@/_components/text";

export function CardProjectsSkeleton() {
    return <Card className="w-full rounded-[.5rem]">
        <CardHeader className="flex flex-row justify-between">
            <CardTitle className="flex gap-2">
                <FolderClosed /> <span>Projetos</span>
            </CardTitle>
            <CardLink href="/projects">Saber mais</CardLink>
        </CardHeader>

        <CardContent className="flex flex-col  lg:flex-row lg:justify-between">
            <span
                className="h-56 w-96   lg:m-0  max-w-sm animate-pulse" />
            <article className="flex flex-col justify-center gap-1 text-left lg:text-right">
                <CardTitle className="mb-1.5 text-lg lg:text-xl w-10 h-2 animate-pulse"></CardTitle>
                <Text isDifferent={true} className="w-10 h-2 animate-pulse">Lorem ipsum dolor sit, amet consectetur </Text>
                <div className="flex h-auto items-center lg:justify-end gap-2 mt-2">
                    <Button asChild className="rounded-[.5rem] w-10 animate-pulse">
                    </Button>
                    <Button asChild variant={"outline"} className="rounded-[.5rem] w-10 animate-pulse">
                    </Button>
                </div>
            </article>
        </CardContent>
    </Card>
}