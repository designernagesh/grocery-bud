import { Container, Box, Heading } from '@chakra-ui/react'
import GroceryForm from './components/GroceryForm';
import GroceryItems from './components/GroceryItems';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

let setLocalStorage = (items) => {
  localStorage.setItem('groceryLists', JSON.stringify(items))
}
let LocalStorageListItems = JSON.parse(localStorage.getItem('groceryLists') || '[]')
function App() {
  const [ groceryItems, setGroceryItems ] = useState(LocalStorageListItems);

  const addItem = (itemName) => {
    let newItem = {
      name: itemName,
      completed: false,
      id: new Date().getTime().toString()
    }
    let newItems = [...groceryItems, newItem]
    setGroceryItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item added to the list Successfully.');
  }
  
  const deleteItem = ( itemId ) => {
    let newGroceryItems = groceryItems.filter( item => item.id !== itemId);
    setGroceryItems(newGroceryItems);
    setLocalStorage(newGroceryItems);
    toast.success('Item removed from the list Successfully.');
  }

  return (
    <Container maxW='4xl' mt='30px'>
        <ToastContainer position='top-center' />
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
