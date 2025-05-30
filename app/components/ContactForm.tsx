'use client';

import { useState, FormEvent } from 'react';
import { Send, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string | null;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'loading', message: null });

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormState({ status: 'error', message: 'Please fill in all fields.' });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormState({ status: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormState({ status: 'success', message: result.message || 'Your message has been sent!' });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setFormState({ status: 'error', message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setFormState({ status: 'error', message: 'An unexpected error occurred. Please try again.' });
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-softOffWhite flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-nearBlack mb-6">
          Let's Work Together
        </h2>
        <p className="text-lg text-darkGray mb-12">
          Have a project in mind or just want to say hello? Send us a note.
        </p>
      </div>

      <div className="max-w-xl w-full bg-warmLightGray p-8 sm:p-12 rounded-lg shadow-lg relative overflow-hidden">
        {/* Decorative element - like a letter flap or subtle pattern */}
        <div className="absolute top-0 left-0 w-full h-2 bg-mutedTerracotta opacity-50"></div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-nearBlack mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-softOffWhite border border-d3cfc9 rounded-md shadow-sm placeholder-darkGray/50 focus:ring-mutedTerracotta focus:border-mutedTerracotta transition-colors duration-300"
              placeholder="What should we call you?"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-nearBlack mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-softOffWhite border border-d3cfc9 rounded-md shadow-sm placeholder-darkGray/50 focus:ring-mutedTerracotta focus:border-mutedTerracotta transition-colors duration-300"
              placeholder="Where can we reach you?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-nearBlack mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-softOffWhite border border-d3cfc9 rounded-md shadow-sm placeholder-darkGray/50 focus:ring-mutedTerracotta focus:border-mutedTerracotta transition-colors duration-300 resize-none"
              placeholder="Tell us your story, your idea, or just say hi!"
            ></textarea>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button
              type="submit"
              disabled={formState.status === 'loading'}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-softOffWhite bg-mutedTerracotta hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mutedTerracotta transition-all duration-300 group disabled:bg-darkGray/50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            >
              {formState.status === 'loading' ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Send className="mr-2 h-5 w-5 transform transition-transform duration-300 group-hover:rotate-[-15deg]" />
              )}
              {formState.status === 'loading' ? 'Sending...' : "Let's design your story"}
            </button>

            {formState.message && (
              <div
                className={`mt-4 p-3 rounded-md text-sm flex items-center 
                  ${formState.status === 'success' ? 'bg-success/10 text-success' : ''}
                  ${formState.status === 'error' ? 'bg-error/10 text-error' : ''}
                `}
              >
                {formState.status === 'success' && <CheckCircle className="mr-2 h-5 w-5" />}
                {formState.status === 'error' && <AlertTriangle className="mr-2 h-5 w-5" />}
                {formState.message}
              </div>
            )}
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-darkGray">
            Find us on Instagram: 
            <a 
              href="https://instagram.com/hueneu_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-mutedTerracotta hover:text-brandCoral transition-colors duration-300 ml-1"
            >
              @hueneu_
            </a>
          </p>
          {/* Optional: Link to services deck or "Who Knew?" visual */}
          {/* 
          <p className="mt-4 text-sm text-darkGray">
            Explore our <a href="#" className="underline hover:text-mutedTerracotta">Services Deck</a> or see a <a href="#story" className="underline hover:text-mutedTerracotta">"Who Knew?" moment</a>.
          </p>
          */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
