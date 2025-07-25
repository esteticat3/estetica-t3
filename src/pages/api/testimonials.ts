import type { APIRoute } from 'astro';
import { TestimonialService } from '../../services/testimonials';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(JSON.stringify({ 
        error: 'Content-Type debe ser application/json' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const text = await request.text();
    if (!text) {
      return new Response(JSON.stringify({ 
        error: 'Body requerido' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const data = JSON.parse(text);
    
    // Validar datos
    if (!data.name || !data.treatment || !data.testimonial || !data.rating) {
      return new Response(JSON.stringify({ 
        error: 'Todos los campos son requeridos' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Validar rating
    if (data.rating < 1 || data.rating > 5) {
      return new Response(JSON.stringify({ 
        error: 'La calificación debe estar entre 1 y 5' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Crear la reseña
    const testimonial = await TestimonialService.createTestimonial({
      name: data.name.trim(),
      treatment: data.treatment.trim(),
      testimonial: data.testimonial.trim(),
      rating: parseInt(data.rating)
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Reseña enviada exitosamente',
      id: testimonial.id
    }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error creating testimonial:', error);
    return new Response(JSON.stringify({ 
      error: 'Error interno del servidor' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const GET: APIRoute = async () => {
  try {
    const testimonials = await TestimonialService.getApprovedTestimonials();
    return new Response(JSON.stringify(testimonials), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return new Response(JSON.stringify({ 
      error: 'Error interno del servidor' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
