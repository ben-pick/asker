import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export default function MessageInput() {
  return (
    <div className="flex w-full gap-1">
      <Input placeholder="Message" className="text-md h-12" />
      <Button variant="outline" size="icon" className="h-12 w-12">
        <PaperPlaneIcon className="h-5 w-5" />
      </Button>
    </div>
  );
}
