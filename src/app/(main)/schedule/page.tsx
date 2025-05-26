// app/schedule-meeting/page.tsx
"use client";

import { useState } from "react";
import { MessageSquare, User, Phone } from "lucide-react";
import { ScheduleModal } from "../../../components/schedule/ScheduleModal";
import { HeroSection } from "../../../components/schedule/HeroSection";
import { MeetingTypeCard } from "../../../components/schedule/MeetingTypeCard";
import { ProcessStep } from "../../../components/schedule/ProcessStep";
import { CTASection } from "../../../components/schedule/CTASection";
import { SectionHeader } from "../../../components/schedule/SectionHeader";
import Footer from "../../../components/ui/Footer";

const ScheduleMeeting = () => {
  const [selectedMeeting, setSelectedMeeting] = useState<string | null>(null);

  const meetingTypes = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Consultation Call",
      duration: "30 min",
      description: "Discuss your project needs and get expert advice",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Discovery Session",
      duration: "60 min",
      description: "Deep dive into your requirements and solution design",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Technical Review",
      duration: "45 min",
      description: "Review existing systems and technical challenges",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Select Meeting Type",
      description: "Choose the purpose of our meeting from the options above",
    },
    {
      step: "2",
      title: "Pick Date & Time",
      description: "Select a convenient slot from our calendar",
    },
    {
      step: "3",
      title: "Provide Details",
      description: "Share your contact information and meeting notes",
    },
  ];

  return (
    <div className="bg-pink-50 min-h-screen">
      <HeroSection />

      {/* Meeting Types Section */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader
            subtitle="GET STARTED"
            title="Select Meeting Type"
            description="Choose the type of meeting that best suits your needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {meetingTypes.map((meeting, index) => (
              <MeetingTypeCard
                key={index}
                icon={meeting.icon}
                title={meeting.title}
                duration={meeting.duration}
                description={meeting.description}
                onClick={() => setSelectedMeeting(meeting.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-pink-50 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader subtitle="PROCESS" title="How It Works" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step.step}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection onScheduleClick={() => setSelectedMeeting("General Inquiry")} />

      {/* Modal */}
      {selectedMeeting && (
        <ScheduleModal
          meetingType={selectedMeeting}
          onClose={() => setSelectedMeeting(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default ScheduleMeeting;