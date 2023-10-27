import { IconBaseProps, IconType } from 'react-icons'
import * as Icons from 'react-icons/all'
import { Icon } from '@chakra-ui/react'

export type IconProps = IconBaseProps & {
    name: keyof typeof Icons
    iconSize?: string | number
}

export function IconReactIcons({ name, iconSize }: IconProps) {
    const CurrentIcon = Icons[name] as IconType

    return <Icon boxSize={iconSize} as={CurrentIcon} />
}