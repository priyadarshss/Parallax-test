import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import L1 from '../public/images/l1.png'
import L2 from '../public/images/l2.png'
import L3 from '../public/images/l3.png'
import L4 from '../public/images/l4.png'
import Sun from '../public/images/sun.png'
import Image from 'next/image'
import TextBlock from './TextBlock'

const ParallaxSection = () => {
  return (
    <div>
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0}>
          <Image
            src={Sun}
            alt='sun'
            style={{
              position: 'absolute',
              right: '20vw',
              top: '20vh',
              filter: 'blur(20px)'
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <Image
            src={L1}
            alt='l1'
            style={{ position: 'absolute', bottom: -100 }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <Image
            src={L2}
            alt='l2'
            style={{ position: 'absolute', bottom: -100 }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5}>
          <Image
            src={L3}
            alt='l3'
            style={{ position: 'absolute', bottom: -100 }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2}>
          <Image
            src={L4}
            alt='l4'
            style={{ position: 'absolute', bottom: -100 }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default ParallaxSection
