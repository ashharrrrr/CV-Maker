import { X } from 'lucide-react';

export default function PreviewModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}>
            <div
                className="bg-white rounded-xl shadow-2xl w-[calc(95vh/1.4142)] h-[95vh] relative"
                onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
} 