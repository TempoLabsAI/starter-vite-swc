import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import AttendanceSelector from "./AttendanceSelector";
import ConfirmationStatus from "./ConfirmationStatus";

// Define the form schema with zod
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  attendance: z.enum(["bride", "groom", "both"], {
    required_error: "Please select which ceremony you will attend",
  }),
  dietaryRestrictions: z.string().optional(),
  plusOneName: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RSVPForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      attendance: undefined,
      dietaryRestrictions: "",
      plusOneName: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await addDoc(collection(db, "rsvps"), data);
      setFormData(data);
      setIsSubmitted(true);
    } catch (error) {
      alert("Failed to submit RSVP. Please try again.");
      console.error("Error adding document: ", error);
    }
  };

  if (isSubmitted && formData) {
    return <ConfirmationStatus formData={formData} />;
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-rose-600">RSVP</CardTitle>
        <CardDescription className="text-gray-500">
          Please confirm your attendance for Rebotile and Lizzy's wedding
          celebrations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attendance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which ceremony will you attend?</FormLabel>
                  <FormControl>
                    <AttendanceSelector
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dietaryRestrictions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dietary Restrictions (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please let us know if you have any dietary restrictions"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="plusOneName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plus One (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name of your plus one, if applicable"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full"
            >
              <Button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white"
              >
                Submit RSVP
              </Button>
            </motion.div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RSVPForm;
