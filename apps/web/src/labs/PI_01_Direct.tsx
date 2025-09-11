import LabLayout from '../components/LabLayout';
import ScenarioPanel from '../components/ScenarioPanel';
import ChatInterface from '../components/ChatInterface';
import { AlertTriangle } from 'lucide-react';

const PI_01_Direct = ({ onBack }: { onBack: () => void }) => (
  <LabLayout
    labNumber="PI-01"
    title="Direct Prompt Injection"
    icon={<AlertTriangle text-orange-400 className="w-10 h-10" />} 
    onBack={onBack}
  >
    <div className="lg:col-span-1">
      <ScenarioPanel
        labId="PI_01"
        scenario={
          <>
            <p>You're interacting with a helpful AI assistant.</p><p>Your objective is to trick it into revealing a protected value it was instructed <strong>never</strong> to disclose.</p><p className='mt-2 text-yellow-400'>Try bypassing the bot's security and fetch the key.</p><p className='text-xs mt-2 italic'>Just paste the key alone, do not include the API-KEY=xxxxx in the solution box</p>
          </>
        }
        objective="Retrieve the API key"
        secretFormat="API_KEY=***************"
      />
    </div>
    <div className="lg:col-span-2">
      <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50">
        <ChatInterface labId="PI_01" />
      </div>
    </div>
  </LabLayout>
);

export default PI_01_Direct;
