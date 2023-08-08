import React from 'react';
import { Box, Button, Select, FormControl, FormLabel, Input, HStack, Flex } from '@chakra-ui/react';

const SearchFilterSection = ({ handleFiltersChange, setSelectedFilters, selectedFilters }) => {

    const handleChange = (event) => {
        event.preventDefault()
        let { name, value } = event.target;
        setSelectedFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };


    const handleSearch = () => {
        handleFiltersChange(selectedFilters);
    };

    return (
        <Box w={"90%"} margin={"auto"} p={"10px"}
            borderRadius={"2px"}
            boxShadow={"rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"}
            style={{
                display: "flex", justifyContent: "space-around", alignContent: "center",
                marginBottom: "25px",
                marginTop: "30px",

            }}>
            <HStack spacing={8} align="center"  >
                <FormControl width="250px">
                    <FormLabel htmlFor="selectField-location" fontSize={"15px"} color={"gray.500"} lineHeight={"6px"}>Location</FormLabel>
                    <Select id="selectField-location" name="location"
                        defaultValue={selectedFilters.location}
                        onChange={
                            handleChange
                        }>
                        <option value="">-- Select Location --</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                        <option value="San Diego">San Diego</option>
                        <option value="San Jose">San Jose</option>
                        <option value="Dallas">Dallas</option>
                    </Select>
                </FormControl>

                <FormControl width="250px" fontSize={"15px"} color={"gray.500"} lineHeight={"6px"}>
                    <FormLabel htmlFor="dateField">When</FormLabel>
                    <Input type="date" id="dateField" name="availableDate"
                        min={new Date().toISOString().split('T')[0]}
                        lineHeight={"18px"} onChange={handleChange} value={selectedFilters.availableDate} />
                </FormControl>

                <FormControl width="250px">
                    <FormLabel htmlFor="selectField" fontSize={"15px"} color={"gray.500"} lineHeight={"6px"}>Price</FormLabel>
                    <Select id="selectField" name="price" defaultValue={selectedFilters.price} onChange={
                        handleChange
                    }>
                        <option value="">-- Select Price-Range --</option>
                        <option value={"2500-3000"}>$2500 - $3000</option>
                        <option value={"3100-3500"}>$3100 - $3500</option>
                        <option value={"3600-4000"}>$3600 - $4000</option>
                        <option value={"4000-4500"}>$4000 - $4500</option>
                        <option value={"4600-5000"}>$4600 - $5000</option>
                    </Select>
                </FormControl>

                <FormControl width="250px">
                    <FormLabel htmlFor="selectField" fontSize={"15px"} color={"gray.500"} lineHeight={"6px"}>Property Type</FormLabel>
                    <Select id="selectField" name="type" defaultValue={selectedFilters.type} onChange={
                        handleChange
                    }>
                        <option value="">-- Select Property Type --</option>
                        <option value="house">House</option>
                        <option value="duplex">Duplex</option>
                        <option value="villa">Villa</option>
                        <option value="apartment">Apartment</option>
                    </Select>
                </FormControl>
                <Flex width={"100px"} height={"inherit"} align={"center"} justify={"center"}>
                    <Button backgroundColor="#6F67EE" color={"white"} _hover={{
                        bg: 'pink.300',
                    }}
                        onClick={handleSearch}>Search</Button>
                </Flex>
            </HStack>
        </Box>
    );
}

export default SearchFilterSection;
