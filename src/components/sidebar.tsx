import { Switch } from "@/components/ui/switch";
import { Plus } from "lucide-react";
import { ReactNode } from "react";

interface SidebarProps {
  chatImageEnabled: boolean;
  setChatImageEnabled: (enabled: boolean) => void;
  selectedChat: string | null;
  setSelectedChat: (chatId: string | null) => void;
  closeSidebar?: () => void;
  children: ReactNode;
}

export function Sidebar({
  chatImageEnabled,
  setChatImageEnabled,
  selectedChat,
  setSelectedChat,
  closeSidebar,
  children,
}: SidebarProps) {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4">ALL YOUR CHATS</h2>

      <div className="bg-[#1E1E1E] rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span>💬</span>
            <span className="font-medium">
              Chat Images: {chatImageEnabled ? "ON" : "OFF"}
            </span>
          </div>
          <Switch
            checked={chatImageEnabled}
            onCheckedChange={setChatImageEnabled}
          />
        </div>
        <p className="text-sm text-gray-400">
          When a bot sends you images, you will be charged one secondary image
        </p>
      </div>

      {children}

      <button className="flex items-center gap-2 mt-6 text-gray-400 hover:text-white">
        <Plus className="w-4 h-4" />
        Create new bot
      </button>
    </div>
  );
}
