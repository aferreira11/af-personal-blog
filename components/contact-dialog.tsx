import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

interface ContactDialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ContactDialog({ children, open, onOpenChange }: ContactDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' })
        onOpenChange?.(false)
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        })
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger>
        <div onClick={() => onOpenChange?.(true)}>
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md bg-white p-6 dark:bg-zinc-900">
        <DialogHeader className="text-left">
          <DialogTitle className="text-black dark:text-white">
            Get in touch
          </DialogTitle>
          <DialogDescription className="text-black/60 dark:text-zinc-400">
            Send me a message and I&apos;ll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="h-9 w-full rounded-lg border border-black/10 bg-white px-3 text-base text-black outline-none focus:ring-2 focus:ring-black/5 dark:border-white/[0.1] dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="h-9 w-full rounded-lg border border-black/10 bg-white px-3 text-base text-black outline-none focus:ring-2 focus:ring-black/5 dark:border-white/[0.1] dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
            placeholder="Enter your email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="h-32 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-base text-black outline-none focus:ring-2 focus:ring-black/5 dark:border-white/[0.1] dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
            placeholder="Your message"
            required
          />
          <button
            className="w-full h-9 text-sm font-medium bg-[#004CFF] hover:bg-[#0039CC] text-white rounded-lg transition-colors disabled:opacity-50 disabled:pointer-events-none"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
        <DialogClose />
      </DialogContent>
    </Dialog>
  )
} 