import { useQuery } from "@connectrpc/connect-query"
import React from "react"

import { type Store } from "@/api/v1/admin/Store_pb"
import { getActiveAll } from "@/api/v1/admin/Store-StoreController_connectquery"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { Chip } from "./chip"

const selectValueWrapper =
  "mt-4 mb-4 h-10 bg-white flex items-center p-1 rounded border border-gray-300 justify-between"

const UnOverridableDiv: React.FC<React.JSX.IntrinsicElements["div"]> = (
  props
) => {
  const { style: _, ...rest } = props

  return <div className={selectValueWrapper} {...rest} />
}

type Props = {
  selectedItems: Store["ID"][]
  readOnly?: boolean
  onSelect: (select: Store["ID"]) => void
  onRemove: (select: Store["ID"]) => void
}

export const StoreMultiSelect = ({
  selectedItems,
  readOnly,
  onSelect,
  onRemove
}: Props) => {
  const { data, isLoading } = useQuery(getActiveAll, {})
  if (isLoading) {
    return <div>Loading...</div>
  }
  const stores = data?.Stores
  return (
    <div className="mb-4">
      <UnOverridableDiv className="block break-words w-full min-w-0 my-4">
        {selectedItems.map((item) => {
          const store = stores?.find((str) => str.ID === item)
          return (
            <Chip
              key={item}
              onDelete={() => onRemove(item)}
              readOnly={readOnly}
            >
              {store?.Name}
              {store?.BranchName}
            </Chip>
          )
        })}
      </UnOverridableDiv>
      {!readOnly && (
        <Select
          onValueChange={(val) => {
            if (selectedItems?.includes(val as unknown as Store["ID"])) return
            onSelect(val as unknown as Store["ID"])
          }}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {stores?.map((store) => (
              <SelectItem key={store.ID} value={store.ID}>
                {store.Name}
                {store.BranchName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  )
}
