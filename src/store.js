import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { transformSheetData } from './utils';

import sampleData from './assets/sheet.json';

export const useSheetStore = create(
  persist(
    (set) => ({
      data: transformSheetData(sampleData),

      toggleQuestionStatus: (topicId, subTopicId, questionId) => set((state) => {
        const newData = [...state.data];
        const topic = newData.find(t => t.id === topicId);
        const sub = topic?.subTopics.find(s => s.id === subTopicId);
        const q = sub?.questions.find(qu => qu.id === questionId);
        if (q) q.isSolved = !q.isSolved;
        return { data: newData };
      }),

      deleteQuestion: (topicId, subTopicId, questionId) => set((state) => {
        const newData = state.data.map(topic => {
          if (topic.id !== topicId) return topic;
          return {
            ...topic,
            subTopics: topic.subTopics.map(sub => {
              if (sub.id !== subTopicId) return sub;
              return {
                ...sub,
                questions: sub.questions.filter(q => q.id !== questionId)
              };
            })
          };
        });
        return { data: newData };
      }),

      addTopic: (title) => set((state) => ({
        data: [
          ...state.data,
          { id: `new-topic-${Date.now()}`, title, subTopics: [] }
        ]
      })),

      reorder: (result) => set((state) => {
        const { source, destination, type } = result;
        if (!destination) return state;

        const newData = [...state.data];

        if (type === 'TOPIC') {
          const [removed] = newData.splice(source.index, 1);
          newData.splice(destination.index, 0, removed);
          return { data: newData };
        }

        if (type === 'SUBTOPIC') {
          const topicIndex = newData.findIndex(t => t.id === source.droppableId.split('::')[1]);
          const topic = newData[topicIndex];
          const newSubTopics = [...topic.subTopics];
          const [removed] = newSubTopics.splice(source.index, 1);
          newSubTopics.splice(destination.index, 0, removed);
          newData[topicIndex] = { ...topic, subTopics: newSubTopics };
          return { data: newData };
        }

        if (type === 'QUESTION') {
          const [_, topicId, subId] = source.droppableId.split('::');

          const topicIndex = newData.findIndex(t => t.id === topicId);
          const subIndex = newData[topicIndex].subTopics.findIndex(s => s.id === subId);

          const subTopic = newData[topicIndex].subTopics[subIndex];
          const newQuestions = [...subTopic.questions];
          const [removed] = newQuestions.splice(source.index, 1);
          newQuestions.splice(destination.index, 0, removed);

          newData[topicIndex].subTopics[subIndex] = { ...subTopic, questions: newQuestions };
          return { data: newData };
        }

        return { data: newData };
      })
    }),
    {
      name: 'dsa-sheet-storage', // localStorage key — change this if you ever want to force a reset for all users
    }
  )
);
