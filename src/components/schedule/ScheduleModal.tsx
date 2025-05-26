// components/ScheduleModal.tsx
"use client";

import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone } from "lucide-react";
import { Modal } from "./Modal";
import { InputField } from "./InputField";
import { FormActions } from "./FormActions";

interface ScheduleModalProps {
  meetingType: string;
  onClose: () => void;
}

export const ScheduleModal = ({ meetingType, onClose }: ScheduleModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          meetingType, 
          ...formData,
          datetime: `${formData.date}T${formData.time}` 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create booking");
      }

      const result = await response.json();
      console.log("Booking created:", result);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal 
      title={`Schedule Your ${meetingType}`} 
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <InputField
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              label="Full Name"
              placeholder="John Doe"
              required
              icon={<User className="text-gray-400 w-5 h-5" />}
            />

            <InputField
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              required
              icon={<Mail className="text-gray-400 w-5 h-5" />}
            />

            <InputField
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              label="Phone Number"
              type="tel"
              placeholder="+1 (___) ___-____"
              icon={<Phone className="text-gray-400 w-5 h-5" />}
            />
          </div>

          <div className="space-y-4">
            <InputField
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              label="Meeting Date"
              type="date"
              required
              icon={<Calendar className="text-gray-400 w-5 h-5" />}
              min={new Date().toISOString().split('T')[0]} // Disable past dates
            />

            <InputField
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              label="Preferred Time"
              type="time"
              required
              icon={<Clock className="text-gray-400 w-5 h-5" />}
              min="09:00"
              max="17:00"
            />

            <InputField
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              label="Additional Notes"
              placeholder="Tell us about your project or specific topics you'd like to discuss..."
              textarea
            />
          </div>
        </div>

        {submitError && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex">
              <div className="text-red-500">
                <p className="text-sm">{submitError}</p>
              </div>
            </div>
          </div>
        )}

        <FormActions 
          onCancel={onClose} 
          submitText={isSubmitting ? "Scheduling..." : "Confirm Booking"}
          isSubmitting={isSubmitting}
        />
      </form>
    </Modal>
  );
};