import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 234,
    experience: "15 years",
    location: "New York, NY",
    available: "Today",
    fee: 120,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    rating: 4.8,
    reviews: 189,
    experience: "12 years",
    location: "Los Angeles, CA",
    available: "Tomorrow",
    fee: 100,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 5.0,
    reviews: 312,
    experience: "18 years",
    location: "Chicago, IL",
    available: "Today",
    fee: 110,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  },
  {
    name: "Dr. James Wilson",
    specialty: "General Physician",
    rating: 4.7,
    reviews: 156,
    experience: "10 years",
    location: "Houston, TX",
    available: "Today",
    fee: 90,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  },
  {
    name: "Dr. Priya Patel",
    specialty: "Psychiatrist",
    rating: 4.9,
    reviews: 278,
    experience: "14 years",
    location: "San Francisco, CA",
    available: "Tomorrow",
    fee: 150,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
  {
    name: "Dr. David Kim",
    specialty: "Orthopedic",
    rating: 4.8,
    reviews: 201,
    experience: "16 years",
    location: "Boston, MA",
    available: "Today",
    fee: 130,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }
];

const DoctorGrid = () => {
  return (
    <section id="doctors" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Meet Our <span className="text-primary">Expert Doctors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Board-certified specialists ready to provide you with exceptional care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all border-2 hover:border-primary/30">
              <CardHeader className="relative pb-0">
                <div className="flex items-start gap-4">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full bg-muted"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                    <Badge variant="secondary" className="mb-2">{doctor.specialty}</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold">{doctor.rating}</span>
                      <span className="text-muted-foreground">({doctor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{doctor.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Consultation Fee</p>
                    <p className="text-xl font-bold text-primary">${doctor.fee}</p>
                  </div>
                  <Badge variant={doctor.available === "Today" ? "default" : "secondary"}>
                    {doctor.available}
                  </Badge>
                </div>
                
                <Button className="w-full" variant="default">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorGrid;
