export const DEFAULT_SUBJECT_OPTIONS = [
  "Infantil",
  "Lingua Portuguesa",
  "Leitura",
  "Redacao",
  "Matematica",
  "Historia",
  "Geografia",
  "Ciencias",
  "Tecnologia",
  "Fisica",
  "Latim",
  "Frances",
  "Ingles",
  "Filosofia",
  "Catecismo",
  "Artes",
  "Musica",
] as const;

export const CLASS_GROUP_OPTIONS = [
  "Infantil",
  "1 ano Fundamental",
  "2 ano Fundamental",
  "3 ano Fundamental",
  "4 ano Fundamental",
  "5 ano Fundamental",
  "6 ano Fundamental",
  "7 ano Fundamental",
  "8 ano Fundamental",
  "9 ano Fundamental",
  "1 ano Medio",
  "2 ano Medio",
  "3 ano Medio",
] as const;

export type SubjectOption = {
  id: string;
  name: string;
};

export type ClassGroupOption = (typeof CLASS_GROUP_OPTIONS)[number];

const CLASS_GROUP_SET = new Set<string>(CLASS_GROUP_OPTIONS);

export function isClassGroupOption(value: string): value is ClassGroupOption {
  return CLASS_GROUP_SET.has(value);
}
