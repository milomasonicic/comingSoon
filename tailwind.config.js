import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'homepage': "url('/public/images/bgLoop1.webp')",
                'hero1': "url('/public/images/hero1.webp')",
                'heroImage': "url('/public/images/imageHero.jpg')",
                'hero4': "url('/public/images/hero4.jpg')",
                'hero5': "url('/public/images/hero5.jpg')",
                'hero6': "url('/public/images/hero6.jpg')",
              },
        },
    },

    plugins: [forms],
};
