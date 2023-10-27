import { Box, Image, Link, Tag, Text } from "@chakra-ui/react";
import ReactStars from 'react-rating-star-with-type'
import { Toon } from "../../utils/types";

type ComicCardType = {
    toon: Toon
}

export function ComicCard({ toon }: ComicCardType) {


    return (
        <Box display={'flex'} flexDir={'column'} width={'15rem'} h='25rem' position={'relative'}>


            <Link display={'flex'} flexDir={'column'} width={'100%'} cursor={'pointer'}>
                <Image src={toon.cover} maxHeight={'20rem'} borderRadius={'5px'} />
                <Tag colorScheme="red" variant='solid' position={'absolute'} top={72} right={2}>{toon.typeToon}</Tag>
                <Box>

                    <Text fontWeight={"bold"} >{toon.name}</Text>
                </Box>
            </Link>
            <Link>{toon.latestChapters[0]}</Link>

            <Box display={'flex'} alignItems={'center'}>
                <ReactStars
                    value={toon.rating}
                /> <Text ml={'0.3rem'}> {toon.rating}</Text>
            </Box>


        </Box >
    )
}