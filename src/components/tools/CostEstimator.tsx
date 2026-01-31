import React, { useState } from 'react';
import { Calculator, Cpu, Zap, Brain } from 'lucide-react';

type Model = 'haiku' | 'sonnet' | 'opus';
type Complexity = 'low' | 'medium' | 'high';

export default function CostEstimator() {
  const [hours, setHours] = useState(2);
  const [complexity, setComplexity] = useState<Complexity>('medium');
  const [longMemory, setLongMemory] = useState(false);
  const [model, setModel] = useState<Model>('sonnet');

  // Token Usage Rates (Tokens per hour)
  const USAGE_RATES = {
      low: { input: 1000, output: 200 },       // Simple chat/commands
      medium: { input: 10000, output: 1000 },  // Coding/Agentic workflows
      high: { input: 50000, output: 4000 },    // Heavy research/Analysis
  };
  
  // Pricing (Per 1 Million Tokens) - Based on Claude 4.5 Series (2026)
  const PRICING = {
      haiku: { input: 1.00, output: 5.00, name: 'Claude Haiku 4.5' },
      sonnet: { input: 3.00, output: 15.00, name: 'Claude Sonnet 4.5' },
      opus: { input: 5.00, output: 25.00, name: 'Claude Opus 4.5' },
  };

  const calculateCost = () => {
      const usage = USAGE_RATES[complexity];
      let inputTokens = usage.input * hours;
      let outputTokens = usage.output * hours;

      if (longMemory) {
          inputTokens *= 2.5; // Long memory adds significant context overhead re-injection
      }

      const modelPrice = PRICING[model];
      const dailyCost = ((inputTokens / 1000000) * modelPrice.input) + ((outputTokens / 1000000) * modelPrice.output);
      const monthlyCost = dailyCost * 30;

      return { daily: dailyCost, monthly: monthlyCost };
  };

  const cost = calculateCost();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
             {/* Model Selection */}
             <div>
                <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-200">Select Model</label>
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { id: 'haiku', label: 'Haiku', icon: Zap, desc: 'Fast & Cheap' },
                        { id: 'sonnet', label: 'Sonnet', icon: Cpu, desc: 'Balanced' },
                        { id: 'opus', label: 'Opus', icon: Brain, desc: 'Powerful' },
                    ].map((m) => (
                        <button
                            key={m.id}
                            onClick={() => setModel(m.id as Model)}
                            className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${
                                model === m.id 
                                ? 'border-primary bg-primary/10 text-primary ring-1 ring-primary' 
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                        >
                            <m.icon className="w-5 h-5 mb-1" />
                            <span className="font-semibold text-sm">{m.label}</span>
                            <span className="text-[10px] opacity-70">{m.desc}</span>
                        </button>
                    ))}
                </div>
             </div>

             {/* Usage Intensity */}
             <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Daily Usage</label>
                    <span className="text-sm font-mono text-primary">{hours} hours</span>
                </div>
                <input 
                    type="range" 
                    min="0" 
                    max="24" 
                    step="0.5"
                    value={hours} 
                    onChange={(e) => setHours(parseFloat(e.target.value))} 
                    className="w-full accent-primary h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
             </div>
             
             {/* Task Complexity */}
             <div>
                 <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-200">Task Complexity</label>
                 <div className="space-y-3">
                     {[
                         { id: 'low', label: 'Low (Simple Chat)', desc: '~1k tokens/hr' },
                         { id: 'medium', label: 'Medium (Coding Agent)', desc: '~10k tokens/hr' },
                         { id: 'high', label: 'High (Deep Research)', desc: '~50k tokens/hr' },
                     ].map((c) => (
                         <label key={c.id} className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                             complexity === c.id
                             ? 'border-primary bg-primary/5 dark:bg-primary/10'
                             : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-800'
                         }`}>
                             <div className="flex items-center gap-3">
                                <input 
                                    type="radio" 
                                    name="complexity" 
                                    checked={complexity === c.id} 
                                    onChange={() => setComplexity(c.id as Complexity)}
                                    className="text-primary focus:ring-primary"
                                />
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{c.label}</span>
                             </div>
                             <span className="text-xs text-gray-500 font-mono">{c.desc}</span>
                         </label>
                     ))}
                 </div>
             </div>

             {/* Features */}
             <div>
                <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    longMemory 
                    ? 'border-primary bg-primary/5 dark:bg-primary/10' 
                    : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}>
                    <input 
                        type="checkbox" 
                        checked={longMemory} 
                        onChange={(e) => setLongMemory(e.target.checked)} 
                        className="rounded text-primary focus:ring-primary w-4 h-4" 
                    />
                    <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Enable Long Term Memory</div>
                        <div className="text-xs text-gray-500 mt-0.5">Increases context overhead (approx. 2.5x cost)</div>
                    </div>
                </label>
             </div>
        </div>

        <div className="space-y-6 sticky top-6">
             <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                 <div className="flex items-center gap-2 mb-4 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-4">
                     <Calculator className="w-5 h-5" />
                     <span className="text-sm font-medium uppercase tracking-wider">Estimated Cost</span>
                 </div>
                 
                 <div className="space-y-1 mb-6">
                     <div className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                         ${cost.monthly.toFixed(2)}
                         <span className="text-lg text-gray-400 font-normal ml-2">/mo</span>
                     </div>
                     <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                         ~${cost.daily.toFixed(2)} per day
                     </div>
                 </div>

                 <div className="space-y-2 text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
                     <div className="flex justify-between">
                         <span>Model:</span>
                         <span className="text-gray-600 dark:text-gray-300">{PRICING[model].name}</span>
                     </div>
                     <div className="flex justify-between">
                         <span>Input Price:</span>
                         <span className="font-mono">${PRICING[model].input}/M</span>
                     </div>
                     <div className="flex justify-between">
                         <span>Output Price:</span>
                         <span className="font-mono">${PRICING[model].output}/M</span>
                     </div>
                 </div>
             </div>
             
             <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-900 rounded-xl">
                 <div className="flex gap-3">
                     <div className="bg-emerald-100 dark:bg-emerald-800 p-2 rounded-full h-fit">
                         <span className="text-lg">💡</span>
                     </div>
                     <div>
                         <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 text-sm mb-1">Value Proposition</h4>
                         <p className="text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed">
                             Even with heavy usage, OpenClaw costs a fraction of a human assistant ($2000+/mo). You save over <span className="font-bold">${(2000 - cost.monthly).toFixed(0)}</span> monthly.
                         </p>
                     </div>
                 </div>
             </div>
        </div>
    </div>
  );
}
