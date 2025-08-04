import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiltersCarsProps } from "./FiltersCars.types";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function FiltersCars(props: FiltersCarsProps) {
  const { clearFilters, setFilters, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };
  return (
    <div className="mt-5 mb-8 flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:gap-5">
      <Select
        onValueChange={(value) => handleFilter("type", value)}
        value={filters.type}
      >
        <SelectTrigger className="lg:w-[180px] md:w-[180px] sm:w-[380px] w-full">
          <SelectValue placeholder="Type" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="Sedan">Sedan</SelectItem>
            <SelectItem value="SUV">SUV</SelectItem>
            <SelectItem value="Coupe">Coupe</SelectItem>
            <SelectItem value="Familiar">Familiar</SelectItem>
            <SelectItem value="Deluxe">Deluxe</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("transmission", value)}
        value={filters.transmission}
      >
        <SelectTrigger className="lg:w-[180px] md:w-[180px] sm:w-[380px] w-full">
          <SelectValue placeholder="Transmission" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="Manual">Manual</SelectItem>
            <SelectItem value="Automatic">Automatic</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("engine", value)}
        value={filters.engine}
      >
        <SelectTrigger className="lg:w-[180px] md:w-[180px] sm:w-[380px] w-full">
          <SelectValue placeholder="Engine" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="Gasoil">Gasoil</SelectItem>
            <SelectItem value="Diesel">Diesel</SelectItem>
            <SelectItem value="Electric">Electric</SelectItem>
            <SelectItem value="Hybrid">Hybrid</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("people", value)}
        value={filters.people}
      >
        <SelectTrigger className="lg:w-[180px] md:w-[180px] sm:w-[380px] w-full">
          <SelectValue placeholder="People" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="7">7</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={clearFilters}>
        Remove Filters <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
