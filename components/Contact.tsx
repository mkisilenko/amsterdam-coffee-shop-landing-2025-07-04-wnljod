export default function Contact() {
  return (
    <section className='bg-amber-900 text-white py-16 px-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-8'>
          Visit Our Coffee Shop
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Location</h3>
            <p>Prinsengracht 123</p>
            <p>1015 Amsterdam</p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Hours</h3>
            <p>Mon-Sun: 8:00 - 22:00</p>
            <p>Phone: +31 20 123 4567</p>
          </div>
        </div>
      </div>
    </section>
  )
}