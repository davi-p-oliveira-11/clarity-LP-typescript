// components/FeatureCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export function FeatureCard({ imageSrc, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-[#1f1f1f] border-0 text-left flex flex-col overflow-hidden">
      <CardHeader className="relative w-full ">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-6 flex flex-col justify-start flex-1">
        <CardTitle className="text-xl font-semibold mb-2 text-white">{title}</CardTitle>
        <p className="text-white text-base leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
