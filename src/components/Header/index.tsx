import { Box, Link, Text } from "@chakra-ui/react";
import { IconReactIcons } from "../Icon";
import { List, ListItem } from "@chakra-ui/react";
import { ProfileMenu } from "./ProfileMenu";

export function Header() {
    return (
        <Box display={'flex'} flexDirection={'column'} width={'100%'} height={'6rem'} backgroundColor={'#14002b'}>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} height={'100%'} px={'10rem'}>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} color="#FFFF">
                    <IconReactIcons name='GiSecretBook' iconSize={'2rem'} />
                    <Text fontSize={'3xl'} >ToonsBook</Text>
                </Box>


                <Box>
                    <ProfileMenu />
                </Box>
            </Box>

            <Box backgroundColor={'#220147'} >
                <List styleType='none' p={'0'} overflow={'hidden'} display={'flex'} alignItems={'center'} mx='10rem' color="#FFFF" gap={'1rem'}>
                    <ListItem float={'left'} >
                        <Link display={'block'} _hover={{ backgroundColor: '#14002b' }} p={'10px'}
                        >
                            Home
                        </Link>
                    </ListItem>
                    <ListItem float={'left'} >
                        <Link display={'block'} _hover={{ backgroundColor: '#14002b' }} p={'10px'}
                        >
                            Stories
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}