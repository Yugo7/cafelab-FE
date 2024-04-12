import {Stack, Text} from "@chakra-ui/react";
import Carousel from "../products/ProductsCarousel.jsx";


const MeExpresso = () => {

    return (
        <Stack>
            <Stack justify="flex-start" align="center" spacing="24px">
                <Text className="font-oliveAntique" align="center" fontWeight="extrabold" fontSize={fontSize} letterSpacing="-0.08em" color="#000000">
                    Subscrição CAFELAB
                </Text>
            </Stack>

            <Stack justify="flex-start" align="center" spacing="24px">
                <Text className="font-oliveAntique" fontWeight="extrabold" fontSize={fontSize2} letterSpacing="-0.08em" color="#000000">

                    <Stack direction={['row']} spacing="4" align="center" justify="space-between">
                        <Text>0/3</Text> <FaBoxOpen/><FaBoxOpen/><FaBoxOpen/>
                    </Stack>
                </Text>
            </Stack>
            <Carousel>
            </Carousel>
        </Stack>
    )
}

export default MeExpresso;