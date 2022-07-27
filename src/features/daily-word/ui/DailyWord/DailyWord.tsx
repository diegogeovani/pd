// import React from 'react'
import { Text } from 'react-native'

import { Props } from './props'

const DailyWord: React.FC<Props> = ({ dailyWord }: Props) => {
  const { message, reference } = dailyWord
  return (
    <>
      <Text>{message}</Text>
      <Text>
        {reference.book.name}, {reference.chapter}, {Array.from(reference.verses).join('-')}
      </Text>
    </>
  )
}

export default DailyWord
