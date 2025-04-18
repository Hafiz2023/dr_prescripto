// app/specialties/[specialty]/page.tsx
import { notFound } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import AppointmentForm from '@/app/components/appointment-form'


interface Doctor {
  id: string
  name: string
  qualifications: string
  position: string
  bio: string
  image: string
}

interface SpecialtyData {
  name: string
  description: string
  doctors: Doctor[]
}

const specialtiesData: Record<string, SpecialtyData> = {
  rheumatology: {
    name: "Rheumatology",
    description: "Specialized care for chronic pain and inflammation including Arthritis, Lupus and Fibromyalgia.",
    doctors: [
      {
        id: "dr-hamdani",
        name: "Dr. Muhammad Afzal Hamdani",
        qualifications: "MBBS, FCPS (Medicine), FCPS (Rheumatologist), MRCP, Diploma in Cardiology",
        position: "Consultant Rheumatologist",
        bio: "With extensive training and experience in rheumatology, Dr. Hamdani provides comprehensive care for patients with complex autoimmune and inflammatory conditions.",
        image: "/doctor/doc1.png"
      },
      // Add more rheumatologists...
    ]
  },
  psychology: {
    name: "Psychology",
    description: "Mental health care and psychological services.",
    doctors: [
      {
        id: "dr-psych1",
        name: "Dr. Sarah Johnson",
        qualifications: "PhD in Clinical Psychology",
        position: "Senior Psychologist",
        bio: "Specializing in cognitive behavioral therapy and anxiety disorders.",
        image: "/doctor/doc2.png"
      },
      // Add more psychologists...
    ]
  },
  // Add all other specialties...
}

export default function SpecialtyPage({ params }: { params: { specialty: string } }) {
  const specialtyKey = params.specialty.toLowerCase()
  const specialty = specialtiesData[specialtyKey]
  
  if (!specialty) {
    return notFound()
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          {specialty.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {specialty.description}
        </p>
      </div>

      <div className="bg-blue-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our {specialty.name} Services</h2>
        <p className="text-gray-700">
          We offer specialized services in diagnosing and treating conditions related to {specialty.name}.
          Our expert team combines advanced medical technology with a patient-centered approach.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Our {specialty.name} Specialists
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialty.doctors.map((doctor) => (
            <div key={doctor.id} className="group relative">
              <Card className="hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-700">{doctor.name}</CardTitle>
                  <CardDescription className="italic text-gray-600">
                    {doctor.qualifications}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700">
                    {doctor.bio}
                  </p>
                  <p className="mt-4 font-medium">
                    <span className="text-blue-600">Position:</span> {doctor.position}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <AppointmentForm specialty={specialty.name} />
    </div>
  )
}