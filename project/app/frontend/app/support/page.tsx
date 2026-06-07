import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md p-12">
      <div className="max-w-3xl mx-auto space-y-8 bg-surface p-12 rounded-3xl border border-outline-variant shadow-sm">
        <Link href="/" className="text-secondary font-label-md hover:underline mb-8 inline-block">&larr; Back to Home</Link>
        
        <h1 className="font-display text-display text-primary">Support Center</h1>
        <p className="font-body-lg text-on-surface-variant">How can we help you today?</p>
        
        <div className="space-y-6 mt-8">
          <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
            <h3 className="font-headline-md text-primary mb-2">Contact Us</h3>
            <p className="font-body-md text-on-surface-variant mb-4">Our support team is available 24/7 to assist with technical issues or scheduling inquiries.</p>
            <p className="font-label-md"><strong>Email:</strong> support@lifecore.com</p>
            <p className="font-label-md"><strong>Phone:</strong> +1 (800) 123-4567</p>
          </div>

          <h3 className="font-headline-md text-primary pt-6">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            <div className="border border-outline-variant rounded-xl p-4">
              <h4 className="font-label-md font-bold text-on-surface">How do I reset my password?</h4>
              <p className="font-body-sm text-on-surface-variant mt-2">Click the "Forgot Password" link on the login page and follow the instructions sent to your email.</p>
            </div>
            
            <div className="border border-outline-variant rounded-xl p-4">
              <h4 className="font-label-md font-bold text-on-surface">Can I cancel an appointment?</h4>
              <p className="font-body-sm text-on-surface-variant mt-2">Yes. Go to your Patient Dashboard, view your upcoming appointments, and select "Cancel". Please provide at least 24 hours notice.</p>
            </div>
            
            <div className="border border-outline-variant rounded-xl p-4">
              <h4 className="font-label-md font-bold text-on-surface">Where can I find my medical history?</h4>
              <p className="font-body-sm text-on-surface-variant mt-2">Your complete medical profile and consultation history are available under the "Medical Profile" tab in the sidebar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
