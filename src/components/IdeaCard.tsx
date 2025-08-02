import { Card, CardContent } from "./ui/card";

type Props = {
  idea: string;
};

export default function IdeaCard({ idea }: Props) {
  return (
    <Card className="max-w-md mx-auto mt-4 bg-white shadow-md rounded-2xl p-4">
      <CardContent>
        <p className="text-lg font-medium">{idea}</p>
      </CardContent>
    </Card>
  );
}
