import MaskImage from "@/components/other/MaskImage"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* ANCHOR HERO SECTION ------------------------------------------------------- */}
      <section className='flex flex-col gap-5 md:flex-row md:items-center md:justify-center w-full'>
        {/* NOTE - hero images */}
        <div className='w-full sm:w-[92%] flex items-center justify-start -space-x-[20%] md:flex-col md:justify-start md:items-start md:-space-y-[40px] md:order-last'>
          <div className='w-full flex items-center justify-start lg:justify-center -space-x-[20%] md:-space-x-[4%] lg:-space-x-[2%]'>
            <figure className='w-full aspect-square rounded-xl outline-4 outline-white not-dark:shadow-xl not-dark:shadow-on-base/10 lg:max-w-[180px] overflow-hidden -rotate-6'>
              <img
                alt="'prodotto in evidenza'"
                className='img-responsive'
                src='/images/Hero.webp'
              />
            </figure>

            <figure className='w-full aspect-square rounded-xl outline-4 outline-white not-dark:shadow-xl not-dark:shadow-on-base/10 lg:max-w-[180px] overflow-hidden rotate-6'>
              <img
                alt="'prodotto in evidenza'"
                className='img-responsive'
                src='/images/Hero 2.webp'
              />
            </figure>
          </div>
          <div className='w-full flex items-center justify-start lg:justify-center -space-x-[20%] md:-space-x-[4%] lg:-space-x-[2%]'>
            <figure className='w-full aspect-square rounded-xl outline-4 outline-white not-dark:shadow-xl not-dark:shadow-on-base/10 lg:max-w-[180px] overflow-hidden -rotate-6'>
              <img
                alt="'prodotto in evidenza'"
                className='img-responsive'
                src='/images/Hero 3.webp'
              />
            </figure>

            <figure className='w-full aspect-square rounded-xl outline-4 outline-white not-dark:shadow-xl not-dark:shadow-on-base/10 lg:max-w-[180px] overflow-hidden rotate-6'>
              <img
                alt="'prodotto in evidenza'"
                className='img-responsive'
                src='/images/Hero 4.webp'
              />
            </figure>
          </div>
        </div>

        {/* NOTE - hero content */}
        <div className='flex flex-col gap-10'>
          <h1 className='font-display-2 text-on-base text-balance'>
            I <span className='text-primary'>prodotti</span> che ami in un unico posto
          </h1>
          <Button size='default' variant='primary'>
            Vai ai prodotti
          </Button>
        </div>
      </section>
    </>
  )
}
