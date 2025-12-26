import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <h1 className="text-5xl text-blue-500 text-center">Welcome to GoNow</h1>
      <Button size="sm" variant="outline" className="mx-auto cursor-pointer">
        Travel
      </Button>
    </div>
  );
}
