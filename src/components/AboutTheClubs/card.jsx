import Image from 'next/image';

const Card = ({logo, desc, image, width}) => {
  return (
    <div className="h-80 w-96 bg-[#15151D]/60 text-white mt-9 border-t-4 rounded-t-2xl border-[#4BD2E4]">
    <div className='h-24 flex justify-center items-center pt-4'>
      <Image className=''
      src={logo} width={width} height={50} alt="Picture of the author"
      />
    </div>
    <p className='text-center text-balance'>{desc}</p>
    <div className='flex justify-center pt-10'>
      <Image className=''
      src={image} width={350} height={150} alt="Picture of the author"
      />
    </div>
    </div>
  )
}

export default Card
