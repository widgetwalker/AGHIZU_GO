import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hello! I'm your medical assistant. How can I help you today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        try {
            const response = await fetch("http://localhost:3001/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: inputValue }),
            });

            const data = await response.json();

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: data.response || "I'm sorry, I couldn't process that.",
                sender: "bot",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "Sorry, I'm having trouble connecting. Please try again.",
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
                    size="icon"
                >
                    <MessageCircle className="h-6 w-6" />
                </Button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl flex flex-col z-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
                        <CardTitle className="text-lg font-semibold">Medical Assistant</CardTitle>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                            className="h-8 w-8"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
                        <ScrollArea className="flex-1 px-4" ref={scrollRef}>
                            <div className="space-y-4 py-4">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""
                                            }`}
                                    >
                                        <Avatar className="h-8 w-8 flex-shrink-0">
                                            <AvatarFallback>
                                                {message.sender === "user" ? "U" : "AI"}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div
                                            className={`rounded-lg px-4 py-2 max-w-[70%] break-words ${message.sender === "user"
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-muted"
                                                }`}
                                        >
                                            <p className="text-sm whitespace-pre-wrap break-words overflow-wrap-anywhere">
                                                {message.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex gap-3">
                                        <Avatar className="h-8 w-8 flex-shrink-0">
                                            <AvatarFallback>AI</AvatarFallback>
                                        </Avatar>
                                        <div className="rounded-lg px-4 py-2 bg-muted">
                                            <p className="text-sm">Typing...</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                        <div className="p-4 border-t flex-shrink-0">
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Ask a medical question..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                    className="flex-1"
                                />
                                <Button onClick={handleSendMessage} size="icon">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </>
    );
}
