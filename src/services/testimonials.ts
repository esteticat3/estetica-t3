import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface TestimonialData {
  name: string;
  treatment: string;
  testimonial: string;
  rating: number;
}

export class TestimonialService {
  // Obtener todas las reseñas aprobadas
  static async getApprovedTestimonials() {
    try {
      return await prisma.testimonial.findMany({
        where: {
          approved: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  }

  // Obtener reseñas limitadas para mostrar en homepage
  static async getFeaturedTestimonials(limit: number = 5) {
    try {
      return await prisma.testimonial.findMany({
        where: {
          approved: true
        },
        orderBy: {
          createdAt: 'desc'
        },
        take: limit
      });
    } catch (error) {
      console.error('Error fetching featured testimonials:', error);
      return [];
    }
  }

  // Crear nueva reseña (pendiente de aprobación)
  static async createTestimonial(data: TestimonialData) {
    try {
      return await prisma.testimonial.create({
        data: {
          ...data,
          approved: false // Por defecto no aprobada
        }
      });
    } catch (error) {
      console.error('Error creating testimonial:', error);
      throw error;
    }
  }

  // Aprobar reseña
  static async approveTestimonial(id: number) {
    try {
      return await prisma.testimonial.update({
        where: { id },
        data: { approved: true }
      });
    } catch (error) {
      console.error('Error approving testimonial:', error);
      throw error;
    }
  }

  // Obtener estadísticas de reseñas
  static async getTestimonialStats() {
    try {
      const total = await prisma.testimonial.count({
        where: { approved: true }
      });
      
      const averageRating = await prisma.testimonial.aggregate({
        where: { approved: true },
        _avg: {
          rating: true
        }
      });

      const ratingDistribution = await prisma.$queryRaw`
        SELECT rating, COUNT(*) as count 
        FROM "Testimonial" 
        WHERE approved = true 
        GROUP BY rating 
        ORDER BY rating DESC
      ` as Array<{ rating: number; count: number }>;

      return {
        total,
        averageRating: Number(averageRating._avg.rating) || 0,
        ratingDistribution
      };
    } catch (error) {
      console.error('Error getting testimonial stats:', error);
      return {
        total: 0,
        averageRating: 0,
        ratingDistribution: []
      };
    }
  }
}
