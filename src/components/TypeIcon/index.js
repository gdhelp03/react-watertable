// @flow

import React from "react"
import TextFields from "@material-ui/icons/TextFields"
import List from "@material-ui/icons/List"
import FormatListNumbered from "@material-ui/icons/FormatListNumbered"
import InsertDriveFile from "@material-ui/icons/InsertDriveFile"
import Collections from "@material-ui/icons/Collections"
import Image from "@material-ui/icons/Image"
import CheckBox from "@material-ui/icons/CheckBox"
import LocalOffer from "@material-ui/icons/LocalOffer"
import AccessTime from "@material-ui/icons/AccessTime"

export const TypeIcon = props => {
  const { type, multiple } = props
  switch (type) {
    case "text": {
      return <TextFields {...props} />
    }
    case "select": {
      if (multiple) return <List {...props} />
      return <LocalOffer {...props} />
    }
    case "file": {
      return <File {...props} />
    }
    case "image": {
      if (multiple) return <Collections {...props} />

      return <Image {...props} />
    }
    case "boolean": {
      return <CheckBox {...props} />
    }
    case "numeric": {
      return (
        <div
          {...props}
          style={{ ...props.style, fontSize: 14, fontWeight: "bold" }}
        >
          #
        </div>
      )
    }
  }
  return null
}

export default TypeIcon