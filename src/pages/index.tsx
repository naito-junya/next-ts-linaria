import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Style } from 'util'
import { styled } from 'linaria/react'

const Title = styled.h1`
 color: #f15f79;
`;


const Home: NextPage = () => {
  return (
    <Title>タイトルタイトルタイトルタイトル</Title>
  )
}

export default Home
