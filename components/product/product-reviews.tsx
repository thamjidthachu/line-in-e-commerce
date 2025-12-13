import { Star } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { Product } from "@/lib/products"

interface ProductReviewsProps {
  product: Product
}

export function ProductReviews({ product }: ProductReviewsProps) {
  // Mock review data
  const reviews = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely love this linen piece! The quality is exceptional and it fits perfectly. Worth every penny.",
      verified: true,
    },
    {
      id: 2,
      author: "Michael R.",
      rating: 4,
      date: "1 month ago",
      comment:
        "Great quality linen, very comfortable. The color is exactly as shown in the pictures. Highly recommend!",
      verified: true,
    },
    {
      id: 3,
      author: "Emma L.",
      rating: 5,
      date: "1 month ago",
      comment:
        "This is my third purchase from LinenLuxe and I'm never disappointed. The fabric is breathable and gets softer with each wash.",
      verified: true,
    },
  ]

  const ratingDistribution = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ]

  return (
    <div className="mt-12 border-t border-border pt-12">
      <h2 className="mb-8 text-2xl font-bold">Customer Reviews</h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Rating Summary */}
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-5xl font-bold">{product.rating}</p>
            <div className="my-2 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Based on {product.reviews} reviews</p>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map((dist) => (
              <div key={dist.stars} className="flex items-center gap-2">
                <span className="w-12 text-sm">{dist.stars} star</span>
                <Progress value={dist.percentage} className="flex-1" />
                <span className="w-12 text-right text-sm text-muted-foreground">{dist.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6 lg:col-span-2">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-border pb-6 last:border-0">
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{review.author}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="leading-relaxed text-muted-foreground">{review.comment}</p>
              {review.verified && <p className="mt-2 text-sm text-primary">✓ Verified Purchase</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
