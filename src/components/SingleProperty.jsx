

import { Flex, Box, Image, Badge, useColorModeValue, Tooltip, IconButton, Icon, background } from '@chakra-ui/react';
import { FiHeart } from "react-icons/fi";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtubDuotone } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
export default function SingleProperty(props) {
    let { image, tag, price, title, address, beds, bathrooms, area, type } = props;

    const handleImgLoadingError = (e) => {
        // default image add, if associated image is not available...
        e.target.src = 'https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=1200';
    };

    const truncatedAddress = address.split(" ").slice(0, 4).join(" ");
    return (
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            maxW="xs"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
            style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px - 20px, rgba(0, 0, 0, 0.3) 0px 30px 60px - 30px, rgba(10, 37, 64, 0.35) 0px - 2px 6px 0px inset" }}
        >
            <Image src={image} alt={`Picture of ${title}`}
                onError={(e) => handleImgLoadingError(e)}
                roundedTop="lg" h={"200px"} w={"100%"} />

            <Box p="6">
                <Box display="flex" alignItems="baseline" mt={"-50px"} >
                    {tag && (
                        <Badge rounded="full" fontSize="0.8em" colorScheme="red">
                            {tag} {type}
                        </Badge>
                    )}
                </Box>
                <Flex justifyContent="space-between" alignContent="center" mt={"25px"}>
                    <Box color={useColorModeValue('#6F67EE', 'white')}>
                        <Box as="span" color={'#6F67EE'} fontSize="2xl" fontWeight={"600"}>
                            ${price}
                        </Box>
                        <Box as="span" color={'gray.600'} fontSize="md">
                            /month
                        </Box>
                    </Box>
                    <Tooltip label="Add to favourite" bg="white" placement={'top'} color={'gray.800'} fontSize={'0.7em'} >
                        <IconButton
                            aria-label="Like"
                            color={"#4b0082"}
                            icon={<Icon as={FiHeart} />}
                            variant="solid"
                            _hover={{ color: "red.800" }}
                            borderRadius={"50%"}
                        />
                    </Tooltip>
                </Flex>
                <Flex justifyContent="space-between" alignContent="center">
                    <Box fontSize="xl" fontWeight="semibold" as="h3" lineHeight="tight" isTruncated>
                        {title}
                    </Box>

                </Flex>
                <Flex justifyContent="space-between" alignContent="center">
                    <Box fontSize="md" color={useColorModeValue('gray.600', 'white')}>
                        {truncatedAddress}...
                    </Box>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center" mt={"20px"}>
                    <Box fontSize="xs" color={useColorModeValue('gray.600', 'white')} style={{ display: "flex" }}>
                        <LiaBedSolid style={{ fontSize: "1.25rem" }} /> {beds} Beds
                    </Box>
                    <Box fontSize="xs" color={useColorModeValue('gray.600', 'white')} style={{ display: "flex" }}>
                        <PiBathtubDuotone style={{ fontSize: "1.25rem" }} />  {bathrooms} Bathrooms
                    </Box>
                    <Box fontSize="xs" color={useColorModeValue('gray.600', 'white')} style={{ display: "flex" }}>
                        <BiArea style={{ fontSize: "1.25rem" }} />  {area}
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}


