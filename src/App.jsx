// src/App.jsx
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { useSheetStore } from './store';
import { TopicItem } from './components/TopicItem';
import { Plus, Terminal } from 'lucide-react';

function App() {
  const { data, reorder, addTopic } = useSheetStore();

  const handleDragEnd = (result) => {
    reorder(result);
  };

  const handleAddTopic = () => {
    const name = prompt("Enter topic name:");
    if(name) addTopic(name);
  };

  return (
    <div className="min-vh-100 py-5">
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-5 border-bottom border-secondary pb-4">
          <div className="d-flex align-items-center gap-3">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFb1lnVqiOg4LwQUB4lX-lMr0Cyl_U4CYeiasW_59ybQ&s" 
                alt="Logo" 
                 style={{ height: '50px', borderRadius: '4px' }} 
            />
            <div>
              <h1 className="fw-bolder display-6 mb-0 text-white">DSA <span style={{ color: '#ff5e00' }}>Sheet</span></h1>
              <p className="text-secondary mb-0">Master algorithms! Be consistent.</p>
            </div>
          </div>
          <button 
            onClick={handleAddTopic}
            className="btn btn-orange d-flex align-items-center gap-2 mt-3 mt-md-0 shadow-lg"
          >
            <Plus size={18} />
            New Topic
          </button>
        </div>

        {/* Main Content */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="all-topics" type="TOPIC">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.map((topic, index) => (
                  <TopicItem key={topic.id} topic={topic} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {data.length === 0 && (
          <div className="text-center py-5 text-secondary border border-dashed border-secondary rounded mt-4">
            <p className="lead mb-0">No topics found. Start your grind!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
