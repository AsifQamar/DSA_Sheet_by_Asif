import { Draggable } from '@hello-pangea/dnd';
import { GripVertical, Trash2, Circle, CheckCircle2 } from 'lucide-react'; 
import classNames from 'classnames';

const difficultyStyle = {
  Easy: { color: '#00b894', border: '1px solid #00b89440', bg: '#00b89410' },
  Medium: { color: '#fdcb6e', border: '1px solid #fdcb6e40', bg: '#fdcb6e10' },
  Hard: { color: '#ff7675', border: '1px solid #ff767540', bg: '#ff767510' },
};
const getFavicon = (url) => {  //uses to get logo
  try {
    if (!url) return null;
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  } catch (e) {
    return null;
  }
};

export const QuestionItem = ({ question, index, topicId, subTopicId, toggleStatus, onDelete }) => {
  const diffStyle = difficultyStyle[question.difficulty] || difficultyStyle.Medium;
  const platformLogo = getFavicon(question.url);

  return (
    <Draggable draggableId={question.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={classNames("question-item d-flex align-items-center p-3 mb-2 rounded", {
            "solved": question.isSolved,
            "shadow-lg": snapshot.isDragging
          })}
          style={{ ...provided.draggableProps.style }}
        >
          <div {...provided.dragHandleProps} className="text-secondary me-3 opacity-50 hover-opacity-100" style={{ cursor: 'grab' }}>
            <GripVertical size={16} />
          </div>

          <button 
            onClick={() => toggleStatus(topicId, subTopicId, question.id)}
            className="btn btn-link p-0 me-3 text-decoration-none transition-all"
            style={{ border: 'none' }}
          >
            {question.isSolved ? (
              <CheckCircle2 size={22} color="#ff5e00" fill="#ff5e0020" /> 
            ) : (
              <Circle size={22} color="#666" />
            )}
          </button>

          <div className="flex-grow-1 me-3 overflow-hidden">
            <h6 
              className={classNames("question-title mb-0 text-truncate", {
                "text-white": !question.isSolved,
                "text-secondary": question.isSolved 
              })} 
              style={{ fontSize: '0.9rem' }}
            >
              {question.title}
            </h6>
          </div>

          <a 
            href={question.url} 
            target="_blank" 
            rel="noreferrer" 
            className="me-3 d-flex align-items-center justify-content-center p-1 rounded hover-bg-light transition-all"
            style={{ width: '32px', height: '32px', backgroundColor: '#222' }}
            title="Open Problem"
          >
            {platformLogo ? (
              <img 
                src={platformLogo} 
                alt="Platform" 
                style={{ width: '18px', height: '18px', borderRadius: '2px' }} 
              />
            ) : (
              <div style={{ width: '18px', height: '18px', background: '#444', borderRadius: '50%' }} />
            )}
          </a>

          <span 
            className="badge me-3 fw-normal"   //for diffculty
            style={{ 
              backgroundColor: diffStyle.bg, 
              color: diffStyle.color, 
              borderColor: diffStyle.border,
              borderWidth: '1px',
              borderStyle: 'solid',
              minWidth: '60px'
            }}
          >
            {question.difficulty}
          </span>

          
          <button 
              onClick={() => onDelete(topicId, subTopicId, question.id)}
              className="btn btn-sm btn-outline-orange opacity-50 hover-opacity-100"
              title="Delete Question"
            >
            <Trash2 size={14} />
            </button>
        </div>
      )}
    </Draggable>
  );
};