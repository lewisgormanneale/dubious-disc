export function getFormattedGenerationName(generation: string): string {
  const FormattedGenerationNames: { [key: string]: string } = {
    'generation-i': 'Generation I',
    'generation-ii': 'Generation II',
    'generation-iii': 'Generation III',
    'generation-iv': 'Generation IV',
    'generation-v': 'Generation V',
    'generation-vi': 'Generation VI',
    'generation-vii': 'Generation VII',
    'generation-viii': 'Generation VIII',
    'generation-ix': 'Generation IX',
  };
  return FormattedGenerationNames[generation];
}