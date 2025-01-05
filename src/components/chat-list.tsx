import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatListProps {
  selectedChat: string | null;
  setSelectedChat: (chatId: string | null) => void;
}

const chats = [
  { id: "1", name: "Caressa Jessalin", preview: "Lorem ipsum dolor sit am..." },
  { id: "2", name: "Letty Bride", preview: "Lorem ipsum dolor sit am..." },
];

export function ChatList({ selectedChat, setSelectedChat }: ChatListProps) {
  return (
    <div className="space-y-4 flex-1 overflow-auto rounded-lg">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer ${
            selectedChat === chat.id ? "bg-gray-800" : ""
          }`}
          onClick={() => setSelectedChat(chat.id)}
        >
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>
              {chat.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{chat.name}</div>
            <div className="text-sm text-gray-400">{chat.preview}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
