import React from 'react'
import Helmet from "react-helmet"
import { useNavigate,Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../includes/Header'
import { userContext } from '../../App'


export default function Collections() {
    return(
        <>
        <Header/>
        <MainContainer>
            <FilterContainer>
                <FilterTitle>Filter</FilterTitle>
                <FilterList>
                    <FilterItem>
                        <FilterItemLabel for={1}>Horror</FilterItemLabel>
                        <CheckBox id={1} type='checkbox' />
                    </FilterItem>
                    <FilterItem>
                        <FilterItemLabel for={2}>Love</FilterItemLabel>
                        <CheckBox id={2} type='checkbox' />
                    </FilterItem>
                    <FilterItem>
                        <FilterItemLabel for={3}>Drama</FilterItemLabel>
                        <CheckBox id={3} type='checkbox' />
                    </FilterItem>
                    <FilterItem>
                        <FilterItemLabel for={4}>Books</FilterItemLabel>
                        <CheckBox id={4} type='checkbox' />
                    </FilterItem>
                    <FilterItem>
                        <FilterItemLabel for={5}>Comedy</FilterItemLabel>
                        <CheckBox id={5} type='checkbox' />
                    </FilterItem>
                </FilterList>
            </FilterContainer>
            <BookContainer>
                <BookItem>
                    <BookImage src= {require("../image/drama/drama1.jpg")}/>
                    <FavoriteContainer>
                        <FavDetails>
                            <BookName>BookA</BookName>
                            <AuthorName>Author</AuthorName>
                        </FavDetails>
                        <FavouriteImage src= {require("../image/heart1.png")}/>
                    </FavoriteContainer>
                </BookItem>
                <BookItem>
                    <BookImage src= {require("../image/drama/drama1.jpg")}/>
                    <FavoriteContainer>
                        <FavDetails>
                            <BookName>BookA</BookName>
                            <AuthorName>Author</AuthorName>
                        </FavDetails>
                        <FavouriteImage src= {require("../image/heart1.png")}/>
                    </FavoriteContainer>
                </BookItem>
                <BookItem>
                    <BookImage src= {require("../image/drama/drama1.jpg")}/>
                    <FavoriteContainer>
                        <FavDetails>
                            <BookName>BookA</BookName>
                            <AuthorName>Author</AuthorName>
                        </FavDetails>
                        <FavouriteImage src= {require("../image/heart1.png")}/>
                    </FavoriteContainer>
                </BookItem>
                <BookItem>
                    <BookImage src= {require("../image/drama/drama1.jpg")}/>
                    <FavoriteContainer>
                        <FavDetails>
                            <BookName>BookA</BookName>
                            <AuthorName>Author</AuthorName>
                        </FavDetails>
                        <FavouriteImage src= {require("../image/heart1.png")}/>
                    </FavoriteContainer>
                </BookItem>
                <BookItem>
                    <BookImage src= {require("../image/drama/drama1.jpg")}/>
                    <FavoriteContainer>
                        <FavDetails>
                            <BookName>BookA</BookName>
                            <AuthorName>Author</AuthorName>
                        </FavDetails>
                        <FavouriteImage src= {require("../image/heart1.png")}/>
                    </FavoriteContainer>
                </BookItem>
            </BookContainer>
        </MainContainer>
        </>
        
    )
}


const MainContainer = styled.div`

padding: 100px 40px 0;
`
const FilterContainer = styled.div`
border : 1px solid black;
padding :20px;
border-radius :10px;
margin-bottom : 30px;
`
const FilterTitle = styled.h2`
margin-bottom :20px;
color: #7d3538; 
`
const FilterList = styled.div`
display: flex;
flex-wrap: wrap;
`
const FilterItem = styled.div`
margin-right: 50px;
align-items: center;
color: #7d3538; 
font-style: italic;
`
const FilterItemLabel = styled.label`
margin-right: 10px;
`
const CheckBox = styled.input``
const BookContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
`
const BookItem = styled.div`
width: 30%;
margin-bottom:40px;
margin-right:5%;
&:nth-child(3n) {
    margin-right:0;
}
`
const BookImage = styled.img`
width: 80%;
margin-bottom:5px;
height:300px;
border-radius:8px;
`
const FavoriteContainer = styled.div`
align-items:flex-start;
display: flex;
justify-content: space-between;
width: 78%;
`
const FavDetails = styled.div`
`

const FavouriteImage = styled.img`
display: block;
width:20px;
height:20px;
`
const BookName = styled.h3``
const AuthorName = styled.h5``