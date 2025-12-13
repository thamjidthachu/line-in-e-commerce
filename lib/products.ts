export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  colors: string[]
  sizes: string[]
  rating: number
  reviews: number
  inStock: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Linen Shirt",
    description:
      "Breathable and comfortable linen shirt perfect for any occasion. Made from 100% premium European linen.",
    price: 89.99,
    images: ["/white-linen-shirt-front.jpg", "/white-linen-shirt-back.jpg", "/white-linen-shirt-detail.png"],
    category: "men",
    colors: ["White", "Beige", "Light Blue"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: "2",
    name: "Relaxed Linen Dress",
    description: "Elegant and comfortable linen dress with a relaxed fit. Perfect for summer days and warm evenings.",
    price: 129.99,
    images: ["/elegant-linen-dress-violet-tones.jpg", "/elegant-linen-dress-side-view.jpg", "/elegant-linen-dress-detail.jpg"],
    category: "women",
    colors: ["Lavender", "White", "Natural"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: "3",
    name: "Linen Trousers",
    description: "Comfortable and stylish linen trousers. Perfect for casual or smart-casual occasions.",
    price: 99.99,
    images: ["/beige-linen-trousers.jpg", "/linen-trousers-side.jpg", "/linen-trousers-detail.jpg"],
    category: "men",
    colors: ["Beige", "Navy", "Gray"],
    sizes: ["28", "30", "32", "34", "36"],
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: "4",
    name: "Linen Blouse",
    description: "Lightweight linen blouse with a modern cut. Ideal for work or casual wear.",
    price: 79.99,
    images: ["/white-linen-blouse.png", "/linen-blouse-back.jpg", "/linen-blouse-detail.jpg"],
    category: "women",
    colors: ["White", "Cream", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 98,
    inStock: true,
  },
  {
    id: "5",
    name: "Linen Jacket",
    description: "Sophisticated linen jacket for cooler evenings. Versatile and timeless design.",
    price: 159.99,
    images: ["/navy-linen-jacket.jpg", "/linen-jacket-back.jpg", "/linen-jacket-detail.jpg"],
    category: "men",
    colors: ["Navy", "Charcoal", "Olive"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    rating: 4.9,
    reviews: 76,
    inStock: true,
  },
  {
    id: "6",
    name: "Linen Skirt",
    description: "Flowing linen skirt with an elegant drape. Perfect for summer occasions.",
    price: 89.99,
    images: ["/flowing-linen-skirt.jpg", "/linen-skirt-side.jpg", "/placeholder.svg?height=600&width=600"],
    category: "women",
    colors: ["White", "Lavender", "Peach"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 112,
    inStock: true,
  },
  {
    id: "7",
    name: "Linen Scarf",
    description: "Lightweight linen scarf to complement any outfit. Soft and breathable.",
    price: 39.99,
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "accessories",
    colors: ["Violet", "White", "Navy"],
    sizes: ["One Size"],
    rating: 4.5,
    reviews: 203,
    inStock: true,
  },
  {
    id: "8",
    name: "Linen Shorts",
    description: "Comfortable linen shorts for warm weather. Casual yet refined.",
    price: 69.99,
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "men",
    colors: ["Beige", "White", "Olive"],
    sizes: ["28", "30", "32", "34", "36"],
    rating: 4.6,
    reviews: 87,
    inStock: true,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(productId: string, category: string): Product[] {
  return products.filter((p) => p.category === category && p.id !== productId).slice(0, 4)
}
