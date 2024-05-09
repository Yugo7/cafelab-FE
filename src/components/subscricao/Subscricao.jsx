import SidebarWithHeader from "../shared/SideBar.jsx";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useBreakpointValue,
    useDisclosure
} from "@chakra-ui/react";
import {FaHandshake} from "react-icons/fa";
import {useShoppingCart} from "../context/ShoppingCartContext.jsx";
import {useNavigate} from "react-router-dom";
import ProductsCarousel from "../products/ProductsCarousel.jsx";
import React from "react";
import {SubscriptionProvider} from "../context/SubscriptionContext.jsx";
import ModalKit from "./ModalKit.jsx";
import ModalQuiz from "./ModalQuiz.jsx";

const Subscricao = () => {

    const fontSize = useBreakpointValue({base: "5xl", md: "62px"});
    const stackSpacing = useBreakpointValue({base: "20px", md: "40px"});
    const sectWidth = useBreakpointValue({base: "100%", md: "50%"});
    const modalSize = useBreakpointValue({base: "full", md: "90vw"});
    const modalHeight = useBreakpointValue({base: "", md: "90vh"});

    const navigate = useNavigate();

    const {isOpen, onOpen, onClose} = useDisclosure()

    const {addSubscription, emptyCart} = useShoppingCart();
    const subscricao = {
        id: 999,
        nome: "Fé no Cafelab",
        preco: 19.99,
        imagem: "assets/bundle.png",
        descricao: "3 embalagens de 200g em grãos ou moídas de acordo com a sua indicação de consumo."
    };

    function feNoCafelab() {
        emptyCart(true);
        addSubscription(subscricao);
        navigate('/subscricao/checkout');
    }

    return (
        <SidebarWithHeader>
            <Stack backgroundColor={"#81938c"} p={8}>
                <Stack justify="flex-start" align="center" my={6} mx={4} spacing="24px">
                    <Text className="cafelab" align="center" fontWeight="extrabold" fontSize={fontSize}  color="#000000">
                        SUBSCRIÇÃO CAFELAB
                    </Text>
                </Stack>

                {
                    /*
                <Stack alignItems={"center"} width={"100%"}>
                    <Card height="100%"
                          maxW='100%'
                          backgroundColor={"#FFFFFF"}>
                        <CardBody mx={8}>
                            <Stack direction={"row"}>
                                <Stack maxHeight={"100px"}>
                                    <Image
                                        alignSelf="center"
                                        objectFit='cover'
                                        src='assets/bundle.png'
                                        alt='Chakra UI'
                                        m={6}
                                        boxSize={"100%"}
                                        borderRadius='lg'
                                    />
                                </Stack>
                                <Stack>
                                    <Stack justify="flex-center" align="center" fontSize={"3xl"} spacing="0px">
                                        <Text className="font-oliveAntique" fontWeight="extrabold" letterSpacing="-0.08em" color="#000000">
                                            Kit Experiência Cafelab
                                        </Text>
                                    </Stack>
                                    <Text align="center">
                                        Para os nossos clientes decididos, ou menos aventureiros.
                                        <br/>
                                        Escolha e monte sua própria subscrição com os cafés que já ama.
                                        <br/>
                                        Selecione três dos nossos
                                        cafés especiais e receba todos os meses na sua casa, o melhor do Cafelab.
                                        <br/>
                                    </Text>
                                    <Text align="center" fontSize={"xs"} mt={6}>
                                        8 embalagens de 13 em grãos ou moídas<br/> de acordo com a sua indicação de consumo.
                                    </Text>
                                </Stack>
                            </Stack>
                        </CardBody>
                    </Card>
                </Stack>
                */
                }
                <Stack direction={["column", 'row']} spacing="6" align="center" justify="space-between">
                    <Stack spacing={stackSpacing} alignItems={"center"} width={sectWidth}>
                        <Card height="100%"
                              maxW='2xl'
                              backgroundColor={"#FFFFFF"}>
                            <CardHeader align={"center"}>
                                <Box my={8}>
                                </Box>
                                <Stack justify="flex-start" align="center" fontSize={"3xl"} spacing="0px">
                                    <Text className="font-headline" textAlign={"center"} fontWeight="extrabold" letterSpacing="-0.08em" color="#000000">
                                        Fé no Cafelab
                                    </Text>
                                </Stack>
                            </CardHeader>
                            <CardBody mx={4}>
                                <Box my={5}>
                                </Box>
                                <Text align="center">
                                    Para os que nos conhecem, e amam uma surpresa.
                                    <br/>
                                    Quem já pediu, sabe que uma indicação do nosso especialista nunca falha!
                                    <br/>
                                    Receba na sua casa uma coleção de três cafés especiais, escolhidos a dedo todos os meses pelo nosso especialista.
                                    <br/>

                                </Text>
                                <Text align="center" fontSize={"xs"} mt={6}>
                                    3 embalagens de 200g em grãos ou moídas<br/> de acordo com a sua indicação de consumo.

                                </Text>
                            </CardBody>
                            <Image
                                objectFit='cover'
                                src='assets/bundle.png'
                                alt='Chakra UI'
                                m={6}
                            />

                            <CardFooter alignSelf="center">
                                <Flex justifyContent="center" alignItems="center">
                                    <Button leftIcon={<FaHandshake/>} onClick={() => feNoCafelab()} size='lg' height='48px' width='200px' border='2px'
                                            variant='outline' colorScheme='#FEEBC8'>
                                        Confio
                                    </Button>
                                </Flex>
                            </CardFooter>
                        </Card>
                    </Stack>
                    <Stack width={sectWidth} alignItems={"center"}>
                        <Card height="100%"
                              maxW='2xl'
                              backgroundColor={"#FFFFFF"}>
                            <CardHeader align={"center"}>
                                <Stack justify="flex-start" align="center" fontSize={"3xl"} spacing="0px">
                                    <Text className="font-headline" fontWeight="extrabold" letterSpacing="-0.08em" color="#000000">
                                        Depois do Cafelab,
                                        <br/>eu me expresso
                                    </Text>
                                </Stack>
                            </CardHeader>
                            <CardBody mx={8}>
                                <Text align="center">
                                    Para os nossos clientes decididos, ou menos aventureiros.
                                    <br/>
                                    Escolha e monte sua própria subscrição com os cafés que já ama.
                                    <br/>
                                    Selecione três dos nossos
                                    cafés especiais e receba todos os meses na sua casa, o melhor do Cafelab.
                                    <br/>
                                </Text>
                                <Text align="center" fontSize={"xs"} mt={6}>
                                    3 embalagens de 200g em grãos ou moídas<br/> de acordo com a sua indicação de consumo.
                                </Text>
                            </CardBody>
                            <Image
                                alignSelf="center"
                                objectFit='cover'
                                src='assets/bundle.png'
                                alt='Chakra UI'
                                m={6}
                                boxSize={"80%"}
                                borderRadius='lg'
                            />

                            <CardFooter alignSelf="center">
                                <Stack alignSelf="center" justifyContent="center">
                                    <Button leftIcon={<FaHandshake/>} onClick={onOpen} size='lg' height='48px' border='2px'
                                            variant='outline' colorScheme='#FEEBC8'>
                                        Já sei o meu cafelab
                                    </Button>
                                    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}
                                           motionPreset='slideInBottom' size={modalSize}>
                                        <ModalOverlay/>
                                        <ModalContent>
                                            <ModalHeader>Escolha seus cafés!</ModalHeader>
                                            <ModalCloseButton/>
                                            <ModalBody  overflowY="auto">
                                                <SubscriptionProvider>
                                                    <ProductsCarousel/>
                                                </SubscriptionProvider>

                                            </ModalBody>
                                            <ModalFooter>
                                                <Button onClick={onClose}>Fechar</Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Stack>
                            </CardFooter>
                        </Card>
                    </Stack>

                </Stack>
                <ModalQuiz/>

            </Stack>
        </SidebarWithHeader>
    );

}

export default Subscricao;
