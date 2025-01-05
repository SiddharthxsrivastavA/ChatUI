import { useState, useRef, useEffect, useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Trash2 } from "lucide-react";

interface ChatAreaProps {
  selectedChat: string | null;
  setSelectedChat: (chatId: string | null) => void;
}

interface Message {
  id: string;
  sender: "user" | "bot";
  content: string;
}

const initialMessages: Record<string, Message[]> = {
  "1": [
    { id: "1", sender: "bot", content: "Hello! 👋" },
    {
      id: "2",
      sender: "user",
      content: "Yes, my order according to application. Thank you",
    },
    {
      id: "3",
      sender: "bot",
      content: "Your order according to application yes?",
    },
    { id: "4", sender: "bot", content: "How can I help You?" },
  ],
  "2": [
    {
      id: "1",
      sender: "bot",
      content: "Hi there! How can I assist you today?",
    },
  ],
};

export function ChatArea({ selectedChat, setSelectedChat }: ChatAreaProps) {
  const [messages, setMessages] =
    useState<Record<string, Message[]>>(initialMessages);
  const [inputMessage, setInputMessage] = useState("");

  const currentChat = useMemo(
    () => (selectedChat ? messages[selectedChat] : []),
    [selectedChat, messages]
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChat]);

  const handleSendMessage = () => {
    if (inputMessage.trim() && selectedChat) {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: "user",
        content: inputMessage.trim(),
      };
      setMessages((prev) => ({
        ...prev,
        [selectedChat]: [...prev[selectedChat], newMessage],
      }));
      setInputMessage("");

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          content: "Thank you for your message. How else can I assist you?",
        };
        setMessages((prev) => ({
          ...prev,
          [selectedChat]: [...prev[selectedChat], botResponse],
        }));
      }, 1000);
    }
  };

  const handleDeleteConversation = () => {
    if (selectedChat) {
      setMessages((prev) => ({
        ...prev,
        [selectedChat]: [],
      }));
    }
  };

  const handleBack = () => {
    setSelectedChat(null);
  };

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center h-full">
        <p className="text-gray-500">Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>CJ</AvatarFallback>
          </Avatar>
          <span className="font-medium">
            {selectedChat === "1" ? "Caressa Jessalin" : "Letty Bride"}
          </span>
        </div>
        <div className="flex items-center gap-3 justify-end">
          <Button variant="ghost" size="icon" onClick={handleBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDeleteConversation}
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="flex-grow p-4 space-y-4 overflow-y-auto">
        {currentChat.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.sender === "user" ? "justify-end" : ""
            }`}
          >
            {message.sender === "bot" && (
              <Avatar className="hidden sm:block">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>CJ</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`rounded-lg p-3 max-w-[85%] sm:max-w-[70%] ${
                message.sender === "user"
                  ? "bg-[#E6A5A5] text-black"
                  : "bg-[#1E1E1E]"
              }`}
            >
              <p>{message.content}</p>
            </div>
            {message.sender === "user" && (
              <Avatar className="hidden sm:block">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="flex gap-2 max-w-3xl mx-auto">
          <Input
            className="bg-[#1E1E1E] border-0"
            placeholder="Message"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <Button
            size="icon"
            className="bg-[#E6A5A5] text-black hover:bg-[#d99595] shrink-0"
            onClick={handleSendMessage}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
