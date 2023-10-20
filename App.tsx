import { config } from '@gluestack-ui/config';
import { Box, Button, ButtonText, FormControl, FormControlLabel, FormControlLabelText, GluestackUIProvider, Heading, Input, InputField, Text } from '@gluestack-ui/themed';
import { useState } from 'react';

export default function App() {
    const [idade, setidade] = useState("18")
    const [resultado, setresultado] = useState("")
  return (
    <GluestackUIProvider config={config}>
      <Box bg="$blue700" h={'$full'} justifyContent='center' alignItems='center'>
      <Heading>Etec</Heading>
      <FormControl w={"$full"} px={"$5"}>
        <FormControlLabel>
          <FormControlLabelText>Idade</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField placeholder="Exemplo: 18"/>
        </Input>
        <Button mt={"$2"}>
          <ButtonText>Calcular</ButtonText>
        </Button>
      </FormControl>

      <Text>Graziani</Text>

      </Box>
    </GluestackUIProvider>
  );
}
