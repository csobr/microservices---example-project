import { defineConfig, loadEnv} from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
    plugins: [solidPlugin()],
    server: {
      host: true,
      port: 3000,
      hmr: {
        clientPort: process.env.VITE_CLIENT_PORT as unknown as number,
      }
    },
    build: {
      target: 'esnext',
    },
  })
}
