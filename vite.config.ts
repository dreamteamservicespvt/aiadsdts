import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Load from .env files (local development)
    const env = loadEnv(mode, '.', '');
    
    // Helper to get env var from either Netlify (process.env) or local (.env files)
    const getEnv = (key: string) => process.env[key] || env[key] || '';
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // Legacy single API key
        'process.env.API_KEY': JSON.stringify(getEnv('GEMINI_API_KEY') || getEnv('API_KEY')),
        'process.env.GEMINI_API_KEY': JSON.stringify(getEnv('GEMINI_API_KEY')),
        // Multiple API keys for automatic fallback
        'process.env.API_KEY_1': JSON.stringify(getEnv('API_KEY_1')),
        'process.env.API_KEY_2': JSON.stringify(getEnv('API_KEY_2')),
        'process.env.API_KEY_3': JSON.stringify(getEnv('API_KEY_3')),
        'process.env.API_KEY_4': JSON.stringify(getEnv('API_KEY_4')),
        'process.env.API_KEY_5': JSON.stringify(getEnv('API_KEY_5')),
        'process.env.API_KEY_6': JSON.stringify(getEnv('API_KEY_6')),
        'process.env.API_KEY_7': JSON.stringify(getEnv('API_KEY_7')),
        'process.env.API_KEY_8': JSON.stringify(getEnv('API_KEY_8')),
        'process.env.API_KEY_9': JSON.stringify(getEnv('API_KEY_9')),
        'process.env.API_KEY_10': JSON.stringify(getEnv('API_KEY_10')),
        'process.env.API_KEY_11': JSON.stringify(getEnv('API_KEY_11')),
        'process.env.API_KEY_12': JSON.stringify(getEnv('API_KEY_12')),
        'process.env.API_KEY_13': JSON.stringify(getEnv('API_KEY_13')),
        'process.env.API_KEY_14': JSON.stringify(getEnv('API_KEY_14')),
        'process.env.API_KEY_15': JSON.stringify(getEnv('API_KEY_15')),
        'process.env.API_KEY_16': JSON.stringify(getEnv('API_KEY_16')),
        'process.env.API_KEY_17': JSON.stringify(getEnv('API_KEY_17')),
        'process.env.API_KEY_18': JSON.stringify(getEnv('API_KEY_18')),
        'process.env.API_KEY_19': JSON.stringify(getEnv('API_KEY_19')),
        'process.env.API_KEY_20': JSON.stringify(getEnv('API_KEY_20')),
        'process.env.API_KEY_21': JSON.stringify(getEnv('API_KEY_21')),
        'process.env.API_KEY_22': JSON.stringify(getEnv('API_KEY_22')),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
