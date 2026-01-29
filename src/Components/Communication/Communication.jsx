import React from 'react'
import { MdConnectWithoutContact } from 'react-icons/md'

const Communication = () => {
  return (
    <div className="fixed z-50  bottom-20 right-5 ">
      <div className="h-40 max-w-16 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic consequuntur perspiciatis
        molestias amet ullam magnam ipsa perferendis, sapiente aliquam sed nesciunt cumque
        doloremque, quia quidem fugit repellat quo maiores itaque.
      </div>
      <button
        aria-label="Communication Button"
        className="flex bg-white items-center justify-center rounded-full size-10 "
      >
        <MdConnectWithoutContact />
      </button>
    </div>
  )
}

export default Communication
