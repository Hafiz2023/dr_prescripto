import Image from "next/image";

const doctors = [
  { id: 1, name: "Dr. Richard James", specialty: "General physician", image: "/doctor/doc1.png" },
  { id: 2, name: "Dr. Emily Larson", specialty: "Gynecologist", image: "/doctor/doc2.png" },
  { id: 3, name: "Dr. Sarah Patel", specialty: "Dermatologist", image: "/doctor/doc3.png" },
  { id: 4, name: "Dr. Christopher Lee", specialty: "Pediatricians", image: "/doctor/doc4.png" },
  { id: 5, name: "Dr. Jennifer Garcia", specialty: "Neurologist", image: "/doctor/doc5.png" },
  { id: 6, name: "Dr. Richard James", specialty: "General physician", image: "/doctor/doc6.png" },
  { id: 7, name: "Dr. Emily Larson", specialty: "Gynecologist", image: "/doctor/doc7.png" },
  { id: 8, name: "Dr. Sarah Patel", specialty: "Dermatologist", image: "/doctor/doc8.png" },
  { id: 9, name: "Dr. Christopher Lee", specialty: "Pediatricians", image: "/doctor/doc9.png" },
  { id: 10, name: "Dr. Jennifer Garcia", specialty: "Neurologist", image: "/doctor/doc10.png" },
  { id: 14, name: "Dr. Christopher Lee", specialty: "Pediatricians", image: "/doctor/doc14.png" },
  { id: 15, name: "Dr. Jennifer Garcia", specialty: "Neurologist", image: "/doctor/doc15.png" },
];

const Doctors = () => {
  return (
    <section className="py-12 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Trusted Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg shadow-lg p-4 text-center border border-gray-200 
                       transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={200}
                height={200}
                className="mx-auto transform transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="text-green-500 font-medium mt-3">● Available</p>
            <h3 className="text-lg font-semibold mt-2">{doctor.name}</h3>
            <p className="text-gray-500">{doctor.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
