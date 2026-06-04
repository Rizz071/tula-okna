import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  // Разворачиваем встроенный массив правил Next.js Core Web Vitals
  ...nextVitals,
  
  // Добавляем глобальные исключения, чтобы линтер не проверял билд и кэш
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
];

export default eslintConfig;