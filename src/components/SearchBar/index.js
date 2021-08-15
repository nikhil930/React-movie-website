import React,{ useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//Image
import searchIcon from'../../images/search-icon.svg';

//Styles
import {Wrapper , Content} from './SeachBar.styles'

const SearchBar =({ setSearchTerm }) => {
    
    const [state , setState]=useState('');
    
    const initiate=useRef(true);

    useEffect(() =>
    {
        if(initiate.current===true){
            initiate.current=false;
            return;
        }
        const timer  =setTimeout(() => {
            setSearchTerm(state);
        },500)

        return ()=>clearTimeout(timer);
    },[setSearchTerm,state]);
    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='searchIcon'/>
                <input type="text"
                placeholder="Search Movie"
                onChange={event =>setState(event.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
    )
}
SearchBar.propTypes = {
    callback: PropTypes.func
}

export default SearchBar;