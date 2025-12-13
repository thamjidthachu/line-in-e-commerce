"use client"

import { use } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/cart-context"
import { getProductById, getRelatedProducts } from "@/lib/products"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { RelatedProducts } from "@/components/product/related-products"
import { ProductReviews } from "@/components/product/product-reviews"
import { notFound } from "next/navigation"

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.id, product.category)

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            {/* Product Details */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ProductGallery images={product.images} productName={product.name} />
              <ProductInfo product={product} />
            </div>

            {/* Product Description & Details */}
            <div className="mt-12 border-t border-border pt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-2xl font-bold">Product Description</h2>
                  <p className="leading-relaxed text-muted-foreground">{product.description}</p>
                  <div className="mt-6 space-y-2">
                    <h3 className="font-semibold">Features:</h3>
                    <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                      <li>Made from 100% premium European linen</li>
                      <li>Naturally breathable and moisture-wicking</li>
                      <li>Gets softer with each wash</li>
                      <li>Sustainable and eco-friendly production</li>
                      <li>Machine washable</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-bold">Care Instructions</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• Machine wash cold or lukewarm (30-40°C)</p>
                    <p>• Use mild detergent</p>
                    <p>• Tumble dry on low or line dry</p>
                    <p>• Iron while slightly damp if desired</p>
                    <p>• Do not bleach</p>
                  </div>
                  <div className="mt-6">
                    <h3 className="mb-2 font-semibold">Shipping & Returns</h3>
                    <p className="text-muted-foreground">
                      Free shipping on orders over $100. Easy 30-day returns on all unworn items.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <ProductReviews product={product} />

            {/* Related Products */}
            {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
