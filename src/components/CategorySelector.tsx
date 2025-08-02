"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Props = {
  categories: string[];
  onSelect: (category: string) => void;
};

export default function CategorySelector({ categories, onSelect }: Props) {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((cat) => (
          <SelectItem key={cat} value={cat}>
            {cat}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
