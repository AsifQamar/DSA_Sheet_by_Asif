import { useState } from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { ChevronDown, ChevronRight, GripVertical } from 'lucide-react';
import { SubTopicItem } from './SubTopicItem';

export const TopicItem = ({ topic, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const totalQuestions = topic.subTopics.reduce((acc, sub) => acc + sub.questions.length, 0);
  const solvedQuestions = topic.subTopics.reduce((acc, sub) => acc + sub.questions.filter(q=>q.isSolved).length, 0);
  const progressPercent = totalQuestions === 0 ? 0 : (solvedQuestions / totalQuestions) * 100;

  return (
    <Draggable draggableId={topic.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="card card-dark mb-4 shadow-sm"
        >
          <div className="card-header border-0 d-flex align-items-center py-3" style={{ backgroundColor: '#161616' }}>
            <div {...provided.dragHandleProps} className="text-secondary me-3" style={{ cursor: 'grab' }}>
              <GripVertical size={20} />
            </div>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn btn-sm btn-outline-secondary me-3 border-0 rounded-circle p-1 d-flex align-items-center justify-content-center"
              style={{ width: '30px', height: '30px', color: '#ff5e00' }}
            >
              {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>

            <h4 className="h5 mb-0 flex-grow-1 fw-bold text-white">{topic.title}</h4>    
            <div className="d-none d-sm-block" style={{ width: '150px' }}>
               <div className="d-flex justify-content-between text-white mb-1" style={{ fontSize: '0.75rem', fontWeight: '500' }}>
                 <span>Progress</span>
                 <span>{Math.round(progressPercent)}%</span>
               </div>
               
               <div className="progress" style={{ height: '6px', backgroundColor: '#333333' }}>
                 <div 
                   className="progress-bar" 
                   role="progressbar" 
                   style={{ width: `${progressPercent}%`, backgroundColor: '#00ff6a' }}
                 ></div>
               </div>
            </div>
          </div>

          {isExpanded && (
            <Droppable droppableId={`subtopics::${topic.id}`} type="SUBTOPIC">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="card-body pt-0 pb-2"
                >
                  {topic.subTopics.map((sub, idx) => (
                    <SubTopicItem key={sub.id} subTopic={sub} index={idx} topicId={topic.id} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )}
        </div>
      )}
    </Draggable>
  );
};
