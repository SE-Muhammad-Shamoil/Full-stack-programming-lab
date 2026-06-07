import Link from 'next/link';

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md p-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/" className="text-secondary font-label-md hover:underline mb-8 inline-block">&larr; Back to Home</Link>
        
        <div className="bg-success/10 border border-success/30 rounded-3xl p-8">
          <h1 className="font-display text-display text-success mb-2 flex items-center gap-4">
            <span className="w-4 h-4 rounded-full bg-success animate-pulse"></span>
            All Systems Operational
          </h1>
          <p className="font-body-lg text-on-surface-variant">Last updated: Just now. lifeCore servers are running smoothly.</p>
        </div>

        <div className="bg-surface border border-outline-variant rounded-3xl p-8 shadow-sm">
          <h3 className="font-headline-md text-primary mb-6">Service Health</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-4 border-b border-outline-variant/50">
              <span className="font-label-md text-on-surface font-bold">Authentication API</span>
              <span className="text-success font-label-sm font-bold bg-success/10 px-3 py-1 rounded-full">Optimal</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-outline-variant/50">
              <span className="font-label-md text-on-surface font-bold">Database & Records</span>
              <span className="text-success font-label-sm font-bold bg-success/10 px-3 py-1 rounded-full">Optimal</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-outline-variant/50">
              <span className="font-label-md text-on-surface font-bold">Video Consultations</span>
              <span className="text-success font-label-sm font-bold bg-success/10 px-3 py-1 rounded-full">Optimal</span>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="font-label-md text-on-surface font-bold">Patient Portal UI</span>
              <span className="text-success font-label-sm font-bold bg-success/10 px-3 py-1 rounded-full">Optimal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
