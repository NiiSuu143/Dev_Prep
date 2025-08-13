import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 items-center border-[1px]">
      <h1>Hello Next Js</h1>
      <Button 
        className="text-bold text-gray-600 bg-white hover:bg-red-400 hover:cursor-pointer"
        variant="default"
        size="icon"
      >Hello</Button>
      <div className="w-full h-10 bg-gray-400 flex gap-2 items-center">
        <Badge className="bg-gray-600" variant={"secondary"}>Top Rated</Badge>
        <Badge className="bg-gray-600" variant="destructive">Popular</Badge>
        <Badge className="bg-gray-600" variant="outline">Upcoming</Badge>
      </div>
    </div>
  );
}
