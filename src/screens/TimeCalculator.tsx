
import React from 'react';
import { Pressable, Box, HStack, Image, Text, VStack, Stack, Input, Icon } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import TimeBlock from '../components/TimeBlock';

const TimeCalculator: React.FC = () => {
    return (
      <Box safeArea>
        <VStack px="2">
          <Text>Horários</Text>
          <Stack space={1}>
            <TimeBlock title="Entrada" time="08:00" hasGetCurrentTime={true} />
            <TimeBlock title="Intervalo" time="12:00" hasGetCurrentTime={true} />
            <TimeBlock title="Volta do Interavlo" time="13:00" hasGetCurrentTime={true} />
          </Stack>
          <Text>Previsão de saída</Text>
          <Stack space={4} px="4">
            <TimeBlock title="Saída" time="17:00" />
            <TimeBlock title="Tolerância -10 minutos" time="16:50" />
            <TimeBlock title="Tolerância +10 minutos)" time="17:10" />
          </Stack>
        </VStack>
      </Box>
    )
}

export default TimeCalculator