import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="p-4 space-y-4">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>
            <Badge>バッジ</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DropdownMenu>
            <DropdownMenuTrigger>ドロップダウン</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>メニュー1</DropdownMenuItem>
              <DropdownMenuItem>メニュー2</DropdownMenuItem>
              <DropdownMenuItem>メニュー3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
        <CardFooter>
          <Button>ボタン</Button>
        </CardFooter>
      </Card>
    </div>
  );
}