"use client"

import { Command as CommandPrimitive } from "cmdk"
import { X } from "lucide-react"
import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Command, CommandGroup, CommandItem } from "@/components/ui/command"

import { Button } from "../ui/button"

type LabelValue = Record<"value" | "label", string>
type Props = {
  data: LabelValue[]
}
export const MultiSelect = ({ data }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<LabelValue[]>(data)
  const [inputValue, setInputValue] = React.useState("")

  const handleUnselect = React.useCallback((datum: LabelValue) => {
    setSelected((prev) => prev.filter((s) => s.value !== datum.value))
  }, [])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev]
              newSelected.pop()
              return newSelected
            })
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur()
        }
      }
    },
    []
  )

  const selectables = data.filter((datum) => !selected.includes(datum))

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
    >
      <div className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex gap-1 flex-wrap">
          {selected.map((datum) => (
            <Badge key={datum.value} variant="secondary">
              {datum.label}
              <Button
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleUnselect(datum)
                  }
                }}
                onMouseDown={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
                onClick={() => handleUnselect(datum)}
              >
                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
              </Button>
            </Badge>
          ))}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Select data..."
            className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ? (
          <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              {selectables.map((datum) => (
                <CommandItem
                  key={datum.value}
                  onMouseDown={(e: React.MouseEvent) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onSelect={() => {
                    setInputValue("")
                    setSelected((prev) => [...prev, datum])
                  }}
                  className="cursor-pointer"
                >
                  {datum.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  )
}
