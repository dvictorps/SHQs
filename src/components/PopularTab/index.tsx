import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Toon } from "../../utils/types";
import { ComicSmallCard } from "../ComicSmallCard";

type PopularTabType = {
    toonAll: Toon[]
    toonMonthly: Toon[]
    toonWekly: Toon[]
}


export function PopularTab({ toonAll, toonMonthly, toonWekly }: PopularTabType) {

    return (
        <Tabs variant={'solid-rounded'} colorScheme="purple">
            <TabList>
                <Tab>All</Tab>
                <Tab>Monthly</Tab>
                <Tab>Weekly</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    {toonAll.map(toon => <Box my={'1rem'}> <ComicSmallCard toon={toon} /></Box>)}
                </TabPanel>
                <TabPanel>
                    {toonMonthly.map(toon => <Box my={'1rem'}>  <ComicSmallCard toon={toon} /> </Box>)}
                </TabPanel>
                <TabPanel>
                    {toonWekly.map(toon => <Box my={'1rem'}>  <ComicSmallCard toon={toon} /> </Box>)}
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}