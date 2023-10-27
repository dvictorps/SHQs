import { Box, Divider, Text } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { request, requestWeekly } from "../../mock/mock"
import { ComicCard } from "../../components/ComicCard"
import { PopularTab } from "../../components/PopularTab"

export default function Home() {

    return (
        <>
            <Header />
            <Box display={'flex'} justifyContent={'center'} mx='3rem'>
                <Box display={'flex'} flexDir={'column'} w={'80%'}>
                    <Box m={'1rem'} borderRadius={'10px'} backgroundColor={'blackAlpha.500'} p='1rem'  >
                        <Text fontSize={'2xl'}>Pouplar Today</Text>
                        <Divider />
                        <Box gap={'1rem'} m={'1rem'} display={'flex'}>
                            {request.map(card =>

                                <ComicCard toon={card} key={card.id} />
                            )}
                        </Box>
                    </Box>

                    <Box m={'1rem'} borderRadius={'10px'} backgroundColor={'blackAlpha.500'} p='1rem'  >
                        <Text fontSize={'2xl'}>Latest Releases</Text>
                        <Divider />
                        <Box gap={'1rem'} m={'1rem'} display={'flex'}>
                            {request.map(card =>

                                <ComicCard toon={card} key={card.id} />
                            )}
                        </Box>
                    </Box>
                </Box>

                <Box m={'1rem'} borderRadius={'10px'} backgroundColor={'blackAlpha.500'} p='1rem' w={'20%'}>
                    <Text fontSize={'2xl'}>Ranks</Text>
                    <Divider />
                    <Box mt={'1rem'}>
                        <PopularTab toonAll={request} toonMonthly={request} toonWekly={requestWeekly} />
                    </Box>
                </Box>
            </Box >
        </>
    )
}