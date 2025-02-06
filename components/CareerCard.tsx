import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface CareerCardProps {
  id: string;
  title: string;
  why: string;
}

export default function CareerCard({ id, title, why }: CareerCardProps) {
  return (
    <div className="bg-card border rounded-lg p-6 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{why}</p>
      </div>
      <Link href={`/details/${id}`}>
        <Button className="w-full">See Detailed Roadmap</Button>
      </Link>
    </div>
  );
}