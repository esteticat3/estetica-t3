import { TestimonialService } from './src/services/testimonials.js';

async function testStats() {
  try {
    const stats = await TestimonialService.getTestimonialStats();
    console.log('📊 Estadísticas de Testimonios:');
    console.log('Total:', stats.total);
    console.log('Promedio:', stats.averageRating);
    console.log('Distribución:', stats.ratingDistribution);
    
    // Calcular promedio manualmente para verificar
    const testimonials = await TestimonialService.getApprovedTestimonials();
    const totalRatings = testimonials.reduce((sum, t) => sum + t.rating, 0);
    const manualAverage = totalRatings / testimonials.length;
    
    console.log('\n🔍 Verificación Manual:');
    console.log('Total reseñas:', testimonials.length);
    console.log('Suma de calificaciones:', totalRatings);
    console.log('Promedio manual:', manualAverage.toFixed(2));
    
    console.log('\n⭐ Calificaciones individuales:');
    testimonials.forEach(t => {
      console.log(`${t.name}: ${t.rating} estrellas`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testStats();
