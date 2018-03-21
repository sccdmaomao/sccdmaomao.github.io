import * as Icons from 'components/Icons/contactIcons'
import React from 'react'
import { Image } from 'semantic-ui-react'
// import styles from './Contact.scss'

const ContactMethod = () => {
  const icons = Object.keys(Icons).map(name => {
    const IconImage = Icons[name]
    return (
      <li
        key={`ContactMethod-${name}`}
        style={{ width: '50px', height: '50px' }}
      >
        {name}
        <Image>
          <IconImage />
        </Image>
      </li>
    )
  })
  return <ul>{icons}</ul>
}

const Contact = () => {
  return (
    <div>
      My contact info
      <ContactMethod />
    </div>
  )
}

export default Contact
