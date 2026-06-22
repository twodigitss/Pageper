import { ChangeEvent } from "react";

const themes = [
  { id: 'light', name: 'Light', colorClass: 'bg-day' },
  { id: 'dark', name: 'Dark', colorClass: 'bg-night' },
  { id: 'rosepine', name: 'Rosepine', colorClass: 'bg-rose' },
  { id: 'biscuit', name: 'Biscuit', colorClass: 'bg-biscuit' },
  { id: 'gruvbox_light', name: 'Gruv Light', colorClass: 'bg-gruv' },
  { id: 'gruvbox', name: 'Gruv Dark', colorClass: 'bg-gruv' },
  { id: 'catp_light', name: 'Catppuccin Light', colorClass: 'bg-catp-light' },
  { id: 'catp_dark', name: 'Catppuccin Dark', colorClass: 'bg-catp-dark' },
  /* ponytail: Added popular theme configs directly */
  { id: 'dracula', name: 'Dracula', colorClass: 'bg-dracula' },
  { id: 'nord', name: 'Nord', colorClass: 'bg-nord' },
  { id: 'tokyo', name: 'Tokyo Night', colorClass: 'bg-tokyo' },
  { id: 'onedark', name: 'One Dark', colorClass: 'bg-onedark' },
  { id: 'everforest', name: 'Everforest', colorClass: 'bg-everforest' },
  { id: 'synthwave', name: 'Synthwave', colorClass: 'bg-synthwave' },
  { id: 'solarized', name: 'Solarized', colorClass: 'bg-solarized' },
];

const Theme_switcher = () => {
  const saved_theme = localStorage.getItem("pageper_theme") || 'light' ;
  
  const save_handler = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('pageper_theme', e.target.id);
    document.documentElement.setAttribute('data-theme', e.target.id);
  };

  return (
    <div className="grid grid-cols-2 gap-x-8 md:gap-x-24 lg:gap-x-32 gap-y-6 md:gap-y-8 py-4 w-fit mx-auto justify-items-center">
      {themes.map((theme) => (
        <label key={theme.id} className="flex flex-col items-center gap-4 md:gap-6 cursor-pointer group w-20 md:w-24">
          <div className="relative">
            <input 
              type="radio" 
              name="theme" 
              id={theme.id}
              onChange={save_handler} 
              className="peer hidden" 
              defaultChecked={saved_theme === theme.id}
            />
            <div className={`
              w-10 h-10 md:w-12 md:h-12 rounded-lg ${theme.colorClass} 
              border-2 border-transparent transition-all duration-300
              peer-checked:border-text-hover peer-checked:scale-110 peer-checked:shadow-lg
              group-hover:scale-105
            `} />
            <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-[9px] md:text-[10px] font-bold tracking-wider text-text-hover text-center uppercase opacity-50 group-hover:opacity-100 transition-opacity">
            {theme.name}
          </span>
        </label>
      ))}
    </div>
  )
}

export default Theme_switcher;
