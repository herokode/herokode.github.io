export default function AboutSection() {
  return (
    <div id="about" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <div className="text-base/7 font-semibold text-indigo-600">About us</div>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Your Vision, Our Expertise.
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-gray-700">
            Our process is simple yet effective: we listen, collaborate, and build. We immerse ourselves in understanding your business intricacies, working closely with you to define your ideal software solution. From initial consultation through development and ongoing support, we prioritize partnership to ensure the final product not only meets but exceeds your expectations.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">Our mission</h2>
            <p className="mt-8 text-base/7 text-gray-600">
              At Herokode LLC, our mission is to collaborate with niche B2B clients to develop bespoke software that perfectly aligns with their distinct workflows, fostering long-term success through tailored technology.
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Whether your niche demands intricate data management, specialized communication platforms, or custom automation tools, Herokode is equipped to deliver. We empower businesses operating in unique sectors by creating software that aligns perfectly with their distinct requirements. Let us build the solution that truly understands and elevates your specific market position.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}
