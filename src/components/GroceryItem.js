import { ListItem, Checkbox, Button } from '@chakra-ui/react';
import { useState } from 'react';

const GroceryItem = ({ item, deleteItem }) => {
    const [ isChecked, setIsChecked ] = useState(item.completed);

    const checkHandler = () => {
        setIsChecked(!isChecked);
    }
    return (
        <ListItem>
            <Checkbox 
                checked={isChecked} 
                style={{ textDecoration: isChecked && 'line-through' }} 
                onChange={checkHandler} mr='50px' mb='20px'>
                { item.name }
            </Checkbox>
            <Button colorScheme='blue' size='xs' onClick={() => deleteItem(item.id)}>
                Delete
            </Button>
        </ListItem>
    )
}

export default GroceryItem;