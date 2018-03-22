import React from 'react'
import { Item } from 'semantic-ui-react'
import styles from './SelfIntro.scss'

const SelfIntro = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Item>
          <Item.Image size="tiny" src="/assets/default.png" />

          <Item.Content>
            <Item.Header as="a">Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              deoihfewofj lkwefjh owehfo ewhf hef hef
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
      </div>
    </div>
  )
}

export default SelfIntro
