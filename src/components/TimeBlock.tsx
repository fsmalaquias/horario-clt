import { HStack, Icon, Text, VStack } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import React from 'react';

interface ITimeBlock {
  title: String;
  time: String;
  hasGetCurrentTime?: Boolean;
}

const TimeBlock: React.FC<ITimeBlock> = (props) => {
  return (
    <VStack>
      <Text>{props.title}</Text>
      <HStack alignItems="center" px="4">
        <Text fontSize="4xl">{props.time}</Text>
        {props.hasGetCurrentTime ? 
          <Icon mx="4" size="xl" as={FontAwesome} name="refresh" /> :
          null
        }
      </HStack>
    </VStack>
  )
}

export default TimeBlock;