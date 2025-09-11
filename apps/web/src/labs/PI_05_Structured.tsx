import LabLayout from '../components/LabLayout';
import ScenarioPanel from '../components/ScenarioPanel';
import ChatInterface from '../components/ChatInterface';
import { Hash } from 'lucide-react';

const PI_05_Structured = ({ onBack }: { onBack: () => void }) => (
  <LabLayout
    labNumber="PI-05"
    title="Structured Field Injection"
    icon={<Hash text-green-400 className="w-10 h-10" />} 
    onBack={onBack}
  >
    <div className="lg:col-span-1">
      <ScenarioPanel
        labId="PI_05"
        scenario={
          <>
            <p>Inject through YAML fields.</p>
          </>
        }
        objective="Extract the SECRET"

      />
    </div>
    <div className="lg:col-span-2">
      <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50">
        <ChatInterface labId="PI_05" />
      </div>
    </div>
  </LabLayout>
);

export default PI_05_Structured;
