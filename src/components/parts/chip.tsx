import React, { MouseEventHandler } from "react"

type Props = {
  onDelete: MouseEventHandler<HTMLButtonElement>
  readOnly?: boolean
} & { children: React.ReactNode }

export const Chip: React.FC<Props> = (props) => {
  const { children, onDelete, readOnly } = props

  return (
    <div className="select-none inline-block align-top whitespace-normal text-base px-3 py-1 m-1 mr-0 shadow-inner bg-white">
      {children}
      {!readOnly && (
        <button className="cursor-pointer" type="button" onClick={onDelete}>
          ✖️
        </button>
      )}
    </div>
  )
}
