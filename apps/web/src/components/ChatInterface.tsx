import { useState } from 'react';
import { ChevronDown, ChevronUp, Send, MessageSquare } from 'lucide-react';
import { streamChat } from '../services/api';

type Props = { labId: string };

const ChatInterface = ({ labId }: Props) => {
  const [history, setHistory] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [currentResponse, setCurrentResponse] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const userMessage = input;
    setInput('');
    setError(null);
    setHistory((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);
    setCurrentResponse('');

    try {
      const it = streamChat(labId, userMessage);
      let acc = '';
      for await (const chunk of it) {
        acc += chunk;
        setCurrentResponse(acc);
      }
      setHistory((prev) => [...prev, { role: 'assistant', content: acc }]);
    } catch (e) {
      console.error(e);
      setError('Failed to connect to backend. Make sure the server is running.');
      setHistory((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Error: Unable to connect to the backend server. Please ensure the FastAPI server is running on port 8000.',
        },
      ]);
    } finally {
      setIsTyping(false);
      setCurrentResponse('');
    }
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-4 flex items-center text-cyan-400">
        <MessageSquare className="w-5 h-5 mr-2" />
        Chat with the Model
      </h3>

      {error && (
        <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm">{error}</div>
      )}

      <div className="mb-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          <span className="text-sm">Chat History ({history.length} messages)</span>
        </button>

        {expanded && (
          <div className="mt-3 max-h-64 overflow-y-auto bg-gray-900/50 rounded-lg p-3 space-y-2 border border-gray-800">
            {history.map((msg, idx) => (
              <div key={idx} className="text-sm">
                <span className={`font-semibold ${msg.role === 'user' ? 'text-purple-400' : 'text-cyan-400'}`}>
                  {msg.role === 'user' ? 'You' : 'Bot'}:
                </span>
                <span className="text-gray-300 ml-2">{msg.content}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {(isTyping || currentResponse) && (
        <div className="mb-4 p-4 bg-gray-900/50 rounded-lg border border-cyan-800/30">
          <div className="flex items-start space-x-2">
            <span className="text-cyan-400 font-semibold">Bot:</span>
            <span className="text-gray-300 flex-1">{currentResponse || <span className="animate-pulse">Thinking...</span>}</span>
          </div>
        </div>
      )}

      <div className="mt-auto flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your prompt..."
          disabled={isTyping}
          className="flex-1 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors disabled:opacity-50"
        />
        <button
          onClick={handleSend}
          disabled={isTyping || !input.trim()}
          className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:from-cyan-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
