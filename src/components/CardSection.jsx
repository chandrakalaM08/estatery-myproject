import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import SearchFilterSection from './SearchFilterSection'
import SingleProperty from './SingleProperty'
import { fetchProperties } from '../redux/Reducer/PropertyActions';
import { setFilters, setSearchQuery } from '../redux/actionTypes';
import { SimpleGrid } from '@chakra-ui/react';
import Loader from './Loader';
const CardSection = () => {

    const dispatch = useDispatch();
    const properties = useSelector((state) => state.propertiesReducer.properties);
    const loading = useSelector((state) => state.propertiesReducer.loading);
    const error = useSelector((state) => state.propertiesReducer.error);
    const filters = useSelector((state) => state.propertiesReducer.filters);
    const searchQuery = useSelector((state) => state.propertiesReducer.searchQuery);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({
        location: '',
        availableDate: '',
        price: '',
        type: '',
    });

    console.log("properties,", typeof properties, properties.length, properties)
    // Making a param object here for applying filtering

    let paramsObject = {};

    if (filters.availableDate) {
        let searchDate = filters.availableDate
        searchDate = moment(searchDate).format('DD-MM-YYYY')
        paramsObject.availableDate = searchDate
    }

    if (filters.location) {
        paramsObject.location = filters.location;
    };
    if (filters.type) {
        paramsObject.type = filters.type
    }

    if (filters.price !== "") {
        let priceRange = filters.price.trim().split('-').map(Number)
        paramsObject.price_lte = priceRange[1]
        paramsObject.price_gte = priceRange[0]
    }


    useEffect(() => {
        dispatch(fetchProperties(paramsObject))
    }, [dispatch, filters, searchQuery]);

    const handleFiltersChange = (filters) => {
        dispatch(setFilters(filters));
    };


    const handleSearch = () => {
        dispatch(setSearchQuery(searchTerm));
    };



    if (error) {
        return <div>
            <h1> Error occured : error</h1>
            <h2>Kindly refresh ...!!!</h2>
        </div>;
    }

    return (<>
        <div style={{ width: "95%", margin: "auto", marginTop: "30px" }}>
            <div style={{
                width: "95%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px",
            }}>
                <h1 style={{ fontSize: "35px", fontWeight: "600", marginLeft: "58px", marginTop: "15px" }}>Search properties to rent</h1>
                <input type='text' placeholder='Search with Search Bar' style={{
                    border: "1px solid grey",
                    height: "35px",
                    borderRadius: "4px",
                    textAlign: "center"

                }} />
            </div>
        </div>
        <SearchFilterSection handleFiltersChange={handleFiltersChange}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters} />

        {loading ? <Loader /> :
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="4" w={"90%"} margin={"auto"} >
                {properties.length === 0 ?
                    <div style={{ display: "flex", width: "300%", justifyContent: 'center', flexDirection: "column" }}>
                        <img src='https://as1.ftcdn.net/v2/jpg/05/17/31/54/1000_F_517315479_5APCsHqS3fFO0NAHewzDu9XS8Y2PhLBy.jpg' width={"220px"} />
                        <h1 fontSize={"95px"}>
                            No Match Found For Selected Criteria ...
                        </h1>
                    </div>
                    : properties.map((property) => {
                    return <SingleProperty {...property} key={property.id} />
                })}
            </SimpleGrid>
        }
    </>

    )
}

export default CardSection