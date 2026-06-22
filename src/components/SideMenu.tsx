import { Bolt } from 'lucide-react';

interface SideMenuProps {
  openModal: () => void;
}

/* ponytail: Removed unused isUp state and togglePosition function */
const Side_Menu = ({ openModal }: SideMenuProps) => (
  <div className="flex flex-col items-center p-2 fixed top-2 right-3 rounded-bl-md max-[600px]:hidden">
    <button className="all-unset flex justify-center items-center w-full p-[0.1rem] cursor-pointer" onClick={openModal}>
      <Bolt size={18} className="text-text" />
    </button>
  </div>
);

export default Side_Menu;
