import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DoctorGrid from "@/components/DoctorGrid";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { useSession } from "@/lib/auth";
import { getDoctors } from "@/lib/supabase-queries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Video, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { data: session } = useSession();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [featuredDoctors, setFeaturedDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedDoctors();
  }, []);

  const loadFeaturedDoctors = async () => {
    try {
      // Get top-rated available doctors
      const doctors = await getDoctors({
        minRating: 4.0,
        availableToday: true,
      });
      
      // Sort by rating and take top 6
      const sorted = doctors
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 6);
      
      setFeaturedDoctors(sorted);
    } catch (error: any) {
      console.error("Error loading featured doctors:", error);
      // Don't show error toast, just continue without featured doctors
    } finally {
      setLoading(false);
    }
  };

  const handleBookAppointment = (doctor: any) => {
    if (!session) {
      toast({
        title: "Sign in required",
        description: "Please sign in to book an appointment",
      });
      navigate("/signin");
      return;
    }

    navigate("/consultation", {
      state: {
        selectedDoctor: {
          id: doctor.id,
          name: doctor.name,
          specialty: doctor.specialties[0]?.specialty || "General",
        },
      },
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      
      {/* Featured Doctors Section */}
      {loading ? (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          </div>
        </section>
      ) : featuredDoctors.length > 0 ? (
        <section className="py-16 bg-muted/50" id="featured-doctors">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Featured <span className="text-primary">Doctors</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Meet our top-rated healthcare professionals
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              {featuredDoctors.slice(0, 3).map((doctor) => (
                <Card
                  key={doctor.id}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => handleBookAppointment(doctor)}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={doctor.avatar} />
                        <AvatarFallback>
                          {doctor.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{doctor.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {doctor.rating.toFixed(1)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({doctor.ratingCount})
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {doctor.specialties.slice(0, 2).map((spec: any, idx: number) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {spec.specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={() => navigate("/doctors")}
                className="transition-all duration-300 hover:scale-105"
              >
                View All Doctors
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      <DoctorGrid />
      <Footer />
    </div>
  );
};

export default Index;
