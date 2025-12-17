import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import copyButton from '../../../assets/Copy-button.svg';

const CodeBlock = ({ language, code, showLineNumbers = true }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
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

  // Custom theme with purple color for all code
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
    'punctuation': { color: '#ffffff' },
    'property': { color: '#B392F0' },
    'tag': { color: '#B392F0' },
    'boolean': { color: '#ffffff' },
    'number': { color: '#ffffff' },
    'constant': { color: '#ffffff' },
    'symbol': { color: '#ffffff' },
    'deleted': { color: '#ffffff' },
    'selector': { color: '#ffffff' },
    'attr-name': { color: '#B392F0' },
    'string': { color: '#ffffff' },
    'char': { color: '#ffffff' },
    'builtin': { color: '#ffffff' },
    'inserted': { color: '#ffffff' },
    'operator': { color: '#ffffff' },
    'entity': { color: '#ffffff' },
    'url': { color: '#ffffff' },
    'atrule': { color: '#B392F0' },
    'attr-value': { color: '#ffffff' },
    'keyword': { color: '#B392F0' },
    'function': { color: '#ffffff' },
    'class-name': { color: '#ffffff' },
    'regex': { color: '#ffffff' },
    'important': { color: '#ffffff' },
    'variable': { color: '#ffffff' },
    'plain': { color: '#ffffff' },
  };

  return (
    <div className="flex flex-col w-full px-[76px] py-6">
      <div className="flex flex-col rounded-2xl w-full border border-[#434343] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#151515] rounded-2xl border-[#434343]">
          <p className="font-mono text-sm leading-6 text-[#e1e4e8]">
            {language}
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
            language={language.toLowerCase()}
            style={customTheme}
            customStyle={customStyle}
            showLineNumbers={showLineNumbers}
            lineNumberStyle={lineNumberStyle}
            wrapLines={true}
            wrapLongLines={false}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
