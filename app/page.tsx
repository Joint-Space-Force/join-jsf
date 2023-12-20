import Image from 'next/image'

export default function Page() {
  return (
    <>
      <h1>Hello world!</h1>
      <Image
        src="/scary-background.png"
        alt="Ominous background image"
        width={1920}
        height={1080}
        layout='responsive'
      />
    </>
  )
}