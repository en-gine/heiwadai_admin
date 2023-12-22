import { ChevronDownIcon } from "@radix-ui/react-icons"
import * as Select from "@radix-ui/react-select"
import React from "react"
import { Chip } from "./chip"
import { useList } from "react-use"

type Option = {
  label: string
  value: string
}
type Props = {
  options: Option[]
}

const selectValueWrapper =
  "mt-4 mb-4 h-10 bg-white flex items-center p-1 rounded border border-gray-300 justify-between"

const UnOverridableDiv: React.FC<JSX.IntrinsicElements["div"]> = (props) => {
  const { style: _, ...rest } = props

  return <div className={selectValueWrapper} {...rest} />
}

export const MultiSelect: React.FC<Props> = (props) => {
  const { options } = props
  const [value, { push, removeAt }] = useList<string>([])
  const selectedItems = options.filter((o) => value.includes(o.value))

  return (
    <Select.Root onValueChange={(v) => push(v)}>
      <div className={selectValueWrapper}>
        <Select.Value asChild>
          <UnOverridableDiv className="block break-words w-full min-w-0">
            {selectedItems.map((item, i) => (
              <Chip key={item.value} onDelete={() => removeAt(i)}>
                {item.label}
              </Chip>
            ))}
          </UnOverridableDiv>
        </Select.Value>
        <Select.Trigger>
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
      </div>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0_0.25rem_1.5rem_-0.375rem_rgba(22,23,24,0.35),0_0.25rem_0.625rem_-0.375rem_rgba(22,23,24,0.2)] w-[800px]">
          <Select.Viewport>
            {options.map((o) => (
              <Select.Item key={o.value} value={o.value}>
                <Select.ItemText>{o.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
