import { Button, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '../public/images/logo.png'

const Header = () => {
  return (
    <div style={{ zIndex: 1 }}>
      <HStack width='90vw' display='flex' justifyContent='space-between'>
        <HStack>
          <Image
            src={Logo}
            alt='logo'
            width={50}
            height={50}
            style={{ borderRadius: '25px' }}
          />
        </HStack>
        <HStack spacing={30}>
          <Text color='black' fontWeight={800}>
            Home
          </Text>
          <Text color='black' fontWeight={800}>
            About
          </Text>
          <Text color='black' fontWeight={800}>
            Stuffs
          </Text>
          <Text color='black' fontWeight={800}>
            Contact
          </Text>
        </HStack>
        <HStack>
          <Button
            style={{
              padding: '10px 18px',
              alignItems: 'flex-start',
              gap: '8px',
              borderRadius: '20px',
              background: '#FFD85A',
              color: 'black',
              fontWeight: 700,
            }}
          >
            <Text>Login</Text>
          </Button>
        </HStack>
      </HStack>
    </div>
  )
}

export default Header
