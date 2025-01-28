"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Instagram, Twitter, Send, Menu } from "lucide-react";
import Link from "next/link";
import { ChatList } from "@/components/chat-list";
import { ChatArea } from "@/components/chat-area";
import { Sidebar } from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";

export default function ChatInterface() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [chatImageEnabled, setChatImageEnabled] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-white,text-black,">
      {/* Navigation */}
      <nav className="border-b border-gray-800 p-4 m-4 mt-0 rounded-b-lg ">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-8">
            <Link
              href="/"
              className="text-[#E6A5A5] text-xl lg:text-3xl font-semibold"
            >
              Logo
            </Link>
            <Separator orientation="vertical" className="h-8 mx-2" />
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <Link
                href="/explore"
                className="text-[#E6A5A5] flex items-center gap-2 text-sm"
              >
                <span>🏠</span> Explore
              </Link>
              <Link href="/create" className="flex items-center gap-2 text-sm">
                <span>✨</span> Create
              </Link>
              <Link href="/edit" className="text-sm flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pen"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  </svg>
                </span>
                Edit
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[280px] sm:w-[320px] bg-[#F8F9FA] border-gray-800 p-6"
              >
                <Sidebar
                  chatImageEnabled={chatImageEnabled}
                  setChatImageEnabled={setChatImageEnabled}
                  selectedChat={selectedChat}
                  setSelectedChat={setSelectedChat}
                  closeSidebar={() => setIsSidebarOpen(false)}
                >
                  <ChatList
                    selectedChat={selectedChat}
                    setSelectedChat={(chatId) => {
                      setSelectedChat(chatId);
                      setIsSidebarOpen(false);
                    }}
                  />
                </Sidebar>
              </SheetContent>
            </Sheet>
            <Button className="bg-[#E6A5A5] text-black hover:bg-[#d99595] ">
              Login
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden mx-4 mb-4">
        {/* Sidebar - Desktop */}
        <div className="hidden md:block w-[280px] lg:w-[320px] bg-[#F8F9FA] rounded-lg overflow-hidden">
          <div className="p-6 h-full overflow-y-auto">
            <Sidebar
              chatImageEnabled={chatImageEnabled}
              setChatImageEnabled={setChatImageEnabled}
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
            >
              <ChatList
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
              />
            </Sidebar>
          </div>
        </div>

        {/* Main Chat */}
        <div className="flex-1 bg-[#F8F9FA] rounded-lg ml-0 md:ml-4 overflow-hidden">
          <ChatArea
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 p-4 mx-4 mb-4 rounded-t-lg ">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-[#E6A5A5] text-xl lg:text-2xl font-semibold"
          >
            Logo
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-sm sm:text-base">Contact@00000000.tech</span>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-500 hover:text-black">
                <Send className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-black">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-black">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
