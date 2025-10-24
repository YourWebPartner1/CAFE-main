import { Coffee, Cake, IceCream, Sandwich } from 'lucide-react';

const menuItems = [
  {
    category: 'Coffee',
    icon: Coffee,
    items: [
      { name: 'Cappuccino', price: '₹150', image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Caramel Latte', price: '₹180', image: 'https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Cold Brew', price: '₹200', image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Espresso', price: '₹120', image: 'https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=400' },
    ]
  },
  {
    category: 'Beverages',
    icon: IceCream,
    items: [
      { name: 'Chocolate Shake', price: '₹170', image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Mango Smoothie', price: '₹160', image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Fresh Juice', price: '₹140', image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Iced Tea', price: '₹130', image: 'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=400' },
    ]
  },
  {
    category: 'Snacks',
    icon: Sandwich,
    items: [
      { name: 'Club Sandwich', price: '₹220', image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Paneer Wrap', price: '₹190', image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'French Fries', price: '₹120', image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Nachos', price: '₹180', image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400' },
    ]
  },
  {
    category: 'Desserts',
    icon: Cake,
    items: [
      { name: 'Chocolate Cake', price: '₹150', image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Tiramisu', price: '₹200', image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Brownie Sundae', price: '₹180', image: 'https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Cheesecake', price: '₹190', image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400' },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee, refreshing beverages, and delicious treats
          </p>
        </div>

        <div className="space-y-16">
          {menuItems.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.category}>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <IconComponent className="w-8 h-8 text-amber-600" />
                  <h3 className="text-3xl font-bold text-amber-900">{category.category}</h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                          {item.price}
                        </div>
                      </div>

                      <div className="p-5">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h4>
                        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold transition-colors duration-300">
                          Order Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-xl">
            <p className="text-2xl font-bold mb-2">Signature Special</p>
            <p className="text-lg">Star Café Blend - Our exclusive house coffee ₹250</p>
          </div>
        </div>
      </div>
    </section>
  );
}
