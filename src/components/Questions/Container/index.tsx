import QuestionsList from "../List";
import QuestionsFilter from "../Filter";

const QuestionsContainer = () => {
  return (
    <div className="questions">
      <input
        type="text"
        placeholder="Поиск..."
      />
      <div className="questions-list">
        <div className="questions-list__header">
          <QuestionsFilter/>
          <span>Кол-во</span>
        </div>
        <QuestionsList/>
      </div>
    </div>
  );
};

export default QuestionsContainer;