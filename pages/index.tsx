import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '../utils/fetchApi'
import Property from '../components/Property'

const Banner = ({ purpose, title1, title2, desc1, desc2, ImageUrl, linkName, buttonText }: any) => (
  <Flex flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} m={'10'}>
    <Image src={ImageUrl} width={500} height={300} alt={'banner'} />
    <Box p={'5'}>
      <Text color={'gray.500'} fontWeight={'medium'} fontSize={'sm'}>{purpose}</Text>
      <Text fontWeight={'bold'} fontSize={'3xl'}>{title1} <br /> {title2}</Text>
      <Text color={'gray.700'} fontSize={'lg'} pt={'3'} pb={'3'}>{desc1} <br /> {desc2}</Text>
      <Button fontSize={'xl'} bg={'blue.300'} color={'white'}>
        <Link href={`${linkName}`}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)


export default function Home({ propertiesForRent, propertiesForSale }: any) {
  return (
    <Box>
      <Banner purpose='Rent A Home'
        title1='Rental Homes For'
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        ImageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />

      <Flex flexWrap={'wrap'}>
        {propertiesForRent.map((property: any) => <Property property={property} key={property.id} />)}
      </Flex>

      <Banner purpose='BUY A HOME'
        title1=' Find, Buy & Own'
        title2='Your Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        ImageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      <Flex flexWrap={'wrap'}>
        {propertiesForSale.map((property: any) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
