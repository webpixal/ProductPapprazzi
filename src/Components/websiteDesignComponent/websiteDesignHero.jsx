import React from 'react'

const WebsiteDesignHero = () => {
  return (
    <section
      className="h-[324px] xl:h-[648px] w-full bg-cover bg-center flex flex-col justify-center bg-color-blend-mode"
      style={{
        backgroundImage: `url("amazone_hero.png")`,
      }}
    >
      <div className="ml-10 xl:ml-40">
        <h1 className="text-white text-[30px] xl:text-[96px] font-semibold leading-10 xl:leading-[131px]">
          Amazon Service
        </h1>
        <p className="text-white text-[20px] leading-9">
          Home :: Amazon services
        </p>
      </div>
    </section>
  )
}

export default WebsiteDesignHero;