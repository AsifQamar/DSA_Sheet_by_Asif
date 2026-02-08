import { Droppable, Draggable } from '@hello-pangea/dnd';
import { QuestionItem } from './QuestionItem';
import { useSheetStore } from '../store';
import classNames from 'classnames';

export const SubTopicItem = ({ subTopic, index, topicId }) => {
  const { toggleQuestionStatus, deleteQuestion } = useSheetStore();
  const solvedCount = subTopic.questions.filter(q => q.isSolved).length;

  return (
    <Draggable draggableId={subTopic.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="ms-md-4 ps-3 border-start mb-4 mt-3"
          style={{ borderColor: '#333' }}
        >
          <div className="d-flex align-items-center justify-content-between mb-3 ps-2">
            <h5 
              {...provided.dragHandleProps}
              className="mb-0 fw-bold" 
              style={{ cursor: 'grab', fontSize: '0.95rem', color: '#ccc' }}
            >
              {subTopic.title}
            </h5>
            <span className="badge bg-dark border border-secondary text-secondary" style={{ fontSize: '0.7rem' }}>
              {solvedCount} / {subTopic.questions.length}
            </span>
          </div>

          <Droppable droppableId={`questions::${topicId}::${subTopic.id}`} type="QUESTION">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="ps-2"
              >
                {subTopic.questions.map((q, idx) => (
                  <QuestionItem 
                    key={q.id} 
                    question={q} 
                    index={idx} 
                    topicId={topicId}
                    subTopicId={subTopic.id}
                    toggleStatus={toggleQuestionStatus}
                    onDelete={deleteQuestion}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};