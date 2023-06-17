import { UnorderedList, Flex } from '@chakra-ui/react'
import GroceryItem from './GroceryItem';

const GroceryItems = ({groceryItems, deleteItem}) => {
    return (
        <Flex justifyContent='center'>            
            <UnorderedList listStyleType='none'>
            {
                groceryItems.map(item => {
                    return (
                        <GroceryItem key={item.id} item={item} deleteItem={deleteItem} />
                    )
                })
            }
            </UnorderedList>
        </Flex>
    )
}

export default GroceryItems;