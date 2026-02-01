import React, { useState } from 'react';
import { Copy, Download, AlertTriangle, Server, Cloud, Laptop, ExternalLink, Terminal } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

type Platform = 'local' | 'vultr' | 'digitalocean' | 'zeabur';

export default function ConfigGenerator() {
  const [platform, setPlatform] = useState<Platform>('local');
  const [apiKey, setApiKey] = useState('');
  const [port, setPort] = useState(18789);
  const [sandboxing, setSandboxing] = useState(true);
  const [persistence, setPersistence] = useState(true);
  const [copied, setCopied] = useState(false);

  const generateYaml = () => {
    const key = apiKey || 'sk-ant-api-key-placeholder';
    const volumeConfig = persistence ? `    volumes:
      - ./data:/home/node/.openclaw
      - ./workspace:/home/node/.openclaw/workspace` : '';
    
    const sandboxConfig = sandboxing ? `    environment:
      - SANDBOX_ENABLED=true
      - ANTHROPIC_API_KEY=${key}
      - PORT=${port}` : `    environment:
      - ANTHROPIC_API_KEY=${key}
      - PORT=${port}`;

    return `version: '3.8'

services:
  openclaw-gateway:
    image: openclaw:local
    build: .
    restart: unless-stopped
    ports:
      - "${port}:${port}"
${sandboxConfig}
${volumeConfig}

  openclaw-cli:
    image: openclaw:local
    build: .
${volumeConfig}
    profiles:
      - tools
`;
  };

  const yaml = generateYaml();

  const handleCopy = () => {
    navigator.clipboard.writeText(yaml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([yaml], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'docker-compose.yml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Deployment Platform</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'local', label: 'Local', icon: Laptop },
              { id: 'vultr', label: 'Vultr VPS', icon: Server },
              { id: 'digitalocean', label: 'DigitalOcean', icon: Cloud },
              { id: 'zeabur', label: 'Zeabur', icon: Cloud },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setPlatform(p.id as Platform)}
                className={cn(
                  "flex items-center justify-center gap-2 p-3 rounded-lg border text-sm font-medium transition-all",
                  platform === p.id
                    ? "border-primary bg-primary/10 text-primary ring-1 ring-primary"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
                )}
              >
                <p.icon className="w-4 h-4" />
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Banners & Warnings */}
        {platform === 'local' && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-lg flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Local deployment requires your computer to stay on. Recommended for testing only. Use a VPS for 24/7 availability.
            </p>
          </div>
        )}

        {platform === 'vultr' && (
          <a href="https://www.vultr.com/?ref=9861424" target="_blank" rel="noopener noreferrer" className="block bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 p-4 rounded-lg hover:shadow-md transition-shadow group">
             <div className="flex justify-between items-start">
                <div>
                    <div className="font-semibold text-blue-800 dark:text-blue-300">Recommended for High Performance</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">Get $300 Free Credit on Vultr</div>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
          </a>
        )}

        {platform === 'digitalocean' && (
           <a href="https://m.do.co/c/fb86ec65bc39" target="_blank" rel="noopener noreferrer" className="block bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 p-4 rounded-lg hover:shadow-md transition-shadow group">
             <div className="flex justify-between items-start">
                <div>
                    <div className="font-semibold text-blue-800 dark:text-blue-300">New User Offer</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">Get $200 Free Credit on DigitalOcean</div>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
          </a>
        )}

        {platform !== 'zeabur' && (
          <>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">API Key Setup</label>
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-ant-..."
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Port Configuration</label>
              <input
                type="number"
                value={port}
                onChange={(e) => setPort(parseInt(e.target.value) || 18789)}
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>

            <div className="space-y-3 pt-2">
               <label className="flex items-center gap-2 cursor-pointer">
                 <input type="checkbox" checked={sandboxing} onChange={e => setSandboxing(e.target.checked)} className="rounded text-primary focus:ring-primary" />
                 <span className="text-sm text-gray-700 dark:text-gray-200">Enable Sandboxing (Recommended)</span>
               </label>
               <label className="flex items-center gap-2 cursor-pointer">
                 <input type="checkbox" checked={persistence} onChange={e => setPersistence(e.target.checked)} className="rounded text-primary focus:ring-primary" />
                 <span className="text-sm text-gray-700 dark:text-gray-200">Enable Data Persistence</span>
               </label>
            </div>
          </>
        )}
        
        {platform === 'zeabur' && (
             <div className="text-center py-8">
                 <a 
                    href="https://zeabur.com/templates/VTZ4FX?referralCode=openclaw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                 >
                    <Cloud className="w-5 h-5" />
                    Deploy Template on Zeabur
                 </a>
                 <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    One-click deployment. No configuration files needed.
                 </p>
             </div>
        )}
      </div>

      {/* Output Section */}
      {platform !== 'zeabur' && (
        <div className="flex flex-col h-full space-y-4">
            <div className="relative flex-grow">
            <div className="absolute top-2 right-2 flex gap-2 z-10">
                <button
                onClick={handleCopy}
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                title="Copy to Clipboard"
                >
                <Copy className={cn("w-4 h-4", copied ? "text-green-500" : "")} />
                </button>
                <button
                onClick={handleDownload}
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                title="Download YAML"
                >
                <Download className="w-4 h-4" />
                </button>
            </div>
            <div className="h-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-inner">
                <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <div className="ml-4 text-xs text-gray-400 font-mono">docker-compose.yml</div>
                </div>
                <pre className="p-4 overflow-auto text-gray-100 font-mono text-sm leading-relaxed">
                    <code>{yaml}</code>
                </pre>
            </div>
            </div>

            {/* Quick Start Guide */}
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3 text-gray-900 dark:text-white font-semibold">
                    <Terminal className="w-4 h-4" />
                    <span>Quick Start Guide</span>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>Clone the OpenClaw repository and enter the directory.</li>
                    <li>Save the code above as <code>docker-compose.yml</code> (replacing the existing one).</li>
                    <li>Run <code className="bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5 rounded text-xs font-mono">docker compose run --rm openclaw-cli onboard</code> to set up.</li>
                    <li>Start the gateway: <code className="bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5 rounded text-xs font-mono">docker compose up -d openclaw-gateway</code></li>
                    <li>Access Control UI at <code className="bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5 rounded text-xs font-mono">http://localhost:{port}</code>.</li>
                </ol>
            </div>
        </div>
      )}
    </div>
  );
}
