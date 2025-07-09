// Tipos globais reutilizáveis

export type SectionProps = {
  icon: string;
  title: string;
};

export type LiteracyStats = {
  ageGroup: string;
  percentage: number;
};

export type ApiResponse<T> = {
  data: T;
  error?: string;
};