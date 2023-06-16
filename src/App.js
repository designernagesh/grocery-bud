import { Container, Box, Heading } from '@chakra-ui/react'
import GroceryForm from './components/GroceryForm';
import GroceryItems from './components/GroceryItems';
import { useState } from 'react';

function App() {
  const [ groceryItems, setGroceryItems ] = useState([]);

  const addItem = (itemName) => {
    let newItem = {
      name: itemName,
      completed: false,
      id: new Date().getTime().toString()
    }
    setGroceryItems([...groceryItems, newItem]);
  }

  const deleteItem = ( itemId ) => {
    let newGroceryItems = groceryItems.filter( item => item.id !== itemId);
    setGroceryItems(newGroceryItems);
  }

  return (
    <Container maxW='4xl' mt='30px'>
        <Box boxShadow='lg' p='6' rounded='md' bg='white'>
          <Heading as='h1' fontSize='72px' mb='20px' color='#ec1839' align='center'>
            Grocery Bud
          </Heading>
          <GroceryForm addItem={addItem} />
          <GroceryItems groceryItems={groceryItems} deleteItem={deleteItem} />
        </Box>
    </Container>
  );
}

export default App;
