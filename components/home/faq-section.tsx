import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Everything you need to know about our linen products
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What makes linen special?</AccordionTrigger>
              <AccordionContent>
                Linen is a natural fiber known for its exceptional breathability, durability, and comfort. It gets
                softer with each wash and has natural moisture-wicking properties, making it perfect for all seasons.
                Our premium European linen is sustainably sourced and crafted with care.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How do I care for linen clothing?</AccordionTrigger>
              <AccordionContent>
                Linen is easy to care for. Machine wash in cold or lukewarm water with mild detergent. Tumble dry on low
                or line dry for best results. Linen naturally wrinkles, which is part of its charm, but you can iron
                while slightly damp if you prefer a crisp look. Always check the care label for specific instructions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day return policy on all unworn, unwashed items with original tags attached. If you're not
                completely satisfied with your purchase, contact our customer service team to initiate a return. Free
                return shipping is provided for defective items or wrong deliveries.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
              <AccordionContent>
                Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Free
                shipping is available on orders over $100 within the continental US. International orders may be subject
                to customs fees and import duties, which are the responsibility of the customer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How do I choose the right size?</AccordionTrigger>
              <AccordionContent>
                Each product page includes a detailed size guide. Our linen garments are designed for a relaxed,
                comfortable fit. If you're between sizes, we recommend sizing up for a more relaxed look, or sizing down
                for a more fitted appearance. Feel free to contact our customer service team if you need personalized
                sizing assistance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Are your products sustainable?</AccordionTrigger>
              <AccordionContent>
                Sustainability is at the core of our brand. Our linen is sourced from European flax farms that practice
                responsible farming without harmful pesticides. The flax plant requires minimal water and naturally
                regenerates the soil. We also use eco-friendly dyes and packaging materials throughout our supply chain.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
