import React, { useState } from "react"

function ServicesSection() {
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedNiches, setSelectedNiches] = useState([])

  const ServicesArray = [
    { id: 1, Name: "Conversion optimization" },
    { id: 2, Name: "Shopify store development" },
    { id: 3, Name: "Custom Shopify development" },
    { id: 4, Name: "Speed optimization" },
    { id: 5, Name: "Subscription optimization" },
    { id: 6, Name: "UI/UX design" },
    { id: 7, Name: "Landing page" },
    { id: 8, Name: "Shopify Theme Customization" },
    { id: 9, Name: "Shopify App" },
  ]

  const ArtArray = [
    { id: 1, topic: "Art Gallery" },
    { id: 2, topic: "Auto & Moto" },
    { id: 3, topic: "Cosmetics" },
    { id: 4, topic: "Fashion" },
    { id: 5, topic: "Food & Beverages" },
    { id: 6, topic: "Health" },
    { id: 7, topic: "Home & Furniture" },
    { id: 8, topic: "Jewelry" },
    { id: 9, topic: "Supplements" },
  ]

  const toggleService = (itemId) => {
    setSelectedServices((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    )
  }

  const toggleNiche = (itemId) => {
    setSelectedNiches((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    )
  }

  return (
    <section className="container ">
      <div className=" px-2 md:px-0 pb-[48px] pt-[32px] lg:pt-0">

        {/* Services */}
        <p className="text-[14px] lg:text-[18px] leading-[24px] text-[#BDBDBD] pb-[10px] ">
          Services
        </p>

        <div className="flex flex-wrap gap-[10px] lg:flex-wrap">
          {ServicesArray.map((item) => {
            const itemId = `service-${item.id}`
            const isSelected = selectedServices.includes(itemId)

            return (
              <div
                key={itemId}
                onClick={() => toggleService(itemId)}
                className={` py-[16px]  lg:py-[12px] px-[20px] border-[1px] border-[#FFFFFF1A]/10 rounded-[5px] cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "bg-white text-black"
                    : "bg-[#232323] text-white"
                }`}
              >
                <p className=" text-[12px] lg:text-[18px]">
                  {item.Name}
                </p>
              </div>
            )
          })}
        </div>

        {/* Niche */}
        <div className=" pt-[15px] lg:pt-[20px]">
          <p className=" text-[14px] lg:text-[18px] leading-[24px] text-[#BDBDBD] pb-[10px] ">
            Niche
          </p>

          <div className="flex flex-wrap gap-[10px]  lg:flex-wrap">
            {ArtArray.map((item) => {
              const itemId = `niche-${item.id}`
              const isSelected = selectedNiches.includes(itemId)

              return (
                <div
                  key={itemId}
                  onClick={() => toggleNiche(itemId)}
                  className={`py-[12px] px-[19px] rounded-[5px] cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? "bg-white text-black"
                      : "bg-[#232323] text-white"
                  }`}
                >
                  <p className=" text-[12px] lg:text-[18px]">
                    {item.topic}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesSection