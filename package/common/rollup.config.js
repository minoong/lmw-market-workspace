import resolve from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image'
import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default {
 input: './src/index.ts',
 output: [
  {
   dir: 'dist',
   format: 'esm',
   exports: 'named',
   sourcemap: true,
  },
 ],
 preserveModules: true,
 plugins: [peerDepsExternal(), image(), resolve(), typescript({ useTsconfigDeclarationDir: true })],
}
