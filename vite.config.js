import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs/promises';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/

export default defineConfig(() => ({
    plugins: [
        react(),
        svgr({
            // import svg as a component
            exportAsDefault: true,
        }),
        eslint(),
    ],
    server: {
        // open at the port
        port: 3000,
        // open the browser automatically
        open: true,
    },
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,
        // loader: "tsx",
        // include: /src\/.*\.[tj]sx?$/,
        exclude: [],
    },
    // this is used for using the .js extension in the vite as it only supports the .jsx extension
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: 'load-js-files-as-jsx',
                    setup(build) {
                        build.onLoad(
                            { filter: /src\/.*\.js$/ },
                            async (args) => ({
                                loader: 'jsx',
                                contents: await fs.readFile(args.path, 'utf8'),
                            })
                        );
                    },
                },
            ],
        },
    },
    // rename the entry point in vite -> set into the index.html
    // path alias in vite
    resolve: {
        alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
    },
}));
