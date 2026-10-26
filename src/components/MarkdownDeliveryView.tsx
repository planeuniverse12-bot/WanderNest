import React, { useState } from 'react';
import { 
  FileText, 
  Copy, 
  Check, 
  Download, 
  Eye, 
  Sparkles, 
  BookOpen, 
  CheckCircle2,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { CopyPlaceholderConfig } from '../data/copyData';
import { generateMasterMarkdownCopy, getCopyMetrics } from '../utils/copyEngine';

interface MarkdownDeliveryViewProps {
  config: CopyPlaceholderConfig;
}

export const MarkdownDeliveryView: React.FC<MarkdownDeliveryViewProps> = ({
  config,
}) => {
  const [keepPlaceholders, setKeepPlaceholders] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [copied, setCopied] = useState(false);

  const markdownContent = generateMasterMarkdownCopy(config, keepPlaceholders);
  const metrics = getCopyMetrics(markdownContent);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdownContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${config.agencyName.toLowerCase().replace(/\s+/g, '_')}_website_copy.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="py-10 bg-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Control Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                Senior Copywriter Delivery Document
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Website Copy for {keepPlaceholders ? '[Agency Name]' : config.agencyName}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Specialized in Andaman & Nicobar Tourism • Tailored for Couples, Families, & Nature Explorers
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 text-center">
                <span className="block text-base font-extrabold text-slate-900 font-display">{metrics.words}</span>
                <span className="text-[11px] text-slate-500 uppercase">Words</span>
              </div>
              <div className="bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 text-center">
                <span className="block text-base font-extrabold text-emerald-700 font-display">~{metrics.readTimeMinutes} min</span>
                <span className="text-[11px] text-slate-500 uppercase">Read Time</span>
              </div>
              <div className="bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 text-center">
                <span className="block text-base font-extrabold text-teal-700 font-display">4 Pages</span>
                <span className="text-[11px] text-slate-500 uppercase">Complete Scope</span>
              </div>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
            
            {/* View & Toggle Toggles */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setKeepPlaceholders(!keepPlaceholders)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                  keepPlaceholders
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                }`}
              >
                <span>{keepPlaceholders ? 'Showing [Placeholders]' : `Showing Custom (${config.agencyName})`}</span>
              </button>

              <button
                onClick={() => setShowAnnotations(!showAnnotations)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                  showAnnotations
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-emerald-600" />
                <span>{showAnnotations ? 'Hide CRO Annotations' : 'Show CRO Strategic Notes'}</span>
              </button>
            </div>

            {/* Export Actions */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied Markdown!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Full Markdown</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download .md</span>
              </button>
            </div>

          </div>
        </div>

        {/* Copywriter Strategic Insights Card */}
        {showAnnotations && (
          <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Copywriting Architecture & High-Conversion Strategy
            </div>
            <h3 className="text-xl font-bold font-display">
              Why This Andaman Copy Drives Maximum Inquiries & Bookings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-200 pt-2">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-1.5">
                <strong className="text-emerald-300 block text-sm font-semibold">1. Overcoming the #1 Island Friction Point:</strong>
                <p>
                  Mainland travelers dread inter-island ferry booking failures, sold-out catamarans (Makruzz/Nautika), and flight-ferry missed connections. Every headline explicitly anchors <em>stress-free certainty</em> and <em>direct local concierge</em>.
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-1.5">
                <strong className="text-teal-300 block text-sm font-semibold">2. Distinct Emotional Resonance by Persona:</strong>
                <p>
                  <strong>Couples:</strong> Sensory romance (whispering palms, starlit dining, private catamarans).<br />
                  <strong>Families:</strong> Safety, gentle pacing, shallow lagoons, multi-gen comfort.<br />
                  <strong>Adventure:</strong> PADI masters, bioluminescence, Dixon’s Pinnacle depths.
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-1.5">
                <strong className="text-cyan-300 block text-sm font-semibold">3. Microcopy & Risk Reversals:</strong>
                <p>
                  CTAs are paired with instant gratification micro-copy: "No hidden fees", "Instant response within 2 hours", "Govt. Licensed Operator" to remove skepticism before form submission.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Master Markdown Document Viewer */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
          <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-6">
            
            {/* Quick jump nav */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
              <span className="text-slate-400">Quick Sections:</span>
              <a href="#doc-home" className="hover:text-emerald-700">1. Home Page</a>
              <span>•</span>
              <a href="#doc-about" className="hover:text-emerald-700">2. About Us Page</a>
              <span>•</span>
              <a href="#doc-services" className="hover:text-emerald-700">3. Our Services Page</a>
              <span>•</span>
              <a href="#doc-contact" className="hover:text-emerald-700">4. Contact Us Page</a>
            </div>

            {/* Markdown rendered blocks with clear section separators */}
            <div className="font-mono text-xs sm:text-[13px] bg-slate-900 text-slate-100 p-6 sm:p-8 rounded-2xl overflow-x-auto whitespace-pre-wrap leading-relaxed border border-slate-800 shadow-inner">
              {markdownContent}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
