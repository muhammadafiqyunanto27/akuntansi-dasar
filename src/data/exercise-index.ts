import { exercisesByChapter } from './exercises';

const allExercises = exercisesByChapter.reduce(
  (acc, chapter) =>
    acc.concat(
      chapter.sections.flatMap((section) =>
        section.items.map((item) => ({
          id: item.id,
          chapter: chapter.chapter,
          title: item.title,
          question: item.question,
          parts: item.parts,
          explanation: item.explanation,
        }))
      )
    ),
  []
);

export const exerciseById = new Map(
  allExercises.map((ex) => [ex.id, ex])
);

export const allExercisesList = allExercises;

export function getExerciseIndex(id: string) {
  return allExercises.findIndex((ex) => ex.id === id);
}

export function getPrevExercise(id: string) {
  const index = getExerciseIndex(id);
  if (index <= 0) return null;
  return allExercisesList[index - 1];
}

export function getNextExercise(id: string) {
  const index = getExerciseIndex(id);
  if (index >= allExercisesList.length - 1) return null;
  return allExercisesList[index + 1];
}

export function getChapterForExercise(id: string) {
  const ex = exerciseById.get(id);
  return ex ? ex.chapter : null;
}