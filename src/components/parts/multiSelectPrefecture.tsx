import React from "react"

import { Prefecture } from "@/api/v1/shared/Prefecture_pb"

import { Chip } from "./chip"
import { getPrefName, SelectPref } from "./prefecture"

const selectValueWrapper =
  "mt-4 mb-4 h-10 bg-white flex items-center p-1 rounded border border-gray-300 justify-between"

const UnOverridableDiv: React.FC<React.JSX.IntrinsicElements["div"]> = (
  props
) => {
  const { style: _, ...rest } = props

  return <div className={selectValueWrapper} {...rest} />
}

type Props = {
  selectedItems: Prefecture[]
  readOnly?: boolean
  onSelect: (select: Prefecture) => void
  onRemove: (select: Prefecture) => void
}

export const PrefectureMultiSelect = ({
  selectedItems,
  readOnly,
  onSelect,
  onRemove
}: Props) => {
  const handleSelectRegion = (keys: number[]) => {
    keys.forEach((key: number) => {
      if (!selectedItems.includes(key)) {
        onSelect(key)
      }
    })
  }
  const handleValueChange = (key: number) => {
    if (selectedItems?.includes(key)) return
    onSelect(key)
  }
  return (
    <div className="mb-4">
      {!readOnly && (
        <SelectPref
          onValueChange={handleValueChange}
          onSelectRegion={handleSelectRegion}
        />
      )}
      <UnOverridableDiv className="block break-words w-full min-w-0 my-4">
        {selectedItems.map((item) => (
          <Chip key={item} onDelete={() => onRemove(item)} readOnly={readOnly}>
            {getPrefName(item)}
          </Chip>
        ))}
      </UnOverridableDiv>
    </div>
  )
}
