import { Loader2 } from 'lucide-react'

export default function Loader({ size = 40, message = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="relative">
        <Loader2 size={size} className="text-primary animate-spin" />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: '0 0 20px rgba(0, 191, 255, 0.3)',
          }}
        />
      </div>
      {message && <p className="mt-4 text-gray-400 text-center">{message}</p>}
    </div>
  )
}
