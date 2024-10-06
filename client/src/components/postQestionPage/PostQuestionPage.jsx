import classes from "./css/postPage.module.css";
import { IoArrowForwardCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PostQuestionPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    alert("question submitted");
    navigate("/");
  };
  return (
    <div className={classes.postPageContainer}>
      <div className={classes.steps}>
        <h3>Steps To Write A Good Question.</h3>
        <div className={classes.underline}></div>
        <ul className={classes.stepsContainer}>
          <li>
            <span>
              <IoArrowForwardCircle size={20} />
            </span>{" "}
            Summerize your problems in a one-line-title.
          </li>
          <li>
            <span>
              <IoArrowForwardCircle size={20} />
            </span>{" "}
            Describe your problem in more detail.
          </li>
          <li>
            <span>
              <IoArrowForwardCircle size={20} />
            </span>{" "}
            Describe what you tried and what you expected to happen.
          </li>
          <li>
            <span>
              <IoArrowForwardCircle size={20} />
            </span>{" "}
            Review your question and post it here.
          </li>
        </ul>
      </div>
      <h3 className={classes.postTitle}>Post Your Question</h3>
      <div>{}</div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Question title" />
        <textarea
          className={classes.textarea}
          placeholder="Question detail ..."
        />
        <button className={classes.button} type="submit">
          Post Question
        </button>
      </form>
    </div>
  );
};

export default PostQuestionPage;
