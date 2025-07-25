import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const testimonials = [
    {
      name: "María González",
      treatment: "Rellenos Labiales",
      testimonial: "Excelente atención y resultados increíbles. Mis labios se ven completamente naturales y el procedimiento fue muy cómodo. 100% recomendado.",
      rating: 5,
      approved: true
    },
    {
      name: "Ana Martínez",
      treatment: "Botox Preventivo",
      testimonial: "El personal es muy profesional y las instalaciones impecables. Me siento mucho más segura con mi apariencia. Volveré sin duda.",
      rating: 5,
      approved: true
    },
    {
      name: "Carmen López",
      treatment: "Limpieza Facial",
      testimonial: "Desde la primera sesión noté una gran diferencia en mi piel. El trato es excelente y los resultados superaron mis expectativas.",
      rating: 5,
      approved: true
    },
    {
      name: "Sofía Hernández",
      treatment: "Rellenos de Ojeras",
      testimonial: "Por fin encontré el lugar perfecto para mis tratamientos. La Dra. es muy cuidadosa y el resultado es exactamente lo que esperaba.",
      rating: 5,
      approved: true
    },
    {
      name: "Laura Jiménez",
      treatment: "Peeling Químico",
      testimonial: "Mi piel ha mejorado muchísimo después del tratamiento. El ambiente es muy relajante y profesional. Definitivamente regresaré.",
      rating: 5,
      approved: true
    },
    {
      name: "Claudia Ruiz",
      treatment: "Mesoterapia Facial",
      testimonial: "Los resultados han sido espectaculares. Mi piel luce más joven y radiante. El equipo médico es muy profesional y cuidadoso.",
      rating: 5,
      approved: true
    },
    {
      name: "Fernanda Torres",
      treatment: "Radiofrecuencia",
      testimonial: "Me encantó el tratamiento, se nota la diferencia desde la primera sesión. Recomiendo ampliamente esta clínica.",
      rating: 4,
      approved: true
    },
    {
      name: "Patricia Vega",
      treatment: "Criolipólisis",
      testimonial: "Estoy muy contenta con los resultados. El personal es muy amable y profesional. Sin duda volveré para más tratamientos.",
      rating: 5,
      approved: true
    }
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: testimonial
    });
  }

  console.log('✅ Base de datos poblada con reseñas de ejemplo');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
