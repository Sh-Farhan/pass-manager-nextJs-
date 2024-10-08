import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function MyFooter() {
  return (
    <footer className="bg-muted py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground">
              The Official Complaint Portal of the Government. We are committed to addressing citizen concerns and improving public services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/file-complaint" className="text-sm hover:underline">File a Complaint</Link></li>
              <li><Link href="/track-complaint" className="text-sm hover:underline">Track Your Complaint</Link></li>
              <li><Link href="/faqs" className="text-sm hover:underline">FAQs</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link></li>
              <li><Link href="/accessibility" className="text-sm hover:underline">Accessibility</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://youtube.com" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Government Complaint Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}