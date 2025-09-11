const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000';

export type ChatChunk = { content: string };

export async function* streamChat(labId: string, prompt: string) {
  const res = await fetch(`${API_BASE}/api/labs/${labId}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });
  if (!res.ok || !res.body) throw new Error('Failed to connect to backend');

  const reader = res.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value);
    for (const line of chunk.split('\n')) {
      if (line.startsWith('data: ')) {
        try {
          const data = JSON.parse(line.slice(6)) as ChatChunk;
          yield data.content;
        } catch {}
      }
    }
  }
}

export async function validateAnswer(labId: string, answer: string) {
  const res = await fetch(`${API_BASE}/api/secrets/validate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ labId, answer }),
  });
  if (!res.ok) throw new Error('Validation failed');
  return res.json() as Promise<{ success: boolean; message: string }>;
}
