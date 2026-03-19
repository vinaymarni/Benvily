import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function PolicyPage() {
  return (
    <>
      {/* Header */}
      <Header />
      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
            Policies
          </h1>
          <p className="text-secondary-foreground/80 text-lg">
            Terms & Conditions, Privacy Policy, and Refund Policy
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Terms & Conditions */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            Terms & Conditions
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              Welcome to Benvily. These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing and using Benvily, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              2. Use License
            </h3>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Benvily for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on Benvily</li>
              <li>Transferring the materials to another person or 'mirroring' the materials on any other server</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              3. Disclaimer
            </h3>
            <p>
              The materials on Benvily are provided on an 'as is' basis. Benvily makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              4. Limitations
            </h3>
            <p>
              In no event shall Benvily or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Benvily.
            </p>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            Privacy Policy
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              At Benvily, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              1. Information We Collect
            </h3>
            <p>
              We collect information you provide directly, such as when you create an account, book a service, or contact us. This may include your name, email address, phone number, and payment information.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              2. How We Use Your Information
            </h3>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your bookings and payments</li>
              <li>Send you transactional emails and updates</li>
              <li>Respond to your inquiries and customer service requests</li>
              <li>Send promotional materials (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              3. Information Security
            </h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              4. Sharing Your Information
            </h3>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              5. Your Rights
            </h3>
            <p>
              You have the right to access, update, or delete your personal information at any time. You can contact us to exercise these rights.
            </p>
          </div>
        </section>

        {/* Refund Policy */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            Refund Policy
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              At Benvily, we want you to be completely satisfied with our services. Please review our refund policy below.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              1. Cancellation Policy
            </h3>
            <p>
              Appointments can be cancelled up to 24 hours before the scheduled time for a full refund. Cancellations made less than 24 hours before the appointment may incur a cancellation fee.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              2. Service Dissatisfaction
            </h3>
            <p>
              If you are dissatisfied with a service, please contact us within 48 hours of your appointment. We will work with the salon to address your concerns and may offer a refund or complimentary service.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              3. Refund Processing
            </h3>
            <p>
              Refunds will be processed within 5-10 business days and will be returned to your original payment method.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              4. Non-Refundable Items
            </h3>
            <p>
              Promotional discounts or special offers may be non-refundable as per the specific promotion terms. Please review the terms of your booking before confirming.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">
              5. Contact for Refunds
            </h3>
            <p>
              For refund inquiries or to initiate a refund, please contact our support team at support@Benvily.com or call +1 (555) 123-4567.
            </p>

            <p className="mt-8 pt-8 border-t border-border text-sm">
              Last updated: March 2024. We reserve the right to modify these policies at any time. Changes will be effective immediately upon posting to the website.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
