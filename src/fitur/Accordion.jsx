import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/Accordion"

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-4 py-3 font-semibold bg-gray-800 hover:bg-gray-700">
          Product Information
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 px-4 py-3 text-gray-300">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="px-4 py-3 font-semibold bg-gray-800 hover:bg-gray-700">
          Shipping Details
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 px-4 py-3 text-gray-300">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="px-4 py-3 font-semibold bg-gray-800 hover:bg-gray-700">
          Return Policy
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 px-4 py-3 text-gray-300">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
