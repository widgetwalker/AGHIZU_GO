import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calendar, Video } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  symptoms: z.string().min(10, "Please describe your symptoms in detail"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  doctorId: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const Consultation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  // Load saved form data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("consultationForm");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      Object.keys(parsed).forEach((key) => {
        setValue(key as keyof ConsultationFormData, parsed[key]);
      });
    }
  }, [setValue]);

  // Check if doctor was selected from Doctors page
  useEffect(() => {
    if (location.state?.selectedDoctor) {
      setValue("doctorId", location.state.selectedDoctor.id);
      toast({
        title: "Doctor Selected",
        description: `${location.state.selectedDoctor.name} - ${location.state.selectedDoctor.specialty}`,
      });
    }
  }, [location.state, setValue, toast]);

  // Save form data to localStorage whenever it changes
  const formData = watch();
  useEffect(() => {
    localStorage.setItem("consultationForm", JSON.stringify(formData));
  }, [formData]);

  const onSubmit = (data: ConsultationFormData) => {
    console.log("Consultation booked:", data);
    
    toast({
      title: "Consultation Scheduled!",
      description: "You will receive a confirmation email shortly.",
    });
    
    // Clear saved form data
    localStorage.removeItem("consultationForm");
    
    // Navigate to confirmation or payment page
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleBrowseDoctors = () => {
    // Form data is already being saved to localStorage via useEffect
    navigate("/doctors", { state: { fromConsultation: true } });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/">
            <Button variant="ghost" className="mb-6 transition-all duration-300 hover:scale-105">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Book Your <span className="text-primary">Consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us about your symptoms and we'll match you with the right specialist
            </p>
          </div>

          <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Consultation Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      {...register("phone")}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="symptoms">Describe Your Symptoms *</Label>
                  <Textarea
                    id="symptoms"
                    placeholder="Please describe what you're experiencing..."
                    className={`min-h-32 ${errors.symptoms ? "border-destructive" : ""}`}
                    {...register("symptoms")}
                  />
                  {errors.symptoms && (
                    <p className="text-sm text-destructive">{errors.symptoms.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      {...register("date")}
                      className={errors.date ? "border-destructive" : ""}
                    />
                    {errors.date && (
                      <p className="text-sm text-destructive">{errors.date.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Input
                      id="time"
                      type="time"
                      {...register("time")}
                      className={errors.time ? "border-destructive" : ""}
                    />
                    {errors.time && (
                      <p className="text-sm text-destructive">{errors.time.message}</p>
                    )}
                  </div>
                </div>

                {location.state?.selectedDoctor && (
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-sm font-medium">Selected Doctor</p>
                    <p className="text-lg font-semibold text-primary">
                      {location.state.selectedDoctor.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {location.state.selectedDoctor.specialty}
                    </p>
                  </div>
                )}

                <div className="pt-4 space-y-3">
                  <Button type="submit" className="w-full transition-all duration-300 hover:scale-105 hover:shadow-xl" size="lg">
                    <Video className="w-4 h-4 mr-2" />
                    Schedule Video Consultation
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    size="lg"
                    onClick={handleBrowseDoctors}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Browse Available Doctors
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;
