import { Edit, Mail, Phone, MapPin } from "lucide-react";

export default function CollapsedPersonalDetails({ handleDisplayContentPersonalDetails }) {
  return (
    <button onClick={handleDisplayContentPersonalDetails} className="bg-white p-10 rounded-3xl flex flex-col cursor-pointer hover:opacity-80">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-2xl font-medium">Ashhar Siddiqui</h1>
          <span className="text-xl text-gray-400 font-light">Software Developer</span>
        </div>
        <div className="-m-4 mb-auto bg-pink-400 p-1 rounded-full">
          <Edit size={18} color="white" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-16">
        <div className="flex flex-col gap-y-2">
          <p className="flex items-center gap-2">
            <Mail size={18} />
            ashhar2002.6@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <Phone size={18} />
            8827550722
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={18} />
            51/A, BANK COLONY, JINSI, JAHANGIRABAD
          </p>
        </div>
        <div>
            <img src="previewpfp.jpg" className="w-32 h-32 rounded-full  " alt="previewpfp.jpg" />
        </div>
      </div>
    </button>
  );
}
