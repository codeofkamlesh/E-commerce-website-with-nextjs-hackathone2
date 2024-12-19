import Image from 'next/image'
import Link from 'next/link'

interface Category {
  id: string
  name: string
  productCount: number
  image: string
  href: string
}

export default function TopCategories() {
  const categories: Category[] = [
    {
      id: '1',
      name: 'Wing Chair',
      productCount: 3584,
      image: '/img5.png',
      href: '/categories/wing-chair'
    },
    {
      id: '2',
      name: 'Wooden Chair',
      productCount: 157,
      image: '/img6.png',
      href: '/categories/wooden-chair'
    },
    {
      id: '3',
      name: 'Desk Chair',
      productCount: 154,
      image: '/img7.png',
      href: '/categories/desk-chair'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-left mb-12 text-black">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
           <Link
           key={category.id}
           href={category.href}
           className="group relative overflow-hidden rounded-lg aspect-[4/3] transition-all duration-300 ease-in-out"
         >
           {/* Image Section */}
           <Image
             src={category.image}
             alt={category.name}
             fill
             className="object-cover transition-transform duration-300 group-hover:scale-105"
           />
         
           {/* Description Section */}
           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
             <h3 className="text-xl font-semibold text-white">{category.name}</h3>
             <p className="text-sm text-gray-200">
               {category.productCount.toLocaleString()} Products
             </p>
           </div>
         </Link>
         
          ))}
        </div>
      </div>
    </section>
  )
}
