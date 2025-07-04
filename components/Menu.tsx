export default function Menu() {
  const items = [
    { name: 'Dutch Blend', price: '€4.50' },
    { name: 'Amsterdam Roast', price: '€5.00' },
    { name: 'Canal Coffee', price: '€4.80' }
  ]

  return (
    <section className='py-16 px-6 bg-white'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12 text-amber-900'>
          Our Coffee Menu
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {items.map((item, i) => (
            <div key={i} className='text-center p-6 border border-amber-200 rounded-lg'>
              <h3 className='text-xl font-semibold text-amber-800'>{item.name}</h3>
              <p className='text-2xl font-bold text-amber-600 mt-2'>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}