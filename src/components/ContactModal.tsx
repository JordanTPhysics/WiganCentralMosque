import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Contact from "../pages/contact";

import '../styles/globals.css'
import ContactForm from "./ContactForm"

export function ContactModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Contact Us!</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-secondary border border-3 border-heading rounded">
        <DialogHeader>
          <DialogTitle className="">Contact Us!</DialogTitle>
          <DialogDescription>
           <Contact />
           <ContactForm />
          </DialogDescription>
        </DialogHeader>

        <DialogFooter >
          <DialogTrigger asChild>
            <Button variant="outline" className="">Close</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
