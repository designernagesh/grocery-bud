import { Flex, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const GroceryForm = ({ addItem }) => {
  const [ inputValue, setInputValue ] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(!inputValue) {
      toast.error("Add any Grocery Bud!")
      return;
    }
    addItem(inputValue);
    setInputValue('');

    localStorage.setItem('items', 'grocery')
  }

  return (
      <form onSubmit={ submitHandler } style={{ margin: '0 auto 20px', maxWidth: '350px'}}>
        <Flex>            
          <Input type="text" mr='10px' value={inputValue} onChange={ changeHandler } />
          <Button size='md' px='20px' type='submit' colorScheme='blue'>
            Add Item
          </Button>
        </Flex>
      </form>
  )
}

export default GroceryForm;