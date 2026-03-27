import { Star } from "lucide-react";

export function RatingBadge({ rating, title, subtitle }: { rating: number; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-md border border-neutral-200/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-start w-full">
        <div className="flex items-center gap-1 text-[#FF6A3D] mb-1">
           {[...Array(5)].map((_, i) => (
             <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? 'fill-current' : 'opacity-20'}`} />
           ))}
        </div>
        <span className="text-[11px] font-bold text-neutral-800 uppercase tracking-wider">{title}</span>
        <span className="text-[10px] font-medium text-neutral-500 mt-1 leading-tight">{subtitle}</span>
      </div>
    </div>
  );
}
