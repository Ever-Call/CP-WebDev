import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import { useComments } from "./hooks/useComments";

function App() {
  const { email, setEmail, comment, setComment, comments, handleSubmit } = useComments();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">Deixe seu comentário</h1>

        <CommentForm
          email={email}
          setEmail={setEmail}
          comment={comment}
          setComment={setComment}
          handleSubmit={handleSubmit}
        />

        <CommentList comments={comments} />
      </div>
    </div>
  );
}

export default App;
