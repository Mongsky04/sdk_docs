import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import copyButton from '../../../assets/Copy-button.svg';

const CodeBlockWithTabs = ({ tabs, showLineNumbers = true }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [copied, setCopied] = useState(false);

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTabData.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Custom style with purple code color
  const customStyle = {
    margin: 0,
    padding: '20px 24px',
    background: '#2d2d2d',
    fontSize: '14px',
    lineHeight: '24px',
    borderRadius: '0',
    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
    color: '#B392F0',
  };

  const lineNumberStyle = {
    minWidth: '2em',
    paddingRight: '1.5em',
    color: '#6e7681',
    textAlign: 'right',
    userSelect: 'none',
    fontSize: '14px',
  };

  // Custom theme with specific colors for XML/Android syntax
  const customTheme = {
    'code[class*="language-"]': {
      color: '#ffffff',
    },
    'pre[class*="language-"]': {
      color: '#ffffff',
    },
    'comment': { color: '#6e7681' },
    'prolog': { color: '#ffffff' },
    'doctype': { color: '#ffffff' },
    'cdata': { color: '#ffffff' },
    'punctuation': { color: '#ffffff' }, // untuk <> dan /
    'property': { color: '#B392F0' },
    'tag': { color: '#79B8FF' }, // untuk uses-permission
    'boolean': { color: '#ffffff' },
    'number': { color: '#ffffff' },
    'constant': { color: '#ffffff' },
    'symbol': { color: '#ffffff' },
    'deleted': { color: '#ffffff' },
    'selector': { color: '#ffffff' },
    'attr-name': { color: '#B392F0' }, // untuk android:name
    'string': { color: '#9ECBFF' }, // untuk "android.permission.BLUETOOTH_SCAN" dll
    'char': { color: '#9ECBFF' },
    'builtin': { color: '#ffffff' },
    'inserted': { color: '#ffffff' },
    'operator': { color: '#F97583' }, // untuk =
    'entity': { color: '#ffffff' },
    'url': { color: '#ffffff' },
    'atrule': { color: '#B392F0' },
    'attr-value': { color: '#9ECBFF' },
    'keyword': { color: '#F97583' }, // untuk import
    'function': { color: '#ffffff' },
    'class-name': { color: '#ffffff' },
    'regex': { color: '#ffffff' },
    'important': { color: '#ffffff' },
    'variable': { color: '#ffffff' },
    'plain': { color: '#ffffff' },
  };

  return (
    <div className="flex flex-col w-full py-6 px-[76px]">
      <div className="flex flex-col gap-6 w-full">
        {/* Platform Tabs */}
        <div className="bg-[#434343] flex gap-1 items-center p-1 rounded-2xl w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex gap-1 items-center px-2 py-2 rounded-xl transition-colors ${
                activeTab === tab.id ? 'bg-[#050505]' : ''
              }`}
            >
              <img 
                src={activeTab === tab.id ? tab.iconActive : tab.iconInactive} 
                alt={tab.label} 
                className="w-6 h-6 transition-all"
              />
              <p
                className={`font-roboto font-normal text-base leading-6 ${
                  activeTab === tab.id ? 'text-white' : 'text-[#727272]'
                }`}
              >
                {tab.label}
              </p>
            </button>
          ))}
        </div>

        {/* Code Block */}
        <div className="flex flex-col rounded-2xl w-full border border-[#434343] overflow-hidden bg-[#151515]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 rounded-2xl border-[#434343]">
            <p className="font-mono text-sm leading-6 text-white">
              {activeTabData.language}
            </p>
            <button
              onClick={handleCopy}
              className="hover:opacity-70 transition-opacity"
              title={copied ? "Copied!" : "Copy code"}
            >
              <img 
                src={copyButton} 
                alt="Copy" 
                className="w-5 h-5"
              />
            </button>
          </div>

          {/* Code with Syntax Highlighting */}
          <div className="bg-[#2d2d2d] border-t border-[#434343] rounded-2xl overflow-x-auto">
            <SyntaxHighlighter
              language={activeTabData.language.toLowerCase()}
              style={customTheme}
              customStyle={customStyle}
              showLineNumbers={showLineNumbers}
              lineNumberStyle={lineNumberStyle}
              wrapLines={true}
              wrapLongLines={false}
            >
              {activeTabData.code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlockWithTabs;
