import MaskImage from "@/components/other/MaskImage"

export default function Home() {
  return (
    <>
      {/* ANCHOR HERO SECTION ------------------------------------------------------- */}
      <section className='flex flex-col gap-5 md:flex-row w-full lg:w-[72vw] mx-auto'>
        {/* NOTE - hero images */}
        <div className='max-md:w-fit md:w-[44vw] flex items-center justify-start -space-x-[20vw] md:flex-col md:justify-start md:items-start md:-space-y-[60px] md:order-last'>
          <div className='w-full flex items-center justify-start lg:justify-center -space-x-[20vw] md:-space-x-[10vw] lg:-space-x-[6vw]'>
            <MaskImage
              alt='prodotto in evidenza'
              borderSize='p-1 sm:p-1.5 md:p-2'
              className='w-full lg:max-w-[180px] drop-shadow-xl drop-shadow-on-base/10'
              mask='circle'
              src='/images/Hero.webp'
            />
            <MaskImage
              alt='prodotto in evidenza'
              borderSize='p-1 sm:p-1.5 md:p-2'
              className='w-full lg:max-w-[180px] drop-shadow-xl drop-shadow-on-base/10'
              mask='circle'
              src='/images/Hero 2.webp'
            />
          </div>
          <div className='w-full flex items-center justify-start lg:justify-center -space-x-[20vw] md:-space-x-[10vw] lg:-space-x-[6vw]'>
            <MaskImage
              alt='prodotto in evidenza'
              borderSize='p-1 sm:p-1.5 md:p-2'
              className='w-full lg:max-w-[180px] drop-shadow-xl drop-shadow-on-base/10'
              mask='circle'
              src='/images/Hero 3.webp'
            />
            <MaskImage
              alt='prodotto in evidenza'
              borderSize='p-1 sm:p-1.5 md:p-2'
              className='w-full lg:max-w-[180px] drop-shadow-xl drop-shadow-on-base/10'
              mask='circle'
              src='/images/Hero 4.webp'
            />
          </div>
        </div>

        {/* NOTE - hero content */}
        <div className='md:w-full perfect-center'>
          <h1 className='font-display-2 text-on-base text-balance'>
            I <span className='text-primary'>prodotti</span> che ami in un unico posto
          </h1>
        </div>
      </section>
    </>
  )
}

// outline-8 outline-white not-dark:shadow-md not-dark:shadow-on-base/20
