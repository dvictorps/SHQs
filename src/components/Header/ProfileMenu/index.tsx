import { Menu, MenuButton, Button, MenuList, MenuItem, Image, MenuDivider, useColorMode } from "@chakra-ui/react";
import { IconReactIcons } from "../../Icon";

export function ProfileMenu() {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Menu>
            <MenuButton as={Button} backgroundColor='#220147' colorScheme="whiteAlpha" color={'white'}>
                <IconReactIcons name='BiUser' />
            </MenuButton>
            <MenuList>
                <MenuItem >
                    <Image
                        boxSize='1.5rem'
                        borderRadius='full'
                        src='https://placekitten.com/100/100'
                        alt='Fluffybuns the destroyer'
                        mr='1rem'
                    />
                    <span>My Profile</span>
                </MenuItem>
                <MenuItem gap={'1rem'}>
                    <IconReactIcons name="RxDashboard" iconSize={'1.5rem'} />
                    <span>Panel</span>
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={toggleColorMode} gap={'1rem'}>
                    {colorMode === 'light' ? <IconReactIcons name="BiMoon" iconSize={'1.5rem'} /> : <IconReactIcons name="BiSun" iconSize={'1.5rem'} />}
                    <span>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</span>
                </MenuItem>
                <MenuItem gap={'1rem'}>
                    <IconReactIcons name="CiSettings" iconSize={'1.5rem'} />
                    <span>Settings</span>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}