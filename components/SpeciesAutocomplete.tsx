import React, { useState } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const treeSpecies = [
  "Oak",
  "Maple",
  "Pine",
  "Birch",
  "Cedar",
  "Willow",
  "Elm",
  "Ash",
  "Beech",
  "Spruce",
  // Add more species as needed
];

interface SpeciesAutocompleteProps {
  onSpeciesChange: (species: string) => void; // Define the type for the prop
}

export function SpeciesAutocomplete({ onSpeciesChange }: SpeciesAutocompleteProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value ? value : "Select tree species..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search tree species..." />
          <CommandEmpty>No species found.</CommandEmpty>
          <CommandGroup>
            {treeSpecies.map((species) => (
              <CommandItem
                key={species}
                onSelect={() => {
                  setValue(species);
                  setOpen(false);
                  onSpeciesChange(species);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === species ? "opacity-100" : "opacity-0"
                  )}
                />
                {species}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}