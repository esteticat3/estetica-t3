import type { APIRoute } from 'astro';
import { TestimonialService } from '../../../../services/testimonials';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
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

    const { id } = JSON.parse(text);
    
    if (!id) {
      return new Response(JSON.stringify({ 
        error: 'ID de reseña requerido' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    await TestimonialService.approveTestimonial(parseInt(id));

    return new Response(JSON.stringify({
      success: true,
      message: 'Reseña aprobada exitosamente'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error approving testimonial:', error);
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
