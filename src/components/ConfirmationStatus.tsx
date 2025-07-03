import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  attendance: "bride" | "groom" | "both";
  dietaryRestrictions?: string;
  plusOneName?: string;
}

interface ConfirmationStatusProps {
  formData?: FormData;
}

const ConfirmationStatus = ({ formData }: ConfirmationStatusProps) => {
  const getAttendingEvents = (attendance: string) => {
    switch (attendance) {
      case "bride":
        return ["Bride's home (Oct 11)"];
      case "groom":
        return ["Groom's home (Oct 12)"];
      case "both":
        return ["Bride's home (Oct 11)", "Groom's home (Oct 12)"];
      default:
        return [];
    }
  };

  // Provide default data for preview/storyboard purposes
  const defaultFormData: FormData = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    attendance: "both",
    dietaryRestrictions: "No nuts please",
    plusOneName: "Jane Doe",
  };

  // Use provided formData or default data
  const displayData = formData || defaultFormData;

  // Add null check for attendance
  if (!displayData.attendance) {
    return (
      <Card className="w-full max-w-md mx-auto bg-white border-2 border-red-100 shadow-md">
        <CardContent className="pt-6 pb-8 px-6">
          <div className="text-center text-red-600">
            <p>
              Error: Missing form data. Please try submitting the form again.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const attendingEvents = getAttendingEvents(displayData.attendance);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const heartVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: [0, 1.2, 1],
      transition: { delay: 0.6, duration: 0.6 },
    },
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white border-2 border-pink-100 shadow-md">
      <CardContent className="pt-6 pb-8 px-6">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heartVariants} className="mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-gray-800 mb-2"
          >
            Thank You, {displayData.fullName}!
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-600 mb-4">
            Your RSVP has been successfully submitted.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="w-full bg-pink-50 rounded-lg p-4 mb-4"
          >
            <h3 className="font-medium text-gray-700 mb-2">
              Confirmation Details:
            </h3>
            <p className="text-gray-600 mb-1">Email: {displayData.email}</p>
            <p className="text-gray-600">Attending:</p>
            <ul className="list-disc list-inside text-gray-600 mt-1">
              {attendingEvents.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-2 text-pink-600"
          >
            <span className="text-2xl">♥</span>
            <p className="text-sm font-medium">
              We look forward to celebrating with you!
            </p>
            <span className="text-2xl">♥</span>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default ConfirmationStatus;
