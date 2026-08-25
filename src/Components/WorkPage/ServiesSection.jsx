import React, { useState } from "react"

function ServicesSection() {
  const [selected, setSelected] = useState("service-1")

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

  return (
    <section className="container">
      <div className="pb-[48px]">

        {/* Services */}
        <p className="text-[#BDBDBD] pb-[10px]">
          Services
        </p>

        <div className="flex gap-4 lg:flex-wrap">
          {ServicesArray.map((item) => {
            const itemId = `service-${item.id}`

            return (
              <div
                key={itemId}
                onClick={() => setSelected(itemId)}
                className={`p-2 rounded-[5px] cursor-pointer transition-all duration-200 ${
                  selected === itemId
                    ? "bg-white text-black"
                    : "bg-[#232323] text-white"
                }`}
              >
                <p className="text-[18px]">
                  {item.Name}
                </p>
              </div>
            )
          })}
        </div>

        {/* Niche */}
        <div className="mt-8">
          <p className="text-[#BDBDBD] pb-[10px]">
            Niche
          </p>

          <div className="flex gap-4 lg:flex-wrap">
            {ArtArray.map((item) => {
              const itemId = `niche-${item.id}`

              return (
                <div
                  key={itemId}
                  onClick={() => setSelected(itemId)}
                  className={`p-2 rounded-[5px] cursor-pointer transition-all duration-200 ${
                    selected === itemId
                      ? "bg-white text-black"
                      : "bg-[#232323] text-white"
                  }`}
                >
                  <p className="text-[18px]">
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