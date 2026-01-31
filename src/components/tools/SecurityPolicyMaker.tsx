import React, { useState } from 'react';
import { Copy } from 'lucide-react';

export default function SecurityPolicyMaker() {
    const [commands, setCommands] = useState<string[]>(['ls', 'cat', 'git']);
    const [customCommands, setCustomCommands] = useState('');
    const [workDir, setWorkDir] = useState('/app/workspace');
    const [copied, setCopied] = useState(false);

    const availableCommands = ['git', 'npm', 'ls', 'cat', 'python', 'docker'];

    const toggleCommand = (cmd: string) => {
        setCommands(prev => 
            prev.includes(cmd) ? prev.filter(c => c !== cmd) : [...prev, cmd]
        );
    };

    const generateJson = () => {
        const allCommands = [...commands, ...customCommands.split(',').map(c => c.trim()).filter(Boolean)];
        const config = {
            allowedCommands: allCommands,
            workDirectory: workDir,
            securityLevel: 'strict'
        };
        return JSON.stringify(config, null, 2);
    };

    const json = generateJson();

    const handleCopy = () => {
        navigator.clipboard.writeText(json);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Allowed Commands</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {availableCommands.map(cmd => (
                            <label key={cmd} className="flex items-center gap-2 p-3 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300 transition-colors">
                                <input 
                                    type="checkbox" 
                                    checked={commands.includes(cmd)} 
                                    onChange={() => toggleCommand(cmd)}
                                    className="rounded text-primary"
                                />
                                <span className="font-mono text-sm">{cmd}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Custom Commands (comma separated)</label>
                    <input 
                        type="text" 
                        value={customCommands} 
                        onChange={(e) => setCustomCommands(e.target.value)}
                        placeholder="e.g. grep, awk" 
                        className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Work Directory</label>
                    <input 
                        type="text" 
                        value={workDir} 
                        onChange={(e) => setWorkDir(e.target.value)}
                        className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                    />
                </div>
            </div>

            <div className="relative">
                <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
                >
                    <Copy className={`w-4 h-4 ${copied ? 'text-green-500' : ''}`} />
                </button>
                <pre className="h-full p-4 rounded-lg bg-gray-900 text-gray-100 overflow-auto font-mono text-sm border border-gray-800">
                    <code>{json}</code>
                </pre>
            </div>
        </div>
    );
}
