import Image from 'next/image'
import React from 'react'


type Props= {
  variant?: 'light' | 'dark',
  size?: 'sm' | 'base' | 'md',
}

const BallerZoneLogo = ({variant = 'light',size = 'base'}: Props ) => {
  const sizes = {
    xs: 'size-8',
    sm: 'size-12',
    base: 'size-20',
    md: 'size-32',
  }
  return (
    <Image
      width={0}
      height={0}
      className={sizes[size]}
      alt='ballerzone logo'
      src={variant !== 'dark' ? '/logos/dark.svg' : '/logos/light.svg' }
    />
  )
}


export default BallerZoneLogo