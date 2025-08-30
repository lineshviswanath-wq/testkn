import React, { useContext } from 'react';
import { X } from 'lucide-react';
import { NavigationContext } from '../App';

export function VideoModal() {
  const { navigation, setNavigation } = useContext(NavigationContext);

  if (!navigation.showVideoModal) return null;

  const handleClose = () => {
    setNavigation({ showVideoModal: false });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Kaniro Design Studio Demo</h2>
          <p className="text-blue-100">See how our design-first methodology transforms banking experiences</p>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-gray-900">
          {/* Placeholder for demo video - replace with actual video URL */}
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
            title="Kaniro Design Studio Demo Video"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Custom Video Player Overlay (for future custom video) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none">
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-sm opacity-75">Kaniro Financial Services</div>
              <div className="text-lg font-semibold">Design-First Banking Solutions</div>
            </div>
          </div>
        </div>

        {/* Video Description */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">What You'll Learn</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Banking customer research methodology</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Design thinking for financial products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>User journey mapping for banking</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Prototype validation techniques</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Banking interface best practices</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>Real-world case studies</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button 
              onClick={() => {
                handleClose();
                setNavigation({ currentView: 'contact' });
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold"
            >
              Get Started with Kaniro Design Studio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}