import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, Star, MapPin, Video, Calendar, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { getDoctors } from "@/lib/supabase-queries";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Doctors = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    loadDoctors();
  }, []);

  useEffect(() => {
    filterDoctors();
  }, [doctors, searchQuery, specialtyFilter, availabilityFilter]);

  const loadDoctors = async () => {
    setLoading(true);
    try {
      const data = await getDoctors();
      setDoctors(data);
      setFilteredDoctors(data);
    } catch (error: any) {
      console.error("Error loading doctors:", error);
      toast({
        title: "Error",
        description: "Failed to load doctors. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterDoctors = () => {
    let filtered = [...doctors];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (doc) =>
          doc.name.toLowerCase().includes(query) ||
          doc.specialties.some((s: any) =>
            s.specialty.toLowerCase().includes(query)
          ) ||
          doc.bio?.toLowerCase().includes(query)
      );
    }

    // Specialty filter
    if (specialtyFilter !== "all") {
      filtered = filtered.filter((doc) =>
        doc.specialties.some(
          (s: any) => s.specialty.toLowerCase() === specialtyFilter.toLowerCase()
        )
      );
    }

    // Availability filter
    if (availabilityFilter !== "all") {
      filtered = filtered.filter((doc) => doc.available);
    }

    setFilteredDoctors(filtered);
  };

  const handleBookAppointment = (doctor: any) => {
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

  const handleViewProfile = (doctor: any) => {
    // Navigate to doctor profile page or show modal
    toast({
      title: "Doctor Profile",
      description: `Viewing profile of ${doctor.name}`,
    });
  };

  const specialties = Array.from(
    new Set(
      doctors.flatMap((doc) => doc.specialties.map((s: any) => s.specialty))
    )
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-6 transition-all duration-300 hover:scale-105">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Find Your <span className="text-primary">Perfect Doctor</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Search from our network of certified healthcare professionals
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search by name, specialty, or condition..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  {specialties.map((spec) => (
                    <SelectItem key={spec} value={spec.toLowerCase()}>
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={availabilityFilter}
                onValueChange={setAvailabilityFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Times</SelectItem>
                  <SelectItem value="available">Available Now</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : filteredDoctors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No doctors found matching your criteria
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSpecialtyFilter("all");
                  setAvailabilityFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredDoctors.map((doctor) => (
                <Card
                  key={doctor.id}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105"
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
                            ({doctor.ratingCount} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {doctor.specialties.slice(0, 2).map((spec: any, idx: number) => (
                          <Badge key={idx} variant="secondary">
                            {spec.specialty}
                          </Badge>
                        ))}
                        {doctor.specialties.length > 2 && (
                          <Badge variant="outline">
                            +{doctor.specialties.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {doctor.bio && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {doctor.bio}
                      </p>
                    )}

                    <div className="space-y-2 text-sm">
                      {doctor.experience > 0 && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {doctor.experience} years experience
                        </div>
                      )}
                      {(doctor.city || doctor.state) && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {[doctor.city, doctor.state].filter(Boolean).join(", ")}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground">Consultation Fee</p>
                        <p className="text-lg font-bold">₹{doctor.fee}</p>
                      </div>
                      <Badge
                        variant={doctor.available ? "default" : "secondary"}
                      >
                        {doctor.available ? "Available" : "Busy"}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewProfile(doctor)}
                      >
                        View Profile
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleBookAppointment(doctor)}
                        disabled={!doctor.available}
                      >
                        <Video className="w-4 h-4 mr-1" />
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
