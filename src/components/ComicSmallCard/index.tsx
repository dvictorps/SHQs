import { Box, Image, List, ListItem, Text, Link } from "@chakra-ui/react"
import { Toon } from "../../utils/types"
import ReactStars from 'react-rating-star-with-type'

type ComicSmallCardType = {
    toon: Toon
}

export function ComicSmallCard({ toon }: ComicSmallCardType) {
    return (
        <Box w={'100%'}>
            <Box display={'flex'}>

                <Image cursor={'pointer'} src={toon.cover} maxH={'8rem'} minH={'8rem'} maxW={'5rem'} minW='5rem' mx='1rem' />

                <Box display={'flex'} flexDir={'column'} flexWrap={'wrap'} >
                    <Link fontWeight={'medium'} > {toon.name} </Link>
                    <Box display={'inline-flex'} alignItems={'center'}>
                        <ReactStars
                            value={toon.rating}
                        /> <Text ml={'0.3rem'} > {toon.rating}</Text>

                    </Box>
                    <Box >
                        <span>Tags:</span>  {toon.tags.map(tag => <Link >{tag}&nbsp;</Link>)}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}