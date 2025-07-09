import { pages } from 'next/dist/build/templates/app-page';
import React from 'react';

// Exemplo de implementação do componente SectionTitle
const SectionTitle = ({ icon, title }) => (
  <h2>
    <span style={{ marginRight: '8px' }}>{icon}</span>
    {title}
  </h2>
);

// Uso do componente com emoji como ícone
const App = () => (
  <div>
    <SectionTitle icon="🔴" title="Vulnerabilidade" />
  </div>
);

export default App;