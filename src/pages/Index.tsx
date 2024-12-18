import { useState } from "react";
import { GreetingForm } from "@/components/GreetingForm";
import { GreetingCard } from "@/components/GreetingCard";

const Index = () => {
  const [greeting, setGreeting] = useState<{ name: string; message: string } | null>(null);

  const handleSubmit = (name: string, message: string) => {
    setGreeting({ name, message });
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary animate-fade-in">
          Fun Greeting Vibes
        </h1>
        
        <div className="space-y-8">
          <GreetingForm onSubmit={handleSubmit} />
          
          {greeting && (
            <GreetingCard
              name={greeting.name}
              message={greeting.message}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;